import React, { useEffect} from "react";
import colocationImg from "../assets/images/Connectivity-banner.jpg";
import WhyusConnectivity from "./WhyusConnectivity";
import { Container, Row,Col } from "react-bootstrap";
import why1 from "../assets/images/A-legacyof-connectivity-pioneers.png";
import why2 from "../assets/images/Unparalleled-global-reach.png";
import why4 from "../assets/images/Secure-and-reliable-connections.png";
import servicefabric2 from "../assets/images/servicefabric.png";
import bg from "../assets/images/bg.png";
import aboutPixel from "../assets/images/pixles.gif";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Link from "next/link";
import Image from "next/image";
import CommonForm from "@/src/CommonForm";
import CustomHead from "../CustomHead";
import { fetchPageData } from "../api";

function Connectivity({ pageData }){
   
const whyArr= [
    {
        id: 1,
        whyimg: why1,
        whyhd: "Enabling seamless connectivity",
        whyPara: "Our connectivity solutions are the result of constant innovation, industry expertise, and nearly two decades of our patrons’ experience. By harnessing its benefits, we envision empowering your business to unlock new growth avenues."
    },
    {
        id: 2,
        whyimg: why2,
        whyhd: "Global connectivity",
        whyPara: "Leverage our industry-best global data center network, powered by our partnership with Jio, to access a world-class, all-IP, data-strong, and future-proof 4G and 5G connectivity. With Jio's extensive fiber presence covering 99.5% of India's population, our venture strategically expands connectivity to data centers and establishments nationwide. Benefit from Jio's telecom expertise and Digital Realty's top-notch global data center platform, accessing a dense connected data community of partners, solutions, and services for swift and reliable connections to leading data centers and network providers worldwide."
    },
    {
        id: 3,
        whyimg: why4,
        whyhd: "Secure and reliable connections",
        whyPara: "Our forward-looking and highly adaptable connectivity products ensure a highly redundant framework, strengthened by Jio's 4G and 5G networks with deep fiber presence. We prioritize security, reliability, and performance standards, curating our solutions to benchmark industry standards. Additionally, the ServiceFabric™ automated management capabilities further enhance our services' reliability and efficiency, offering our customers secure and seamless connectivity experiences."
    }
]


        return(
            <>

<CustomHead {...pageData} />

<Header />
                <div className="carrer_banner accreditation_banner top80 banner_inner">
                <div className="container">
                    <div className="row align-items-center position-relative">
                        <div className="col-md-12 col-lg-5" >
                            <div className="banner_head wow fadeInUp">
                                <h1 className="h4">Unlock new opportunities for growth and innovation.</h1>                                
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-7">
                            <div className="position-relative wow fadeInUp"> 
                            <Image src={aboutPixel} alt="aboutPixel" className="pixel-about" />
                                <Image src={colocationImg} className="w-100" alt="colocationImg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                 <div className="leveData pad80 grey">
                    <Container>
                        <Row>
                        <Col sm={12}>
                                <div  className="leveData__h mb-0 wow fadeInUp">
                                    <h2 className="text-center h4">Powerful, diverse, and reliable connections. </h2>
                                    <p className="mb-0">We equip you with interconnection services that provide data center connectivity to customers, partners, providers, and facilities while extending your network's capabilities, maintaining a competitive edge, and reducing the total cost of ownership.</p>
                                </div>
                            </Col>
                           
                        </Row>
                    </Container>
                 </div>

                 <div className="pad80 serviceFabric ambitions-wrapper">
                    <Container>
                        <Row className="mt-0">
                        <Col sm={12}>
                                <div  className="ServiceFabric-hd">
                                    <h2 className="h4  wow fadeInUp">ServiceFabric™</h2>
                                    <p className="wow fadeInUp subheading">Ushering in a connected community of data centers. </p>
                                </div>
                            </Col>
                            <Col lg={7} md={12}>
                                <div  className="servicefabric_img">
                                    <Image  src={servicefabric2} alt="bg" className="w-100" />
                                </div>
                            </Col>
                            <Col lg={5} md={12}>
                                <div  className="serviceFabric_para">                                    
                                    <p className="wow fadeInUp pb-0 mb-0">As a part of the PlatformDIGITAL<sup>®</sup> product family, ServiceFabric™ facilitates connecting key points of data exchange centers with a host of on-demand, customizable facilities. Through its distributed system architecture and automated management capability, it works to scale and secure your critical infrastructure architecture and data sets, while simultaneously enabling you to streamline operations and maximize revenues.</p>
                                </div>
                            </Col>
                           
                        </Row>
                    </Container>
                 </div>

                 <div className="pad80 whyUs grey">
                    <Container>
                        {whyArr.map((item)=>{
                                return  <WhyusConnectivity item={item} />
                                })}
                    </Container>
                 </div>
                 <div className="best-owrd grey all-carrer_section"  >
                    <Image src={bg} alt="bg" className="w-100" />
                    <div  className="text-center carrer_data_inner container wow fadeInUp">
                        <h2 className="h4 wow fadeInUp">Unlock the global network of<br /> opportunities with our solutions.</h2>                     
                        <div className="text-center wow fadeInUp all-carrer__btn">
                                 <Link href="/services" className="btns"><span>EXPLORE OUR SOLUTIONS</span></Link>
                        </div>
                    </div> 
                </div>             
                 <CommonForm />     

                 <Footer />         
            </>
        )
}

export default Connectivity;

export async function getServerSideProps() {
    const keyid = 'connectivity';
    const pageData = await fetchPageData(keyid);  
    return {
      props: { pageData },
    };
}   