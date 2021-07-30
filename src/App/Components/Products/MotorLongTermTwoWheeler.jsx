import React, { Component } from "react";
import { Nav, Row, Container, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Tab from "react-bootstrap/Tab";

import BaseComponent from "../BaseComponent";
import CallBackFormRetail from "./CallBackFormRetail";
import BranchLocator from "./BranchLocator";
import Garage from "../../Components/NonTransactional/Contact/Garage";
import FAQ from "./FAQ";
import ProductRelatedResources from "./ProductRelatedResources";
import HelmetData from "../Common/HelmetData";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";
import RelatedProducts from "./RelatedProducts";

class MotorLongTermTwoWheeler extends Component {
  
  render() {
    return (
      <div>
        <BaseComponent>
          {/* <Helmet> */}
          <HelmetData pageComponentType="MotorLongTermTwoWheeler" />
          {isMobile ? (
            <section className="topform product-header motor-product-header">
              <div className="insuTab">
                <h1>Long Term Two Wheeler Insurance Policy - Package</h1>
                <div className="healgth-list">
                  <ul>
                    <li>Wide Network of 10,000 plus Garages</li>
                    <li>
                      Save Big with our Award winning Car Insurance 24*7
                      Roadside assurance across India
                    </li>
                  </ul>
                </div>
                {/* For Mobule */}
              </div>
            </section>
          ) : (
            <section className="container-with-no-padding container">
                {/* <div className="rotateit">
                  <div className="skewbg"></div>
                  <div className="skewbg-light"></div>
                  <div className="bgtextureProduct"></div>
                </div> */}
               <div className="innerpageBanner row">
                  <div className="col-4">
                  <figure className="justify-content-between align-items-center">
                    <img src={require("../../assets/images/motor-banner.svg")} alt="" />
                  </figure>
                  </div>
                  <div className="col-8 d-flex align-items-center">
                    <div className="flex-column">
                  <h1>Long Term Two Wheeler Insurance Policy - Package</h1>
                  {/* <div className="healgth-list">
                    <ul>
                      <li>Wide Network of 10,000 plus Garages</li>
                      <li>
                        Save Big with our Award winning Car Insurance 24*7
                        Roadside assurance across India
                    </li>
                    </ul>
                  </div> */}
                  </div>
                  {/* For Desktop */}
                </div>
                <div className="innerHeadBotomIcon">
                      <img
                        src={require("../../assets/images/motor-right-side.svg")}
                        alt=""
                      />
                    </div>
                </div>
              </section>
            )}

          {/* We Protect you Main */}
          <section className="protectWrapper motor-protectWrapper innerPageSection">
            <Container>
              <Row className="rotectRow">
                <WeProtectYouResources productType={this.props.location.pathname.split('/')[1]} />
                <Col xs="12" lg="4" className="lookingFor">
                  {/***** Call Back Form Component ****/}
                  <CallBackFormRetail policyName={"Long Term Two Wheeler Insurance Policy"} />
                </Col>
              </Row>
            </Container>
          </section>

          {/*Coverage Main */}
          <section className="coverageWrapper">
            <Container>
              <div className="coverageBase">
                <Tab.Container defaultActiveKey="tabmain_1">
                  <Nav className="tabmainProduct" variant="pills">
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_1">
                        <div>
                          <figure>
                            <img src={require("../../assets/images/key-feature-icon.svg")} alt="" />
                          </figure>
                          Key Feature
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_2">
                        <div>
                          <figure>
                            <img src={require("../../assets/images/coverage-icon.svg")} alt="" />
                          </figure>
                          Coverage
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_3">
                        <div>
                          <figure>
                            <img src={require("../../assets/images/bonus-motor-icon.svg")} alt="" />
                          </figure>
                          Bonus
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_4">
                        <div>
                          <figure>
                            <img src={require("../../assets/images/exclusions-iocn.svg")} alt="" />
                          </figure>
                          Exclusion
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="tabmain_1">
                      <h5 className="htitle">Key Feature</h5>
                      <ul>
                        <li>No hassle of annual renewals.</li>
                        <li>
                          Long term policy for 2 or 3 years with discounted
                          premium
                        </li>
                        <li>
                          In case of a Total Loss/ Combined Total Loss/ Theft
                          claim of your two wheeler in the policy, during the
                          first or second year, you can avail a refund on pro-
                          rate basis on the unexpired period.
                        </li>
                        <li>
                          No effect of change in Third Party Liability Premium
                          during the policy period
                        </li>
                        <li>
                          No effect of change in Service Tax during the policy
                          period
                        </li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_2">
                      <h5 className="htitle">Coverage</h5>
                      <ul>
                        <li>
                          <strong>Third party liability: </strong>Protects
                          against any legal liability arising out of the use of
                          the vehicle, towards third parties arising on
                          accidental bodily injury to / on death of a person and
                          any damage caused to third party property involving
                          your Two Wheeler.
                        </li>
                        <li>
                          <strong>Loss or damage to the vehicle: </strong>The
                          policy covers against any accidental loss or damage
                          caused to the vehicle or its accessories due to the
                          following :
                        </li>
                        <li>
                          Fire, explosion, self-ignition, accidental damage by
                          external means
                        </li>
                        <li>
                          Any damage in transit by road, rail, inland waterway,
                          lift, elevator or air
                        </li>
                        <li>
                          Lightning, earthquake, flood, typhoon, hurricane,
                          storm, tempest, inundation, cyclone, hailstorm, frost,
                          landslide, rockslide
                        </li>
                        <li>
                          Burglary, theft, riot, strike, malicious act,
                          terrorist activity
                        </li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_3">
                      <h5 className="htitle">Bonus</h5>
                      <ul>
                        <li>No Claim Bonus available up to 50%</li>
                        <li>
                          Voluntary Deductible available up to 25% on the OD
                          Premium, subject to maximum of Rs. 750
                        </li>
                        <li>
                          Discount for Anti theft devices up to 2.5% on the OD
                          Premium subject to maximum of Rs.1000 and Rs. 1500 for
                          policies having tenure as 2 years and 3 years
                          respectively
                        </li>
                        <li>
                          Automobile Association Membership Discount of 5% on OD
                          premium subject to maximum of Rs. 100 and Rs. 150 for
                          policies having a tenure of 2 years and 3 years
                          respectively
                        </li>
                        <li>
                          Concession for specially designed/ modified vehicles
                          for the Blind, Handicapped and Mentally Challenged
                          Persons of 50% on OD premium
                        </li>
                        <li>
                          Tenure Discount of 5% on OD premium for 2 years policy
                          period and 8% on OD premium for 3 years policy period
                        </li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_4">
                      <h5 className="htitle">Exclusion</h5>
                      <ul>
                        <p>
                          Any loss/damage to the vehicle and/or its accessories
                          will be not be covered if caused by the following-
                        </p>
                        <li>
                          Normal wear, tear and general ageing of the vehicle
                        </li>
                        <li>Depreciation or any consequential loss</li>
                        <li>Mechanical/ electrical breakdown</li>
                        <li>
                          Vehicle being used otherwise than in accordance with
                          limitations as to use
                        </li>
                        <li>
                          Damage to / by a person driving the vehicle without a
                          valid license
                        </li>
                        <li>
                          Damage to / by a person driving the vehicle under the
                          influence of drugs or liquor
                        </li>
                        <li>Loss/ damage due to war, mutiny or nuclear risk</li>
                        <p>
                          ** Please refer to the policy wordings for complete
                          list of exclusions.
                        </p>
                      </ul>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </Container>
          </section>

          {/*Prospectus Main */}
          <ProductRelatedResources productType={this.props.location.pathname.split('/')[1]} />

          {/*We are closer than you think, locate us: Main */}
          <section className="weAreWrapper weAreMotoWrapper">
            <Container>
              <div className="conatctpage">
                <h2 className="titleclose pb-3">
                  We are closer than you think, locate us:
                </h2>
                <div className="weAreMain">
                  <Tab.Container defaultActiveKey="tabmain_1">
                    <Nav variant="pills">
                      <Nav.Item>
                        <Nav.Link eventKey="tabmain_1">
                          <div>
                            <figure>
                              <img
                                src={require("../../assets/images/Maintenance.svg")}
                                alt=""
                              />
                            </figure>
                            <span>Garage</span>
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="tabmain_2">
                          <div>
                            <figure>
                              <img
                                src={require("../../assets/images/bank.svg")}
                                alt=""
                              />
                            </figure>
                            <span>Branch</span>
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content>
                      <Tab.Pane eventKey="tabmain_1">
                        {/*** Garage Component***/}
                        <Garage />
                      </Tab.Pane>

                      <Tab.Pane eventKey="tabmain_2">
                        {/***** Branch Locator Component */}
                        <BranchLocator />
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </Container>
          </section>

          {/*Why SBI General Insurance? */}
          <WhySBIInsurance productType={this.props.location.pathname.split('/')[1]} />

          {/*Related Products Main */}
          <RelatedProducts category="motor" productType={this.props.location.pathname.split('/')[1]} />

          {/* FAQ Main */}
          <FAQ productType={this.props.location.pathname.split('/')[1]} />
        </BaseComponent>
      </div>
    );
  }
}

export default MotorLongTermTwoWheeler;
