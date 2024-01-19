import React from "react";
import { Container } from "react-bootstrap";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Head from 'next/head'
import CommonForm from "@/src/CommonForm";
import CustomHead from "../CustomHead";
import { fetchPageData } from "../api";

const Contact = ({ pageData })=>{

    return(
        <>   
<CustomHead {...pageData} />

        <Header />            
           <div className="contact-banner pad80 top80">
                <Container>
                    <div className="wow fadeInUp">
                    <h2 className="h4 text-center">We are here to <span className="position-relative">help 
                        <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.95 51.05"><defs></defs><g id="Layer_1-2"><rect className="cls-2 polygon" x="17.21" width="25.74" height="25.74" transform="translate(60.16 25.74) rotate(180)"></rect><polygon className="cls-2 polygon flash-0" points="17.21 25.74 17.21 42.94 7.21 42.94 7.21 35.74 0 35.74 0 25.74 17.21 25.74"></polygon><rect className="cls-2 polygon" x="17.21" y="42.94" width="8.11" height="8.11"></rect><rect className="cls-1 " y="35.7" width="7.25" height="7.25" transform="translate(7.25 78.64) rotate(180)"></rect></g></svg>
                        </span>   </h2>
                    <p className="text-center">Whether you have any questions about Digital Connexion, our products, and solutions,<br /> or need any additional information, our team of experts is always here for you.</p>
                    </div>
                </Container>
          </div>


 

          <CommonForm />

          <Footer />
        </>
    )
}



export default Contact;

export async function getServerSideProps() {
    const keyid = 'contact';
    const pageData = await fetchPageData(keyid);  
    return {
      props: { pageData },
    };
}