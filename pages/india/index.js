import React, {useEffect } from "react";
import accreditationImg from "../assets/images/India_banner.png";
import { Container, Row, Form, Col  } from "react-bootstrap";
import aboutPixel from "../assets/images/pixles.gif";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../component/Footer";
import Header from "../component/Header";
import CommonForm from "@/src/CommonForm";

import CustomHead from "../CustomHead";
import { fetchPageData } from "../api";

function India({ pageData }) {


    return (
        <>
<CustomHead {...pageData} />
        <Header />
                        <div className="carrer_banner accreditation_banner top80 banner_inner">
                <div className="container">
                    <div className="row align-items-center position-relative">
                        <div className="col-md-12 col-lg-5">
                            <div className="banner_head" style={{ top: "44%" }}>
                                <h1 className="h4 wow fadeInUp">
                                <span className="highlight d-block">India.</span> The epicenter<br /> of growth.
                                </h1>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-7">
                            <div className="position-relative wow fadeInUp">
                                <Image src={aboutPixel} alt="aboutPixel" className="pixel-about" />
                                <Image src={accreditationImg} className="w-100" alt="accreditationImg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="leveData pad80 grey turnkey_div invester_wrapper border-bottom">
                <Container>
                    <div className="leveData__h">
                        <h2 className="text-center h4  wow fadeInUp" style={{ fontSize: "38px" }}>
                        Strategically located for seamless connectivity, <br />locally and globally.
                        </h2>
                        <p className="wow fadeInUp">With 1.426 billion inhabitants, India is the most populated country in the world, making it one of the world’s largest consumer markets. The rapid growth of internet penetration, the digitalization initiatives by government agencies, the strong demand for cloud players, and the rapid growth in new segments have resulted in a significantly growing demand for data centers to support the storage and processing needs of various industries. </p>

                        <p className="wow fadeInUp">The country is primed to become the hub of connectivity and data-driven innovation in the future, with 20 cable landings connecting data centers in India with the global network. Mumbai accounts for the highest cable landings in the country due to the early establishment of telecommunication networks in the city as well as the presence of  robust banking and financial services. Chennai, on the other hand, has a distinct advantage due to its strategic location advantage in APAC, domestic geography, presence of IT/ITeS industries, and dense interconnection capabilities, thus making it the ideal locale for colocation data centers.
  </p>

                        <p className="wow fadeInUp">At Digital Connexion, we harness India's unique geographical location and proximity to countries with great potential for growth and we offer a gateway to unlock limitless potential for your business.
 </p>

                        <div className="text-center mt-5  wow fadeInUp">
                            <Link className="hover-span  btns contact me-5" href="/india/chennai"  >
                                <span>VISIT CHENNAI</span>
                            </Link>
                            <Link className="hover-span  btns contact"  href="/india/mumbai">
                                <span>VISIT MUMBAI</span>
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>

            



            <CommonForm />

<Footer />

        </>
    );
}

export default India;


export async function getServerSideProps() {
    const keyid = 'india';
    const pageData = await fetchPageData(keyid);  
    return {
      props: { pageData },
    };
}