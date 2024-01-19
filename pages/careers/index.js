import React from "react";
import aboutPixel from "../assets/images/pixles.gif";
import bg from "../assets/images/bg.png";
import bamdigit_carrer from "../assets/images/bamdigit_carrer.png";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import CommonForm from "@/src/CommonForm";
import CustomHead from "../CustomHead";
import { fetchPageData } from "../api";

function Carrers({ pageData }){
   
      
    return(
        <>       
     
<CustomHead {...pageData} />

<Header />

            <div className="carrer_banner top80 banner_inner">
                <div className="container">
                    <div className="row align-items-center position-relative">
                        <div className="col-md-12 col-lg-5" >
                            <div className="banner_head">
                                <h1 className="h4 wow fadeInLeft">Join our team.</h1>                                
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-7">
                            <div className="position-relative wow fadeInRight">
                                <Image src={aboutPixel} alt="aboutPixel" className="pixel-about" />
                                <Image src={bamdigit_carrer} className="w-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className=" pad80 pb-0 carrer-data_sec position-relative mb-carrers" >
            <div className="container">
                    <div className="row">                        
                        <div className="col-12">
                            <h2 className="carrer-p wow fadeInUp h4 font38 position-relative"  style={{zIndex:"999"}}>We nurture your professional growth <br />and ambitions.</h2>                            
                        </div>
                    </div>
                       <div className="carrer-img_circle pb-0 wow fadeInUp" >
                        <div className="text-center all-carrer__btn position-relative" style={{zIndex:"999"}}>
                                    <Link href="/contact" className="btns"><span>JOIN US TODAY</span></Link>
                                </div>
                       </div>

                </div>
            </div>


            <div className="best-owrd  pad80 pt-0 data-center  mb-carrers-content" style={{zIndex:"999"}}>
                <div className="container">
                    <div  className="text-center wow fadeInUp mb-0">                        
                        <p className="max80 pt-5">Our commitment to innovation means that you will be at the forefront of cutting-edge technologies, working alongside industry experts to shape the future of data management.</p>
                        <p className="max80 pt-5">Demonstrate your capabilities, while taking on new challenges, leading impactful projects, and contributing to the success of our organization and our clients.</p>
                        
                    </div> 
                </div>
            </div>

            {/* <div className="best-owrd grey all-carrer_section"  style={{backgroundImage: `url(${bg.src})` }}>
                    <ScrollAnimation animateIn="fadeInUp" className="text-center carrer_data_inner">
                        <h2 className="h4 wow fadeInUp">Join us as we transform the <br />data landscape of India.</h2>                     
                        <div className="text-center wow fadeInUp all-carrer__btn">
                                 <Link href="/" className="btns"><span>JOIN US NOW</span></Link>
                        </div>
                    </ScrollAnimation> 
            </div> */}


            <CommonForm />

<Footer />

        </>
    )
}

export default Carrers;

export async function getServerSideProps() {
    const keyid = 'careers';
    const pageData = await fetchPageData(keyid);  
    return {
      props: { pageData },
    };
}