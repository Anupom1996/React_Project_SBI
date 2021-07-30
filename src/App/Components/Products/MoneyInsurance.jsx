import React, { Component } from "react";
import { Nav, Row, Container, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Tab from "react-bootstrap/Tab";
import HelmetData from "../Common/HelmetData";
import { Scrollbars } from "react-custom-scrollbars";
import BaseComponent from "../BaseComponent";
import CallBackForm from "./CallBackForm";
import BranchLocator from "./BranchLocator";
import ProductRelatedResources from "./ProductRelatedResources";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";
import ReactHtmlParser from 'react-html-parser'
class MoneyInsurance extends Component {
  render() {
    let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let key_feature, Coverage, locate_us, Money_Insurance, Exclusion, Variable_sum, Money_cover, In_transit, On_premises, safe_strong_room, Optional_cover, Broad_definition, Money_means_cash,
      SBI_General_Money_Policy, exclusion_under_Policy, Exclusion_Text, Company_liable, Due_to_robbery, Arising_shortages, Geographical_Area,
      Resulting_confiscation, Damage_cost, Heading_Mobile_Version;

    if (lang_name === 'en') {
      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_en;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'].content_en;
      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT20'] &&
        sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT20'].content_en;
      Heading_Mobile_Version = sbiHomeData && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'] && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'].content_en;
      Money_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT1'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT1'].content_en;
      Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'].content_en;
      Variable_sum = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT3'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT3'].content_en;
      Money_cover = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT4'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT4'].content_en;
      In_transit = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT5'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT5'].content_en;
      On_premises = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT6'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT6'].content_en;
      Exclusion_Text = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT26'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT26'].content_en;
      safe_strong_room = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT7'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT7'].content_en;
      Optional_cover = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT8'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT8'].content_en;
      Broad_definition = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT9'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT9'].content_en;
      Money_means_cash = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT10'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT10'].content_en;
      SBI_General_Money_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT12'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT12'].content_en;
      exclusion_under_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT14'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT14'].content_en;
      Company_liable = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT15'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT15'].content_en;
      Due_to_robbery = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT16'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT16'].content_en;
      Arising_shortages = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT17'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT17'].content_en;
      Geographical_Area = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT18'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT18'].content_en;
      Resulting_confiscation = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT19'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT19'].content_en;
      Damage_cost = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT24'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT24'].content_en;





    }
    else {
      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_hi;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'].content_hi;
      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT20'] &&
        sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT20'].content_hi;
      Money_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT1'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT1'].content_hi;
      Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'].content_hi;
      Variable_sum = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT3'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT3'].content_hi;
      Money_cover = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT4'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT4'].content_hi;
      In_transit = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT5'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT5'].content_hi;
      On_premises = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT6'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT6'].content_hi;
      safe_strong_room = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT7'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT7'].content_hi;
      Optional_cover = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT8'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT8'].content_hi;
      Broad_definition = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT9'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT9'].content_hi;
      Money_means_cash = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT10'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT10'].content_hi;
      SBI_General_Money_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT12'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT12'].content_hi;
      exclusion_under_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT14'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT14'].content_hi;
      Company_liable = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT15'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT15'].content_hi;
      Due_to_robbery = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT16'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT16'].content_hi;
      Arising_shortages = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT17'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT17'].content_hi;
      Geographical_Area = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT18'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT18'].content_hi;
      Resulting_confiscation = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT19'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT19'].content_hi;
      Damage_cost = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT24'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT24'].content_hi;
      Heading_Mobile_Version = sbiHomeData && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'] && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'].content_hi;
      Exclusion_Text = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT26'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT26'].content_hi;

    }


    return (
      <div>
        <BaseComponent>
          {/* <Helmet> */}
          <HelmetData pageComponentType="MoneyInsurance" />
          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>{Money_Insurance}</h1>
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
                    <h1>{Money_Insurance}</h1>
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
                      <h5 className="htitle">{key_feature}</h5>
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={360}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <ul>
                          <li>
                            {Variable_sum}
                          </li>
                          <li>{Money_cover}</li>
                          <li>{In_transit}</li>
                          <li>{On_premises}</li>
                          <li>{safe_strong_room}</li>
                          <li>{Optional_cover}</li>
                          <li>{Broad_definition}</li>
                          <li>
                            {Money_means_cash} </li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_2">
                      <h5 className="htitle">{Coverage}</h5>
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={360}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <ul>
                          <p>
                            {SBI_General_Money_Policy}                           </p>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_3">
                      <h5 className="htitle">{Exclusion}</h5>
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={360}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <ul>
                          <li>
                            {exclusion_under_Policy}
                          </li>
                          <li>
                            {Company_liable}                           </li>
                          <li>
                            {Due_to_robbery}
                          </li>
                          <li>
                            {Arising_shortages}
                          </li>
                          <li>
                            {Geographical_Area}                        </li>
                          <li>
                            {Resulting_confiscation}
                          </li>
                          {ReactHtmlParser(Exclusion_Text)}
                          <li>
                            {Damage_cost}
                          </li>
                        </ul>
                      </Scrollbars>
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

        </BaseComponent>
      </div>
    );
  }
}

export default MoneyInsurance;
