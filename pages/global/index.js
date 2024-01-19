import React from "react";
import accreditationImg from "../assets/images/chennai-banner.png";
import { Container } from "react-bootstrap";
import aboutPixel from "../assets/images/pixles.gif";
import dynamic from "next/dynamic";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Image from "next/image";
import Link from "next/link";
import CommonForm from "@/src/CommonForm";
import CustomHead from "../CustomHead";
import { fetchPageData } from "../api";

function Global({ pageData }) {   

    const MapWithNoSSR = dynamic(() => import("@/src/MapComponent"), {
        ssr: false
      });
    
    return (
        <>
       
        <CustomHead {...pageData} />
        <Header />
            <div className="carrer_banner accreditation_banner top80 banner_inner">
                <div className="container">
                    <div className="row align-items-center position-relative">
                        <div className="col-md-12 col-lg-5">
                            <div  className="banner_head" style={{ top: "44%" }}>
                                <h1 className="h4 wow fadeInUp">
                                Where connectivity knows no boundaries.
                                </h1>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-7">
                            <div  className="position-relative wow fadeInUp">
                                <Image src={aboutPixel} alt="aboutPixel" className="pixel-about" />
                                <Image src={accreditationImg} className="w-100" alt="accreditationImg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="leveData pad80 grey turnkey_div invester_wrapper">
                <Container>
                    <div className="leveData__h mb-0 ">
                        <h2 className="text-center h4  wow fadeInUp" style={{ fontSize: "38px" }}>
                        Pathway to a robust global data center network.
                        </h2>
                        <p className="wow fadeInUp mb-0">
                        Digital Connexion is part of the global Digital Realty platform, which helps us unlock the true potential of collaboration and fuel the digital revolution. Our global network acts as a beacon of connectivity, facilitating the seamless exchange of data and empowering organizations to operate on a global scale.
                        </p>

                        
                    </div>
                </Container>
            </div>

            


            <div className="map_container_div pad80 ">
        <div class="wow fadeInUp">
                <h2 className="h4 text-center mb-5">Our global presence</h2>
                </div>

                        <div id="map" >
                            <MapWithNoSSR />
                        </div>


                <div class="text-center wow fadeInUp">
                    <Link class="hover-span mt-80 btns contact mt-4" href="https://www.digitalrealty.com/data-centers" target="_blank">
                        <span>Know More</span></Link></div>
            </div>

            <CommonForm />
<Footer />

        </>
    );
}

export default Global;

export async function getServerSideProps() {
    const keyid = 'global';
    const pageData = await fetchPageData(keyid);  
    return {
      props: { pageData },
    };
}