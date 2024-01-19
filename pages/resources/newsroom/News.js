import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import arrowIcon from "../../assets/images/arrowIcon.svg";
import Image from "next/image";
import Head from "next/head";
import CommonForm from "@/src/CommonForm";


function News({ newsData, incrementPagination }) {
  if (!newsData) {
    return null; // Return null or any other appropriate UI when newsData is undefined or has no 'news' property
  }
  const { news: newsItems = [], moreNewsExist } = newsData;
  return (
    <>

    

       <div className="news-wrapper news-main-wrapper pad80 blog-wapper grey border-bottom">
        <Container>
          <Row>
            {newsData.map((article, i) => {
              return (
                <Col key={article.id} md={6} lg={4}>
                  <div
                    className="news-box mb-0 mb-sm-3 h-auto wow fadeInUp"
                    data-wow-delay={`.${i}s`}
                  >
                    <div className="newsroom-box">
                      <span className="border-0 m-0 p-0 pb-3">
                        {article.publish_date}
                      </span>
                      <h3 className="mt-0">{article.title}</h3>
                      <p>{article.description}</p>

                      <a
                        target="_blank"
                        href={
                          article.link
                            ? article.link
                            : article.press_release_file
                        }
                        className="btns_icon"
                      >
                        <Image src={arrowIcon} alt="arrowIcon" />
                      </a>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
          {moreNewsExist && (
            <div className="text-center">
              <Button className="btns" onClick={incrementPagination}>
                <span className="p-0 m-0 border-0" style={{ color: "#fff" }}>
                  SHOW MORE
                </span>
              </Button>
            </div>
          )}
        </Container>
      </div>

      <CommonForm />
    </>
  );
}

export default News;
