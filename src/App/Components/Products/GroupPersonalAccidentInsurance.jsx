import React, { Component } from "react";
import { Nav, Row, Container, Col, Table } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Tab from "react-bootstrap/Tab";
import { Scrollbars } from "react-custom-scrollbars";
import BaseComponent from "../BaseComponent";
import CallBackForm from "./CallBackForm";
import BranchLocator from "./BranchLocator";
import FAQ from "./FAQ";
import ProductRelatedResources from "./ProductRelatedResources";
import HelmetData from "../Common/HelmetData";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";
import ReactHtmlParser from 'react-html-parser'
class GroupPersonalAccidentInsurance extends Component {
  render() {
    let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let key_feature, Coverage, locate_us, Group_Personal_Accident, SBI_Group_Accident, Group_Personal_Accident_Insurance, Policy_covers, Some_major_exclusions, Self_Inflicted, HIV_AIDS, Persons_enrolled, Accidents_influence,
      Participation_Riot, Learning_operating, War_Invasion, Nuclear_Damage, Adventure_Dangerous, Child_Birth,
      Wilful_Participation, further_list, Sum_Insured, Premium_payable,
      liability_Policy, Text_50, General_Exclusion, Heading_Mobile_Version
      ;


    if (lang_name === 'en') {
      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_en;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'].content_en;
      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'] &&
        sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'].content_en;
      General_Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_LOAN_TEXT52'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_LOAN_TEXT52'].content_en;
      Group_Personal_Accident = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT45'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT45'].content_en;
      SBI_Group_Accident = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT46'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT46'].content_en;
      Group_Personal_Accident_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT1'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT1'].content_en;
      Policy_covers = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT2'].content_en;
      Some_major_exclusions = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT3'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT3'].content_en;
      Self_Inflicted = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT4'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT4'].content_en;
      HIV_AIDS = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT5'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT5'].content_en;
      Persons_enrolled = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT6'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT6'].content_en;
      Accidents_influence = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT7'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT7'].content_en;
      Participation_Riot = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT8'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT8'].content_en;
      Learning_operating = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT9'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT9'].content_en;
      War_Invasion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT10'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT10'].content_en;
      Nuclear_Damage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT11'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT11'].content_en;
      Adventure_Dangerous = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT12'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT12'].content_en;
      Child_Birth = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT13'].content_en;
      Wilful_Participation = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT14'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT14'].content_en;
      further_list = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT5'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT15'].content_en;
      Sum_Insured = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT16'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT16'].content_en;
      Premium_payable = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT17'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT17'].content_en;
      // G200000 = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT18'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT18'].content_en;
      // G100 = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT19'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT19'].content_en;
      // G200 = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT20'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT20'].content_en;
      // G500 = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT21'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT21'].content_en;
      // G1000 = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT22'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT22'].content_en;
      // G2000000 = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT23'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT23'].content_en;
      // G1000000 = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT24'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT24'].content_en;
      // G400000 = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT25'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT25'].content_en;
      Text_50 = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT50'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT50'].content_en;
      liability_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT26'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT26'].content_en;
      Heading_Mobile_Version = sbiHomeData && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'] && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'].content_en;

    }
    else {

      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_hi;
      Text_50 = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT50'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT50'].content_hi;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'].content_hi;
      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'] &&
        sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'].content_hi;
      Group_Personal_Accident = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT45'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT45'].content_hi;
      SBI_Group_Accident = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT46'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT46'].content_hi;
      Group_Personal_Accident_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT1'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT1'].content_hi;
      Policy_covers = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT2'].content_hi;
      Some_major_exclusions = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT3'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT3'].content_hi;
      Self_Inflicted = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT4'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT4'].content_hi;
      HIV_AIDS = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT5'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT5'].content_hi;
      Persons_enrolled = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT6'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT6'].content_hi;
      Accidents_influence = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT7'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT7'].content_hi;
      Participation_Riot = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT8'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT8'].content_hi;
      Learning_operating = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT9'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT9'].content_hi;
      War_Invasion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT10'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT10'].content_hi;
      Nuclear_Damage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT11'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT11'].content_hi;
      Adventure_Dangerous = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT12'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT12'].content_hi;
      Child_Birth = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT13'].content_hi;
      Wilful_Participation = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT14'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT14'].content_hi;
      further_list = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT15'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT15'].content_hi;
      Sum_Insured = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT16'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT16'].content_hi;
      Premium_payable = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT17'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT17'].content_hi;
      // G200000 = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT18'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT18'].content_hi;
      // G100 = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT19'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT19'].content_hi;
      // G200 = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT20'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT20'].content_hi;
      // G500 = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT21'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT21'].content_hi;
      // G1000 = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT22'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT22'].content_hi;
      // G2000000 = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT23'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT23'].content_hi;
      // G1000000 = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT24'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT24'].content_hi;
      // G400000 = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT25'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT25'].content_hi;
      liability_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT26'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT26'].content_hi;
      General_Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_LOAN_TEXT52'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_LOAN_TEXT52'].content_hi;
      Heading_Mobile_Version = sbiHomeData && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'] && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'].content_hi;

    }
    return (
      <div>
        <BaseComponent>
          {/* <Helmet> */}
          <HelmetData pageComponentType="GroupPersonalAccidentInsurance" />
          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>{Group_Personal_Accident}</h1>
                <div className="healgth-list">
                  {ReactHtmlParser(Heading_Mobile_Version)}

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
                      src={require("../../assets/images/retail-head-icon.svg")}
                      alt=""
                    />
                  </figure>
                </div>
                <div className="col-8 d-flex align-items-center">
                  <div className="flex-column">
                    <h1>{Group_Personal_Accident}</h1>
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
                      src={require("../../assets/images/inner-banner-bottom-icon.svg")}
                      alt=""
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
                            <img src={require("../../assets/images/key-feature-icon.svg")} alt="" />
                          </figure>
                          {key_feature}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_2">
                        <div>
                          <figure>
                            <img src={require("../../assets/images/coverage-icon.svg")} alt="" />
                          </figure>
                          {Coverage}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_3">
                        <div>
                          <figure>
                            <img src={require("../../assets/images/exclusions-iocn.svg")} alt="" />
                          </figure>
                          {General_Exclusion}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_4">
                        <div>
                          <figure>
                            <img src={require("../../assets/images/sum-insured-icon.svg")} alt="" />
                          </figure>
                          {Sum_Insured}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="tabmain_1">
                      <h5 className="htitle">{key_feature}</h5>
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={480} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        <p>{SBI_Group_Accident}</p>
                        <ul>
                          <li>{Text_50}</li>
                          <li> {Group_Personal_Accident_Insurance}
                          </li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_2">
                      <h5 className="htitle">{Coverage}</h5>
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={490} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        <ul>
                          <li>{Policy_covers}</li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_3">
                      <h5 className="htitle"> {General_Exclusion}</h5>
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={490} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        <ul>
                          <p>{Some_major_exclusions}</p>
                          <li> {Self_Inflicted}</li>
                          <li>{HIV_AIDS}</li>
                          <li>
                            {Persons_enrolled}
                          </li>
                          <li>
                            {Accidents_influence}
                          </li>
                          <li>
                            {Participation_Riot}
                          </li>
                          <li>{Learning_operating} </li>
                          <li>
                            {War_Invasion}
                          </li>
                          <li>{Nuclear_Damage}</li>
                          <li>{Adventure_Dangerous}</li>
                          <li>{Child_Birth}</li>
                          <li>
                            {Wilful_Participation}
                          </li>

                        </ul>
                        <p>
                          {further_list}
                        </p>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_4">
                      <h5 className="htitle">{Sum_Insured}</h5>
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={490} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        <Table striped hover responsive="sm" size="md">
                          <thead>
                            <tr>
                              <th width="150">{Sum_Insured}</th>
                              <th>
                                {Premium_payable}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{200000}</td>
                              <td>{100}</td>
                            </tr>
                            <tr>
                              <td>{400000}</td>
                              <td>{200}</td>
                            </tr>
                            <tr>
                              <td>{1000000}</td>
                              <td>{500}</td>
                            </tr>
                            <tr>
                              <td>{2000000}</td>
                              <td>{1000}</td>
                            </tr>
                          </tbody>
                        </Table>

                        <ul>

                          <li>
                            {liability_Policy}
                          </li>
                        </ul>
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
          <section className="weAreWrapper weAreMomeWrapper">
            <Container>
              <h5 className="htitle text-center"> {locate_us}</h5>
              {/***** Branch Locator Component */}
              <BranchLocator />
            </Container>
          </section>

          {/*Why SBI General Insurance? */}
          <WhySBIInsurance productType={this.props.location.pathname.split('/')[1]} />

          {/*Health Insurance FAQ Main */}
          <FAQ productType={this.props.location.pathname.split('/')[1]} />
        </BaseComponent>
      </div>
    );
  }
}

export default GroupPersonalAccidentInsurance;
