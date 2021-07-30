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
class IndustrialAllRisksInsurance extends Component {
  render() {
    let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let key_feature, Coverage, locate_us, Exclusion, Industrial_Risks,
      All_risks_cover, Twopart_policy, Basis_valuation, Sum_insured_limits, coverage_all, two_Sections_Policy,
      Bank_Clause, Architects_Surveyors, Property_Clause, Escalation_Clause, insure_additions, Temporary_removal,
      Company_loss_damage, ai_faulty, aii_interruption, unless_Damage, bi_collapse, bii_corrosion, loss_directly,
      Property_damaged, Property_undergoing, Vehicles_licensed, Heading_Mobile_Version, Exclusion_Text



      ;
    if (lang_name === 'en') {
      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_en;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'].content_en;
      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'] &&
        sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'].content_en;
      Heading_Mobile_Version = sbiHomeData && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'] && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'].content_en;
      Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'].content_en;
      Industrial_Risks = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT1'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT1'].content_en;
      All_risks_cover = sbiHomeData && sbiHomeData['C'] && sbiHomeData['C'].content_en;
      Exclusion_Text = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT25'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT25'].content_en;
      Twopart_policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT2'].content_en;
      Basis_valuation = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT3'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT3'].content_en;
      Sum_insured_limits = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT4'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT4'].content_en;
      coverage_all = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT5'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT5'].content_en;
      two_Sections_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT6'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT6'].content_en;
      Bank_Clause = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT7'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT7'].content_en;
      Architects_Surveyors = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT8'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT8'].content_en;
      Property_Clause = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT9'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT9'].content_en;
      Escalation_Clause = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT10'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT10'].content_en;
      insure_additions = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT11'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT11'].content_en;
      Temporary_removal = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT12'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT12'].content_en;
      Company_loss_damage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT13'].content_en;
      ai_faulty = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT14'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT14'].content_en;
      aii_interruption = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT15'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT15'].content_en;
      unless_Damage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT16'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT16'].content_en;
      bi_collapse = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT17'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT17'].content_en;
      bii_corrosion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT18'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT18'].content_en;
      loss_directly = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT19'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT19'].content_en;
      Property_damaged = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT20'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT20'].content_en;
      Property_undergoing = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT21'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT21'].content_en;
      Vehicles_licensed = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT22'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT22'].content_en;

    }
    else {
      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_hi;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'].content_hi;
      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'] &&
        sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'].content_hi;
      Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'].content_hi;
      Industrial_Risks = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT1'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT1'].content_hi;
      All_risks_cover = sbiHomeData && sbiHomeData['C'] && sbiHomeData['C'].content_hi;
      Twopart_policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT2'].content_hi;
      Basis_valuation = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT3'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT3'].content_hi;
      Sum_insured_limits = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT4'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT4'].content_hi;
      coverage_all = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT5'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT5'].content_hi;
      two_Sections_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT6'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT6'].content_hi;
      Bank_Clause = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT7'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT7'].content_hi;
      Architects_Surveyors = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT8'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT8'].content_hi;
      Property_Clause = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT9'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT9'].content_hi;
      Escalation_Clause = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT10'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT10'].content_hi;
      insure_additions = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT11'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT11'].content_hi;
      Temporary_removal = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT12'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT12'].content_hi;
      Company_loss_damage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT13'].content_hi;
      ai_faulty = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT14'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT14'].content_hi;
      aii_interruption = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT15'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT15'].content_hi;
      unless_Damage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT16'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT16'].content_hi;
      bi_collapse = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT17'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT17'].content_hi;
      bii_corrosion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT18'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT18'].content_hi;
      loss_directly = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT19'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT19'].content_hi;
      Property_damaged = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT20'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT20'].content_hi;
      Property_undergoing = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT21'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT21'].content_hi;
      Vehicles_licensed = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT22'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT22'].content_hi;
      Heading_Mobile_Version = sbiHomeData && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'] && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'].content_hi;
      Exclusion_Text = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT25'] && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_TEXT25'].content_hi;


    }

    return (
      <div>
        <BaseComponent>
          {/* <Helmet> */}
          <HelmetData pageComponentType="IndustrialAllRisksInsurance" />
          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>{Industrial_Risks} </h1>
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
                    <h1>{Industrial_Risks}</h1>
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
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={340}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <h5 className="htitle">{key_feature}</h5>
                        <ul>
                          <li>
                            {All_risks_cover}
                          </li>
                          <li>
                            {Twopart_policy}
                          </li>
                          <li>
                            {Basis_valuation}
                          </li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_2">
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={340}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <h5 className="htitle">{Coverage}</h5>
                        <ul>
                          <li>{Sum_insured_limits}</li>
                          <li>
                            {coverage_all}
                          </li>
                          <li>
                            {two_Sections_Policy}
                          </li>
                          <li>{Bank_Clause}</li>
                          <li>
                            {Architects_Surveyors}
                          </li>
                          <li>{Property_Clause}</li>
                          <li>{Escalation_Clause}</li>
                          <li>
                            {insure_additions}
                          </li>
                          <li>{Temporary_removal}</li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_3">
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={340}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <h5 className="htitle">{Exclusion}</h5>
                        <ul>
                          <li>
                            {Company_loss_damage}
                          </li>
                          <p>
                            {ai_faulty}
                          </p>
                          <p>
                            {aii_interruption}                     </p>
                          <li>
                            {unless_Damage}
                          </li>
                          <p>{bi_collapse}</p>
                          <p>
                            {bii_corrosion}
                          </p>
                          <li>
                            {loss_directly}
                          </li>
                          <p>
                            {Property_damaged}
                          </p>
                          <p>
                            {Property_undergoing}
                          </p>
                          <p>
                            {Vehicles_licensed}                        </p>
                          {ReactHtmlParser(Exclusion_Text)}

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

export default IndustrialAllRisksInsurance;
