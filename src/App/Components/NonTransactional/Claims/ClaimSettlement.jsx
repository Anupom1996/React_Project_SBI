import React, { Component } from "react";
import AddressBox from "../../Common/AddressBox/AddressBox";
import { Row, Col } from "react-bootstrap";
import HelmetData from "../../Common/HelmetData";

class ClaimSettlement extends Component {
  render() {
    return (
      <>
        {/* <Helmet> */}
        <HelmetData pageComponentType="ClaimSettlement" />
        <Row>
          <Col lg="6" xm="12">
            <div className="claim-content">
              <h3>Claims Settlement Process</h3>
              <ul>
                <li>
                  Contact our toll free number 1800 22 1111 or SMS "CLAIM" to
                  561612 and get your claim number / reference number.
                </li>
                <li>
                  Our customer care representative will provide you with the
                  details of the documents required for initiating and
                  processing your claim.
                </li>
                <li>
                  Our Claims Manager / Executive will contact you within 24
                  hours of registering the claim.
                </li>
                <li>
                  Kindly submit all the required documents to our Claims Manager
                  / Executive and get them verified against the originals.
                </li>
                <li>
                  SBI General will initiate the claim process and all admissible
                  claims shall be settled within 30 days of receipt of final
                  survey report and/or the last relevant and necessary document
                  as the case may be as per the IRDAI policy holders interest
                  regulation 2017.
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="6" xm="12">
            <AddressBox addressBoxType="Claims" />
          </Col>
        </Row>
      </>
    );
  }
}

export default ClaimSettlement;
