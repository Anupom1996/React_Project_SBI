import React, { Component } from "react";
import { Nav, Row, Container, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Tab from "react-bootstrap/Tab";
import { Scrollbars } from 'react-custom-scrollbars';
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
class MotorTradeInternalRisk extends Component {

  render() {
    let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let key_feature, Coverage, locate_us, Exclusion, Comprehensive_Cover, form_cover, Motor_Trade_Internal_Risk,
      Damage_vehicle, Damage_vehicles_thirdparty, Garage, Branch, Liability_Cover,
      Bodily_injury, Property_damage, Loss_damage_ownvehicles, Liability_third_party, damage_thirdparty_vehicles,
      Additional_covers, Depreciation_consequential, Mechanical_breakdown, Normal_wear_tear, Any_loss_damage,
      Loss_damage_war, Failures_breakage, Heading_Mobile_Version, Additional_Covers_Des, Damage_tyres;
    if (lang_name === 'en') {

      Additional_Covers_Des = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT_DES'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT_DES'].content_en;
      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_en;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'].content_en;
      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'] &&
        sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'].content_en;
      Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'].content_en;
      Comprehensive_Cover = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT2'].content_en;
      Motor_Trade_Internal_Risk = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT33'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT33'].content_en;
      form_cover = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT3'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT3'].content_en;
      Damage_vehicle = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT34'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT34'].content_en;
      Damage_vehicles_thirdparty = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT35'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT35'].content_en;
      Heading_Mobile_Version = sbiHomeData && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'] && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'].content_en;
      Garage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT31'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT31'].content_en;
      Branch = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT32'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT32'].content_en;
      Liability_Cover = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT6'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT6'].content_en;
      Additional_covers = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT10'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT10'].content_en;
      Bodily_injury = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT36'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT36'].content_en;
      Property_damage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT37'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT37'].content_en;
      Loss_damage_ownvehicles = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT40'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT40'].content_en;
      Liability_third_party = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT41'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT41'].content_en;
      damage_thirdparty_vehicles = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT42'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT42'].content_en;
      Depreciation_consequential = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT19'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT19'].content_en;
      Mechanical_breakdown = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT20'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT20'].content_en;
      Normal_wear_tear = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT18'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT18'].content_en;
      Any_loss_damage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT17'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT17'].content_en;
      Loss_damage_war = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT25'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT25'].content_en;
      Failures_breakage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT26'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT26'].content_en;
      Damage_tyres = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT44'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT44'].content_en;


    }
    else {
      Additional_Covers_Des = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT_DES'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT_DES'].content_hi;
      Heading_Mobile_Version = sbiHomeData && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'] && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'].content_hi;
      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_hi;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'].content_hi;
      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'] &&
        sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'].content_hi;
      Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'].content_hi;
      Comprehensive_Cover = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT2'].content_hi;
      Motor_Trade_Internal_Risk = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT33'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT33'].content_hi;
      form_cover = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT3'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT3'].content_hi;
      Damage_vehicle = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT34'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT34'].content_hi;
      Damage_vehicles_thirdparty = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT35'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT35'].content_hi;
      Garage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT31'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT31'].content_hi;
      Branch = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT32'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT32'].content_hi;
      Liability_Cover = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT6'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_MOTOR_TEXT6'].content_hi;
      Additional_covers = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT10'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT10'].content_hi;
      Bodily_injury = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT36'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT36'].content_hi;
      Property_damage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT37'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT37'].content_hi;
      Loss_damage_ownvehicles = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT40'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT40'].content_hi;
      Liability_third_party = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT41'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT41'].content_hi;
      damage_thirdparty_vehicles = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT42'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT42'].content_hi;
      Depreciation_consequential = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT19'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT19'].content_hi;
      Mechanical_breakdown = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT20'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT20'].content_hi;
      Normal_wear_tear = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT18'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT18'].content_hi;
      Any_loss_damage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT17'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT17'].content_hi;
      Loss_damage_war = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT25'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT25'].content_hi;
      Failures_breakage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT26'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TEXT26'].content_hi;
      Damage_tyres = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT44'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_RISK_TEXT44'].content_hi;

    }


    return (
      <div>

        <BaseComponent>
          {/* <Helmet> */}
          <HelmetData pageComponentType="MotorTradeInternalRisk" />
          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>{Motor_Trade_Internal_Risk}</h1>
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
                    <h1>{Motor_Trade_Internal_Risk}</h1>
                    {/* <div className="healgth-list">
                    <ul>
                      <li>Policy upto a period of 30 years</li>
                      <li>In-built coverage for earthquake</li>
                    </ul>
                  </div> */}
                  </div>
                  <div className="innerHeadBotomIcon">
                    <img
                      src={require("../../assets/images/motor-right-side.svg")}
                      alt=""
                    />
                  </div>
                </div>
                {/* For Desktop */}
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
                          {key_feature}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_2">
                        <div>
                          <figure> <img src={require("../../assets/images/coverage-icon.svg")} alt="" /></figure>
                          {Coverage}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_3">
                        <div>
                          <figure> <img src={require("../../assets/images/exclusions-iocn.svg")} alt="" /></figure>
                          {Exclusion}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="tabmain_1">
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={340} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        <h5 className="htitle">{key_feature}</h5>
                        <p>{Comprehensive_Cover} </p>
                        <ul>
                          <li>{form_cover}</li>
                          <li>{Damage_vehicle}</li>
                          <li>{Damage_vehicles_thirdparty}</li>
                          <li>{Bodily_injury} </li>
                          <li>{Property_damage}</li>
                        </ul>
                        <p> {Liability_Cover}</p>
                        <ul>
                          <li>{form_cover}</li>
                          <li>{Bodily_injury}</li>
                          <li>{Property_damage}</li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_2">
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={340} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        <h5 className="htitle">{Coverage}</h5>
                        <ul>
                          <li>{Loss_damage_ownvehicles}</li>
                          <li>{Liability_third_party}</li>
                          <li>{damage_thirdparty_vehicles}</li>
                        </ul>
                        <p>{Additional_covers}</p>
                        {ReactHtmlParser(Additional_Covers_Des)}
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_3">
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={340} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        <h5 className="htitle">{Exclusion}</h5>
                        <p>{Any_loss_damage}</p>
                        <ul>
                          <li>{Normal_wear_tear}</li>
                          <li>{Depreciation_consequential}</li>
                          <li>{Mechanical_breakdown}</li>
                          <li>{Loss_damage_war}</li>
                          <li>{Failures_breakage}</li>
                          <li>{Damage_tyres} </li>
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
                <h2 className="titleclose pb-3">{locate_us}</h2>
                <div className="weAreMain">

                  <Tab.Container defaultActiveKey="tabmain_1">
                    <Nav variant="pills" >
                      <Nav.Item>
                        <Nav.Link eventKey="tabmain_1">
                          <div>
                            <figure><img src={require("../../assets/images/Maintenance.svg")} alt="" /></figure>
                            <span>{Garage}</span>
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="tabmain_2">
                          <div>
                            <figure><img src={require("../../assets/images/bank.svg")} alt="" /></figure>
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

export default MotorTradeInternalRisk;