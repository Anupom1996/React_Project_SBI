import React, { Component } from "react";
import { Nav, Row, Container, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Tab from "react-bootstrap/Tab";
import { Scrollbars } from "react-custom-scrollbars";
import BaseComponent from "../BaseComponent";
import CallBackForm from "./CallBackForm";
import BranchLocator from "./BranchLocator";
import Garage from "../../Components/NonTransactional/Contact/Garage";
import FAQ from "./FAQ";
import ProductRelatedResourses from "./ProductRelatedResources";
import HelmetData from "../Common/HelmetData";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";

class MotorCommercialTrailer extends Component {
  render() {
    return (
      <div>
        <BaseComponent>
          {/* <Helmet> */}
          <HelmetData pageComponentType="MotorCommercialTrailer" />
          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>Motor Commercial (Trailer) Policy</h1>
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
                  <h1>Motor Commercial (Trailer) Policy</h1>
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
          <section className="protectWrapper motor-protectWrapper">
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
                  <Nav className="tabmainProduct" variant="pills">
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_1">
                        <div>
                          <figure>
                            {" "}
                            <img
                              src={require("../../assets/images/key-feature-icon.svg")}
                              alt=""
                            />
                          </figure>
                          Key Feature
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_2">
                        <div>
                          <figure>
                            {" "}
                            <img
                              src={require("../../assets/images/coverage-icon.svg")}
                              alt=""
                            />
                          </figure>
                          Coverage
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_3">
                        <div>
                          <figure>
                            {" "}
                            <img
                              src={require("../../assets/images/exclusions-iocn.svg")}
                              alt=""
                            />
                          </figure>
                          Exclusion
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="tabmain_1">
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={400}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <h5 className="htitle">Key Feature</h5>

                        <p>A) Comprehensive Cover</p>
                        <p>This form of cover provides Insurance against</p>
                        <p>
                          Loss, destruction or damage to the insured vehicle
                          (trailer) caused by an insured event as stated in the
                          policy wording.
                        </p>
                        <p>Any liabilities as described in B) below.</p>
                        <p>&nbsp;</p>
                        <p>B) Liability Only Cover</p>
                        <p>This form of cover provides Insurance against</p>
                        <p>
                          Legal Liability to pay compensation for third-party
                          injury or death arising out of the use of the insured
                          vehicle (trailer).
                        </p>
                        <p>
                          Legal Liability to pay compensation for third-party
                          property damage caused by the use of the insured
                          vehicle (trailer)
                        </p>
                        <p>
                          Compulsory Personal Accident for the owner-driver of
                          the Insured Two-wheeler as per the policy terms and
                          conditions.
                        </p>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_2">
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={400}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <h5 className="htitle">Coverage</h5>

                        <p>
                          <strong>Third party liability:</strong> protects
                          against any legal liability arising out of the use of
                          the vehicle (trailer), towards third parties arising
                          on bodily injury to / on death of a person and any
                          damage caused to third party property.
                        </p>
                        <p>
                          <strong>Loss or damage to the vehicle:</strong> The
                          policy covers against any loss or damage caused to the
                          vehicle (trailer) or its accessories due to the
                          following natural and manmade calamities.
                        </p>
                        <p>
                          <strong>Natural Calamities</strong> – Fire, explosion,
                          self-ignition or lightning, earthquake, flood,
                          typhoon, hurricane, storm, tempest, inundation,
                          cyclone, hailstorm, frost, landslide, rockslide.
                        </p>
                        <p>
                          <strong>Man made Calamities</strong> – Burglary,
                          theft, riot, strike, malicious act, accident by
                          external means, terrorist activity, and any damage in
                          transit by road, rail, inland waterway, lift, elevator
                          or air.
                        </p>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_3">
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={400}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <h5 className="htitle">Exclusion</h5>

                        <p>
                          Any loss/damage to the vehicle (trailer) and/or its
                          accessories will be not be covered if caused by the
                          following-
                        </p>
                        <p>
                          1. Normal wear, tear and general ageing of the vehicle
                          (trailer)&nbsp;
                        </p>
                        <p>2. Depreciation or any consequential loss&nbsp;</p>
                        <p>3. Mechanical/ electrical breakdown&nbsp;</p>
                        <p>
                          4. Vehicle (trailer) being used otherwise than in
                          accordance with limitations as to use&nbsp;
                        </p>
                        <p>
                          5. Damage to / by a person driving the vehicle
                          (trailer) without a valid license&nbsp;
                        </p>
                        <p>
                          6. Damage to / by a person driving the vehicle
                          (trailer) under the influence of drugs or liquor&nbsp;
                        </p>
                        <p>
                          7. Loss / damage due to war, mutiny or nuclear
                          risk&nbsp;
                        </p>
                      </Scrollbars>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </Container>
          </section>

          {/*Prospectus Main */}
          <ProductRelatedResourses productType={this.props.location.pathname.split('/')[1]} />

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

          {/* FAQ Main */}
          <FAQ productType={this.props.location.pathname.split('/')[1]} />
        </BaseComponent>
      </div>
    );
  }
}

export default MotorCommercialTrailer;
