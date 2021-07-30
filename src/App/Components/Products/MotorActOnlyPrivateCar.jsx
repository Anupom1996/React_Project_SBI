import React, { Component } from "react";
import { Nav, Row, Container, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Tab from "react-bootstrap/Tab";
import { Scrollbars } from 'react-custom-scrollbars';
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

class MotorActOnlyPrivateCar extends Component {

  render() {
    return (
      <div>
        <BaseComponent>

          {/* <Helmet> */}
          <HelmetData pageComponentType="MotorActOnlyPrivateCar" />
          {isMobile ? (
            <section className="topform product-header motor-product-header">
              <div className="insuTab">
                <h1>Motor Act Only- Private Car (3 Years)</h1>
                <div className="healgth-list">
                  <ul>
                    <li>Wide Network of 10,000 plus Garages</li>
                    <li>Save Big with our Award winning Car Insurance 24*7 Roadside assurance across India</li>
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
                  <h1>Motor Act Only- Private Car (3 Years)</h1>
                  {/* <div className="healgth-list">
                    <ul>
                      <li>Wide Network of 10,000 plus Garages</li>
                      <li>Save Big with our Award winning Car Insurance 24*7 Roadside assurance across India</li>
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
            )
          }

          {/* We Protect you Main */}
          <section className="protectWrapper motor-protectWrapper innerPageSection">
            <Container>
              <Row className="rotectRow">
                <WeProtectYouResources productType={this.props.location.pathname.split('/')[1]} />
                <Col xs="12" lg="4" className="lookingFor">
                  {/***** Call Back Form Component ****/}
                  <CallBackFormRetail policyName={"Motor Act Only – Private Car (Long Term)"} />
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
                          Key Features
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_2">
                        <div>
                          <figure> <img src={require("../../assets/images/bonus-motor-icon.svg")} alt="" /></figure>
                          Coverage
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_3">
                        <div>
                          <figure> <img src={require("../../assets/images/exclusions-iocn.svg")} alt="" /></figure>
                          Major Exclusion
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="tabmain_1">
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={380} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        <h5 className="htitle">Key Features</h5>
                        <ul>
                          <li>Covers Third-Party Liability </li>
                          <li>Long term: 3 years</li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_2">
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={380} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        <h5 className="htitle">Coverage</h5>
                        <p>Our <strong>motor car insurance</strong> offers Third Party cover against any legal liability if your car has caused accidental injury to a third party or damaged a third party’s property.</p>

                        <ul>
                          <li>
                            Additional Benefits include:
                          <ul>
                              <li>Personal accident cover of Rs. 15 lakhs for two-wheelers and private cars for individual owner/s*. The cover is available at Rs 1 lakh per person for two-wheelers and Rs 2 lakhs for other vehicles</li>
                              <li>Additional Legal liabilities:
                                  <ul>
                                  <li>Driver or other staff employed to operate or clean the vehicle</li>
                                  <li>employees travelling in or driving the car (apart from the driver).</li>
                                </ul>
                              </li>
                              <li>Legal liabilities for using a CNG/LPG bifuel kit.</li>
                            </ul>

                          </li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_3">
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={380} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        <h5 className="htitle">Major Exclusion </h5>
                        <ul>
                          <li>We do not offer coverage for damage, theft or loss due to incidents related to the war, invasion, foreign enemy acts, mutiny, rebellion, etc. Any claims made must be proved to be an act not related to any of these conditions. </li>
                          <li>Driving without a valid licence</li>
                          <li>Driving under the influence of drugs and alcohol </li>
                        </ul>
                        <p><strong>Important Note: The above list of exclusions is illustrative and not exhaustive. For a full list of the exclusions , please refer to policy wordings. </strong></p>
                      </Scrollbars>
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
                <h2 className="titleclose pb-3">We are closer than you think, locate us:</h2>
                <div className="weAreMain">

                  <Tab.Container defaultActiveKey="tabmain_1">
                    <Nav variant="pills" >
                      <Nav.Item>
                        <Nav.Link eventKey="tabmain_1">
                          <div>
                            <figure><img src={require("../../assets/images/Maintenance.svg")} alt="" /></figure>
                            <span>Garage</span>
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="tabmain_2">
                          <div>
                            <figure><img src={require("../../assets/images/bank.svg")} alt="" /></figure>
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

export default MotorActOnlyPrivateCar;