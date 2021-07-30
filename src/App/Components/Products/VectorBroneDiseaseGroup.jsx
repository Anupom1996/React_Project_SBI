import React, { Component } from "react";
import { Nav, Row, Container, Col, Table } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Tab from "react-bootstrap/Tab";
import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from "react-router-dom";
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

class VectorBroneDiseaseGroup extends Component {
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

        let url = AppConstant.TRANSACTION_API_BASE_URL;
        if (slug !== "#") {
            url = url + slug + '?itm_source='+utm_source+'&itm_medium='+utm_medium+'&itm_campaign='+utm_campaign
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
                    <HelmetData pageComponentType="VectorBroneDiseaseGroup" />

                    {isMobile ? (
                        <section className="topform product-header">
                            <div className="insuTab">
                            {/* VECTOR BORNE DISEASE COVER – GROUP */}
                                <h1>Vector Borne Disease Cover</h1>
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
                                        <img src={require("../../assets/images/retail-head-icon.svg")} alt="Vector Borne Disease Cover – Group" />
                                    </figure>
                                    </div>
                                    <div className="col-8 d-flex align-items-center">
                                        <div className="flex-column">
                                            <h1>Vector Borne Disease Cover</h1>

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
                                    <img src={require("../../assets/images/inner-banner-bottom-icon.svg")} alt="Vector Borne Disease Cover – Group" />
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
                                                    Major Exclusion
                                                </div>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>

                                    <Tab.Content>
                                        <Tab.Pane eventKey="tabmain_1">
                                            <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={400} hideTracksWhenNotNeeded className="bg-dark-scroll">
                                                <h5 className="htitle">Key Feature</h5>
                                                <ul>
                                                    <li>Benefit basis lumpsum claim payment</li>
                                                    <li>No medical check-ups</li>
                                                    <li>Family can be covered on individual sum insured basis</li>
                                                    <li>Discount on initial 30 days waiting period </li>
                                                    <li>Entry age for child – 1 day</li>
                                                    <li>Wide range of sum insured</li>
                                                    <li>Various optional covers to choose from</li>
                                                    <li>No exit age</li>
                                                </ul>
                                                <p><strong>Scope of Cover:</strong></p>
                                                <p>The Company will pay to you, the Sum Insured as a lumpsum amount for Vector Borne Diseases as listed below provided it occurs or manifests itself during the policy period and meets the conditions specified in the policy document.</p>
                                                <p><strong>Who Can Buy?</strong></p>
                                                <p>Any group which has a commonality of purpose or which is engaged in a common economic activity (other than Insurance) can take the policy. An association of persons coming together only with a purpose of availing an insurance cover will not be treated as a group for the purpose of policy.
                                                    <br/><small><i>Adherence to Group Definition laid by IRDA is mandatory.</i></small></p>
                                                <p><strong>Age Criteria</strong></p>
                                                <Table striped bordered responsive >
                                                    <tbody>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                            <td><strong>Minimum </strong></td>
                                                            <td><strong>Maximum </strong></td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Adult</strong></td>
                                                            <td>18 yrs</td>
                                                            <td>65 yrs</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Child</strong></td>
                                                            <td>1 day</td>
                                                            <td>25 yrs</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Scrollbars>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tabmain_2">
                                            <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={400} hideTracksWhenNotNeeded className="bg-dark-scroll">
                                                <h5 className="htitle">Coverages</h5>
                                                <p>Base Coverage: 100% of sum insured will be payable on hospitalisation (minimum 48 hours) 
                                                    due to any of the below listed vector borne diseases:</p>
                                                <ol>
                                                    <li>Dengue</li>
                                                    <li>Malaria</li>
                                                    <li>Filaria (Lymphatic Filariasis)</li>
                                                    <li>Kala-azar</li>
                                                    <li>Chikungunya</li>
                                                    <li>Japanese Encephalitis</li>
                                                    <li>Zika Virus</li>
                                                </ol>
                                                <p><strong>Optional Covers:</strong></p>
                                                <ul>
                                                    <li><p>Daily Hospital Cash Benefit:</p>
                                                <ul>
                                                    <li>On availing of this benefit the Company will pay per day basis up to the limit subject to maximum days as specified in Policy Schedule in addition to the base coverage if the Insured Person has completed the minimum 
                                                        24 hours hospitalization due to covered Vector Borne Diseases</li>
                                                    <li>The benefit payment will start after completion of 24 hours hospitalization</li>
                                                    <li>If the base coverage has been paid, the cover will continue for remaining Daily Hospital Cash Benefit (if any) till the end of Policy Year.</li>
                                                </ul></li>
                                                <li><p>Recovery Benefit:</p>
                                                <ul>
                                                    <li>The Company will pay 10% of Sum Insured if period of hospitalization for claim admissible under this policy, is for 10 continuous days or more</li>
                                                    <li>This benefit is not applicable if the treatment is taken at home</li>
                                                </ul></li>
                                                <li><p>Reinstatement Benefit:</p>
                                                <ul>
                                                    <li>The Company will reinstate 100% of Sum Insured twice during the policy period upon payment of claim under the base coverage.</li>
                                                    <li>This can be used only for the base coverage</li>
                                                    <li>This reinstated benefit can be claimed for an already claimed disease or a different disease among the covered conditions</li>
                                                    <li>There will be a cooling off period of 3 months from the previous claim. The 3 months will compute from hospital discharge date</li>
                                                </ul>
                                                </li>
                                                <li><p>Increased Waiting period:</p>
                                                <ul>
                                                    <li>Waiting period will be modified to 30 days and will be applicable for all the claims under this policy</li>
                                                    <li>Avail additional discount on premium</li>
                                                </ul>
                                                </li>
                                                </ul>
                                            </Scrollbars>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tabmain_3">
                                            <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={400} hideTracksWhenNotNeeded className="bg-dark-scroll">
                                                <h5 className="htitle">Major Exclusions</h5>
                                                <ul>
                                                    <li>Any of the listed vector borne disease diagnosed within the first 15 or 30 days (as shown in the policy schedule / certificate of insurance) of the date of commencement of the policy is excluded. This exclusion shall not apply to an Insured Beneficiary(ies), as the case may be, for whom coverage has been renewed without a break, for subsequent years provided there are NIL claims in the previous policies.</li>
                                                    <li>Any pre-existing disease or any hospitalization for any illness other than for listed vector borne diseases </li>
                                                    <li>Hospitalization primarily for diagnostic purposes not related to illness or for any purpose which in normal routine could have been carried out on an out-patient basis and which is not followed by an active treatment or intervention during the period of hospitalization</li>
                                                    <li>Experimental or unproven procedures or treatments, hospitalization for treatment other than allopathy</li>
                                                    <li>Any treatment taken on outpatient basis</li>
                                                    <li>Inpatient hospitalization for less than 24 hours for Daily Hospital Cash Benefit (DHCB) (Section No C.2.1) benefit and admission to the hospital for less than 48 hours for Vector Borne Fixed Sum Insured Main benefit (section no. C.1)</li>
                                                    <li>Diagnosis and treatment outside India except the following countries:<br/>
                                                    Canada, Dubai, Hong Kong, Japan, Australia, New Zealand, Singapore, Switzerland, USA, and countries of the European Union</li>
                                                    <li>Treatment in any hospital or any other provider network that we have blacklisted as listed on our website <Link to={'/contact-us/hospital'}>www.sbigeneral.in</Link>. However, this exclusion will not apply in case the hospitalization is on account of life-threatening situations for covered vector borne diseases</li>
                                                    <li>Exposure to listed districts. <i><small>(list will be amended time to time as per UW norms).</small></i></li>
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

export default VectorBroneDiseaseGroup;
