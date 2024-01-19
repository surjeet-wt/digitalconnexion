import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HTMLRenderer from "@/src/htmlRenderer";
import ErrorScreen from "@/pages/component/ErrorScreen";
import Head from "next/head";
import CommonForm from "@/src/CommonForm";

const url = 'https://digitalconnexion.com/resources/media/'

function NewsItemPage({ newsItem }) {
  if (!newsItem) {
    return (
      <div className="my-5">
        <ErrorScreen />
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{newsItem.title}</title>
        <meta name="description" content={newsItem.meta_description} />
        {newsItem.alias && <link rel="canonical" href={`${url}${newsItem.alias}`} />}
      </Head>
      

      <div className="banner_inner top80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 col-lg-5">
              <div className="banner_head">
                <span className=" wow fadeInUp span">
                  {newsItem.publish_date}
                </span>
                <h1 className="h4 wow fadeInLeft">{newsItem.title}</h1>
              </div>
            </div>
            <div className="col-md-12 col-lg-7">
              <div className="position-relative  wow fadeInRight">
                <img src={newsItem.imagePath} className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="news-wrapper pad80 blog-wapper grey">
        <Container>
          <Row className="justify-content-center">
            <Col lg={12} md={12}>
              <div className="blog_inner">
                <HTMLRenderer htmlString={newsItem.description} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <CommonForm />
    </>
  );
}

export default NewsItemPage;
