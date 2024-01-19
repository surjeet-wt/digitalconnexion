import React, { useRef, useEffect, useState, useCallback } from "react";
import accreditationImg from "../assets/images/mumbai_banner.png";
import { Container, Row, Form, Col  } from "react-bootstrap";
import aboutPixel from "../assets/images/pixles.gif";
import location from "../assets/images/Location_1.svg";
import Powercapacity from "../assets/images/power-capacity.svg";
import land from "../assets/images/land.svg";
import Footer from "../component/Footer";
import Link from "next/link";
import Image from "next/image";
import Header from "../component/Header";
import Head from "next/head";
import CommonForm from "@/src/CommonForm";
import CustomHead from "../CustomHead";
import { fetchPageData } from "../api";

function Mumbai({ pageData }) {


  
    // Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
                                <span className="highlight d-block"> Mumbai. </span> An unparalleled connectivity hub.
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

            <div className="leveData pad80 grey turnkey_div invester_wrapper">
                <Container>
                    <div className="wow fadeInUp leveData__h mb-0">

                    <h2 className="text-center h4  wow fadeInUp" style={{ fontSize: "38px" }}>Empowering the city's data landscape.</h2>

                        <p className="text-center  wow fadeInUp" >
                        The financial capital of India, Mumbai is home to a thriving business ecosystem and is a major hub for industries such as finance, media, entertainment, and e-commerce. The presence of these industries generates significant data, which necessitates the establishment of robust data centers in close proximity to cater to their needs.
                        </p>
                        <p className="wow fadeInUp">
                        Strategically located on the west coast of India, it acts as a gateway to the APAC market.  has several factors that make it an ideal location for data centers. With the highest number of  submarine cable landing stations in the country, the city is poised to provide excellent connectivity to global networks, making it easier to transfer data between Mumbai and other parts of the world efficiently.
                        </p>

                        
                    </div>
                </Container>
            </div>




            <div className="leveData pad80  turnkey_div invester_wrapper border-bottom ambitions-wrapper ">
                <Container>
                    <div className="leveData__h mb-0 w-100 mx-100">

                        <h2 className="text-center h4 wow fadeInUp" style={{ fontSize: "38px" }}>Positioned to foster growth. </h2>


                        <Row className="mt-2 mb-5">
                <Col lg={4} md={12}>
                        <div className="icon-wrapper pe-4 wow fadeInUp" data-wow-delay=".2s">
                            <div className="d-flex justify-content-between align-items-end" >
                                <h3>Location </h3>
                                <div className="overflow"><Image src={location} alt="Building" /></div>
                            </div>
                            <p className="text-start m-0">Chandivali</p>
                        </div>
                    </Col>
                    <Col lg={4} md={12}>
                        <div className="icon-wrapper pe-4 wow fadeInUp" data-wow-delay=".2s">
                            <div className="d-flex justify-content-between align-items-end" >
                                <h3>Power capacity </h3>
                                <div className="overflow"><Image src={Powercapacity} alt="Building" /></div>
                            </div>
                            <p className="text-start m-0">40MW </p>
                        </div>
                    </Col>
                    <Col lg={4} md={12}>
                        <div className="icon-wrapper pe-4 wow fadeInUp" data-wow-delay=".2s">
                            <div className="d-flex justify-content-between align-items-end" >
                                <h3>Land extent </h3>
                                <div className="overflow"><Image src={land} alt="Building" /></div>
                            </div>
                            <p className="text-start m-0">2.1 acres</p>
                        </div>
                    </Col>
                    
                </Row>
                <p className="text-center mt-5 mb-0  wow fadeInUp" style={{ fontSize: "16px" }}>
                    <span style={{border : "solid 1px #dfdfdf",  padding: "19px 30px"}}>
                      Click to know more about the data center.</span> 
                            <Link className="hover-span  btns contact"  href="/india/bom10" >
                                <span className="background-transparent">BOM10</span>
                            </Link></p>


<div className="text-center mt-4 wow fadeInUp">
                            <span className="mb-0 d-inline-block quter">RFS date - Q4 2025</span>
                            </div>
                </div>


                      
                        </Container>
                        </div>

            


         
           

            <CommonForm />
<Footer />

        </>
    );
}

export default Mumbai;


export async function getServerSideProps() {
    const keyid = 'mumbai';
    const pageData = await fetchPageData(keyid);  
    return {
      props: { pageData },
    };
}