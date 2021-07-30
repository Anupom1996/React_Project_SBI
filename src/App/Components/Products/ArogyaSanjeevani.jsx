import React, { Component } from "react";
import { Nav, Row, Container, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Tab from "react-bootstrap/Tab";
import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from "react-router-dom";
import {  Sticky } from 'react-sticky';
import * as AppConstant from "../AppConstant";
import HelmetData from "../Common/HelmetData";
import BaseComponent from "../BaseComponent";
import CallBackFormRetail from "./CallBackFormRetail";
import BranchLocator from "./BranchLocator";
import FAQ from "./FAQ";
import ProductRelatedResources from "./ProductRelatedResources";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";

class ArogyaSanjeevani extends Component {
    constructor(props) {
        super(props);

        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true
        };
    }

    openInNewTab = slug => {
         //GTM Implementation
         var gaUserId = "";
        if(document.cookie.match(/_ga=(.+?);/)[1].split('.').slice(-2).join("."))
        {
            console.log("Present");
            gaUserId = document.cookie.match(/_ga=(.+?);/)[1].split('.').slice(-2).join(".");
        }    
        else
        {
            console.log("Absent")
        } 
         
         const data = {'event':'sanjeevani_product_page_1_buy_policy_click',
         'product_name':'Arogya Sanjeevani',
         'pagetype':'sanjeevani_product_page',
         'client_id':gaUserId,
         'timestamp':AppConstant.gtmCurrentTime(),
         'quote_no':'NA',
         'lead_no':'NA',
         'policy_no':'NA'
         };
         window.dataLayer.push(data);
         //GTM Implementation
        
        //UTM Source Catch
        let sourceParam = AppConstant.getUTMSource();
        let utm_source = sourceParam["utm_source"] ;
        let utm_medium = sourceParam["utm_medium"] ;
        let utm_campaign = sourceParam["utm_campaign"];
        let utm_uniqueid = sourceParam["utm_uniqueid"];

        let url = AppConstant.TRANSACTION_API_BASE_URL;
        if (slug !== "#") {
            url = url + slug + '?itm_source='+utm_source+'&itm_medium='+utm_medium+'&itm_campaign='+utm_campaign+'&itm_uniqueid='+utm_uniqueid;
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
       // console.log(currentScrollPos + "   " + visible);
        this.setState({
            prevScrollpos: currentScrollPos,
            visible
        });



    };

    gtmClickHandler = (click_text) =>{
        //GTM Implementation
        let gaUserId = document.cookie.match(/_ga=(.+?);/)[1].split('.').slice(-2).join(".");
        const data = {'event':'sanjeevani_product_page_4_product_features_click',
        'product_name':'Arogya Sanjeevani',
        'pagetype':'sanjeevani_product_page',
        'client_id':gaUserId,
        'click_text':click_text,
        'timestamp':AppConstant.gtmCurrentTime(),
        'quote_no':'NA',
        'lead_no':'NA',
        'policy_no':'NA'
        };
        window.dataLayer.push(data);
    }

    render() {
        return (
            <div>
                <BaseComponent>
                    {/* <Helmet> */}
                    <HelmetData pageComponentType="ArogyaSanjeevani" />

                    {isMobile ? (
                        <section className="topform product-header">
                            <div className="insuTab">
                                <h1>Arogya Sanjeevani Policy,<br /> SBI General Insurance Company Limited</h1>
                                <div className="healgth-productBtnMain">
                                    <div className="healgth-productBtn">
                                        <Link to={"#"} onClick={e => this.openInNewTab("/arogyasanjeevani/display_page")} className="d-flex color-01">
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
                                        <figure className="justify-content-between align-items-center argyaBaner">

                                        <img
                        src={require("../../assets/images/retail-head-icon.svg")}
                        alt="Arogya Sanjeevani Policy"
                      />
                                    </figure>
                                    </div>
                                    <div className="col-8 d-flex align-items-center">
                                        <div className="flex-column">
                                            <h1>Arogya Sanjeevani Policy,<br /> SBI General Insurance Company Limited</h1>

                                            {/* <div className="healgth-list">
                                        <ul>
                                            <li>142 days care procedures</li>
                                            <li>Individual and Family Floater options</li>
                                            <li>Cashless Treatment at over 3000 network hospitals</li>
                                        </ul>
                                    </div> */}
                                            <div className="healgth-productBtnMain">
                                                <div className="healgth-productBtn pl-0">
                                                    <Link to={"#"} onClick={e => this.openInNewTab("/arogyasanjeevani/display_page")} className="d-flex color-purple">
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
                                        </div>
                                        {/* For Desktop */}
                                    </div>
                                    
                    <div className="innerHeadBotomIcon">
                      <img
                        src={require("../../assets/images/inner-banner-bottom-icon.svg")}
                        alt="Arogya Sanjeevani Policy"
                      />
                    </div>
                                </div>
                            </section>
                        )}
                    {/* <div className="sanjeevani-float-button">
                        <Link className="flBtn" to={"#"} onClick={e => this.openInNewTab("/arogyasanjeevani/display_page")}>
                           Buy Policy
                        </Link>
                    </div> */}

                    <div className="stickyWrapper" style={{ display: this.state.prevScrollpos > 296 ? 'block' : 'none' }}>
                        <Sticky topOffset={274} >
                            {({ style }) => <div style={{ zIndex: 999, ...style }} id="stickyNav" >
                                <div className="retailHealthButtonWRapper">
                                    <div className="retailHealthStaticBtn">
                                        <div className="innerHead">Arogya Sanjeevani Policy</div>
                                        <Link to={"#"} onClick={e => this.openInNewTab("/arogyasanjeevani/display_page")}>Buy Now</Link>

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
                                    <Nav className="tabmainProduct" variant="pills">
                                        <Nav.Item onClick={e=>this.gtmClickHandler('Key Feature')}>
                                            <Nav.Link eventKey="tabmain_1">
                                                <div>
                                                    <figure>
                                                        <img src={require("../../assets/images/key-feature-icon.svg")} alt="" />
                                                    </figure>
                                                    Key Feature
                                                </div>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item onClick={ e => this.gtmClickHandler('Coverage')}>
                                            <Nav.Link eventKey="tabmain_2">
                                                <div>
                                                    <figure>
                                                        <img src={require("../../assets/images/coverage-icon.svg")} alt="" />
                                                    </figure>
                                                    Coverage
                                                </div>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item onClick={ e => this.gtmClickHandler('Exclusion')}>
                                            <Nav.Link eventKey="tabmain_3">
                                                <div>
                                                    <figure>
                                                        <img src={require("../../assets/images/exclusions-iocn.svg")} alt="" />
                                                    </figure>
                                                    Exclusion
                                                </div>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>

                                    <Tab.Content>
                                        <Tab.Pane eventKey="tabmain_1">
                                            <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={400} hideTracksWhenNotNeeded className="bg-dark-scroll">
                                                <h5 className="htitle">Key Feature</h5>
                                                <p>This policy covers the following benefits:</p>
                                                <ul>
                                                    <li>No medical check-up up to the age of 55 years for people with no medical history</li>
                                                    <li>AYUSH coverage</li>
                                                    <li>Family Floater: one plan, full family</li>
                                                    <li>Road Ambulance Cover</li>
                                                    <li>Cumulative Bonus: 5% of SI for each claim-free year, up to 50%</li>
                                                    <li>Coverage from Rs 100,000 to Rs 500,000.</li>
                                                    <li>Life-long renewability</li>
                                                    <li>Tax Deduction: Under Sec 80D</li>
                                                </ul>
                                            </Scrollbars>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tabmain_2">
                                            <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={400} hideTracksWhenNotNeeded className="bg-dark-scroll">
                                                <h5 className="htitle">Coverage</h5>
                                                <p>Arogya Sanjeevani Health Insurance Policy covers the following subject to terms and conditions:</p>
                                                <ul>
                                                    <li>Your hospital room rent, boarding expenses and doctor fees</li>
                                                    <li>Nursing expenses, Operation theatre and ICU charges</li>
                                                    <li>Medicines that you consume during the hospital stay</li>
                                                    <li>Road Ambulance Charges</li>
                                                    <li>Pre and Post hospitalization expenses up to 30 and 60 days respectively</li>
                                                    <li>AYUSH Treatment</li>
                                                </ul>
                                            </Scrollbars>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tabmain_3">
                                            <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={400} hideTracksWhenNotNeeded className="bg-dark-scroll">
                                                <h5 className="htitle">Exclusion</h5>
                                                <ul>
                                                    <li>Pre-existing diseases from inception of the policy up to 4 years of this policy being in force continuously</li>
                                                    <li>Treatment taken outside India</li>
                                                    <li>Admission primarily for investigation &amp; evaluation</li>
                                                    <li>Admission primarily for rest cure, rehabilitation and respite care</li>
                                                    <li>Expenses related to surgical treatment of obesity that do not fulfill certain conditions</li>
                                                    <li>Change-of-Gender treatments</li>
                                                    <li>Expenses for cosmetic surgery</li>
                                                    <li>Expenses related to treatments resulting from hazardous or adventure sports</li>
                                                    <li>Maternity Expenses</li>
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

export default ArogyaSanjeevani;
