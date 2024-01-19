import React from "react";
import { Col, Container, Row} from "react-bootstrap";
import arrowIcon from "../assets/images/arrowIcon.svg";
import Image from "next/image";


function News({ newsData}) {
  if (!newsData) {
    return null; // Return null or any other appropriate UI when newsData is undefined or has no 'news' property
  }
 // console.log(newsData);
  const { news: newsItems = [], moreNewsExist } = newsData;
  return (
    <>
       <div className="blog-box news-wrapper news-main-wrapper pad80 blog-wapper pb-0 mb-0">
        <Container>
          <Row>
            {newsData.map((article, i) => {
              return (
                <Col key={article.id} md={6} lg={4}>
                  <div
                    className="news-box mb-0 mb-sm-3 h-100 wow fadeInUp"
                    data-wow-delay={`.${i}s`}
                  >
                    <div className="newsroom-box">
                      <div>
                      <span className="border-0 m-0 p-0 pb-3">
                        {article.publish_date}
                      </span>
                      <h3 className="mt-0">{article.title}</h3>
                      </div>
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
         
        </Container>
      </div>
    </>
  );
}

export default News;
