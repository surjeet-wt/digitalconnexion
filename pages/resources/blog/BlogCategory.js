import React, { useEffect, useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import Link from "next/link";

import axios from "@/src/axios";
import HTMLRenderer from "@/src/htmlRenderer";
import truncateText from "@/src/truncateText";
import { blogUrlPrefix } from "@/src/api";

import Loader from "@/pages/component/Loader";
import ErrorScreen from "@/pages/component/ErrorScreen";
import NoDataExist from "@/pages/component/NoDataExist";

const BlogCategory = ({ categoryName }) => {
  const initialCategoryData = { blogList: [] };
  const [isLoading, setIsLoading] = useState(false);
  const [hasErr, setHasErr] = useState(false);
  const [categoryData, setCategoryData] = useState(initialCategoryData);
  const [pagination, setPagination] = useState(1);
  const [noData, setNoData] = useState(false);

  const incrementPagination = () => {
    setPagination((prev) => {
      return prev + 1;
    });
  };

  async function fetchCategoryData() {
    try {
      setHasErr(false);
      setIsLoading(true);

      const axiosConfig = {
        method: "get",
        url: `/blog/category/${categoryName}/?page=${pagination}`,
        headers: {
          Accept: "application/json",
        },
      };

      const response = await axios(axiosConfig);
      const data = await response.data;

      if (data.status !== 200) {
        if (data.status == 404) {
          setNoData(true);
          return;
        } else {
          throw new Error(data.error);
        }
      }

      if (pagination > 1) {
        //if it is not first fetch
        setCategoryData((prev) => {
          return {
            ...data.data,
            blogList: [...prev.blogList, ...data.data.blogList],
          };
        });
      } else {
        // if it is first fetch
        setCategoryData(data.data);
      }
    } catch (err) {
      setHasErr(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    //Resetting some things on category change
    setCategoryData(initialCategoryData);
    setPagination(1);
    setNoData(false);

    if (pagination === 1) {
      fetchCategoryData();
    }
  }, [categoryName]);

  useEffect(() => {
    fetchCategoryData();
  }, [pagination]);

  if (hasErr) {
    return <ErrorScreen />;
  }

  if (noData) {
    return <NoDataExist />;
  }

  return (
    <>
      {isLoading && <Loader />}
      <>
        <Row>
          {categoryData.blogList.map((blogItem, i) => {
            let customDelay = i + 2;

            const truncatedHighlightedBlogContent = truncateText(
              blogItem.description,
              200
            );

            return (
              <Col md={6} Col lg={6} key={blogItem.id}>
                <div
                  className="news-box  wow fadeInUp"
                  data-wow-delay={`.${customDelay}s`}
                >
                  <div className="overflow">
                    <img
                      src={blogItem.imagePath}
                      alt="news"
                      className="w-100"
                    />
                  </div>
                  <span>
                    <small></small> | {blogItem.publishData}
                  </span>
                  <h3>{blogItem.title}</h3>
                  <div>
                    <HTMLRenderer
                      htmlString={truncatedHighlightedBlogContent}
                    />
                  </div>
                  <Link
                    href={`${blogUrlPrefix}/${blogItem.alias}`}
                    className="btns_line"
                  >
                    KNOW MORE
                  </Link>
                </div>
              </Col>
            );
          })}
        </Row>

        {categoryData.moreBlogsExist && (
          <div className="text-center">
            <Button className="btns" onClick={incrementPagination}>
              <span className="p-0 m-0 border-0" style={{ color: "#fff" }}>
                SHOW MORE
              </span>
            </Button>
          </div>
        )}
      </>
    </>
  );
};

export default BlogCategory;
