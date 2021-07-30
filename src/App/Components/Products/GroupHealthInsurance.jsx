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
import ProductRelatedResources from "./ProductRelatedResources";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";
import ReactHtmlParser from 'react-html-parser'
class GroupHealthInsurance extends Component {

  render() {
    let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let key_feature, Coverage, locate_us, Exclusion, Group_Health_Insurance, Sum_Insured,
      policy_covers, Room_Board, Medical_Practitioner, Domiciliary_Hospitalisation, We_pay_charges, Ambulance_charges, Infant_Covered, Preexisting_Disease,
      Waiver_period, Coverage_Ayurvedic, above_contact, Company_payment, condition_ailment, disease_ailment, Day_Care_Expenses,
      Nonallopathic_treatment, Congenital_diseases, more_details, Premium, rate_premium, Age_Sum, Minimum_Entry_Age, Anaesthesia_Blood,
      Minimum_Sum_Insured, Mobile_Heading, Maximum_Sum_Insured, Prehospitalisation_Expenses, Posthospitalisation_Expenses
      ;
    if (lang_name === 'en') {
      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_en;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'].content_en;
      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'] &&
        sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'].content_en;
      Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'].content_en;
      Sum_Insured = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT16'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT16'].content_en;
      Group_Health_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_INSURENCE_POLICY'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_INSURENCE_POLICY'].content_en;
      policy_covers = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_POLICY_BENEFITS'] && sbiHomeData['PRODUCTS_RETAIL_POLICY_BENEFITS'].content_en;
      Room_Board = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT1'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT1'].content_en;
      Medical_Practitioner = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT2'].content_en;
      Anaesthesia_Blood = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT3'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT3'].content_en;
      Prehospitalisation_Expenses = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT4'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT4'].content_en;
      Posthospitalisation_Expenses = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT5'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT5'].content_en;
      Day_Care_Expenses = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT7'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT7'].content_en;
      Mobile_Heading = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_MOBILE_HEADING'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_MOBILE_HEADING'].content_en;
      Domiciliary_Hospitalisation = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT8'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT8'].content_en;
      We_pay_charges = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT9'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT9'].content_en;
      Ambulance_charges = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT10'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT10'].content_en;
      Infant_Covered = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT11'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT11'].content_en;
      Preexisting_Disease = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT12'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT12'].content_en;
      Waiver_period = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT14'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT14'].content_en;
      Coverage_Ayurvedic = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT15'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT15'].content_en;
      above_contact = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT16'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT16'].content_en;
      Company_payment = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT17'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT17'].content_en;
      condition_ailment = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT18'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT18'].content_en;
      disease_ailment = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT19'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT19'].content_en;
      Nonallopathic_treatment = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT20'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT20'].content_en;
      Congenital_diseases = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT21'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT21'].content_en;
      more_details = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT22'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT22'].content_en;
      Premium = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT24'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT24'].content_en;
      rate_premium = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT25'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT25'].content_en;
      Age_Sum = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT26'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT26'].content_en;
      Minimum_Entry_Age = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT27'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT27'].content_en;
      Minimum_Sum_Insured = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT28'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT28'].content_en;
      Maximum_Sum_Insured = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT29'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT29'].content_en;

    }
    else {
      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_hi;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'].content_hi;
      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'] &&
        sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'].content_hi;
      Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'].content_hi;
      Sum_Insured = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT16'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT16'].content_hi;
      Group_Health_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_INSURENCE_POLICY'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_INSURENCE_POLICY'].content_hi;
      policy_covers = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_POLICY_BENEFITS'] && sbiHomeData['PRODUCTS_RETAIL_POLICY_BENEFITS'].content_hi;
      Room_Board = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT1'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT1'].content_hi;
      Medical_Practitioner = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT2'].content_hi;
      Anaesthesia_Blood = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT3'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT3'].content_hi;
      Prehospitalisation_Expenses = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT4'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT4'].content_hi;
      Posthospitalisation_Expenses = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT5'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT5'].content_hi;
      Day_Care_Expenses = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT7'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT7'].content_hi;
      Domiciliary_Hospitalisation = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT8'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT8'].content_hi;
      We_pay_charges = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT9'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT9'].content_hi;
      Ambulance_charges = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT10'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT10'].content_hi;
      Infant_Covered = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT11'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT11'].content_hi;
      Preexisting_Disease = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT12'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT12'].content_hi;
      Waiver_period = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT14'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT14'].content_hi;
      Coverage_Ayurvedic = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT15'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT15'].content_hi;
      above_contact = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT16'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT16'].content_hi;
      Company_payment = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT17'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT17'].content_hi;
      condition_ailment = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT18'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT18'].content_hi;
      disease_ailment = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT19'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT19'].content_hi;
      Nonallopathic_treatment = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT20'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT20'].content_hi;
      Congenital_diseases = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT21'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT21'].content_hi;
      more_details = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT22'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT22'].content_hi;

      Premium = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT24'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT24'].content_hi;
      rate_premium = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT25'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT25'].content_hi;
      Age_Sum = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT26'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT26'].content_hi;
      Minimum_Entry_Age = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT27'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT27'].content_hi;
      Minimum_Sum_Insured = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT28'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT28'].content_hi;
      Maximum_Sum_Insured = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT29'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_TEXT29'].content_hi;
      Mobile_Heading = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_MOBILE_HEADING'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_HEALTH_MOBILE_HEADING'].content_hi;



    }

    return (
      <div>
        <BaseComponent>
          {/* <Helmet> */}
          <HelmetData pageComponentType="GroupHealthInsurance" />

          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>{Group_Health_Insurance}</h1>
                <div className="healgth-list">
                  {ReactHtmlParser(Mobile_Heading)}
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
                      alt="Group Health Insurance Policy"
                    />
                  </figure>
                </div>
                <div className="col-8 d-flex align-items-center">
                  <div className="flex-column">
                    <h1>{Group_Health_Insurance}</h1>
                    {/* <div className="healgth-list">
                    <ul>
                      <li>142 days care procedures</li>
                      <li>Individual and Family Floater options</li>
                      <li>Cashless Treatment at over 3000 network hospitals</li>
                    </ul>
                  </div> */}
                    {/* For Desktop */}
                  </div>
                  <div className="innerHeadBotomIcon">
                    <img
                      src={require("../../assets/images/inner-banner-bottom-icon.svg")}
                      alt="Group Health Insurance Policy"
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
                          {key_feature}                       </div>
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
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_4">
                        <div>
                          <figure>
                            {" "}
                            <img
                              src={require("../../assets/images/sum-insured-icon.svg")}
                              alt=""
                            />
                          </figure>
                          {Sum_Insured}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="tabmain_1">
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={400} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        <h5 className="htitle">{key_feature}</h5>
                        <p>{policy_covers}</p>
                        <ul>
                          <li>
                            {Room_Board}
                          </li>
                          <li>{Medical_Practitioner}</li>
                          <li>
                            {Anaesthesia_Blood}
                          </li>
                          <li>
                            {Prehospitalisation_Expenses}
                          </li>
                          <li>
                            {Posthospitalisation_Expenses}
                          </li>
                          <li>
                            {Day_Care_Expenses}
                          </li>
                          <li>
                            {Domiciliary_Hospitalisation}
                          </li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_2">
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={400} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        <h5 className="htitle">{Coverage}</h5>
                        <p>
                          {We_pay_charges}
                        </p>
                        <ul>
                          <li>
                            {Ambulance_charges}
                          </li>
                          <li>
                            {Infant_Covered}
                          </li>
                          <li>{Preexisting_Disease}</li>
                          <li>
                            {Waiver_period}
                          </li>
                          <li>
                            {Coverage_Ayurvedic}
                          </li>
                          <li>
                            {above_contact}
                          </li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_3">
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={400} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        <h5 className="htitle">{Exclusion}</h5>
                        <p>
                          {Company_payment}
                        </p>
                        <ul>
                          <li>
                            {condition_ailment}
                          </li>
                          <li>
                            {disease_ailment}
                          </li>
                          <li>
                            {Nonallopathic_treatment}
                          </li>
                          <li>
                            {Congenital_diseases}
                          </li>
                          <li>
                            {more_details}
                          </li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_4">
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={400} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        <h5 className="htitle">{Sum_Insured}</h5>
                        <p>{Premium}</p>
                        <ul>
                          <li>
                            {rate_premium}
                          </li>
                        </ul>
                        <p>{Age_Sum}</p>
                        <ul>
                          <li>{Minimum_Entry_Age}</li>
                          <li>{Minimum_Sum_Insured}</li>
                          <li>{Maximum_Sum_Insured}</li>
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
          <section className="weAreWrapper">
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

export default GroupHealthInsurance;
