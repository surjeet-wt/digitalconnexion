import React from "react";
import Link from "next/link";

import Header from "../component/Header";
import Footer from "../component/Footer";

import accreditationImg from "../assets/images/investor.png";
import { Container, Row, Col } from "react-bootstrap";
import aboutPixel from "../assets/images/pixles.gif";
import Image from "next/image";
import Head from "next/head";
import CommonForm from "@/src/CommonForm";
import CustomHead from "../CustomHead";
import { fetchPageData } from "../api";

const About =({ pageData }) =>{
    return(
        <>
<CustomHead {...pageData} />

        <Header />
        <div className="carrer_banner accreditation_banner top80 banner_inner">
                <div className="container">
                    <div className="row align-items-center position-relative">
                        <div className="col-md-12 col-lg-5" >
                            <div className="wow fadeInUp banner_head" style={{top: "44%"}}>
                                <h1 className="h4 ">Our investors.</h1>                                
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-7">
                            <div className="wow fadeInUp position-relative ">
                                <Image src={aboutPixel} alt="aboutPixel" className="pixel-about" />
                                <Image src={accreditationImg} className="w-100" alt="accreditationImg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="pad80">
                <Container>
                    <p>Digital Connexion is a joint venture (JV) between Brookfield Asset Management (Brookfield), Reliance Industries Limited and Digital Realty. The company provides the full spectrum of highly-connected and scalable data center, colocation and interconnection solutions to meet the critical infrastructure needs of enterprises and digital services companies in India, and brings together enterprises, network service, cloud and IT providers to give customers and partners a key connectivity gateway to Europe, the Middle East, Africa and Asia. The JV combines the complementary strengths of Jio’s massive digital and connectivity ecosystem in India and tech capabilities with Brookfield, one of the largest owners and operators of critical global infrastructure, and Digital Realty, provider of the world’s largest data center platform enabling customers with access to over 50 metros across 6 continents.</p>
                </Container>
            </div>


            <div className="leveData  grey turnkey_div invester_wrappers">
                    <Container>
                        <Row>
                            <Col lg={4} md={12}>
                            <div  className="leveData__h wow fadeInUp" >
                            <h2 className="text-center h4">Brookfield Infrastructure</h2>
                                  <p className=" mb-4">Brookfield Infrastructure is a leading global infrastructure company that owns and operates high-quality, long-life assets in the utilities, transport, midstream and data sectors across North and South America, Asia Pacific and Europe. Brookfield Infrastructure is focused on assets that generate stable cash flows and require minimal maintenance capital expenditures. Brookfield Infrastructure is the flagship listed infrastructure company of Brookfield Asset Management, a global alternative asset manager with over $850 billion of assets under management. </p>
                                   
                                   <div className="text-center">
                                        <Link href="https://bip.brookfield.com/" target="_blank" className="btns" ><span>Know More</span></Link>
                                    </div>
                                    
                            </div>
                            </Col>


                            <Col lg={4} md={12}>
                            <div  className="leveData__h wow fadeInUp" style={{background: "#fff"}} >
                            <h2 className="text-center h4">Jio<br /> Platforms</h2>
                                    <p className=" mb-4">Jio Platforms Limited (“Jio”), a subsidiary of Reliance Industries Limited, has built a world-class, all-IP, data-strong, future-proof network with 4G LTE and 5G technologies (through its wholly owned subsidiary, Reliance Jio Infocomm Limited). It is the only network conceived as a Mobile Video Network from the ground up. It is future-ready and can be easily upgraded to support even more data, as technologies advance to 6G and beyond. Jio has brought transformational changes in the Indian digital services space to enable the vision of Digital India for 1.4 billion Indians and propel India into global leadership in the digital economy. It has created an eco-system comprising of network, devices, applications and content, service experience, and affordable tariffs for everyone to live the Jio Digital Life.
 </p>
                                   
                                   <div className="text-center">
                                        <Link href="https://www.jio.com/platforms" target="_blank" className="btns" ><span>Know More</span></Link>
                                    </div>
                                    
                            </div>
                            </Col>

                            <Col lg={4} md={12}>
                            <div className="leveData__h wow fadeInUp" >
                                    

                                    <h2 className="text-center h4"> Digital<br /> Realty</h2>
                                    <p className=" mb-4">Digital Realty supports the world's leading enterprises and service providers by delivering the full spectrum of data center, colocation, and interconnection solutions. PlatformDIGITAL<sup>®</sup>, the company's global data center platform, provides customers with a trusted foundation and proven Pervasive Data center Architecture (PDx™) solution methodology for scaling digital businesses and efficiently managing Data Gravity challenges. Digital Realty's global data center footprint gives customers access to the connected communities that matter to them, with 310+ facilities in 50+ metros across 24 countries on 6 continents. </p>
                                    <div className="text-center">
                                    <Link href="https://www.digitalrealty.com/" target="_blank" className="btns"><span>Know More</span></Link>
                                    </div>
                            </div>
                            </Col>
                        </Row>
                    </Container>
                 </div>




                 
                


                 <CommonForm />

            <Footer />
        </>
    )
}

export default About;


export async function getServerSideProps() {
    const keyid = 'investor';
    const pageData = await fetchPageData(keyid);  
    return {
      props: { pageData },
    };
}