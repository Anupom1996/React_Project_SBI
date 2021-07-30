import React, { Component } from "react";
import { Nav, Row, Container, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Tab from "react-bootstrap/Tab";
import { Scrollbars } from "react-custom-scrollbars";

import BaseComponent from "../BaseComponent";
import CallBackFormRetail from "./CallBackFormRetail";
import BranchLocator from "./BranchLocator";
import Garage from "../../Components/NonTransactional/Contact/Garage";
import ProductRelatedResources from "./ProductRelatedResources";
import FAQ from "./FAQ";
import HelmetData from "../Common/HelmetData";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";
import RelatedProducts from "./RelatedProducts";

class MotorActOnlyTwoWheeler extends Component {
  
  render() {
    return (
      <div>
        <BaseComponent>
          {/* <Helmet> */}
          <HelmetData pageComponentType="MotorActOnlyTwoWheeler" />
          {isMobile ? (
            <section className="topform product-header motor-product-header">
              <div className="insuTab">
                <h1>Motor Act Only- Two Wheeler(5 Years)</h1>
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
                  <h1>Motor Act Only- Two Wheeler(5 Years)</h1>
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
                  <CallBackFormRetail policyName={"Motor Act Only – Two Wheeler (Long Term)"} />
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
                            <img src={require("../../assets/images/exclusions-iocn.svg")} alt="" />
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
                        <ol>
                          <li>Covers Third Party Liability only</li>
                          <li>Long term policy for 5 years</li>
                          <li>No hassle of annual renewals</li>
                          <li>
                            No effect of change in Third Party Liability Premium
                            during the policy period
                          </li>
                          <li>
                            No effect of change in GST during the policy period
                          </li>
                        </ol>
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
                          This Policy protects against legal liability arising
                          out of the use of the vehicle, towards third parties
                          arising on bodily injury to / on death of a person and
                          any damage caused to third party property
                        </p>
                        <h5>Additional covers at extra cost :</h5>
                        <ol>
                          <li>
                            <strong>Personal accident cover</strong> of Rs. 15
                            lakhs in case of two-wheelers and private cars for
                            individual owner/s* of the vehicle/s while driving.
                            This benefit is however, not available for a Company
                            owned vehicle. Personal Accident cover: of Rs. 1
                            lakh per person, in case of two-wheelers and Rs 2
                            lakhs per person for other class of vehicles, is
                            also available for the occupant/s of the vehicle/s.
                          </li>
                          <li>
                            <strong>Additional Legal liabilities for :</strong>
                            <ol type="a">
                              <li>
                                Paid driver/conductor/cleaner employed in
                                operation of vehicle.
                              </li>
                              <li>
                                {" "}
                                Employees travelling in/driving the vehicle
                                other than paid driver.
                              </li>
                            </ol>
                          </li>
                          <li>
                            <strong> Bifuel-Kit :</strong>

                            <p>
                              {" "}
                              Any Legal Liability arising out of the use of
                              CNG-LPG bifuel kit
                            </p>
                          </li>
                        </ol>
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
                        <ol>
                          <li>
                            The Company shall not be liable in respect of any
                            claim arising whilst the vehicle insured herein
                            <p>
                              (a) Being used otherwise than in accordance with
                              the ‘Limitations as to Use
                            </p>
                            <p>or</p>
                            <p>
                              (b) Being driven by or is for the purpose of being
                              driven by him/her in the charge of any person
                              other than a Driver as stated in the Driver's
                              Clause.
                            </p>
                          </li>
                          <li>
                            The Company shall not be liable in respect of any
                            claim arising out of contractual liability.
                          </li>
                          <li>
                            Except so far as is necessary to meet the
                            requirements of the Motor Vehicles Act, the Company
                            shall not be liable in respect of death arising out
                            of and in the course of employment of a person in
                            the employment of the Insured or in the employment
                            of any person who is indemnified under this Policy
                            or bodily injury sustained by such person arising
                            out of and in the course of such employment.
                          </li>
                          <li>
                            Except so far as is necessary to meet the
                            requirements of the Motor Vehicles Act, the Company
                            shall not be liable in respect of death or bodily
                            injury to any person (other than a passenger carried
                            by reason of or in pursuance of a contract of
                            employment) being carried in or upon or entering or
                            mounting or alighting from the motor vehicle at the
                            time of the occurrence of the event out of which any
                            claim arises.
                          </li>
                          <li>
                            The Company shall not be liable in respect of any
                            liability directly or indirectly or proximately or
                            remotely occasioned by contributed to by or
                            traceable to or arising out of or in connection with
                            war, invasion, the act of foreign enemies,
                            hostilities or warlike operations (whether before or
                            after declaration of war) civil war, mutiny
                            rebellion, military or usurped power or by any
                            direct or indirect consequence of any of the said
                            occurrences and in the event of any claim hereunder,
                            the Insured shall prove that the accident, loss,
                            damage and/or liability, arose independently of and
                            was in no way connected with or occasioned by or
                            contributed to by or traceable to any of the said
                            occurrences or any consequences thereof and in
                            default of such proof, the Company shall not be
                            liable to make any payment in respect of such a
                            claim.
                          </li>
                          <li>
                            The Company shall not be liable in respect of any
                            liability directly or indirectly caused by or
                            contributed to by or arising from nuclear weapons
                            material.
                          </li>
                        </ol>
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
          
          {/*Health Insurance FAQ Main */}
          <FAQ productType={this.props.location.pathname.split('/')[1]} />
        </BaseComponent>
      </div>
    );
  }
}

export default MotorActOnlyTwoWheeler;
