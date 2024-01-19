import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "../../../src/axios";
import Events from "./News";
import Loader from "@/pages/component/Loader";
import ErrorScreen from "@/pages/component/ErrorScreen";
import Header from "@/pages/component/Header";
import Footer from "@/pages/component/Footer";
import EventHeading from "../EventHeading";
import CustomHead from "@/pages/CustomHead";
import { fetchPageData } from "../../api";

export async function getServerSideProps({ query }) {
  try {
    const { type } = query;

    const axiosConfig = {
      method: "get",
      url: `/events/sponsoring?page=1&type=${type || "all"}`,
      headers: {
        Accept: "application/json",
      },
    };

    const response = await axios(axiosConfig);
    const data = await response.data;
    const initialNewsData = data.data;  
    //console.log(initialNewsData)

    const keyid = 'sponsoring';
    const pageData = await fetchPageData(keyid); 

    return {
      props: {
        initialNewsData,pageData
      },
    };
  } catch (err) {
    console.error(err.message || "Something went wrong");  
  }
}




const sponsoring = ({ initialNewsData, pageData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasErr, setHasErr] = useState(false);
  const [newsData, setNewsData] = useState({ ...initialNewsData });
  const [pagination, setPagination] = useState(1);
  const router = useRouter();
  const { type } = router.query; // Access query parameter "type"


  const incrementPagination = () => {
    setPagination((prev) => prev + 1);
  };



  useEffect(() => {
  
    const fetchNewsData = async () => {
      try {
        setHasErr(false);
        setIsLoading(true);

        const axiosConfig = {
          method: "get",
          url: `/events/sponsoring?page=${pagination}&type=${type || "all"}`,
          headers: {
            Accept: "application/json",
          },
        };

        const response = await axios(axiosConfig);
        const data = await response.data;
     //   console.log("API Data:", data);
       

        if (data.status !== 200) {
          throw new Error(data.error);
        }

        if (pagination > 1) {
          // If it's not the first fetch
          setNewsData((prev) => {
            return { ...prev, events: [...prev.events, ...data.data.events] };
          });
        } 
      } catch (err) {
        setHasErr(true);
      } finally {
        setIsLoading(false);
      }
    };

    // Fetch only when pagination is greater than 1
    if (pagination > 1) {
      fetchNewsData();
    }
  }, [pagination, type]);

  return (
    <>  
    <CustomHead {...pageData} />
      <Header />
      <EventHeading />
      {isLoading && <Loader />}
      {hasErr ? <ErrorScreen /> : null}
      {newsData && !hasErr && type === "all" || type === "past" || type === "upcoming" ? (
        <Events newsData={newsData} incrementPagination={incrementPagination} type={type} />
      )  : null}
      <Footer />
    </>
  );
};

export default sponsoring;
