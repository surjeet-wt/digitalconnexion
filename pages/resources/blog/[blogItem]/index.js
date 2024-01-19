import React from "react";

import axios from "@/src/axios";
import Header from "@/pages/component/Header";
import Footer from "@/pages/component/Footer";
import BlogItemPage from "./BlogItemPage";

export async function getServerSideProps(context) {
  const { query } = context;
  const blogItem = query.blogItem;

  let blogData = {};

  //Get blog data on server side
  try {
    const axiosConfig = {
      method: "get",
      url: `/blog/${blogItem}`,
      headers: {
        Accept: "application/json",
      },
    };

    const response = await axios(axiosConfig);
    const data = await response.data;
    blogData = data.data;
  } catch (err) {
    console.log(err.message || "Something went wrong");
  }

  // Pass the fetched data as props
  return {
    props: {
      blogData,
    },
  };
}

const BlogItemIndex = ({ blogData }) => {
  return (
    <>
      <Header />
      <BlogItemPage blogData={blogData} />
      <Footer />
    </>
  );
};

export default BlogItemIndex;
