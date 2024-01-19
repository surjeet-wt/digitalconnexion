import React, { useRef, useEffect, useState } from "react";
import aboutPixel from "../assets/images/pixles.gif";
import bamdigit_carrer from "../assets/images/services.png";
import { Container, Row, Col } from "react-bootstrap";
import connectivity from "../assets/video/connectivity.mp4";
import buildtosuit from "../assets/video/Build-To-Suit.mp4";
import colocation from "../assets/video/colocation.mp4";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import CommonForm from "@/src/CommonForm";
import CustomHead from "../CustomHead";
import { fetchPageData } from "../api";


function Services({ pageData }){

    

      const [isVisible, setIsVisible] = useState(false);
      const [defaultValue, setDefaultValue] = useState(0);
      const counterRef = useRef(null);
    
      const onStart = () => {
        console.log('Counter started');
      };
    
      const onEnd = () => {
        console.log('Counter ended');
      };
    
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
                            <div  className="banner_head wow fadeInUp">
                                <h1 className="h4 wow fadeInLeft">Equipping businesses for tomorrow.</h1>
                                <p className="wow fadeInLeft">Build your digital future with Digital Connexion services that enable you to securely deploy, connect, and control your critical infrastructure.</p>

                            </div>
                        </div>
                        <div className="col-md-12 col-lg-7">
                            <div   className="position-relative wow fadeInRight">
                                <Image src={aboutPixel} alt="aboutPixel" className="pixel-about" style={{ top: "13%"}}  />
                                <Image src={bamdigit_carrer} className="w-100 mobile-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>




<div className="network-hub pad80 top80 grey wow fadeInUp" >
    <Container className="position-relative">
        <h2 className="h4 wow fadeInLeft">Colocation</h2>
            <div className="position-relative mb-5">
                <div className="border-50 position-relative ">
                    <video autoPlay loop muted playsInline  className="w-100"> 
                    <source src={colocation} type="video/mp4" />
                </video>

                    <div className="caption grey wow fadeInLeft" style={{top: "0", bottom: "auto", borderRadius: "0",  padding: "80px 170px 30px 30px"}}>
                    <p className="mb-0">Build your digital ecosystem with colocation on PlatformDIGITAL<sup>®</sup>,  the global platform that provides a connected community. Our colocation facility is designed to ensure that your mission-critical data is deployed safely and securely and is always readily available. </p></div>
                </div>
            </div>

            <p className="wow fadeInUp">Partnering with Digital Connexion ensures that you are working with a colocation partner that can future-proof your deployment with significant capacity for your growing requirements. At the same time, our simple and open global platform, PlatformDIGITAL<sup>®</sup>, provides you access to a connected network of over 300 data centers spread across the world, in addition to having access to a dynamic ecosystem of leading services, networks, providers, and partners. Our colocation products are flexible, scalable, and reliable.</p>

            <Link href="/colocation" className="btns wow fadeInUp"><span>Know More</span></Link>

    </Container>
</div>


<div  className="network-hub pad80 wow fadeInUp">
    <Container className="position-relative">
        <h2 className="h4 wow fadeInLeft">Connectivity</h2>
            <div className="position-relative mb-5">
                <div className="border-50 position-relative ">
                    {/* <img src={networkhub} className="w-100 wow fadeInUp" /> */}

                    <video autoPlay loop muted playsInline  className="w-100"> 
                    <source src={connectivity} type="video/mp4" />
                </video>

                    <div className="caption grey wow fadeInLeft" style={{paddingRight: "140px"}}>
                        <p className="mb-0">Leverage the industry’s largest open fabric that empowers you with a secure, reliable, and seamless connectivity solution that provides unmatched global reach for your business.</p></div>
                </div>
            </div>

            <p className="wow fadeInUp">Our interconnection services provide virtual or physical data center connectivity to your customers, partners, providers, and facilities while extending your network's capabilities. Having the right connectivity service helps ensure high availability and improve your disaster recovery plan. Diverse data center connectivity adds security and performance to your most mission-critical applications. Optimize your infrastructure to take advantage of available participants while maintaining your competitive edge and reducing the total cost of ownership.</p>

            <Link href="/connectivity" className="btns wow fadeInUp"><span>Know More</span></Link>
    </Container>
</div>

<div  className="network-hub pad80 grey border-bottom wow fadeInUp">
    <Container className="position-relative">
        <h2 className="h4 wow fadeInLeft">Build-to-Suit</h2>
            <div className="position-relative mb-5">
                <div className="border-50 position-relative ">
                    {/* <img src={networkhub} className="w-100 wow fadeInUp" /> */}

                    <video autoPlay loop muted playsInline  className="w-100"> 
                    <source src={buildtosuit} type="video/mp4" />
                </video>

                    <div className="caption grey wow fadeInLeft" style={{left: "0", right: "auto", textAlign: "right", padding: "40px 30px 80px 170px",  borderRadius: "0px"}}>
                    <p className="mb-0">Customize and control your digital transformation with our Build-to-Suit solution, which allows you to curate your colocation solution from pad ready land to fully operational data centers.</p></div>
                </div>
            </div>


            <p className="wow fadeInUp">We are setting a new standard in providing you with a custom data center solution that empowers you to tailor your center’s interior architectural elements such as entrances, tuck bays, and office space. When you partner with us, you not only partner with a collocation provider who has decades of industry experience and expertise but also get a custom solution curated for you while avoiding the large upfront cost required to build a data center. In addition to this, our sustainable designs facilitate the minimization of your carbon footprint and help you reach your sustainability goals.</p>

            <Link href="/built-to-suit" className="btns wow fadeInUp"><span>Know More</span></Link>

    </Container>
</div>





            <CommonForm />

<Footer />

        </>
    )
}

export default Services;


export async function getServerSideProps() {
    const keyid = 'services';
    const pageData = await fetchPageData(keyid);  
    return {
      props: { pageData },
    };
}