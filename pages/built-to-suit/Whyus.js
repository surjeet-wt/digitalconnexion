import {Row,Col } from "react-bootstrap";
import homepage from "../assets/video/plus-grey.mp4";
import Image from "next/image";


function Whyus({item}){

    if (!item) {
        return false;
    }
    const flexClasses = item.id % 2 === 0 ? "flex-row-reverse" : ""

   
    return(
        <div className="outer-whyus_div">
            <Row className={flexClasses} >
            <Col md={7}>
               <div className="wow fadeInUp why-us__img position-relative">  {/* style={{ backgroundImage: 'url(' + plusCarrer + ')' }} */}
                    <video autoPlay loop muted playsInline  className=" pixel2 w-100"> 
                        <source src={homepage} type="video/mp4" />
                    </video>
                    <Image src={item.whyimg} alt="whyus" className="position-relative w-100"/>
               </div>
            </Col>
            <Col md={5}>
                <div className="wow fadeInUp whyUs_data">
                    <h3 className="ms-0 wow fadeInUp">{item.whyhd}</h3>
                    <p className="wow fadeInUp">{item.whyPara}</p>
                </div>
            </Col>
        </Row>
        </div>
    )
}

export default Whyus;