import React, { Component } from "react";
import AddressBox from "../../Common/AddressBox/AddressBox";
import { Row, Col } from "react-bootstrap";
import HelmetData from "../../Common/HelmetData";

class ClaimsPhilosophy extends Component {
  render() {
    return (
      <>
        {/* <Helmet> */}
        <HelmetData pageComponentType="ClaimsPhilosophy" />
        <Row>
          <Col lg="6" xm="12">
            <div className="claim-content">
              <p>
                The Fast, Fair & Transparent Claim procedure that will keep you
                in control
              </p>
              <p>
                SBI General's dedicated and experienced claims team aim to
                deliver you a differentiated customer service of a fast, fair,
                convenient and transparent claims process for the management and
                settlement of your claim.
              </p>
              <p>
                At SBI General, our philosophy is to always look for ways to pay
                valid claims in a fair and timely manner. Our claims service
                will:
              </p>
              <ul>
                <li>Provide assistance in emergency situations</li>
                <li>
                  Relieve the stress of a claim by co-ordinating repair and
                  replacement of your assets
                </li>
                <li>Keep you informed of the progress of your claim</li>
                <li>
                  Provide you with the choice of accessing our preferred local
                  service providers
                </li>
              </ul>
              <p>
                What's more, our skilled staffs are empowered to act and make
                decisions, so that your claim is processed as quickly and
                efficiently as possible. This should help you get back in
                control as quickly as possible.
              </p>
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

export default ClaimsPhilosophy;
