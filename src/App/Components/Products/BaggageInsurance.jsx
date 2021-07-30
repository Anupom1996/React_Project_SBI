import React, { Component } from "react";
import { Nav, Row, Container, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Tab from "react-bootstrap/Tab";
import BaseComponent from "../BaseComponent";
import CallBackForm from "./CallBackForm";
import BranchLocator from "./BranchLocator";
import FAQ from "./FAQ";
import ProductRelatedResourses from "./ProductRelatedResources";
import { Scrollbars } from "react-custom-scrollbars";
import HelmetData from "../Common/HelmetData";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";
import * as AppConstant from "../AppConstant";

import ReactHtmlParser from 'react-html-parser'
class BaggageInsurance extends Component {

  gtmClickHandler = (click_text) => {
    //GTM Implementation
    let gaUserId = document.cookie.match(/_ga=(.+?);/)[1].split('.').slice(-2).join(".");
    const data = {
      'event': 'baggage_product_page_4_product_features_click',
      'product_name': 'Baggage Insurance',
      'pagetype': 'baggage_product_page',
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
    // let redirectUrl = AppConstant.TRANSACTION_API_BASE_URL;
    // let appUrl = AppConstant.APP_URL;
    let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let Heading, Key_Feature, Coverage, Exclusion, Feature_Description,
      Coverage_Description, Exclusion_Description, Footer, Heading_Mobile
      ;
    if (lang_name === 'en') {

      Footer = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_FOOTER_TEXT'] && sbiHomeData['PRODUCTS_RETAIL_FOOTER_TEXT'].content_en;
      Heading = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_BAGGAGE'] && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_BAGGAGE'].content_en;
      Key_Feature = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KEY_FEATURE'] && sbiHomeData['PRODUCTS_RETAIL_KEY_FEATURE'].content_en;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'].content_en;
      Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_EXCLUSION'] && sbiHomeData['PRODUCTS_RETAIL_EXCLUSION'].content_en;
      Heading_Mobile = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_BOARD_HEADING_MOBILE'] && sbiHomeData['PRODUCTS_LIABILITY_BOARD_HEADING_MOBILE'].content_en;
      Feature_Description = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BAGGAGE_FETAURE'] && sbiHomeData['PRODUCTS_CORPORATE_BAGGAGE_FETAURE'].content_en;
      Coverage_Description = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BAGGAGE_COVERAGE'] && sbiHomeData['PRODUCTS_CORPORATE_BAGGAGE_COVERAGE'].content_en;
      Exclusion_Description = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BAGGAGE_EXCLUSION'] && sbiHomeData['PRODUCTS_CORPORATE_BAGGAGE_EXCLUSION'].content_en;



    } else {
      Footer = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_FOOTER_TEXT'] && sbiHomeData['PRODUCTS_RETAIL_FOOTER_TEXT'].content_hi;
      Heading = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_BAGGAGE'] && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_BAGGAGE'].content_hi;
      Key_Feature = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KEY_FEATURE'] && sbiHomeData['PRODUCTS_RETAIL_KEY_FEATURE'].content_hi;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'].content_hi;
      Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_EXCLUSION'] && sbiHomeData['PRODUCTS_RETAIL_EXCLUSION'].content_hi;

      Feature_Description = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BAGGAGE_FETAURE'] && sbiHomeData['PRODUCTS_CORPORATE_BAGGAGE_FETAURE'].content_hi;
      Coverage_Description = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BAGGAGE_COVERAGE'] && sbiHomeData['PRODUCTS_CORPORATE_BAGGAGE_COVERAGE'].content_hi;

      Exclusion_Description = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_BAGGAGE_EXCLUSION'] && sbiHomeData['PRODUCTS_CORPORATE_BAGGAGE_EXCLUSION'].content_hi;
      Heading_Mobile = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_BOARD_HEADING_MOBILE'] && sbiHomeData['PRODUCTS_LIABILITY_BOARD_HEADING_MOBILE'].content_hi;


    }
    return (
      <div>
        <BaseComponent>
          {/* <Helmet> */}
          <HelmetData pageComponentType="BaggageInsurance" />
          {isMobile ? (
            <section className="topform product-header motor-product-header">
              <div className="insuTab">
                <h1>{Heading}</h1>
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
                    <h1>{Heading}</h1>
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
                          {Key_Feature}
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
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="tabmain_1">
                      <h5 className="htitle">{Key_Feature}</h5>
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={340}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        {ReactHtmlParser(Feature_Description)}


                      </Scrollbars>
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
                        {ReactHtmlParser(Coverage_Description)}

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
                        {ReactHtmlParser(Exclusion_Description)}

                      </Scrollbars>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </Container>
          </section>

          {/*Prospectus Main */}
          <ProductRelatedResourses productType={this.props.location.pathname.split('/')[1]}
          />

          {/*We are closer than you think, locate us: Main */}
          <section className="weAreWrapper weAreMotoWrapper">
            <Container>
              <h5 className="htitle text-center">{Footer}</h5>
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

export default BaggageInsurance;
