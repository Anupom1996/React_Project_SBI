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
import ProductRelatedResourses from "./ProductRelatedResources";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";
import * as AppConstant from "../AppConstant";
import ReactHtmlParser from 'react-html-parser';

class BroadformLiability extends Component {

  gtmClickHandler = (click_text) => {
    //GTM Implementation
    let gaUserId = document.cookie.match(/_ga=(.+?);/)[1].split('.').slice(-2).join(".");
    const data = {
      'event': 'broadform_liability_product_page_4_product_features_click',
      'product_name': 'Broadform Liability',
      'pagetype': 'broadform_liability_product_page',
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
    let key_feature, Coverage, locate_us, Exclusion, Broad_Form, Liability_Key_Feature, LIABILITY_BOARD_COVERAGE,
      LIABILITY_BOARD_EXCLUSION, Heading_Mobile
      ;
    if (lang_name === 'en') {
      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_en;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'].content_en;
      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'] &&
        sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'].content_en;
      Heading_Mobile = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_BOARD_HEADING_MOBILE'] && sbiHomeData['PRODUCTS_LIABILITY_BOARD_HEADING_MOBILE'].content_en;
      Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'].content_en;
      Broad_Form = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_BOARD'] && sbiHomeData['PRODUCTS_LIABILITY_BOARD'].content_en;
      Liability_Key_Feature = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_BOARD_KEY_FEATURE'] && sbiHomeData['PRODUCTS_LIABILITY_BOARD_KEY_FEATURE'].content_en;
      LIABILITY_BOARD_COVERAGE = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_BOARD_COVERAGE'] && sbiHomeData['PRODUCTS_LIABILITY_BOARD_COVERAGE'].content_en;
      LIABILITY_BOARD_EXCLUSION = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_BOARD_EXCLUSION'] && sbiHomeData['PRODUCTS_LIABILITY_BOARD_EXCLUSION'].content_en;


    }
    else {
      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_hi;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'].content_hi;
      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'] &&
        sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'].content_hi;
      Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'].content_hi;
      Broad_Form = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_BOARD'] && sbiHomeData['PRODUCTS_LIABILITY_BOARD'].content_hi;
      Liability_Key_Feature = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_BOARD_KEY_FEATURE'] && sbiHomeData['PRODUCTS_LIABILITY_BOARD_KEY_FEATURE'].content_hi;
      LIABILITY_BOARD_COVERAGE = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_BOARD_COVERAGE'] && sbiHomeData['PRODUCTS_LIABILITY_BOARD_COVERAGE'].content_hi;
      LIABILITY_BOARD_EXCLUSION = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_BOARD_EXCLUSION'] && sbiHomeData['PRODUCTS_LIABILITY_BOARD_EXCLUSION'].content_hi;
      Heading_Mobile = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_BOARD_HEADING_MOBILE'] && sbiHomeData['PRODUCTS_LIABILITY_BOARD_HEADING_MOBILE'].content_hi;






    }

    return (
      <div>
        <BaseComponent>
          {/* <Helmet> */}
          <HelmetData pageComponentType="BroadformLiability" />
          {isMobile ? (
            <section className="topform product-header motor-product-header">
              <div className="insuTab">
                <h1>{Broad_Form}</h1>
                <div className="healgth-list">
                  {ReactHtmlParser(Heading_Mobile)}

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
                    <h1>{Broad_Form}</h1>
                    {/* <div className="healgth-list">
                    <ul>
                      <li>Wide Network of 10,000 plus Garages</li>
                      <li>
                        Save Big with our Award winning Car Insurance 24*7
                        Roadside assurance across India
                    </li>
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
                          {key_feature}                        </div>
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
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="tabmain_1">
                      <h5 className="htitle">{key_feature}</h5>
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={340}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        {ReactHtmlParser(Liability_Key_Feature)}                   </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_2">
                      <h5 className="htitle">{Coverage}</h5>
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={340}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        {ReactHtmlParser(LIABILITY_BOARD_COVERAGE)}
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_3">
                      <h5 className="htitle">{Exclusion}</h5>
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={340}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        {ReactHtmlParser(LIABILITY_BOARD_EXCLUSION)}
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
              <h5 className="htitle text-center">{locate_us}</h5>
              {/***** Branch Locator Component */}
              <BranchLocator />
            </Container>
          </section>

          {/*Why SBI General Insurance? */}
          <WhySBIInsurance productType={this.props.location.pathname.split('/')[1]} />

          {/*Health Insurance FAQ Main */}
          <FAQ productType={this.props.location.pathname.split('/')[1]} />
        </BaseComponent>
      </div>
    );
  }
}

export default BroadformLiability;
