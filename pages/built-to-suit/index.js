import React, { useEffect} from "react";
import colocationImg from "../assets/images/built-to-suit.webp";
import Whyus from "./Whyus";
import { Container, Row,Col } from "react-bootstrap";
import Faster_deployment from "../assets/images/Faster_deployment.svg";
import assurance_security from "../assets/images/assurance_security.svg";
import Cost_effective from "../assets/images/Cost_effective.svg";
import Flexible_scalable from "../assets/images/Flexible_scalable.svg";
import Reduced_carbon from "../assets/images/Reduced_carbon.svg";
import why1 from "../assets/images/Distributed-redundant-design.png";
import why3 from "../assets/images/Flexible-space.png";
import why4 from "../assets/images/Power.png";
import why5 from "../assets/images/Curated-to-fit-your-needs.png";
import bg from "../assets/images/bg.png";
import aboutPixel from "../assets/images/pixles.gif";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Header from "../component/Header";
import Footer from "../component/Footer";
import CommonForm from "@/src/CommonForm";
import CustomHead from "../CustomHead";
import { fetchPageData } from "../api";

function BuildToSuit({ pageData }){

    
    const ColoArr = [{
        heading: "dummy text",
        imgData: Faster_deployment,
        innerPara:"Faster deployment due to provision of turn-key data centers",
    },
    {
        heading: "dummy text",
        imgData: assurance_security,
        innerPara:"Assurance of security and compliance ",
    },
    {
        heading: "dummy text",
        imgData: Cost_effective,
        innerPara:"Cost-effective solution ",
    },
    {
        heading: "dummy text",
        imgData: Flexible_scalable,
        innerPara:"Flexible and scalable infrastructure",
    },
    {
        heading: "dummy text",
        imgData: Reduced_carbon,
        innerPara:"Reduced carbon footprint ",
    }
    
]

const whyArr= [
    {
        id: 4,
        whyimg: why5,
        whyhd: "Customizable",
        whyPara: "With agile business solutions ranging from dedicated partial to full wholesale data center suites, you can customize a solution that is designed to fit your specific requirements."
    },
    {
        id: 1,
        whyimg: why1,
        whyhd: "Design",
        whyPara: "Our data center suite topology and separation of infrastructure allow you to continue running your business without interruption, thanks to the reliability of our distributed redundant design."
    },
    // {
    //     id: 2,
    //     whyimg: why2,
    //     whyhd: "Connectivity",
    //     whyPara: "Our built-to-suit facility enables you to equip your business with seamless interconnectivity to our ecosystem of partners, customers, and service providers."
    // },
    {
        id: 2,
        whyimg: why3,
        whyhd: "Flexible",
        whyPara: "Here you can enjoy the flexibility to grow your business immediately and on-grade, from shipping to the data center floor."
    },
    {
        id: 3,
        whyimg: why4,
        whyhd: "Power",
        whyPara: "With a distributed, redundant design that has no single point of failure, you have access to a reliable framework that provides efficiency and control."
    }
   
]


        return(
            <>

<CustomHead {...pageData} />


            <Header />
                <div className="carrer_banner accreditation_banner top80 banner_inner" >
                <div className="container">
                    <div className="row align-items-center position-relative">
                        <div className="col-md-12 col-lg-5" >
                            <div className="banner_head wow fadeInUp">
                                <h1 className="h4 wow fadeInUp">Designed for<br /> your needs.</h1>                                
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
                 <div className="leveData pad80 grey turnkey_div ambitions-wrapper">
                    <Container>
                        <div className="leveData__h wow fadeInUp">
                            <h2 className="text-center h4  wow fadeInUp">Turn-key solutions curated exclusively for you.</h2>
                            <p className="wow fadeInUp mb-0">Our data centers equip you with the privacy and control akin to having your own data center without the significant capital investment that usually accompanies it. Here, you can enjoy the benefits of large pre-commissioned suites with a distributed redundant design that can be easily subdivided for immediate fit-out and operational commencement. Further, you can leverage our comprehensive portfolio of services and interconnection options to connect to your clouds and choose service providers from our global ecosystem.</p>
                        </div>                              
                    </Container>
                 </div>

                 <div className="pad80 whyUs">
                    <Container>
                        {whyArr.map((item)=>{
                                return  <Whyus item={item}/>
                                })}
                    </Container>
                 </div>
                 <div className="best-owrd grey all-carrer_section wow fadeInUp"  >
                    <Image src={bg} alt="bg" className="w-100" />
                    <div className="text-center carrer_data_inner container">
                        <h2 className="h4 wow fadeInUp">Discover solutions designed for<br /> your business success.</h2>                     
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

export default BuildToSuit;

export async function getServerSideProps() {
    const keyid = 'builttosuit';
    const pageData = await fetchPageData(keyid);  
    return {
      props: { pageData },
    };
}