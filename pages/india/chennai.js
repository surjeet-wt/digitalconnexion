import React from "react";
import accreditationImg from "../assets/images/chennai-banner.png";
import { Container, Row, Form, Col  } from "react-bootstrap";
import aboutPixel from "../assets/images/pixles.gif";
import MAA10Day from "../assets/images/MAA10-Dayview.jpg";


import location from "../assets/images/Location_1.svg";
import Powercapacity from "../assets/images/power-capacity.svg";
import land from "../assets/images/land.svg";
import Link from "next/link";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Head from "next/head";
import Image from "next/image";
import CommonForm from "@/src/CommonForm";
import CustomHead from "../CustomHead";
import { fetchPageData } from "../api";

function Chennai({ pageData }) {



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
                               <span className="highlight d-block">Chennai.</span> The Gateway<br /> to South Asia.

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
                    <div className="leveData__h leveData__h1 mb-0">
                        <h2 className="text-center h4 wow fadeInUp" style={{ fontSize: "38px" }}>
                        Enabling success with connectivity.
                        </h2>
                       

                        <p className="wow fadeInUp">Chennai, the industrial and commercial capital of India, is fast emerging as a sought-after data center locale. With easy access to neighboring countries in South Asia, the Middle East, and Africa, data centers in Chennai can act as regional hubs, facilitating efficient data transmission and reducing latency for businesses operating across multiple geographies. </p>
                       
                        <p className="wow fadeInUp">However, the city’s primary advantage is that it serves as the landing point for the second-most subsea cable landing points in India and is the gateway to the APAC region. This is the bedrock for the accelerated proliferation of globalization and digital transformation of all sorts, both global and domestic. </p>
                       

                        
                    </div>
                </Container>
            </div>

            

<Container className="pad80 pb-0">
    <Image src={MAA10Day} className="w-100  wow fadeInUp" />
</Container>

        


<div className="leveData pad80 turnkey_div invester_wrapper border-bottom location-wrap ambitions-wrapper ">
                <Container>
                    <div className="leveData__h mb-0 w-100 mx-100">
                        <h2 className="text-center h4 wow fadeInUp" style={{ fontSize: "38px" }}>Strategically located at the city's IT corridor.</h2>


                <Row className="mt-2 mb-5">
                <Col lg={4} md={6}>
                        <div className="icon-wrapper pe-4 wow fadeInUp">
                            <div className="d-flex justify-content-between align-items-end" >
                                <h3>Location </h3>
                                <div className="overflow"><Image src={location} alt="location" /></div>
                            </div>
                            <p className="text-start m-0">Ambattur</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6}>
                        <div className="icon-wrapper pe-4 wow fadeInUp">
                            <div className="d-flex justify-content-between align-items-end" >
                                <h3>Power capacity </h3>
                                <div className="overflow"><Image src={Powercapacity} alt="Power capacity " /></div>
                            </div>
                            <p className="text-start m-0">100MW campus and 4 buildings </p>
                        </div>
                    </Col>
                    <Col lg={4} md={6}>
                        <div className="icon-wrapper pe-4 wow fadeInUp">
                            <div className="d-flex justify-content-between align-items-end" >
                                <h3>Land extent </h3>
                                <div className="overflow"><Image src={land} alt="Building" /></div>
                            </div>
                            <p className="text-start m-0">10 acres</p>
                        </div>
                    </Col>
                    
                </Row>



                <p className="text-center mt-5 mb-0 wow fadeInUp" style={{ fontSize: "16px" }}>
                    <span style={{border : "solid 1px #dfdfdf",  padding: "19px 30px"}}>Click to know more about the data center.</span>
                     <Link className="hover-span  btns contact" href="/india/maa10" >
                                <span className="background-transparent">MAA10</span>
                            </Link></p>

                            <div className="text-center mt-4 wow fadeInUp">
                            <span className="mb-0 d-inline-block quter">Ready for Service </span>
                           {/* RFS date - Q4 2023 */}
                            </div>


                        </div>
                        

                        
                        </Container>
                        </div>

                       

            <CommonForm />

<Footer />

          
        </>
    );
}

export default Chennai;



export async function getServerSideProps() {
    const keyid = 'chennai';
    const pageData = await fetchPageData(keyid);  
    return {
      props: { pageData },
    };
}