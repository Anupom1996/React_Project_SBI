import React, { Component } from "react";
import { Nav, Row, Container, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Tab from "react-bootstrap/Tab";
import BaseComponent from "../BaseComponent";
import CallBackForm from "./CallBackForm";
import BranchLocator from "./BranchLocator";
import ProductRelatedResources from "./ProductRelatedResources";
import HelmetData from "../Common/HelmetData";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";

class MicroInsurance extends Component {

  render() {
    return (
      <div>
        <BaseComponent>
          {/* <Helmet> */}
          <HelmetData pageComponentType="MicroInsurance" />
          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>Micro Insurance Policy</h1>
                <div className="healgth-list">
                  <ul>
                    <li>Policy upto a period of 30 years</li>
                    <li>In-built coverage for earthquake</li>
                  </ul>
                </div>
                {/* For Mobule */}
              </div>
            </section>
          ) : (
            <section className="container-with-no-padding container">
                 <div className="innerpageBanner row">
                  <div className="col-4">
                  <figure className="justify-content-between align-items-center">
                    <img src={require("../../assets/images/banners/rural.svg")} alt="" />
                  </figure>
                  </div>
                  <div className="col-8 d-flex align-items-center">
                  <div className="flex-column">
                  <h1>Micro Insurance Policy</h1>
                  </div>
                  </div>
                  {/* For Desktop */}
                </div>
                <div className="innerHeadBotomIcon">
                    <img
                        src={require("../../assets/images/banners/rural_bottom.svg")}
                        alt=""
                      />
                    </div>
              </section>
            )
          }

          {/* We Protect you Main */}
          <section className="protectWrapper motor-protectWrapper innerPageSection">
            <Container>
              <Row className="rotectRow">
                <WeProtectYouResources productType={this.props.location.pathname.split('/')[1]} />
                <Col xs="12" lg="4" className="lookingFor">
                  {/***** Call Back Form Component ****/}
                  <CallBackForm />
                </Col>
              </Row>
            </Container>
          </section>

          {/*Coverage Main */}
          <section className="coverageWrapper">
            <Container>
              <div className="coverageBase">
                <Tab.Container defaultActiveKey="tabmain_1">

                  <Nav className="tabmainProduct" variant="pills" >
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_1">
                        <div>
                          <figure> <img src={require("../../assets/images/key-feature-icon.svg")} alt="" /></figure>
                          Key Feature
                            </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_2">
                        <div>
                          <figure> <img src={require("../../assets/images/coverage-icon.svg")} alt="" /></figure>
                          Coverage
                            </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_3">
                        <div>
                          <figure> <img src={require("../../assets/images/sum-insured-icon.svg")} alt="" /></figure>
                          Sum Insured
                            </div>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="tabmain_1">
                      <h5 className="htitle">Key Feature</h5>
                      <p><strong>Pricing Factors – </strong></p>
                      <p>The rate of premium shall depend upon the age of the proposer, the sum insured chosen</p>
                      <p><strong>The period of insurance</strong></p>
                      <p>1 Year</p>
                      <p><strong>Age at entry</strong></p>
                      <p>18 yrs to 65 years.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_2">
                      <h5 className="htitle">Coverage</h5>
                      <p><strong>What does the insurance Policy Cover </strong></p>
                      <ul>
                        <li>Personal Accident (Compulsory)</li>
                        <li>Hospital Daily Cash (Optional)</li>
                        <li>Asset Insurance (Optional)</li>
                        <li>Critical Illness Benefit (Optional)</li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_3">
                      <h5 className="htitle">Sum Insured</h5>
                      <p>Sum Insured options are as following</p>
                      <div className="tablecont">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Coverage </th>
                              <th>Sum Insured Limit</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Personal Accident (Compulsory)</td>
                              <td>Rs.10,000 to 50,000/ per person</td>
                            </tr>
                            <tr>
                              <td>Critical Illness (Optional)</td>
                              <td>Rs. 10,000 to 30,000/ per person</td>
                            </tr>
                            <tr>
                              <td>Hospital Daily Cash (Optional)</td>
                              <td>Rs. 250 per day for 60 days or Rs. 250 per day for 90 days</td>
                            </tr>
                            <tr>
                              <td>Asset Insurance (Optional)</td>
                              <td>Maximum Rs. 30,000/</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>

                </Tab.Container>
              </div>
            </Container>
          </section>

          <ProductRelatedResources productType={this.props.location.pathname.split('/')[1]} />

          {/*We are closer than you think, locate us: Main */}
          <section className="weAreWrapper weAreMomeWrapper">
            <Container>
              <h5 className="htitle text-center">We are closer than you think, locate us:</h5>
              {/***** Branch Locator Component */}
              <BranchLocator />
            </Container>
          </section>

          {/*Why SBI General Insurance? */}
          <WhySBIInsurance productType={this.props.location.pathname.split('/')[1]} />

        </BaseComponent>

      </div>
    );
  }
}

export default MicroInsurance;