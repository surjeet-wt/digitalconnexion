import {Col} from "react-bootstrap";
function ColocationData({item}){
    if (!item) {
        return false;
    }
    
    return(
        <Col lg={4} md={6}>
                      <div className="icon-wrapper wow fadeInUp pe-4" data-wow-delay=".2s">
                <div className="d-flex justify-content-between align-items-end" >
                    <h3>{item.heading}</h3>
                    <div className="overflow"><img src={item.imgData} alt={item.innerPara}/></div>
                </div>
                <p>{item.innerPara}</p>
            </div>


            

        </Col>
    )
}

export default ColocationData;