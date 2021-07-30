import React, { Component } from "react";
import { Nav, Row, Container, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Tab from "react-bootstrap/Tab";
import { Scrollbars } from "react-custom-scrollbars";
import { Link } from "react-router-dom";
import { Sticky } from 'react-sticky';
import * as AppConstant from "../AppConstant";
import BaseComponent from "../BaseComponent";
import CallBackFormRetail from "./CallBackFormRetail";
import BranchLocator from "./BranchLocator";
import FAQ from "./FAQ";
import ProductRelatedResources from "./ProductRelatedResources";
import HelmetData from "../Common/HelmetData";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";
import RelatedProducts from "./RelatedProducts";


class HealthInsurance extends Component {

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
    return (
      <div className="home-container">
        <BaseComponent>
          {/* <Helmet> */}
          <HelmetData pageComponentType="HealthInsurance" />
          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>Retail Health Insurance Policy</h1>
                <div className="healgth-productBtnMain">
                  <div className="healgth-productBtn">
                    <Link
                      to={"#"}
                      onClick={e => this.openInNewTab("/healthinsurance/display_page/type/retail")}
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
                    <Link to={'#'} onClick={e => this.openInNewTab("/healthrenewal/display_product?product=RH")} className="d-flex color-03">
                      <figure>
                        <img src={require("../../assets/images/renew-policy-icon.svg")} alt="" />
                      </figure>
                      <p>Renew Policy</p>
                    </Link>
                  </div>
                  <div className="healgth-productBtn">
                    <Link to={{ pathname: "/claim/claims-intimation", state: { product_type: "Health Insurance" } }} className="d-flex color-03">
                      <figure>
                        <img src={require("../../assets/images/claim-policy-icon.svg")} alt="" />
                      </figure>
                      <p>Intimate Claim</p>
                    </Link>
                  </div>
                  <div className="healgth-productBtn">
                    <Link to={'#'} onClick={e => this.openInNewTab("/policyprint/healthpolicyothers")} className="d-flex color-03">
                      <figure>
                        <img src={require("../../assets/images/policy-download-icon.svg")} alt="" />
                      </figure>
                      <p>Policy Download</p>
                    </Link>
                  </div>
                </div>
                <div className="healgth-list">
                  <ul>
                    <li>142 days care procedures</li>
                    <li>Individual and Family Floater options</li>
                    <li>Cashless Treatment at over 3000 network hospitals</li>
                  </ul>
                </div>
                {/* For Mobule */}
              </div>
            </section>
          ) : (
              <section className="innerpageBannerWrapper">
                <div className="container-with-no-padding container">
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
                          alt="HealthInsurance"
                        />
                      </figure>
                    </div>

                    <div className="col-8 d-flex align-items-center">
                      <div className="flex-column">
                        <h1>Retail Health Insurance Policy</h1>
                        {/* <div className="healgth-list">
                        <ul>
                          <li>142 days care procedures</li>
                          <li>Individual and Family Floater options</li>
                          <li>Cashless Treatment at over 3000 network hospitals</li>
                        </ul>
                      </div> */}
                        <div className="healgth-productBtnMain">
                          <div className="healgth-productBtn pl-0">
                            <Link to={"#"} onClick={e => this.openInNewTab("/healthinsurance/display_page/type/retail")} className="d-flex color-purple active">
                              <figure>
                                <img src={require("../../assets/images/buy-policy-icon.svg")} alt="" />
                              </figure>
                              <p>Get Quote</p>
                            </Link>
                          </div>
                          <div className="healgth-productBtn pl-0">
                            <Link to={'#'} onClick={e => this.openInNewTab("/healthrenewal/display_product?product=RH")} className="d-flex color-purple">
                              <figure>
                                <img src={require("../../assets/images/renew-policy-icon.svg")} alt="" />
                              </figure>
                              <p>Renew Policy</p>
                            </Link>
                          </div>
                          <div className="healgth-productBtn pl-0">
                            <Link to={{ pathname: "/claim/claims-intimation", state: { product_type: "Health Insurance" } }} className="d-flex color-purple">
                              <figure>
                                <img src={require("../../assets/images/claim-policy-icon.svg")} alt="" />
                              </figure>
                              <p>Intimate Claim</p>
                            </Link>
                          </div>
                          <div className="healgth-productBtn pl-0">
                            <Link to={'#'} onClick={e => this.openInNewTab("/policyprint/healthpolicyothers")} className="d-flex color-purple">
                              <figure>
                                <img src={require("../../assets/images/policy-download-icon.svg")} alt="" />
                              </figure>
                              <p>Policy Download</p>
                            </Link>
                          </div>
                        </div>
                        {/* For Desktop */}
                      </div>

                      <div className="innerHeadBotomIcon">
                        <img
                          src={require("../../assets/images/inner-banner-bottom-icon.svg")}
                          alt="HealthInsurance"
                        />
                      </div>



                    </div>
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
                    <div className="innerHead">Retail Health Insurance Policy</div>
                    <Link to={"#"} onClick={e => this.openInNewTab("/healthinsurance/display_page/type/retail")}>Buy Now</Link>

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
                  <CallBackFormRetail policyName={"Health Insurance"} />
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
                            {" "}
                            <img
                              src={require("../../assets/images/key-feature-icon.svg")}
                              alt=""
                            />
                          </figure>
                          Key Features
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_2">
                        <div>
                          <figure>
                            {" "}
                            <img
                              src={require("../../assets/images/coverage-icon.svg")}
                              alt=""
                            />
                          </figure>
                          Coverage
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
                          Major Exclusion
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="tabmain_4">
                        <div>
                          <figure>
                            {" "}
                            <img
                              src={require("../../assets/images/plan-option-icon.svg")}
                              alt=""
                            />
                          </figure>
                          Plan Option
                        </div>
                      </Nav.Link>
                    </Nav.Item> */}

                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="tabmain_1">
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={320}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <h5 className="htitle">Key Features</h5>
                        <ul>
                          <li>
                            Wide Coverage – Rs.50,000 to Rs.500,000
                          </li>
                          <li>
                            No medical check-up if you don’t have any medical history: Up to 45 year
                          </li>
                          <li>
                            Family Floater: One plan, full family
                          </li>
                          <li>
                            Flexible Plans: Metro Plan, Semi Metro Plan &amp; Rest of India
                          </li>
                          <li>IT Exemption: Under Sec 80D</li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_2">
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={320}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <h5 className="htitle">Coverage</h5>
                        <p>
                          Our health insurance policy covers:
                        </p>
                        <ul>
                          <li>
                            Your hospital room rent, boarding expenses and doctor fees
                          </li>
                          <li>
                            Operation Theatre and Intensive Care charges
                          </li>
                          <li>
                            Nursing expenses
                          </li>
                          <li>
                            Medicines that you consume during the hospital stay
                          </li>
                          <li>Pre and Post hospitalisation expenses up to 30 and 60 days respectively</li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_3">
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={320}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <h5 className="htitle">Major Exclusion</h5>
                        <p>
                          We will not pay expenses in the following cases:
                        </p>
                        <ul>
                          <li>
                            Pre existing diseases from inception of the policy up to 4 years of this Policy being in force continuously
                          </li>
                          <li>
                            Treatment of illnesses such as Ulcers, Tonsillectomy, Hernia, Cataract, Sinusitis, Gall Bladder Stones, Chronic Renal Failure during the first year of operation of the policy.
                          </li>
                          <li>
                            Treatment taken outside India
                          </li>
                          <li>
                            Outpatient treatment
                          </li>
                          <li>
                            Stay in a hospital without undertaking any active regular treatment by the medical practitioner
                          </li>
                          <li>
                            Experimental and unproven treatment.
                          </li>
                        </ul>
                        <p>
                          <strong>Important Note: The above list of exclusions is illustrative and not exhaustive. For a full list of the exclusions , please refer to policy wordings.</strong>
                        </p>
                      </Scrollbars>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </Container>
          </section>

          {/*Health Insurance Plan Main */}
          {/* <section className="insuranceWrapper">
            <Container>
              <h5 className="htitle text-center">Health Insurance Plan</h5>
              <div className="insuranceMainScroll">
                <Row className="insuranceMain">
                  <Col xs="4" lg="4">
                    <div className="insuranceSingTop plan-a">
                      <img src={require("../../assets/images/plan-a-top.svg")} alt="" />
                    </div>
                    <div className="insuranceSing">
                      <div className="insuranceHead planA">
                        <h6>Plan A</h6>
                        <p>Mumbai & Delhi</p>
                      </div>
                      <div className="insuranceBody">
                        <p><span>100%</span> of the admissible claim amount for all Locations subject to the Policy terms and conditions.</p>
                      </div>
                      <div className="insuranceFooter text-center">
                        <Link to={'#'}>Get Quote</Link>
                      </div>
                    </div>
                  </Col>
                  <Col xs="4" lg="4">
                    <div className="plan-b-t-p"></div>
                    <div className="insuranceSingTop plan-b">
                      <div className="helfcircle">
                        <img src={require("../../assets/images/group-b-cicle.svg")} alt="" />
                      </div>
                      <img src={require("../../assets/images/plan-b-top.svg")} alt="" className="img-md" />
                    </div>
                    <div className="insuranceSing">
                      <div className="insuranceHead planB">
                        <h6>Plan B</h6>
                        <p>Chennai, Kolkata, Bangalore, Ahmedabad, Hyderabad</p>
                      </div>
                      <div className="insuranceBody">
                        <p><span>100%</span> of the admissible claim amount for Locations B & C, and <span>80%</span> for Location A subject to the Policy terms and conditions.</p>
                      </div>
                      <div className="insuranceFooter text-center">
                        <Link to={'#'}>Get Quote</Link>
                      </div>
                    </div>
                  </Col>
                  <Col xs="4" lg="4">
                    <div className="insuranceSingTop plan-c">
                      <img src={require("../../assets/images/plan-c-top.svg")} alt="" />
                    </div>
                    <div className="insuranceSing">
                      <div className="insuranceHead planC">
                        <h6>Plan C</h6>
                        <p>Rest of India</p>
                      </div>
                      <div className="insuranceBody">
                        <p><span>100%</span> of the admissible claim amount for Locations C, <span>80%</span> for Location B and  <span>70%</span> for Location A subject to the Policy terms and conditions.</p>
                      </div>
                      <div className="insuranceFooter text-center">
                        <Link to={'#'}>Get Quote</Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </section> */}

          {/*Prospectus Main */}
          <ProductRelatedResources productType={this.props.location.pathname.split('/')[1]} />

          {/*We are closer than you think, locate us: Main */}
          <section className="weAreWrapper">
            <Container>
              <h5 className="htitle text-center">We are closer than you think, locate us:</h5>
              {/***** Branch Locator Component */}
              <BranchLocator />
            </Container>
          </section>

          {/*Why SBI General Insurance? */}
          <WhySBIInsurance productType={this.props.location.pathname.split('/')[1]} />

          {/*Related Products Main */}
          <RelatedProducts category="health" productType={this.props.location.pathname.split('/')[1]} />

          {/* FAQ Main */}
          <FAQ productType={this.props.location.pathname.split('/')[1]} />
        </BaseComponent>
      </div >
    );
  }
}

export default HealthInsurance;