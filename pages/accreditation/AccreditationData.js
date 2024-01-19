import { Col } from "react-bootstrap";

function AccreditationData({item}){
    if (!item) {
        return false;
    }

    //    const item = {
    //         outerTxt: "",
    //         innterHeading:"",
    //         innerBody:""
    //     }
    
        return(
            <Col lg={4} md={6} className="m-0">
                <div className="inner_acc_data">
                    <div className="inner_acc_h">
                        <h3>{item.outerTxt}</h3>
                    </div>
                    <div className="inner_acc_o_data">
                        <h4>{item.innterHeading}</h4>
                        <p>{item.innerBody1}</p>
                        <p>{item.innerBody2}</p>
                        <p>{item.innerBody3}</p>
                    </div>
                </div>                   
            </Col>
        )
    }
    export default AccreditationData;