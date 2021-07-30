import React, { Component } from "react";
import { Nav, Row, Container, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import { Scrollbars } from "react-custom-scrollbars";
import * as AppConstant from "../AppConstant";
import BaseComponent from "../BaseComponent";
import CallBackFormRetail from "./CallBackFormRetail";
import BranchLocator from "./BranchLocator";
import ProductRelatedResources from "./ProductRelatedResources";
import FAQ from "./FAQ";
import HelmetData from "../Common/HelmetData";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";
import { Sticky } from 'react-sticky';

class TravelInsurance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }
  openInNewTab = slug => {
    //UTM Source Catch
    let sourceParam = AppConstant.getUTMSource();
    let utm_source = sourceParam["utm_source"];
    let utm_medium = sourceParam["utm_medium"];
    let utm_campaign = sourceParam["utm_campaign"];
    let utm_uniqueid = sourceParam["utm_uniqueid"];
    let url = AppConstant.TRANSACTION_API_BASE_URL;
    if (slug !== "#") {
      if (slug.indexOf('?') === -1) {
        url = url + slug + '?itm_source=' + utm_source + '&itm_medium=' + utm_medium + '&itm_campaign=' + utm_campaign+ '&itm_uniqueid='+utm_uniqueid;
      } else {
        url = url + slug + '&itm_source=' + utm_source + '&itm_medium=' + utm_medium + '&itm_campaign=' + utm_campaign+ '&itm_uniqueid='+utm_uniqueid;
      }
      var win = window.open(url, "_blank");
      win.focus();
    }
  };
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

    //console.log(currentScrollPos+"   "+visible);

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });



  };


  render() {
    console.log("Path" + this.props.location.pathname.split('/')[1]);
    return (
      <div>
        <BaseComponent>
          {/* <Helmet> */}
          <HelmetData pageComponentType="TravelInsurance" />
          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>Travel Insurance (Business and Holiday)</h1>
                <div className="healgth-productBtnMain">
                  <div className="healgth-productBtn">
                    <Link
                      to={"#"}
                      onClick={e => this.openInNewTab("/travel/display_page")}
                      className="d-flex color-01"
                    >
                      <figure>
                        <img
                          src={require("../../assets/images/buy-policy-icon.svg")}
                          alt=""
                        />
                      </figure>
                      <p>Get Quote</p>
                    </Link>
                  </div>
                  <div className="healgth-productBtn">
                    <Link
                      to={{ pathname: "/claim/claims-intimation", state: { product_type: "Travel Insurance (Business & Holiday)" } }}
                      className="d-flex color-03"
                    >
                      <figure>
                        <img
                          src={require("../../assets/images/claim-policy-icon.svg")}
                          alt=""
                        />
                      </figure>
                      <p>Intimate Claim</p>
                    </Link>
                  </div>
                  <div className="healgth-productBtn">
                    <Link
                      to={"#"}
                      onClick={e => this.openInNewTab("/policyprint/others")}
                      className="d-flex color-04"
                    >
                      <figure>
                        <img
                          src={require("../../assets/images/policy-download-icon.svg")}
                          alt=""
                        />
                      </figure>
                      <p>Policy Download</p>
                    </Link>
                  </div>
                </div>
                <div className="healgth-list">
                  <ul>
                    <li>Medical cover up to USD 0.5 million</li>
                    <li>No medical examination</li>
                    <li>Worldwide protection and round the clock assistance</li>
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
                      <img
                        src={require("../../assets/images/travel-banner.svg")}
                        alt="Travel Insurance"
                      />
                    </figure>
                  </div>
                  <div className="col-8 d-flex align-items-center">
                    <div className="flex-column">
                      <h1>Travel Insurance (Business and Holiday)</h1>
                      {/* <div className="healgth-list">
                    <ul>
                      <li>Medical cover up to USD 0.5 million</li>
                      <li>No medical examination</li>
                      <li>Worldwide protection and round the clock assistance</li>
                    </ul>
                  </div> */}
                      <div className="healgth-productBtnMain">
                        <div className="healgth-productBtn pl-0">
                          <Link
                            to={"#"}
                            onClick={e => this.openInNewTab("/travel/display_page")}
                            className="d-flex color-purple"
                          >
                            <figure>
                              <img
                                src={require("../../assets/images/buy-policy-icon.svg")}
                                alt=""
                              />
                            </figure>
                            <p>Get Quote</p>
                          </Link>
                        </div>
                        <div className="healgth-productBtn pl-0">
                          <Link
                            to={{ pathname: "/claim/claims-intimation", state: { product_type: "Travel Insurance (Business & Holiday)" } }}
                            className="d-flex color-purple"
                          >
                            <figure>
                              <img
                                src={require("../../assets/images/claim-policy-icon.svg")}
                                alt=""
                              />
                            </figure>
                            <p>Intimate Claim</p>
                          </Link>
                        </div>
                        <div className="healgth-productBtn pl-0">
                          <Link
                            to={"#"}
                            onClick={e => this.openInNewTab("/policyprint/others")}
                            className="d-flex color-purple"
                          >
                            <figure>
                              <img
                                src={require("../../assets/images/policy-download-icon.svg")}
                                alt=""
                              />
                            </figure>
                            <p>Policy Download</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* For Desktop */}
                  </div>
                  <div className="innerHeadBotomIcon">
                    <img
                      src={require("../../assets/images/travel-right-side.svg")}
                      alt=""
                    />
                  </div>
                </div>
              </section>
            )}
          {/*Static Button Section*/}
          <div className="stickyWrapper" style={{ display: this.state.prevScrollpos > 296 ? 'block' : 'none' }}>
            <Sticky topOffset={274} >
              {({ style }) => <div style={{ zIndex: 999, ...style }} id="stickyNav" >
                <div className="retailHealthButtonWRapper">
                  <div className="retailHealthStaticBtn">
                    <div className="innerHead">Travel Insurance Policy</div>
                    <Link to={"#"} onClick={e => this.openInNewTab("/travel/display_page")}>Buy Now</Link>

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
                  <CallBackFormRetail policyName={"Travel Insurance (Business & Holiday)"} />
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
                            <img src={require("../../assets/images/addons-travel-icon.svg")} alt="" />
                          </figure>
                          Key Features
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_2">
                        <div>
                          <figure>
                            <img src={require("../../assets/images/coverage-icon.svg")} alt="" />
                          </figure>
                          Coverage
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_3">
                        <div>
                          <figure>
                            <img src={require("../../assets/images/exclusions-iocn.svg")} alt="" />
                          </figure>
                          Major Exclusion
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="tabmain_1">
                      <h5 className="htitle">Key Features</h5>
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={340}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <ul>
                          <li>Cover upto $ 500,000</li>
                          <li>Comprehensive Coverage</li>
                          <li>Worldwide Protection</li>
                          <li>24/7 Assistance</li>
                          <li>Easy Claims Settlement</li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_2">
                      <h5 className="htitle">Coverage</h5>
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={340}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <p>
                          Our <strong>travel insurance</strong> policy covers:
                        </p>
                        <ul>
                          <li>Treatment while on holiday</li>
                          <li>Injury or illness sustained during travel</li>
                          <li>Travel support</li>
                          <li>Cash advance</li>
                          <li>Trip delays</li>
                        </ul>
                        <p>Period of insurance</p>
                        <ul>
                          <li>
                            Single Trip:- Policy is issued a minimum 1 day up,
                            and maximum of 180 days duration.
                          </li>
                          <li>
                            Multi-Trip:- Policy is issued only for one year, and
                            not shorter or longer than one year.
                          </li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_3">
                      <h5 className="htitle">Major Exclusion</h5>
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={340}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <ul>
                          <li>
                            Travel for the express purpose of taking medical
                            treatment
                          </li>
                          <li>
                            Injury or death attributable to suicide, alcoholism,
                            drug use etc.
                          </li>
                          <li>
                            If you are part of military, naval or airforce
                            operations
                          </li>
                        </ul>
                        <p>
                          <strong>
                            Important Note: The above list of exclusions is
                            illustrative and not exhaustive. For a full list of
                            the exclusions , please refer to policy wordings.
                          </strong>
                        </p>
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
          <section className="weAreWrapper ">
            <Container>
              <h5 className="htitle text-center">We are closer than you think, locate us:</h5>
              {/***** Branch Locator Component */}
              <BranchLocator />
            </Container>
          </section>

          {/*Why SBI General Insurance? */}
          <WhySBIInsurance productType={this.props.location.pathname.split('/')[1]} />

          {/* FAQ */}
          <FAQ productType={this.props.location.pathname.split('/')[1]} />
        </BaseComponent>
      </div>
    );
  }
}

export default TravelInsurance;
