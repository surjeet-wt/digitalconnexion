import React, { useEffect, useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import Link from "next/link";

import axios from "@/src/axios";
import Loader from "@/pages/component/Loader";
import ErrorScreen from "@/pages/component/ErrorScreen";

import HTMLRenderer from "@/src/htmlRenderer";
import truncateText from "@/src/truncateText";
import NoDataExist from "@/pages/component/NoDataExist";
import { blogUrlPrefix } from "@/src/api";

const BlogSearchResults = ({ searchQuery }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasErr, setHasErr] = useState(false);
  const [noDataExist, setNoDataExist] = useState(false);
  const [searchData, setSearchData] = useState({ blogList: [] });
  const [pagination, setPagination] = useState(1);

  const incrementPagination = () => {
    setPagination((prev) => {
      return prev + 1;
    });
  };

  async function fetchSearchData() {
    try {
      setHasErr(false);
      setNoDataExist(false);
      setIsLoading(true);

      const axiosConfig = {
        method: "get",
        url: `/blog?search=${searchQuery}&page=${pagination}`,
        headers: {
          Accept: "application/json",
        },
      };

      const response = await axios(axiosConfig);
      const data = await response.data;

      if (data.status === 404) {
        setNoDataExist(true);
        return false;
      }

      if (data.status !== 200) {
        throw new Error(data.error);
      }

      if (pagination > 1) {
        //if it is not first fetch
        setSearchData((prev) => {
          return {
            ...data.data,
            blogList: [...prev.blogList, ...data.data.blogList],
          };
        });
      } else {
        // if it is first fetch
        setSearchData(data.data);
      }
    } catch (err) {
      setHasErr(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setPagination(1); //Reset Pagination on category change

    if (pagination === 1) {
      fetchSearchData();
    }
  }, [searchQuery]);

  useEffect(() => {
    fetchSearchData();
  }, [pagination]);

  return (
    <>
      {isLoading && <Loader />}
      {hasErr && <ErrorScreen />}
      {noDataExist && <NoDataExist />}
      {!noDataExist && !hasErr && (
        <>
          <Row>
            {searchData.blogList.map((blogItem, i) => {
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

          {searchData.moreBlogsExist && (
            <div className="text-center">
              <Button className="btns" onClick={incrementPagination}>
                <span className="p-0 m-0 border-0" style={{ color: "#fff" }}>
                  SHOW MORE
                </span>
              </Button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default BlogSearchResults;
