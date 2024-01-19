import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaLinkedinIn, FaTwitter, FaYoutube, FaQuora } from "react-icons/fa";
import smallArrow from "../assets/images/smallarrow.svg";
import Image from "next/image";
// import WOW from 'wowjs';
// import 'wowjs/css/libs/animate.css';
import Link from "next/link";
import BackToTop from "./BackToTop";
import CookiesLocal from "../cookiesLocal/CookiesLocal";
import Subscribe from "./Subscribe";
import WowAnimation from "./Wow";
function Footer(){
    return(

        <>
        <footer>

        <div className="footer-menu">
            <Container>
                <div className="newsletter">
                        <Row>
                        <Subscribe />
                            <Col lg={4} md={6}>
                                <ul className="social_icon left-border">
                                    <li><Link href="https://twitter.com/D_Connexion" target="_blank"><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 487.43 456.19"><defs></defs><path id="path1009" className="cls-1" d="M7.48,21.9,195.66,273.57,6.29,478.1H48.91L214.71,299l134,179.11h145L294.93,212.33,471.2,21.9H428.58L275.89,186.82,152.51,21.9ZM70.16,53.3h66.63L431,446.7H364.39Z" transform="translate(-6.29 -21.9)"></path></svg></Link></li>
                                    <li><Link href="https://www.linkedin.com/company/digital-connexion-dx/" target="_blank"><FaLinkedinIn /></Link></li>
                                </ul>
                            </Col>
                        </Row>
                </div>
            </Container>
        </div>


            <div className="footer-menu">
                <Container>
                    <Row className="align-items-center ">
                        <Col lg={8} md={12}>
                            <ul className="unloder-list">
                                <li><Link href="/platform-digital">PlatformDIGITAL<sup>®</sup> </Link></li>
                                <li><Link href="/services">SERVICES</Link></li>
                                <li><Link href="/india">LOCATION</Link></li>
                                <li><Link href="/resources/newsroom">RESOURCES</Link></li>
                                <li><Link href="/investor">ABOUT </Link></li>
                                <li><Link href="/careers">CAREERS</Link></li>
                            </ul>
                        </Col>
                        <Col  lg={4} md={12}>

                            <div className="address left-border">
                            <h3>Digital Connexion</h3>
                                <address className="mb-0 wow fadeInUp">#1405, Level 14, B – Wing, <br /> Parinee Crescenzo, G Block,<br /> Bandra Kurla Complex, Mumbai 400051</address>
                                </div>
                        </Col>
                    </Row>
                </Container>
            </div>



            <div className="copyright">
            <Container>
            <Row className="align-items-center ">
                    <Col lg={4} md={7}>
                        <div className="copy-menu">
                            <ul>
                            <li>
                      <Link href="/privacy-policy">Privacy</Link>
                    </li>
                    <li>
                      <Link href="/whistle-blower-policy">
                        Whistle Blower Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/cookies">Cookies</Link>
                    </li>
                            </ul>
                        </div>
                    </Col>

                    <Col lg={4} md={12}>
                        <div className="copy-menu ">
                            {/* <p className="mb-0 wow fadeInUp">Copyright © 2023. Digital Realty All rights reserved.</p> */}
                        </div>
                    </Col>

                    <Col lg={4} md={5}>
                        <div className="copy-menu left-border">
                            <Link href="tel:912250020400"> +91-22-50020400 </Link> <span>|</span>
                            <Link href="mailto:info@digitalconnexion.in">info@digitalconnexion.com</Link>
                        </div>
                    </Col>
                </Row>
                </Container>
            </div>
        </footer>


        <BackToTop />


        <CookiesLocal />

        <WowAnimation />
            
        </>
    )
}

export default Footer;