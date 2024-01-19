import React, { useEffect, useState } from "react";
import axios from "@/src/axios";
import ResourcesHeading from "../ResourcesHeading";
import Loader from "@/pages/component/Loader";
import ErrorScreen from "@/pages/component/ErrorScreen";
import Header from "@/pages/component/Header";
import Footer from "@/pages/component/Footer";
import News from "./News";
import CustomHead from "@/pages/CustomHead";
import { fetchPageData } from "../../api";

export async function getServerSideProps() {
  try {
    const axiosConfig = {
      method: "get",
      url: "/press-release",
      headers: {
        Accept: "application/json",
      },
    };

    const response = await axios(axiosConfig);
    const data = await response.data;

    // Fetch page-specific data
    const keyid = 'news';
    const pageData = await fetchPageData(keyid);

    if (data.status !== 200) {
      throw new Error(data.error);
    }

    return {
      props: {
        newsData: data.data.pr, pageData
      },
    };
  } catch (err) {
    console.log(err.message || "Something went wrong");
    return {
      props: {
        newsData: [],
      },
    };
  }
}

const NewsWrapper = ({ newsData,pageData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasErr, setHasErr] = useState(false);
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
          url: `/press-release?page=${pagination}`,
          headers: {
            Accept: "application/json",
          },
        };

        const response = await axios(axiosConfig);
        const data = await response.data;

        if (data.status !== 200) {
          throw new Error(data.error);
        }

        if (pagination > 1) {
          // If it's not the first fetch
          setNewsData((prev) => {
            return [...prev, ...data.data.pr];
          });
        } else {
          // If it's the first fetch
          setNewsData(data.data.pr);
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
  }, [pagination]);

  // Check if there are more news articles
  const moreNewsExist = newsData.length < pagination * 10; // Assuming 10 news articles per page

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
