import React, { Component } from "react";
import { Nav, Row, Container, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Tab from "react-bootstrap/Tab";
import BaseComponent from "../BaseComponent";
import CallBackForm from "./CallBackForm";
import BranchLocator from "./BranchLocator";
import ProductRelatedResources from "./ProductRelatedResources";
import FAQ from "./FAQ";
import HelmetData from "../Common/HelmetData";
import { Scrollbars } from "react-custom-scrollbars";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";
import ReactHtmlParser from 'react-html-parser'
class MarineCargoInsurance extends Component {
  render() {
    let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let key_feature, Coverage, locate_us, Exclusion, Inland_ClauseB, Inland_ClauseC, Transit_Registered, like_familiarised, Loss_damage_expense, Ordinary_Losses,
      inherent_vice, defective_packing, Loss_delay, operators_vessel, Nuclear_Weapons, War_Risk_Exclusion, Heading_Mobile_Version,We_would,
    civil_commotions, Expense_arising, Un_Seaworthiness, Unfitness_vessel, Van_Safe, time_Loading, Marine_Cargo_Insurance, policy_wide_coverage, Policy_accidental_loss, Coverage_under, Transit_Sea, Coverage_provided, All_Risk_Institute, Basic_Cover, Fire_Lightning, Transit_Air, Transit_Rail, Inland_Transit;
    if (lang_name === 'en') {
      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_en;
     We_would= sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT16'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT16'].content_en;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'].content_en;
      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'] &&
        sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'].content_en;
        
      Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'].content_en;
      Marine_Cargo_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT1'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT1'].content_en;
      policy_wide_coverage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT2'].content_en;
      Policy_accidental_loss = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT3'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT3'].content_en;
      Coverage_under = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT4'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT4'].content_en;
      Transit_Sea = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT5'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT5'].content_en;
      Coverage_provided = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT6'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT6'].content_en;
      All_Risk_Institute = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT7'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT7'].content_en;
      Basic_Cover = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT8'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT8'].content_en;
      Fire_Lightning = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT9'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT9'].content_en;
      Transit_Air = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT10'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT10'].content_en;
      Transit_Rail = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT11'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT11'].content_en;
      Inland_Transit = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT12'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT12'].content_en;
      Loss_damage_expense = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT17'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT17'].content_en;
      Ordinary_Losses = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT18'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT18'].content_en;
      inherent_vice = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT19'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT19'].content_en;
      defective_packing = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT20'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT20'].content_en;
      Loss_delay = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT21'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT21'].content_en;
      operators_vessel = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT22'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT22'].content_en;
      Nuclear_Weapons = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT25'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT25'].content_en;
      War_Risk_Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT26'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT26'].content_en;
      civil_commotions = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT27'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT27'].content_en;
      Expense_arising = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT28'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT28'].content_en;
      Un_Seaworthiness = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT29'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT29'].content_en;
      Unfitness_vessel = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT30'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT30'].content_en;
      Van_Safe = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT31'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT31'].content_en;
      time_Loading = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT32'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT32'].content_en;
      Heading_Mobile_Version = sbiHomeData && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'] && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'].content_en;



    }
    else {
      We_would= sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT16'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT16'].content_hi;
      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_hi;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'].content_hi;
      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'] &&
        sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'].content_hi;
      Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'].content_hi;
      Marine_Cargo_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT1'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT1'].content_hi;
      policy_wide_coverage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT2'].content_hi;
      Policy_accidental_loss = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT3'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT3'].content_hi;
      Coverage_under = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT4'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT4'].content_hi;
      Transit_Sea = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT5'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT5'].content_hi;
      Coverage_provided = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT6'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT6'].content_hi;
      All_Risk_Institute = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT7'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT7'].content_hi;
      Basic_Cover = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT8'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT8'].content_hi;
      Fire_Lightning = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT9'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT9'].content_hi;
      Transit_Air = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT10'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT10'].content_hi;
      Transit_Rail = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT11'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT11'].content_hi;
      Inland_Transit = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT12'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT12'].content_hi;
      Loss_damage_expense = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT17'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT17'].content_hi;
      Ordinary_Losses = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT18'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT18'].content_hi;
      inherent_vice = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT19'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT19'].content_hi;
      defective_packing = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT20'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT20'].content_hi;
      Loss_delay = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT21'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT21'].content_hi;
      operators_vessel = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT22'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT22'].content_hi;
      Nuclear_Weapons = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT25'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT25'].content_hi;
      War_Risk_Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT26'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT26'].content_hi;
      civil_commotions = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT27'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT27'].content_hi;
      Expense_arising = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT28'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT28'].content_hi;
      Un_Seaworthiness = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT29'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT29'].content_hi;
      Unfitness_vessel = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT30'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT30'].content_hi;
      Van_Safe = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT31'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT31'].content_hi;
      time_Loading = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT32'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE_TEXT32'].content_hi;
      Heading_Mobile_Version = sbiHomeData && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'] && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'].content_hi;

    }
    
    return (
      <div>
        <BaseComponent>
          {/* <Helmet> */}
          <HelmetData pageComponentType="MarineCargoInsurance" />

          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>{Marine_Cargo_Insurance}</h1>
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
                    <h1>{Marine_Cargo_Insurance}</h1>
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
                          <p>
                            {policy_wide_coverage}
                          </p>
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
                          <li>
                            {Policy_accidental_loss}
                          </li>
                          <li>
                            {Coverage_under}
                          </li>
                          <li>
                            {Transit_Sea}                          </li>
                          <li>
                            {Coverage_provided}
                          </li>
                          <li>{All_Risk_Institute} </li>
                          <li>{Basic_Cover} </li>
                          <li>
                            {Fire_Lightning}
                          </li>
                          <li>
                            {Transit_Air}
                          </li>
                          <li>
                            {Transit_Rail}
                          </li>
                          <li>
                            {Inland_Transit}
                          </li>
                          <li>
                            {Inland_ClauseB}
                          </li>
                          <li>
                            {Inland_ClauseC}
                          </li>
                          <li>
                            {Transit_Registered}
                          </li>
                        </ul>
                      </Scrollbars>{" "}
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
                            {We_would}
                           
                          </li>
                        
                          <li>
                            {Loss_damage_expense}
                          </li>
                          <li>{Ordinary_Losses}</li>
                          <li>{inherent_vice}</li>
                          <li>
                            {defective_packing}
                          </li>
                          <li>
                            {Loss_delay}
                          </li>
                          <li>
                            {operators_vessel}
                          </li>
                          <li>{Nuclear_Weapons}</li>
                          <li>{War_Risk_Exclusion}</li>
                          <li>
                            {civil_commotions}
                          </li>
                          <li>{Expense_arising}</li>
                          <li>{Un_Seaworthiness}</li>
                          <li>
                            {Unfitness_vessel}
                          </li>
                          <li>{Van_Safe}</li>
                          <li>
                            {time_Loading}
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

          {/* FAQ Main */}
          <FAQ productType={this.props.location.pathname.split('/')[1]} />
        </BaseComponent>
      </div>
    );
  }
}

export default MarineCargoInsurance;
