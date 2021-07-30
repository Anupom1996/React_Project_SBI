import React, { Component } from "react";
import { Nav, Row, Container, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import { Scrollbars } from 'react-custom-scrollbars';
import { Sticky } from 'react-sticky';
import * as AppConstant from "../AppConstant";
import BaseComponent from "../BaseComponent";
import CallBackFormRetail from "./CallBackFormRetail";
import BranchLocator from "./BranchLocator";
import Garage from "../../Components/NonTransactional/Contact/Garage";
import FAQ from "./FAQ";
import ProductRelatedResources from "./ProductRelatedResources";
import HelmetData from "../Common/HelmetData";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";
import RelatedProducts from "./RelatedProducts";

class MotorPrivateCar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset
    };
  }

  openInNewTab = (slug) => {
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


    const currentScrollPos = window.pageYOffset;


    //console.log(currentScrollPos+"   "+visible);

    this.setState({
      prevScrollpos: currentScrollPos,

    });




  };


  render() {
    return (
      <div>
        <BaseComponent>

          {/* <Helmet> */}
          <HelmetData pageComponentType="MotorPrivateCar" />
          {isMobile ? (
            <section className="topform product-header motor-product-header">
              <div className="insuTab">
                <h1>Private Car Insurance</h1>
                <div className="healgth-productBtnMain">
                  <div className="healgth-productBtn">
                    <Link to={'#'} onClick={(e) => this.openInNewTab('/PMCAR/GetQuote')} className="d-flex color-01">
                      <figure>
                        <img src={require("../../assets/images/buy-policy-icon.svg")} alt="" />
                      </figure>
                      <p>Get Quote</p>
                    </Link>
                  </div>
                  <div className="healgth-productBtn">
                    <Link to={'#'} onClick={(e) => this.openInNewTab('/motorrenewal/display_product?product=M4W')} className="d-flex color-02">
                      <figure>
                        <img src={require("../../assets/images/renew-policy-icon.svg")} alt="" />
                      </figure>
                      <p>Renew Policy</p>
                    </Link>
                  </div>
                  <div className="healgth-productBtn">
                    <Link to={{ pathname: "/claim/claims-intimation", state: { product_type: "Motor Private Car Insurance" } }} className="d-flex color-03">
                      <figure>
                        <img src={require("../../assets/images/claim-policy-icon.svg")} alt="" />
                      </figure>
                      <p>Intimate Claim</p>
                    </Link>
                  </div>
                  <div className="healgth-productBtn">
                    <Link to={'#'} onClick={(e) => this.openInNewTab('/policyprint/motor')} className="d-flex  color-04">
                      <figure>
                        <img src={require("../../assets/images/policy-download-icon.svg")} alt="" />
                      </figure>
                      <p>Policy Download</p>
                    </Link>
                  </div>
                </div>
                <div className="healgth-list">
                  <ul>
                    <li>Wide Network of 10,000 plus Garages</li>
                    <li>Save Big with our Award winning Car Insurance 24*7 Roadside assurance across India</li>
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
                      <img src={require("../../assets/images/motor-banner.svg")} alt="" />
                    </figure>
                  </div>
                  <div className="col-8 d-flex align-items-center">
                    <div className="flex-column">
                      <h1>Private Car Insurance</h1>
                      {/* <div className="healgth-list">
                    <ul>
                      <li>Wide Network of 10,000 plus Garages</li>
                      <li>Save Big with our Award winning Car Insurance 24*7 Roadside assurance across India</li>
                    </ul>
                  </div> */}
                      <div className="healgth-productBtnMain">
                        <div className="healgth-productBtn pl-0">
                          <Link to={'#'} onClick={(e) => this.openInNewTab('/PMCAR/GetQuote')} className="d-flex color-purple">
                            <figure>
                              <img src={require("../../assets/images/buy-policy-icon.svg")} alt="" />
                            </figure>
                            <p>Get Quote</p>
                          </Link>
                        </div>
                        <div className="healgth-productBtn pl-0">
                          <Link to={'#'} onClick={(e) => this.openInNewTab('/motorrenewal/display_product?product=M4W')} className="d-flex color-purple">
                            <figure>
                              <img src={require("../../assets/images/renew-policy-icon.svg")} alt="" />
                            </figure>
                            <p>Renew Policy</p>
                          </Link>
                        </div>
                        <div className="healgth-productBtn pl-0">
                          <Link to={{ pathname: "/claim/claims-intimation", state: { product_type: "Motor Private Car Insurance" } }} className="d-flex color-purple">
                            <figure>
                              <img src={require("../../assets/images/claim-policy-icon.svg")} alt="" />
                            </figure>
                            <p>Intimate Claim</p>
                          </Link>
                        </div>
                        <div className="healgth-productBtn pl-0">
                          <Link to={'#'} onClick={(e) => this.openInNewTab('/policyprint/motor')} className="d-flex color-purple">
                            <figure>
                              <img src={require("../../assets/images/policy-download-icon.svg")} alt="" />
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
                      src={require("../../assets/images/motor-right-side.svg")}
                      alt=""
                    />
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
                    <div className="innerHead">Private Car Insurance</div>
                    <Link to={"#"} onClick={e => this.openInNewTab("/PMCAR/GetQuote")}>Buy Now</Link>

                  </div>
                </div>
              </div>}
            </Sticky>
          </div>

          {/* We Protect you Main */}
          <section className="protectWrapper motor-protectWrapper">
            <Container>
              <Row className="rotectRow">
                <WeProtectYouResources productType={this.props.location.pathname.split('/')[1]} />
                <Col xs="12" lg="4" className="lookingFor">
                  {/***** Call Back Form Component ****/}
                  <CallBackFormRetail policyName={"Motor Private Car Insurance"} />
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
                          <figure> <img src={require("../../assets/images/bonus-motor-icon.svg")} alt="" /></figure>
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
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={360} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        <h5 className="htitle">Key Features</h5>
                        <ul>
                          <li>Compulsory Third Party Liability with personal accident</li>
                          <li>Multiple covers with additional premiums:
                            <ul>
                              <li>NCB</li>
                              <li>Key Replacement</li>
                              <li>Bi-fuel Kit</li>
                              <li>Loss of Belongings</li>
                            </ul>
                          </li>
                          <li>Legal liability for paid driver and employees</li>
                          <li>Nil Depreciation</li>
                          <li>Return to Invoice</li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_2">

                      <h5 className="htitle">Coverage</h5>
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={360} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        <p>We offer <strong><i>motor insurance</i></strong> cover for private cars in the following cases:</p>
                        <ul>

                          <li>Compulsory Third Party Liability in case of injury/death of the person, or any damage caused to the property of the third party</li>
                          <li>
                            Loss or damage to your car due to:
                            <ul>
                              <li>Fire</li>
                              <li>Self-ignition</li>
                              <li>Accidental damage</li>
                              <li>Explosion</li>
                            </ul>
                          </li>
                          <li>Your car is covered against natural disasters like lightning, earthquake, hurricanes, cyclones, landslides, etc.</li>
                          <p>Personal accident cover up to Rs 15 lakh for individual owners while driving. Passengers can also get coverage up to Rs 2 lakh per person.</p>
                          <p>Coverage for CNG/LPG bi-fuel kit.</p>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_3">

                      <h5 className="htitle">Major Exclusion</h5>
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={360} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        <ul>
                          <li>We do not offer coverage for damage, theft or loss due to incidents related to the war, invasion, foreign enemy acts, mutiny, rebellion, etc. Any claims made must be proved to be an act not related to any of these conditions.</li>
                          <li>Driving without a valid licence.</li>
                          <li>Driving under the influence of drugs and alcohol</li>
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
          <section className="weAreWrapper weAreMotoWrapper">
            <Container>
              <div className="conatctpage">
                <h2 className="titleclose pb-3">We are closer than you think, locate us:</h2>
                <div className="weAreMain">

                  <Tab.Container defaultActiveKey="tabmain_1">
                    <Nav variant="pills" >
                      <Nav.Item>
                        <Nav.Link eventKey="tabmain_1">
                          <div>
                            <figure><img src={require("../../assets/images/Maintenance.svg")} alt="" /></figure>
                            <span>Garage</span>
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="tabmain_2">
                          <div>
                            <figure><img src={require("../../assets/images/bank.svg")} alt="" /></figure>
                            <span>Branch</span>
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content>
                      <Tab.Pane eventKey="tabmain_1">
                        {/*** Garage Component***/}
                        <Garage />
                      </Tab.Pane>

                      <Tab.Pane eventKey="tabmain_2">
                        {/***** Branch Locator Component */}
                        <BranchLocator />

                      </Tab.Pane>

                    </Tab.Content>

                  </Tab.Container>

                </div>
              </div>
            </Container>
          </section>

          {/*Why SBI General Insurance? */}
          <WhySBIInsurance productType={this.props.location.pathname.split('/')[1]} />

          {/*Related Products Main */}
          <RelatedProducts category="motor" productType={this.props.location.pathname.split('/')[1]} />

          {/* FAQ Main */}
          <FAQ productType={this.props.location.pathname.split('/')[1]} />

        </BaseComponent>
      </div>
    );
  }
}

export default MotorPrivateCar;