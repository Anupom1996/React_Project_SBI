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

    render(){
        return(
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
                    Liability Products
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <ul className="product-list">
                            <li>
                                <div className="prod-box">
                                <figure> <img src={require("../../assets/images/product-icons/landing-page/DirectorsAndOfficers.svg")} alt="DirectorsAndOfficers" /></figure>
                                <h3>Directors & Officers Liability Insurance</h3>
                                <div className="prod-content">
                                    <ul></ul>
                                </div>
                                <div className="prod-btn-holder">
                                    <Link to={"/directors-and-officers"} className="btn-more" 
                                    onClick={()=>{this.gtmClickHandler('Directors & Officers Liability')}}>Know More</Link>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="prod-box">
                                <figure> <img src={require("../../assets/images/product-icons/landing-page/ErrorsAndOmissions.svg")} alt="ErrorsAndOmissions" /></figure>
                                <h3>Errors and Omission Liability Insurance</h3>
                                <div className="prod-content">
                                    <ul></ul>
                                </div>
                                <div className="prod-btn-holder">
                                    <Link to={"/errors-and-omissions"} className="btn-more" 
                                    onClick={()=>{this.gtmClickHandler('Errors and Omission Liability')}}>Know More</Link>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="prod-box">
                                <figure> <img src={require("../../assets/images/product-icons/landing-page/EventCancellation.svg")} alt="EventCancellation" /></figure>
                                <h3>Event Cancellation Insurance Policy</h3>
                                <div className="prod-content">
                                    <ul></ul>
                                </div>
                                <div className="prod-btn-holder">
                                    <Link to={"/event-cancellation"} className="btn-more" 
                                    onClick={()=>{this.gtmClickHandler('Event Cancellation Insurance')}}>Know More</Link>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="prod-box">
                                <figure> <img src={require("../../assets/images/product-icons/landing-page/BroadformLiability.svg")} alt="BroadformLiability" /></figure>
                                <h3>Broad Form Liability</h3>
                                <div className="prod-content">
                                    <ul></ul>
                                </div>
                                <div className="prod-btn-holder">
                                    <Link to={"/broadform-liability"} className="btn-more" 
                                    onClick={()=>{this.gtmClickHandler('Broad Form Liability')}}>Know More</Link>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="prod-box">
                                <figure> <img src={require("../../assets/images/product-icons/landing-page/ProductLiability.svg")} alt="ProductLiability" /></figure>
                                <h3>Product Liability Insurance Policy</h3>
                                <div className="prod-content">
                                    <ul></ul>
                                </div>
                                <div className="prod-btn-holder">
                                    <Link to={"/product-liability"} className="btn-more" 
                                    onClick={()=>{this.gtmClickHandler('Product Liability Insurance')}}>Know More</Link>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="prod-box">
                                <figure> <img src={require("../../assets/images/product-icons/landing-page/PublicLiability.svg")} alt="PublicLiability" /></figure>
                                <h3>Public Liability Insurance Act Policy</h3>
                                <div className="prod-content">
                                    <ul></ul>
                                </div>
                                <div className="prod-btn-holder">
                                    <Link to={"/public-liability"} className="btn-more" 
                                    onClick={()=>{this.gtmClickHandler('Public Liability Insurance Act Policy')}}>Know More</Link>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="prod-box">
                                <figure> <img src={require("../../assets/images/product-icons/landing-page/ClinicalTrialNoFault.svg")} alt="ClinicalTrialNoFault" /></figure>
                                <h3>Clinical Trial (No Fault) Insurance</h3>
                                <div className="prod-content">
                                    <ul></ul>
                                </div>
                                <div className="prod-btn-holder">
                                    <Link to={"/clinical-trial-no-fault"} className="btn-more" 
                                    onClick={()=>{this.gtmClickHandler('Clinical Trial (No Fault) Insurance')}}>Know More</Link>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="prod-box">
                                <figure> <img src={require("../../assets/images/product-icons/landing-page/EmployeesCompensation.svg")} alt="EmployeesCompensation" /></figure>
                                <h3>Employees Compensation Policy</h3>
                                <div className="prod-content">
                                    <ul></ul>
                                </div>
                                <div className="prod-btn-holder">
                                    <Link to={"/employees-compensation-ec"} className="btn-more" 
                                    onClick={()=>{this.gtmClickHandler('Employees Compensation Policy')}}>Know More</Link>
                                </div>
                                </div>
                            </li>                    
                            <li>
                                <div className="prod-box">
                                <figure> <img src={require("../../assets/images/product-icons/landing-page/PublicLiabilityAct.svg")} alt="PublicLiabilityAct" /></figure>
                                <h3>Public Liability Insurance Policy</h3>
                                <div className="prod-content">
                                    <ul></ul>
                                </div>
                                <div className="prod-btn-holder">
                                    <Link to={"/public-liability-act"} className="btn-more" 
                                    onClick={()=>{this.gtmClickHandler('Public Liability Insurance Policy')}}>Know More</Link>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="prod-box">
                                <figure> <img src={require("../../assets/images/product-icons/landing-page/CommercialGeneralLiability.svg")} alt="CommercialGeneralLiability" /></figure>
                                <h3>Commercial General Liability Insurance Policy</h3>
                                <div className="prod-content">
                                    <ul></ul>
                                </div>
                                <div className="prod-btn-holder">
                                    <Link to={"/commercial-general-liability"} className="btn-more" 
                                    onClick={()=>{this.gtmClickHandler('Commercial General Liability Insurance Policy')}}>Know More</Link>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="prod-box">
                                <figure> <img src={require("../../assets/images/product-icons/landing-page/CyberDefenseInsurance.svg")} alt="CyberDefenseInsurance" /></figure>
                                <h3>Cyber Defense Insurance</h3>
                                <div className="prod-content">
                                    <ul></ul>
                                </div>
                                <div className="prod-btn-holder">
                                    <Link to={"/cyber-defense-insurance"} className="btn-more" 
                                    onClick={()=>{this.gtmClickHandler('Cyber Defense Insurance')}}>Know More</Link>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="prod-box">
                                <figure> <img src={require("../../assets/images/product-icons/landing-page/ClinicalTrialProfessionalliability.svg")} alt="ClinicalTrialProfessionalliability" /></figure>
                                <h3>Clinical Trial (Professional Liability) Insurance</h3>
                                <div className="prod-content">
                                    <ul></ul>
                                </div>
                                <div className="prod-btn-holder">
                                    <Link to={"/clinical-trial-professional-liability"} className="btn-more" 
                                    onClick={()=>{this.gtmClickHandler('Clinical Trial (Professional Liability) Insurance')}}>Know More</Link>
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
                        Liability Products
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
                                    <h3>Directors & Officers Liability Insurance</h3>
                                    <div className="prod-content">
                                        <ul></ul>
                                    </div>
                                    <div className="prod-btn-holder">
                                        <Link to={"/directors-and-officers"} className="btn-more" 
                                    onClick={()=>{this.gtmClickHandler('Directors & Officers Liability Insurance')}}>Know More</Link>
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
                                    <h3>Errors and Omission Liability Insurance</h3>
                                    <div className="prod-content">
                                        <ul></ul>
                                    </div>
                                    <div className="prod-btn-holder">
                                        <Link to={"/errors-and-omissions"} className="btn-more" 
                                    onClick={()=>{this.gtmClickHandler('Errors and Omission Liability Insurance')}}>Know More</Link>
                                    </div>
                                    </div>
                                </li>                                
                                <li>
                                    <div className="prod-box">
                                        <figure>
                                            <img src={require("../../assets/images/product-icons/landing-page/EventCancellation.svg")} alt="EventCancellation" />
                                        </figure>
                                        <h3>Event Cancellation Insurance Policy</h3>
                                        <div className="prod-content">
                                            <ul></ul>
                                        </div>
                                        <div className="prod-btn-holder">
                                            <Link to={ "/event-cancellation" } className="btn-more" 
                                    onClick={()=>{this.gtmClickHandler('Event Cancellation Insurance')}}>Know More</Link>
                                        </div>
                                    </div>
                                </li>                                
                                <li>
                                    <div className="prod-box">
                                        <figure>
                                            <img src={require("../../assets/images/product-icons/landing-page/BroadformLiability.svg")} alt="BroadformLiability" />
                                        </figure>
                                        <h3>Broad Form Liability</h3>
                                        <div className="prod-content">
                                            <ul></ul>
                                        </div>
                                        <div className="prod-btn-holder">
                                            <Link to={"/broadform-liability"} className="btn-more" 
                                    onClick={()=>{this.gtmClickHandler('Broad Form Liability')}}>Know More</Link>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="prod-box">
                                        <figure>
                                            <img src={require("../../assets/images/product-icons/landing-page/ProductLiability.svg")} alt="ProductLiability" />
                                        </figure>
                                        <h3>Product Liability Insurance Policy</h3>
                                        <div className="prod-content">
                                            <ul></ul>
                                        </div>
                                        <div className="prod-btn-holder">
                                            <Link to={"/product-liability"} className="btn-more" 
                                    onClick={()=>{this.gtmClickHandler('Product Liability Insurance')}}>Know More</Link>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="prod-box">
                                        <figure>
                                            <img src={require("../../assets/images/product-icons/landing-page/PublicLiability.svg")} alt="PublicLiability" />
                                        </figure>
                                        <h3>Public Liability Insurance Act Policy</h3>
                                        <div className="prod-content">
                                            <ul></ul>
                                        </div>
                                        <div className="prod-btn-holder">
                                            <Link to={"/public-liability"} className="btn-more" 
                                    onClick={()=>{this.gtmClickHandler('Public Liability Insurance Act Policy')}}>Know More</Link>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="prod-box">
                                        <figure>
                                            <img src={require("../../assets/images/product-icons/landing-page/ClinicalTrialNoFault.svg")} alt="ClinicalTrialNoFault" />
                                        </figure>
                                        <h3>Clinical Trial (No Fault) Insurance</h3>
                                        <div className="prod-content">
                                            <ul></ul>
                                        </div>
                                        <div className="prod-btn-holder">
                                            <Link to={"/clinical-trial-no-fault"} className="btn-more" 
                                    onClick={()=>{this.gtmClickHandler('Clinical Trial (No Fault) Insurance')}}>Know More</Link>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="prod-box">
                                        <figure>
                                            <img src={require("../../assets/images/product-icons/landing-page/EmployeesCompensation.svg")} alt="EmployeesCompensation" />
                                        </figure>
                                        <h3>Employees Compensation Policy</h3>
                                        <div className="prod-content">
                                            <ul></ul>
                                        </div>
                                        <div className="prod-btn-holder">
                                            <Link to={"/employees-compensation-ec"} className="btn-more" 
                                    onClick={()=>{this.gtmClickHandler('Employees Compensation Policy')}}>
                                            Know More
                                            </Link>
                                        </div>
                                    </div>
                                </li>                        
                                <li>
                                    <div className="prod-box">
                                        <figure>
                                            <img src={require("../../assets/images/product-icons/landing-page/PublicLiabilityAct.svg")} alt="PublicLiabilityAct" />
                                        </figure>
                                        <h3>Public Liability Insurance Policy</h3>
                                        <div className="prod-content">
                                            <ul></ul>
                                        </div>
                                        <div className="prod-btn-holder">
                                            <Link to={"/public-liability-act"} className="btn-more" 
                                    onClick={()=>{this.gtmClickHandler('Public Liability Insurance Policy')}}>Know More</Link>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="prod-box">
                                        <figure>
                                            <img src={require("../../assets/images/product-icons/landing-page/CommercialGeneralLiability.svg")} alt="CommercialGeneralLiability" />
                                        </figure>
                                        <h3>Commercial General Liability Insurance Policy</h3>
                                        <div className="prod-content">
                                            <ul></ul>
                                        </div>
                                        <div className="prod-btn-holder">
                                            <Link to={"/commercial-general-liability"} className="btn-more" 
                                    onClick={()=>{this.gtmClickHandler('Commercial General Liability Insurance')}}>Know More</Link>
                                        </div>
                                    </div>
                                </li> 
                                <li>
                                    <div className="prod-box">
                                        <figure>
                                            <img src={require("../../assets/images/product-icons/landing-page/CyberDefenseInsurance.svg")} alt="CyberDefenseInsurance" />
                                        </figure>
                                        <h3>Cyber Defense Insurance</h3>
                                        <div className="prod-content">
                                            <ul></ul>
                                        </div>
                                        <div className="prod-btn-holder">
                                            <Link to={"/cyber-defense-insurance"} className="btn-more" 
                                    onClick={()=>{this.gtmClickHandler('Cyber Defense Insurance')}}>Know More</Link>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="prod-box">
                                        <figure>
                                            <img src={require("../../assets/images/product-icons/landing-page/ClinicalTrialProfessionalliability.svg")} alt="ClinicalTrialProfessionalliability"  />
                                        </figure>
                                        <h3>Clinical Trial (Professional Liability) Insurance</h3>
                                        <div className="prod-content">
                                            <ul></ul>
                                        </div>
                                        <div className="prod-btn-holder">
                                            <Link to={"/clinical-trial-professional-liability"} className="btn-more" 
                                    onClick={()=>{this.gtmClickHandler('Clinical Trial (Professional Liability) Insurance')}}>Know More</Link>
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