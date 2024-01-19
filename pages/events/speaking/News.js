import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import CommonForm from "@/src/CommonForm";

function events({ newsData, incrementPagination, type }) {
  //const { newsItems = [], moreNewsExist } = newsData;
  if (!newsData) {
    return false;
  }
  const { events:  newsItems = [], moreNewsExist } = newsData;
//console.log(newsItems)

  return (
    <>

    
      {type === "upcoming" || type === "past" || type === "all" ? (
        newsItems.length > 0 ? ( // Check if there are newsItems
        <div className="news-wrapper news-main-wrapper pad80 blog-wapper grey border-bottom">
          <Container>
            <Row>
              {newsItems.map((events, i) => (
                <Col key={events.id} md={6} lg={4}>
                  <div
                    className="news-box  wow fadeInUp"
                    data-wow-delay={`.${i}s`}
                  >
                    <div className="overflow">
                      <img src={events.thumb_imagePath} alt="news"  className="w-100" width={300} height={300}/>
                    </div>
                    <span>{events.event_date}</span>
                    <h3>{events.title}</h3>
                    <p>{events.short_description}</p>
                    <Link href={`speaking/${events.alias}`} className="btns_line">
                      KNOW MORE
                    </Link>
                  </div>
                </Col>
              ))}
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
         ) : (
          <div className="d-flex justify-content-center align-items-center pad80 grey border-bottom">
          <h1 className="mb-0">No data found</h1>
        </div>
        )
      ) : null}
      <CommonForm />
    </>
  );
}

export default events;
