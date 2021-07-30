import React, { Component } from "react";
import { Nav, Row, Container, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
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
// import RelatedProducts from "./RelatedProducts";
import { Sticky } from 'react-sticky';

class ArogyaPlus extends Component {
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
      if (slug.indexOf('?') === -1) {
        url = url + slug + '?itm_source=' + utm_source + '&itm_medium=' + utm_medium + '&itm_campaign=' + utm_campaign;
      } else {
        url = url + slug + '&itm_source=' + utm_source + '&itm_medium=' + utm_medium + '&itm_campaign=' + utm_campaign;
      }
      let redirectUrl = '';
      if (slug.indexOf('http') !== -1) {
        redirectUrl = slug;
      } else {
        redirectUrl = url;
      }
      console.log(redirectUrl);
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

  render() {
    return (
      <div>
        <BaseComponent>
          {/* <Helmet> */}
          <HelmetData pageComponentType="Shagun" />

          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>Shagun</h1>
                <div className="healgth-productBtnMain">
                  <div className="healgth-productBtn">
                    <Link to={"#"} onClick={e => this.openInNewTab("/shagun/display/")} className="d-flex color-01" >
                      <figure>
                        <img
                          src={require("../../assets/images/buy-policy-icon.svg")}
                          alt=""
                        />
                      </figure>
                      <p>Get Quote</p>
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
                        src={require("../../assets/images/shagun_banner_icon.svg")}
                        alt="Shagun"
                      />
                    </figure>
                  </div>
                  <div className="col-8 d-flex align-items-center">
                    <div className="flex-column">
                      <h1>Shagun</h1>
                      {/* <div className="healgth-list">
                    <ul>
                      <li>142 days care procedures</li>
                      <li>Individual and Family Floater options</li>
                      <li>Cashless Treatment at over 3000 network hospitals</li>
                    </ul>
                  </div> */}
                      <div className="healgth-productBtnMain">
                        <div className="healgth-productBtn pl-0">
                          <Link to={"#"} onClick={e => this.openInNewTab("/shagun/display/")} className="d-flex color-purple">
                            <figure>
                              <img src={require("../../assets/images/buy-policy-icon.svg")} alt="" />
                            </figure>
                            <p>Get Quote</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* For Desktop */}
                  </div>
                  <div className="innerHeadBotomIcon">
                    <img
                      src={require("../../assets/images/shagun_banner_bottom_icon.svg")}
                      alt="Shagun"
                    />
                  </div>
                </div>
              </section>
            )}
          { /*sticky button */}
          <div className="stickyWrapper" style={{ display: this.state.prevScrollpos > 296 ? 'block' : 'none' }}>
            <Sticky topOffset={274} >
              {({ style }) => <div style={{ zIndex: 999, ...style }} id="stickyNav" >
                <div className="retailHealthButtonWRapper">
                  <div className="retailHealthStaticBtn">
                    <div className="innerHead">Shagun Policy</div>
                    <Link to={"#"} onClick={e => this.openInNewTab("/shagun/display/")}>Buy Now</Link>

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
                  <CallBackFormRetail policyName={"Arogya Plus Policy"} />
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
                          Key Feature
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
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="tabmain_1">
                      <h5 className="htitle">Key Feature</h5>
                      <ul>
                        <li>A Gift giver can gift this “Shagun” to family, friends, extended family and even domestic
helpers, chauffeurs, drivers, cook, etc</li>
                        <li>Gift Receiver can be in the age group of 18 years to 65 years</li>
                        <li>Policy Can be availed for upto 1 Year</li>
                      </ul>
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
                        <p>
                          This policy covers the following
                          subject to the terms and conditions:
                        </p>
                        <ul>
                          <li>Accidental Death (AD) – The Sum Insured is paid out to the nominee in case of accidental
death of the Insured Person</li>
                          <li>Permanent Total Disablement (PTD) – If accidental bodily injury causes permanent total
                          disablement then a percentage of Sum Insured is paid to the Insured Person. Additionally,
                          the below covers are also included:
<ul>
                              <li>Education Benefit – 1% of the Sum Insured or Rs 50,000, whichever is lower is paid
towards education benefit of up to maximum of 2 children</li>
                              <li>Adaption Allowance - 1% of the Sum Insured or Rs 25,000, whichever is lower is paid
towards cost of modifying house or vehicle</li>
                            </ul></li>
                          <li>Permanent Partial Disability (PPD) - If accidental bodily injury causes permanent partial disablement then Sum Insured percentage as per Annexure A
</li>
                          <li>Ambulance Cover – 10% of the Sum Insured subject to maximum of Rs. 100,000 will be paid towards expenses incurred for availing an Ambulance Service (including air ambulance) to transfer the Insured</li>
                          <li>Person to a Hospital from the location of Accident or Injury or from one Hospital to other Hospital or from hospital to place of residence in case of Accidental Death or Permanent Total Disablement (Subject to admissible claim under policy and transit within India Only)</li>
                          <li>Hospital confinement allowance (HCA) - Daily Benefit for each Day insured remains in a Hospital due to Injury or Accident subject to maximum coverage for 15 days for the entire policy period will be paid. (Subject to hospitalization within India Only</li>
                        </ul>
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
                        <ul>
                          <li>Accident resulting from Suicide, attempted suicide (whether sane or insane) or intentionally self-inflicted injury, mental or nervous disorder.</li>
                          <li>Accident arising out of and in the course of employment in any branch of the Military or Armed Forces of any country, whether in peace or War.</li>
                          <li>Accident while being under the influence or abuse of drugs, alcohol, or other intoxicants or
                          hallucinogens unless properly prescribed by a physician and taken as prescribed</li>
                          <li>Participation in an actual or attempted felony, riot, crime, misdemeanour, or civil commotion</li>
                          <li>Accident during air travel except as a fare paying passenger on a recognized airline or charter aircraft</li>
                          <li>Accident while operating or learning to operate any aircraft or ship, or performing duties as a member of the crew on any aircraft or ship.</li>
                          <li>Any accident/loss arising out of War, civil war, invasion, insurrection, revolution, act of foreign enemy, hostilities (whether War be declared or not), rebellion, mutiny, use of military power or usurpation of government or military power</li>
                          <li>Any injury caused by, contributed to, by or arising from nuclear ionising radiation or contamination by radioactivity from any nuclear fuel or from any nuclear waste or from the combustion of nuclear fuel (including any self-sustaining process of nuclear fission) or nuclear weapons material or nuclear equipment or any part of that equipment</li>
                          <li>The dispersal or application of pathogenic or poisonous biological or chemical materials; The release of pathogenic or poisonous biological or chemical materials, or Congenital anomalies or any complications or conditions arising there from participation in winter sports, skydiving/parachuting, hand gliding, bungee jumping, scuba diving, ballooning, mountain climbing (where ropes or guides are customarily used), all forms of skiing (including but not limited to snow or water), riding or driving in races or rallies using a motorized vehicle or bicycle, caving or pot-holing, hunting or equestrian activities, skin diving or other underwater activity, rafting or canoeing involving white water rapids, yachting or boating outside coastal waters (2 miles), participation in any Professional Sports, any bodily contact sport or/and any other hazardous or potentially dangerous sport for which You are untrained</li>
                          <li>Any loss resulting directly or indirectly, contributed or aggravated or prolonged by childbirth or from pregnancy</li>
                          <li>Committing breach of law with criminal intent</li>
                          <li>Loss caused directly or indirectly, wholly or partly by infections (except pyogenic infections which shall occur through an accidental cut or wound) or any other kind of disease</li>
                        </ul>
                        <p>
                          <strong>
                            Important Note: The above list of exclusions is illustrative and not exhaustive. For a full list of the exclusions , please refer to policy wordings.
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
          <section className="weAreWrapper">
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

export default ArogyaPlus;
