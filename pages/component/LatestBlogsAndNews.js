import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";


//import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

import axios from "@/src/axios";
import { blogUrlPrefix, newsUrlPrefix, newsroomPrefix } from "@/src/api";

import Loader from "../component/Loader";
import ErrorScreen from "../component/ErrorScreen";
// import NewsWrapper from "../resources/newsroom/News";
import News from "../component/News";
import { domainUrl } from "@/src/axios";

const LatestBlogsAndNews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasErr, setHasErr] = useState(false);
  const [{ news, pr}, setContentData] = useState({ news: {},pr:[]});

 // console.log(pr);
  useEffect(() => {
    const fetchBlogItem = async () => {
      try {
        setHasErr(false);
        setIsLoading(true);

        const axiosConfig = {
          method: "get",
          url: `/home-page`,
          headers: {
            Accept: "application/json",
          },
        };

        const response = await axios(axiosConfig);
        const data = await response.data;
       
        if (data.status !== 200) {
          throw new Error(data.error);
        }

        setContentData(data.data);
      
      } catch (err) {
        setHasErr(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogItem();
  }, []);

  if (isLoading) {
    return <Loader />;
  } else if (hasErr) {
    return (
      <div className="my-5">
        <ErrorScreen />
      </div>
    );
  }



  return (
    <>
      {/* <div className="news-wrapper pad80">
        <Container>
          <h2 className="text-center h4  wow fadeInUp">Latest Insights</h2>
          <Row className="justify-content-center mt-5">
            {blogs.map((blogItem, i) => {
              let customDelay = (i + 1) * 2;

              const truncatedBlogContent = truncateText(
                blogItem.description,
                200
              );

              return (
                <Col md={4} Col lg={4} key={blogItem.id}>
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
                    <span>{blogItem.publish_date}</span>
                    <h3>{blogItem.title}</h3>
                    <p>
                      <HTMLRenderer htmlString={truncatedBlogContent} />
                    </p>
                    <Link
                      to={`${blogUrlPrefix}/${blogItem.alias}`}
                      className="btns_line"
                    >
                      KNOW MORE
                    </Link>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div> */}


<News newsData={pr}/>

      {news && (
        <div className="blog-wrapper pad80 pt-0  wow fadeInUp">
          <Container>
            <div className="grey mb-5">
              <Row>
                <Col key={news.id} lg={4} md={12}>
                  <div
                    className="blog-data h-100 position-relative"
                  >
                    <p className="">
                      News | <span>{news.publish_date}</span>
                    </p>

                    <h2 className="">{news.title}</h2>
                    <p className="font16 ">{news.short_description}</p>

                    <Link
                      href={`${newsUrlPrefix}/${news.alias}`}
                      className="btns_line mt-2 position-static"
                     >
                      Know more
                    </Link>
                  </div>
                </Col>
                <Col lg={8} md={12}>
                  <img
                    src={news.image}
                    alt="news article"
                    className="w-100 h-100 object-fit-cover"
                  />
                </Col>
              </Row>
            </div>

            
            
            
           
            <div className="text-center wow fadeInUp">
              <Link href={newsroomPrefix} className="btns">
                <span>ALL NEWS & INSIGHTS</span>
              </Link>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default LatestBlogsAndNews;
