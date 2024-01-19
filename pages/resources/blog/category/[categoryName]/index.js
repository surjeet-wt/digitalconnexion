import React from "react";
import axios from "@/src/axios";
import BlogCategory from "./BlogCategory";
import BlogLayout from "../../BlogLayout";
import ResourcesHeading from "@/pages/resources/ResourcesHeading";
import Header from "@/pages/component/Header";
import Footer from "@/pages/component/Footer";
import BlogCategoryNavbar from "../../BlogCategoryNavbar";

export async function getServerSideProps(context) {
  const { query } = context;
  const categoryName = query.categoryName;

  let initialCategoryData = { blogList: [] };
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

  //Get blogs based on category
  try {
    const axiosConfig = {
      method: "get",
      url: `/blog/category/${categoryName}/?page=1`,
      headers: {
        Accept: "application/json",
      },
    };

    const response = await axios(axiosConfig);
    const data = await response.data;
    initialCategoryData = data.data;
  } catch (err) {
    console.log(err.message || "Something went wrong");
  }

  // Pass the fetched data as props
  return {
    props: {
      categoryName,
      initialCategoryData,
      blogLinks,
    },
  };
}

const BlogCategoryIndex = ({
  categoryName,
  initialCategoryData,
  blogLinks,
}) => {
  return (
    <>
      <Header />
      <ResourcesHeading />
      <BlogCategoryNavbar blogLinks={blogLinks} categoryName={categoryName} />
      <BlogLayout categoryLinks={blogLinks}>
        <BlogCategory
          categoryName={categoryName}
          initialCategoryData={initialCategoryData}
          blogLinks={blogLinks}
        />
      </BlogLayout>
      <Footer />
    </>
  );
};

export default BlogCategoryIndex;
