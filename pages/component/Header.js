import React, {useEffect, useState} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/images/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import { useRouter } from 'next/router';

import { FaLinkedinIn, FaTwitter, FaAngleRight } from "react-icons/fa";

import xlogo from "../assets/images/x-logo.svg"




const Header = ()=> {

    const router = useRouter()
   
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const handleNavbarClose = () => {
        setIsNavbarOpen(false); // Close the navbar by setting isNavbarOpen to false
      };
    
    //   const scrollToSection = (id) => {
    //     const element = document.getElementById(id);
    //     if (element) {
    //       element.scrollIntoView({
    //         behavior: 'smooth',
    //         block: 'start',
    //         inline: 'start',
    //       });
      
    //       const navbarCollapse = document.querySelector('.navbar-collapse');
    //       const navbarToggler = document.querySelector('.navbar-toggler');
      
    //       if (navbarCollapse && navbarToggler) {
    //         navbarCollapse.classList.remove('show');
    //         navbarToggler.classList.add('collapsed');
    //       }
    //     }
    //   };
      
      // Example of how to use scrollToSection:
      // scrollToSection('sectionId'); // Replace 'sectionId' with the ID of the section you want to scroll to
      






      
     
      

useEffect(() => {
    const handleScroll = () => {
        const scroll = window.pageYOffset;

        const headerElement = document.querySelector("nav");
        if (scroll >= 150) {
            headerElement.classList.add("darkHeader");
        } else {
            headerElement.classList.remove("darkHeader");
        }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

const [isActive, setIsActive] = useState(false);

const handleClick = () => {
    setIsActive(!isActive);
};

const [isHovered, setIsHovered] = useState(false);
const handleHover = () => {
    setIsHovered(!isHovered);
};



const [showMore, setShowMore] = useState(false);
const handleButtonClick = () => {
    setShowMore(!showMore);
};

const [showMore1, setShowMore1] = useState(false);
const handleButtonClick2 = () => {
    setShowMore1(!showMore1);
};

// Menu
const [openMenu, setOpenMenu] = useState(null);
const [openSecondDropdown, setOpenSecondDropdown] = useState(false);

const handleMenuHover = (menuId) => {
setOpenMenu(menuId);
setOpenSecondDropdown(false);
};

const handleSecondDropdownHover = () => {
setOpenSecondDropdown(true);
};

const handleMenuLeave = () => {
setOpenMenu(null);
setOpenSecondDropdown(false);
};


const handleMenuClick = (menuId) => {
if (openMenu === menuId) {
  setOpenMenu(null);
  setOpenSecondDropdown(false);

    //  const element = document.getElementById("basic-navbar-nav");
    //  element.classList.remove("show");

    //  const mobileNav = document.getmobileNavById("navMobile");
    //  mobileNav.classList.remove("navbar-toggler");

} else {
  setOpenMenu(menuId);
  setOpenSecondDropdown(false);
}
};

// const handleClick2 = () => {
// const element = document.getElementById("basic-navbar-nav");
// element.classList.remove("show");

// // const mobileNav = document.getmobileNavById("navMobile");
// //      mobileNav.classList.remove("navbar-toggler");
// };


// const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       handleNavbarClose(); 
//     }
//   };

const scrollToSection = (id, menuId) => {
    const element = document.getElementById(id);
    if (element) {
        const offset = 1200; 
    
        const elementPosition = element.getBoundingClientRect().top;
        const scrollPosition = window.scrollY;
        const targetPosition = elementPosition + scrollPosition - offset;
    
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });

        if (openMenu === menuId) {
            setOpenMenu(null);
            setOpenSecondDropdown(false);
          } else {
            setOpenMenu(menuId);
            setOpenSecondDropdown(false);
          }

    //     const navbarCollapse = document.querySelector('.navbar-collapse');
    //     const navbarToggler = document.querySelector('.navbar-toggler');
  
    //   if (navbarCollapse && navbarToggler) {
    //     navbarCollapse.classList.remove('show');
    //     navbarToggler.classList.toggle('humburger');
    //   }
  
      // Scroll to top position with a space of 20 pixels
    //   window.scrollTo({
    //     top: -1200,
    //     behavior: 'smooth'
    //   });
    }
  };
  

  return (
    <Navbar bg="light" className="fixed-top">
        <Container>
            <Link href="/" className="navbar-brand">
                <Image src={logo} alt="Bamdigitalrealty" />
            </Link>
            <Navbar.Toggle id="navMobile" aria-controls="basic-navbar-nav" onClick={handleClick} className={isActive ? "collapsed humburger" : ""} />
            <Navbar.Collapse id="basic-navbar-nav" className={isActive ? '' : ''}>
                <Nav className="ms-auto me-0">

                    <li className="d-flex align-items-center" onMouseEnter={() => handleMenuHover('item1')} onMouseLeave={handleMenuLeave}  >
                        <Link   className="hover-span d-flex align-items-center" href="/platform-digital">
                            <span  className={`nav-link d-flex align-items-center ${openMenu === 'item1' ? 'active' : ''}`}>
                                PlatformDIGITAL<sup>®</sup>
                            </span>
                            
                        </Link>
                        <span onClick={() => handleMenuClick('item1')} className="arrowRight"><FaAngleRight /></span>
                        {openMenu === 'item1' && (
                        <div className={`submenu container ${openMenu === 'item1' ? 'active' : ''}`}>
                            <Row>
                                <Col md={12} className="pe-0">
                                    <div className="submenu-dropdown">
                                        <h2>
                                            <Link onClick={() => handleMenuClick('item1')} href="/platform-digital">PlatformDIGITAL<sup>®</sup></Link>
                                        </h2>

                                        <Row className="m-0 p-24">
                                            <Col md={3}>
                                                <div className="submenu-dropdown-link border-right pb-0">
                                                    <Link onClick={() => handleMenuClick('item1')} href="/platform-digital">
                                                        <h3>
                                                        PlatformDIGITAL<sup>®</sup> map
                                                        </h3>
                                                        <p>Explore our network of interconnected data centers on a global data center platform that efficiently hosts your critical IT infrastructure. </p>
                                                    </Link>
                                                </div>

                                                
                                            </Col>

                                            <Col md={3}>
                                            <div className="submenu-dropdown-link border-right">
                                                    <Link href="/platform-digital#netwokHub" onClick={() => scrollToSection('netwokHub','item1')}>
                                                        <h3>Network hub</h3>
                                                        <p className="border-0 pb-0">
                                                            Scale your digital business and optimize network performance by bringing users, networks, clouds, controls, and systems to the data, removing the barriers of data
                                                            gravity.
                                                        </p>
                                                    </Link>
                                                </div>
                                            </Col>

                                            <Col md={3}>
                                                <div className="submenu-dropdown-link pb-0">
                                                    <Link href="/platform-digital#controlHub" onClick={() => scrollToSection('controlHub','item1')}>
                                                        <h3>Control hub</h3>
                                                        <p>
                                                            Lead with the confidence that your deployments are secure by building a futuristic digital infrastructure that deploys and interconnects control at global points of
                                                            business presence to ensure secure centers of data exchange.
                                                        </p>
                                                    </Link>
                                                </div>                                                        
                                            </Col>

                                            <Col md={3}>
                                            <div className="submenu-dropdown-link">
                                                    <Link href="/platform-digital#dataHub" onClick={() => scrollToSection('dataHub','item1')}>
                                                        <h3>Data hub</h3>
                                                        <p className="border-0 pb-0">
                                                            Future-proof your digital growth by deploying, connecting, and hosting critical data infrastructure in proximity to users, networks, clouds, and beyond.{" "}
                                                        </p>
                                                    </Link>
                                                </div>
                                            </Col>
                                            
                                        </Row>
                                    </div>

                                    <div className="submenu-footer">
                                        <Row className="align-items-center">
                                            <Col md={6}>
                                                <div className="submenu-dropdown-link submenu-dropdown">
                                                    <ul className="social_icon">
                                                        <li>
                                                            <Link href="https://twitter.com/BAMDigitalRlty/" target="_blank">
                                                                <Image src={xlogo} alt="twitter" width="10" style={{ "position": "relative" , "top": "-2px;"}} />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="https://www.linkedin.com/company/bam-digital-realty/" target="_blank">
                                                                <FaLinkedinIn />
                                                            </Link>
                                                        </li>
                                                        {/* <li>
                                                            <Link href="https://www.youtube.com/@BAMDigitalRealty" target="_blank">
                                                                <FaYoutube />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="https://www.quora.com/profile/BAM-Digital-Realty?q=BAM%20Digital%20" target="_blank">
                                                                <FaQuora />
                                                            </Link>
                                                        </li> */}
                                                    </ul>
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="menu-links">
                                                    <p>
                                                        <Link href="">+91-22-50020400 </Link>
                                                        <span> | </span>
                                                        <Link href="">info@bamdigitalrealty.in</Link>
                                                    </p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                
                            </Row>
                        </div>
                            )}
                    </li>

                    <li className="d-flex align-items-center"  onMouseEnter={() => handleMenuHover('item2')} onMouseLeave={handleMenuLeave}  >
                        <Link className="hover-span  d-flex align-items-center" href="/services">
                            <span className={`nav-link d-flex align-items-center ${openMenu === 'item2' ? 'active' : ''}`}>SERVICES</span>
                        </Link>
                        <span onClick={() => handleMenuClick('item2')} className="arrowRight"><FaAngleRight /></span>
                        {openMenu === 'item2' && (
                        <div  className={`submenu container ${openMenu === 'item2' ? 'active' : ''}`}>
                            <Row>
                                <Col md={12} className="pe-0">
                                    <div className="submenu-dropdown">
                                        <h2><Link onClick={() => handleMenuClick('item2')} href="/services">SERVICES</Link></h2>

                                        <Row className="m-0 p-24">
                                            <Col md={4}>
                                                <div className="submenu-dropdown-link border-right pb-0">
                                                    <Link onClick={() => handleMenuClick('item2')} href="/colocation">
                                                        <h3>Colocation</h3>
                                                        <p>Leverage colocation on PlatformDIGITAL<sup>®</sup> to build your digital footprint at the center of data exchange.</p>
                                                    </Link>
                                                </div>
                                            </Col>
                                            <Col md={4}>
                                                <div className="submenu-dropdown-link pb-0">
                                                    <Link  onClick={() => handleMenuClick('item2')} href="/connectivity">
                                                        <h3>Connectivity</h3>
                                                        <p> Our secure, reliable, and scalable connectivity solutions are designed to propel your business on the path to success. </p>
                                                    </Link>
                                                </div>
                                            </Col>
                                            <Col md={4}>
                                                <div className="submenu-dropdown-link border-right">
                                                    <Link onClick={() => handleMenuClick('item2')} href="/built-to-suit">
                                                        <h3>Build-to-Suit</h3>
                                                        <p className="border-0 pb-0">Customize your pad ready land parcel and infrastructure with Built to Suit solutions. </p>
                                                    </Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="submenu-footer">
                                        <Row className="align-items-center">
                                            <Col md={6}>
                                                <div className="submenu-dropdown-link submenu-dropdown">
                                                    <ul className="social_icon">
                                                    <li>
                                                            <Link href="https://twitter.com/BAMDigitalRlty/" target="_blank">
                                                                <Image src={xlogo} alt="twitter" width="10" style={{ "position": "relative" , "top": "-2px;"}} />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="https://www.linkedin.com/company/bam-digital-realty/" target="_blank">
                                                                <FaLinkedinIn />
                                                            </Link>
                                                        </li>
                                                        {/* <li>
                                                            <Link href="https://www.youtube.com/@BAMDigitalRealty" target="_blank">
                                                                <FaYoutube />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="https://www.quora.com/profile/BAM-Digital-Realty?q=BAM%20Digital%20" target="_blank">
                                                                <FaQuora />
                                                            </Link>
                                                        </li> */}
                                                    </ul>
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="menu-links">
                                                    <p>
                                                        <Link href="">+91-22-50020400 </Link>
                                                        <span> | </span>
                                                        <Link href="">info@bamdigitalrealty.in</Link>
                                                    </p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                
                            </Row>
                        </div>
                            )}
                    </li>

                    <li className="d-flex align-items-center" onMouseEnter={() => handleMenuHover('item3')} onMouseLeave={handleMenuLeave} >
                        <Link className="hover-span  d-flex align-items-center" href="/india">
                            <span className={`nav-link d-flex align-items-center ${openMenu === 'item3' ? 'active' : ''}`}>LOCATION</span>
                        </Link>
                        <span onClick={() => handleMenuClick('item3')} className="arrowRight"><FaAngleRight /></span>
                        {openMenu === 'item3' && (
                        <div  className={`submenu container ${openMenu === 'item3' ? 'active' : ''}`}>
                            <Row>
                                <Col md={12} className="pe-0">
                                    <div className="submenu-dropdown">
                                        <h2><Link onClick={() => handleMenuClick('item3')}  href="/india">LOCATION</Link></h2>

                                        <Row className="m-0 p-24">
                                            <Col md={4} className="m-0">
                                                <div className="submenu-dropdown-link border-right ">
                                                    <Link onClick={() => handleMenuClick('item3')}  className="h-auto pb-3" href="/india">
                                                        <h3>India</h3>
                                                        <p>Our data center in Chennai and Mumbai fulfill your colocation requirements with interconnections that are primed to provide your enterprise with unlimited global opportunities.</p>
                                                        {/* <img src={india} alt="India" className="w-100 mt-3" /> */}
                                                        </Link>
                                                        
                                                        <div className="dropdown_inner">
                                                            <div className="d-flex justify-space-between align-items-center border-bottom">
                                                                <Link onClick={() => handleMenuClick('item3')} href="/india/chennai" className="p-0 h-auto w-75">Chennai </Link>
                                                                <span className="pull-right w-25" onClick={handleButtonClick} style={{background: "#202020"}}><FaAngleRight /></span>
                                                            </div>
                                                            {showMore && (
                                                            <div className="cheenai" >
                                                            <Link onClick={() => handleMenuClick('item3')}  href="/india/maa10" className=" h-auto pt-2">MAA10</Link>
                                                            </div>
                                                            )}
                                                        </div>

                                                        <div className="dropdown_inner mb-20" style={{paddingBottom:"40px"}}>
                                                            <div className="d-flex justify-space-between align-items-center border-bottom">
                                                                <Link onClick={() => handleMenuClick('item3')} href="/india/mumbai" className="p-0 h-auto w-75">Mumbai </Link>
                                                                <span className="pull-right w-25" onClick={handleButtonClick2} style={{background: "#202020"}}><FaAngleRight /></span>
                                                            </div>
                                                            {showMore1 && (
                                                            <div className="cheenai">
                                                            <Link onClick={() => handleMenuClick('item3')}  href="/india/bom10" className="h-auto pt-2">BOM10</Link>
                                                            </div>
                                                            )}
                                                        </div>


                                                </div>
                                            </Col>
                                            <Col md={4} className="m-0">
                                                <div className="submenu-dropdown-link">
                                                    <Link onClick={() => handleMenuClick('item3')}  href="/global" style={{height: "236px"}}>
                                                        <h3>Global</h3>
                                                        <p>Build your digital ecosystem on a secure and scalable data center network that has all your colocation needs covered.</p>
                                                        {/* <img src={global} alt="India" className="w-100 mt-3" /> */}
                                                    </Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="submenu-footer">
                                        <Row className="align-items-center">
                                            <Col md={6}>
                                                <div className="submenu-dropdown-link submenu-dropdown">
                                                    <ul className="social_icon">
                                                    <li>
                                                            <Link href="https://twitter.com/BAMDigitalRlty/" target="_blank">
                                                                <Image src={xlogo} alt="twitter" width="10" style={{ "position": "relative" , "top": "-2px;"}} />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="https://www.linkedin.com/company/bam-digital-realty/" target="_blank">
                                                                <FaLinkedinIn />
                                                            </Link>
                                                        </li>
                                                        {/* <li>
                                                            <Link href="https://www.youtube.com/@BAMDigitalRealty" target="_blank">
                                                                <FaYoutube />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="https://www.quora.com/profile/BAM-Digital-Realty?q=BAM%20Digital%20" target="_blank">
                                                                <FaQuora />
                                                            </Link>
                                                        </li> */}
                                                    </ul>
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="menu-links">
                                                    <p>
                                                        <Link href="">+91-22-50020400 </Link>
                                                        <span> | </span>
                                                        <Link href="">info@bamdigitalrealty.in</Link>
                                                    </p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                
                            </Row>
                        </div>
                        )}
                    </li>

                    <li className="d-flex align-items-center">
                        <Link   className="hover-span  d-flex align-items-center pointer-deafult" href="/resources/newsroom">
                            <span className="nav-link d-flex align-items-center">RESOURCES</span>
                        </Link>
                    </li>

                    <li className="d-flex align-items-center" onMouseEnter={() => handleMenuHover('item4')} onMouseLeave={handleMenuLeave} >
                        <Link className="hover-span  d-flex align-items-center" href="/investor">
                            <span className={`nav-link d-flex align-items-center ${openMenu === 'item4' ? 'active' : ''}`}>ABOUT</span>
                        </Link>
                        <span onClick={() => handleMenuClick('item4')} className="arrowRight"><FaAngleRight /></span>
                        {openMenu === 'item4' && (
                        <div className={`submenu container ${openMenu === 'item4' ? 'active' : ''}`}>
                            <Row>
                                <Col md={12} className="pe-0">
                                    <div className="submenu-dropdown">
                                        <h2>ABOUT</h2>

                                        <Row className="m-0 p-24">
                                            <Col md={4}>
                                                <div className="submenu-dropdown-link border-right pb-0">
                                                    <Link onClick={() => handleMenuClick('item4')} href="/investor" className="h-200">
                                                        <h3>Investors</h3>
                                                        <p> Our full spectrum data center solutions are backed by the global leaders in digital transformation and data center management. </p>
                                                    </Link>
                                                </div>
                                            </Col>

                                            <Col md={4}>
                                                <div className="submenu-dropdown-link border-right">
                                                    <Link onClick={() => handleMenuClick('item4')} href="/partner-program" className="h-200">
                                                        <h3>Partner Program</h3>
                                                        <p className="border-0 pb-0"> Expand your reach and provide innovative solutions for our joint customers by leveraging our global platform. </p>
                                                    </Link>
                                                </div>
                                            </Col>
                                            <Col md={4}>
                                                <div className="submenu-dropdown-link border-right pb-0">
                                                    <Link onClick={() => handleMenuClick('item4')} href="/accreditation" className="h-200">
                                                        <h3>Accreditation </h3>
                                                        <p>Host your data and critical applications with our state-of-the-art data centers which meet benchmark compliance and security standards. </p>
                                                    </Link>
                                                </div>
                                            </Col>

                                                        <Col md={4} className="m-0">
                                                            

                                                <div className="submenu-dropdown-link border-right">
                                                    <Link onClick={() => handleMenuClick('item4')} href="/careers" className="h-200 mt-4">
                                                        <h3>Careers</h3>
                                                        <p className="border-0 pb-0"> Become a part of a work ecosystem dedicated to bringing companies and data together to revolutionize the digital future.</p>
                                                    </Link>
                                                </div>
                                                        </Col>

                                            <Col md={4} className="m-0">
                                                <div className="submenu-dropdown-link pb-0">
                                                    <Link onClick={() => handleMenuClick('item4')} href="/our-team" className="h-200 mt-4">
                                                        <h3>Our Team</h3>
                                                        <p>Meet the team dedicated to building a global digital ecosystem that is connected and data-driven. </p>
                                                    </Link>
                                                </div>
                                            </Col>
                                            <Col md={4} className="m-0">
                                                <div className="submenu-dropdown-link pb-0">
                                                    <Link onClick={() => handleMenuClick('item5')} href="/events/organising?type=all" className="h-200 mt-4">
                                                        <h3>Events</h3>
                                                        <p>Learn more about the daily happenings and programs at Digital Connexion. </p>
                                                    </Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="submenu-footer">
                                        <Row className="align-items-center">
                                            <Col md={6}>
                                                <div className="submenu-dropdown-link submenu-dropdown">
                                                    <ul className="social_icon">
                                                    <li>
                                                            <Link href="https://twitter.com/BAMDigitalRlty/" target="_blank">
                                                                <Image src={xlogo} alt="twitter" width="10" style={{ "position": "relative" , "top": "-2px;"}} />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="https://www.linkedin.com/company/bam-digital-realty/" target="_blank">
                                                                <FaLinkedinIn />
                                                            </Link>
                                                        </li>
                                                        {/* <li>
                                                            <Link href="https://www.youtube.com/@BAMDigitalRealty" target="_blank">
                                                                <FaYoutube />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="https://www.quora.com/profile/BAM-Digital-Realty?q=BAM%20Digital%20" target="_blank">
                                                                <FaQuora />
                                                            </Link>
                                                        </li> */}
                                                    </ul>
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="menu-links">
                                                    <p>
                                                        <Link href="">+91-22-50020400 </Link>
                                                        <span> | </span>
                                                        <Link href="">info@bamdigitalrealty.in</Link>
                                                    </p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                            )}
                    </li>

                    <Link   className="hover-span  btns contact pointer-deafult" href="/contact">
                        <span>CONTACT US</span>
                    </Link>
                    
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default Header;