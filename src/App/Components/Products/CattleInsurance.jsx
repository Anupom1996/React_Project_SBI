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

class CattleInsurance extends Component {

  gtmClickHandler = (click_text) => {
    //GTM Implementation
    let gaUserId = document.cookie.match(/_ga=(.+?);/)[1].split('.').slice(-2).join(".");
    const data = {
      'event': 'cattle_product_page_4_product_features_click',
      'product_name': 'Cattle Insurance Policy',
      'pagetype': 'cattle_product_page',
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
          <HelmetData pageComponentType="CattleInsurance" />
          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>Cattle Insurance</h1>
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
                      <h1>Cattle Insurance</h1>
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
                    <Nav.Item onClick={e=>this.gtmClickHandler('Sum Insured')}>
                      <Nav.Link eventKey="tabmain_3">
                        <div>
                          <figure>
                            <img src={require("../../assets/images/exclusions-iocn.svg")} alt="" />
                          </figure>
                          Sum Insured
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="tabmain_1">
                      <h5 className="htitle">Key Feature</h5>
                      <p><strong>Policy Period</strong></p>
                      <ul><li>Minimum 1 year to maximum of 3 years.</li></ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_2">
                      <h5 className="htitle">Coverage</h5>
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={260} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        <p><strong>Eligible Age Groups for Coverage</strong></p>
                        <ul>
                          <li>Following age groups of animals are eligible to be covered under a Cattle Insurance Policy –</li>
                        </ul>
                        <table>
                          <tbody>
                            <tr>
                              <td><strong>Type of Animal </strong></td>
                              <td><strong>Age of Animal </strong></td>
                            </tr>
                            <tr>
                              <td>Milch Cows</td>
                              <td>2 Years ( or age at first calving) to 10 Years</td>
                            </tr>
                            <tr>
                              <td>Milch Buffaloes</td>
                              <td>3 Years (or age at first calving) to 12 Years</td>
                            </tr>
                            <tr>
                              <td>Stud Bulls</td>
                              <td>3 Years to 8 years.</td>
                            </tr>
                            <tr>
                              <td>Bullocks &amp; Mal Buffaloes</td>
                              <td>3 Years to 12 Years</td>
                            </tr>
                            <tr>
                              <td>Female Calves /Heifers</td>
                              <td>Milch Cow’s offspring – From age of 4 months to 2 years or first calving age, whichever is lower.</td>
                            </tr>
                            <tr>
                              <td>Milch Buffalo’s offspring - Up to the age of 3 years or first calving age, whichever is lower.</td>
                            </tr>
                          </tbody>
                        </table>
                        <p><strong>What does the insurance Policy Cover </strong></p>
                        <p>Cattle Insurance Policy covers the sudden and unforeseen Death &amp; PTD due to -</p>
                        <ul>
                          <li>Fire, Lightning, Explosion/Implosion</li>
                          <li>Aircraft Damage, Missile testing operations.</li>
                          <li>Riot, Strike.</li>
                          <li>Storm, Typhoon, Hurricane, Tornado, Flood and Inundation.</li>
                          <li>Earthquake</li>
                          <li>Famine</li>
                          <li>Surgical Operations</li>
                          <li>Accident</li>
                          <li>Disease contracted and occurred during the Policy period.</li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_3">
                      <h5 className="htitle">Sum Insured</h5>
                      <p>An animal will be insured for its current market price. The market price of the animal to be insured will be assessed and agreed jointly by the beneficiary and authorized veterinary practitioner.</p>
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

export default CattleInsurance;