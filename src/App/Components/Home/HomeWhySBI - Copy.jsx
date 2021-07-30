import React, { Component } from "react";
// import Axios from "../../Services/Shared/Axios";
import { Row, Container, Col } from "react-bootstrap";
import { withRouter } from 'react-router-dom';

// import team from "../../assets/images/team.svg";
// import customerreview from "../../assets/images/customer-review.svg";
// import hospitalbuildings from "../../assets/images/hospital-buildings.svg";
// import contract from "../../assets/images/contract.svg";
// import medicalkit from "../../assets/images/medical-kit.svg";
// import parkedcar from "../../assets/images/parked-car.svg";
// import icrairdalogo from "../../assets/images/icra-irda-logo.svg";
// import locationacrossindia from "../../assets/images/location-icon.svg";
import satellitelocation from "../../assets/images/satellite-location.svg";
// import icraicon from "../../assets/images/icra-icon.svg";

import protecticon from "../../assets/images/protect-icon.svg";
import customericon from "../../assets/images/customer-icon.svg";
import hospitalicon from "../../assets/images/hospital-icon.svg";
import claimsicon from "../../assets/images/claims-icon.svg";
import pointericon from "../../assets/images/pointer-icon.svg";
// import motoricon from "../../assets/images/motor-icon.svg";

class HomeWhySBI extends Component {
  state= {
    sbiHomeData:{}
  }
  componentDidMount() {
    // Focus To Page Tab
    let pathname = this.props.location.pathname;
    //console.log("pathname"+pathname)
    if (pathname === "/our-reach") {
      setTimeout(() => {
        var elmnt = document.getElementById("ourReachView");
        elmnt.scrollIntoView();
      }, 100);

    }
    let phrases = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
    
    this.setState({
      sbiHomeData:phrases
    });
  }
  
  render() {
    const {sbiHomeData} = this.state      
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let title, over, description, sixcrore, Customers_served, SBI_network, branches, Network_Hospitals, claim_handle, elevencrore, location_across, Satellite, locations;
    if (lang_name==='hi') {
      title = sbiHomeData && sbiHomeData['HOME_BODY_WHY_SBI_GENERAL'] && sbiHomeData['HOME_BODY_WHY_SBI_GENERAL'].content_hi;
      description = sbiHomeData && sbiHomeData['HOME_BODY_TEXTLINE'] && sbiHomeData['HOME_BODY_TEXTLINE'].content_hi;
      over = sbiHomeData && sbiHomeData['HOME_BLOG_CUSTOMER_SERVED_OVER'] && sbiHomeData['HOME_BLOG_CUSTOMER_SERVED_OVER'].content_hi;
      sixcrore = sbiHomeData && sbiHomeData['HOME_BLOG_CUSTOMER_SERVED_6.8'] && sbiHomeData['HOME_BLOG_CUSTOMER_SERVED_6.8'].content_hi;
      Customers_served = sbiHomeData && sbiHomeData['HOME_BLOG_CUSTOMER_SERVED_CUSTOMER'] && sbiHomeData['HOME_BLOG_CUSTOMER_SERVED_CUSTOMER'].content_hi;
      SBI_network = sbiHomeData && sbiHomeData['HOME_BLOG_SBIS_NETWORK'] && sbiHomeData['HOME_BLOG_SBIS_NETWORK'].content_hi;
      branches = sbiHomeData && sbiHomeData['HOME_BODY_22000_BRANCHES'] && sbiHomeData['HOME_BODY_22000_BRANCHES'].content_hi;
      Network_Hospitals = sbiHomeData && sbiHomeData['HOME_BODY_NETWORK_HOSPITALS'] && sbiHomeData['HOME_BODY_NETWORK_HOSPITALS'].content_hi;
      claim_handle = sbiHomeData && sbiHomeData['HOME_BLOG_CLAIMS_HANDLED'] && sbiHomeData['HOME_BLOG_CLAIMS_HANDLED'].content_hi;
      elevencrore = sbiHomeData && sbiHomeData['HOME_BLOG_11000'] && sbiHomeData['HOME_BLOG_11000'].content_hi;
      location_across = sbiHomeData && sbiHomeData['HOME_BLOG_LOCATION_ACROSS_INDIA'] && sbiHomeData['HOME_BLOG_LOCATION_ACROSS_INDIA'].content_hi;
      Satellite  = sbiHomeData && sbiHomeData['HOME_BLOG_SATELLITE_PRESENCE'] && sbiHomeData['HOME_BLOG_SATELLITE_PRESENCE'].content_hi;
      locations = sbiHomeData && sbiHomeData['HOME_BLOG_350'] && sbiHomeData['HOME_BLOG_350'].content_hi;
    } else {
      title = sbiHomeData && sbiHomeData['HOME_BODY_WHY_SBI_GENERAL'] && sbiHomeData['HOME_BODY_WHY_SBI_GENERAL'].content_en;
      description = sbiHomeData && sbiHomeData['HOME_BODY_TEXTLINE'] && sbiHomeData['HOME_BODY_TEXTLINE'].content_en;
      over = sbiHomeData && sbiHomeData['HOME_BLOG_CUSTOMER_SERVED_OVER'] && sbiHomeData['HOME_BLOG_CUSTOMER_SERVED_OVER'].content_en;
      sixcrore = sbiHomeData && sbiHomeData['HOME_BLOG_CUSTOMER_SERVED_6.8'] && sbiHomeData['HOME_BLOG_CUSTOMER_SERVED_6.8'].content_en;
      Customers_served = sbiHomeData && sbiHomeData['HOME_BLOG_CUSTOMER_SERVED_CUSTOMER'] && sbiHomeData['HOME_BLOG_CUSTOMER_SERVED_CUSTOMER'].content_en;
      SBI_network = sbiHomeData && sbiHomeData['HOME_BLOG_SBIS_NETWORK'] && sbiHomeData['HOME_BLOG_SBIS_NETWORK'].content_en;
      branches = sbiHomeData && sbiHomeData['HOME_BODY_22000_BRANCHES'] && sbiHomeData['HOME_BODY_22000_BRANCHES'].content_en;
      Network_Hospitals = sbiHomeData && sbiHomeData['HOME_BODY_NETWORK_HOSPITALS'] && sbiHomeData['HOME_BODY_NETWORK_HOSPITALS'].content_en;
      claim_handle = sbiHomeData && sbiHomeData['HOME_BLOG_CLAIMS_HANDLED'] && sbiHomeData['HOME_BLOG_CLAIMS_HANDLED'].content_en;
      elevencrore = sbiHomeData && sbiHomeData['HOME_BLOG_11000'] && sbiHomeData['HOME_BLOG_11000'].content_en;
      location_across = sbiHomeData && sbiHomeData['HOME_BLOG_LOCATION_ACROSS_INDIA'] && sbiHomeData['HOME_BLOG_LOCATION_ACROSS_INDIA'].content_en;
      Satellite  = sbiHomeData && sbiHomeData['HOME_BLOG_SATELLITE_PRESENCE'] && sbiHomeData['HOME_BLOG_SATELLITE_PRESENCE'].content_en;
      locations = sbiHomeData && sbiHomeData['HOME_BLOG_350'] && sbiHomeData['HOME_BLOG_350'].content_en;

      
    }
    
    return (
      <section className="secWsg why-sbi" id="ourReachView">
        <Container>
          <h4 className="pageTitle m-0">{ title?title:'Why SBI General'}</h4>
          <p className="we-promis mb-5 mt-2">
            {description?description:'We promise to support our customers in times of need and assist them to get back on their feet and to their business as quickly as possible'}
        </p>
          <Row className="hLine">
            <Col md="12">
              <Row>
                <Col sm="4">
                  <div className="hLineMobile hcinfo align-items-center d-flex pb-5">
                    <figure className="m-0 customerIcon">
                      {/*<img alt="" src={customericon} />*/}
                    </figure>
                    <div className="pl-2">
                      <span className="text-black d-block">{over?over:'Over'} </span>
                      <strong className="d-block">{sixcrore?sixcrore:'6.8 Crore'}</strong> {Customers_served?Customers_served:'Customers served till date'}
                  </div>
                  </div>
                </Col>
                <Col sm="4">
                  <div className="hLineMobile livesnfo align-items-center d-flex pb-5">
                    <figure className="m-0 protectIcon">
                      {/*<img alt="" src={protecticon} />*/}
                    </figure>
                    <div className="pl-2">
                      <span className="text-black d-block">
                      {SBI_network?SBI_network:'SBI\'s network of'}
                    </span>
                      <strong>22000+</strong> {branches?branches:'branches'}
                  </div>
                  </div>
                </Col>
                <Col sm="4">
                  <div className="hLineMobile nhinfo pb-5">
                    <div className="align-items-center d-flex">
                      <strong className="d-block">6000+</strong>
                      <figure className="m-0 hospitalIcon">
                        {/*<img alt="" src={hospitalicon} />*/}
                      </figure>
                    </div>
                    {Network_Hospitals?Network_Hospitals:'Network Hospitals'}
                </div>
                </Col>
                <Col sm="4">
                  <div className="hLineMobile hcinfo align-items-center d-flex pb-5">
                    <figure className="m-0 claimsIcon">
                      {/*<img alt="" src={claimsicon} />*/}
                    </figure>
                    <div className="pl-2">
                      <span className="text-black d-block">
                      {claim_handle?claim_handle:'Claims handled worth over'}
                    </span>
                      <strong className="d-block">&#x20B9; {elevencrore?elevencrore:'11000 Crore'} </strong>
                    </div>
                  </div>
                </Col>
                <Col sm="4">
                  <div className="hLineMobile bigtxt align-items-center d-flex">
                    <figure className="m-0 pointerIcon">
                      {/*<img alt="" src={pointericon} />*/}
                    </figure>
                    <strong className="pl-3 pr-3">125 </strong> {location_across?location_across:'Locations across India'}
                </div>
                </Col>
                <Col sm="4">
                  <div className="hLineMobile bigtxt align-items-center d-flex">
                    <figure className="m-0 satellitelocationIcon">
                      {/*<img alt="" src={satellitelocation} />*/}  
                    </figure>
                    <div className="pl-2">
                      <span className="text-black d-block">
                      {Satellite?Satellite:'Satellite Presence in'}
                    </span>
                      <strong> 350+</strong> {locations?locations:'locations'}
                  </div>

                  </div>
                </Col>
              </Row>
            </Col>
            {/* <Col md="3">
              {/* <div className="bg-rating-card">
                <div>
                  <img alt="" className="mb-2" src={icrairdalogo} />
                SBI General Proudly retains the iAAA rating for its "highest
                claim paying ability"
              </div>
              </div> *}
              <div className="bg-rating-card-home">
                 <div className="imgsection"><img alt="" src={icraicon} /></div>
                <h4>ICRA</h4>
                <p>SBI General Proudly retains the iAAA rating for its "highest claim paying ability"</p>
             </div>
            </Col> */}
          </Row>
        </Container>
      </section>
      // <section className="secWsg why-sbi" id="ourReachView">
      //   <Container>
      //     <h4 className="pageTitle m-0">Why SBI General</h4>
      //     <p className="we-promis">
      //       We promise to support our customers in times of need and assist them
      //       to get back on their feet and to their business as quickly as
      //       possible
      //     </p>
      //     <Row>
      //       <Col sm="9">
      //         <Row className="hLine">

      //           <Col sm="4">
      //             <div className="hLineMobile livesnfo align-items-center d-flex">
      //               <figure className="m-0">
      //                 <img alt="" src={protecticon} />
      //               </figure>
      //               <div className="pl-2">
      //                 <span className="text-black d-block">
      //                   We protect over
      //             </span>
      //                 <strong> 50000</strong> lives
      //           </div>
      //             </div>
      //           </Col>
      //           <Col sm="4">
      //             <div className="hLineMobile hcinfo align-items-center d-flex pb-5">
      //               <figure className="m-0">
      //                 <img alt="" src={customericon} />
      //               </figure>
      //               <div className="pl-2">
      //                 <strong className="d-block">3000</strong>
      //                 <span className="text-black d-block">
      //                   Happy Customers
      //             </span>
      //               </div>
      //             </div>
      //           </Col>
      //           <Col sm="4">
      //             <div className="hLineMobile hcinfo align-items-center d-flex pb-5">
      //               <figure className="m-0">
      //                 <img alt="" src={hospitalicon} />
      //               </figure>
      //               <div className="pl-2">
      //                 <strong className="d-block">1500</strong>
      //                 <span className="text-black d-block">
      //                   Network Hospitals
      //             </span>
      //               </div>
      //             </div>
      //           </Col>
      //           <Col sm="4">
      //             <div className="hLineMobile hcinfo align-items-center d-flex pb-5">
      //               <figure className="m-0">
      //                 <img alt="" src={claimsicon} />
      //               </figure>
      //               <div className="pl-2">
      //                 <strong className="d-block">5 million</strong>
      //                 <span className="text-black d-block">
      //                   Claims settled over
      //             </span>
      //               </div>
      //             </div>
      //           </Col>
      //           <Col sm="4">
      //             <div className="hLineMobile bigtxt align-items-center d-flex">
      //               <figure className="m-0">
      //                 <img alt="" src={healgthicon} />
      //               </figure>
      //               <strong className="pl-3 pr-3">20 </strong> Days taken for Health settlement
      //           </div>
      //           </Col>
      //           <Col sm="4">
      //             <div className="hLineMobile bigtxt align-items-center d-flex">
      //               <figure className="m-0">
      //                 <img alt="" src={motoricon} />
      //               </figure>
      //               <strong className="pl-3 pr-3">15 </strong> Days taken for Motor claims
      //           </div>
      //           </Col>
      //         </Row>
      //       </Col>
      //       <Col sm="3">
      //         <div className="bg-rating-card-home">
      //           <div className="imgsection"><img alt="" src={icraicon} /></div>
      //           <h4>ICRA</h4>
      //           <p>SBI General Proudly retains the iAAA rating for its "highest claim paying ability"</p>
      //         </div>
      //       </Col>
      //     </Row>
      //   </Container>
      // </section>
    );
  }
}

export default withRouter(HomeWhySBI);
