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
class ConsequentialLossFireInsurance extends Component {

  gtmClickHandler = (click_text) => {
    //GTM Implementation
    let gaUserId = document.cookie.match(/_ga=(.+?);/)[1].split('.').slice(-2).join(".");
    const data = {
      'event': 'consequential_loss_fire_product_page_4_product_features_click',
      'product_name': 'Consequential Loss (Fire) Insurance',
      'pagetype': 'consequential_loss_fire_product_page',
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
    let key_feature, Coverage, locate_us, Exclusion, Consequential_Loss, scope_purpose, make_loss, pay_charges, pay_expenditure, Further_payment, Supplier_extension,
      Customer_extension, Failure_Public_power, Spoilage_Risk_extension, SBI_General_Consequential, Arising_out_perils,
      War_Invasion_act, Mutiny_Civil_commotion, In_any_action, The_Sum_Insured, Damage_occur, Additional_Items, Auditors_fees,
      Wages, Insurance_layoff, Sum_Insured, Heading_Mobile_Version

      ;
    if (lang_name === 'en') {
      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_en;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'].content_en;
      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'] &&
        sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'].content_en;
      Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'].content_en;
      Heading_Mobile_Version = sbiHomeData && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'] && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'].content_en;
      Consequential_Loss = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT1'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT1'].content_en;
      scope_purpose = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT2'].content_en;
      make_loss = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT3'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT3'].content_en;
      pay_charges = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT4'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT4'].content_en;
      pay_expenditure = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT5'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT5'].content_en;
      Further_payment = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT6'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT6'].content_en;
      Supplier_extension = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT7'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT7'].content_en;
      Customer_extension = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT8'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT8'].content_en;
      Failure_Public_power = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT9'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT9'].content_en;
      Spoilage_Risk_extension = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT10'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT10'].content_en;
      SBI_General_Consequential = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT11'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT11'].content_en;
      Arising_out_perils = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT12'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT12'].content_en;
      War_Invasion_act = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT13'].content_en;
      Mutiny_Civil_commotion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT14'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT14'].content_en;
      In_any_action = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT15'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT15'].content_en;
      The_Sum_Insured = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT16'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT16'].content_en;
      Damage_occur = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT17'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT17'].content_en;
      Additional_Items = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT18'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT18'].content_en;

      Wages = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT19'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT19'].content_en;
      Insurance_layoff = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT20'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT20'].content_en;
      Auditors_fees = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT21'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT21'].content_en;
      Sum_Insured = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT16'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT16'].content_en;

    }
    else {
      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_hi;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'].content_hi;
      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'] &&
        sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'].content_hi;
      Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'].content_hi;
      Consequential_Loss = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT1'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT1'].content_hi;
      scope_purpose = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT2'].content_hi;
      make_loss = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT3'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT3'].content_hi;
      pay_charges = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT4'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT4'].content_hi;
      pay_expenditure = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT5'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT5'].content_hi;
      Further_payment = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT6'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT6'].content_hi;
      Supplier_extension = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT7'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT7'].content_hi;
      Customer_extension = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT8'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT8'].content_hi;
      Failure_Public_power = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT9'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT9'].content_hi;
      Spoilage_Risk_extension = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT10'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT10'].content_hi;
      SBI_General_Consequential = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT11'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT11'].content_hi;
      Arising_out_perils = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT12'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT12'].content_hi;
      War_Invasion_act = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT13'].content_hi;
      Mutiny_Civil_commotion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT14'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT14'].content_hi;
      In_any_action = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT15'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT15'].content_hi;
      The_Sum_Insured = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT16'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT16'].content_hi;
      Damage_occur = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT17'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT17'].content_hi;
      Additional_Items = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT18'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT18'].content_hi;
      Heading_Mobile_Version = sbiHomeData && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'] && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'].content_hi;

      Wages = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT19'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT19'].content_hi;
      Insurance_layoff = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT20'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT20'].content_hi;
      Auditors_fees = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT21'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE_CON_TEXT21'].content_hi;
      Sum_Insured = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT16'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT16'].content_hi;





    }

    return (
      <div>
        <BaseComponent>
          {/* <Helmet> */}
          <HelmetData pageComponentType="ConsequentialLossFireInsurance" />

          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>{Consequential_Loss}</h1>
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
                    <h1>{Consequential_Loss}</h1>
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
                    <Nav.Item onClick={e => this.gtmClickHandler('Exclusion')}>
                      <Nav.Link eventKey="tabmain_3">
                        <div>
                          <figure>
                            <img src={require("../../assets/images/exclusions-iocn.svg")} alt="" />
                          </figure>
                          {Exclusion}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={e => this.gtmClickHandler('Sum Insured')}>
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
                      <ul>
                        <li>
                          {scope_purpose}
                        </li>
                        <li>
                          {make_loss}                        </li>
                        <li>
                          {pay_charges}
                        </li>
                        <li>
                          {pay_expenditure}
                        </li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_2">
                      <h5 className="htitle">{Coverage}</h5>
                      <ul>
                        <li>
                          {Further_payment}
                        </li>
                        <li>{Supplier_extension}</li>
                        <li>{Customer_extension}</li>
                        <li>
                          {Failure_Public_power}
                        </li>
                        <li>{Spoilage_Risk_extension}</li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_3">
                      <h5 className="htitle">{Exclusion}</h5>
                      <ul>
                        <li>
                          {SBI_General_Consequential}
                        </li>
                        <li>
                          {Arising_out_perils}
                        </li>
                        <li>
                          {War_Invasion_act}
                        </li>
                        <li>
                          {Mutiny_Civil_commotion}
                        </li>
                        <li>
                          {In_any_action}
                        </li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_4">
                      <h5 className="htitle">{Sum_Insured}</h5>
                      <ul>
                        <li>
                          {The_Sum_Insured}
                        </li>
                        <li>
                          {Damage_occur}
                        </li>
                        <li>
                          {Additional_Items}
                        </li>
                        <li>{Wages}</li>
                        <li>
                          {Insurance_layoff}
                        </li>
                        <li>{Auditors_fees}</li>
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
              <h5 className="htitle text-center">
                {locate_us}
              </h5>
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

export default ConsequentialLossFireInsurance;
