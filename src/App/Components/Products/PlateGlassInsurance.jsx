import React, { Component } from "react";
import { Nav, Row, Container, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Tab from "react-bootstrap/Tab";
import { Scrollbars } from "react-custom-scrollbars";
import HelmetData from "../Common/HelmetData";
import BaseComponent from "../BaseComponent";
import CallBackForm from "./CallBackForm";
import BranchLocator from "./BranchLocator";
import FAQ from "./FAQ";
import ProductRelatedResources from "./ProductRelatedResources";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";
import ReactHtmlParser from 'react-html-parser'
class PlateGlassInsurance extends Component {
  render() {
    let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let key_feature, Coverage, locate_us, Exclusion, Plate_Glass_Insurance, Policy_covers, policy_benefit, Policy_indemnifies, Accidental_loss, cost_erecting, Provided_liability,
      Additional_Benefit, Replacing_lettering, Replacing_burglar, Replacing_shatter, Replacing_damaged, Coverage_Details,
      payment_additional_premium, Riot_strike, Policy_not_cover, Heading_Mobile_Version, War_invasion, Cracked_scratched, loss_or_damage, Any_Plate_Glass,
      Any_consequential_damage, repair_Plate_Glass, Breakage_of_glass, Damage_cost_expense;
    if (lang_name === 'en') {
      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_en;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'].content_en;
      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'] &&
        sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'].content_en;
      Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'].content_en;
      Plate_Glass_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_YEXT1'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_YEXT1'].content_en;
      Policy_covers = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_YEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_YEXT2'].content_en;
      policy_benefit = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT3'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT3'].content_en;
      Policy_indemnifies = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT4'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT4'].content_en;
      Heading_Mobile_Version = sbiHomeData && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'] && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'].content_en;
      Accidental_loss = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT5'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT5'].content_en;
      cost_erecting = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT6'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT6'].content_en;
      Provided_liability = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT7'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT7'].content_en;
      Additional_Benefit = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT8'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT8'].content_en;
      Replacing_lettering = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT9'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT9'].content_en;
      Replacing_burglar = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT10'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT10'].content_en;
      Replacing_shatter = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT11'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT11'].content_en;
      Replacing_damaged = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT12'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT12'].content_en;
      Coverage_Details = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT13'].content_en;
      payment_additional_premium = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT14'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT14'].content_en;
      Riot_strike = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT15'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT15'].content_en;
      Policy_not_cover = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT16'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT16'].content_en;
      War_invasion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT17'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT17'].content_en;
      Cracked_scratched = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT18'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT18'].content_en;
      loss_or_damage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT19'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT19'].content_en;
      Any_Plate_Glass = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT20'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT20'].content_en;
      Any_consequential_damage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT21'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT21'].content_en;
      repair_Plate_Glass = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT22'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT22'].content_en;
      Breakage_of_glass = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT23'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT23'].content_en;
      Damage_cost_expense = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT24'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT24'].content_en;

    }
    else {
      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_hi;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'].content_hi;
      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'] &&
        sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'].content_hi;
      Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'].content_hi;
      Plate_Glass_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_YEXT1'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_YEXT1'].content_hi;
      Policy_covers = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_YEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_YEXT2'].content_hi;
      policy_benefit = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT3'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT3'].content_hi;
      Policy_indemnifies = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT4'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT4'].content_hi;
      Accidental_loss = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT5'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT5'].content_hi;
      cost_erecting = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT6'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT6'].content_hi;
      Provided_liability = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT7'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT7'].content_hi;
      Additional_Benefit = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT8'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT8'].content_hi;
      Replacing_lettering = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT9'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT9'].content_hi;
      Replacing_burglar = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT10'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT10'].content_hi;
      Replacing_shatter = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT11'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT11'].content_hi;
      Replacing_damaged = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT12'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT12'].content_hi;
      Coverage_Details = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT13'].content_hi;
      payment_additional_premium = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT14'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT14'].content_hi;
      Riot_strike = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT15'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT15'].content_hi;
      Policy_not_cover = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT16'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT16'].content_hi;
      War_invasion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT17'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT17'].content_hi;
      Cracked_scratched = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT18'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT18'].content_hi;
      loss_or_damage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT19'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT19'].content_hi;
      Any_Plate_Glass = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT20'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT20'].content_hi;
      Any_consequential_damage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT21'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT21'].content_hi;
      repair_Plate_Glass = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT22'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT22'].content_hi;
      Breakage_of_glass = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT23'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT23'].content_hi;
      Damage_cost_expense = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT24'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT24'].content_hi;
      Heading_Mobile_Version = sbiHomeData && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'] && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'].content_hi;
    }

    return (
      <div>
        <BaseComponent>
          {/* <Helmet> */}
          <HelmetData pageComponentType="PlateGlassInsurance" />
          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>{Plate_Glass_Insurance}</h1>
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
                    <h1>{Plate_Glass_Insurance}</h1>
                    {/* <div className="healgth-list">
                    <ul>
                      <li>Policy upto a period of 30 years</li>
                      <li>In-built coverage for earthquake</li>
                    </ul>
                  </div> */}
                  </div>
                  {/* For Desktop */}
                </div>
                <div className="innerHeadBotomIcon">
                  <img
                    src={require("../../assets/images/general_product_bottom_icon.svg")}
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
                      <h5 className="htitle">{key_feature}</h5>
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={350}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <ul>
                          <li>
                            {Policy_covers}
                          </li>
                          <li>
                            {policy_benefit}
                          </li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_2">
                      <h5 className="htitle">{Coverage}</h5>
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={350}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <ul>
                          <li>
                            {Policy_indemnifies}
                          </li>
                          <li>
                            {Accidental_loss}
                          </li>
                          <li>
                            {cost_erecting}
                          </li>
                          <li>
                            {Provided_liability}
                          </li>
                          <li>
                            {Additional_Benefit}
                          </li>
                          <li>
                            {Replacing_lettering}
                          </li>
                          <li>
                            {Replacing_burglar}
                          </li>
                          <li>
                            {Replacing_shatter}
                          </li>
                          <li>
                            {Replacing_damaged}
                          </li>
                        </ul>
                        <p></p>
                        <p><strong>{Coverage_Details}</strong></p>
                        <ul>
                          <li>
                            {payment_additional_premium}
                          </li>
                          <li>{Riot_strike}</li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_3">
                      <h5 className="htitle">{Exclusion}</h5>
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={350}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <ul>
                          <li>{Policy_not_cover}</li>
                          <li>
                            {War_invasion}
                          </li>
                          <li>{Cracked_scratched}</li>
                          <li>
                            {loss_or_damage}
                          </li>
                          <li>
                            {Any_Plate_Glass}
                          </li>
                          <li>
                            {Any_consequential_damage}
                          </li>
                          <li>
                            {repair_Plate_Glass}
                          </li>
                          <li>
                            {Breakage_of_glass}
                          </li>
                          <li>
                            {Damage_cost_expense}
                          </li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </Container>
          </section>

          <ProductRelatedResources
            productType={this.props.location.pathname.split('/')[1]}
          />

          {/*We are closer than you think, locate us: Main */}
          <section className="weAreWrapper weAreMomeWrapper">
            <Container>
              <h5 className="htitle text-center">
                {locate_us}
              </h5>
              {/***** Branch Locator Component */}
              <BranchLocator />
            </Container>
          </section>

          {/*Why SBI General Insurance? */}
          <WhySBIInsurance
            productType={this.props.location.pathname.split('/')[1]}
          />

          {/* FAQ Main */}
          <FAQ productType={this.props.location.pathname.split('/')[1]} />
        </BaseComponent>
      </div>
    );
  }
}

export default PlateGlassInsurance;
