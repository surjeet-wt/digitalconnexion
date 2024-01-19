import React from "react";
import axios from "../../../../src/axios";

import NewsItemPage from "./NewsItemPage";
import Header from "@/pages/component/Header";
import Footer from "@/pages/component/Footer";

export async function getServerSideProps(context) {
  const { query } = context;
  const newsItem = query.newsItem;

  let newsData = {};

  //fetch news item data on server side
  try {
    const axiosConfig = {
      method: "get",
      url: `/event/${newsItem}`,
      headers: {
        Accept: "application/json",
      },
    };
    const response = await axios(axiosConfig);
    const data = await response.data;
    newsData = data.data.event[0];
  } catch (err) {
    console.log(err.message || "Something went wrong");
  }

  // Pass the fetched data as props
  return {
    props: {
      newsData,
    },
  };
}

const NewsItemIndex = ({ newsData }) => {
  return (
    <>
      <Header />
      <NewsItemPage newsItem={newsData} />
      <Footer />
    </>
  );
};

export default NewsItemIndex;
