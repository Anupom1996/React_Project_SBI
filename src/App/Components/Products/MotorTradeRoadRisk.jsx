import React, { Component } from "react";
import { Nav, Row, Container, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Tab from "react-bootstrap/Tab";
import { Scrollbars } from "react-custom-scrollbars";
import BaseComponent from "../BaseComponent";
import CallBackForm from "./CallBackForm";
import BranchLocator from "./BranchLocator";
// import Garage from "../../Components/NonTransactional/Contact/Garage";
import FAQ from "./FAQ";
import ProductRelatedResourses from "./ProductRelatedResources";
import HelmetData from "../Common/HelmetData";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";
import ReactHtmlParser from 'react-html-parser'
class MotorTradeRoadRisk extends Component {
  render() {
    let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let key_feature, Coverage, locate_us, Exclusion, Motor_TradeRoad_Risk, form_cover, Loss_destruction_damage, Any_liabilities, Liability_Cover, cover_Insurance, Compulsory_Personal_Accident,
      Legal_Liability, Liability_compensation, Additional_covers, Additional_Legal_liabilities, additional_liabilities, Paid_driver, Employees_travelling,
      Normal_wear_tear, Depreciation_consequential, Mechanical_breakdown, Vehicle_used, Damage_by_person, Heading_Mobile_Version, Third_Pirty_Libality,
      Damage_person_driving, liquor, Manmade_Calamities, Private_Use, Natural_Calamities, Loss_damage_vehicle, Demonstration_Policy, Tuition_Driving, Company_loss_damage, Any_loss_damage, Garage, Branch

      ;


    if (lang_name === 'en') {
      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_en;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'].content_en;
      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'] &&
        sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'].content_en;
      Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'].content_en;
      Motor_TradeRoad_Risk = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_ROAD_RISK'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_ROAD_RISK'].content_en;
      // Comprehensive_Cover=sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT2'].content_en;
      form_cover = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT3'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT3'].content_en;
      Loss_destruction_damage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT4'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT4'].content_en;
      Any_liabilities = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT5'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT5'].content_en;
      Liability_Cover = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT6'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT6'].content_en;
      cover_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT7'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT7'].content_en;
      Legal_Liability = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT8'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT8'].content_en;
      Liability_compensation = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT9'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT9'].content_en;
      Compulsory_Personal_Accident = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT1'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT1'].content_en;
      Additional_covers = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT10'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT10'].content_en;
      Additional_Legal_liabilities = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT11'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT11'].content_en;
      additional_liabilities = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT12'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT12'].content_en;
      Paid_driver = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT13'].content_en;
      Employees_travelling = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT14'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT14'].content_en;
      Normal_wear_tear = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT18'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT18'].content_en;
      Depreciation_consequential = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT19'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT19'].content_en;
      Mechanical_breakdown = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT20'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT20'].content_en;
      Vehicle_used = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT21'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT21'].content_en;
      Damage_by_person = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT22'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT22'].content_en;
      Damage_person_driving = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT23'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT23'].content_en;
      liquor = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT24'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT24'].content_en;
      Third_Pirty_Libality = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT50'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT50'].content_en;
      Heading_Mobile_Version = sbiHomeData && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'] && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'].content_en;
      Manmade_Calamities = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT18'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT18'].content_en;
      Private_Use = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT17'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT17'].content_en;
      Natural_Calamities = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT19'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT19'].content_en;
      Loss_damage_vehicle = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT20'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT20'].content_en;
      Demonstration_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT21'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT21'].content_en;
      Tuition_Driving = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT22'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT22'].content_en;
      Company_loss_damage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT27'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT27'].content_en;
      Any_loss_damage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT28'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT28'].content_en;
      Garage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT31'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT31'].content_en;
      Branch = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT32'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT32'].content_en;


    }
    else {
      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_hi;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'].content_hi;
      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'] &&
        sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'].content_hi;
      Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'].content_hi;
      Motor_TradeRoad_Risk = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_ROAD_RISK'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_ROAD_RISK'].content_hi;
      // Comprehensive_Cover= sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT2'].content_hi;
      form_cover = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT3'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT3'].content_hi;
      Loss_destruction_damage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT4'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT4'].content_hi;
      Any_liabilities = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT5'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT5'].content_hi;
      Liability_Cover = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT6'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT6'].content_hi;
      cover_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT7'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT7'].content_hi;
      Legal_Liability = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT8'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT8'].content_hi;
      Liability_compensation = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT9'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT9'].content_hi;
      Compulsory_Personal_Accident = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT1'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT1'].content_hi;
      Heading_Mobile_Version = sbiHomeData && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'] && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'].content_hi;
      Additional_covers = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT10'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT10'].content_hi;
      Additional_Legal_liabilities = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT11'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT11'].content_hi;
      additional_liabilities = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT12'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT12'].content_hi;
      Paid_driver = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT13'].content_hi;
      Employees_travelling = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT14'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT14'].content_hi;
      Normal_wear_tear = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT18'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT18'].content_hi;
      Depreciation_consequential = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT19'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT19'].content_hi;
      Mechanical_breakdown = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT20'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT20'].content_hi;
      Vehicle_used = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT21'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT21'].content_hi;
      Damage_by_person = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT22'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT22'].content_hi;
      Damage_person_driving = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT23'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT23'].content_hi;
      liquor = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT24'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT24'].content_hi;

      Manmade_Calamities = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT18'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT18'].content_hi;
      Private_Use = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT17'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT17'].content_hi;
      Natural_Calamities = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT19'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT19'].content_hi;
      Loss_damage_vehicle = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT20'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT20'].content_hi;
      Demonstration_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT21'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT21'].content_hi;
      Tuition_Driving = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT22'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT22'].content_hi;
      Company_loss_damage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT27'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT27'].content_hi;
      Any_loss_damage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT28'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT28'].content_hi;
      Garage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT31'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT31'].content_hi;
      Branch = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT32'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT32'].content_hi;
      Third_Pirty_Libality = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT50'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT50'].content_hi;



    }

    return (
      <div>
        <BaseComponent>
          {/* <Helmet> */}
          <HelmetData pageComponentType="MotorTradeRoadRisk" />
          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>{Motor_TradeRoad_Risk}</h1>
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
                    <img src={require("../../assets/images/motor-banner.svg")} alt="" />
                  </figure>
                </div>
                <div className="col-8 d-flex align-items-center">
                  <div className="flex-column">
                    <h1>{Motor_TradeRoad_Risk}</h1>
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
                      src={require("../../assets/images/motor-right-side.svg")}
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
                            {" "}
                            <img
                              src={require("../../assets/images/key-feature-icon.svg")}
                              alt=""
                            />
                          </figure>
                          {key_feature}
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
                          {Coverage}
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
                          {Exclusion}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="tabmain_1">
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={380}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <h5 className="htitle">{key_feature}</h5>
                        <p>{Motor_TradeRoad_Risk}</p>
                        <ul>
                          <li>{form_cover}</li>
                          <li>
                            {Loss_destruction_damage}{" "}
                          </li>
                          <li>{Any_liabilities}</li>
                        </ul>
                        <p>{Liability_Cover}</p>
                        <ul>
                          <li>{cover_Insurance}</li>
                          <li>
                            {Legal_Liability}{" "}
                          </li>
                          <li>
                            {Liability_compensation}
                          </li>
                          <li>
                            {Compulsory_Personal_Accident}
                          </li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_2">
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={380}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <h5 className="htitle">{Coverage}</h5>
                        {ReactHtmlParser(Third_Pirty_Libality)}

                        <p>
                          {Loss_damage_vehicle}
                        </p>
                        <p>
                          {Natural_Calamities}
                        </p>
                        <p>
                          {Manmade_Calamities}
                        </p>
                        <p>{Additional_covers}</p>
                        <p>
                          {Private_Use}
                        </p>
                        <p>
                          {Demonstration_Policy}
                        </p>
                        <p>
                          {Tuition_Driving}
                        </p>
                        <p>{Additional_Legal_liabilities}</p>
                        <p>
                          {additional_liabilities}
                        </p>
                        <ul>
                          <li>

                            {Paid_driver}
                          </li>
                          <li>
                            {Employees_travelling}
                          </li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_3">
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={380}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <h5 className="htitle">{Exclusion}</h5>
                        <p>
                          {Company_loss_damage}                         </p>
                        <p>
                          {Any_loss_damage}
                        </p>
                        <ul>
                          <li>
                            {Normal_wear_tear}
                          </li>
                          <li>{Depreciation_consequential}</li>
                          <li>{Mechanical_breakdown}</li>
                          <li>
                            {Vehicle_used}
                          </li>
                          <li>
                            {Damage_by_person}
                          </li>
                          <li>
                            {Damage_person_driving}
                          </li>
                          <li>{liquor}</li>
                        </ul>
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
                  {locate_us}
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
                            <span>{Garage}</span>
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
                            <span>{Branch}</span>
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

export default MotorTradeRoadRisk;
