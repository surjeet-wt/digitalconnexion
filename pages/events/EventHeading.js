import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";



const EventHeading = () => {
  const router = useRouter();

  // Function to generate the class name for NavLink based on the 'type' query parameter
  const getNavLinkClassName = (type) => {
    const typeQueryParam = router.query.type;
    return typeQueryParam === type ? "active" : "";
  };
  const [activeTab, setActiveTab] = useState("all"); // Default active tab is "all"

  // Function to update the active tab when a tab is clicked
  // const handleTabClick = (tab) => {
  //   setActiveTab(tab);
  // };



  const handleTabClick = async (tab) => {
    setActiveTab(tab);
    const tabs = tab.target.getAttribute("href");

    if (router.pathname !== tabs) {
      await router.push(tabs);
      window.location.reload(); // This will trigger a full page refresh
    }
  };

  useEffect(() => {
    const links = document.querySelectorAll(".refresh-link");
    links.forEach((link) => {
      link.addEventListener("click", handleTabClick);
    });

    return () => {
      // Clean up the event listeners when the component is unmounted
      links.forEach((link) => {
        link.removeEventListener("click", handleTabClick);
      });
    };
  }, []);


  useEffect(() => {
    const queryType = router.query.type;
    if (queryType) {
      setActiveTab(queryType);
    }
  }, [router.query.type]);

  return (
    <>


      <div className="contact-banner pad80 top80">
        <Container>
          <h2 className="h4 text-center mb-3 wow fadeInUp">
            Our{" "}
            <span className="position-relative">
              Events
              <svg
                style={{ width: "46px" }}
                id="Layer_2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 42.95 51.05"
              >
                <defs></defs>
                <g id="Layer_1-2">
                  <rect
                    className="cls-2 polygon flash-0"
                    x="17.21"
                    width="25.74"
                    height="25.74"
                    transform="translate(60.16 25.74) rotate(180)"
                  ></rect>
                  <polygon
                    className="cls-2 polygon cls-2 flash-0 flash-1"
                    points="17.21 25.74 17.21 42.94 7.21 42.94 7.21 35.74 0 35.74 0 25.74 17.21 25.74"
                  ></polygon>
                  <rect
                    className="cls-2 polygon flash-2"
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
          <p className="text-center wow fadeInUp">
            Stay updated on the latest happenings at <br /> Digital Connexion.
          </p>

          <nav className="or_tabs wow fadeInUp">
  <Link
    href={`/events/organising?type=all`}
    className={`text-uppercase ${router.pathname === '/events/organising' ? 'active' : ''}`}
  >
    Organising
  </Link>
  <Link
    href={`/events/speaking?type=all`}
    className={`text-uppercase ${router.pathname === '/events/speaking' ? 'active' : ''}`}
  >
    Speaking
  </Link>
  <Link
    href={`/events/sponsoring?type=all`}
    className={`text-uppercase ${router.pathname === '/events/sponsoring' ? 'active' : ''}`}
  >
    Sponsoring
  </Link>
</nav>

        </Container>
      </div>

      <div className="catergry_block after_hide">
      <Container>
        <nav className="catergry_block_ul justify-content-center wow fadeInUp">
          <Link
            href={`${router.pathname}?type=all`}
            passHref
            data-tab="all"
            className={`text-uppercase refresh-link d-inline-block ${
              activeTab === "all" ? "active" : ""
            }`}
            onClick={() => handleTabClick("all")}
          >
            All
          </Link>
          <Link
            href={`${router.pathname}?type=upcoming`}
            passHref
            data-tab="upcoming"
            className={`text-uppercase refresh-link d-inline-block ${
              activeTab === "upcoming" ? "active" : ""
            }`}
            onClick={() => handleTabClick("upcoming")}
          >
            Upcoming
          </Link>
          <Link
            href={`${router.pathname}?type=past`}
            passHref
            data-tab="past"
            className={`text-uppercase refresh-link d-inline-block ${
              activeTab === "past" ? "active" : ""
            }`}
            onClick={() => handleTabClick("past")}
          >
            Past
          </Link>
        </nav>
      </Container>
    </div>
    </>
  );
};

export default EventHeading;

