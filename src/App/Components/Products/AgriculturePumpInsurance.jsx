import React, { Component } from "react";
import { Nav, Row, Container, Col } from "react-bootstrap";
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
import * as AppConstant from "../AppConstant";

class AgriculturePumpInsurance extends Component {

  gtmClickHandler = (click_text) => {
    //GTM Implementation
    let gaUserId = document.cookie.match(/_ga=(.+?);/)[1].split('.').slice(-2).join(".");
    const data = {
      'event': 'agriculture_pumpset_product_page_4_product_features_click',
      'product_name': 'Agriculture Pumpset Insurance',
      'pagetype': 'agriculture_pumpset_product_page',
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
          <HelmetData pageComponentType="AgriculturePumpInsurance" />
          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>Agricultural Pump Set</h1>
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
                {/* <div className="rotateit">
                  <div className="skewbg"></div>
                  <div className="skewbg-light"></div>
                  <div className="bgtextureProduct"></div>
                </div> */}
                 <div className="innerpageBanner row">
                  <div className="col-4">
                  <figure className="justify-content-between align-items-center">
                    <img src={require("../../assets/images/banners/rural.svg")} alt="" />
                  </figure>
                  </div>
                  <div className="col-8 d-flex align-items-center">
                  <div className="flex-column">
                  <h1>Agricultural Pump Set</h1>
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
                    <Nav.Item onClick={e=>this.gtmClickHandler('Key Feature')}>
                      <Nav.Link eventKey="tabmain_1">
                        <div>
                          <figure> <img src={require("../../assets/images/key-feature-icon.svg")} alt="" /></figure>
                          Key Feature
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={e=>this.gtmClickHandler('Coverage')}>
                      <Nav.Link eventKey="tabmain_2">
                        <div>
                          <figure> <img src={require("../../assets/images/coverage-icon.svg")} alt="" /></figure>
                          Coverage
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={e=>this.gtmClickHandler('Exclusion')}>
                      <Nav.Link eventKey="tabmain_3">
                        <div>
                          <figure> <img src={require("../../assets/images/exclusions-iocn.svg")} alt="" /></figure>
                          Exclusion
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={e=>this.gtmClickHandler('Sum Insured')}>
                      <Nav.Link eventKey="tabmain_4">
                        <div>
                          <figure> <img src={require("../../assets/images/sum-insured-icon.svg")} alt="" /></figure>
                          Sum Insured
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="tabmain_1">
                      <h5 className="htitle">Key Feature</h5>
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={470} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        <p><strong>Who can take this Policy</strong></p>
                        <ul>
                          <li>The Proposer may be any individual or Group of people who are either owner or have bonafide interest in the protection of the Agriculture Pumpset</li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_2">
                      <h5 className="htitle">Coverage</h5>
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={470} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        <ul>
                          <li>Basis of Indemnity under the policy will be on reinstatement value basis.</li>
                          <li>Agriculture Pumpset Insurance Policy indemnifies the Insured against the loss/ damage of Pumpset arising out of –
                          <ul>
                              <li>Fire and /or lightning</li>
                              <li>Mechanical/Electrical Breakdown.</li>
                              <li>Riot, Strike, Malicious damage.</li>
                              <li>Earthquake</li>
                              <li>Terrorism.</li>
                            </ul>
                          </li>
                          <li>Flood can be covered as an Add on cover under this Policy.</li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_3">
                      <h5 className="htitle">Exclusion</h5>
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={470} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        <p><strong>Policy Period</strong></p>
                        <ul>
                          <li>Minimum 1 year to maximum of 3 years.</li>
                        </ul>
                        <p><strong>Other salient points</strong></p>
                        <ul>
                          <li>The minimum premium under all circumstances would be Rs. 300/- per policy.</li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_4">
                      <h5 className="htitle">Sum Insured</h5>
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={470} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        <ul>
                          <li>Sum Insured under the policy will be on reinstatement value basis.</li>
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

export default AgriculturePumpInsurance;