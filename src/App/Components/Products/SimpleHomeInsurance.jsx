import React, { Component } from "react";
import { Nav, Row, Container, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Tab from "react-bootstrap/Tab";
import { Scrollbars } from "react-custom-scrollbars";
import BaseComponent from "../BaseComponent";
import CallBackFormRetail from "./CallBackFormRetail";
import BranchLocator from "./BranchLocator";
import FAQ from "./FAQ";
import ProductRelatedResources from "./ProductRelatedResources";
import HelmetData from "../Common/HelmetData";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";

class SimpleHomeInsurance extends Component {
  render() {
    return (
      <div>
        <BaseComponent>
          {/* <Helmet> */}
          <HelmetData pageComponentType="SimpleHomeInsurance" />
          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>Simple Home Insurance Policy</h1>
                <div className="healgth-productBtnMain">
                  <div className="healgth-productBtn">
                    <Link
                      to={"#"}
                      onClick={(e) =>
                        this.openInNewTab(
                          "/simplehomeinsurance/display?itm_source=direct&itm_medium=none&itm_campaign="
                        )
                      }
                      className="d-flex color-01"
                    >
                      <figure>
                        <img
                          src={require("../../assets/images/buy-policy-icon.svg")}
                          alt=""
                        />
                      </figure>
                      <p>Get Quote</p>
                    </Link>
                  </div>
                </div>
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
                    <img
                      src={require("../../assets/images/home_insurance.svg")}
                      alt=""
                    />
                  </figure>
                </div>
                <div className="col-8 d-flex align-items-center">
                  <div className="flex-column">
                    <h1>Simple Home Insurance Policy</h1>
                    <div className="healgth-productBtnMain">
                      <div className="healgth-productBtn pl-0">
                        <Link
                          to={"#"}
                          onClick={(e) =>
                            this.openInNewTab(
                              "/simplehomeinsurance/display?itm_source=direct&itm_medium=none&itm_campaign="
                            )
                          }
                          className="d-flex color-purple"
                        >
                          <figure>
                            <img
                              src={require("../../assets/images/buy-policy-icon.svg")}
                              alt=""
                            />
                          </figure>
                          <p>Get Quote</p>
                        </Link>
                      </div>
                    </div>
                    {/* <div className="healgth-list">
                    <ul>
                      <li>Policy upto a period of 30 years</li>
                      <li>In-built coverage for earthquake</li>
                    </ul>
                  </div> */}
                  </div>
                  {/* For Desktop */}

                  <div className="innerHeadBotomIcon">
                    <img
                      src={require("../../assets/images/home_policy_bottom_icon.svg")}
                      alt="HealthInsurance"
                    />
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* We Protect you Main */}
          <section className="protectWrapper motor-protectWrapper innerPageSection">
            <Container>
              <Row className="rotectRow">
                <WeProtectYouResources
                  productType={this.props.location.pathname.split("/")[1]}
                />
                <Col xs="12" lg="4" className="lookingFor">
                  {/***** Call Back Form Component ****/}
                  <CallBackFormRetail />
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
                            <img
                              src={require("../../assets/images/key-feature-icon.svg")}
                              alt=""
                            />
                          </figure>
                          Key Features
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_2">
                        <div>
                          <figure>
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
                            <img
                              src={require("../../assets/images/exclusions-iocn.svg")}
                              alt=""
                            />
                          </figure>
                          Major Exclusion
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="tabmain_1">
                      <h5 className="htitle">Key Features</h5>
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={340}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <ul>
                          <li>
                            Covers Independent houses as well as flats and
                            apartments
                          </li>
                          <li>Policy Term: 3 Years</li>
                          <li>Coverage for several perils</li>
                          <li>Cover For Tenants</li>
                          <li>Tenure Discount</li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_2">
                      <h5 className="htitle">Coverage</h5>
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={340}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <p>
                          Our <strong>home insurance</strong> plan covers:
                        </p>
                        <ul>
                          <li>
                            Fire & Alliedl Perils including losso or damage to
                            property due to terrorism and earthquake
                          </li>
                          <li>Burglary & Theft</li>
                          <li>Public Liability</li>
                          <li>Plate Glass</li>
                          <li>Baggage</li>
                          <li>
                            Breakdown of Domestic Electrical & Electronic
                            Appliances
                          </li>
                          <li>Personal Accident</li>
                          <li>Loss of Cash while in Transit</li>
                          <li>
                            All risk Cover - Portable Equipment, Jewelry &
                            Valuables
                          </li>
                          <li>Key Replacement</li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_3">
                      <h5 className="htitle">Major Exclusion</h5>
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={340}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <ul>
                          <li>
                            War, invasion, foreign enemy, hostilities, civil war
                            etc
                          </li>
                          <li>
                            Willful destruction by you, a family member or
                            staff.
                          </li>
                          <li>Consequential loss</li>
                          <li>
                            Any loss, damage, accident, an injury occurring
                            before the coverage is extended.
                          </li>
                          <li>
                            Any loss or damage of whatsoever nature in respect
                            of any kutcha construction.
                          </li>
                        </ul>
                        <p>
                          <strong>
                            Important Note: The above list of exclusions is
                            illustrative and not exhaustive. For a full list of
                            the exclusions , please refer to policy wordings.
                          </strong>
                        </p>
                      </Scrollbars>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </Container>
          </section>

          {/*Prospectus Main */}
          <ProductRelatedResources
            productType={this.props.location.pathname.split("/")[1]}
          />

          {/*We are closer than you think, locate us: Main */}
          <section className="weAreWrapper weAreMomeWrapper">
            <Container>
              <h5 className="htitle text-center">
                We are closer than you think, locate us:
              </h5>
              {/***** Branch Locator Component */}
              <BranchLocator />
            </Container>
          </section>

          {/*Why SBI General Insurance? */}
          <WhySBIInsurance
            productType={this.props.location.pathname.split("/")[1]}
          />

          {/* FAQ Main */}
          <FAQ productType={this.props.location.pathname.split("/")[1]} />
        </BaseComponent>
      </div>
    );
  }
}

export default SimpleHomeInsurance;
