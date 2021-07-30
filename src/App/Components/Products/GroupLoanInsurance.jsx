import React, { Component } from "react";
import { Nav, Row, Container, Col, Table } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Tab from "react-bootstrap/Tab";
import { Scrollbars } from 'react-custom-scrollbars';
import BaseComponent from "../BaseComponent";
import CallBackForm from "./CallBackForm";
import BranchLocator from "./BranchLocator";
import FAQ from "./FAQ";
import ProductRelatedResources from "./ProductRelatedResources";
import HelmetData from "../Common/HelmetData";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";
import ReactHtmlParser from 'react-html-parser'
class GroupLoanInsurance extends Component {

  state = {
    faqcategory: "",
    subcategoryList: []
  }

  render() {
    let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let Heading, Key_Feature, Coverage, Feature_Description, General_Exclusion_Description, Coverage_Description1,
      Coverage_Description2, Heading_Mobile_Version,
      Coverage_Description, Footer, Specific_Exclusion, General_Exclusion, Specific_Exclusion_Description
      ;
    if (lang_name === 'en') {
      Heading_Mobile_Version = sbiHomeData && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'] && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'].content_en;
      Footer = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_FOOTER_TEXT'] && sbiHomeData['PRODUCTS_RETAIL_FOOTER_TEXT'].content_en;
      Heading = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_LOAN_TEXT1'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_LOAN_TEXT1'].content_en;
      Key_Feature = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KEY_FEATURE'] && sbiHomeData['PRODUCTS_RETAIL_KEY_FEATURE'].content_en;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'].content_en;
      Coverage_Description = sbiHomeData && sbiHomeData['PRODUCTS_GROUPLOAN_COVERAGE'] && sbiHomeData['PRODUCTS_GROUPLOAN_COVERAGE'].content_en;
      Coverage_Description2 = sbiHomeData && sbiHomeData['PRODUCTS_GROUPLOAN_COVERAGE2'] && sbiHomeData['PRODUCTS_GROUPLOAN_COVERAGE2'].content_en;
      Specific_Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_LOAN_TEXT58'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_LOAN_TEXT58'].content_en;
      General_Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_LOAN_TEXT52'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_LOAN_TEXT52'].content_en;
      Feature_Description = sbiHomeData && sbiHomeData['PRODUCTS_GROUPLOAN_FEATURE'] && sbiHomeData['PRODUCTS_GROUPLOAN_FEATURE'].content_en;
      Coverage_Description1 = sbiHomeData && sbiHomeData['PRODUCTS_GROUPLOAN_COVERAGE1'] && sbiHomeData['PRODUCTS_GROUPLOAN_COVERAGE1'].content_en;
      General_Exclusion_Description = sbiHomeData && sbiHomeData['PRODUCTS_GROUPLOAN_GENERAL_EXCLUSION'] && sbiHomeData['PRODUCTS_GROUPLOAN_GENERAL_EXCLUSION'].content_en;
      Specific_Exclusion_Description = sbiHomeData && sbiHomeData['PRODUCTS_GROUPLOAN_SPECIFIC_EXCLUSION'] && sbiHomeData['PRODUCTS_GROUPLOAN_SPECIFIC_EXCLUSION'].content_en;

    } else {
      Heading_Mobile_Version = sbiHomeData && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'] && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'].content_hi;
      Footer = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_FOOTER_TEXT'] && sbiHomeData['PRODUCTS_RETAIL_FOOTER_TEXT'].content_hi;
      Heading = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_LOAN_TEXT1'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_LOAN_TEXT1'].content_hi;
      Key_Feature = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KEY_FEATURE'] && sbiHomeData['PRODUCTS_RETAIL_KEY_FEATURE'].content_hi;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'].content_hi;
      Specific_Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_LOAN_TEXT58'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_LOAN_TEXT58'].content_hi;
      General_Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_GROUP_LOAN_TEXT52'] && sbiHomeData['PRODUCTS_CORPORATE_GROUP_LOAN_TEXT52'].content_hi;

      Feature_Description = sbiHomeData && sbiHomeData['PRODUCTS_GROUPLOAN_FEATURE'] && sbiHomeData['PRODUCTS_GROUPLOAN_FEATURE'].content_hi;
      Coverage_Description = sbiHomeData && sbiHomeData['PRODUCTS_GROUPLOAN_COVERAGE'] && sbiHomeData['PRODUCTS_GROUPLOAN_COVERAGE'].content_hi;
      Coverage_Description2 = sbiHomeData && sbiHomeData['PRODUCTS_GROUPLOAN_COVERAGE2'] && sbiHomeData['PRODUCTS_GROUPLOAN_COVERAGE2'].content_hi;
      Coverage_Description1 = sbiHomeData && sbiHomeData['PRODUCTS_GROUPLOAN_COVERAGE1'] && sbiHomeData['PRODUCTS_GROUPLOAN_COVERAGE1'].content_hi;
      General_Exclusion_Description = sbiHomeData && sbiHomeData['PRODUCTS_GROUPLOAN_GENERAL_EXCLUSION'] && sbiHomeData['PRODUCTS_GROUPLOAN_GENERAL_EXCLUSION'].content_hi;

      Specific_Exclusion_Description = sbiHomeData && sbiHomeData['PRODUCTS_GROUPLOAN_SPECIFIC_EXCLUSION'] && sbiHomeData['PRODUCTS_GROUPLOAN_SPECIFIC_EXCLUSION'].content_hi;



    }
    return (
      <BaseComponent>
        {/* <Helmet> */}
        <HelmetData pageComponentType="GroupLoanInsurance" />
        {isMobile ? (
          <section className="topform product-header">
            <div className="insuTab">
              <h1>{Heading}</h1>
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
                    alt="Group Health Insurance Policy"
                  />
                </figure>
              </div>
              <div className="col-8 d-flex align-items-center">
                <div className="flex-column">
                  <h1>{Heading}</h1>
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
                    alt="Group Health Insurance Policy"
                  />
                </div>
              </div>
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
                <CallBackForm policyName={"Loan Insurance"} />
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
                        {Key_Feature}
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
                        {General_Exclusion}
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tabmain_4">
                      <div>
                        <figure> <img src={require("../../assets/images/exclusions-specific-icon.svg")} alt="" /></figure>
                        {Specific_Exclusion}
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="tabmain_1">

                    <h5 className="htitle">{Key_Feature}</h5>
                    <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={510} hideTracksWhenNotNeeded className="bg-dark-scroll">
                      {ReactHtmlParser(Feature_Description)}
                    </Scrollbars>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tabmain_2">

                    <h5 className="htitle">{Coverage}</h5>
                    <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={510} hideTracksWhenNotNeeded className="bg-dark-scroll">
                      {ReactHtmlParser(Coverage_Description)}
                      <Table striped bordered responsive >
                        {ReactHtmlParser(Coverage_Description2)}
                      </Table>
                      {ReactHtmlParser(Coverage_Description1)}
                    </Scrollbars>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tabmain_3">
                    <h5 className="htitle">{General_Exclusion}:</h5>
                    <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={510} hideTracksWhenNotNeeded className="bg-dark-scroll">
                      {ReactHtmlParser(General_Exclusion_Description)}
                    </Scrollbars>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tabmain_4">
                    <h5 className="htitle">{Specific_Exclusion}:</h5>
                    <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={510} hideTracksWhenNotNeeded className="bg-dark-scroll">
                      {ReactHtmlParser(Specific_Exclusion_Description)}
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
            <h5 className="htitle text-center">{Footer}</h5>
            {/***** Branch Locator Component */}
            <BranchLocator />
          </Container>
        </section>

        {/*Why SBI General Insurance? */}
        <WhySBIInsurance productType={this.props.location.pathname.split('/')[1]} />

        {/* FAQ Main */}
        <FAQ productType={this.props.location.pathname.split('/')[1]} />
      </BaseComponent>
    );
  }
}

export default GroupLoanInsurance;