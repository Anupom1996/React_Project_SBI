import React, { Component } from "react";
import { Nav, Row, Container, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Tab from "react-bootstrap/Tab";
import { Scrollbars } from 'react-custom-scrollbars';
import HelmetData from "../Common/HelmetData";
import BaseComponent from "../BaseComponent";
import CallBackForm from "./CallBackForm";
import BranchLocator from "./BranchLocator";
import FAQ from "./FAQ";
import ProductRelatedResourses from "./ProductRelatedResources";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";

class EmployeesCompensation extends Component {

  render() {
    return (
      <div>

        <BaseComponent>
          {/* <Helmet> */}
          <HelmetData pageComponentType="EmployeesCompensation" />
          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>Employees Compensation Policy</h1>
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
                    <img src={require("../../assets/images/common_banner.svg")} alt="" />
                  </figure>
                   </div>
                  <div className="col-8 d-flex align-items-center">
                  <div className="flex-column">
                  <h1>Employees Compensation Policy</h1>
                  {/* <div className="healgth-list">
                    <ul>
                      <li>Policy upto a period of 30 years</li>
                      <li>In-built coverage for earthquake</li>
                    </ul>
                  </div> */}
                  {/* For Desktop */}
                </div>
                <div className="innerHeadBotomIcon">
                      <img
                        src={require("../../assets/images/general_product_bottom_icon.svg")}
                        alt=""
                      />
                    </div>
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
                          <figure> <img src={require("../../assets/images/exclusions-iocn.svg")} alt="" /></figure>
                          Exclusion
                            </div>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="tabmain_1">
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={380} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        <h5 className="htitle">Key Feature</h5>
                        <p>Legal liability to pay compensation for personal injury by accident or disease arising out of and in the course of employment by the insured in the Business and if the Insured shall be liable to pay compensation for such injury either under the Law(s) set out in the Schedule or at Common law</p>
                        <p>On payment of additional premium, the following coverage can be opted: </p>
                        <ul>
                          <li>Coverage for Medical Expenses</li>
                          <li>Coverage for Occupational Disease</li>
                          <li>Coverage for Contractors workers/employees</li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_2">
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={380} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        <h5 className="htitle">Coverage</h5>
                        <p>This Policy indemnifies the Insured in respect of: </p>
                        <ul>
                          <li>The Company will indemnify the Insured against all sums for which the Insured shall be so liable and will in addition be responsible for all costs and expenses incurred with its consent in defending any claim for such compensation that may arise during the period of insurance due to any employee in the Insured's immediate service sustaining personal injury by accident or disease arising out of and in the course of his employment by the Insured in the Business</li>
                        </ul>
                        <p>Basis of Indemnity </p>
                        <ul>
                          <li>As per Employees Compensation Act, 1923 and the amendments thereof and liabilities incurred by the insured under Common Law only upto limit of indemnity agreed</li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_3">

                      <h5 className="htitle">Exclusion</h5>
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={350} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        <p>This Policy shall not cover liability of the Insured: </p>
                        <ol type="a">
                          <li>For Injury caused to Employee by accident directly or indirectly caused by or arising from or in consequence of or attributable to war, invasion, act of foreign enemy, hostilities (whether war be declared or not) civil war, mutiny, insurrection, rebellion, revolution or military or usurped power, nuclear weapons material, ionising radiations or contamination by radioactivity from any nuclear fuel or from any nuclear waste from the combustion of nuclear fuel. </li>
                          <li>Accidents occurring at any other place than the Place or Places of Employment specified in the Schedule, unless the Employee was at such other place whilst on duty for the purpose of Business and on the directions of the Insured or any of its official authorised to exercise control and supervision over the Employee. </li>
                          <li>For Occupational Diseases contracted by an Employee</li>
                          <li>For interest and/or penalty imposed on the Insured under any law or otherwise.</li>
                          <li>Under any Law for medical expenses in connection with treatment of any Injury sustained by an Employee</li>
                          <li>For persons employed in the Business under a Contractor or Sub-Contractor of the Insured unless specifically covered in the Schedule</li>
                          <li>For Injury sustained by person whilst in the employ of the Insured otherwise than in the Business and/or who has is not declared for insurance under this Policy. </li>
                          <li>Assumed by agreement which would not have attached in the absence of such agreement</li>
                          <li>For any sum which the Insured would have been entitled to recover from any party but for an agreement between the Insured and such party. </li>
                          <li>For any accident occurring whilst the Employee is under the influence of intoxicating liquor or drugs.</li>
                          <li>For any incapacity or death of an Employee resulting from his/her deliberate self-injury or the deliberate aggravation of an accidental Injury. </li>
                        </ol>
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
          <section className="weAreWrapper weAreMomeWrapper">
            <Container>
              <h5 className="htitle text-center">We are closer than you think, locate us:</h5>
              {/***** Branch Locator Component */}
              <BranchLocator />
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

export default EmployeesCompensation;