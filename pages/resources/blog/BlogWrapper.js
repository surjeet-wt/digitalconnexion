import React, { useEffect, useState } from "react";
import axios from "@/src/axios";
import Loader from "@/pages/component/Loader";
import ErrorScreen from "@/pages/component/ErrorScreen";
import ResourcesHeading from "../ResourcesHeading";
import BlogCategorySwitcher from "./BlogCategorySwitcher";
import Header from "@/pages/component/Header";
import Footer from "@/pages/component/Footer";

const BlogWrapper = ({ initialBlogsData, blogLinks }) => {
  const [isloadingLinks, setIsLoadingLinks] = useState(false);
  const [linksHasErr, setLinksHasErr] = useState(false);

  const [isloadingBlogs, setIsLoadingBlogs] = useState(false);
  const [blogsHasErr, setBlogsHasErr] = useState(false);
  const [blogsData, setBlogsData] = useState(initialBlogsData);

  const isLoading = isloadingLinks || isloadingBlogs ? true : false;
  const hasErr = linksHasErr || blogsHasErr ? true : false;

  const [pagination, setPagination] = useState(1);

  const incrementPagination = () => {
    setPagination((prev) => {
      return prev + 1;
    });
  };

  useEffect(() => {
    const fetchBlogsData = async () => {
      try {
        setBlogsHasErr(false);
        setIsLoadingBlogs(true);

        const axiosConfig = {
          method: "get",
          url: `/blog?page=${pagination}`,
          headers: {
            Accept: "application/json",
          },
        };

        const response = await axios(axiosConfig);
        const data = await response.data;

        if (data.status !== 200) {
          throw new Error(data.error);
        }

        setBlogsData((prev) => {
          return {
            ...data.data,
            blogList: [...prev.blogList, ...data.data.blogList],
          };
        });
      } catch (err) {
        setBlogsHasErr(true);
        console.log(err.message);
      } finally {
        setIsLoadingBlogs(false);
      }
    };
    if (pagination > 1) {
      fetchBlogsData();
    }
  }, [pagination]);

  return (
    <>
      <Header />
      <ResourcesHeading />
      {isLoading && <Loader />}
      {hasErr && <ErrorScreen />}
      {blogsData && !hasErr ? (
        <BlogCategorySwitcher
          blogLinks={blogLinks}
          blogsData={blogsData}
          incrementPagination={incrementPagination}
        />
      ) : null}
      <Footer />
    </>
  );
};

export default BlogWrapper;
