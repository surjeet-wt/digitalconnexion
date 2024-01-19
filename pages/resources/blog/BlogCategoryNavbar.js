import React, { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

import { blogCategoryUrl, blogUrlPrefix } from "@/src/api";

const BlogCategoryNavbar = ({ blogLinks, categoryName }) => {

  if (!blogLinks) {
    return false;
  }
  
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();

    if (!searchQuery) {
      return false;
    }

    router.push(`${blogUrlPrefix}/?search=${searchQuery}`);
    setSearchQuery("");
  };
  return (
    <div className="catergry_block">
      <Container>
        <Row className="align-items-center  wow fadeInUp">
          <Col md={8}>
            <nav className="catergry_block_ul">
              {blogLinks.map((item) => {
                return (
                  <Link
                    key={item.id}
                    href={`${blogCategoryUrl}/${item.slug}`}
                    className={
                      categoryName?.toLowerCase() === item.title.toLowerCase()
                        ? "active"
                        : ""
                    }
                  >
                    {item.title.toUpperCase()}
                  </Link>
                );
              })}
            </nav>
          </Col>

          <Col md={4}>
            <Form className="wow fadeInUp d-flex" onSubmit={searchHandler}>
              <Form.Group
                className="w-100"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Search"
                  name="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </Form.Group>
              <Button type="submit" className="btns h-auto">
                <span className="p-0 m-0 border-0" style={{ color: "#fff" }}>
                  SUBMIT
                </span>
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogCategoryNavbar;
