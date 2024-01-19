import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

import { blogUrlPrefix } from "@/src/api";
import HTMLRenderer from "@/src/htmlRenderer";
import truncateText from "@/src/truncateText";

import BlogSearchResults from "./BlogSearchResults";
import BlogLayout from "./BlogLayout";
import BlogHighlightLayout from "./BlogHighlightLayout";

function Blogs({ blogLinks, blogsData, incrementPagination }) {
  const router = useRouter();
  const searchQuery = router.query.search;

  if (!blogsData) {
    return false;
  }

  const blogListData = blogsData.blogList || [];
  const highlightedBlog = blogsData.highlightBlog || {};

  return (
    <>
      {searchQuery && (
        <BlogLayout categoryLinks={blogLinks}>
          <BlogSearchResults searchQuery={searchQuery} blogLinks={blogLinks} />
        </BlogLayout>
      )}

      {!searchQuery && (
        <BlogHighlightLayout
          categoryLinks={blogLinks}
          highlightedBlog={highlightedBlog}
        >
          <Row>
            {blogListData.map((blogItem, i) => {
              let customDelay = i + 2;
              const truncatedBlogContent = truncateText(
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
                      <HTMLRenderer htmlString={truncatedBlogContent} />
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

          {blogsData.moreBlogsExist && (
            <div className="text-center">
              <Button className="btns" onClick={incrementPagination}>
                <span className="p-0 m-0 border-0" style={{ color: "#fff" }}>
                  SHOW MORE
                </span>
              </Button>
            </div>
          )}
        </BlogHighlightLayout>
      )}
    </>
  );
}

export default Blogs;
