import React, { useState } from "react";
import aboutPixel from "../assets/images/pixles.gif";
import bamdigit_carrer from "../assets/images/BOM-10.png";

import { Container, Row, Col, Form } from "react-bootstrap";

import building from "../assets/images/building.svg";
import power from "../assets/images/power.svg";
import cooling from "../assets/images/cooling.svg";

import mumbai_brochure from "../assets/images/pdf/Digital-Connexion-Mumbai-Brochure.pdf";
import Schedule from "../india/Schedule";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import CommonForm from "@/src/CommonForm";
import CustomHead from "../CustomHead";
import { fetchPageData } from "../api";
import DownloadBrochure from "./DownloadBrochureMumbai";
function Bom10({ pageData }){


     // Modal
     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
     // PDF
     const handlePDFLinkClick = () => {
        window.open(mumbai_brochure, '_blank');
      };

   
      // Download Brochure
  const [shows, setShows] = useState(false);
  const handleCloses = () => {
    //console.log("handleClose called");
    setShows(false);
  };  
  const handleShows = () => {
    //console.log("handleShow called");
    setShows(true);
  };
      
    
    return(
        <>


<CustomHead {...pageData} />

        <Header />

            <div className=" top80 banner_inner">
                <div className="container">
                    <div className="row align-items-center position-relative">
                        <div className="col-md-12 col-lg-5" >
                            <div className="banner_head">
                                <h1 className="h4 wow fadeInLeft"><span className="highlight d-block"> BOM10.</span>Designed for exponential growth.</h1>
                                <p className="wow fadeInLeft">Our Mumbai data center offers access to multiple submarine cable landing stations, and  a carrier-dense ecosystem, for business-critical enterprises. </p>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-7">
                            <div className="position-relative wow fadeInRight">
                                <Image src={aboutPixel} alt="aboutPixel" className="pixel-about" style={{ top: "20%"}}  />
                                <Image src={bamdigit_carrer} className="w-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="ambitions-wrapper pad80 mb-top-0 maa10-wrap">
            <Container>
                <h2 className="h4 text-center wow fadeInUp">Specifications</h2>

                <Row>
                <Col lg={4} md={6}>
                        <div className="wow fadeInUp icon-wrapper pe-4" >
                            <div className="d-flex justify-content-between align-items-end" >
                                <h3>Building</h3>
                                <div className="overflow"><Image src={building} alt="Building" /></div>
                            </div>
                            <ul>
                                <li>Data hall rating: 2.5 MW to 6.0 MW</li>
                                <li>Floor loading capacity: 15 KN/m<sup>2</sup></li>
                            </ul>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className="wow fadeInUp icon-wrapper pe-2" >
                        <div className="d-flex justify-content-between align-items-end" >
                                <h3>Power</h3>
                                <div className="overflow"><Image src={power} alt="Power" /></div>
                            </div>                            
                            <ul>
                                <li>Total power capacity: 60 MVA</li>
                                <li>UPS redundancy: N+2</li>
                            </ul>
                        </div>
                    </Col>  

                    <Col lg={4} md={12}>
                        <div className="wow fadeInUp icon-wrapper ps-2" >
                        <div className="d-flex justify-content-between align-items-end" >
                                <h3>Cooling</h3>
                                <div className="overflow"><Image src={cooling} alt="Cooling" /></div>
                            </div>
                            <ul>
                                <li>Cooling redundancy: N+1</li>
                            </ul>
                        </div>
                    </Col>

                  <Col md={12}>
                  <div className="wow fadeInUp text-center mt-5">
                        <div className="hover-span btns contact me-5" href="/" onClick={handleShow} style={{cursor:"pointer"}} >
                            <span>SCHEDULE A TOUR</span>
                        </div>
                        {/* <Link className="hover-span btns contact"  onClick={handlePDFLinkClick} href="" target="_blank">
                            <span>DOWNLOAD BROCHURE</span>
                        </Link> */}

                            <div className="hover-span  btns contact"   onClick={handleShows}  style={{cursor:"pointer"}}>
                                <span>DOWNLOAD BROCHURE</span>
                            </div>
                    </div>
                  </Col>         
                </Row>
            </Container>
        </div>






            <CommonForm />

            <Schedule show={show}  handleClose={handleClose}/>
            
            <DownloadBrochure shows={shows} handleCloses={handleCloses} />
        
<Footer />

        </>
    )
}

export default Bom10;



export async function getServerSideProps() {
    const keyid = 'bom10';
    const pageData = await fetchPageData(keyid);  
    return {
      props: { pageData },
    };
}