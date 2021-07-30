import React, { Component } from "react";
import { Nav, Row, Container, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import { Scrollbars } from "react-custom-scrollbars";

import HelmetData from "../Common/HelmetData";
import BaseComponent from "../BaseComponent";
import * as AppConstant from "../AppConstant";
import CallBackFormRetail from "./CallBackFormRetail";
import BranchLocator from "./BranchLocator";
import FAQ from "./FAQ";
import ProductRelatedResources from "./ProductRelatedResources";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";
import RelatedProducts from "./RelatedProducts";

class GroupHealthInsuranceSBI extends Component {

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

    render() {
        return (
            <div>
                <BaseComponent>
                    {/* <Helmet> */}
                    <HelmetData pageComponentType="GroupHealthInsuranceSBI" />

                    {isMobile ? (
                        <section className="topform product-header">
                            <div className="insuTab">
                                <h1>Group Health Insurance - SBI</h1>
                                <div className="healgth-productBtnMain">
                                    {/*<div className="healgth-productBtn">
                                    <Link to={'#'} onClick={(e) => this.openInNewTab('/M2W/GetQuote')} className="d-flex color-01">
                                    <figure>
                                        <img src={require("../../assets/images/buy-policy-icon.svg")} alt="" />
                                    </figure>
                                    <p>Buy Policy</p>
                                    </Link>
                        </div>*/}
                                    <div className="healgth-productBtn">
                                        <Link to={'#'} onClick={e => this.openInNewTab("/healthrenewal/display_product?product=SH")} className="d-flex color-03">
                                            <figure>
                                                <img src={require("../../assets/images/renew-policy-icon.svg")} alt="" />
                                            </figure>
                                            <p>Renew Policy</p>
                                        </Link>
                                    </div>
                                    <div className="healgth-productBtn">
                                        <Link to={{ pathname: "/claim/claims-intimation", state: { product_type: "Group Health Insurance - SBI" } }} className="d-flex color-03">
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
                                                alt="Group Health Insurance Policy"
                                            />
                                        </figure>
                                    </div>
                                    <div className="col-8 d-flex align-items-center">
                                        <div className="flex-column">
                                            <h1>Group Health Insurance - SBI</h1>
                                            {/* <div className="healgth-list">
                                        <ul>
                                            <li>142 days care procedures</li>
                                            <li>Individual and Family Floater options</li>
                                            <li>Cashless Treatment at over 3000 network hospitals</li>
                                        </ul>
                                    </div> */}
                                            <div className="healgth-productBtnMain">
                                                {/*<div className="healgth-productBtn">
                                    <Link to={'#'} onClick={(e) => this.openInNewTab('#')} className="d-flex color-01">
                                        <figure>
                                        <img src={require("../../assets/images/buy-policy-icon.svg")} alt="" />
                                        </figure>
                                        <p>Buy Policy</p>
                                    </Link>
                        </div>*/}
                                                <div className="healgth-productBtn pl-0">
                                                    <Link to={'#'} onClick={e => this.openInNewTab("/healthrenewal/display_product?product=SH")} className="d-flex color-purple">
                                                        <figure>
                                                            <img src={require("../../assets/images/renew-policy-icon.svg")} alt="" />
                                                        </figure>
                                                        <p>Renew Policy</p>
                                                    </Link>
                                                </div>
                                                <div className="healgth-productBtn pl-0">
                                                    <Link to={{ pathname: "/claim/claims-intimation", state: { product_type: "Group Health Insurance - SBI" } }} className="d-flex color-purple">
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
                                        </div>
                                        {/* For Desktop */}
                                    </div>
                                    <div className="innerHeadBotomIcon">
                                        <img
                                            src={require("../../assets/images/inner-banner-bottom-icon.svg")}
                                            alt="Group Health Insurance Policy"
                                        />
                                    </div>
                                </div>
                            </section>
                        )}

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
                                            <Scrollbars
                                                autoHeight
                                                autoHeightMin={0}
                                                autoHeightMax={375}
                                                hideTracksWhenNotNeeded
                                                className="bg-dark-scroll"
                                            >
                                                <ul>
                                                    <li>No medical check-up if you don’t have any medical history: Up to 65 years</li>
                                                    <li>Multiple coverages: Individual, Family Floater</li>
                                                    <li>Tax exemption: Under Sec 80D</li>
                                                    <li>Wide coverage: Rs. 1,00,000 to Rs. 5,00,000</li>
                                                </ul>
                                            </Scrollbars>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tabmain_2">
                                            <h5 className="htitle">Coverage</h5>
                                            <Scrollbars
                                                autoHeight
                                                autoHeightMin={0}
                                                autoHeightMax={375}
                                                hideTracksWhenNotNeeded
                                                className="bg-dark-scroll"
                                            >
                                                <p>Our group health insurance covers:</p>
                                                <ul>
                                                    <li>Room and Boarding Charges</li>
                                                    <li>Doctor, Surgeon and Nursing Fees</li>
                                                    <li>ICU Charges</li>
                                                    <li>Cost of Medicines</li>
                                                    <li>Pre and post hospitalisation expenses for 30 and 60 days respectively</li>
                                                </ul>
                                            </Scrollbars>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tabmain_3">
                                            <h5 className="htitle">Major Exclusion</h5>
                                            <Scrollbars
                                                autoHeight
                                                autoHeightMin={0}
                                                autoHeightMax={375}
                                                hideTracksWhenNotNeeded
                                                className="bg-dark-scroll"
                                            >
                                                <p>Our group health insurance doesn’t provide coverage for certain cases such as:</p>
                                                <ul>
                                                    <li>Pre-existing illnesses and diseases during the first 4 years of policy coverage. </li>
                                                    <li>Treatment of illnesses such as Ulcers, Tonsillectomy, Hernia, Cataract, Sinusitis, Gall Bladder Stones, Chronic Renal Failure during the first year of operation of the policy.</li>
                                                    <li>Treatment taken outside India</li>
                                                    <li>Outpatient treatment</li>
                                                    <li>Stay in a hospital without undertaking any active regular treatment by the medical practitioner</li>
                                                    <li>Experimental and unproven treatment.</li>
                                                    <li>Treatment-related to pregnancy or childbirth.</li>
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

                    {/*Health Insurance FAQ Main */}
                    <FAQ productType={this.props.location.pathname.split('/')[1]} />
                </BaseComponent>
            </div>
        );
    }
}

export default GroupHealthInsuranceSBI;
