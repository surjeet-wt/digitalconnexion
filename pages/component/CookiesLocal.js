import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaAngleUp } from "react-icons/fa";
import cross from "../assets/images/cross2.svg";

import Link from "next/link";

const CookiesLocal = () => {
  const [isVisible, setIsVisible] = useState(true);

  const hideElement = () => {
    setIsVisible(false);
  };

  // Cokkies
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  const setCookie = (name, value, hours) => {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + hours * 60 * 60 * 1000);
    const expires = "expires=" + expirationDate.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
    setCookiesAccepted(true);
    localStorage.setItem("cookiesAccepted", "true");
  };

  const accpetCookies = () => {
    setCookie("myCookie", "cookie value", 28);
  };

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (cookiesAccepted === "true") {
      setCookiesAccepted(true);
    }
  }, []);
  return (
    <>
      {isVisible && !cookiesAccepted && (
        <div className="cookies grey">
          <Container>
            <Row className="align-items-center">
              <Col lg={7} md={12}>
                <p>
                  We use cookies on our site to make it work and to help us give
                  you the best possible user experience.
                  <br /> By using our site you agree to our use of cookies.{" "}
                  <Link
                    href="https://www.digitalrealty.com/about/legal/privacy/cookies"
                    target="_blank"
                  >
                    Cookies Statement
                  </Link>
                </p>
              </Col>

              <Col lg={5} md={12}>
                <div className="d-flex justify-content-end">
                  <span className="btns_line me-4" onClick={hideElement}>
                    Reject all cookies
                  </span>
                  <span className="btns_line" onClick={accpetCookies}>
                    Accept all cookies
                  </span>
                </div>
              </Col>
            </Row>

            <span className="cross" onClick={hideElement}>
              <img src={cross} alt="cross" />
            </span>
          </Container>
        </div>
      )}
    </>
  );
};

export default CookiesLocal;
