import React, { useEffect} from "react";
import accreditationImg from "../assets/images/accreditation-banner.jpg";
import AccreditationData from '../accreditation/AccreditationData';
import { Container, Row } from "react-bootstrap";
import aboutPixel from "../assets/images/pixles.gif";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Image from "next/image";
import Head from "next/head";
import CommonForm from "@/src/CommonForm";
import CustomHead from "../CustomHead";
import { fetchPageData } from "../api";


function Accreditation({ pageData }){

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      
    
    
    const dataArr = [{
        outerTxt: "LEED Platinum ",
        innterHeading:"LEED Platinum ",
        innerBody1: "The LEED (Leadership in Energy and Environmental Design) Platinum certificate is the highest level of certification awarded by the U.S. Green Building Council (USGBC) for sustainable and environmentally friendly buildings.",
    }, {
        outerTxt: "TIA-942",
        innterHeading:"TIA-942",
        innerBody1: "The Telecommunications Industry Association (TIA) is the globally recognized center for propelling the growth of Information Communication Technology (ICT).",
    }, 
    {
        outerTxt: "AICPA / SOC-2",
        innterHeading:"AICPA / SOC-2",
        innerBody1: "With AICPA/ SOC2 certification, we are able to provide assurance to our customers and stakeholders that we have implemented appropriate controls and safeguards to protect their data and the systems they rely on."
    },
    {
        outerTxt: "PCI-DSS",
        innterHeading:"PCI DSS",
        innerBody1: "Payment Card Industry Data Security Standard (PCI DSS) are a set of technical and operational requirements laid down by the PCI Security Standards Council to protect cardholder data. It applies globally to all entities that accept, process, or store cardholder data globally and applies to all entities that store, process or transmit cardholder data and/or sensitive authentication data."
    },
    {
        outerTxt: "ISO-27001",
        innterHeading:"ISO-27001",
        innerBody1: "Our certification to ISO 27001 is an indication that we are adhering to the industry benchmark standard information security practices to ensure that the critical information assets that we hold are secure at all times."
    },
    {
        outerTxt: "ISO-9001",
        innterHeading:"ISO-9001",
        innerBody1: "Our ISO 9001 certification ensures that our customers and stakeholders are partnering with a data center provider that prioritizes providing consistently high-quality colocation services."
    },
    {
        outerTxt: "ISO-14001",
        innterHeading:"ISO14001",
        innerBody1: "At Digital Connexion we are cognizant of our responsibility to engage in environmentally sustainable practices throughout the lifecycle of our operations. The certification to ISO 14001 is a symbol of our commitment to engage in practices that are designed to reduce our carbon footprint."
    },
    {
        outerTxt: "BCMS-22301/ ISO-22301",
        innterHeading:"BCMS 22301/ ISO 22301",
        innerBody1: "The framework of ISO 22301 ensures that organizations that adhere to it, implement a BCMS that helps to identify and prioritize threats and reduces the likelihood of its occurrence by preparing for being able to respond to and recover from any disruptive incidents. "
    },
    {
        outerTxt: "ISO-20001",
        innterHeading:"ISO20001",
        innerBody1: "ISO/IEC 20001 refers to the international standard developed by ISO specifically for IT Service Management System (ITSM). The standard establishes specification for an efficiently functioning ITSM by identifying and managing key processes related to it, in a manner that satisfies customer needs."
    },
    {
        outerTxt: "ISO-45001",
        innterHeading:"ISO-45001",
        innerBody1: "The International Organization for Standardization(ISO) is an occupational health and safety management standard developed by ISO to enable organizations to manage their Occupational Health and Safety (OH&S) risks and improve their OH&S performance.",
        innerBody2:"Digital Connexion showcases its commitment to creating an ecosystem that supports and promotes the physical and mental health of all workers."
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
                            <div className="banner_head" style={{top: "44%"}}>
                                <h1 className="h4 wow fadeInUp">Adhering to the<br /> best standards.</h1>                                
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-7">
                            <div className="position-relative wow fadeInUp">
                                <Image src={aboutPixel} alt="aboutPixel" className="pixel-about" />
                                <Image src={accreditationImg} className="w-100" alt="accreditationImg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                 <div className="Outer_acc_data pad80 pb-0 grey">
                    <Container fluid className="p-0">
                        <Row>
                        {dataArr.map((item)=>{
                            return  <AccreditationData item={item}/>
                        })}
                        </Row>
                    </Container>
                 </div>
                 <CommonForm />

<Footer />
            </>
        )
}

export default Accreditation;


export async function getServerSideProps() {
    const keyid = 'accreditation';
    const pageData = await fetchPageData(keyid);  
    return {
      props: { pageData },
    };
}