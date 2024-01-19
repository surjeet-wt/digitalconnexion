import React from "react";
import BlogWrapper from "./BlogWrapper";
import axios from "@/src/axios";
import CustomHead from "@/pages/CustomHead";
import { fetchPageData } from "../../api";

export async function getServerSideProps() {
  let initialBlogsData = {};
  let blogLinks = [];

  //Get blog categories via SSR
  try {
    const axiosConfig = {
      method: "get",
      url: "/category",
      headers: {
        Accept: "application/json",
      },
    };

    const response = await axios(axiosConfig);
    const data = await response.data;
    blogLinks = data.data;
  } catch (err) {
    console.log(err.message || "Something went wrong");
  }

  //Get first blog fetch for SSR
  try {
    const axiosConfig = {
      method: "get",
      url: "/blog?page=1",
      headers: {
        Accept: "application/json",
      },
    };

    const response = await axios(axiosConfig);
    const data = await response.data;
    initialBlogsData = data.data;
  } catch (err) {
    console.log(err.message || "Something went wrong");
  }

  // Pass the fetched data as props

  const keyid = 'news';
  const pageData = await fetchPageData(keyid);

  return {
    props: {
      initialBlogsData,
      blogLinks,
      pageData
    },
  };
}

const index = ({ initialBlogsData, blogLinks, pageData }) => {
  console.log("blogLinks", blogLinks);
  console.log("initialBlogsData", initialBlogsData);
  return (
      <>
      <CustomHead {...pageData}/>
      <BlogWrapper initialBlogsData={initialBlogsData} blogLinks={blogLinks} />
      </>
  );
};

export default index;
