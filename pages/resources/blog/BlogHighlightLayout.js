import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";

import { blogUrlPrefix } from "@/src/api";
import HTMLRenderer from "@/src/htmlRenderer";
import truncateText from "@/src/truncateText";

import BlogLayout from "./BlogLayout";

const BlogHighlightLayout = ({ highlightedBlog, categoryLinks, ...rest }) => {

  if (!highlightedBlog) {
    return false;
  }
  
  const truncatedHighlightedBlogContent = truncateText(
    highlightedBlog.description,
    350
  );
  return (
    <>
      <div className="blog-wrapper pad80 grey">
        <Container>
          <div className="blog-box grey">
            <Row>
              <Col lg={4} md={6} className="pe-0">
                <div
                  className="blog-data h-100 position-relative"
                  style={{ background: "#fff" }}
                >
                  <p className="wow fadeInUp">
                    Highlight | <span>{highlightedBlog.publishData}</span>
                  </p>
                  <h2 className="wow fadeInUp">{highlightedBlog.title}</h2>

                  <div className="font16 wow fadeInUp">
                    <HTMLRenderer
                      htmlString={truncatedHighlightedBlogContent}
                    />
                  </div>

                  <Link
                    href={`${blogUrlPrefix}/${highlightedBlog.alias}`}
                    className="btns_line wow fadeInUp"
                  >
                    Know more
                  </Link>
                </div>
              </Col>
              <Col lg={8} md={6} className="ps-0">
                <img
                  src={highlightedBlog.imagePath}
                  alt="blog"
                  className="w-100"
                />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <BlogLayout categoryLinks={categoryLinks}>{rest.children}</BlogLayout>
    </>
  );
};

export default BlogHighlightLayout;
