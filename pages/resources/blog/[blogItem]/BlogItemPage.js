import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import HTMLRenderer from "@/src/htmlRenderer";
import { blogUrlPrefix } from "@/src/api";

import ErrorScreen from "@/pages/component/ErrorScreen";
import BlogSignUp from "../BlogSignUp";

import fb from "@/pages/assets/images/fb.svg";
import whatsapp from "@/pages/assets/images/whatsapp.svg";
import twitter from "@/pages/assets/images/twitter.svg";
import linkedin from "@/pages/assets/images/linkedin.svg";
import CommonForm from "@/src/CommonForm";

const url = 'https://cog.digitalconnexion.com/resources/blog/';

function BlogItemPage({ blogData }) {

  if (!blogData) {
    return false;
  }
  const blogItem = blogData.blogList[0];
  const latestPosts = blogData.latestPosts;
  const relatedPosts = blogData.relatedPosts;
  const nextPrevPosts = {
    nextPost: blogData.nextPost,
    prevPost: blogData.prevPost,
  };

  if (!blogItem) {
    return (
      <div className="my-5">
        <ErrorScreen />
      </div>
    );
  }

  

  return (
    <>
      <Head>
        <title>{blogItem.title}</title>
        {/* <meta name="description" content={blogItem.meta_description} /> */}
        <meta name="description" content={blogItem.meta_description} />
        {blogItem.alias && <link rel="canonical" href={`${url}${blogItem.alias}`} />}
      </Head>
      <div className="banner_inner top80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 col-lg-5">
              <div className="banner_head">
                <span className=" wow fadeInUp span">
                  {blogItem.publishData}
                </span>
                <h1 className="h4 wow fadeInLeft">{blogItem.title}</h1>
              </div>
            </div>
            <div className="col-md-12 col-lg-7">
              <div className="position-relative  wow fadeInRight">
                <img src={blogItem.imagePath} className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="news-wrapper pad80 blog-wapper grey">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} md={12}>
              <div className="blog_inner">
                <HTMLRenderer htmlString={blogItem.description} />
              </div>
              <div className="next-prev wow fadeInUp">
                <Row>
                  {nextPrevPosts.prevPost && (
                    <Col md={4} className="m-0">
                      <div className="text-left">
                        <Link
                          href={`${blogUrlPrefix}/${nextPrevPosts.prevPost.alias}`}
                        >
                          <span>PREVIOUS</span>
                          <p>{nextPrevPosts.prevPost.title}</p>
                        </Link>
                      </div>
                    </Col>
                  )}

                  {nextPrevPosts.nextPost && (
                    <Col md={4} className="m-0">
                      <div className="text-left">
                        <Link
                          href={`${blogUrlPrefix}/${nextPrevPosts.nextPost.alias}`}
                        >
                          <span>NEXT</span>
                          <p>{nextPrevPosts.nextPost.title}</p>
                        </Link>
                      </div>
                    </Col>
                  )}
                </Row>
              </div>
            </Col>

            <Col lg={4} md={12}>
              <div className="share grey wow fadeInUp">
                <h2>Share</h2>
                <Link href={blogUrlPrefix}>
                  <Image src={whatsapp} alt="whatsapp" />
                </Link>
                <Link href={blogUrlPrefix}>
                  <Image src={fb} alt="fb" />
                </Link>
                <Link href={blogUrlPrefix}>
                  <Image src={twitter} alt="twitter" />
                </Link>
                <Link href={blogUrlPrefix}>
                  <Image src={linkedin} alt="linkedin" />
                </Link>
              </div>

              <div
                className="share grey p-0 topics wow fadeInUp"
                style={{ background: "#fff" }}
              >
                <h2>Latest Blog Posts</h2>
                <div className="inner-topics">
                  {latestPosts.map((latestBlogItem) => {
                    return (
                      <Link
                        key={latestBlogItem.id}
                        href={`${blogUrlPrefix}/${latestBlogItem.alias}`}
                      >
                        {latestBlogItem.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <BlogSignUp />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="related_post pad80">
        <Container>
          <h2 className="h4">Related Post</h2>
          <Row className="mt-5">
            {relatedPosts.map((relatedBlogItem) => {
              return (
                <Col md={2} key={relatedBlogItem.id}>
                  <div className="realted_box position-relative">
                    <Link href={`${blogUrlPrefix}/${relatedBlogItem.alias}`}>
                      <img
                        src={relatedBlogItem.imagePath}
                        alt="blog related"
                        className="w-100"
                      />
                      <span>{relatedBlogItem.title}</span>
                    </Link>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

      <CommonForm />
    </>
  );
}

export default BlogItemPage;
