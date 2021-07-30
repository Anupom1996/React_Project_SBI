import React, { Component } from "react";
import { Nav, Row, Container, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Tab from "react-bootstrap/Tab";
import { Scrollbars } from "react-custom-scrollbars";
import HelmetData from "../Common/HelmetData";
import * as AppConstant from "../AppConstant";
import BaseComponent from "../BaseComponent";
import CallBackForm from "./CallBackForm";
import BranchLocator from "./BranchLocator";
import FAQ from "./FAQ";
import ProductRelatedResources from "./ProductRelatedResources";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";

class BharatLaghuUdyamSuraksha extends Component {
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
      'product_name': 'SBI General Bharat Laghu Udyam Suraksha',
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
          <HelmetData pageComponentType="BharatLaghuUdyamSuraksha" />

          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>SBI General Bharat Laghu Udyam Suraksha</h1>
                <div className="healgth-productBtnMain">
                  {/* <div className="healgth-productBtn">
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
                      to={{ pathname: "/claim/claims-intimation", state: { product_type: "SBI General Bharat Laghu Udyam Suraksha Policy" } }}
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
                  </div> */}
                </div>
                {/* <div className="healgth-list">
                  <ul>
                    <li>142 days care procedures</li>
                    <li>Individual and Family Floater options</li>
                    <li>Cashless Treatment at over 3000 network hospitals</li>
                  </ul>
                </div> */}
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
                        src={require("../../assets/images/laghu-udyam-icon.svg")}
                        alt="SBI General Bharat Laghu Udyam Suraksha Policy"
                      />
                    </figure>
                  </div>
                  <div className="col-8 d-flex align-items-center">
                    <div className="flex-column">
                      <h1>SBI General Bharat Laghu Udyam Suraksha</h1>
                      {/* <div className="healgth-list">
                    <ul>
                      <li>142 days care procedures</li>
                      <li>Individual and Family Floater options</li>
                      <li>Cashless Treatment at over 3000 network hospitals</li>
                    </ul>
                  </div> */}
                      <div className="healgth-productBtnMain">
                        {/* <div className="healgth-productBtn pl-0">
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
                            to={{ pathname: "/claim/claims-intimation", state: { product_type: "SBI General Bharat Laghu Udyam Suraksha Policy" } }}
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
                        </div> */}
                      </div>
                    </div>
                    {/* For Desktop */}
                  </div>

                  <div className="innerHeadBotomIcon">
                    <img
                      src={require("../../assets/images/laghu-bottom-icon.svg")}
                      alt="SBI General Bharat Laghu Udyam Suraksha Policy"
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
                    <div className="innerHead">Bharat Laghu Udyam Suraksha</div>
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
                  <CallBackForm  />
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
                          Key Feature
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={e => this.gtmClickHandler('Coverage')}>
                      <Nav.Link eventKey="tabmain_2">
                        <div>
                          <figure>
                            <img src={require("../../assets/images/coverage-icon.svg")} alt="" />
                          </figure>
                          Coverage
                        </div>
                      </Nav.Link>
                    </Nav.Item>                    
                    <Nav.Item onClick={e => this.gtmClickHandler('Sum Insured')}>
                      <Nav.Link eventKey="tabmain_4">
                        <div>
                          <figure>
                            <img src={require("../../assets/images/sum-insured-icon.svg")} alt="" />
                          </figure>
                          Sum Insured
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={e => this.gtmClickHandler('Major Exclusion')}>
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
                      <h5 className="htitle">Key Feature</h5>
                      <ul><li>This policy covers the property if total asset value at one location exceeds Rs 5 cr but does not exceed Rs 50 Cr at policy commencement date</li><li>Named perils policy</li><li>Waiver of underinsurance upto 15%</li><li>Building, plant and machinery & furniture fixtures insured on reinstatement value basis</li><li>Inbuilt cover of earthquake & act of terrorism, removal of debris, and fee for architects, surveyors and consulting engineers etc.</li><li>Add on cover if stocks to be insured on declaration basis & floater basis</li></ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_2">
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={475}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <h5 className="htitle">Coverage</h5>
                        <p>This policy provides cover for building structures, plant & machinery, stock and other assets relating to your business against following perils:</p><ul><li>Fire, including due to its own fermentation, or natural heating or spontaneous combustion</li><li>Explosion or implosion</li><li>Lightning</li><li>Earthquake, volcanic eruption, or other convulsions of nature</li><li>Storm, cyclone, typhoon, tempest, hurricane, tornado, tsunami, flood and inundation</li><li>Subsidence of the land on which your premises stand, landslide, rockslide</li><li>Bush fire, forest fire, jungle fire</li><li>Impact damage of any kind, i.e. damage caused by impact of, or collision caused by, any external physical object (e.g. vehicle, falling trees, aircraft, wall etc.)</li><li>Missile testing operations</li><li>Riot, strikes, malicious damages</li><li>Acts of terrorism</li><li>Bursting or overflowing of water tanks, apparatus and pipes</li><li>Leakage from automatic sprinkler installations</li><li>Theft within 7 days from the occurrence of, and proximately caused by, any of the above insured events</li></ul><p>Other Inbuilt Covers:</p><ul><li>Additions, alterations or extensions</li><li>Temporary removal of stocks</li><li>Cover for specific contents</li><li>Start-up expenses</li><li>Professional fees</li><li>Cost of removal of debris</li><li>Costs compelled by municipal regulations </li></ul><p>Standard Add on cover:</p><ul><li>Declaration policy for stocks</li><li>Stocks on floater basis</li></ul>
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
                        <h5 className="htitle">Major Exclusion</h5>
                        <p>For building, plant and machinery, furniture, fixture and fittings and any other contents: Reinstatement Value </p><p>For stocks:</p><ul><li>For raw material: landed cost at your premises</li><li>For stock in process: Input cost of the stock at the time of damage</li><li>For finished stock: Manufacturing cost of the finished stock or the contract price of goods sold but not delivered</li></ul><p>Bullion or unset precious stones, any curios or works of art or obsolete machinery and the like: Agreed value basis</p>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_4">
                      <h5 className="htitle">Sum Insured</h5>
                      <p>Age:Minimum entry age is 3 months and maximum entry age is 65 years. There is no exit age.</p>
                      <p>Insured:Individual/ Family (For Family Insurance Policy - Family means the spouse, dependent children, parents and parents in law. For Family Floater Insurance Policy - Family means the spouse and dependent children)</p>
                      <p>Policy Term:1, 2 and 3 years.</p>
                      <p>Sum Insured:Hospitalisation sum insured options are 1, 2 and 3 Lakhs. OPD sum insured will depend on the age, premium and family type. Sum Insured of dependents will either be less than or equal to Proposer/ Primary Insured’s Sum Insured.</p>
                      <p>Premium:The premium for this product is flat Rs. 8,900, Rs. 13,350 or Rs. 17,800 per annum respectively for a sum Insured of 1, 2 or 3 lakhs.</p>
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

export default BharatLaghuUdyamSuraksha;
