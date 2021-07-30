import React, { Component } from "react";
import { Nav, Row, Container, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Tab from "react-bootstrap/Tab";
import { Scrollbars } from 'react-custom-scrollbars';
import BaseComponent from "../BaseComponent";
import CallBackForm from "./CallBackForm";
import BranchLocator from "./BranchLocator";
import FAQ from "./FAQ";
import ProductRelatedResourses from "./ProductRelatedResources";
import HelmetData from "../Common/HelmetData";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";
import * as AppConstant from "../AppConstant";

class GraminSamridhiBima extends Component {

  gtmClickHandler = (click_text) => {
    //GTM Implementation
    let gaUserId = document.cookie.match(/_ga=(.+?);/)[1].split('.').slice(-2).join(".");
    const data = {
      'event': 'gramin_samridhi_page_4_product_features_click',
      'product_name': 'Gramin Samriddhi Bima',
      'pagetype': 'gramin_samriddhi_bima_product_page',
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
    return (
      <div>

        <BaseComponent>
          {/* <Helmet> */}
          <HelmetData pageComponentType="GraminSamriddhiBima" />
          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>Gramin Samriddhi Bima</h1>
                <div className="healgth-list">
                  <ul>
                    <li>Policy upto a period of 30 years</li>
                    <li>In-built coverage for earthquake</li>
                  </ul>
                </div>
                {/* For Mobule */}
              </div>
            </section>
          ) : (
              <section className="container-with-no-padding container">
                <div className="innerpageBanner row">
                  <div className="col-4">
                    <figure className="justify-content-between align-items-center">
                      <img src={require("../../assets/images/banners/rural.svg")} alt="" />
                    </figure>
                  </div>
                  <div className="col-8 d-flex align-items-center">
                    <div className="flex-column">
                      <h1>Gramin Samriddhi Bima</h1>
                      {/* For Desktop */}
                    </div>
                    <div className="innerHeadBotomIcon">
                      <img
                        src={require("../../assets/images/banners/rural_bottom.svg")}
                        alt=""
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
                  <Nav className="tabmainProduct" variant="pills" >
                    <Nav.Item onClick={e => this.gtmClickHandler('Key Feature')}>
                      <Nav.Link eventKey="tabmain_1">
                        <div>
                          <figure>
                            <img src={require("../../assets/images/key-feature-icon.svg")} alt="" />
                          </figure>
                          Key Feature
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={e=>this.gtmClickHandler('Coverage')}>
                      <Nav.Link eventKey="tabmain_2">
                        <div>
                          <figure>
                            <img src={require("../../assets/images/coverage-icon.svg")} alt="" />
                          </figure>
                          Coverage
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={e=>this.gtmClickHandler('Exclusions')}>
                      <Nav.Link eventKey="tabmain_3">
                        <div>
                          <figure>
                            <img src={require("../../assets/images/exclusions-iocn.svg")} alt="" />
                          </figure>
                          Exclusions
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="tabmain_1">
                      <h5 className="htitle">Key Feature</h5>                      
                      <ul>
                        <li>A comprehensive package product that provides protection and peace of mind against a number of perils without the need to take several policies. </li>
                        <li>With Gramin Samriddhi Bima, you can insure the building, content and agricultural items, animal cart, pedal cycle and more.</li>
                        <li>Personal accident cover for insured and family members</li>
                        </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_2">
                      <h5 className="htitle">Coverage</h5>
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={260} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        <p><strong>Gramin Samriddhi Bima Covers:</strong></p>
                        <ul>
                          <li>Standard Fire and Special perils Insurance - a) building, b) contents and agricultural items</li>
                          <li>Burglary and House Breaking and Theft - contents and agricultural items</li>                        
                          <li>Animal Driven Cart - loss or damage to cart, of an animal and liability to third parties</li>
                          <li>Personal Accident - provides accidental death cover to insured and family</li>
                          <li>Television and Set Top Box - provided coverage against loss or damage to tv & set top box and legal liability to third parties</li>
                          <li>Agricultural Tractors/Power Tillers/Harvesters - provides own damage cover to vehicle, third party cover and personal accident cover to owner driver</li>
                          <li>Agricultural Pump set - covers loss or damage to agricultural pumpset</li>
                          <li>Pedal Cycle - loss or damage to pedal cycle and third party liability</li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_3">
                      <h5 className="htitle">Exclusions</h5>
                      <ul>
                        <li>Loss or damage caused by depreciation or wear and tear</li>
                        <li>Consequential loss of any kind of description</li>
                        <li>Consequences of war, invasion, act of foreign enemy, hostilities (whether war be declared or not)
                          civil war, rebellion, revolution, insurrection, military or usurped power or civil commotion or loot or pillage in connection therewith</li>
                        <li>Loss or damage directly or indirectly caused by or arising from or 
                          in consequence of or contributed to by nuclear weapons material</li>
                          <li>Ionizing radiations or contamination by radioactivity from any 
                            nuclear fuel or from any nuclear waste from the combustion of nuclear fuel</li>
                      </ul>
                    </Tab.Pane>
                  </Tab.Content>

                </Tab.Container>
              </div>
            </Container>
          </section>
          {/*Prospectus Main */}
          <ProductRelatedResourses productType={this.props.location.pathname.split('/')[1]} />

          {/*We are closer than you think, locate us: Main */}
          <section className="weAreWrapper weAreMomeWrapper">
            <Container>
              <h5 className="htitle text-center">We are closer than you think, locate us:</h5>
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

export default GraminSamridhiBima;