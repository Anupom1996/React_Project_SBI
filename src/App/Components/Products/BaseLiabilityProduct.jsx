import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import { Nav, Row, Col, Tab, Accordion, Card, Button } from "react-bootstrap";

class BaseLiabilityProduct extends Component {

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
        let Event_Cancellation_Insurance_Policy, Broad_Form_Liability, Product_Liability_Insurance_Policy,
            Clinical_Trial_Insurance, Employees_Compensation_Policy, Public_Liability_Insurance_Policy,
            Commercial_General_Liability_Insurance_Policy, Cyber_Defense_Insurance,Know_More, Public_liability_Act, Laibility_Product,
            Clinical_Trial_Professional_Liability_Insurance, Errors_And_Opmission, Direcotors_And_Officers;
        if (lang_name === 'en') {
            
            Know_More = sbiHomeData &&
            sbiHomeData['PRODUCTS_KNOW_MORE']
            && sbiHomeData['PRODUCTS_KNOW_MORE'].content_en;
            Event_Cancellation_Insurance_Policy = sbiHomeData &&
                sbiHomeData['PRODUCTS_LIABILITY_EVENT_CANCELEATION']
                && sbiHomeData['PRODUCTS_LIABILITY_EVENT_CANCELEATION'].content_en;
            Broad_Form_Liability = sbiHomeData &&
                sbiHomeData['PRODUCTS_LIABILITY_BOARD']
                && sbiHomeData['PRODUCTS_LIABILITY_BOARD'].content_en;
            Product_Liability_Insurance_Policy = sbiHomeData &&
                sbiHomeData['PRODUCTS_LIABILITY_P_L_POLICY']
                && sbiHomeData['PRODUCTS_LIABILITY_P_L_POLICY'].content_en;
            Clinical_Trial_Insurance = sbiHomeData &&
                sbiHomeData['PRODUCTS_LIABILITY_CLINICAL']
                && sbiHomeData['PRODUCTS_LIABILITY_CLINICAL'].content_en;
            Employees_Compensation_Policy = sbiHomeData &&
                sbiHomeData['PRODUCTS_LIABILITY_EMPLOYEES']
                && sbiHomeData['PRODUCTS_LIABILITY_EMPLOYEES'].content_en;
            Public_Liability_Insurance_Policy = sbiHomeData &&
                sbiHomeData['PRODUCTS_LIABILITY_PUBLIC']
                && sbiHomeData['PRODUCTS_LIABILITY_PUBLIC'].content_en;
            Commercial_General_Liability_Insurance_Policy = sbiHomeData &&
                sbiHomeData['PRODUCTS_LIABILITY_COMMERCIAL']
                && sbiHomeData['PRODUCTS_LIABILITY_COMMERCIAL'].content_en;
            Cyber_Defense_Insurance = sbiHomeData &&
                sbiHomeData['PRODUCTS_LIABILITY_CYBER']
                && sbiHomeData['PRODUCTS_LIABILITY_CYBER'].content_en;
            Clinical_Trial_Professional_Liability_Insurance = sbiHomeData &&
                sbiHomeData['PRODUCTS_LIABILITY_CLINICAL_TRIAL']
                && sbiHomeData['PRODUCTS_LIABILITY_CLINICAL_TRIAL'].content_en;
            Errors_And_Opmission = sbiHomeData &&
                sbiHomeData['PRODUCTS_LIABILITY_ERROR_AND_OPMISSION']
                && sbiHomeData['PRODUCTS_LIABILITY_ERROR_AND_OPMISSION'].content_en;
            Direcotors_And_Officers = sbiHomeData &&
                sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_AND_OFFICERS']
                && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_AND_OFFICERS'].content_en;
            Public_liability_Act = sbiHomeData &&
                sbiHomeData['PRODUCTS_LIABILITY_PUBLIC_HEADING']
                && sbiHomeData['PRODUCTS_LIABILITY_PUBLIC_HEADING'].content_en;
            Laibility_Product = sbiHomeData &&
                sbiHomeData['PRODUCTS_LIABILITY_PRODUCT']
                && sbiHomeData['PRODUCTS_LIABILITY_PRODUCT'].content_en;






        } else {
            Event_Cancellation_Insurance_Policy = sbiHomeData &&
                sbiHomeData['PRODUCTS_LIABILITY_EVENT_CANCELEATION']
                && sbiHomeData['PRODUCTS_LIABILITY_EVENT_CANCELEATION'].content_hi;
            Broad_Form_Liability = sbiHomeData &&
                sbiHomeData['PRODUCTS_LIABILITY_BOARD']
                && sbiHomeData['PRODUCTS_LIABILITY_BOARD'].content_hi;
            Product_Liability_Insurance_Policy = sbiHomeData &&
                sbiHomeData['PRODUCTS_LIABILITY_P_L_POLICY']
                && sbiHomeData['PRODUCTS_LIABILITY_P_L_POLICY'].content_hi;
            Clinical_Trial_Insurance = sbiHomeData &&
                sbiHomeData['PRODUCTS_LIABILITY_CLINICAL']
                && sbiHomeData['PRODUCTS_LIABILITY_CLINICAL'].content_hi;
            Employees_Compensation_Policy = sbiHomeData &&
                sbiHomeData['PRODUCTS_LIABILITY_EMPLOYEES']
                && sbiHomeData['PRODUCTS_LIABILITY_EMPLOYEES'].content_hi;
            Public_Liability_Insurance_Policy = sbiHomeData &&
                sbiHomeData['PRODUCTS_LIABILITY_PUBLIC']
                && sbiHomeData['PRODUCTS_LIABILITY_PUBLIC'].content_hi;
            Commercial_General_Liability_Insurance_Policy = sbiHomeData &&
                sbiHomeData['PRODUCTS_LIABILITY_COMMERCIAL']
                && sbiHomeData['PRODUCTS_LIABILITY_COMMERCIAL'].content_hi;
            Cyber_Defense_Insurance = sbiHomeData &&
                sbiHomeData['PRODUCTS_LIABILITY_CYBER']
                && sbiHomeData['PRODUCTS_LIABILITY_CYBER'].content_hi;
                Know_More = sbiHomeData &&
                sbiHomeData['PRODUCTS_KNOW_MORE']
                && sbiHomeData['PRODUCTS_KNOW_MORE'].content_hi;
            Clinical_Trial_Professional_Liability_Insurance = sbiHomeData &&
                sbiHomeData['PRODUCTS_LIABILITY_CLINICAL_TRIAL']
                && sbiHomeData['PRODUCTS_LIABILITY_CLINICAL_TRIAL'].content_hi;
            Errors_And_Opmission = sbiHomeData &&
                sbiHomeData['PRODUCTS_LIABILITY_ERROR_AND_OPMISSION']
                && sbiHomeData['PRODUCTS_LIABILITY_ERROR_AND_OPMISSION'].content_hi;
            Direcotors_And_Officers = sbiHomeData &&
                sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_AND_OFFICERS']
                && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_AND_OFFICERS'].content_hi;
            Public_liability_Act = sbiHomeData &&
                sbiHomeData['PRODUCTS_LIABILITY_PUBLIC_HEADING']
                && sbiHomeData['PRODUCTS_LIABILITY_PUBLIC_HEADING'].content_hi;
            Laibility_Product = sbiHomeData &&
                sbiHomeData['PRODUCTS_LIABILITY_PRODUCT']
                && sbiHomeData['PRODUCTS_LIABILITY_PRODUCT'].content_hi;


        }

        return (
            <>
                {isMobile ? ( //For Mobil View
                    <div className="faqContent">
                        <section className="faQinsuranceMain" id="WithdrawnTab">
                            <Accordion defaultActiveKey="0">
                                <Card>
                                    <Accordion.Toggle
                                        as={Button}
                                        variant="link"
                                        eventKey="0"
                                        onClick={e => this.toggleAccordianBtn(e)}
                                        className={"accordianBtn"}
                                    >
                                        {Laibility_Product}
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <ul className="product-list">
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/DirectorsAndOfficers.svg")} alt="DirectorsAndOfficers" /></figure>
                                                        <h3>{Direcotors_And_Officers}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/directors-and-officers"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Directors & Officers Liability') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/ErrorsAndOmissions.svg")} alt="ErrorsAndOmissions" /></figure>
                                                        <h3>{Errors_And_Opmission}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/errors-and-omissions"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Errors and Omission Liability') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/EventCancellation.svg")} alt="EventCancellation" /></figure>
                                                        <h3>{Event_Cancellation_Insurance_Policy}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/event-cancellation"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Event Cancellation Insurance') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/BroadformLiability.svg")} alt="BroadformLiability" /></figure>
                                                        <h3>{Broad_Form_Liability}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/broadform-liability"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Broad Form Liability') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/ProductLiability.svg")} alt="ProductLiability" /></figure>
                                                        <h3>{Product_Liability_Insurance_Policy}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/product-liability"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Product Liability Insurance') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/PublicLiability.svg")} alt="PublicLiability" /></figure>
                                                        <h3>{Public_liability_Act}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/public-liability"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Public Liability Insurance Act Policy') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/ClinicalTrialNoFault.svg")} alt="ClinicalTrialNoFault" /></figure>
                                                        <h3>{Clinical_Trial_Insurance}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/clinical-trial-no-fault"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Clinical Trial (No Fault) Insurance') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/EmployeesCompensation.svg")} alt="EmployeesCompensation" /></figure>
                                                        <h3>{Employees_Compensation_Policy}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/employees-compensation-ec"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Employees Compensation Policy') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/PublicLiabilityAct.svg")} alt="PublicLiabilityAct" /></figure>
                                                        <h3>{Public_Liability_Insurance_Policy}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/public-liability-act"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Public Liability Insurance Policy') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/CommercialGeneralLiability.svg")} alt="CommercialGeneralLiability" /></figure>
                                                        <h3>{Commercial_General_Liability_Insurance_Policy}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/commercial-general-liability"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Commercial General Liability Insurance Policy') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/CyberDefenseInsurance.svg")} alt="CyberDefenseInsurance" /></figure>
                                                        <h3>{Cyber_Defense_Insurance}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/cyber-defense-insurance"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Cyber Defense Insurance') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/ClinicalTrialProfessionalliability.svg")} alt="ClinicalTrialProfessionalliability" /></figure>
                                                        <h3>{Clinical_Trial_Professional_Liability_Insurance}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/clinical-trial-professional-liability"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Clinical Trial (Professional Liability) Insurance') }}>{Know_More}</Link>
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
                            defaultActiveKey="WithdrawnProducts"
                        >
                            <Row className="prod-tab-inner">
                                <Col sm={12}>
                                    <Nav
                                        variant="pills"
                                        className="flex-row justify-content-center align-items-center"
                                    >
                                        <Nav.Item>
                                            <Nav.Link eventKey="WithdrawnProducts">
                                                {Laibility_Product}
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={12}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="WithdrawnProducts">
                                            <div className="prod-tab-content-step-two">
                                                <ul className="product-list">
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/DirectorsAndOfficers.svg")} alt="DirectorsAndOfficers" />
                                                            </figure>

                                                            <h3>{Direcotors_And_Officers}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/directors-and-officers"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Directors & Officers Liability Insurance') }}>{Know_More}</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img
                                                                    src={require("../../assets/images/product-icons/landing-page/ErrorsAndOmissions.svg")}
                                                                    alt="ErrorsAndOmissions"
                                                                />
                                                            </figure>
                                                            <h3>{Errors_And_Opmission}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/errors-and-omissions"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Errors and Omission Liability Insurance') }}>{Know_More}</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/EventCancellation.svg")} alt="EventCancellation" />
                                                            </figure>
                                                            <h3>{Event_Cancellation_Insurance_Policy}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/event-cancellation"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Event Cancellation Insurance') }}>{Know_More}</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/BroadformLiability.svg")} alt="BroadformLiability" />
                                                            </figure>
                                                            <h3>{Broad_Form_Liability}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/broadform-liability"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Broad Form Liability') }}>{Know_More}</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/ProductLiability.svg")} alt="ProductLiability" />
                                                            </figure>
                                                            <h3>{Product_Liability_Insurance_Policy}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/product-liability"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Product Liability Insurance') }}>{Know_More}</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/PublicLiability.svg")} alt="PublicLiability" />
                                                            </figure>

                                                            <h3>{Public_liability_Act}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/public-liability"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Public Liability Insurance Act Policy') }}>{Know_More}</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/ClinicalTrialNoFault.svg")} alt="ClinicalTrialNoFault" />
                                                            </figure>
                                                            <h3>{Clinical_Trial_Insurance}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/clinical-trial-no-fault"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Clinical Trial (No Fault) Insurance') }}>{Know_More}</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/EmployeesCompensation.svg")} alt="EmployeesCompensation" />
                                                            </figure>
                                                            <h3>{Employees_Compensation_Policy}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/employees-compensation-ec"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Employees Compensation Policy') }}>
                                                                    {Know_More}
                                            </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/PublicLiabilityAct.svg")} alt="PublicLiabilityAct" />
                                                            </figure>
                                                            <h3>{Public_Liability_Insurance_Policy}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/public-liability-act"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Public Liability Insurance Policy') }}>{Know_More}</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/CommercialGeneralLiability.svg")} alt="CommercialGeneralLiability" />
                                                            </figure>
                                                            <h3>{Commercial_General_Liability_Insurance_Policy}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/commercial-general-liability"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Commercial General Liability Insurance') }}>{Know_More}</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/CyberDefenseInsurance.svg")} alt="CyberDefenseInsurance" />
                                                            </figure>
                                                            <h3>{Cyber_Defense_Insurance}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/cyber-defense-insurance"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Cyber Defense Insurance') }}>{Know_More}</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/ClinicalTrialProfessionalliability.svg")} alt="ClinicalTrialProfessionalliability" />
                                                            </figure>
                                                            <h3>{Clinical_Trial_Professional_Liability_Insurance}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/clinical-trial-professional-liability"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Clinical Trial (Professional Liability) Insurance') }}>{Know_More}</Link>
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

export default BaseLiabilityProduct;