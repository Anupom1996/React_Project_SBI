import React, { Component } from "react";
import { Nav, Row, Container, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import { Scrollbars } from 'react-custom-scrollbars';
import * as AppConstant from "../AppConstant";
import BaseComponent from "../BaseComponent";
import CallBackFormRetail from "./CallBackFormRetail";
import BranchLocator from "./BranchLocator";
import FAQ from "./FAQ";
import ProductRelatedResources from "./ProductRelatedResources";
import HelmetData from "../Common/HelmetData";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";
import { Sticky } from 'react-sticky';

class LongTermHomeInsurance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  openInNewTab = (slug) => {
    //UTM Source Catch
    let sourceParam = AppConstant.getUTMSource();
    let utm_source = sourceParam["utm_source"];
    let utm_medium = sourceParam["utm_medium"];
    let utm_campaign = sourceParam["utm_campaign"];
    let url = AppConstant.TRANSACTION_API_BASE_URL;
    if (slug !== "#") {
      if (slug.indexOf('?') === -1) {
        url = url + slug + '?itm_source=' + utm_source + '&itm_medium=' + utm_medium + '&itm_campaign=' + utm_campaign;
      } else {
        url = url + slug + '&itm_source=' + utm_source + '&itm_medium=' + utm_medium + '&itm_campaign=' + utm_campaign;
      }
      var win = window.open(url, '_blank');
      win.focus();
    }
  }
  
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }


  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }


  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    console.log(currentScrollPos + "   " + visible);

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });



  };

  render() {
    return (
      <div>
        <BaseComponent>

          {/* <Helmet> */}
          <HelmetData pageComponentType="LongTermHomeInsurance" />
          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>Long Term Home Insurance Policy</h1>
                <div className="healgth-productBtnMain">
                  <div className="healgth-productBtn">
                    <Link to={'#'} onClick={(e) => this.openInNewTab('/lth/lthHome')} className="d-flex color-01">
                      <figure>
                        <img src={require("../../assets/images/buy-policy-icon.svg")} alt="" />
                      </figure>
                      <p>Get Quote</p>
                    </Link>
                  </div>
                  <div className="healgth-productBtn">
                    <Link to={{ pathname: "/claim/claims-intimation", state: { product_type: "Long Term Home Insurance" } }} className="d-flex color-03">
                      <figure>
                        <img src={require("../../assets/images/claim-policy-icon.svg")} alt="" />
                      </figure>
                      <p>Intimate Claim</p>
                    </Link>
                  </div>
                  <div className="healgth-productBtn">
                    <Link to={'#'} onClick={(e) => this.openInNewTab('#')} className="d-flex color-04">
                      <figure>
                        <img src={require("../../assets/images/policy-download-icon.svg")} alt="" />
                      </figure>
                      <p>Policy Download</p>
                    </Link>
                  </div>
                </div>
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
                      <img src={require("../../assets/images/home_insurance.svg")} alt="LongTermHomeInsurance" />
                    </figure>
                  </div>

                  <div className="col-8 d-flex align-items-center">
                    <div className="flex-column">
                      <h1>Long Term Home Insurance Policy</h1>
                      {/* <div className="healgth-list">
                    <ul>
                      <li>Policy upto a period of 30 years</li>
                      <li>In-built coverage for earthquake</li>
                    </ul>
                  </div> */}
                      <div className="healgth-productBtnMain">
                        <div className="healgth-productBtn pl-0">
                          <Link to={'#'} onClick={(e) => this.openInNewTab('/lth/lthHome')} className="d-flex color-purple">
                            <figure>
                              <img src={require("../../assets/images/buy-policy-icon.svg")} alt="" />
                            </figure>
                            <p>Get Quote</p>
                          </Link>
                        </div>
                        <div className="healgth-productBtn pl-0">
                          <Link to={{ pathname: "/claim/claims-intimation", state: { product_type: "Long Term Home Insurance" } }} className="d-flex color-purple">
                            <figure>
                              <img src={require("../../assets/images/claim-policy-icon.svg")} alt="" />
                            </figure>
                            <p>Intimate Claim</p>
                          </Link>
                        </div>
                        <div className="healgth-productBtn pl-0">
                          <Link to={'#'} onClick={(e) => this.openInNewTab('#')} className="d-flex color-purple">
                            <figure>
                              <img src={require("../../assets/images/policy-download-icon.svg")} alt="" />
                            </figure>
                            <p>Policy Download</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* For Desktop */}
                    <div className="innerHeadBotomIcon">
                      <img
                        src={require("../../assets/images/home_policy_bottom_icon.svg")}
                        alt="HealthInsurance"
                      />
                    </div>
                  </div>
                </div>
              </section>
            )
          }
          {/*Static Button Section*/}
          <div className="stickyWrapper" style={{ display: this.state.prevScrollpos > 296 ? 'block' : 'none' }}>
            <Sticky topOffset={274} >
              {({ style }) => <div style={{ zIndex: 999, ...style }} id="stickyNav" >
                <div className="retailHealthButtonWRapper">
                  <div className="retailHealthStaticBtn">
                    <div className="innerHead">Long Term Home Insurance Policy</div>
                    <Link to={"#"} onClick={e => this.openInNewTab("/lth/lthHome")}>Buy Now</Link>

                  </div>
                </div>
              </div>}
            </Sticky>
          </div>

          {/* We Protect you Main */}
          <section className="protectWrapper motor-protectWrapper innerPageSection">
            <Container>
              <Row className="rotectRow">
                <WeProtectYouResources productType={this.props.location.pathname.split('/')[1]} />
                <Col xs="12" lg="4" className="lookingFor">
                  {/***** Call Back Form Component ****/}
                  <CallBackFormRetail />
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
                          Key Features
                            </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_2">
                        <div>
                          <figure> <img src={require("../../assets/images/coverage-icon.svg")} alt="" /></figure>
                          Coverage
                            </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_3">
                        <div>
                          <figure> <img src={require("../../assets/images/exclusions-iocn.svg")} alt="" /></figure>
                          Major Exclusion
                            </div>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="tabmain_1">
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={340} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        <h5 className="htitle">Key Features</h5>
                        <ul>
                          <li>Coverage for a wide range of perils</li>
                          <li>Tenure: Up to 30 years </li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_2">
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={340} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        <h5 className="htitle">Coverage</h5>
                        <p>Our <strong>long term home insurance</strong> plan covers:</p>
                        <p>Loss or damage to the home due to fire and other perils, such as:</p>
                        <ul>
                          <li>Fire</li>
                          <li>Lightning</li>
                          <li>Explosion / Implosion (excluding boilers, economisers, pressure vessels)</li>
                          <li>Aircraft crashes</li>
                          <li>Riot, strike and malicious damage</li>
                          <li>Storm, cyclone, typhoon, tempest, hurricane, tornado, flood and inundation</li>
                          <li>Impact damage</li>
                          <li>Subsidence and landslide</li>
                          <li>Bursting and overflowing water tanks or pipes</li>
                          <li>Missile testing operations</li>
                          <li>Leakage from automatic sprinklers</li>
                          <li>Bush fires</li>
                          <li>Earthquake (Fire and Shock)</li>
                          <li>Terrorism, if you pay a little extra.</li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_3">
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={340} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        <h5 className="htitle">Major Exclusion</h5>
                        <ul>
                          <li>Loss or damage to the home owing to gross or willful negligence</li>
                          <li>Destruction/damage by own fermentation, natural heating or spontaneous combustion</li>
                          <li>Forest fires</li>
                          <li>War and  nuclear perils</li>
                          <li>Theft during/after operation of the peril</li>
                          <li>Pollution and contamination</li>
                          <li>Volcanic eruption or other natural disasters</li>
                          <li>Burning of property by Public Authority</li>
                        </ul>
                        <p><strong>Important Note: The above list of exclusions is illustrative and not exhaustive. For a full list of the exclusions , please refer to policy wordings.</strong></p>

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
              <h5 className="htitle text-center">We are closer than you think, locate us:</h5>
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

export default LongTermHomeInsurance;