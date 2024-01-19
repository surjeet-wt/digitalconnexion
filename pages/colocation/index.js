import React from "react";
import colocationImg from "../assets/images/Colocation.jpg";
import Whyus from "./Whyus";
import { Container, Row, Col } from "react-bootstrap";
import Highest from "../assets/images/Highest.svg";
import Flexible from "../assets/images/Flexible.svg";
import Extensive from "../assets/images/Extensive.svg";
import Local from "../assets/images/Local.svg";
import Global from "../assets/images/Global.svg";
import Engineered from "../assets/images/Engineered-for-a-sustainable-fututre.svg";
import why1 from "../assets/images/why1.png";
import why2 from "../assets/images/why2.png";
import why3 from "../assets/images/why3.png";
import why4 from "../assets/images/why4.png";
import why5 from "../assets/images/resilient.png";
import why6 from "../assets/images/sustainable.png";
import bg from "../assets/images/bg.png";
import aboutPixel from "../assets/images/pixles.gif";
import Link from "next/link";
import Head from "next/head";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Image from "next/image";
import CommonForm from "@/src/CommonForm";
import CustomHead from "../CustomHead";
import { fetchPageData } from "../api";

function Colocation({ pageData }){
   
    const ColoArr = [{
        heading: "Dummy Text1",
        imgData: Highest,
        innerPara:"Highest Uptime SLA ensures resilient infrastructure",
    },
    {
        heading: "Dummy Text2",
        imgData: Flexible,
        innerPara:"Flexible and consistent global configurations",
    },
    {
        heading: "Dummy Text3",
        imgData: Extensive,
        innerPara:"Extensive security and compliance control",
    },
    {
        heading: "Dummy Text4",
        imgData: Local,
        innerPara:"Local and global interconnection",
    },
    {
        heading: "Dummy Text5",
        imgData: Global,
        innerPara:"Global ecosystem of network and service providers",
    },
    {
        heading: "Dummy Text6",
        imgData: Engineered,
        innerPara:"Engineered for a sustainable fututre",
    }
]

const whyArr= [
    {
        id: 1,
        whyimg: why1,
        whyhd: "Scalable",
        whyPara: "Our colocation offerings future-proof your deployment by empowering you with significant capacity to support your growing requirements and accelerate your business growth."
    },
    {
        id: 2,
        whyimg: why2,
        whyhd: "Connected",
        whyPara: "With the legacy and expertise of our founders guiding us, we provide you access to a global ecosystem of network providers that power your business through an open and global platform."
    },
    {
        id: 3,
        whyimg: why3,
        whyhd: "Secure",
        whyPara: "Our colocation facilities are designed to ensure that mission-critical data is always secure and available, with our global command center providing round-the-clock technical, network, and customer support."
    },
    {
        id: 4,
        whyimg: why4,
        whyhd: "Efficient",
        whyPara: "With our colocation solutions, you can deploy and manage your IT infrastructure in real-time, within less time, and lower operating costs."
    },
    {
        id: 5,
        whyimg: why5,
        whyhd: "Reliable",
        whyPara: "Our infrastructure has been designed to be reliable, achieving the highest uptime possible. This is done by implementing various measures such as redundant systems, failover mechanisms, and proactive monitoring. "
    },
    {
        id: 6,
        whyimg: why6,
        whyhd: "Sustainable",
        whyPara: "Designed and operated in an environmentally responsible manner, with a focus on minimizing carbon emissions and maximizing energy efficiency."
    }
]

// const joinData =[
//     {
//         joinHd: "Ready to redesign your business's future?",
//         btnData: "EXPLORE OUR SOLUTIONS"
//     }
//   ]

        return(
            <>

<CustomHead {...pageData} />

        <Header />
                <div className="carrer_banner Colocation_banner top80 banner_inner ">
                <div className="container">
                    <div className="row align-items-center position-relative">
                        <div className="col-md-12 col-lg-5" >
                            <div className="banner_head wow fadeInUp">
                                <h1 className="h4 wow fadeInUp">Colocation <br/>solutions built <br/>for tomorrow.</h1>                                
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
                 <div className="leveData pad80 grey ambitions-wrapper">
                    <Container>
                        <Row>
                        <Col sm={12}>
                                <div animateIn="fadeInUp" className="leveData__h leveData__h1 wow fadeInUp">
                                    <h2 className="text-center h4  wow fadeInUp">Leverage colocation on PlatformDIGITAL<sup>®</sup> to establish your digital footprint.</h2>
                                    <p className="wow fadeInUp mb-0">At Digital Connexion, we endeavor to provide colocation services that ensure your data is secure while giving you the freedom to access and scale your critical IT infrastructure on demand. Here, we empower your business with a solid foundation with the aim of facilitating your expansion into new global markets and delivering an exceptional customer experience. With our colocation services, you will have the confidence and control you require to fulfill your digital ambitions.</p>
                                </div>
                            </Col>                           
                        </Row>
                    </Container>
                 </div>

                 <div className="pad80 whyUs">
                    <Container>
                        {whyArr.map((item)=>{
                                return  <Whyus item={item}/>
                                })}
                    </Container>
                 </div>
                 <div className="wow fadeInUp best-owrd grey all-carrer_section"  >
                    <Image src={bg} alt="bg" className="w-100" />
                    <div className="text-center carrer_data_inner justify-content-center container">
                        <h2 className="h4 wow fadeInUp">It’s time to make your <br />business future-proof.</h2>                     
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

export default Colocation;

export async function getServerSideProps() {
    const keyid = 'colocation';
    const pageData = await fetchPageData(keyid);  
    return {
      props: { pageData },
    };
}