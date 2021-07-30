import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import { Nav, Row, Col, Tab, Accordion, Card, Button } from "react-bootstrap";
import * as AppConstant from "../AppConstant";

class BaseRetailProduct extends Component {

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
        console.log(ParentID);
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

      gtmNavHandler = (productCategory,productGroup) => {
        window.dataLayer = window.dataLayer || [];
        const data = {
          'event': 'product_listing_page_1_product_navigation_click',
          'pagetype': 'product_listing_page',
          'product_category': productCategory,
          'product_group':productGroup
        };
        window.dataLayer.push(data);
      }

    render() {
        let redirectUrl = AppConstant.TRANSACTION_API_BASE_URL;
        let appUrl = AppConstant.APP_URL;
        return (
            <>
                {isMobile ? ( //For Mobil View
                    <div className="faqContent">
                        <section className="faQinsuranceMain" id="RetailTab">
                            <Accordion defaultActiveKey="0">
                            <Card>
                                    <Accordion.Toggle
                                        as={Button}
                                        variant="link"
                                        eventKey="1"
                                        onClick={e => this.toggleAccordianBtn(e)}
                                    >
                                       Covid-19
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                            <ul className="product-list">                                               
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/covid-19.svg")} alt="" />
                                                        </figure>
                                                        <h3>Corona Kavach Policy</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/covid-kavach"} className="btn-more" 
                                                            onClick={()=>{this.gtmClickHandler('Corona Kavach')}}>
                                                                Know More
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/covid-19.svg")} alt="" />
                                                        </figure>
                                                        <h3>Corona Rakshak Policy</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/corona-rakshak"} className="btn-more" 
                                                            onClick={()=>{this.gtmClickHandler('Corona Rakshak')}}>
                                                                Know More
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>  
                            {/*<Card>
                                    <Accordion.Toggle
                                        as={Button}
                                        variant="link"
                                        eventKey="1"
                                        onClick={e => this.toggleAccordianBtn(e)}
                                    >
                                       Shagun - Gift an insurance
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                            <ul className="product-list">                                               
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/Shagun.svg")} alt="" />
                                                        </figure>
                                                        <h3>Shagun</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/shagun"} className="btn-more" 
                                                            onClick={()=>{this.gtmClickHandler('Shagun')}}>
                                                                Know More
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </Card.Body>
                                    </Accordion.Collapse>
                            </Card>*/}
                                <Card>
                                    <Accordion.Toggle
                                        as={Button}
                                        variant="link"
                                        eventKey="0"
                                        onClick={e => this.toggleAccordianBtn(e)}
                                        className={"accordianBtn"}
                                    >
                                        Health Insurance
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <ul className="product-list">
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/ArogyaSanjeevni.svg")} alt="ArogyaSanjeevni" />
                                                        </figure>
                                                        <h3>Arogya Sanjeevani Policy, SBI General Insurance Company Limited</h3>
                                                        <div className="prod-content">
                                                            <ul>
                                                                <li></li>
                                                            </ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            {/* <Link to={"/health-insurance/arogya-sanjeevani-policy"} className="btn-more">
                                                                Know More
                                                            </Link> */}
                                                            <a href={ appUrl + "/health-insurance/arogya-sanjeevani-policy" } rel="noopener noreferrer" 
                                                            className="btn-more" onClick={()=>{this.gtmClickHandler('Arogya Sanjeevani Policy')}}>Know More</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/ArogyaPremier.svg")} alt="" />
                                                        </figure>
                                                        <h3>Arogya Premier Policy</h3>
                                                        <div className="prod-content">
                                                            <ul>
                                                                <li> </li>
                                                            </ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            {/* <Link to={"/health-insurance/arogya-premier-policy"} className="btn-more">
                                                                Know More
                                                            </Link> */}
                                                             <a href={ appUrl + "/health-insurance/arogya-premier-policy" } rel="noopener noreferrer" 
                                                             className="btn-more" onClick={()=>{this.gtmClickHandler('Arogya Premier Policy')}}>Know More</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/ArogyaPlus.svg")} alt="" />
                                                        </figure>
                                                        <h3>Arogya Plus Policy</h3>
                                                        <div className="prod-content">
                                                            <ul>
                                                                <li></li>
                                                            </ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            {/* <Link to={"/health-insurance/arogya-plus-policy"} className="btn-more">
                                                                Know More
                                                            </Link> */}
                                                            <a href={ appUrl + "/health-insurance/arogya-plus-policy" } rel="noopener noreferrer" 
                                                            className="btn-more" onClick={()=>{this.gtmClickHandler('Arogya Plus Policy')}}>Know More</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/ArogyaTopupPolicy.svg")} alt="" />
                                                        </figure>
                                                        <h3>Arogya Top up Policy</h3>
                                                        <div className="prod-content">
                                                            <ul>
                                                                <li></li>
                                                            </ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            {/* <Link to={"/health-insurance/arogya-topup-policy"} className="btn-more">
                                                                Know More
                                                            </Link> */}
                                                            <a href={ appUrl + "/health-insurance/arogya-topup-policy" } rel="noopener noreferrer" 
                                                            className="btn-more" onClick={()=>{this.gtmClickHandler('Arogya Top up Policy')}}>Know More</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/HealthInsurance.svg")} alt="" />
                                                        </figure>
                                                        <h3>Retail Health Insurance Policy</h3>
                                                        <div className="prod-content">
                                                            <ul>
                                                                <li></li>
                                                            </ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            {/* <Link to={"/health-insurance/retail-health"} className="btn-more">
                                                                Know More
                                                            </Link> */}
                                                            <a href={ appUrl + "/health-insurance/retail-health" } rel="noopener noreferrer" 
                                                            className="btn-more" onClick={()=>{this.gtmClickHandler('Retail Health Insurance Policy')}}>Know More</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/CriticalillnessInsurancePolicy.svg")} alt="" />
                                                        </figure>
                                                        <h3>Critical Illness Insurance Policy</h3>
                                                        <div className="prod-content">
                                                            <ul>
                                                                <li></li>
                                                            </ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            {/* <Link to={"/health-insurance/critical-illness-insurance"} className="btn-more">
                                                                Know More
                                                            </Link> */}
                                                             <a href={ appUrl + "/health-insurance/critical-illness-insurance" } rel="noopener noreferrer" 
                                                             className="btn-more" onClick={()=>{this.gtmClickHandler('Critical Illness Insurance Policy')}}>Know More</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/HospitalDailyCash.svg")} alt="" />
                                                        </figure>
                                                        <h3>Hospital Daily Cash Insurance Policy</h3>
                                                        <div className="prod-content">
                                                            <ul>
                                                                <li></li>
                                                            </ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            {/* <Link to={"/health-insurance/hospital-daily-cash"} className="btn-more">
                                                                Know More
                                                            </Link> */}
                                                            <a href={ appUrl + "/health-insurance/hospital-daily-cash" } rel="noopener noreferrer" 
                                                            className="btn-more" onClick={()=>{this.gtmClickHandler('Hospital Daily Cash Insurance Policy')}}>Know More</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/GroupHealthInsurance-SBI.svg")} alt="" />
                                                        </figure>
                                                        <h3>Group Health Insurance - SBI</h3>
                                                        <div className="prod-content">
                                                            <ul>
                                                                <li></li>
                                                            </ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <a href={ appUrl + "/health-insurance/group-health-insurance" } rel="noopener noreferrer" 
                                                            className="btn-more" onClick={()=>{this.gtmClickHandler('Group Health Insurance - SBI')}}>Know More</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/LoanInsurance.svg")} alt="" />
                                                        </figure>
                                                        <h3>Loan Insurance Policy</h3>
                                                        <div className="prod-content">
                                                            <ul>
                                                                <li></li>
                                                            </ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <a href={ appUrl + "/health-insurance/loan-insurance" } rel="noopener noreferrer" 
                                                            className="btn-more" onClick={()=>{this.gtmClickHandler('Loan Insurance Policy')}}>Know More</a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle
                                        as={Button}
                                        variant="link"
                                        eventKey="1"
                                        onClick={e => this.toggleAccordianBtn(e)}
                                    >
                                        Home Insurance
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                            <ul className="product-list">
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/LongTermHomeInsurance.svg")} alt="" />
                                                        </figure>
                                                        <h3>Long Term Home Insurance Policy</h3>
                                                        <div className="prod-content">
                                                            <ul>
                                                                <li></li>
                                                            </ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            {/* <Link to={"/home-insurance/long-term-home-insurance"} className="btn-more">
                                                                Know Mor
                                                            </Link> */}
                                                            <a href={ appUrl + "/home-insurance/long-term-home-insurance" } rel="noopener noreferrer" 
                                                            className="btn-more" onClick={()=>{this.gtmClickHandler('Long Term Home Insurance Policy')}}>Know More</a>
                                                            <a href={redirectUrl + "/lth/lthHome"} target="_blank" rel="noopener noreferrer" 
                                                            className="btn-quote" onClick={()=>{this.gtmClickHandler('Long Term Home Insurance Policy')}}>Get a Quote</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/SimpleHomeInsurance.svg")} alt="" />
                                                        </figure>
                                                        <h3>Simple Home Insurance Policy</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <a href={ appUrl + "/home-insurance/simple-home-insurance" } rel="noopener noreferrer" 
                                                            className="btn-more" onClick={()=>{this.gtmClickHandler('Simple Home Insurance Policy')}}>Know More</a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle
                                        as={Button}
                                        variant="link"
                                        eventKey="2"
                                        onClick={e => this.toggleAccordianBtn(e)}
                                    >
                                        Travel Insurance
                        </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body>
                                            <ul className="product-list">
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/TravelInsurance.svg")} alt="" />
                                                        </figure>
                                                        <h3>Travel Insurance (Business and Holiday)</h3>
                                                        <div className="prod-content">
                                                            <ul>
                                                                <li></li>
                                                            </ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            {/* <Link to={"/travel-insurance"} className="btn-more">
                                                                Know More
                                                            </Link> */}
                                                            <a href={ appUrl + "/travel-insurance" } rel="noopener noreferrer" 
                                                            className="btn-more" onClick={()=>{this.gtmClickHandler('Travel Insurance (Business and Holiday)')}}>Know More</a>
                                                            <a href={redirectUrl + "/travel/product"} target="_blank" rel="noopener noreferrer" 
                                                            className="btn-quote" onClick={()=>{this.gtmClickHandler('Travel Insurance (Business and Holiday)')}}>Get a Quote</a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle
                                        as={Button}
                                        variant="link"
                                        eventKey="3"
                                        onClick={e => this.toggleAccordianBtn(e)}
                                    >
                                        Motor Insurance
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body>
                                            <ul className="product-list">
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/MotorTwoWheeler.svg")} alt="" />
                                                        </figure>
                                                        <h3>Two Wheeler Insurance</h3>
                                                        <div className="prod-content">
                                                            <ul>
                                                                <li></li>
                                                            </ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            {/* <Link to={"/motor-insurance/two-wheeler-insurance"} className="btn-more">Know More</Link> */}
                                                            <a href={ appUrl + "/motor-insurance/two-wheeler-insurance" } rel="noopener noreferrer" 
                                                            className="btn-more" onClick={()=>{this.gtmClickHandler('Two Wheeler Insurance')}}>Know More</a>
                                                            <a href={redirectUrl + "/M2W/GetQuote"} target="_blank" rel="noopener noreferrer" 
                                                            className="btn-quote" onClick={()=>{this.gtmClickHandler('Two Wheeler Insurance')}}>Get a Quote</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/MotorPrivateCarInsurance.svg")} alt="" />
                                                        </figure>
                                                        <h3>Private Car Insurance</h3>
                                                        <div className="prod-content">
                                                            <ul>
                                                                <li></li>
                                                            </ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            {/* <Link to={"/motor-insurance/private-car-insurance"} className="btn-more">
                                                                Know More</Link> */}
                                                            <a href={ appUrl + "/motor-insurance/private-car-insurance" } rel="noopener noreferrer" 
                                                            className="btn-more" onClick={()=>{this.gtmClickHandler('Private Car Insurance')}}>Know More</a>
                                                            <a href={redirectUrl + "/PMCAR/GetQuote"} target="_blank" rel="noopener noreferrer" 
                                                            className="btn-quote" onClick={()=>{this.gtmClickHandler('Private Car Insurance')}}>Get a Quote</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/MotorActOnlyTwoWheelerLongTerm.svg")} alt="" />
                                                        </figure>
                                                        <h3>Motor Act Only- Two Wheeler(5 Years)</h3>
                                                        <div className="prod-content">
                                                            <ul>
                                                                <li></li>
                                                            </ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                        <a href={ appUrl + "/motor-insurance/motor-act-only-two-wheeler-insurance" } rel="noopener noreferrer" 
                                                        className="btn-more" onClick={()=>{this.gtmClickHandler('Motor Act Only- Two Wheeler(5 Years)')}}>Know More</a>
                                                        {/* <Link to={"/motor-insurance/motor-act-only-two-wheeler-insurance"} className="btn-more" >Know More</Link> */}
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/LongTermTwoWheeler.svg")} alt="" />
                                                        </figure>
                                                        <h3>Long Term Two Wheeler Insurance Policy - Package</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <a href={ appUrl + "/motor-insurance/long-term-two-wheeler-insurance" } rel="noopener noreferrer" 
                                                            className="btn-more" onClick={()=>{this.gtmClickHandler('Long Term Two Wheeler Insurance Policy - Package')}}>Know More</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/MotorActOnlyPrivateCarLongTerm.svg")} alt="" />
                                                        </figure>
                                                        <h3>Motor Act Only- Private Car (3 Years)</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <a href={ appUrl + "/motor-insurance/motor-act-only-private-car-insurance" } rel="noopener noreferrer" 
                                                            className="btn-more" onClick={()=>{this.gtmClickHandler('Motor Act Only- Private Car (3 Years)')}}>Know More</a>
                                                         </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/CommercialMotorInsurance.svg")} alt="CommercialMotorInsurance" /></figure>
                                                        <h3>Motor - Trailer Insurance</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/commercial-motor-insurance"} className="btn-more" 
                                                             onClick={()=>{this.gtmClickHandler('Motor - Trailer Insurance')}}>Know More</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/TractorandOtherFarmVehiclesInsurance.svg")} alt="TractorandOtherFarmVehiclesInsurance" /></figure>
                                                        <h3>Motor Commercial Vehicle Insurance Policy Package</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/tractor-and-other-farm-vehicle-insurance"} className="btn-more" 
                                                             onClick={()=>{this.gtmClickHandler('Motor Commercial Vehicle Insurance Policy Package')}}>Know More</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/MotorActOnly.svg")} alt="MotorActOnly" /></figure>
                                                        <h3>Act Only Insurance Policy</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/motor-act-only"} className="btn-more" 
                                                             onClick={()=>{this.gtmClickHandler('Act Only Insurance Policy')}}>Know More</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle
                                        as={Button}
                                        variant="link"
                                        eventKey="4"
                                        onClick={e => this.toggleAccordianBtn(e)}
                                    >
                                        Personal Accident Insurance
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body>
                                            <ul className="product-list">
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/IndividualPersonalAccidentInsurancePolicy.svg")} alt="" />
                                                        </figure>
                                                        <h3>Individual Personal Accident</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={ "/personal-accident-insurance/individual-pa-insurance"} className="btn-more" 
                                                             onClick={()=>{this.gtmClickHandler('Individual Personal Accident')}}>Know More</Link>
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
                                defaultActiveKey="HealthInsurance"
                            >
                                <Row className="prod-tab-inner">
                                    <Col sm={12}>
                                        <Nav
                                            variant="pills"
                                            className="flex-row justify-content-center align-items-center"
                                        >
                                            <Nav.Item onClick={()=>{this.gtmNavHandler('Retail','Covid-19')}}>
                                                <Nav.Link eventKey="covid-19">
                                                COVID-19 Insurance
                                                </Nav.Link>
                                            </Nav.Item>
                                            {/*<Nav.Item onClick={()=>{this.gtmNavHandler('Retail','Shagun')}}>
                                                <Nav.Link eventKey="Shagun">
                                                    Shagun - Gift an insurance
                                                </Nav.Link>
                                            </Nav.Item>*/}
                                            <Nav.Item onClick={()=>{this.gtmNavHandler('Retail','Health')}}>
                                                <Nav.Link eventKey="HealthInsurance">
                                                    Health
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item onClick={()=>{this.gtmNavHandler('Retail','Home')}}>
                                                <Nav.Link eventKey="HomeInsurance">
                                                    Home
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item onClick={()=>{this.gtmNavHandler('Retail','Travel')}}>
                                                <Nav.Link eventKey="TravelInsurance">
                                                    Travel
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item onClick={()=>{this.gtmNavHandler('Retail','Motor')}}>
                                                <Nav.Link eventKey="MotorInsurance">
                                                    Motor
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item onClick={()=>{this.gtmNavHandler('Retail','Personal Accident')}}>
                                                <Nav.Link eventKey="PersonalAccidentInsurance">
                                                    Personal Accident
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                    <Col sm={12}>
                                        <Tab.Content>
                                        <Tab.Pane eventKey="covid-19">
                                            <div className="prod-tab-content-step-two">
                                                <ul className="product-list">
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/covid-19.svg")} alt="" />
                                                            </figure>
                                                            <h3>Corona Kavach Policy</h3>
                                                            <div className="prod-content">
                                                                <ul>
                                                                    <li></li>
                                                                </ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/covid-kavach"} className="btn-more" 
                                                                 onClick={()=>{this.gtmClickHandler('Corona Kavach Policy')}}>Know More</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/covid-19.svg")} alt="" />
                                                            </figure>
                                                            <h3>Corona Rakshak Policy</h3>
                                                            <div className="prod-content">
                                                                <ul>
                                                                    <li></li>
                                                                </ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/corona-rakshak"} className="btn-more" 
                                                                onClick={()=>{this.gtmClickHandler('Corona Rakshak Policy')}}>Know More</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    </ul>
                                                </div>
                                            </Tab.Pane>
                                        <Tab.Pane eventKey="Shagun">
                                            <div className="prod-tab-content-step-two">
                                                <ul className="product-list">
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/Shagun.svg")} alt="" />
                                                            </figure>
                                                            <h3>Shagun</h3>
                                                            <div className="prod-content">
                                                                <ul>
                                                                    <li></li>
                                                                </ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/shagun"} className="btn-more" 
                                                                 onClick={()=>{this.gtmClickHandler('Shagun')}}>Know More</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    </ul>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="HealthInsurance">
                                                <div className="prod-tab-content-step-two">
                                                    <ul className="product-list">
                                                        <li>
                                                            <div className="prod-box">
                                                                <figure>
                                                                    <img src={require("../../assets/images/product-icons/landing-page/ArogyaSanjeevni.svg")} alt="ArogyaSanjeevni" />
                                                                </figure>
                                                                <h3>Arogya Sanjeevani Policy, SBI General Insurance Company Limited</h3>
                                                                <div className="prod-content">
                                                                    <ul>
                                                                        <li></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="prod-btn-holder">
                                                                    {/* <Link to={"/health-insurance/arogya-sanjeevani-policy"} className="btn-more">
                                                                        Know More
                                                                    </Link> */}
                                                                    <a href={ appUrl + "/health-insurance/arogya-sanjeevani-policy" } rel="noopener noreferrer" 
                                                                    className="btn-more" onClick={()=>{this.gtmClickHandler('Arogya Sanjeevani Policy')}}>Know More</a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="prod-box">
                                                                <figure>
                                                                    <img src={require("../../assets/images/product-icons/landing-page/ArogyaPremier.svg")} alt="" />
                                                                </figure>
                                                                <h3>Arogya Premier Policy</h3>
                                                                <div className="prod-content">
                                                                    <ul>
                                                                        <li></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="prod-btn-holder">
                                                                    {/* <Link to={"/health-insurance/arogya-premier-policy"} className="btn-more">
                                                                        Know More
                                                                    </Link> */}
                                                                    <a href={ appUrl + "/health-insurance/arogya-premier-policy" } rel="noopener noreferrer" 
                                                                    className="btn-more" onClick={()=>{this.gtmClickHandler('Arogya Premier Policy')}}>Know More</a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="prod-box">
                                                                <figure>
                                                                    <img src={require("../../assets/images/product-icons/landing-page/ArogyaPlus.svg")} alt="" />
                                                                </figure>
                                                                <h3>Arogya Plus Policy</h3>
                                                                <div className="prod-content">
                                                                    <ul>
                                                                        <li></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="prod-btn-holder">
                                                                    {/* <Link to={"/health-insurance/arogya-plus-policy"} className="btn-more">
                                                                        Know More
                                                                    </Link> */}
                                                                    <a href={ appUrl + "/health-insurance/arogya-plus-policy" } rel="noopener noreferrer" 
                                                                    className="btn-more" onClick={()=>{this.gtmClickHandler('Arogya Plus Policy')}}>Know More</a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="prod-box">
                                                                <figure>
                                                                    <img src={require("../../assets/images/product-icons/landing-page/ArogyaTopupPolicy.svg")} alt="" />
                                                                </figure>
                                                                <h3>Arogya Top up Policy</h3>
                                                                <div className="prod-content">
                                                                    <ul>
                                                                        <li></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="prod-btn-holder">
                                                                    {/* <Link to={"/health-insurance/arogya-topup-policy"} className="btn-more" >
                                                                        Know More
                                                                    </Link> */}
                                                                    <a href={ appUrl + "/health-insurance/arogya-topup-policy" } rel="noopener noreferrer" 
                                                                    className="btn-more" onClick={()=>{this.gtmClickHandler('Arogya Top up Policy')}}>Know More</a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="prod-box">
                                                                <figure>
                                                                    <img src={require("../../assets/images/product-icons/landing-page/HealthInsurance.svg")} alt="" />
                                                                </figure>
                                                                <h3>Retail Health Insurance Policy</h3>
                                                                <div className="prod-content">
                                                                    <ul>
                                                                        <li></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="prod-btn-holder">
                                                                    {/* <Link to={"/health-insurance/retail-health"} className="btn-more">
                                                                        Know More
                                                                    </Link> */}
                                                                    <a href={ appUrl + "/health-insurance/retail-health" } rel="noopener noreferrer" 
                                                                    className="btn-more" onClick={()=>{this.gtmClickHandler('Retail Health Insurance Policy')}}>Know More</a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="prod-box">
                                                                <figure>
                                                                    <img src={require("../../assets/images/product-icons/landing-page/CriticalillnessInsurancePolicy.svg")} alt="" />
                                                                </figure>
                                                                <h3>Critical Illness Insurance Policy</h3>
                                                                <div className="prod-content">
                                                                    <ul>
                                                                        <li></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="prod-btn-holder">
                                                                    {/* <Link to={ "/health-insurance/critical-illness-insurance"} className="btn-more">
                                                                        Know More
                                                                    </Link> */}
                                                                    <a href={ appUrl + "/health-insurance/critical-illness-insurance" } rel="noopener noreferrer" 
                                                                    className="btn-more" onClick={()=>{this.gtmClickHandler('Critical Illness Insurance Policy')}}>Know More</a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="prod-box">
                                                                <figure>
                                                                    <img src={require("../../assets/images/product-icons/landing-page/HospitalDailyCash.svg")} alt="" />
                                                                </figure>
                                                                <h3>Hospital Daily Cash Insurance Policy</h3>
                                                                <div className="prod-content">
                                                                    <ul>
                                                                        <li></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="prod-btn-holder">
                                                                    {/* <Link to={"/health-insurance/hospital-daily-cash"} className="btn-more">
                                                                        Know More
                                                                    </Link> */}
                                                                     <a href={ appUrl + "/health-insurance/hospital-daily-cash" } rel="noopener noreferrer" 
                                                                     className="btn-more" onClick={()=>{this.gtmClickHandler('Hospital Daily Cash Insurance Policy')}}>Know More</a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="prod-box">
                                                                <figure>
                                                                    <img src={require("../../assets/images/product-icons/landing-page/GroupHealthInsurance-SBI.svg")} alt="" />
                                                                </figure>
                                                                <h3>Group Health Insurance - SBI</h3>
                                                                <div className="prod-content">
                                                                    <ul>
                                                                        <li></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="prod-btn-holder">
                                                                    <a href={ appUrl + "/health-insurance/group-health-insurance" } rel="noopener noreferrer" 
                                                                    className="btn-more" onClick={()=>{this.gtmClickHandler('Group Health Insurance - SBI')}}>Know More</a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="prod-box">
                                                                <figure>
                                                                    <img src={require("../../assets/images/product-icons/landing-page/LoanInsurance.svg")} alt="" />
                                                                </figure>
                                                                <h3>Loan Insurance Policy</h3>
                                                                <div className="prod-content">
                                                                    <ul>
                                                                        <li></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="prod-btn-holder">
                                                                    <a href={ appUrl + "/health-insurance/loan-insurance" } rel="noopener noreferrer" 
                                                                    className="btn-more" onClick={()=>{this.gtmClickHandler('Loan Insurance Policy')}}>Know More</a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="HomeInsurance">
                                                <div className="prod-tab-content-step-two">
                                                    <ul className="product-list">
                                                        <li>
                                                            <div className="prod-box">
                                                                <figure>
                                                                    <img src={require("../../assets/images/product-icons/landing-page/LongTermHomeInsurance.svg")} alt="" />
                                                                </figure>
                                                                <h3>Long Term Home Insurance Policy</h3>
                                                                <div className="prod-content">
                                                                    <ul></ul>
                                                                </div>
                                                                <div className="prod-btn-holder">
                                                                    {/* <Link to={"/home-insurance/long-term-home-insurance"} className="btn-more">
                                                                        Know More</Link> */}
                                                                    <a href={ appUrl + "/home-insurance/long-term-home-insurance" } rel="noopener noreferrer" 
                                                                    className="btn-more" onClick={()=>{this.gtmClickHandler('Long Term Home Insurance Policy')}}>Know More</a>
                                                                    <a href={redirectUrl + "/lth/lthHome"} target="_blank" rel="noopener noreferrer" 
                                                                    className="btn-quote" onClick={()=>{this.gtmClickHandler('Long Term Home Insurance Policy')}}>Get a Quote</a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="prod-box">
                                                                <figure>
                                                                    <img src={require("../../assets/images/product-icons/landing-page/SimpleHomeInsurance.svg")} alt="" />
                                                                </figure>
                                                                <h3>Simple Home Insurance Policy</h3>
                                                                <div className="prod-content">
                                                                    <ul></ul>
                                                                </div>
                                                                <div className="prod-btn-holder">
                                                                <a href={ appUrl + "/home-insurance/simple-home-insurance" } rel="noopener noreferrer" 
                                                                className="btn-more" onClick={()=>{this.gtmClickHandler('Simple Home Insurance Policy')}}>Know More</a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="TravelInsurance">
                                                <div className="prod-tab-content-step-two">
                                                    <ul className="product-list">
                                                        <li>
                                                            <div className="prod-box">
                                                                <figure>
                                                                    <img src={require("../../assets/images/product-icons/landing-page/TravelInsurance.svg")} alt="" />
                                                                </figure>
                                                                <h3>Travel Insurance (Business and Holiday)</h3>
                                                                <div className="prod-content">
                                                                    <ul></ul>
                                                                </div>
                                                                <div className="prod-btn-holder">
                                                                    {/* <Link to={"/travel-insurance"} className="btn-more">Know More</Link> */}
                                                                    <a href={ appUrl + "/travel-insurance" } rel="noopener noreferrer" 
                                                                    className="btn-more" onClick={()=>{this.gtmClickHandler('Travel Insurance (Business and Holiday)')}}>Know More</a>
                                                                    <a href={redirectUrl + "/travel/product"} target="_blank" rel="noopener noreferrer" 
                                                                    className="btn-quote" onClick={()=>{this.gtmClickHandler('Travel Insurance (Business and Holiday)')}}>Get a Quote</a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="MotorInsurance">
                                                <div className="prod-tab-content-step-two">
                                                    <ul className="product-list">
                                                        <li>
                                                            <div className="prod-box">
                                                                <figure>
                                                                    <img src={require("../../assets/images/product-icons/landing-page/MotorTwoWheeler.svg")} alt="" />
                                                                </figure>
                                                                <h3>Two Wheeler Insurance</h3>
                                                                <div className="prod-content">
                                                                    <ul></ul>
                                                                </div>
                                                                <div className="prod-btn-holder">
                                                                    {/* <Link to={"/motor-insurance/two-wheeler-insurance"} className="btn-more">Know More</Link> */}
                                                                    <a href={ appUrl + "/motor-insurance/two-wheeler-insurance" } rel="noopener noreferrer" 
                                                                    className="btn-more" onClick={()=>{this.gtmClickHandler('Two Wheeler Insurance')}}>Know More</a>
                                                                    <a href={redirectUrl + "/M2W/GetQuote"} target="_blank" rel="noopener noreferrer" 
                                                                    className="btn-quote" onClick={()=>{this.gtmClickHandler('Two Wheeler Insurance')}}>Get a Quote</a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="prod-box">
                                                                <figure>
                                                                    <img src={require("../../assets/images/product-icons/landing-page/MotorPrivateCarInsurance.svg")} alt="" />
                                                                </figure>
                                                                <h3>Private Car Insurance</h3>
                                                                <div className="prod-content">
                                                                    <ul></ul>
                                                                </div>
                                                                <div className="prod-btn-holder">
                                                                    {/* <Link to={"/motor-insurance/private-car-insurance"} className="btn-more">Know More</Link> */}
                                                                    <a href={ appUrl + "/motor-insurance/private-car-insurance" } rel="noopener noreferrer" 
                                                                    className="btn-more" onClick={()=>{this.gtmClickHandler('Private Car Insurance')}}>Know More</a>
                                                                    <a href={ redirectUrl + "/PMCAR/GetQuote" } target="_blank" rel="noopener noreferrer" 
                                                                    className="btn-quote" onClick={()=>{this.gtmClickHandler('Private Car Insurance')}}>Get a Quote</a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="prod-box">
                                                                <figure>
                                                                    <img src={require("../../assets/images/product-icons/landing-page/MotorActOnlyTwoWheelerLongTerm.svg")} alt="" />
                                                                </figure>
                                                                <h3>Motor Act Only- Two Wheeler(5 Years)</h3>
                                                                <div className="prod-content">
                                                                    <ul></ul>
                                                                </div>
                                                                <div className="prod-btn-holder">
                                                                    <a href={ appUrl + "/motor-insurance/motor-act-only-two-wheeler-insurance" } rel="noopener noreferrer" 
                                                                    className="btn-more" onClick={()=>{this.gtmClickHandler('Motor Act Only- Two Wheeler(5 Years)')}}>Know More</a>
                                                                    {/* <Link to={"/motor-insurance/motor-act-only-two-wheeler-insurance"} className="btn-more">Know More</Link> */}
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="prod-box">
                                                                <figure>
                                                                    <img src={require("../../assets/images/product-icons/landing-page/LongTermTwoWheeler.svg")} alt="" />
                                                                </figure>
                                                                <h3>Long Term Two Wheeler Insurance Policy - Package</h3>
                                                                <div className="prod-content">
                                                                    <ul></ul>
                                                                </div>
                                                                <div className="prod-btn-holder">
                                                                    <a href={ appUrl + "/motor-insurance/long-term-two-wheeler-insurance" } rel="noopener noreferrer" 
                                                                    className="btn-more" onClick={()=>{this.gtmClickHandler('Long Term Two Wheeler Insurance Policy - Package')}}>Know More</a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="prod-box">
                                                                <figure>
                                                                    <img src={require("../../assets/images/product-icons/landing-page/MotorActOnlyPrivateCarLongTerm.svg")} alt="" />
                                                                </figure>
                                                                <h3>Motor Act Only- Private Car (3 Years)</h3>
                                                                <div className="prod-content">
                                                                    <ul></ul>
                                                                </div>
                                                                <div className="prod-btn-holder">
                                                                    <a href={ appUrl + "/motor-insurance/motor-act-only-private-car-insurance" } rel="noopener noreferrer" 
                                                                    className="btn-more" onClick={()=>{this.gtmClickHandler('Motor Act Only- Private Car (3 Years)')}}>Know More</a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="prod-box">
                                                                <figure>
                                                                    <img src={require("../../assets/images/product-icons/landing-page/CommercialMotorInsurance.svg")} alt="CommercialMotorInsurance" />
                                                                </figure>
                                                                <h3>Motor - Trailer Insurance</h3>
                                                                <div className="prod-content">
                                                                    <ul></ul>
                                                                </div>
                                                                <div className="prod-btn-holder">
                                                                    <Link to={ "/commercial-motor-insurance" } 
                                                                    className="btn-more" onClick={()=>{this.gtmClickHandler('Motor - Trailer Insurance')}}>Know More</Link>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="prod-box">
                                                                <figure>
                                                                    <img src={require("../../assets/images/product-icons/landing-page/TractorandOtherFarmVehiclesInsurance.svg")} alt="TractorandOtherFarmVehiclesInsurance" />
                                                                </figure>
                                                                <h3>Motor Commercial Vehicle Insurance Policy Package</h3>
                                                                <div className="prod-content">
                                                                    <ul></ul>
                                                                </div>
                                                                <div className="prod-btn-holder">
                                                                    <Link to={ "/tractor-and-other-farm-vehicle-insurance" } className="btn-more" 
                                                                     onClick={()=>{this.gtmClickHandler('Motor Commercial Vehicle Insurance Policy Package')}}>Know More</Link>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="prod-box">
                                                                <figure>
                                                                    <img src={require("../../assets/images/product-icons/landing-page/MotorActOnly.svg")} alt="MotorActOnly" />
                                                                </figure>
                                                                <h3>Act Only Insurance Policy</h3>
                                                                <div className="prod-content">
                                                                    <ul></ul>
                                                                </div>
                                                                <div className="prod-btn-holder">
                                                                    <Link to={"/motor-act-only"} className="btn-more" 
                                                                     onClick={()=>{this.gtmClickHandler('Act Only Insurance Policy')}}>Know More</Link>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="PersonalAccidentInsurance">
                                                <div className="prod-tab-content-step-two">
                                                    <ul className="product-list">
                                                        <li>
                                                            <div className="prod-box">
                                                                <figure>
                                                                    <img src={require("../../assets/images/product-icons/landing-page/IndividualPersonalAccidentInsurancePolicy.svg")} alt="" />
                                                                </figure>
                                                                <h3>Individual Personal Accident</h3>
                                                                <div className="prod-content">
                                                                    <ul></ul>
                                                                </div>
                                                                <div className="prod-btn-holder">
                                                                    <Link to={ "/personal-accident-insurance/individual-pa-insurance" } className="btn-more" 
                                                                     onClick={()=>{this.gtmClickHandler('Individual Personal Accident')}}>Know More</Link>
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
                    )
                }
            </>
        )
    }

}

export default BaseRetailProduct;