import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import { Nav, Row, Col, Tab, Accordion, Card, Button } from "react-bootstrap";

class BaseCorporateProduct extends Component {

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

render(){
    return(
        <>
        {isMobile ? ( //For Mobil View 
        <div className="faqContent">
        <section className="faQinsuranceMain" id="CorporateTab">
            <Accordion defaultActiveKey="0">
            <Card>
                <Accordion.Toggle as={Button} variant="link" eventKey="0" onClick={(e) => this.toggleAccordianBtn(e)} className={'accordianBtn'} >
                Miscellaneous
        </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <ul className="product-list">
                    <li>
                        <div className="prod-box">
                        <figure> <img src={require("../../assets/images/product-icons/landing-page/MoneyInsurance.svg")} alt="MoneyInsurance" /></figure>
                        <h3>Money Insurance Policy</h3>
                        <div className="prod-content">
                            <ul></ul>
                        </div>
                        <div className="prod-btn-holder">
                            <Link to={"/money-insurance"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('Money Insurance Policy')}}>Know More</Link>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="prod-box">
                        <figure> <img src={require("../../assets/images/product-icons/corporate/plate-glass-insurance.svg")} alt="" /></figure>
                        <h3>Plate Glass Insurance Policy</h3>
                        <div className="prod-content">
                            <ul></ul>
                        </div>
                        <div className="prod-btn-holder">
                            <Link to={"/plate-glass-insurance"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('Plate Glass Insurance Policy')}}>Know More</Link>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="prod-box">
                        <figure> <img src={require("../../assets/images/product-icons/corporate/burglay-insurance.svg")} alt="" /></figure>
                        <h3>Burglary Insurance Policy</h3>
                        <div className="prod-content">
                            <ul></ul>
                        </div>
                        <div className="prod-btn-holder">
                            <Link to={"/burglary-insurance"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('Burglary Insurance Policy')}}>Know More</Link>
                        </div>
                        </div>
                    </li>
                    </ul>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Button} variant="link" eventKey="1" onClick={(e) => this.toggleAccordianBtn(e)} className={'accordianBtn'} >
                Motor Insurance
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                <Card.Body>
                    <ul className="product-list">
                        <li>
                            <div className="prod-box">
                            <figure> <img src={require("../../assets/images/product-icons/landing-page/MotorTradeTransitRisks.svg")} alt="MotorTradeTransitRisks" /></figure>
                            <h3>Motor Trade-Road Transit</h3>
                            <div className="prod-content">
                                <ul></ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link to={"/motor-trade-transit-risks"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('Motor Trade-Road Transit')}}>Know More</Link>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="prod-box">
                            <figure> <img src={require("../../assets/images/product-icons/landing-page/MotorTradeRoadRisks.svg")} alt="MotorTradeRoadRisks" /></figure>
                            <h3>Motor Trade-Road Risk</h3>
                            <div className="prod-content">
                                <ul></ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link to={"/motor-trade-road-risks"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('Motor Trade-Road Risk')}}>Know More</Link>
                            </div>
                            </div>
                        </li>                        
                        <li>
                            <div className="prod-box">
                            <figure> <img src={require("../../assets/images/product-icons/landing-page/MotorTradeInternalRisks.svg")} alt="MotorTradeInternalRisks" /></figure>
                            <h3>Motor Trade-Internal Risk</h3>
                            <div className="prod-content">
                                <ul></ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link to={"/motor-trade-internal-risks"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('Motor Trade-Internal Risk')}}>Know More</Link>
                            </div>
                            </div>
                        </li>
                    </ul>
                </Card.Body>
                </Accordion.Collapse>
            </Card>

            
            <Card>
                <Accordion.Toggle as={Button} variant="link" eventKey="2" onClick={(e) => this.toggleAccordianBtn(e)} className={'accordianBtn'} >
                Health Insurance
        </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                <Card.Body>
                    <ul className="product-list">
                    <li>
                        <div className="prod-box">
                        <figure> <img src={require("../../assets/images/product-icons/GroupPersonalAccidentInsurance.svg")} alt="" /></figure>
                        <h3>Group Personal Accident</h3>
                        <div className="prod-content">
                            <ul></ul>
                        </div>
                        <div className="prod-btn-holder">
                            <Link to={"/group-personal-accident-insurance"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('Group Personal Accident')}}>Know More</Link>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="prod-box">
                        <figure> <img src={require("../../assets/images/product-icons/landing-page/GroupHealthInsurance.svg")} alt="GroupHealthInsurance" /></figure>
                        <h3>Group Health Insurance Policy</h3>
                        <div className="prod-content">
                            <ul></ul>
                        </div>
                        <div className="prod-btn-holder">
                            <Link to={"/group-health-insurance"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('Group Health Insurance Policy')}}>Know More</Link>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="prod-box">
                            <figure>
                                <img src={require("../../assets/images/product-icons/landing-page/LoanInsurance.svg")} alt="" />
                            </figure>
                            <h3>Group Loan Insurance Policy</h3>
                            <div className="prod-content">
                                <ul>
                                    <li></li>
                                </ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link to={"/group-loan-insurance"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('Group Loan Insurance Policy')}}>Know More</Link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="prod-box">
                            <figure>
                                <img src={require("../../assets/images/product-icons/landing-page/ArogyaSanjeevni.svg")} alt="" />
                            </figure>
                            <h3>Arogya Sanjeevani Group Product</h3>
                            <div className="prod-content">
                                <ul>
                                    <li></li>
                                </ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link to={"/arogya-sanjeevani-group-policy"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('Arogya Sanjeevani Group Product')}}>Know More</Link>
                            </div>
                        </div>
                    </li> 
                    {/* <li>
                        <div className="prod-box">
                            <figure>
                                <img src={require("../../assets/images/product-icons/landing-page/covid-19.svg")} alt="" />
                            </figure>
                            <h3>Vector Borne Disease Cover</h3>
                            <div className="prod-content">
                                <ul>
                                    <li></li>
                                </ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link to={"/vector-borne-disease-cover"} className="btn-more">
                                    Know More
                                </Link>
                            </div>
                        </div>
                    </li> */}
                    </ul>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Button} variant="link" eventKey="3" onClick={(e) => this.toggleAccordianBtn(e)} className={'accordianBtn'} >
                Fire Insurance
        </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                <Card.Body>
                    <ul className="product-list">
                    <li>
                        <div className="prod-box">
                        <figure> <img src={require("../../assets/images/product-icons/landing-page/StandardFireandSpecialPerilsInsurances.svg")} alt="StandardFireandSpecialPerilsInsurances" /></figure>
                        <h3>Standard Fire & Special Perils (SFSP ) Insurance Policy</h3>
                        <div className="prod-content">
                            <ul></ul>
                        </div>
                        <div className="prod-btn-holder">
                            <Link to={"/standard-fire-and-special-perils-insurances"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('SFSP')}}>Know More</Link>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="prod-box">
                        <figure> <img src={require("../../assets/images/product-icons/landing-page/ConsequentialLossFireInsurance.svg")} alt="ConsequentialLossFireInsurance" /></figure>
                        <h3>Consequential Loss (Fire) Insurance Policy</h3>
                        <div className="prod-content">
                            <ul></ul>
                        </div>
                        <div className="prod-btn-holder">
                            <Link to={"/consequential-loss-fire-insurance"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('Consequential Loss (Fire) Insurance')}}>Know More</Link>
                        </div>
                        </div>
                    </li>
                    </ul>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Button} variant="link" eventKey="4" onClick={(e) => this.toggleAccordianBtn(e)} className={'accordianBtn'} >
                Marine Insurance
        </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                <Card.Body>
                    <ul className="product-list">
                    <li>
                        <div className="prod-box">
                        <figure> <img src={require("../../assets/images/product-icons/landing-page/MarineCargoInsurance.svg")} alt="MarineCargoInsurance" /></figure>
                        <h3>Marine Cargo Insurance - Open Cover</h3>
                        <div className="prod-content">
                            <ul></ul>
                        </div>
                        <div className="prod-btn-holder">
                            <Link to={"/marine-cargo-insurance"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('Marine Cargo Insurance')}}>Know More</Link>
                        </div>
                        </div>
                    </li>
                    </ul>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Button} variant="link" eventKey="5" onClick={(e) => this.toggleAccordianBtn(e)} className={'accordianBtn'} >
                Package Insurance
        </Accordion.Toggle>
                <Accordion.Collapse eventKey="5">
                <Card.Body>
                    <ul className="product-list">
                    <li>
                        <div className="prod-box">
                        <figure> <img src={require("../../assets/images/product-icons/landing-page/IndustrialAllRisksInsurance.svg")} alt="IndustrialAllRisksInsurance" /></figure>
                        <h3>Industrial All Risks Insurance Policy</h3>
                        <div className="prod-content">
                            <ul></ul>
                        </div>
                        <div className="prod-btn-holder">
                            <Link to={"/industrial-all-risks-insurance"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('Industrial All Risks Insurance')}}>Know More</Link>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="prod-box">
                        <figure> <img src={require("../../assets/images/product-icons/landing-page/BusinessPackageInsurance.svg")} alt="BusinessPackageInsurance" /></figure>
                        <h3>Business Package Insurance Policy</h3>
                        <div className="prod-content">
                            <ul></ul>
                        </div>
                        <div className="prod-btn-holder">
                            <Link to={"/business-package-insurance"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('Business Package Insurance Policy')}}>Know More</Link>
                        </div>
                        </div>
                    </li>
                    </ul>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Button} variant="link" eventKey="5" onClick={(e) => this.toggleAccordianBtn(e)} className={'accordianBtn'} >
                Construction / Engineering Insurance
        </Accordion.Toggle>
                <Accordion.Collapse eventKey="5">
                <Card.Body>
                    <ul className="product-list">
                    <li>
                        <div className="prod-box">
                        <figure> <img src={require("../../assets/images/product-icons/corporate/latent-defect-insurance.svg")} alt="" /></figure>
                        <h3>Latent Defects Insurance Policy</h3>
                        <div className="prod-content">
                            <ul></ul>
                        </div>
                        <div className="prod-btn-holder">
                            <Link to={"/latent-defects-insurance-policy"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('Latent Defects Insurance')}}>Know More</Link>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="prod-box">
                        <figure> <img src={require("../../assets/images/product-icons/corporate/electronic-equipment-insurance.svg")} alt="" /></figure>
                        <h3>Electronic Equipment Insurance (EEI)</h3>
                        <div className="prod-content">
                            <ul></ul>
                        </div>
                        <div className="prod-btn-holder">
                            <Link to={"/electronic-equipment-insurance"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('EEI')}}>Know More</Link>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="prod-box">
                        <figure> <img src={require("../../assets/images/product-icons/landing-page/ContractorsAllRiskInsurance.svg")} alt="ContractorsAllRiskInsurance" /></figure>
                        <h3>Contractors All Risks (CAR) Insurance</h3>
                        <div className="prod-content">
                            <ul></ul>
                        </div>
                        <div className="prod-btn-holder">
                            <Link to={"/contractors-all-risk-insurance"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('Contractors All Risks (CAR) Insurance')}}>Know More</Link>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="prod-box">
                        <figure> <img src={require("../../assets/images/product-icons/landing-page/ErectionAllRisksInsurance.svg")} alt="ErectionAllRisksInsurance" /></figure>
                        <h3>Erection All Risks (EAR) Insurance</h3>
                        <div className="prod-content">
                            <ul></ul>
                        </div>
                        <div className="prod-btn-holder">
                            <Link to={"/erection-all-risks-insurance"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('Erection All Risks (EAR) Insurance')}}>Know More</Link>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="prod-box">
                        <figure> <img src={require("../../assets/images/product-icons/corporate/plant-machinery-insurance.svg")} alt="" /></figure>
                        <h3>Contractors Plant &amp; Machinery Insurance (CPM)</h3>
                        <div className="prod-content">
                            <ul></ul>
                        </div>
                        <div className="prod-btn-holder">
                            <Link to={"/contractors-plant-machinery"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('CPM')}}>Know More</Link>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="prod-box">
                        <figure> <img src={require("../../assets/images/product-icons/landing-page/MachineryBreakdownInsurance.svg")} alt="MachineryBreakdownInsurance" /></figure>
                        <h3>Machinery Breakdown Insurance (MB)</h3>
                        <div className="prod-content">
                            <ul></ul>
                        </div>
                        <div className="prod-btn-holder">
                            <Link to={"/machinery-breakdown-insurance"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('MB')}}>Know More</Link>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="prod-box">
                        <figure> <img src={require("../../assets/images/product-icons/landing-page/BoilerPressurePlantInsurance.svg")} alt="BoilerPressurePlantInsurance" /></figure>
                        <h3>Boiler &amp; Pressure Plant Insurance</h3>
                        <div className="prod-content">
                            <ul></ul>
                        </div>
                        <div className="prod-btn-holder">
                            <Link to={"/boiler-pressure-plant-insurance"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('Boiler & Pressure Plant Insurance')}}>Know More</Link>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="prod-box">
                        <figure> <img src={require("../../assets/images/product-icons/landing-page/ConsequentialLossMachineryBreakdown.svg")} alt="ConsequentialLossMachineryBreakdown" /></figure>
                        <h3>Machinery Loss of Profit Insurance Policy</h3>
                        <div className="prod-content">
                            <ul></ul>
                        </div>
                        <div className="prod-btn-holder">
                            <Link to={"/consequential-loss-machinery-breakdown"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('Machinery Loss of Profit Insurance')}}>Know More</Link>
                        </div>
                        </div>
                    </li>
                    </ul>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Button} variant="link" eventKey="6" onClick={(e) => this.toggleAccordianBtn(e)} className={'accordianBtn'} >
                Others
        </Accordion.Toggle>
                <Accordion.Collapse eventKey="6">
                <Card.Body>
                    <ul className="product-list"> 
                    <li>
                        <div className="prod-box">
                        <figure> <img src={require("../../assets/images/product-icons/corporate/sign-board.svg")} alt="" /></figure>
                        <h3>Sign Board Insurance Policy</h3>
                        <div className="prod-content">
                            <ul></ul>
                        </div>
                        <div className="prod-btn-holder">
                            <Link to={"/sign-board"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('Sign Board Insurance Policy')}}>Know More</Link>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="prod-box">
                        <figure> <img src={require("../../assets/images/product-icons/landing-page/ModifiedNationalAgricultureInsurance.svg")} alt="ModifiedNationalAgricultureInsurance" /></figure>
                        <h3>Modified National Agriculture Insurance Scheme (MNAIS)</h3>
                        <div className="prod-content">
                            <ul></ul>
                        </div>
                        <div className="prod-btn-holder">
                            <Link to={"/national-agriculture-insurance"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('MNAIS')}}>Know More</Link>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="prod-box">
                        <figure> <img src={require("../../assets/images/product-icons/landing-page/TradeCreditInsurance.svg")} alt="TradeCreditInsurance" /></figure>
                        <h3>Trade Credit Insurance Policy</h3>
                        <div className="prod-content">
                            <ul></ul>
                        </div>
                        <div className="prod-btn-holder">
                            <Link to={"/trade-credit-insurance"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('Trade Credit Insurance')}}>Know More</Link>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="prod-box">
                        <figure> <img src={require("../../assets/images/product-icons/landing-page/AviationHullPackage.svg")} alt="AviationHullPackage" /></figure>
                        <h3>Aviation & Hull Package policy</h3>
                        <div className="prod-content">
                            <ul></ul>
                        </div>
                        <div className="prod-btn-holder">
                            <Link to={"/aviation-hull-package"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('Aviation & Hull Package')}}>Know More</Link>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="prod-box">
                        <figure> <img src={require("../../assets/images/product-icons/landing-page/SMEPackage.svg")} alt="SMEPackage.svg" /></figure>
                        <h3>SME Package Insurance Policy</h3>
                        <div className="prod-content">
                            <ul></ul>
                        </div>
                        <div className="prod-btn-holder">
                            <Link to={"/sme-package"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('SME Package Insurance')}}>Know More</Link>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="prod-box">
                        <figure> <img src={require("../../assets/images/product-icons/landing-page/CellularNetwork.svg")} alt="CellularNetwork" /></figure>
                        <h3>Cellular Network Insurance policy</h3>
                        <div className="prod-content">
                            <ul></ul>
                        </div>
                        <div className="prod-btn-holder">
                            <Link to={"/cellular-network"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('Cellular Network Insurance')}}>Know More</Link>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="prod-box">
                        <figure> <img src={require("../../assets/images/product-icons/corporate/advance-loss-of-profit.svg")} alt="" /></figure>
                        <h3>Advance Loss of Profit Policy</h3>
                        <div className="prod-content">
                            <ul></ul>
                        </div>
                        <div className="prod-btn-holder">
                            <Link to={"/advance-lossof-profit"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('Advance Loss of Profit')}}>Know More</Link>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="prod-box">
                        <figure> <img src={require("../../assets/images/product-icons/landing-page/BaggageInsurance.svg")} alt="BaggageInsurance" /></figure>
                        <h3>Baggage Insurance Policy</h3>
                        <div className="prod-content">
                            <ul></ul>
                        </div>
                        <div className="prod-btn-holder">
                            <Link to={"/baggage-insurance"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('Baggage Insurance')}}>Know More</Link>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="prod-box">
                        <figure> <img src={require("../../assets/images/product-icons/landing-page/PortableElectronicEquipment.svg")} alt="PortableElectronicEquipment" /></figure>
                        <h3>Portable Electronic Equipment Insurance Policy</h3>
                        <div className="prod-content">
                            <ul></ul>
                        </div>
                        <div className="prod-btn-holder">
                            <Link to={"/portable-electronic-equipment"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('Portable Electronic Equipment Insurance')}}>Know More</Link>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="prod-box">
                        <figure> <img src={require("../../assets/images/product-icons/landing-page/WeatherInsurance.svg")} alt="WeatherInsurance" /></figure>
                        <h3>Weather Insurance</h3>
                        <div className="prod-content">
                            <ul></ul>
                        </div>
                        <div className="prod-btn-holder">
                            <Link to={"/weather-insurance"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('Weather Insurance')}}>Know More</Link>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="prod-box">
                        <figure> <img src={require("../../assets/images/product-icons/landing-page/MegaRisk.svg")} alt="MegaRisk" /></figure>
                        <h3>Mega Risk Insurance Policy</h3>
                        <div className="prod-content">
                            <ul></ul>
                        </div>
                        <div className="prod-btn-holder">
                            <Link to={"/mega-risk"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('Mega Risk Insurance')}}>Know More</Link>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="prod-box">
                        <figure> <img src={require("../../assets/images/product-icons/landing-page/PortPackage.svg")} alt="PortPackage" /></figure>
                        <h3>Port Package Insurance Policy</h3>
                        <div className="prod-content">
                            <ul></ul>
                        </div>
                        <div className="prod-btn-holder">
                            <Link to={"/port-package"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('Port Package Insurance')}}>Know More</Link>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="prod-box">
                        <figure> <img src={require("../../assets/images/product-icons/landing-page/MarineDelayinStartup.svg")} alt="MarineDelayinStartup" /></figure>
                        <h3>Delay in Start Up (DSU) Insurance</h3>
                        <div className="prod-content">
                            <ul></ul>
                        </div>
                        <div className="prod-btn-holder">
                            <Link to={"/marine-delay-start"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('DSU Insurance')}}>Know More</Link>
                        </div>
                        </div>
                    </li>                    
                    <li>
                        <div className="prod-box">
                        <figure> <img src={require("../../assets/images/product-icons/landing-page/AllRiskInsurance.svg")} alt="AllRiskInsurance" /></figure>
                        <h3>All Risk Insurance Policy</h3>
                        <div className="prod-content">
                            <ul></ul>
                        </div>
                        <div className="prod-btn-holder">
                            <Link to={"/all-risk-insurance"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('All Risk Insurance')}}>Know More</Link>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="prod-box">
                        <figure> <img src={require("../../assets/images/product-icons/landing-page/KidnapRansomAndExtortion.svg")} alt="KidnapRansomAndExtortion" /></figure>
                        <h3>Kidnap, Ransom and Extortion (KRE) Insurance</h3>
                        <div className="prod-content">
                            <ul></ul>
                        </div>
                        <div className="prod-btn-holder">
                            <Link to={"/kidnap-ransom-and-extortion"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('KRE Insurance')}}>Know More</Link>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="prod-box">
                        <figure> <img src={require("../../assets/images/product-icons/landing-page/FidelityGuarantee.svg")} alt="FidelityGuarantee" /></figure>
                        <h3>Fidelity Guarantee Insurance Policy</h3>
                        <div className="prod-content">
                            <ul></ul>
                        </div>
                        <div className="prod-btn-holder">
                            <Link to={"/fidelity-guarantee"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('Fidelity Guarantee Insurance')}}>Know More</Link>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="prod-box">
                        <figure> <img src={require("../../assets/images/product-icons/landing-page/OilEnergy.svg")} alt="OilEnergy" /></figure>
                        <h3>Oil & Energy Risk Insurance</h3>
                        <div className="prod-content">
                            <ul></ul>
                        </div>
                        <div className="prod-btn-holder">
                            <Link to={"/oil-energy"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('Oil & Energy Risk Insurance')}}>Know More</Link>
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
    ) : ( //For Desktop View
        <div className="prod-tab-content-step-one">
            <Tab.Container
            id="prodTab-motorInsuranc"
            defaultActiveKey="Miscellaneous"
            >
            <Row className="prod-tab-inner">
                <Col sm={12}>
                <Nav
                    variant="pills"
                    className="flex-row justify-content-center align-items-center"
                >
                    <Nav.Item>
                    <Nav.Link eventKey="Miscellaneous" onClick={()=>{this.gtmNavHandler('Corporate','Miscellaneous')}}>
                        Miscellaneous
                    </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="MotorInsurance" onClick={()=>{this.gtmNavHandler('Corporate','Motor')}}>
                        Motor
                    </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="HealthInsurance" onClick={()=>{this.gtmNavHandler('Corporate','Health')}}>
                        {" "}
                        Health{" "}
                    </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="FireInsurance" onClick={()=>{this.gtmNavHandler('Corporate','Fire')}}>
                        {" "}
                        Fire{" "}
                    </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="MarineInsurance" onClick={()=>{this.gtmNavHandler('Corporate','Marine')}}>
                        {" "}
                        Marine{" "}
                    </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="PackageInsurance" onClick={()=>{this.gtmNavHandler('Corporate','Package')}}>
                        {" "}
                        Package{" "}
                    </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="ConstructionInsurance" onClick={()=>{this.gtmNavHandler('Corporate','Construction / Engineering')}}>
                        {" "}
                        Construction / Engineering{" "}
                    </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="Others" onClick={()=>{this.gtmNavHandler('Corporate','Others')}}>
                        {" "}
                        Others{" "}
                    </Nav.Link>
                    </Nav.Item>
                </Nav>
                </Col>
                <Col sm={12}>
                <Tab.Content>
                    <Tab.Pane eventKey="Miscellaneous">
                    <div className="prod-tab-content-step-two">
                        <ul className="product-list">
                        <li>
                            <div className="prod-box">
                            <figure>
                                <img
                                src={require("../../assets/images/product-icons/landing-page/MoneyInsurance.svg")}
                                alt="MoneyInsurance"
                                />
                            </figure>
                            <h3>Money Insurance Policy</h3>
                            <div className="prod-content">
                                <ul></ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link to={"/money-insurance"} className="btn-more" 
                                onClick={()=>{this.gtmClickHandler('Money Insurance Policy')}}>Know More</Link>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="prod-box">
                            <figure> <img src={require("../../assets/images/product-icons/corporate/PlateGlassInsurance.svg")} alt="" /></figure>
                            <h3>Plate Glass Insurance Policy</h3>
                            <div className="prod-content">
                                <ul></ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link to={"/plate-glass-insurance"} className="btn-more"  
                                onClick={()=>{this.gtmClickHandler('Plate Glass Insurance Policy')}}>Know More</Link>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="prod-box">
                            <figure> <img src={require("../../assets/images/product-icons/landing-page/Burglary.svg")} alt="" /></figure>
                            <h3>Burglary Insurance Policy</h3>
                            <div className="prod-content">
                                <ul></ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link to={"/burglary-insurance"} className="btn-more" 
                                onClick={()=>{this.gtmClickHandler('Burglary Insurance Policy')}}>Know More</Link>
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
                                    <img src={require("../../assets/images/product-icons/landing-page/MotorTradeTransitRisks.svg")} alt="MotorTradeTransitRisks" />
                                </figure>
                                <h3>Motor Trade-Road Transit</h3>
                                <div className="prod-content">
                                    <ul></ul>
                                </div>
                                <div className="prod-btn-holder">
                                    <Link to={"/motor-trade-transit-risks"} className="btn-more"   
                                onClick={()=>{this.gtmClickHandler('Motor Trade-Road Transit')}}>Know More</Link>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="prod-box">
                                <figure>
                                    <img src={require("../../assets/images/product-icons/landing-page/MotorTradeRoadRisks.svg")} alt="MotorTradeRoadRisks" />
                                </figure>
                                <h3>Motor Trade-Road Risk</h3>
                                <div className="prod-content">
                                    <ul></ul>
                                </div>
                                <div className="prod-btn-holder">
                                    <Link to={"/motor-trade-road-risks"} className="btn-more" 
                                    onClick={()=>{this.gtmClickHandler('Motor Trade-Road Risk')}}>Know More</Link>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="prod-box">
                                <figure>
                                    <img src={require("../../assets/images/product-icons/landing-page/MotorTradeInternalRisks.svg")} alt="MotorTradeInternalRisks" />
                                </figure>
                                <h3>Motor Trade-Internal Risk</h3>
                                <div className="prod-content">
                                    <ul></ul>
                                </div>
                                <div className="prod-btn-holder">
                                    <Link to={"/motor-trade-internal-risks"} className="btn-more" 
                                    onClick={()=>{this.gtmClickHandler('Motor Trade-Internal Risk')}}>Know More</Link>
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
                                <img
                                src={require("../../assets/images/product-icons/corporate/GroupPersonalAccidentInsurance.svg")}
                                alt=""
                                />
                            </figure>
                            <h3>Group Personal Accident</h3>
                            <div className="prod-content">
                                <ul></ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link to={"/group-personal-accident-insurance"} className="btn-more" 
                                    onClick={()=>{this.gtmClickHandler('Group Personal Accident')}}>Know More</Link>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="prod-box">
                            <figure>
                                <img
                                src={require("../../assets/images/product-icons/landing-page/GroupHealthInsurance.svg")}
                                alt="GroupHealthInsurance"
                                />
                            </figure>
                            <h3>Group Health Insurance Policy</h3>
                            <div className="prod-content">
                                <ul></ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link to={"/group-health-insurance"} className="btn-more" 
                                    onClick={()=>{this.gtmClickHandler('Group Health Insurance Policy')}}>Know More</Link>
                            </div>
                            </div>
                        </li>                        
                        <li>
                            <div className="prod-box">
                                <figure>
                                    <img src={require("../../assets/images/product-icons/landing-page/LoanInsurance.svg")} alt="" />
                                </figure>
                                <h3>Group Loan Insurance Policy</h3>
                                <div className="prod-content">
                                    <ul>
                                        <li></li>
                                    </ul>
                                </div>
                                <div className="prod-btn-holder">
                                    <Link to={"/group-loan-insurance"} className="btn-more" 
                                    onClick={()=>{this.gtmClickHandler('Group Loan Insurance Policy')}}>Know More</Link>
                                </div>
                            </div>
                        </li>                        
                        <li>
                            <div className="prod-box">
                                <figure>
                                    <img src={require("../../assets/images/product-icons/landing-page/ArogyaSanjeevni.svg")} alt="" />
                                </figure>
                                <h3>Arogya Sanjeevani Group Product</h3>
                                <div className="prod-content">
                                    <ul>
                                        <li></li>
                                    </ul>
                                </div>
                                <div className="prod-btn-holder">
                                    <Link to={"/arogya-sanjeevani-group-policy"} className="btn-more" 
                                    onClick={()=>{this.gtmClickHandler('Arogya Sanjeevani Group Product')}}>Know More</Link>
                                </div>
                            </div>
                        </li>                       
                        {/* <li>
                            <div className="prod-box">
                                <figure>
                                    <img src={require("../../assets/images/product-icons/landing-page/covid-19.svg")} alt="" />
                                </figure>
                                <h3>Vector Borne Disease Cover</h3>
                                <div className="prod-content">
                                    <ul>
                                        <li></li>
                                    </ul>
                                </div>
                                <div className="prod-btn-holder">
                                    <Link to={"/vector-borne-disease-cover"} className="btn-more" >
                                        Know More
                                    </Link>
                                </div>
                            </div>
                        </li>     */}
                        </ul>
                    </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="FireInsurance">
                    <div className="prod-tab-content-step-two">
                        <ul className="product-list">
                        <li>
                            <div className="prod-box">
                            <figure>
                                <img
                                src={require("../../assets/images/product-icons/landing-page/StandardFireandSpecialPerilsInsurances.svg")}
                                alt="StandardFireandSpecialPerilsInsurances"
                                />
                            </figure>
                            <h3>Standard Fire & Special Perils (SFSP ) Insurance Policy</h3>
                            <div className="prod-content">
                                <ul></ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link to={"/standard-fire-and-special-perils-insurances"} className="btn-more" 
                                    onClick={()=>{this.gtmClickHandler('Standard Fire & Special Perils')}}>Know More</Link>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="prod-box">
                            <figure>
                                <img src={require("../../assets/images/product-icons/landing-page/ConsequentialLossFireInsurance.svg")} alt="ConsequentialLossFireInsurance" />
                            </figure>
                            <h3>Consequential Loss (Fire) Insurance Policy</h3>
                            <div className="prod-content">
                                <ul></ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link to={"/consequential-loss-fire-insurance"} className="btn-more" 
                                onClick={()=>{this.gtmClickHandler('Consequential Loss (Fire) Insurance Policy')}}>Know More</Link>
                            </div>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="MarineInsurance">
                    <div className="prod-tab-content-step-two">
                        <ul className="product-list">
                        <li>
                            <div className="prod-box">
                            <figure>
                                <img src={require("../../assets/images/product-icons/landing-page/MarineCargoInsurance.svg")} alt="MarineCargoInsurance" />
                            </figure>
                            <h3>Marine Cargo Insurance - Open Cover</h3>
                            <div className="prod-content">
                                <ul></ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link to={"/marine-cargo-insurance"} className="btn-more" 
                                onClick={()=>{this.gtmClickHandler('Marine Cargo Insurance')}}>Know More</Link>
                            </div>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="PackageInsurance">
                    <div className="prod-tab-content-step-two">
                        <ul className="product-list">
                        <li>
                            <div className="prod-box">
                            <figure>
                                <img
                                src={require("../../assets/images/product-icons/landing-page/IndustrialAllRisksInsurance.svg")}
                                alt="IndustrialAllRisksInsurance"
                                />
                            </figure>
                            <h3>Industrial All Risks Insurance Policy</h3>
                            <div className="prod-content">
                                <ul></ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link to={"/industrial-all-risks-insurance"} className="btn-more" 
                                onClick={()=>{this.gtmClickHandler('Industrial All Risks Insurance Policy')}}>Know More</Link>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="prod-box">
                            <figure>
                                {" "}
                                <img
                                src={require("../../assets/images/product-icons/landing-page/BusinessPackageInsurance.svg")}
                                alt="BusinessPackageInsurance"
                                />
                            </figure>
                            <h3>Business Package Insurance Policy</h3>
                            <div className="prod-content">
                                <ul></ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link to={"/business-package-insurance"} className="btn-more" 
                                onClick={()=>{this.gtmClickHandler('Business Package Insurance Policy')}}>Know More</Link>
                            </div>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="ConstructionInsurance">
                    <div className="prod-tab-content-step-two">
                        <ul className="product-list">
                        <li>
                            <div className="prod-box">
                            <figure> <img src={require("../../assets/images/product-icons/landing-page/LatentDefectsInsurancePolicy.svg")} alt="" /></figure>
                            <h3>Latent Defects Insurance Policy</h3>
                            <div className="prod-content">
                                <ul></ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link to={"/latent-defects-insurance-policy"} className="btn-more" 
                                onClick={()=>{this.gtmClickHandler('Latent Defects Insurance Policy')}}>Know More</Link>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="prod-box">
                            <figure>
                                <img
                                src={require("../../assets/images/product-icons/corporate/electronic-equipment-insurance.svg")}
                                alt=""
                                />
                            </figure>
                            <h3>Electronic Equipment Insurance (EEI)</h3>
                            <div className="prod-content">
                                <ul></ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link to={"/electronic-equipment-insurance"} className="btn-more" 
                                onClick={()=>{this.gtmClickHandler('Electronic Equipment Insurance (EEI)')}}>Know More</Link>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="prod-box">
                            <figure>
                                <img src={require("../../assets/images/product-icons/landing-page/ContractorsAllRiskInsurance.svg")} alt="ContractorsAllRiskInsurance" />
                            </figure>
                            <h3>Contractors All Risks (CAR) Insurance</h3>
                            <div className="prod-content">
                                <ul></ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link to={"/contractors-all-risk-insurance"} className="btn-more" 
                                onClick={()=>{this.gtmClickHandler('Contractors All Risks')}}>Know More</Link>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="prod-box">
                            <figure>
                                <img src={require("../../assets/images/product-icons/landing-page/ErectionAllRisksInsurance.svg")} alt="ErectionAllRisksInsurance" />
                            </figure>
                            <h3>Erection All Risks (EAR) Insurance</h3>
                            <div className="prod-content">
                                <ul></ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link to={"/erection-all-risks-insurance"} className="btn-more" 
                                onClick={()=>{this.gtmClickHandler('Erection All Risks')}}>Know More</Link>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="prod-box">
                            <figure> <img src={require("../../assets/images/product-icons/landing-page/ContractorsPlant.svg")} alt="" /></figure>
                            <h3>Contractors Plant &amp; Machinery Insurance (CPM)</h3>
                            <div className="prod-content">
                                <ul></ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link to={"/contractors-plant-machinery"} className="btn-more" 
                                onClick={()=>{this.gtmClickHandler('Contractors Plant & Machinery Insurance')}}>Know More</Link>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="prod-box">
                            <figure>
                                <img
                                src={require("../../assets/images/product-icons/landing-page/MachineryBreakdownInsurance.svg")}
                                alt="MachineryBreakdownInsurance"
                                />
                            </figure>
                            <h3>Machinery Breakdown Insurance (MB)</h3>
                            <div className="prod-content">
                                <ul></ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link to={"/machinery-breakdown-insurance"} className="btn-more" 
                                onClick={()=>{this.gtmClickHandler('Machinery Breakdown Insurance')}}>Know More</Link>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="prod-box">
                            <figure>
                                <img
                                src={require("../../assets/images/product-icons/landing-page/BoilerPressurePlantInsurance.svg")}
                                alt="BoilerPressurePlantInsurance"
                                />
                            </figure>
                            <h3>Boiler &amp; Pressure Plant Insurance
                            </h3>
                            <div className="prod-content">
                                <ul></ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link to={"/boiler-pressure-plant-insurance"} className="btn-more" 
                                onClick={()=>{this.gtmClickHandler('Boiler & Pressure Plant Insurance')}}>Know More</Link>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="prod-box">
                            <figure>
                                <img src={require("../../assets/images/product-icons/landing-page/ConsequentialLossMachineryBreakdown.svg")} alt="ConsequentialLossMachineryBreakdown" />
                            </figure>
                            <h3>Machinery Loss of Profit Insurance Policy</h3>
                            <div className="prod-content">
                                <ul></ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link to={"/consequential-loss-machinery-breakdown"} className="btn-more" 
                                onClick={()=>{this.gtmClickHandler('Machinery Loss of Profit Insurance')}}>Know More</Link>
                            </div>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="Others">
                    <div className="prod-tab-content-step-two">
                        <ul className="product-list">
                            <li>
                                <div className="prod-box">
                                <figure> <img src={require("../../assets/images/product-icons/corporate/sign-board.svg")} alt="" /></figure>
                                <h3>Sign Board Insurance Policy</h3>
                                <div className="prod-content">
                                    <ul></ul>
                                </div>
                                <div className="prod-btn-holder">
                                    <Link to={"/sign-board"} className="btn-more" 
                                onClick={()=>{this.gtmClickHandler('Sign Board Insurance')}}>Know More</Link>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="prod-box">
                                <figure>
                                    <img
                                    src={require("../../assets/images/product-icons/landing-page/ModifiedNationalAgricultureInsurance.svg")}
                                    alt="ModifiedNationalAgricultureInsurance"
                                    />
                                </figure>
                                <h3>Modified National Agriculture Insurance Scheme (MNAIS)
                                </h3>
                                <div className="prod-content">
                                    <ul></ul>
                                </div>
                                <div className="prod-btn-holder">
                                    <Link to={"/national-agriculture-insurance"} className="btn-more" 
                                onClick={()=>{this.gtmClickHandler('MNAIS')}}>Know More</Link>
                                </div>
                                </div>
                            </li>
                        <li>
                            <div className="prod-box">
                            <figure>
                                <img
                                src={require("../../assets/images/product-icons/landing-page/TradeCreditInsurance.svg")}
                                alt="TradeCreditInsurance"
                                />
                            </figure>
                            <h3>Trade Credit Insurance Policy</h3>
                            <div className="prod-content">
                                <ul></ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link to={"/trade-credit-insurance"} className="btn-more" 
                                onClick={()=>{this.gtmClickHandler('Trade Credit Insurance')}}>Know More</Link>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="prod-box">
                            <figure>
                                <img
                                src={require("../../assets/images/product-icons/landing-page/AviationHullPackage.svg")}
                                alt="AviationHullPackage"
                                />
                            </figure>
                            <h3>Aviation & Hull Package policy</h3>
                            <div className="prod-content">
                                <ul></ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link to={"/aviation-hull-package"} className="btn-more" 
                                onClick={()=>{this.gtmClickHandler('Aviation & Hull Package')}}>Know More</Link>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="prod-box">
                            <figure>
                                <img
                                src={require("../../assets/images/product-icons/landing-page/SMEPackage.svg")}
                                alt="SMEPackage"
                                />
                            </figure>
                            <h3>SME Package Insurance Policy</h3>
                            <div className="prod-content">
                                <ul></ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link to={"/sme-package"} className="btn-more" 
                                onClick={()=>{this.gtmClickHandler('SME Package Insurance')}}>Know More</Link>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="prod-box">
                            <figure>
                                <img
                                src={require("../../assets/images/product-icons/landing-page/CellularNetwork.svg")}
                                alt="CellularNetwork"
                                />
                            </figure>
                            <h3>Cellular Network Insurance policy</h3>
                            <div className="prod-content">
                                <ul></ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link to={"/cellular-network"} className="btn-more" 
                                onClick={()=>{this.gtmClickHandler('Cellular Network Insurance')}}>Know More</Link>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="prod-box">
                            <figure> <img src={require("../../assets/images/product-icons/corporate/advance-loss-of-profit.svg")} alt="" /></figure>
                            <h3>Advance Loss of Profit Policy</h3>
                            <div className="prod-content">
                                <ul></ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link to={"/advance-lossof-profit"} className="btn-more" 
                                onClick={()=>{this.gtmClickHandler('Advance Loss of Profit Policy')}}>Know More</Link>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="prod-box">
                            <figure>
                                <img
                                src={require("../../assets/images/product-icons/landing-page/BaggageInsurance.svg")}
                                alt="BaggageInsurance"
                                />
                            </figure>
                            <h3>Baggage Insurance Policy</h3>
                            <div className="prod-content">
                                <ul></ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link to={"/baggage-insurance"} className="btn-more" 
                                onClick={()=>{this.gtmClickHandler('Baggage Insurance')}}>Know More</Link>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="prod-box">
                            <figure>
                                <img
                                src={require("../../assets/images/product-icons/landing-page/PortableElectronicEquipment.svg")}
                                alt="PortableElectronicEquipment"
                                />
                            </figure>
                            <h3>Portable Electronic Equipment Insurance Policy</h3>
                            <div className="prod-content">
                                <ul></ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link to={"/portable-electronic-equipment"} className="btn-more" 
                                onClick={()=>{this.gtmClickHandler('Portable Electronic Equipment Insurance')}}>Know More</Link>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="prod-box">
                            <figure>
                                <img
                                src={require("../../assets/images/product-icons/landing-page/WeatherInsurance.svg")}
                                alt="WeatherInsurance"
                                />
                            </figure>
                            <h3>Weather Insurance</h3>
                            <div className="prod-content">
                                <ul></ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link to={"/weather-insurance"} className="btn-more" 
                                onClick={()=>{this.gtmClickHandler('Weather Insurance')}}>Know More</Link>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="prod-box">
                            <figure>
                                <img
                                src={require("../../assets/images/product-icons/landing-page/MegaRisk.svg")}
                                alt=""
                                />
                            </figure>
                            <h3>Mega Risk Insurance Policy</h3>
                            <div className="prod-content">
                                <ul></ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link to={"/mega-risk"} className="btn-more" 
                                onClick={()=>{this.gtmClickHandler('Mega Risk Insurance')}}>Know More</Link>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="prod-box">
                            <figure>
                                <img
                                src={require("../../assets/images/product-icons/landing-page/PortPackage.svg")}
                                alt="PortPackage"
                                />
                            </figure>
                            <h3>Port Package Insurance Policy</h3>
                            <div className="prod-content">
                                <ul></ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link to={"/port-package"} className="btn-more" 
                                onClick={()=>{this.gtmClickHandler('Port Package Insurance')}}>Know More</Link>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="prod-box">
                            <figure>
                                <img
                                src={require("../../assets/images/product-icons/landing-page/MarineDelayinStartup.svg")}
                                alt="MarineDelayinStartup"
                                />
                            </figure>
                            <h3>
                                Delay in Start Up (DSU) Insurance
                            </h3>
                            <div className="prod-content">
                                <ul></ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link to={"/marine-delay-start"} className="btn-more" 
                                onClick={()=>{this.gtmClickHandler('DSU Insurance')}}>Know More</Link>
                            </div>
                            </div>
                        </li>                        
                        <li>
                            <div className="prod-box">
                            <figure>
                                <img
                                src={require("../../assets/images/product-icons/landing-page/AllRiskInsurance.svg")}
                                alt="AllRiskInsurance"
                                />
                            </figure>
                            <h3>All Risk Insurance Policy</h3>
                            <div className="prod-content">
                                <ul></ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link to={"/all-risk-insurance"} className="btn-more" 
                                onClick={()=>{this.gtmClickHandler('All Risk Insurance Policy')}}>Know More</Link>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="prod-box">
                            <figure>
                                <img
                                src={require("../../assets/images/product-icons/landing-page/KidnapRansomAndExtortion.svg")}
                                alt="KidnapRansomAndExtortion"
                                />
                            </figure>
                            <h3>
                                Kidnap, Ransom and Extortion (KRE) Insurance
                            </h3>
                            <div className="prod-content">
                                <ul></ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link to={"/kidnap-ransom-and-extortion"} className="btn-more" 
                                onClick={()=>{this.gtmClickHandler('KRE Insurance')}}>Know More</Link>
                            </div>
                            </div>
                        </li>                       
                        <li>
                            <div className="prod-box">
                            <figure>
                                <img
                                src={require("../../assets/images/product-icons/landing-page/FidelityGuarantee.svg")}
                                alt="FidelityGuarantee"
                                />
                            </figure>
                            <h3>Fidelity Guarantee Insurance Policy</h3>
                            <div className="prod-content">
                                <ul></ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link to={"/fidelity-guarantee"} className="btn-more" 
                                onClick={()=>{this.gtmClickHandler('Fidelity Guarantee Insurance')}}>Know More</Link>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="prod-box">
                            <figure>
                                <img
                                src={require("../../assets/images/product-icons/landing-page/OilEnergy.svg")}
                                alt="OilEnergy"
                                />
                            </figure>
                            <h3>Oil & Energy Risk Insurance</h3>
                            <div className="prod-content">
                                <ul></ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link to={"/oil-energy"} className="btn-more" 
                                onClick={()=>{this.gtmClickHandler('Oil & Energy Risk Insurance')}}>Know More</Link>
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

export default BaseCorporateProduct;