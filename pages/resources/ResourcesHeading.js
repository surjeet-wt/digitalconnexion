import React from "react";
import { Container } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import { blogUrlPrefix, newsUrlPrefix, newsroomPrefix } from "@/src/api";
import Head from "next/head";

const ResourcesHeading = () => {
  const { asPath } = useRouter();

  const resourceNavTabs = [
    { name: "NEWSROOM", link: newsroomPrefix },
    { name: "MEDIA", link: newsUrlPrefix },
   // { name: "BLOG", link: blogUrlPrefix },
  ];

  return (

<>
 

    <div className="contact-banner pad80 top80">
      <Container>
        <h2 className="h4 text-center mb-3 wow fadeInUp">
          Our{" "}
          <span className="position-relative">
            resources
            <svg
              style={{ width: "46px" }}
              id="Layer_2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 42.95 51.05"
            >
              <defs></defs>
              <g id="Layer_1-2">
                <rect
                  className="cls-2 polygon"
                  x="17.21"
                  width="25.74"
                  height="25.74"
                  transform="translate(60.16 25.74) rotate(180)"
                ></rect>
                <polygon
                  className="cls-2 polygon flash-0"
                  points="17.21 25.74 17.21 42.94 7.21 42.94 7.21 35.74 0 35.74 0 25.74 17.21 25.74"
                ></polygon>
                <rect
                  className="cls-2 polygon"
                  x="17.21"
                  y="42.94"
                  width="8.11"
                  height="8.11"
                ></rect>
                <rect
                  className="cls-1 "
                  y="35.7"
                  width="7.25"
                  height="7.25"
                  transform="translate(7.25 78.64) rotate(180)"
                ></rect>
              </g>
            </svg>
          </span>
        </h2>
        <p className="text-center  wow fadeInUp">
          Browse our articles for unique insights and actionables.
        </p>

        <nav className="or_tabs  wow fadeInUp">
          {resourceNavTabs.map((item) => {
           // const isActive = asPath.startsWith(item.link);
           const isActive = asPath === item.link; 
           return (
              <Link
                key={item.name}
                href={item.link}
                className={isActive ? "active" : ""} >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </Container>
    </div>

    </>
  );
};

export default ResourcesHeading;
