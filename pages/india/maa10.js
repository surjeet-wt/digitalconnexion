import React, { useRef, useEffect, useState } from "react";
import aboutPixel from "../assets/images/pixles.gif";
import bamdigit_carrer from "../assets/images/MAA-10.png";
import { Container, Row, Col } from "react-bootstrap";
import building from "../assets/images/building.svg";
import power from "../assets/images/power.svg";
import cooling from "../assets/images/cooling.svg";
import Chennai_Brochure_2feb from "../assets/images/pdf/Digital-Connexion-Chennai-Brochure.pdf";
import Schedule from "./Schedule";
import Link from "next/link";
import Image from "next/image";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Head from "next/head";
import CounterUppage from "@/src/Counterup";
import CommonForm from "@/src/CommonForm";
import CustomHead from "../CustomHead";
import { fetchPageData } from "../api";
import DownloadBrochure from "./DownloadBrochure";
function Maa10({ pageData }){

  // PDF
  const handlePDFLinkClick = () => {
    window.open(Chennai_Brochure_2feb, '_blank');
  };

     // Modal
     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);


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



      const [isVisible, setIsVisible] = useState(false);
      const [defaultValue, setDefaultValue] = useState(0);
      const counterRef = useRef(null);
    
    
      useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          const [entry] = entries;
          setIsVisible(entry.isIntersecting);
        });
    
        if (counterRef.current) {
          observer.observe(counterRef.current);
        }
    
        return () => {
          if (counterRef.current) {
            observer.unobserve(counterRef.current);
          }
        };
      }, []);
    
      useEffect(() => {
        // Set the default value when the component mounts
        setDefaultValue(0);
      }, []);
    

      
    
    return(
        <>
        
        <CustomHead {...pageData} />


        <Header />

            <div className=" top80 banner_inner">
                <div className="container">
                    <div className="row align-items-center position-relative">
                        <div className="col-md-12 col-lg-5" >
                            <div className="banner_head">
                                <h1 className="h4 wow fadeInLeft"><span className="highlight d-block"> MAA10.</span> Powering organizations.</h1>
                                <p className="wow fadeInUp ">  Located in our Chennai campus, this data center<br /> facility future-proofs businesses by addressing their increasing <br />power and space needs.</p>
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



            <div className="best-owrd grey ma10 pad80 data-center overflow-hidden position-relative">
                <div className="container">
                <h2 className="h4  wow fadeInUp mb-5 mt-4">Transform your data infrastructure. </h2>

                    <div className="counter-wapper">
                    <div className="row">
                        <div className="col-lg-8 col-md-6">
                            <div className="counter_box d-flex align-items-center wow fadeInUp counter_box1" >
                            <CounterUppage number={196000} className="12"  />
                            <span className="plus maa-size">sq. ft</span> 
                                <p> Gross floor area</p>
                            </div>
                        </div>

                                    

                        <div className="col-lg-4 col-md-6">
                        <div className="counter_box d-flex align-items-center justify-content-end wow fadeInUp counter_box2" >
                        <CounterUppage number={20}/>
                            <span className="plus maa-size">MW</span> 
                                <p>Total IT load  </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="counter-wapper border-top-0">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                            <div className="counter_box d-flex align-items-center wow fadeInUp counter_box3" >

                            <span className="plus maa-size">G+ </span> 
                            <CounterUppage number={6}/>
                                <p>Floors </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                        <div className="counter_box d-flex align-items-center justify-content-end wow fadeInUp counter_box4"  >
                        <span className="plus maa-size">TIA- </span> 
                        <CounterUppage number={942}/>
                                <p> Rated 3</p>
                            </div>
                        </div>
                    </div>
                </div>

               
                </div>
            </div>




            <div className="ambitions-wrapper maa10-wrap pad80 ">
            <Container>
                <h2 className="h4 text-center wow fadeInUp">Specifications</h2>


                <Row>
                <Col lg={4} md={6}>
                        <div className="icon-wrapper wow fadeInUp pe-4" data-wow-delay=".2s">
                            <div className="d-flex justify-content-between align-items-end" >
                                <h3>Building</h3>
                                <div className="overflow"><Image src={building} alt="Building" /></div>
                            </div>
                            <ul>
                                <li>Data hall rating: 2.2 MW to 4.4 MW</li>
                                <li>Floor loading capacity: 15 KN/m<sup>2</sup></li>
                            </ul>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className="icon-wrapper wow fadeInUp pe-2" data-wow-delay=".4s">
                        <div className="d-flex justify-content-between align-items-end" >
                                <h3>Power</h3>
                                <div className="overflow"><Image src={power} alt="Power" /></div>
                            </div>                            
                            <ul>
                                <li>Total power capacity: 150 MVA</li>
                                <li>UPS redundancy: N+2</li>
                            </ul>
                        </div>
                    </Col>  

                    <Col lg={4} md={12}>
                        <div className="icon-wrapper wow fadeInUp ps-2" data-wow-delay=".6s">
                        <div className="d-flex justify-content-between align-items-end" >
                                <h3>Cooling</h3>
                                <div className="overflow"><Image src={cooling} alt="Cooling" /></div>
                            </div>
                            <ul>
                                <li>Cooling redundancy: N+2</li>
                            </ul>
                        </div>
                    </Col>


                            <Col md={12}>
                            <div className="text-center mt-5">
                        
                            <div className="hover-span  btns contact me-5"  onClick={handleShow} style={{cursor:"pointer"}} >
                                <span>SCHEDULE A TOUR</span>
                            </div>
                            {/* <Link className="hover-span  btns contact"  onClick={handlePDFLinkClick} href={Chennai_Brochure_2feb} target="_blank">
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

<Footer />

         <Schedule show={show}  handleClose={handleClose}/>

         <DownloadBrochure shows={shows} handleCloses={handleCloses} />

        </>
    )
}

export default Maa10;


export async function getServerSideProps() {
    const keyid = 'maa10';
    const pageData = await fetchPageData(keyid);  
    return {
      props: { pageData },
    };
}