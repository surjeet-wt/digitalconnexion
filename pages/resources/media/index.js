import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import axios from "@/src/axios";
import ResourcesHeading from "../ResourcesHeading";
import News from "./News";

import Loader from "@/pages/component/Loader";
import ErrorScreen from "@/pages/component/ErrorScreen";
import Header from "@/pages/component/Header";
import Footer from "@/pages/component/Footer";
import CustomHead from "@/pages/CustomHead";
import { fetchPageData } from "../../api";

export async function getServerSideProps() {
  try {
    const axiosConfig = {
      method: "get",
      url: "/media?page=1",
      headers: {
        Accept: "application/json",
      },
    };

    const response = await axios(axiosConfig);
    const data = await response.data;
    const initialNewsData = data.data;

    // Fetch page-specific data
    const keyid = 'media';
    const pageData = await fetchPageData(keyid);

    // Pass the fetched data as props
    return {
      props: {
        initialNewsData, pageData
      },
    };
  } catch (err) {
    console.log(err.message || "Something went wrong");
  }
}

const NewsWrapper = ({ initialNewsData,  pageData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasErr, setHasErr] = useState(false);
  const [newsData, setNewsData] = useState({ ...initialNewsData });
  const [pagination, setPagination] = useState(1);

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
          url: `/media?page=${pagination}`,
          headers: {
            Accept: "application/json",
          },
        };

        const response = await axios(axiosConfig);
        const data = await response.data;

        if (data.status !== 200) {
          throw new Error(data.error);
        }

        setNewsData((prev) => {
          return { ...data.data, news: [...prev.news, ...data.data.news] };
        });
      } catch (err) {
        setHasErr(true);
      } finally {
        setIsLoading(false);
      }
    };

    //fetch only when pagination is greater than 1
    if (pagination > 1) {
      fetchNewsData();
    }
  }, [pagination]);

  return (
    <>
     
      <CustomHead {...pageData}/>
      <Header />
      <ResourcesHeading />
      {isLoading && <Loader />}
      {hasErr && <ErrorScreen />}
      {newsData && !hasErr ? (
        <News newsData={newsData} incrementPagination={incrementPagination} />
      ) : null}
      <Footer />
    </>
  );
};

export default NewsWrapper;


