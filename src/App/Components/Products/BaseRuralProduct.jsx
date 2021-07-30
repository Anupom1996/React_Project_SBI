import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import { Nav, Row, Col, Tab, Accordion, Card, Button } from "react-bootstrap";

class BaseRuralProduct extends Component {

    toggleAccordianBtn = e => {
        let ParentID = e.target.parentNode.parentNode.parentNode.id;
        let classAccord = e.target.className;
        let els = document.getElementById(ParentID).getElementsByClassName("accordianBtn btn btn-link");
        if (els) {
            while (els[0]) {
                els[0].classList.remove("accordianBtn");
            }
        }
        if (classAccord.indexOf("accordianBtn") > -1) {
            e.target.className = "btn btn-link";
        } else {
            e.target.className = "accordianBtn btn btn-link";
        }
    }

    gtmClickHandler = (clickText) => {
        window.dataLayer = window.dataLayer || [];
        const data = {
            'event': 'product_listing_page_2_product_grid_click',
            'pagetype': 'product_listing_page',
            'product_name': clickText
        };
        window.dataLayer.push(data);
    }

    render() {
        let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
        let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
        let Gramin_Samridhi, Pradhan_mantri, Sheep_Goat, Micro_Insurence, Cattle_Insurence, Pump_Set, Rural_Insurence, Know_More
            ;
        if (lang_name === 'en') {

            Gramin_Samridhi = sbiHomeData && sbiHomeData['PRODUCTS_RARUL_GRAMIN_SAMRIDHI'] && sbiHomeData['PRODUCTS_RARUL_GRAMIN_SAMRIDHI'].content_en;
            Pradhan_mantri = sbiHomeData && sbiHomeData['PRODUCTS_RURAL_PMFBY'] && sbiHomeData['PRODUCTS_RURAL_PMFBY'].content_en;
            Sheep_Goat = sbiHomeData && sbiHomeData['PRODUCTS_RURAL_SHEEP_AND_GOAT'] && sbiHomeData['PRODUCTS_RURAL_SHEEP_AND_GOAT'].content_en;
            Micro_Insurence = sbiHomeData && sbiHomeData['PRODUCTS_RURAL_SHEEP_AND_GOAT1'] && sbiHomeData['PRODUCTS_RURAL_SHEEP_AND_GOAT1'].content_en;
            Cattle_Insurence = sbiHomeData && sbiHomeData['PRODUCTS_RURAL_CATTLE_INSURENCE'] && sbiHomeData['PRODUCTS_RURAL_CATTLE_INSURENCE'].content_en;
            Know_More = sbiHomeData && sbiHomeData['PRODUCTS_KNOW_MORE'] && sbiHomeData['PRODUCTS_KNOW_MORE'].content_en;

            Pump_Set = sbiHomeData && sbiHomeData['PRODUCTS_RURAL_PUMP_SET'] && sbiHomeData['PRODUCTS_RURAL_PUMP_SET'].content_en;
            Rural_Insurence = sbiHomeData && sbiHomeData['PRODUCTS_RURAL_RURAL_INSURENCE'] && sbiHomeData['PRODUCTS_RURAL_RURAL_INSURENCE'].content_en;



        } else {
            Rural_Insurence = sbiHomeData && sbiHomeData['PRODUCTS_RURAL_RURAL_INSURENCE'] && sbiHomeData['PRODUCTS_RURAL_RURAL_INSURENCE'].content_hi;
            Pump_Set = sbiHomeData && sbiHomeData['PRODUCTS_RURAL_PUMP_SET'] && sbiHomeData['PRODUCTS_RURAL_PUMP_SET'].content_hi;
            Cattle_Insurence = sbiHomeData && sbiHomeData['PRODUCTS_RURAL_CATTLE_INSURENCE'] && sbiHomeData['PRODUCTS_RURAL_CATTLE_INSURENCE'].content_hi;
            Micro_Insurence = sbiHomeData && sbiHomeData['PRODUCTS_RURAL_SHEEP_AND_GOAT1'] && sbiHomeData['PRODUCTS_RURAL_SHEEP_AND_GOAT1'].content_hi;
            Sheep_Goat = sbiHomeData && sbiHomeData['PRODUCTS_RURAL_SHEEP_AND_GOAT'] && sbiHomeData['PRODUCTS_RURAL_SHEEP_AND_GOAT'].content_hi;
            Pradhan_mantri = sbiHomeData && sbiHomeData['PRODUCTS_RURAL_PMFBY'] && sbiHomeData['PRODUCTS_RURAL_PMFBY'].content_hi;
            Gramin_Samridhi = sbiHomeData && sbiHomeData['PRODUCTS_RARUL_GRAMIN_SAMRIDHI'] && sbiHomeData['PRODUCTS_RARUL_GRAMIN_SAMRIDHI'].content_hi;
            Know_More = sbiHomeData && sbiHomeData['PRODUCTS_KNOW_MORE'] && sbiHomeData['PRODUCTS_KNOW_MORE'].content_hi;



        }
        return (
            <>
                {isMobile ? ( //For Mobil View
                    <div className="faqContent">
                        <section className="faQinsuranceMain" id="RuralTab">
                            <Accordion defaultActiveKey="0">
                                <Card>
                                    <Accordion.Toggle
                                        as={Button}
                                        variant="link"
                                        eventKey="0"
                                        onClick={e => this.toggleAccordianBtn(e)}
                                        className={"accordianBtn"}
                                    >
                                        {Rural_Insurence}
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <ul className="product-list">
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/AgriculturePumpsetInsurancePolicy.svg")} alt="AgriculturePumpsetInsurancePolicy" />
                                                        </figure>
                                                        <h3>{Pump_Set}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/agriculture-pumpset-insurance-policy"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Agricultural Pump Set') }}> {Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/CattleInsurancePolicy.svg")} alt="CattleInsurancePolicy" />
                                                        </figure>
                                                        <h3>{Cattle_Insurence}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/cattle-insurance-policy"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Cattle Insurance') }}> {Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/MicroInsurancePolicy.svg")} alt="MicroInsurancePolicy" />
                                                        </figure>
                                                        <h3>{Micro_Insurence}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/micro-insurance-policy"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Micro Insurance Policy') }}> {Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/SheepGoatInsurancePolicy.svg")} alt="SheepGoatInsurancePolicy" />
                                                        </figure>
                                                        <h3>{Sheep_Goat}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/sheep-goat-insurance-policy"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Sheep and Goat Insurance') }}> {Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/PradhanMantriFasalBimaYojna.svg")} alt="" />
                                                        </figure>
                                                        <h3>{Pradhan_mantri}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/pradhan-mantri-fasal-bima-yojna"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('PMFBY') }}> {Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/GraminSamriddhiBima.svg")} alt="" />
                                                        </figure>
                                                        <h3>{Gramin_Samridhi}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/gramin-samriddhi-bima"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Gramin Samriddhi Bima') }}> {Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </section>
                    </div>
                ) : (
                    //For Desktop View
                    <div className="prod-tab-content-step-one">
                        <Tab.Container
                            id="prodTab-motorInsuranc"
                            defaultActiveKey="RuralInsurance"
                        >
                            <Row className="prod-tab-inner">
                                <Col sm={12}>
                                    <Nav
                                        variant="pills"
                                        className="flex-row justify-content-center align-items-center"
                                    >
                                        <Nav.Item>
                                            <Nav.Link eventKey="RuralInsurance">
                                                {Rural_Insurence}
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={12}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="RuralInsurance">
                                            <div className="prod-tab-content-step-two">
                                                <ul className="product-list">
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/AgriculturePumpsetInsurancePolicy.svg")} alt="AgriculturePumpsetInsurancePolicy" />
                                                            </figure>
                                                            <h3>{Pump_Set}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/agriculture-pumpset-insurance-policy"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Agricultural Pump Set') }}> {Know_More}</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/CattleInsurancePolicy.svg")} alt="CattleInsurancePolicy" />
                                                            </figure>
                                                            <h3>{Cattle_Insurence}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/cattle-insurance-policy"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Cattle Insurance') }}> {Know_More}</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img
                                                                    src={require("../../assets/images/product-icons/landing-page/MicroInsurancePolicy.svg")}
                                                                    alt="MicroInsurancePolicy"
                                                                />
                                                            </figure>
                                                            <h3>{Micro_Insurence}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/micro-insurance-policy"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Micro Insurance Policy') }}> {Know_More}</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img
                                                                    src={require("../../assets/images/product-icons/landing-page/SheepGoatInsurancePolicy.svg")}
                                                                    alt="SheepGoatInsurancePolicy"
                                                                />
                                                            </figure>
                                                            <h3>{Sheep_Goat}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/sheep-goat-insurance-policy"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Sheep and Goat Insurance') }}> {Know_More}</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/PradhanMantriFasalBimaYojna.svg")} alt="" /></figure>
                                                            <h3>{Pradhan_mantri}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/pradhan-mantri-fasal-bima-yojna"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('PMFBY') }}> {Know_More}</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure> <img src={require("../../assets/images/product-icons/landing-page/GraminSamriddhiBima.svg")} alt="" /></figure>
                                                            <h3>{Gramin_Samridhi}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/gramin-samriddhi-bima"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Gramin Samriddhi Bima') }}> {Know_More}</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </div>
                )}
            </>
        )
    }

}

export default BaseRuralProduct;