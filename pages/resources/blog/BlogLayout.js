import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

import { blogCategoryUrl } from "@/src/api";

import fb from "@/pages/assets/images/fb.svg";
import whatsapp from "@/pages/assets/images/whatsapp.svg";
import twitter from "@/pages/assets/images/twitter.svg";
import linkedin from "@/pages/assets/images/linkedin.svg";
import instagram from "@/pages/assets/images/instagram.png";
import BlogSignUp from "./BlogSignUp";
import CommonForm from "@/src/CommonForm";

const BlogLayout = ({ categoryLinks, ...rest }) => {

  if (!categoryLinks) {
    return false;
  }

  return (
    <>
      <div className="news-wrapper pad80 blog-wapper grey pad80">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} md={12}>
              {rest.children}
            </Col>

            <Col lg={4} md={12}>
              <div className="share grey  wow fadeInUp">
                <h2>Share</h2>
                <Link href="">
                  <Image src={whatsapp} alt="whatsapp" />
                </Link>
                <Link href="">
                  <Image src={fb} alt="fb" />
                </Link>
                <Link href="">
                  <Image src={instagram} alt="instagram" />
                </Link>
                <Link href="">
                  <Image src={twitter} alt="twitter" />
                </Link>
                <Link href="">
                  <Image src={linkedin} alt="linkedin" />
                </Link>
              </div>

              <div className="share grey p-0 topics  wow fadeInUp">
                <h2>Topics</h2>
                <div className="inner-topics">
                  {categoryLinks.map((item) => {
                    return (
                      <Link
                        key={item.id}
                        href={`${blogCategoryUrl}/${item.slug}`}
                      >
                        {item.title.toUpperCase()}
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
      <CommonForm />
    </>
  );
};

export default BlogLayout;
