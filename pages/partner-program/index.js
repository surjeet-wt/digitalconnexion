import Reactt, { useEffect} from "react";
import { Container } from "react-bootstrap";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Head from 'next/head'

import join from "../assets/images/join.png"
import 'wowjs/css/libs/animate.css';
 import aboutPixel from "../assets/images/pixles.gif";
import bg from "../assets/images/bg.png";
import plusCarrer from "../assets/images/plusCarrer.svg";
import bamdigit_carrer from "../assets/images/Partner-Program.jpg";
import plus2 from "../assets/images/plus2.gif";
import { Col, Row } from "react-bootstrap";

import homepage from "../assets/video/plus-grey.mp4";


import Comprehensive from "../assets/images/comprehensive-solutions2.svg";
import Flexible from "../assets/images/partner-logo/Flexible-Partnership-Models.svg";
import Round from "../assets/images/partner-logo/Round-The-Clock-Expert-Assistance.svg";

import Alliance from "../assets/images/Alliance-Partner-Program.svg";
import Referral from "../assets/images/Referral-Partner-Program.svg";
import Agent from "../assets/images/Agent-Partner-Program.svg";
import Reseller from "../assets/images/Reseller-Partner-Program.svg";
import Image from "next/image";
import CommonForm from "@/src/CommonForm";
import CustomHead from "../CustomHead";
import { fetchPageData } from "../api";

const partner = ({ pageData })=>{
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <>   
      
       <CustomHead {...pageData} />

        <Header />            
        

        <div className="carrer_banner top80 banner_inner">
                <div className="container">
                    <div className="row align-items-center position-relative">
                        <div className="col-md-12 col-lg-5" >
                            <div className="wow fadeInUpbanner_head">
                                <h1 className="h4 wow fadeInLeft">Partner with us.</h1>                                
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-7">
                            <div className="wow fadeInUp position-relative wow fadeInRight">
                                <Image src={aboutPixel} alt="aboutPixel" className="pixel-about" />
                                <Image src={bamdigit_carrer} className="w-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="pad80 pb-0 carrer-data_sec position-relative partner_gif" >
            <div className="container">
                    <div className="row">                        
                        <div className="col-12">
                            <h1 className="h4 wow fadeInUp text-center">Tap into new avenues for growth.</h1>
                            <p className="max80 wow fadeInUp  mb-5 text-center">At Digital Connexion, we aim to provide flexible, innovative, and high-performance solutions to the world’s leading enterprises<br /> and service providers. We enable our partners to grow with us by leveraging our platform to the fulfill a wide range of joint customer needs. </p>
                        
                        </div>
                    </div>
                       <div className="carrer-img_circle wow fadeInUp" >   {/* style={{ backgroundImage: 'url(' + plus2 + ')' }} */}
                       <video autoPlay loop muted playsInline  className="w-75 pixel2" style={{right:"0", left:"0"}}> 
                        <source src={homepage} type="video/mp4" />
                    </video>
                            <div className="digital_img text-center position-relative wow fadeInUp">
                                <Image src={join} alt="digital" className="w-50 wow fadeInUp" />
                            </div>
                       </div>
                </div>
            </div>


            <div className="best-owrd pad80 pt-0 data-center position-relative" style={{zIndex:"999"}}>
                <div className="container">
                    <div className="text-center mb-0">                        
                        
                    </div> 
                </div>
            </div>

            <div className="pad80 grey ambitions-wrapper partner-icon"  style={{ backgroundImage: 'url(' + bg + ')' }} > {/* partner-icon */}
                    {/* <Image src={bg} alt="bg" className="w-100" /> */}
                    <div className="container">
                        <div className="wow fadeInUp">
                        <h2 className="h4 text-center">Driving success with collaboration.</h2>  
                        </div>                   
                        <Row >
                     <Col lg={4} md={6}>
                        <div className="icon-wrapper pe-4 wow fadeInUp" data-wow-delay=".2s">
                            <div className="d-flex justify-content-between align-items-end">
                                <h3>Comprehensive<br /> solutions</h3>
                                <div className="overflow"><Image src={Comprehensive} alt="Connectivity" /></div>
                            </div>
                            <p>At Digital Connexion, you will be able to seamlessly fulfill a wide range of customer needs with a suite of services available at our carrier-neutral colocation facility.</p>
                        </div>

                        
                    </Col>
                    <Col  lg={4} md={6}>
                        <div className="icon-wrapper pe-2 wow fadeInUp" data-wow-delay=".4s">
                        <div className="d-flex justify-content-between align-items-end" >
                                <h3>Flexible partnership <br />models</h3>
                                <div className="overflow"><Image src={Flexible} alt="Connectivity" /></div>
                            </div>                            
                            <p>With flexible models of partnership for alliance and channel partners, tailored exclusively to meet your business needs.</p>
                        </div>
                    </Col>                  
                    <Col  lg={4} md={12}>
                        <div className="icon-wrapper ps-2 wow fadeInUp" data-wow-delay=".6s">
                        <div className="d-flex justify-content-between align-items-end" >
                                <h3>Round-the-clock <br />expert assistance</h3>
                                <div className="overflow"><Image src={Round} alt="Connectivity" /></div>
                            </div>
                            <p>Our dedicated support team with extensive industry experience and expertise is available 24*7 for any sales, marketing, and engineering support you need.</p>
                        </div>
                    </Col>
                </Row>
                    </div>
            </div>

            <div className="pad80 succes-wrapper ">
                <div className="container">
                    <div>
                    <h2 className="h4 text-center wow fadeInUp">Our Partner Programs</h2>
                 </div>
                 
                                <Row className="m-0 mt-5">
                                    <Col lg={3} md={6} className="p-0">
                                        <div data-wow-delay=".2s" className="succes-card" style={{background: "#4c4c4c"}}>
                                            <Image src={Agent} alt="Agent Partner Program" />
                                            <h3>Agent partner program</h3>
                                            <p>Our agent partner program allows primary agencies, selling agents, and online market service providers to expand their portfolio of services by leveraging our expansive global platform to deliver industry-leading solutions. </p>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6} className="p-0">
                                    <div data-wow-delay=".4s" className="succes-card" style={{background: "#323232"}}>
                                            <Image src={Reseller} alt="Reseller Partner Program" />
                                            <h3>Reseller partner program </h3>
                                            <p>Our reseller partner program facilitates the delivery of innovative data center solutions to support our joint clients’ mission-critical applications and hybrid IT infrastructure. By partnering with us you can leverage our expertise and power your client’s digital ambitions. </p>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6} className="p-0">
                                    <div data-wow-delay=".6s" className="succes-card" style={{background: "#4c4c4c"}}>
                                            <Image src={Referral} alt="Referral Partner Program" style={{width: "80px"}} />
                                            <h3>Referral partner program</h3>
                                            <p>Our referral partner program ecosystem includes consultants and migration partners that refer deals directly to us and are thereby able to create and deliver market-leading business solutions, thereby diversifying their service offerings. </p>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6} className="p-0">
                                    <div data-wow-delay=".8s" className="succes-card" style={{background: "#323232"}}>
                                            <Image src={Alliance} alt="Alliance Partner Program"  style={{width: "84px"}} />
                                            <h3>Alliance partner program</h3>
                                            <p>Our alliance partner program includes technology and service enablement partners that sell end-to-end solutions to our joint clients, thereby enabling an ecosystem of optimum performance, resilience, connectivity, and flexibility.</p>
                                        </div>
                                    </Col>
                                </Row>

                </div>
            </div>


 

          <CommonForm />

          <Footer />
        </>
    )
}



export default partner;


export async function getServerSideProps() {
    const keyid = 'partnerprogram';
    const pageData = await fetchPageData(keyid);  
    return {
      props: { pageData },
    };
}