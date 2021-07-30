import React, { Component } from "react";
import { Nav, Container, Row, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import { Scrollbars } from 'react-custom-scrollbars';
import { Sticky } from 'react-sticky';
import * as AppConstant from "../AppConstant";
import BaseComponent from "../BaseComponent";
import BranchLocator from "./BranchLocator";
import Garage from "../../Components/NonTransactional/Contact/Garage";
import CallBackFormRetail from "./CallBackFormRetail";
import ProductRelatedResources from "./ProductRelatedResources";
import FAQ from "./FAQ";
import HelmetData from "../Common/HelmetData";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";
import RelatedProducts from "./RelatedProducts";

class MotorTwoWheeler extends Component {
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
      <div>
        <BaseComponent>

          {/* <Helmet> */}
          <HelmetData pageComponentType="MotorTwoWheeler" />
          {isMobile ? (
            <section className="topform product-header motor-product-header">
              <div className="insuTab">
                <h1>Two Wheeler Insurance</h1>
                <div className="healgth-productBtnMain">
                  <div className="healgth-productBtn">
                    <Link to={'#'} onClick={(e) => this.openInNewTab('/M2W/GetQuote')} className="d-flex color-01">
                      <figure>
                        <img src={require("../../assets/images/buy-policy-icon.svg")} alt="" />
                      </figure>
                      <p>Get Quote</p>
                    </Link>
                  </div>
                  <div className="healgth-productBtn">
                    <Link to={'#'} onClick={(e) => this.openInNewTab('/motorrenewal/display_product?product=M2W')} className="d-flex color-02">
                      <figure>
                        <img src={require("../../assets/images/renew-policy-icon.svg")} alt="" />
                      </figure>
                      <p>Renew Policy</p>
                    </Link>
                  </div>
                  <div className="healgth-productBtn">
                    <Link to={{ pathname: "/claim/claims-intimation", state: { product_type: "Long Term Two Wheeler Insurance Policy" } }} className="d-flex color-03">
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
                      <h1>Two Wheeler Insurance</h1>
                      {/* <div className="healgth-list">
                    <ul>
                      <li>Wide Network of 10,000 plus Garages</li>
                      <li>Save Big with our Award winning Car Insurance 24*7 Roadside assurance across India</li>
                    </ul>
                  </div> */}
                      <div className="healgth-productBtnMain">
                        <div className="healgth-productBtn pl-0">
                          <Link to={'#'} onClick={(e) => this.openInNewTab('/M2W/GetQuote')} className="d-flex color-purple">
                            <figure>
                              <img src={require("../../assets/images/buy-policy-icon.svg")} alt="" />
                            </figure>
                            <p>Get Quote</p>
                          </Link>
                        </div>
                        <div className="healgth-productBtn pl-0">
                          <Link to={'#'} onClick={(e) => this.openInNewTab('/motorrenewal/display_product?product=M2W')} className="d-flex color-purple">
                            <figure>
                              <img src={require("../../assets/images/renew-policy-icon.svg")} alt="" />
                            </figure>
                            <p>Renew Policy</p>
                          </Link>
                        </div>
                        <div className="healgth-productBtn pl-0">
                          <Link to={{ pathname: "/claim/claims-intimation", state: { product_type: "Long Term Two Wheeler Insurance Policy" } }} className="d-flex color-purple">
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
                    <div className="innerHead">Two Wheeler Insurance</div>
                    <Link to={"#"} onClick={e => this.openInNewTab("/M2W/GetQuote")}>Buy Now</Link>

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
                  <CallBackFormRetail policyName={"Motor Two Wheeler Insurance"} />
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
                          Key Feature
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
                          <figure> <img src={require("../../assets/images/bonus-motor-icon.svg")} alt="" /></figure>
                          Bonus
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_4">
                        <div>
                          <figure> <img src={require("../../assets/images/exclusions-iocn.svg")} alt="" /></figure>
                          Exclusion
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="tabmain_1">
                      <h5 className="htitle">Key Feature</h5>
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={480} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        <ul>
                          <li>Customised Pricing based on your Profile.</li>
                          <li>Avail discount if you are aged between 25 and 55 years</li>
                          <li>Enjoy additional discount for insuring your vehicle without a break</li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_2">
                      <h5 className="htitle">Coverage</h5>
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={480} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        <ul>
                          <li>This Policy is designed to cover the compulsory Third Party Liability as required by Motor Vehicles Act, together with loss or damage to the Vehicle itself.</li>
                          <li>Third party liability: Protects against any legal liability arising out of the use of the vehicle, towards third parties arising on bodily injury to / on death of a person and any damage caused to third party property.</li>
                          <li>Loss or damage to the vehicle: covers against any loss or damage caused to the vehicle or its accessories due to the following,</li>
                          <li>Fire, explosion, self-ignition, accidental damage by external means</li>
                          <li>Any damage in transit by road, rail, inland waterway, lift, elevator or air.</li>
                          <li>Lightning, earthquake, flood, typhoon, hurricane, storm, tempest, inundation, cyclone, hailstorm, frost, landslide, rockslide.</li>
                          <li>Burglary, theft, riot, strike, malicious act and terrorist activity</li>
                          <li>SBI General's Two Wheeler Package Policy provides compulsory personal accident cover of Rs. 15 lakh for individual owners (holding a valid driving license) of the vehicle while driving. This is not applicable for a Company owned vehicle.</li>
                          <li>Pillion Rider of the two wheeler can also be covered for Personal Accident for a maximum Capital Sum Insured of Rs. 1 lakh. You may also opt for higher limits in Personal Accident cover.</li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_3">
                      <h5 className="htitle">Bonus</h5>
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={480} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        <ul>
                          <li>No Claim Bonus: If you do not make a claim during the Policy period, a No Claim Bonus (NCB) is offered on renewals. This discount can go as high as 50%. (NCB will only be allowed provided the Policy is renewed within 90 days of the expiry date of the previous policy.)</li>
                          <li>Transfer of NCB: You can transfer full benefits of No Claim Bonus when you shift your motor insurance policy from another company.</li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_4">
                      <h5 className="htitle">Exclusion</h5>
                      <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={480} hideTracksWhenNotNeeded className="bg-dark-scroll">
                        <ul>
                          <li>Any loss/damage to the vehicle and/or its accessories will be not be covered if caused by the following,</li>
                          <li>Normal wear, tear and general ageing of the vehicle</li><li>Depreciation or any consequential loss</li>
                          <li>Mechanical/ electrical breakdown</li>
                          <li>Vehicle being used otherwise than in accordance with limitations as to use</li>
                          <li>Damage to / by a person driving the vehicle without a valid license</li>
                          <li>Damage to / by a person driving the vehicle under the influence of drugs or liquor</li>
                          <li>Loss / damage due to war, mutiny or nuclear risk</li>
                        </ul>
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

export default MotorTwoWheeler;