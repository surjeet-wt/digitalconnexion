import React, { useRef, useEffect, useState } from "react";
import aboutPixel from "../assets/images/pixles.gif";
import bamdigit_carrer from "../assets/images/PlatformDigital.jpg";

import { Container, Row, Col } from "react-bootstrap";
import homepage from "../assets/video/networkHub.mp4";

import controlHub from "../assets/video/controlHub.mp4";
import datahub from "../assets/video/datahub.mp4";
import Head from "next/head";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Link from "next/link";
import Image from "next/image";
import CounterUppage from "@/src/Counterup";
import CommonForm from "@/src/CommonForm";
import CustomHead from "../CustomHead";
import { fetchPageData } from "../api";
function Platform({ pageData }){
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //   }, []);
    return(
        <>
       
        <CustomHead {...pageData} />

        <Header />

            <div className=" top80 banner_inner">
                <div className="container">
                    <div className="row align-items-center position-relative">
                        <div className="col-md-12 col-lg-5" >
                            <div className="banner_head">
                                <h1 className="h4 wow fadeInLeft">Accelerate your <br/> data-driven digital <br/>transformation.</h1>
                                <p className="wow fadeInLeft">PlatformDIGITAL<sup>®</sup> is the global meeting place for data collaboration that delivers a proven foundation and methodology for scaling digital businesses and solving data gravity.</p>

                            </div>
                        </div>
                        <div className="col-md-12 col-lg-7">
                            <div className="position-relative wow fadeInRight">
                                <Image src={aboutPixel} alt="aboutPixel" className="pixel-about" style={{ top: "27.5%"}}   />
                                <Image src={bamdigit_carrer} className="w-100" alt="platform-digital" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="grey pad80 pb-0 map-wrapper map-wrapper-platform overflow-hidden" >
                <div className="container">
                   <h1 className="h4 wow fadeInUp text-center">Our global footprint.</h1>
                    <p className=" text-center wow fadeInUp">Digital Connexion is a part of the global Digital Realty platform.<br />  We provide flexible, secure, and scalable data center solutions to meet your <br />critical infrastructure needs.</p>        
                    <div className="text-center wow fadeInUp mt-4">
                        <Link className="hover-span  btns contact" href="https://www.digitalrealty.com/data-centers" target="_blank"><span>KNow More</span></Link>
                    </div>
                </div>
            </div>


            <div className="best-owrd grey pad80 data-center overflow-hidden position-relative mb-counter">
                <div className="container"> 
                <div className="counter-wapper platform_counter">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="counter_box d-flex align-items-baseline wow fadeInUp counternumber_5" >
                            {/* <span className="plus">310+</span>  */}
                            <CounterUppage number={310}/> <span>+</span>
                                <p>Data centers</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 m-0">
                            <div className="counter_box d-flex align-items-baseline wow fadeInUp justify-content-center counternumber_6" >
                             {/* <span className="plus">50+</span>  */}
                             <CounterUppage number={50}/> <span>+</span>
                                <p>Metros  </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                        <div className="counter_box d-flex align-items-baseline justify-content-end wow fadeInUp counternumber_7" >
                        <CounterUppage number={25}/> <span>+</span>
                            {/* <span className="plus">25+</span>  */}
                                <p>Countries </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="counter-wapper platform_counter border-top-0">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                            <div className="counter_box d-flex align-items-baseline wow fadeInUp counternumber_8" >
                             {/* <span className="plus">1300+</span>  */}
                             <CounterUppage number={1300}/> <span>+</span>
                                <p>Global carriers </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                        <div className="counter_box d-flex align-items-baseline justify-content-end wow fadeInUp counternumber_9"  >
                            {/* <span className="plus">4000+</span>  */}
                            <CounterUppage number={4000}/> <span>+</span>
                                <p>Global customers</p>
                            </div>
                        </div>
                    </div>
                </div>

                </div>
            </div>





<div className="network-hub pad80" id="netwokHub">
    <Container className="position-relative">
        <h2 className="h4 wow fadeInLeft">Network <br /> hub</h2>
            <div className="position-relative mb-5">
                <div className="border-50 position-relative ">
                    {/* <img src={networkhub} className="w-100 wow fadeInUp" /> */}

                    <video autoPlay loop muted playsInline  className="w-100"> 
                    <source src={homepage} type="video/mp4" />
                </video>

                    <div className="caption grey wow fadeInLeft" style={{top: "0", bottom: "auto", borderRadius: "0",  padding: "80px 140px 30px 30px"}}>
                        <p className="mb-0">Optimize network performance by setting up network hubs and interconnected network traffic flows at global points of business presence. This creates select centers of data exchange for scaling digital businesses.</p></div>
                </div>
            </div>


            <p className="wow fadeInUp">Digital business workflows generate a massive amount of data and must support highly interactive traffic behaviors. To reduce latency caused by this data explosion and increase throughput, a new enterprise network architecture is required.</p>
                
            <p className="wow fadeInUp"> This new architecture needs to be localized at global points of business presence, and consolidate traffic flows, and endpoint management into network hubs.  By bringing users, systems, and the network to the data, this strategy removes barriers created by data explosion and creates centers of data exchange to scale digital businesses.</p>
    </Container>
</div>


<div className="network-hub pad80 grey" id="controlHub">
    <Container className="position-relative">
        <h2 className="h4 wow fadeInLeft">Control <br /> hub</h2>
            <div className="position-relative mb-5">
                <div className="border-50 position-relative ">
                    {/* <img src={networkhub} className="w-100 wow fadeInUp" /> */}

                    <video autoPlay loop muted playsInline  className="w-100"> 
                    <source src={controlHub} type="video/mp4" />
                </video>

                    <div className="caption grey wow fadeInLeft" style={{paddingRight: "116px", paddingTop: "40px"}}>
                        <p className="mb-0">Securely manage, process, and store your enterprise’s data through a futuristic digital infrastructure that localizes control at global points of business presence. This  strategy of setting up control hubs enables secure centers of data exchange to help scale digital businesses.</p></div>
                </div>
            </div>


            <p className="wow fadeInUp">Modern digital businesses generate a massive amount of data. To securely manage, process, and store all this data, a new infrastructure and security management architecture is required, one that localizes controls at global points of business presence. </p>
          
           <p className="wow fadeInUp">Get started quickly with a prepackaged control hub solution configuration based on best practices to speed deployment and results, or configure your own based on your unique challenges and goals. </p>
    </Container>
</div>

<div className="network-hub pad80" id="dataHub">
    <Container className="position-relative">
        <h2 className="h4 wow fadeInLeft">Data <br /> hub</h2>
            <div className="position-relative mb-5">
                <div className="border-50 position-relative ">
                    {/* <img src={networkhub} className="w-100 wow fadeInUp" /> */}

                    <video autoPlay loop muted playsInline  className="w-100"> 
                    <source src={datahub} type="video/mp4" />
                </video>

                    <div className="caption grey wow fadeInLeft" style={{left: "0", right: "auto", textAlign: "right", padding: "40px 30px 80px 110px",  borderRadius: "10px 0px 0px 0px"}}>
                        <p className="mb-0">Success in a digital business requires a data infrastructure architecture that localizes aggregation, staging, analytics, streaming, and management at global points of business presence.</p></div>
                </div>
            </div>


            <p className="wow fadeInUp">Localization improves performance and data compliance control and supports the exploding data volume and velocity associated with today’s digital business. The strategy brings users, networks, and controls to the data. This removes the barriers of data gravity and creates centers of data exchange to scale digital businesses. </p>
            <p className="wow fadeInUp">Our turnkey bundle includes the necessary components and services to plan, deploy, and scale your data hubs rapidly, optimizing data exchange between your employees, customers, and business partners.</p>
    </Container>
</div>


<CommonForm />

<Footer />

        </>
    )
}

export default Platform;


export async function getServerSideProps() {
    const keyid = 'platformdigital';
    const pageData = await fetchPageData(keyid);  
    return {
      props: { pageData },
    };
}