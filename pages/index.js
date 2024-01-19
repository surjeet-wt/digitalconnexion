import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col, Collapse } from "react-bootstrap";
import bg from "./assets/images/bg3.png";
import connectivity from "./assets/images/connectivity.svg";
import buildsuit from "./assets/images/build-to-suit.svg";
import colocation from "./assets/images/colocation.svg";
import banner from "./assets/video/homepage.mp4";
import Link from "next/link";
import Header from "./component/Header";
import Footer from "./component/Footer";
import "animate.css/animate.min.css";
import locationIndia from "./assets/video/location_india.mp4";
import LatestBlogsAndNews from "./component/LatestBlogsAndNews";
import CounterUppage from "@/src/Counterup";
import CommonForm from "@/src/CommonForm";
import CustomHead from "./CustomHead";
import { fetchPageData } from "./api";


//const inter = Inter({ subsets: ["latin"] });

export default function Homepage({ pageData }) {





    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);

    const handleToggle = () => {
        setOpen(true);
        setOpen1(false);
        setOpen2(false);
    };

    const handleToggle1 = () => {
        setOpen(false);
        setOpen1((prevState) => !prevState);
        setOpen2(false);
    };

    const handleToggle2 = () => {
        setOpen(false);
        setOpen1(false);
        setOpen2((prevState) => !prevState);
    };

    // // Counter
    // const [isVisible, setIsVisible] = useState(false);
    // const [defaultValue, setDefaultValue] = useState(0);
    // const counterRef = useRef(null);

    // const onStart = () => {
    //   console.log('Counter started');
    // };

    // const onEnd = () => {
    //   console.log('Counter ended');
    // };

    // useEffect(() => {
    //   const observer = new IntersectionObserver((entries) => {
    //     const [entry] = entries;
    //     setIsVisible(entry.isIntersecting);
    //   }, { threshold: 0.5 });

    //   if (counterRef.current instanceof Element) {
    //     observer.observe(counterRef.current);
    //   } else {
    //     console.error('Invalid element for observing');
    //   }

    //   return () => {
    //     if (counterRef.current instanceof Element) {
    //       observer.unobserve(counterRef.current);
    //     }
    //   };
    // }, []);

    // useEffect(() => {
    //   setDefaultValue(isVisible ? 100 : 0);
    // }, [isVisible]);

    // Pixel Animation
    useEffect(() => {
        const polygons = document.querySelectorAll(".polygon");
        polygons.forEach((polygon, index) => {
            polygon.classList.add(`flash-${index}`);
        });
    }, []);

   

    return (
        <>
           <CustomHead {...pageData} />
           <Header />
            <div className="banner">
                <Container>
                
                    <div className="text-center">
                        <div className="wow fadeInUp">
                            <h1 className="h4 ">
                                Adding value to the digital <br /> world's greatest asset:{" "}
                                <span className="position-relative">
                                    Data.
                                    <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.95 51.05">
                                        <defs></defs>
                                        <g id="Layer_1-2">
                                            <rect className="cls-2 polygon" x="17.21" width="25.74" height="25.74" transform="translate(60.16 25.74) rotate(180)"></rect>
                                            <polygon className="cls-2 polygon flash-0" points="17.21 25.74 17.21 42.94 7.21 42.94 7.21 35.74 0 35.74 0 25.74 17.21 25.74"></polygon>
                                            <rect className="cls-2 polygon" x="17.21" y="42.94" width="8.11" height="8.11"></rect>
                                            <rect className="cls-1 " y="35.7" width="7.25" height="7.25" transform="translate(7.25 78.64) rotate(180)"></rect>
                                        </g>
                                    </svg>
                                </span>
                            </h1>
                        </div>

                        <div className="wow fadeInUp">
                            <p className="">
                                Delivering data centers that provide a safe and open meeting place for companies,
                                <br />
                                technologies, and data to come together.
                            </p>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="data-scientist">
                <video autoPlay loop muted playsInline className="w-100">
                    <source src={banner} type="video/mp4" />
                </video>
            </div>

            {/* <div className="pad80 data-wrapper pb-0">
                <Container>
                    <div className="wow fadeInUp">
                        <h2 className="h4 text-center">
                            Excellent alone. <br />
                            Exceptional together.{" "}
                        </h2>
                    </div>

                    <div className="wow fadeInUp list-partners">
                        <div className="text-center border-bottom-0 head-partner">
                            <h3 className={`border-bottom-0 ${open ? "active" : ""}`} onClick={handleToggle} aria-controls="example-collapse-text" aria-expanded={open}>
                            Brookfield
                            </h3>

                            <Collapse in={open}>
                                <div className="text-center partners-data">
                                    <div style={{ padding: "40px 0" }}>
                                        <p>
                                            {" "}
                                            Brookfield Infrastructure is a leading global infrastructure company that owns and operates high-quality, long-life assets in the utilities, transport, midstream and data sectors across North and
                                            South America, Asia Pacific and Europe.{" "}
                                        </p>
                                        <Link target="_blank" className="btns_line wow fadeInUp" href="https://bip.brookfield.com/">
                                            {" "}
                                            KNow more
                                        </Link>
                                    </div>
                                </div>
                            </Collapse>
                        </div>
                    </div>

                    <div className="list-partners wow fadeInUp">
                        <div className="text-center border-bottom-0 head-partner">
                            <h3 className={`border-bottom-0 ${open1 ? "active" : ""}`} onClick={handleToggle1} aria-controls="example-collapse-text" aria-expanded={open1}>
                              Jio Platforms
                            </h3>

                            <Collapse in={open1}>
                                <div className="text-center partners-data">
                                    <div style={{ padding: "40px 0" }}>
                                        <p>Jio Platforms is India's top telecom operator, providing <br />future-proof 4G and 5G connectivity.</p>
                                        <Link target="_blank" className="btns_line wow fadeInUp" href="https://www.jio.com/platforms">
                                            KNow more
                                        </Link>
                                    </div>
                                </div>
                            </Collapse>
                        </div>
                    </div>

                    <div className="list-partners wow fadeInUp">
                        <div className="text-center head-partner ">
                            <h3 className={`${open2 ? "active" : ""}`} onClick={handleToggle2} aria-controls="example-collapse-text" aria-expanded={open2}>
                                Digital Realty
                            </h3>

                            <Collapse in={open2}>
                                <div className="text-center partners-data">
                                    <div style={{ padding: "40px 0" }}>
                                        <p>
                                            Digital Realty is a real estate investment trust that owns, acquires, develops, and operates a global data center platform, PlatformDIGITAL®, through which it has created a connected data
                                            community of leading enterprises and service providers.
                                        </p>
                                        <Link target="_blank" className="btns_line" href="https://www.digitalrealty.com/">
                                            KNow more
                                        </Link>
                                    </div>
                                </div>
                            </Collapse>
                        </div>
                    </div>
                </Container>
            </div> */}

            {/* <Container>
              <hr />
            </Container> */}

            <div className="pad80 bookfield-wrapper">
                <Container>
                    <div className="wow fadeInUp">
                        <h2 className="h4 text-center mb-4 ">
                            Your data’s potential is unlimited. <br /> Together, let’s make the most of it.
                        </h2>
                    </div>
                </Container>
            </div>

            <div className="data-center pad80" style={{ backgroundImage: `url(${bg.src})` }}>
                <Container>
                    <Row>
                        <Col lg={6} md={12}>
                            <div className="wow fadeInUp">
                                <h2 className="h4 ">
                                    Here the possibilities <br />
                                    are endless.
                                </h2>
                            </div>
                        </Col>

                        <Col lg={6} md={12}>
                            <div className="wow fadeInUp">
                                <p>Digital Connexion is part of the global Digital Realty platform. PlatformDIGITAL<sup>®</sup> is the global meeting place for data collaboration that delivers a proven foundation and methodology for scaling digital businesses and solving data gravity.</p>
                            </div>
                        </Col>
                    </Row>

                    <div className="counter-wapper">
                        <Row>
                            <Col lg={7} md={6}>
                                <div className="wow fadeInUp counter_box d-flex align-items-baseline m-0 counternumber_1">
                                   
                                <CounterUppage number={300}/> <span>+</span>
                                    {/* <span className="plus">310+</span> */}
                                    <p>Data Centers</p>
                                </div>
                            </Col>
                            <Col lg={5} md={6}>
                                <div className="wow fadeInUp justify-content-end counter_box d-flex align-items-baseline m-0 counternumber_2">
                                    
                              <CounterUppage number={50}/> <span>+</span>
                                    {/* <span className="plus">50+</span> */}
                                    <p>Global Metros</p>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="counter-wapper">
                        <Row>
                            <Col lg={9} md={8} xs={6}>
                                <div  className="wow fadeInUp counter_box d-flex align-items-baseline counternumber_3">
                                   <CounterUppage number={216000}/> <span>+</span>
                                    {/* <span className="plus">216,000+</span> */}
                                    <p>Cross Connections</p>
                                </div>
                            </Col>
                            <Col lg={3} md={4} xs={6}>
                                <div className="wow fadeInUp counter_box d-flex align-items-baseline justify-content-end counternumber_4">
                                   <CounterUppage number={6}/>
                                    {/* <span className="plus">6</span> */}
                                    <p> Continents</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>

            <div className="ambitions-wrapper pad80 ">
                <Container>
                    <div className="wow fadeInUp">
                        <h2 className="h4 text-center ">Powering your digital ambitions.</h2>
                        <p className="text-center ">
                            We have combined our expertise in data center services and real estate acumen <br />
                            to create a unique power of choice and value when and where you need it.
                        </p>
                    </div>
                    <Row>
                        <Col md={4}>
                            <div data-wow-delay=".2s"  className="icon-wrapper  pe-4 wow fadeIn">
                                <div className="d-flex justify-content-between align-items-end">
                                    <h3>Colocation</h3>
                                    <div className="overflow">
                                        <Image src={colocation} alt="Connectivity" />
                                    </div>
                                </div>
                                <p>
                                    Secure and scalable critical IT <br />
                                    infrastructure.
                                </p>
                                <Link href="/colocation" className="btns_line">
                                    KNOW MORE
                                </Link>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div data-wow-delay=".4s"  className="icon-wrapper  pe-2 wow fadeIn">
                                <div className="d-flex justify-content-between align-items-end" style={{ borderBottom: "solid 7px #A4B5D8" }}>
                                    <h3>Connectivity</h3>
                                    <div className="overflow">
                                        <Image src={connectivity} alt="Connectivity" />
                                    </div>
                                </div>
                                <p>
                                    Tailored to power your business <br />
                                    in an interconnected era.
                                </p>
                                <Link href="/connectivity" className="btns_line">
                                    KNOW MORE
                                </Link>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div data-wow-delay=".6s" className="icon-wrapper  ps-2 wow fadeIn">
                                <div className="d-flex justify-content-between align-items-end" style={{ borderBottom: "solid 7px #7791C5" }}>
                                    <h3>Build-to-Suit</h3>
                                    <div className="overflow">
                                        <Image src={buildsuit} alt="Connectivity" />
                                    </div>
                                </div>
                                <p>
                                    Turn-key solutions whenever and <br />
                                    wherever you need them.
                                </p>
                                <Link href="/built-to-suit" className="btns_line">
                                    KNOW MORE
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="map-wrapper pad80 overflow-hidden map-mobile">
                <Container>
                    <div className="wow fadeInUp">
                        <h2 className="h4 text-center">
                            Mumbai and Chennai. <br />
                            The ideal locations for data centers.
                        </h2>
                        <p>
                            With a wide range of connectivity options, our data centers are strategically located in the IT corridor of the cities and offer customers access to local and global networks, internet exchanges, and cloud
                            service providers.
                        </p>
                    </div>

                    <video autoPlay loop muted playsInline className="w-75 m-auto m-0 d-block">
                        <source src={locationIndia} type="video/mp4" />
                    </video>

                    

<div className="text-center mt-4 wow fadeInUp">

<h3 className="mb-0" style={{"fontSize": "22px"}}>OUR FOOTPRINT</h3>

<Link style={{"width" : "110px"}} className="hover-span  btns contact mt-3" href="/india">
<span>India</span>
</Link>

<Link style={{"width" : "110px"}} className="hover-span  btns contact mt-3 ms-5" href="/global">
<span>Global</span>
</Link>
</div>

                </Container>
            </div>

            {/* <div className="news-wrapper pad80">
                <Container>
                    <ScrollAnimation animateIn="fadeInUp">
                        <h2 className="text-center h4 ">Latest Insights</h2>
                    </ScrollAnimation>

                    <Row className="justify-content-center mt-5">
                        <Col md={4} Col lg={4}>
                            <ScrollAnimation animateIn="fadeIn" className="news-box " delay={100}>
                                <div className="overflow">
                                    <Image src={news} alt="news" className="w-100" />
                                </div>
                                <span>15 May 2023</span>
                                <h3>Lorem ipsum is dummy text</h3>
                                <p>Ipsum has been the industry's standard dummy text ever since the standard dummy 1500s.</p>
                                <Link href="/" className="btns_line">
                                    KNOW MORE
                                </Link>
                            </ScrollAnimation>
                        </Col>

                        <Col md={4} Col lg={4}>
                            <ScrollAnimation animateIn="fadeIn" className="news-box " delay={300}>
                                <div className="overflow">
                                    <Image src={news2} alt="news" className="w-100" />
                                </div>
                                <span>15 May 2023</span>
                                <h3>Lorem ipsum is dummy text</h3>
                                <p>Ipsum has been the industry's standard dummy text ever since the standard dummy 1500s.</p>
                                <Link href="/" className="btns_line">
                                    KNOW MORE
                                </Link>
                            </ScrollAnimation>
                        </Col>

                        <Col md={4} Col lg={4}>
                            <ScrollAnimation animateIn="fadeIn" className="news-box " delay={500}>
                                <div className="overflow">
                                    <Image src={news3} alt="news" className="w-100" />
                                </div>
                                <span>15 May 2023</span>
                                <h3>Lorem ipsum is dummy text</h3>
                                <p>Ipsum has been the industry's standard dummy text ever since the standard dummy 1500s.</p>
                                <Link href="/" className="btns_line">
                                    KNOW MORE
                                </Link>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                </Container>
            </div> */}

          

          

<LatestBlogsAndNews />
            <CommonForm />

            <Footer />
        </>
    );
}


export async function getServerSideProps() {
    const keyid = 'home';
    const pageData = await fetchPageData(keyid);  
    return {
      props: { pageData },
    };
}