import React, { Component } from "react";
import { Nav, Row, Container, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Tab from "react-bootstrap/Tab";
import { Scrollbars } from "react-custom-scrollbars";
import BaseComponent from "../BaseComponent";
import CallBackForm from "./CallBackForm";
import BranchLocator from "./BranchLocator";
import ProductRelatedResources from "./ProductRelatedResources";
import FAQ from "./FAQ";
import HelmetData from "../Common/HelmetData";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";

import ReactHtmlParser from 'react-html-parser'
class SMEPackage extends Component {

  render() {

    let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let Heading, Key_Feature, Coverage, Exclusion, Feature_Description,
      Coverage_Description, Exclusion_Description, Footer, Heading_Mobile
      ;
    if (lang_name === 'en') {

      Footer = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_FOOTER_TEXT'] && sbiHomeData['PRODUCTS_RETAIL_FOOTER_TEXT'].content_en;
      Heading = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_SME'] && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_SME'].content_en;
      Key_Feature = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KEY_FEATURE'] && sbiHomeData['PRODUCTS_RETAIL_KEY_FEATURE'].content_en;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'].content_en;
      Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_EXCLUSION'] && sbiHomeData['PRODUCTS_RETAIL_EXCLUSION'].content_en;
      Heading_Mobile = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_BOARD_HEADING_MOBILE'] && sbiHomeData['PRODUCTS_LIABILITY_BOARD_HEADING_MOBILE'].content_en;
      Feature_Description = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_SME_PACKAGE_FEATURE'] && sbiHomeData['PRODUCTS_CORPORATE_SME_PACKAGE_FEATURE'].content_en;
      Coverage_Description = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_SME_PACKAGE_COVERAGE'] && sbiHomeData['PRODUCTS_CORPORATE_SME_PACKAGE_COVERAGE'].content_en;
      Exclusion_Description = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_SME_PACKAGE_EXCLUSION'] && sbiHomeData['PRODUCTS_CORPORATE_SME_PACKAGE_EXCLUSION'].content_en;



    } else {
      Footer = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_FOOTER_TEXT'] && sbiHomeData['PRODUCTS_RETAIL_FOOTER_TEXT'].content_hi;
      Heading = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_SME'] && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_SME'].content_hi;
      Key_Feature = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_KEY_FEATURE'] && sbiHomeData['PRODUCTS_RETAIL_KEY_FEATURE'].content_hi;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'].content_hi;
      Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_EXCLUSION'] && sbiHomeData['PRODUCTS_RETAIL_EXCLUSION'].content_hi;

      Feature_Description = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_SME_PACKAGE_FEATURE'] && sbiHomeData['PRODUCTS_CORPORATE_SME_PACKAGE_FEATURE'].content_hi;
      Coverage_Description = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_SME_PACKAGE_COVERAGE'] && sbiHomeData['PRODUCTS_CORPORATE_SME_PACKAGE_COVERAGE'].content_hi;

      Exclusion_Description = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_SME_PACKAGE_EXCLUSION'] && sbiHomeData['PRODUCTS_CORPORATE_SME_PACKAGE_EXCLUSION'].content_hi;
      Heading_Mobile = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_BOARD_HEADING_MOBILE'] && sbiHomeData['PRODUCTS_LIABILITY_BOARD_HEADING_MOBILE'].content_hi;


    }
    return (
      <div>
        <BaseComponent>
          {/* <Helmet> */}
          <HelmetData pageComponentType="SMEPackage" />
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
                            <img src={require("../../assets/images/key-feature-icon.svg")} alt="" />
                          </figure>
                          {Key_Feature}
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
                        autoHeightMax={375}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <h5 className="htitle">{Key_Feature}</h5>
                        {ReactHtmlParser(Feature_Description)}
                        {/* <ul>
                          <li>This policy covers the property If total assets value at one location does not exceed 5 cr at policy commencement date  </li>
                          <li>Package policy covering Fire and allied perils and Burglary</li>
                          <li>Named perils policy</li>
                          <li>Inbuilt cover of earthquake, act of terrorism, removal of debris, professional fees etc.under Section I </li>
                          <li>Waiver of underinsurance upto 15% under Section I</li>
                        </ul> */}

                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_2">
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={375}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <h5 className="htitle">{Coverage}</h5>
                        {ReactHtmlParser(Coverage_Description)}
                        {/* <p><strong>Section I : Standard Fire and Special Perils </strong></p>
                        <p>This policy provides coverfor the building structures, plant & machinery, stock and other assets relating to your business against following perils:</p>
                        <ol>
                          <li>
                            Fire, including due to its own fermentation, or natural heating or spontaneous combustion .
                          </li>
                          <li>
                            Explosion or implosion
                          </li>
                          <li>
                            Lightning
                          </li>
                          <li>
                            Earthquake, volcanic eruption, or other convulsions of nature
                          </li>
                          <li>
                            Storm, cyclone, typhoon, tempest, hurricane, tornado, tsunami, flood and inundation
                          </li>
                          <li>
                            Subsidence of the land on which your premises stand, landslide, rockslide
                          </li>
                          <li>
                            Bush fire, forest fire, jungle fire
                          </li>
                          <li>
                            Impact damage of any kind, i.e. damage caused by impact of, or collision caused by, any external physical object (e.g. vehicle, falling trees, aircraft, wall etc.)
                          </li>
                          <li>	Missile testing operations  </li>
                          <li> Riot, strikes, malicious damages  </li>
                          <li> Acts of terrorism   </li>
                          <li> Bursting or overflowing of water tanks, apparatus and pipes   </li>
                          <li> Leakage from automatic sprinkler installations   </li>
                          <li> Theft within 7 days from the occurrence of, and proximately caused by, any of the above insured events  </li>
                        </ol>
                        <p><strong>Section II: Burglary Insurance</strong></p>
                        <p>loss or damage to the property by Burglary or Housebreaking or Hold-up.</p> */}


                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_3">
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={375}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <h5 className="htitle">{Exclusion}</h5>

                        {ReactHtmlParser(Exclusion_Description)}
                        {/* <ul>
                          <li>Deliberate, wilful or intentional act </li>
                          <li>War, invasion, war-like operations</li>
                          <li>Ionising radiation</li>
                          <li>Pollution or contamination</li>
                          <li>Consequential or indirect loss or damage </li>
                          <li>Costs, fees or expenses for preparing any claim</li>
                          <li>Insured premised or building remains unoccupied for more than 30 days </li>
                        </ul> */}


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

          {/*** FAQ Component ***/}
          <FAQ />
        </BaseComponent>
      </div>
    );
  }
}

export default SMEPackage;
