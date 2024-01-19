import React, {useEffect, useState} from "react";
import thanku from '../assets/images/desktopthankyou.svg';
import thankuM from '../assets/images/mobilethankyou.svg';
 import thanksvg from '../assets/images/thanksvg.svg'
// import pixles from "../assets/images/pixles.gif"
import Link from "next/link";
// import Head from "next/head";
import Image from "next/image";
import CustomHead from "../CustomHead";
import { fetchPageData } from "../api";


function ThankYou({pageData}) {

    const [displayHeaderFooter, setDisplayHeaderFooter] = useState(true);

    useEffect(() => {
      let url = window.location.pathname;
      let segments = url.split("/");
      let lastSegment = segments[segments.length - 1];
  
      if (lastSegment === "thank-you") {
        setDisplayHeaderFooter(false);
      } else {
        setDisplayHeaderFooter(true);
      }
    }, []);
   
    return(
        <>

<CustomHead {...pageData} />

            <div className="thanku"> 

                <div className="thanku-data">
                <Image src={thanku} alt="pixles" className="desktopview"/>
                <Image src={thankuM} alt="pixles" className="mobileview"/>                 
                  <Link href="/" className="btns"><span>Back TO HOME</span></Link>
                </div>
                <Image src={thanksvg} alt="pixles" className="sideimage"/>
            </div>
        </>
    )
}
export default ThankYou


export async function getServerSideProps() {
  const keyid = 'thankyou';
  const pageData = await fetchPageData(keyid);  
  return {
    props: { pageData },
  };
}