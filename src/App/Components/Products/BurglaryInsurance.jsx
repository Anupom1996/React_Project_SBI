import React, { Component } from "react";
import { Nav, Row, Container, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Tab from "react-bootstrap/Tab";
import HelmetData from "../Common/HelmetData";
import BaseComponent from "../BaseComponent";
import CallBackForm from "./CallBackForm";
import BranchLocator from "./BranchLocator";
import FAQ from "./FAQ";
import ProductRelatedResources from "./ProductRelatedResources";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";
import * as AppConstant from "../AppConstant";
import ReactHtmlParser from 'react-html-parser'
class BurglaryInsurance extends Component {

  gtmClickHandler = (click_text) => {
    //GTM Implementation
    let gaUserId = document.cookie.match(/_ga=(.+?);/)[1].split('.').slice(-2).join(".");
    const data = {
      'event': 'burglary_product_page_4_product_features_click',
      'product_name': 'Burglary Insurance',
      'pagetype': 'burglary_product_page',
      'client_id': gaUserId,
      'click_text': click_text,
      'timestamp': AppConstant.gtmCurrentTime(),
      'quote_no': 'NA',
      'lead_no': 'NA',
      'policy_no': 'NA'
    };
    window.dataLayer.push(data);
  }

  render() {
    let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let key_feature, Coverage, locate_us, Exclusion, Burglary_Policy, Sum_insured, Theft_cover, standard_cover, standard_cover_violence, Clothing_effects, Automatic_reinstatement, Lump_sum_benefit, provided_additional_benefits,
      Damage_to_safe, familiarized_exclusions, War_invasion, Confiscation_nationalisation, Consequential_loss, Riots_strikes, Nuclear_activity,
      Destruction_damage, Shortages_clerical, Heading_Mobile_Version, Destruction_loss;
    if (lang_name === 'en') {
      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_en;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'].content_en;
      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT20'] &&
        sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT20'].content_en;
      Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'].content_en;
      Burglary_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT1'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT1'].content_en;
      Sum_insured = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT2'].content_en;
      Theft_cover = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT3'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT3'].content_en;
      standard_cover = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT4'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT4'].content_en;
      standard_cover_violence = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT5'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT5'].content_en;
      provided_additional_benefits = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT6'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT6'].content_en;
      Clothing_effects = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT7'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT7'].content_en;
      Automatic_reinstatement = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT8'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT8'].content_en;
      Damage_to_safe = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT9'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT9'].content_en;
      Lump_sum_benefit = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT10'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT10'].content_en;
      familiarized_exclusions = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT11'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT11'].content_en;
      War_invasion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT12'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT12'].content_en;
      Confiscation_nationalisation = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT13'].content_en;
      Consequential_loss = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT14'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT14'].content_en;
      Riots_strikes = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT15'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT15'].content_en;
      Nuclear_activity = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT16'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT16'].content_en;
      Consequential_loss = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT14'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT14'].content_en;
      Riots_strikes = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT15'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT15'].content_en;
      Nuclear_activity = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT16'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT16'].content_en;
      Heading_Mobile_Version = sbiHomeData && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'] && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'].content_en;
      Destruction_damage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT17'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT17'].content_en;
      Shortages_clerical = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT18'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT18'].content_en; Destruction_loss = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT19'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT19'].content_en;


    }
    else {
      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_hi;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'].content_hi;
      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT20'] &&
        sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT20'].content_hi;
      Heading_Mobile_Version = sbiHomeData && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'] && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'].content_hi;
      Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'].content_hi;
      Burglary_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT1'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT1'].content_hi;
      Sum_insured = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT2'].content_hi;
      Theft_cover = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT3'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT3'].content_hi;
      standard_cover = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT4'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT4'].content_hi;
      standard_cover_violence = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT5'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT5'].content_hi;
      provided_additional_benefits = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT6'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT6'].content_hi;
      Clothing_effects = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT7'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT7'].content_hi;
      Automatic_reinstatement = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT8'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT8'].content_hi;
      Damage_to_safe = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT9'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT9'].content_hi;
      Lump_sum_benefit = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT10'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT10'].content_hi;
      familiarized_exclusions = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT11'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT11'].content_hi;
      War_invasion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT12'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT12'].content_hi;
      Confiscation_nationalisation = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT13'].content_hi;
      Consequential_loss = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT14'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT14'].content_hi;
      Riots_strikes = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT15'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT15'].content_hi;
      Nuclear_activity = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT16'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT16'].content_hi;
      Destruction_damage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT17'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT17'].content_hi;
      Shortages_clerical = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT18'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT18'].content_hi;
      Destruction_loss = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT19'] && sbiHomeData['PRODUCTS_CORPORATE_BURGLARY_TEXT19'].content_hi;


    }


    return (
      <div>
        <BaseComponent>
          {/* <Helmet> */}
          <HelmetData pageComponentType="BurglaryInsurance" />
          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>{Burglary_Policy}</h1>
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
                    <img src={require("../../assets/images/common_banner.svg")} alt="" />
                  </figure>
                </div>
                <div className="col-8 d-flex align-items-center">
                  <div className="flex-column">
                    <h1>{Burglary_Policy}</h1>
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
                    <Nav.Item onClick={e => this.gtmClickHandler('Key Feature')}>
                      <Nav.Link eventKey="tabmain_1">
                        <div>
                          <figure>
                            <img src={require("../../assets/images/key-feature-icon.svg")} alt="" />
                          </figure>
                          {key_feature}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={e => this.gtmClickHandler('Coverage')}>
                      <Nav.Link eventKey="tabmain_2">
                        <div>
                          <figure>
                            <img src={require("../../assets/images/coverage-icon.svg")} alt="" />
                          </figure>
                          {Coverage}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="tabmain_3">
                        <div>
                          <figure>
                            {" "}
                            <img
                              src={require("../../assets/images/bonus-motor-icon.svg")}
                              alt=""
                            />
                          </figure>
                          Bonus
                        </div>
                      </Nav.Link>
                    </Nav.Item> */}
                    <Nav.Item onClick={e => this.gtmClickHandler('Exclusion')}>
                      <Nav.Link eventKey="tabmain_4">
                        <div>
                          <figure>
                            <img src={require("../../assets/images/exclusions-iocn.svg")} alt="" />
                          </figure>
                          {Exclusion}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="tabmain_1">
                      <h5 className="htitle">{key_feature}</h5>
                      <ul>
                        <li>{Sum_insured} </li>
                        <li>
                          {Theft_cover}                         </li>
                        <li>
                          {standard_cover}                         </li>
                        <li>
                          {standard_cover_violence}
                        </li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_2">
                      <h5 className="htitle">{Coverage}</h5>
                      <ul>
                        <li>
                          {provided_additional_benefits}

                        </li>
                        <li>
                          {Clothing_effects}
                        </li>
                        <li>
                          {Automatic_reinstatement}
                        </li>
                        <li>
                          {Damage_to_safe}
                        </li>
                        <li>
                          {Lump_sum_benefit}
                        </li>
                      </ul>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="tabmain_3">
                      <h5 className="htitle">Bonus</h5>
                      <ul>
                        <p>
                          SBI General Burglary Policy covers theft of property
                          (content and Stock) at business premises following
                          forcible or violent entry to the premises.
                        </p>
                      </ul>
                    </Tab.Pane> */}
                    <Tab.Pane eventKey="tabmain_4">
                      <h5 className="htitle">{Exclusion}</h5>
                      <ul>
                        <li>
                          {familiarized_exclusions}
                        </li>
                        <li>{War_invasion}</li>
                        <li>
                          {Confiscation_nationalisation}
                        </li>
                        <li>{Consequential_loss}</li>
                        <li>{Riots_strikes}</li>
                        <li>{Nuclear_activity}</li>
                        <li>
                          {Destruction_damage}                         </li>
                        <li>{Shortages_clerical} </li>
                        <li>
                          {Destruction_loss}                        </li>
                      </ul>
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
              <h5 className="htitle text-center">{locate_us}</h5>
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

export default BurglaryInsurance;
