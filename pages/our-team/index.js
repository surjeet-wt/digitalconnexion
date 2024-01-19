import React, { useRef, useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { FaLinkedinIn, FaPlus, FaQuoteLeft, FaAngleLeft, FaAngleRight   } from "react-icons/fa";

import praveen_nair from "../assets/images/team/praveentheran-balachandran.webp";
import anbu_shanmugam from "../assets/images/team/anbu-shanmugam.webp";

import jogindra_singh_thakur from "../assets/images/team/jogindra-singh-thakur2.webp";
import lancelot_dsouza from "../assets/images/team/lancelot-dsouza.webp";

import harshad_deshmukh from "../assets/images/team/harshad_deshmukh.webp";
import vishal_kabra from "../assets/images/team/vishal_kabra.webp";
import meckamalil_jacob_minu from "../assets/images/team/meckamalil_jacob_minu.webp";
import Raghavendra_TR from '../assets/images/team/Raghavendra_TR.webp';
import shruti_paliwal from "../assets/images/team/shruti_paliwal.webp";
import srikanth_kosaraju from "../assets/images/team/srikanth_kosaraju.webp";
import bhaumik_kaji from "../assets/images/team/bhaumik_kaji.webp";
import sukrit_anand from "../assets/images/team/sukrit_anand.webp";
import anuj_prabhakar from "../assets/images/team/anuj_prabhakar.webp";

import benedicta_suresh_correia from "../assets/images/team/benedicta_suresh_correia.webp";
import rehan_sajid_dharme from "../assets/images/team/rehan_sajid_dharme.webp";
import mohan_kumar from "../assets/images/team/mohan_kumar.webp";
import niranjan_tiwlekar from "../assets/images/team/niranjan_tiwlekar.webp";
import nirmal_durairaj from "../assets/images/team/nirmal_durairaj.webp";
import Aishwariya_Das  from "../assets/images/team/Aishwariya_Das.webp";
import Hariprabhu_Jeyaraman from "../assets/images/team/Hariprabhu_Jeyaraman.webp";
import Janvi_Gawade  from "../assets/images/team/Janvi_Gawade.webp";
import Suman_Pal  from "../assets/images/team/Suman_Pal.webp";
import CB_Velayuthan  from "../assets/images/team/CB-Velayuthan.webp";



import user from "../assets/images/mask.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import aboutPixel from "../assets/images/pixles.gif";
import team from "../assets/images/team.webp";
import Harshad_Panchal from "../assets/images/team/Harshad_Panchal.webp";
import CommonForm from "@/src/CommonForm";
import CustomHead from "../CustomHead";
import { fetchPageData } from "../api";



function Team({ pageData }){

  const [showMore, setShowMore] = useState(false);
  const handleButtonClick = () => {
      setShowMore(!showMore);
  };

  const [showMore1, setShowMore1] = useState(false);
  const handleButtonClick2 = () => {
      setShowMore1(!showMore1);
  };

  const sliderRef = useRef(null);

  var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false
    };

    const handlePrevClick = () => {
      sliderRef.current.slickPrev();
    };
  
    const handleNextClick = () => {
      sliderRef.current.slickNext();
    };


    return(
        <>
       
       <CustomHead {...pageData} />

       <Header />

       <div className="carrer_banner accreditation_banner top80 banner_inner" >
                <div className="container">
                    <div className="row align-items-center position-relative">
                        <div className="col-md-12 col-lg-5" >
                            <div className="banner_head">
                                <h1 className="h4 wow fadeInUp">Our team.</h1>                                
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-7">
                            <div className="position-relative wow fadeInUp"> 
                            <Image src={aboutPixel} alt="aboutPixel" className="pixel-about" />
                                <Image src={team} className="w-100" alt="team"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


          
            <div className="pad80 leadership-wrapper border-bottom grey">
                <div className="container">
                  

        <Row className="justify-space">

        <Col lg={4} md={6}>
                            <div  className="column people-wrapper top60 wow fadeInUp"  >
                                <div className="overflow-hidden"><Image src={Aishwariya_Das} className="w-100"  /></div>
                                    <div className="text-wrapper">
                                        <div className="header-wrapper position-relative light-blue">
                                        <h3>Aishwariya Das </h3>
                                            <p>Senior Manager - Design</p>

                                            <div className="footer-wrapper d-flex justify-content-between">
                                                <Link rel="noopener noreferrer" className="linkdien m-0" href="#"><FaLinkedinIn /> </Link>
                                            </div>
                                            

                                        </div>
                                        
                                    </div>
                                </div>
                            </Col>

                <Col lg={4} md={6} >
                            <div  className="wow fadeInUp column people-wrapper position-relative overflow-hidden"  >
                                    <div className="overflow-hidden"><Image src={anbu_shanmugam} className="w-100"  /></div>
                                        <div className="text-wrapper">
                                            <div className="header-wrapper position-relative">
                                                <h3>Anbu Shanmugam</h3>
                                                <p>SVP - Engineering Design & Ops</p>
                                                <div className="footer-wrapper d-flex justify-content-between">
                                                    <Link  rel="noopener noreferrer" className="linkdien m-0" href=""><FaLinkedinIn /> </Link>
                                                    <span className="zoom m-0 d-flex justify-content-center align-items-center"><FaPlus /></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="hover-flip">
                                            <p className="team-memberdescription">Anbu Shanmugam is  SVP - Engineering Design & Ops, for Digital Connexion. Prior to joining Digital Connexion, he oversaw the building of a new data centre for NTT Global Data Centers in India. Over the last 12 years, he has constructed and delivered more than 250 MW of data centre capacity across India. He has more than 25 years of experience in leading large-scale projects, facilities management, system deployment, and operations. He is a certified Data Centre Specialist (CDCS), a certified Project Management Professional (PMP), a certified Lead Auditor in Business Continuity Management Systems, and a Six Sigma Green Belt holder. He holds a BSc in Electrical Engineering and an Advanced Diploma in Business Administration.</p>

                                            <h3>Anbu Shanmugam</h3>
                                                <p>SVP - Engineering Design & Ops</p>
                                                <Link target="_blank" rel="noopener noreferrer" className="linkdien m-0" href="https://www.linkedin.com/in/anbu-shanmugam-6391818/" ><FaLinkedinIn /> </Link>
                                        </div>
                            </div>
                </Col>

                <Col lg={4} md={6}>
                            <div  className="wow fadeInUp column people-wrapper top60"  >
                                <div className="overflow-hidden"><Image src={anuj_prabhakar} className="w-100"  /></div>
                                    <div className="text-wrapper">
                                        <div className="header-wrapper position-relative green">
                                            <h3>Anuj Prabhakar</h3>
                                            <p>Director - Procurement</p>

                                            <div className="footer-wrapper d-flex justify-content-between">
                                                <Link target="_blank" rel="noopener noreferrer" className="linkdien m-0" href="https://www.linkedin.com/in/anujprabhakar/"><FaLinkedinIn /> </Link>
                                            </div>
                                            

                                        </div>
                                        
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6}>
                            <div  className="wow fadeInUp column people-wrapper top120"  >
                                <div className="overflow-hidden"><Image src={benedicta_suresh_correia} className="w-100"  /></div>
                                    <div className="text-wrapper">
                                        <div className="header-wrapper position-relative greys">
                                            <h3>Benedicta Suresh Correia</h3>
                                            <p>Manager - EA & Admin </p>

                                            <div className="footer-wrapper d-flex justify-content-between">
                                                <Link target="_blank" rel="noopener noreferrer" className="linkdien m-0" href="https://www.linkedin.com/in/benedicta-corriea-715026b7"><FaLinkedinIn /> </Link>
                                            </div>
                                            

                                        </div>
                                        
                                    </div>
                                </div>
                            </Col>

                        


                            <Col lg={4} md={6} >
                            <div  className="wow fadeInUp column people-wrapper top-60"  >
                                <div className="overflow-hidden"><Image src={bhaumik_kaji} className="w-100"  /></div>
                                    <div className="text-wrapper">
                                        <div className="header-wrapper position-relative light-blue">
                                            <h3>Bhaumik Kaji</h3>
                                            <p>Sr Manager - Taxation</p>

                                            <div className="footer-wrapper d-flex justify-content-between">
                                                <Link target="_blank" rel="noopener noreferrer" className="linkdien m-0" href="https://www.linkedin.com/in/bhaumik-kaji-80b4a249/"><FaLinkedinIn /> </Link>
                                            </div>
                                            

                                        </div>
                                        
                                    </div>
                                </div>
                            </Col> 


                            <Col lg={4} md={6} >
                            <div  className="wow fadeInUp column people-wrapper top-60 position-relative overflow-hidden"  >
                                <div className="overflow-hidden"><Image src={CB_Velayuthan} className="w-100"  /></div>
                                    <div className="text-wrapper">
                                        <div className="header-wrapper position-relative">
                                            <h3>CB Velayuthan </h3>
                                            <p>CEO</p>

                                            <div className="footer-wrapper d-flex justify-content-between">
                                                <Link rel="noopener noreferrer" className="linkdien m-0" href="https://www.linkedin.com/in/cb-velayuthan/"><FaLinkedinIn /> </Link>
                                            </div>
                                            

                                        </div>
                                        
                                    </div>
                                    <div className="hover-flip">
                                            <p className="team-memberdescription">A seasoned leader with over 25 years of experience working in the US, Europe, and Asia, he is a results-focused executive with passion for technology as a force for empowering people and organizations to build a better tomorrow. Before joining Digital Connexion, CB was the Global Managing Director of Strategic Alliances at Equinix, USA, where he successfully led business with large enterprises. Prior to that, he led Global Sales for Nokia, driving significant revenue growth. During his time there, he also created a Partner Business Unit and spent many years in the India Market building nationwide Telecom networks for key operators.</p>

                                            <h3>CB Velayuthan</h3>
                                                <p>CEO</p>
                                                <Link target="_blank" rel="noopener noreferrer" className="linkdien m-0" href="https://www.linkedin.com/in/cb-velayuthan/"><FaLinkedinIn /> </Link>
                                        </div>
                                </div>
                            </Col> 

                            <Col lg={4} md={6} >
                            <div  className="wow fadeInUp column people-wrapper top60"  >
                                <div className="overflow-hidden"><Image src={Hariprabhu_Jeyaraman} className="w-100"  /></div>
                                    <div className="text-wrapper">
                                        <div className="header-wrapper position-relative green">
                                            <h3>Hariprabhu Jeyaraman</h3>
                                            <p>Project Manager</p>

                                            <div className="footer-wrapper d-flex justify-content-between">
                                                <Link target="_blank" rel="noopener noreferrer" className="linkdien m-0" href="https://www.linkedin.com/in/hariprabhu-jeyaraman-119a58227/"><FaLinkedinIn /> </Link>
                                            </div>
                                            

                                        </div>
                                        
                                    </div>
                                </div>
                            </Col>


                            <Col lg={4} md={6} >
                            <div  className="wow fadeInUp column people-wrapper top120">
                                <div className="overflow-hidden"><Image src={harshad_deshmukh} className="w-100"  /></div>
                                    <div className="text-wrapper">
                                        <div className="header-wrapper position-relative">
                                            <h3>Harshad Deshmukh</h3>
                                            <p>Sr. Manager - Finance</p>

                                            <div className="footer-wrapper d-flex justify-content-between">
                                                <Link target="_blank" rel="noopener noreferrer" className="linkdien m-0" href="https://www.linkedin.com/in/harshad-deshmukh-b9556134/"><FaLinkedinIn /> </Link>
                                            </div>
                                            

                                        </div>
                                        
                                    </div>
                                </div>
                            </Col>


                            <Col lg={4} md={6} >
                            <div  className="wow fadeInUp column people-wrapper top60">
                                <div className="overflow-hidden"><Image src={Harshad_Panchal} className="w-100"  /></div>
                                    <div className="text-wrapper">
                                        <div className="header-wrapper position-relative yellow">
                                        <h3>Harshad Panchal</h3>
                                            <p>Sr Project Manager - HVAC</p>

                                            <div className="footer-wrapper d-flex justify-content-between">
                                                <Link target="_blank" rel="noopener noreferrer" className="linkdien m-0" href="https://www.linkedin.com/in/harshad-panchal-680b63137"><FaLinkedinIn /> </Link>
                                            </div>
                                            

                                        </div>
                                        
                                    </div>
                                </div>
                            </Col>


                            <Col lg={4} md={6} >
                            <div  className="wow fadeInUp column people-wrapper top60">
                                <div className="overflow-hidden"><Image src={Janvi_Gawade} className="w-100"  /></div>
                                    <div className="text-wrapper">
                                        <div className="header-wrapper position-relative light-blue">
                                        <h3>Janvi Gawade</h3>
                                            <p>Manager - Procurement</p>

                                            <div className="footer-wrapper d-flex justify-content-between">
                                                <Link target="_blank" rel="noopener noreferrer" className="linkdien m-0" href="https://www.linkedin.com/in/janvi-gawade-82374723b/"><FaLinkedinIn /> </Link>
                                            </div>
                                            

                                        </div>
                                        
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} >
                            <div  className="wow fadeInUp column people-wrapper top60">
                                <div className="overflow-hidden"><Image src={jogindra_singh_thakur} className="w-100"  /></div>
                                    <div className="text-wrapper">
                                        <div className="header-wrapper position-relative greys">
                                        <h3>Jogindra Singh Thakur</h3>
                                            <p>Director - Sales</p>

                                            <div className="footer-wrapper d-flex justify-content-between">
                                                <Link target="_blank" rel="noopener noreferrer" className="linkdien m-0" href="https://www.linkedin.com/in/jogindra-thakur-ba416012/"><FaLinkedinIn /> </Link>
                                            </div>
                                            

                                        </div>
                                        
                                    </div>
                                </div>
                            </Col>



        




                            <Col lg={4} md={6} >
                            <div  className="wow fadeInUp column people-wrapper top-60"  >
                                <div className="overflow-hidden"><Image src={lancelot_dsouza} className="w-100"  /></div>
                                    <div className="text-wrapper">
                                        <div className="header-wrapper position-relative  light-blue">
                                        <h3>Lancelot Dsouza</h3>
                                            <p>Director - Sales</p>

                                            <div className="footer-wrapper d-flex justify-content-between">
                                                <Link target="_blank" rel="noopener noreferrer" className="linkdien m-0" href="https://www.linkedin.com/in/laancelot-dsouza-13b01528/"><FaLinkedinIn /> </Link>
                                            </div>
                                            

                                        </div>
                                        
                                    </div>
                                </div>
                            </Col>

                           

                            <Col lg={4} md={6} >
                            <div className="wow fadeInUp column people-wrapper top120"  >
                                <div className="overflow-hidden"><Image src={meckamalil_jacob_minu} className="w-100"  /></div>
                                    <div className="text-wrapper">
                                        <div className="header-wrapper position-relative green">
                                            <h3>Meckamalil Jacob Minu</h3>
                                            <p>Director - Projects</p>

                                            <div className="footer-wrapper d-flex justify-content-between">
                                                <Link target="_blank" rel="noopener noreferrer" className="linkdien m-0" href="https://www.linkedin.com/in/meckamalil-jacob-minu-35b11721b/"><FaLinkedinIn /> </Link>
                                            </div>
                                            

                                        </div>
                                        
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} >
                            <div className="wow fadeInUp column people-wrapper top-60" >
                                <div className="overflow-hidden"><Image src={mohan_kumar} className="w-100"  /></div>
                                    <div className="text-wrapper">
                                        <div className="header-wrapper position-relative yellow">
                                            <h3>Mohan Kumar S</h3>
                                            <p>Director - Projects</p>

                                            <div className="footer-wrapper d-flex justify-content-between">
                                                <Link target="_blank" rel="noopener noreferrer" className="linkdien m-0" href="https://www.linkedin.com/in/mohan-kumar-s-77284b31"><FaLinkedinIn /> </Link>
                                            </div>
                                            

                                        </div>
                                        
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6}>
                            <div className="wow fadeInUp column people-wrapper top60"  >
                                <div className="overflow-hidden"><Image src={niranjan_tiwlekar} className="w-100"  /></div>
                                    <div className="text-wrapper">
                                        <div className="header-wrapper position-relative">
                                            <h3>Niranjan Tiwlekar</h3>
                                            <p>Sr Manager - IBMS & Security</p>

                                            <div className="footer-wrapper d-flex justify-content-between">
                                                <Link target="_blank" rel="noopener noreferrer" className="linkdien m-0" href="https://www.linkedin.com/in/niranjan-tiwlekar-9aaa5935"><FaLinkedinIn /> </Link>
                                            </div>
                                            

                                        </div>
                                        
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6}>
                            <div className="wow fadeInUp column people-wrapper top120" >
                                <div className="overflow-hidden"><Image src={nirmal_durairaj} className="w-100"  /></div>
                                    <div className="text-wrapper">
                                        <div className="header-wrapper position-relative green">
                                            <h3>Nirmal Durairaj</h3>
                                            <p>Sr Manager - DC & Renewables</p>

                                            <div className="footer-wrapper d-flex justify-content-between">
                                                <Link target="_blank" rel="noopener noreferrer" className="linkdien m-0" href="https://www.linkedin.com/in/nirmal-durairaj-69470190"><FaLinkedinIn /> </Link>
                                            </div>
                                            

                                        </div>
                                        
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} >
                            <div className="wow fadeInUp column top-60 people-wrapper position-relative overflow-hidden" >
                                    <div className="overflow-hidden"><Image src={praveen_nair} className="w-100"  /></div>
                                        <div className="text-wrapper">
                                            <div className="header-wrapper position-relative">
                                                <h3>Praveen Nair</h3>
                                                <p>SVP - Business Development</p>
                                                <div className="footer-wrapper d-flex justify-content-between">
                                                    <Link target="_blank" rel="noopener noreferrer" className="linkdien m-0" href="https://www.linkedin.com/in/praveenbn1/"><FaLinkedinIn /> </Link>
                                                    <span className="zoom m-0 d-flex justify-content-center align-items-center"><FaPlus /></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="hover-flip">
                                            <p>Praveen Nair is SVP - Business Development, for Digital Connexion. Prior to Digital Connexion, Praveen was the Sales Director, India and Malaysia, for Bridge Data Centres, He has been involved in the data centre industry for the past decade and was the Country Manager, India and Middle East, for Datacenter Dynamics, a large, UK-based data centre focused media and research firm. He has over 20 years of experience across the infrastructure, technology, and media sectors. Praveen is a former Licensed Marine Engineer and holds a postgraduate diploma in Business Administration.</p>

                                            <h3>Praveen Nair</h3>
                                                <p>SVP - Business Development</p>
                                                <Link target="_blank" rel="noopener noreferrer" className="linkdien m-0" href="https://www.linkedin.com/in/praveenbn1/"><FaLinkedinIn /> </Link>
                                        </div>
                            </div> </Col>
                       

                            <Col lg={4} md={6} >
                            <div className="wow fadeInUp column people-wrapper top60">
                                <div className="overflow-hidden"><Image src={Raghavendra_TR} className="w-100"  /></div>
                                    <div className="text-wrapper">
                                        <div className="header-wrapper position-relative greys">
                                            <h3>Raghavendra T.R.</h3>
                                            <p>Associate Director - Projects</p>

                                            <div className="footer-wrapper d-flex justify-content-between">
                                                <Link target="_blank" rel="noopener noreferrer" className="linkdien m-0" href="https://www.linkedin.com/in/raghavendra-tr-58320337"><FaLinkedinIn /> </Link>
                                            </div>
                                            

                                        </div>
                                        
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6}>
                            <div className="wow fadeInUp column people-wrapper top120" >
                                <div className="overflow-hidden"><Image src={rehan_sajid_dharme} className="w-100"  /></div>
                                    <div className="text-wrapper">
                                        <div className="header-wrapper position-relative yellow">
                                            <h3>Rehan Sajid Dharme</h3>
                                            <p>Director - Engineering</p>

                                            <div className="footer-wrapper d-flex justify-content-between">
                                                <Link target="_blank" rel="noopener noreferrer" className="linkdien m-0" href="https://www.linkedin.com/in/rehan-dharme-921a6b43"><FaLinkedinIn /> </Link>
                                            </div>
                                            

                                        </div>
                                        
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6}>
                            <div className="wow fadeInUp column people-wrapper top-60" >
                                <div className="overflow-hidden"><Image src={shruti_paliwal} className="w-100"  /></div>
                                    <div className="text-wrapper">
                                        <div className="header-wrapper position-relative greys">
                                            <h3>Shruti Paliwal</h3>
                                            <p>Director - Marketing</p>

                                            <div className="footer-wrapper d-flex justify-content-between">
                                                <Link target="_blank" rel="noopener noreferrer" className="linkdien m-0" href="https://www.linkedin.com/in/shruti-paliwal/"><FaLinkedinIn /> </Link>
                                            </div>
                                            

                                        </div>
                                        
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6}>
                            <div className="wow fadeInUp column people-wrapper top60" >
                                <div className="overflow-hidden"><Image src={srikanth_kosaraju} className="w-100"  /></div>
                                    <div className="text-wrapper">
                                        <div className="header-wrapper position-relative green">
                                            <h3>Srikanth Kosaraju</h3>
                                            <p>Director - Operations</p>

                                            <div className="footer-wrapper d-flex justify-content-between">
                                                <Link target="_blank" rel="noopener noreferrer" className="linkdien m-0" href="https://www.linkedin.com/in/srikanth-kosaraju-b53a2817/"><FaLinkedinIn /> </Link>
                                            </div>
                                            

                                        </div>
                                        
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="m-0">
                            <div className="wow fadeInUp column people-wrapper top120 position-relative overflow-hidden" >
                                <div className="overflow-hidden"><Image src={sukrit_anand} className="w-100"  /></div>
                                    <div className="text-wrapper">
                                        <div className="header-wrapper position-relative yellow">
                                            <h3>Sukrit Anand</h3>
                                            <p>VP - Investments & Portfolio Management</p>

                                            <div className="footer-wrapper d-flex justify-content-between">
                                                <Link target="_blank" rel="noopener noreferrer" className="linkdien m-0" href="https://www.linkedin.com/in/sukrit-anand-9843b114/"><FaLinkedinIn /> </Link>
                                            </div>
                                            

                                        </div>
                                        
                                    </div>
                                    <div className="hover-flip yellow">
                                            <p>Sukrit Anand has over 12 years of real estate investment experience with leading fund managers and investment banks across asset classes. He has expertise in greenfield development acquisitions, core buyouts, JVs and M&A, with end-to-end execution including strategy, negotiations and structuring. Prior to joining Digital Connexion, he has worked with Godrej Funds and J.P. Morgan where he was involved in transactions across Real Estate and Technology sectors.</p>

                                            <h3>Sukrit Anand</h3>
                                                <p>VP - Investments & Portfolio Management</p>
                                                <Link target="_blank" rel="noopener noreferrer" className="linkdien m-0" href="https://www.linkedin.com/in/sukrit-anand-9843b114/"><FaLinkedinIn /> </Link>
                                        </div>
                                </div>
                            </Col>


                            <Col lg={4} md={6} className="m-0">
                            <div className="wow fadeInUp column people-wrapper top120 m-0" >
                                <div className="overflow-hidden"><Image src={Suman_Pal} className="w-100"  /></div>
                                    <div className="text-wrapper">
                                        <div className="header-wrapper position-relative">
                                        <h3>Suman Pal </h3>
                                            <p>Project Manager</p>

                                            <div className="footer-wrapper d-flex justify-content-between">
                                                <Link target="_blank" rel="noopener noreferrer" className="linkdien m-0" href="https://www.linkedin.com/in/suman-pal-a50374b9"><FaLinkedinIn /> </Link>
                                            </div>
                                            

                                        </div>
                                        
                                    </div>
                                </div>
                            </Col>

                            {/* <Col lg={4} md={6} className="m-0">
                            <div  className="column people-wrapper top-60" >
                                <div className="overflow-hidden"><Image src={vishal_kabra} className="w-100"  /></div>
                                    <div className="text-wrapper">
                                        <div className="header-wrapper position-relative light-blue">
                                            <h3>Vishal Kabra</h3>
                                            <p>Vice President - Finance</p>

                                            <div className="footer-wrapper d-flex justify-content-between">
                                                <Link target="_blank" rel="noopener noreferrer" className="linkdien m-0" href="https://www.linkedin.com/in/vishal-kabra-39833713/"><FaLinkedinIn /> </Link>
                                            </div>
                                            

                                        </div>
                                        
                                    </div>
                                </div>
                            </Col>           */}
        </Row>
                </div>
            </div>


                <div className="qoutes grey pad80 border-bottom">
                    <Container>
                        <Row>
                            <Col md={5}>
                                    <div className="quotes-icon d-flex mb-4">
                                        <span className="quotes-icon-svg me-4 d-flex align-items-center"><FaQuoteLeft /></span>

                                        <span onClick={handlePrevClick} className="left arrow  me-1 d-flex align-items-center"><FaAngleLeft /> </span>
                                        <span onClick={handleNextClick} className="right arrow  d-flex align-items-center"><FaAngleRight /></span>
                                    </div>
                            </Col>

                            <Col md={7}>

                                <Slider ref={sliderRef}  {...settings}>
                                    <div className="qoutes-slider">
                                        <p>Committed to excellence, collaboration, and innovation, life at Digital Connexion is all about continually learning and growing in new ways, everyday. </p>

                                        <p className="desgination">Project Manager</p>
                                    </div>

                                    <div className="qoutes-slider">
                                        <p>Anchored in a culture of trust, accountability, and adaptability, the company empowers individuals with the freedom to drive impactful initiatives. Beyond a conventional workplace, Digital Connexion serves as a dynamic platform for meaningful contributions and personal flourishing.</p>

                                        <p className="desgination">SVP - Business Development</p>
                                    </div>

                                    <div className="qoutes-slider">
                                        <p>At Digital Connexion, we redefine excellence by seamlessly integrating our global platform with local expertise. Here I've witnessed the potent combination of our worldwide capabilities and regional insights, resulting in a truly unmatched service to our clients. It's a privilege to contribute to a company that thrives on this distinctive synergy.  </p>
                                        <p className="desgination">SVP - Engineering Design & Ops</p>
                                    </div>

                                    <div className="qoutes-slider">
                                        <p>At Digital Connexion, I've embraced a vibrant ecosystem driving digital advancement. Since joining, I've witnessed the company's dedication to nurturing talent and growth, fueling my passion for my work every day.</p>
                                        <p className="desgination">Project Manager</p>
                                    </div>


                                </Slider>
                            </Col>
                        </Row>
                    </Container>
                </div>

            <CommonForm />
            <Footer />

        </>
    )
}

export default Team;


export async function getServerSideProps() {
    const keyid = 'ourteam';
    const pageData = await fetchPageData(keyid);  
    return {
      props: { pageData },
    };
}