import React, { Component } from "react";
import { Nav, Row, Container, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Tab from "react-bootstrap/Tab";
import { Scrollbars } from 'react-custom-scrollbars';
// import { Link } from "react-router-dom";
// import {  Sticky } from 'react-sticky';
import * as AppConstant from "../AppConstant";
import HelmetData from "../Common/HelmetData";
import BaseComponent from "../BaseComponent";
import CallBackForm from "./CallBackForm";
import BranchLocator from "./BranchLocator";
import FAQ from "./FAQ";
import ProductRelatedResources from "./ProductRelatedResources";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";
import ReactHtmlParser from 'react-html-parser'

class ArogyaSanjeevaniGroup extends Component {
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
        if (document.cookie.match(/_ga=(.+?);/)[1].split('.').slice(-2).join(".")) {
            console.log("Present");
            gaUserId = document.cookie.match(/_ga=(.+?);/)[1].split('.').slice(-2).join(".");
        }
        else {
            console.log("Absent")
        }

        const data = {
            'event': 'sanjeevani_product_page_1_buy_policy_click',
            'product_name': 'Arogya Sanjeevani',
            'pagetype': 'sanjeevani_product_page',
            'client_id': gaUserId,
            'timestamp': AppConstant.gtmCurrentTime(),
            'quote_no': 'NA',
            'lead_no': 'NA',
            'policy_no': 'NA'
        };
        window.dataLayer.push(data);
        //GTM Implementation

        //UTM Source Catch
        let sourceParam = AppConstant.getUTMSource();
        let utm_source = sourceParam["utm_source"];
        let utm_medium = sourceParam["utm_medium"];
        let utm_campaign = sourceParam["utm_campaign"];

        let url = AppConstant.TRANSACTION_API_BASE_URL;
        if (slug !== "#") {
            url = url + slug + '?itm_source=' + utm_source + '&itm_medium=' + utm_medium + '&itm_campaign=' + utm_campaign
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

    gtmClickHandler = (click_text) => {
        //GTM Implementation
        let gaUserId = document.cookie.match(/_ga=(.+?);/)[1].split('.').slice(-2).join(".");
        const data = {
            'event': 'sanjeevani_product_page_4_product_features_click',
            'product_name': 'Arogya Sanjeevani',
            'pagetype': 'sanjeevani_product_page',
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
        let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
        let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
        let Heading, key_feature, Coverage, locate_us, Exclusion, Arogya_Group_Key_Feature, Arogya_Group_Coverage,
            Arogya_Group_Exclusion, Mobile_Heading


            ;

        if (lang_name === 'en') {

            Mobile_Heading = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_AROGYA_GROUP_COVERAGE'] &&
                sbiHomeData['PRODUCTS_RETAIL_AROGYA_GROUP_COVERAGE'].content_en;
            Heading = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_AROGYA_TEXT3'] && sbiHomeData['PRODUCTS_CORPORATE_AROGYA_TEXT3'].content_en;
            key_feature = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_en;
            Coverage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'].content_en;
            locate_us = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'].content_en;
            Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'].content_en;

            Arogya_Group_Key_Feature = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_AROGYA_GROUP1'] && sbiHomeData['PRODUCTS_RETAIL_AROGYA_GROUP1'].content_en;
            Arogya_Group_Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_AROGYA_GROUP_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_AROGYA_GROUP_COVERAGE'].content_en;
            Arogya_Group_Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_AROGYA_GROUP_EXCLUSION'] && sbiHomeData['PRODUCTS_RETAIL_AROGYA_GROUP_EXCLUSION'].content_en;



        } else {

            Heading = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_AROGYA_TEXT3'] && sbiHomeData['PRODUCTS_CORPORATE_AROGYA_TEXT3'].content_hi;
            key_feature = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_hi;
            Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'].content_hi;
            locate_us = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'] && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'].content_hi;
            Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'].content_hi;

            Arogya_Group_Key_Feature = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_AROGYA_GROUP1'] && sbiHomeData['PRODUCTS_RETAIL_AROGYA_GROUP1'].content_hi;
            Arogya_Group_Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_AROGYA_GROUP_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_AROGYA_GROUP_COVERAGE'].content_hi;
            Arogya_Group_Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_AROGYA_GROUP_EXCLUSION'] && sbiHomeData['PRODUCTS_RETAIL_AROGYA_GROUP_EXCLUSION'].content_hi;
            Mobile_Heading = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_AROGYA_GROUP_COVERAGE'] &&
                sbiHomeData['PRODUCTS_RETAIL_AROGYA_GROUP_COVERAGE'].content_hi;
        }
        return (
            <div>
                <BaseComponent>
                    {/* <Helmet> */}
                    <HelmetData pageComponentType="ArogyaSanjeevani" />

                    {isMobile ? (
                        <section className="topform product-header">
                            <div className="insuTab">
                                <h1>{Heading}</h1>
                                {/* <div className="healgth-productBtnMain">
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
                                </div> */}
                                <div className="healgth-list">
                                    {ReactHtmlParser(Mobile_Heading)}

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
                                        <h1>{Heading}</h1>

                                        {/* <div className="healgth-list">
                                        <ul>
                                            <li>142 days care procedures</li>
                                            <li>Individual and Family Floater options</li>
                                            <li>Cashless Treatment at over 3000 network hospitals</li>
                                        </ul>
                                    </div> */}
                                        {/* <div className="healgth-productBtnMain">
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
                                            </div> */}
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

                    {/* <div className="stickyWrapper" style={{ display: this.state.prevScrollpos > 296 ? 'block' : 'none' }}>
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
                    </div> */}

                    {/* We Protect you Main */}
                    <section className="protectWrapper motor-protectWrapper innerPageSection">
                        <Container>
                            <Row className="rotectRow">
                                <WeProtectYouResources productType={this.props.location.pathname.split('/')[1]} />
                                <Col xs="12" lg="4" className="lookingFor">
                                    {/***** Call Back Form Component ****/}
                                    <CallBackForm />
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
                                                    {key_feature}
                                                </div>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item onClick={e => this.gtmClickHandler('Coverage')}>
                                            <Nav.Link eventKey="tabmain_2">
                                                <div>
                                                    <figure>
                                                        <img src={require("../../assets/images/coverage-icon.svg")} alt="" />
                                                    </figure>
                                                    {Coverage}
                                                </div>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item onClick={e => this.gtmClickHandler('Exclusion')}>
                                            <Nav.Link eventKey="tabmain_3">
                                                <div>
                                                    <figure>
                                                        <img src={require("../../assets/images/exclusions-iocn.svg")} alt="" />
                                                    </figure>
                                                    {Exclusion}
                                                </div>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>

                                    <Tab.Content>
                                        <Tab.Pane eventKey="tabmain_1">
                                            <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={400} hideTracksWhenNotNeeded className="bg-dark-scroll">
                                                <h5 className="htitle">{key_feature}</h5>
                                                {ReactHtmlParser(Arogya_Group_Key_Feature)}

                                            </Scrollbars>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tabmain_2">
                                            <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={400} hideTracksWhenNotNeeded className="bg-dark-scroll">
                                                <h5 className="htitle">{Coverage}</h5>
                                                {ReactHtmlParser(Arogya_Group_Coverage)}

                                            </Scrollbars>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tabmain_3">
                                            <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={400} hideTracksWhenNotNeeded className="bg-dark-scroll">
                                                <h5 className="htitle">{Exclusion}</h5>
                                                {ReactHtmlParser(Arogya_Group_Exclusion)}

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
                            <h5 className="htitle text-center">{locate_us}</h5>
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

export default ArogyaSanjeevaniGroup;
