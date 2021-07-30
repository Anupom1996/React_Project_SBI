import React, { Component } from "react";
import { Nav, Row, Container, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Tab from "react-bootstrap/Tab";
import { Scrollbars } from "react-custom-scrollbars";
import HelmetData from "../Common/HelmetData";
import * as AppConstant from "../AppConstant";
import BaseComponent from "../BaseComponent";
import CallBackFormRetail from "./CallBackFormRetail";
import BranchLocator from "./BranchLocator";
import FAQ from "./FAQ";
import ProductRelatedResources from "./ProductRelatedResources";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";

class SaralSurakshaBima extends Component {
  state = {
    faqcategory: "",
    subcategoryList: [],
    prevScrollpos: window.pageYOffset,
    visible: true
  };

  openInNewTab = slug => {
    //UTM Source Catch
    let sourceParam = AppConstant.getUTMSource();
    let utm_source = sourceParam["utm_source"];
    let utm_medium = sourceParam["utm_medium"];
    let utm_campaign = sourceParam["utm_campaign"];
    let url = AppConstant.TRANSACTION_API_BASE_URL;
    if (slug !== "#") {
      let redirectUrl = '';
      if (slug.indexOf('http') !== -1) {
        redirectUrl = slug;
      } else {
        if (slug.indexOf('?') === -1) {
          url = url + slug + '?itm_source=' + utm_source + '&itm_medium=' + utm_medium + '&itm_campaign=' + utm_campaign;
        } else {
          url = url + slug + '&itm_source=' + utm_source + '&itm_medium=' + utm_medium + '&itm_campaign=' + utm_campaign;
        }
        redirectUrl = url;
      }
      var win = window.open(redirectUrl, '_blank');
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
    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  gtmClickHandler = (click_text) => {
    //GTM Implementation
    let gaUserId = document.cookie.match(/_ga=(.+?);/)[1].split('.').slice(-2).join(".");
    const data = {
      'event': 'arogya_plus_product_page_4_product_features_click',
      'product_name': 'Saral Suraksha Bima, SBI General Insurance Company Limited',
      'pagetype': 'arogya_plus_product_page',
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
          <HelmetData pageComponentType="SaralSurakshaBima" />

          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>Saral Suraksha Bima, SBI General Insurance Company Limited</h1>
                {/* <div className="healgth-productBtnMain">
                  <div className="healgth-productBtn">
                    <Link to={"#"} onClick={e => this.openInNewTab("/healthinsurancePlus/display_page/")} className="d-flex color-01" >
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
                    <Link to={"#"} onClick={e => this.openInNewTab("/healthrenewal/display_product?product=APL")} className="d-flex color-02">
                      <figure>
                        <img src={require("../../assets/images/renew-policy-icon.svg")} alt="" />
                      </figure>
                      <p>Renew Policy</p>
                    </Link>
                  </div>
                  <div className="healgth-productBtn">
                    <Link
                      to={{ pathname: "/claim/claims-intimation", state: { product_type: "Arogya Plus Policy" } }}
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
                    <Link to={"#"} onClick={e => this.openInNewTab("/healthinsurancePlus/display_page")} className="d-flex color-01">
                      <figure>
                        <img
                          src={require("../../assets/images/policy-download-icon.svg")}
                          alt=""
                        />
                      </figure>
                      <p>Policy Download</p>
                    </Link>
                  </div>
                </div> */}
                <div className="healgth-list">
                 
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
                        src={require("../../assets/images/retail-head-icon.svg")}
                        alt="Saral Suraksha Bima, SBI General Insurance Company Limited"
                      />
                    </figure>
                  </div>
                  <div className="col-8 d-flex align-items-center">
                    <div className="flex-column">
                      <h1>Saral Suraksha Bima, SBI General Insurance Company Limited</h1>
                      {/* <div className="healgth-list">
                    <ul>
                      <li>142 days care procedures</li>
                      <li>Individual and Family Floater options</li>
                      <li>Cashless Treatment at over 3000 network hospitals</li>
                    </ul>
                  </div> */}
                      {/* <div className="healgth-productBtnMain">
                        <div className="healgth-productBtn pl-0">
                          <Link to={"#"} onClick={e => this.openInNewTab("/healthinsurancePlus/display_page")} className="d-flex color-purple">
                            <figure>
                              <img src={require("../../assets/images/buy-policy-icon.svg")} alt="" />
                            </figure>
                            <p>Get Quote</p>
                          </Link>
                        </div>
                        <div className="healgth-productBtn pl-0">
                          <Link to={"#"} onClick={e => this.openInNewTab("/healthrenewal/display_product?product=APL")} className="d-flex color-purple">
                            <figure>
                              <img src={require("../../assets/images/renew-policy-icon.svg")} alt="" />
                            </figure>
                            <p>Renew Policy</p>
                          </Link>
                        </div>
                        <div className="healgth-productBtn pl-0">
                          <Link
                            to={{ pathname: "/claim/claims-intimation", state: { product_type: "Arogya Plus Policy" } }}
                            className="d-flex color-purple"
                          >
                            <figure>
                              <img src={require("../../assets/images/claim-policy-icon.svg")} alt="" />
                            </figure>
                            <p>Intimate Claim</p>
                          </Link>
                        </div>
                        <div className="healgth-productBtn pl-0">
                          <Link to={"#"} onClick={e => this.openInNewTab("/policyprint/healthpolicyothers")} className="d-flex color-purple">
                            <figure>
                              <img src={require("../../assets/images/policy-download-icon.svg")} alt="" />
                            </figure>
                            <p>Policy Download</p>
                          </Link>
                        </div>
                      </div> */}
                    </div>
                    {/* For Desktop */}
                  </div>

                  <div className="innerHeadBotomIcon">
                    <img
                      src={require("../../assets/images/inner-banner-bottom-icon.svg")}
                      alt="Saral Suraksha Bima, SBI General Insurance Company Limited"
                    />
                  </div>

                </div>
              </section>
            )}

          { /*sticky button */}
          {/* <div className="stickyWrapper" style={{ display: this.state.prevScrollpos > 296 ? 'block' : 'none' }}>
            <Sticky topOffset={274} >
              {({ style }) => <div style={{ zIndex: 999, ...style }} id="stickyNav" >
                <div className="retailHealthButtonWRapper">
                  <div className="retailHealthStaticBtn">
                    <div className="innerHead">Saral Suraksha Bima</div>
                    <Link to={"#"} onClick={e => this.openInNewTab("/healthinsurancePlus/display_page")}>Buy Now</Link>
                  </div>
                </div>
              </div>}
            </Sticky>
          </div> */}

          {/* We Protect you Main */}
          <section className="protectWrapper motor-protectWrapper innerPageSection">
            <Container>
              <Row className="rotectRow">
                <WeProtectYouResources productType={this.props.location.pathname.split('/')[1]} />
                <Col xs="12" lg="4" className="lookingFor">
                  {/***** Call Back Form Component ****/}
                  <CallBackFormRetail  />
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
                          Salient Feature
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={e => this.gtmClickHandler('Coverage')}>
                      <Nav.Link eventKey="tabmain_2">
                        <div>
                          <figure>
                            <img src={require("../../assets/images/coverage-icon.svg")} alt="" />
                          </figure>
                          Coverages
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={e => this.gtmClickHandler('Major Exclusion')}>
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
                      <h5 className="htitle">Salient Feature</h5>
                      <p>Saral Suraksha Bima is designed to cover the following:</p><ul><li>Loss of life due to accident of insured</li><li>Permanent total disablement, permanent partial disablement cover which provides fixed benefit & protects against medical expenses arising out of it</li><li>People aged between 18 to 70 years</li><li>Family including self, spouse, dependent children, parents / parents-in-law</li><li>Dependent children from age of 3 months to 25 years </li><li>Optional covers such as:<ul><li>Temporary total disablement</li><li>Hospitalisation expenses due to accident</li><li>Education grant</li></ul></li><li>5% Cumulative Bonus for each claim free year to maximum of 50% of Sum Insured.</li></ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_2">
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={475}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <h5 className="htitle">Coverages</h5>
                        <p><strong>Base Cover</strong></p><ul><li>Accidental Death</li><li>Permanent Total Disablement</li><li>Permanent Partial Disablement</li></ul><p><strong>Optional Cover</strong></p><ul><li>Temporary Total Disablement</li><li>Hospitalisation Expenses due to Accident</li><li>Education Grant</li></ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_3">
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={475}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <h5 className="htitle">Exclusion</h5>
                        <p>Exclusions applicable to each section will have precedence over general exclusions mentioned below: The Company shall not be liable in respect of</p><ul><li>Any claim directly or indirectly due to war and war like occurrence or invasion, acts of foreign enemies etc. and detainment of all kinds</li><li>Any claim for death, disablement due to suicide, intentional self-injury unless in self-defence or to save life, suicide or attempted suicide</li><li>Any loss arising out of the insured person's actual or attempted commission of or wilful participation in an illegal act or any violation or attempted violation of the law</li><li>Any claim resulting or arising from or any consequential loss directly or indirectly caused by or contributed to or arising from:  Ionizing radiation or contamination by radioactivity from any nuclear fuel, nuclear weapons material, radioactive, toxic, explosive etc.</li><li>Any claim for death, hospitalization of insured person due to participation as a professional in hazardous or adventure sports, including but not limited to, para-jumping, rock climbing, mountaineering, rafting, motor racing, horse racing or scuba diving, hand gliding, sky diving, deep-sea diving</li></ul><p><i>(PS. This are descriptive product details; please read Policy Wordings for exhaustive details)</i></p>
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
          {/* <RelatedProducts category="health" productType={this.props.location.pathname.split('/')[1]} /> */}
          {/*Health Insurance FAQ Main */}
          <FAQ productType={this.props.location.pathname.split('/')[1]} />
        </BaseComponent>
      </div>
    );
  }
}

export default SaralSurakshaBima;
