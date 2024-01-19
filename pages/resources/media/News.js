import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Link from "next/link";
import CommonForm from "@/src/CommonForm";

function News({ newsData, incrementPagination }) {
  if (!newsData || !newsData.news) {
    return null; // Return null or any other appropriate UI when newsData is undefined or has no 'news' property
  }
  const { news: newsItems = [], moreNewsExist } = newsData;

  //console.log(newsItems)

  return (
    <>
      <div className="news-wrapper news-main-wrapper pad80 blog-wapper grey border-bottom">
        <Container>
          <Row>
            {newsItems.map((article, i) => {
              return (
                <Col key={article.id} md={6} Col lg={4}>
                  <div
                    className="news-box  wow fadeInUp"
                    data-wow-delay={`.${i}s`}
                  >
                    <div className="overflow">
                      <img
                        src={article.imagePath}
                        alt="news"
                        className="w-100"
                      />
                    </div>
                    <span>{article.publish_date}</span>
                    <h3>{article.title}</h3>
                    <p>{article.short_description}</p>
                    <Link href={`media/${article.alias}`} className="btns_line">
                      KNOW MORE
                    </Link>
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
