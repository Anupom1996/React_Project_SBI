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

    gtmNavHandler = (productCategory, productGroup) => {
        window.dataLayer = window.dataLayer || [];
        const data = {
            'event': 'product_listing_page_1_product_navigation_click',
            'pagetype': 'product_listing_page',
            'product_category': productCategory,
            'product_group': productGroup
        };
        window.dataLayer.push(data);
    }

    render() {
        let redirectUrl = AppConstant.TRANSACTION_API_BASE_URL;
        let appUrl = AppConstant.APP_URL;
        let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
        let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
        let Corona_Kovach, Covid_19, Health, Home, Travel, Motor, Personal_Accident, Health_Arogya, Premier_Policy, Insurence_Policy,
            Plus_Policy, Top_Up_policy, Know_More, Get_Quote, Home_Insurance, Health_Insurence, Travel_Insurance, Motor_Insurance, Personal_Accident_Insurance,
            Illness_Policy, Daily_Cash, Group_Policy, Loan_Policy, Private_Car,   Two_Wheeler, Motor_Two_Wheeler, Retail_Long_Term, Motor_Private_3_Year, Trial_Insurence, Motor_Act_Only, Motor_Commercial, Individual_Accident, Corona_Rakshak, travel_insurance;

        if (lang_name === 'en') {

            Get_Quote = sbiHomeData && sbiHomeData['PRODUCTS_GET_A_QUOTE'] && sbiHomeData['PRODUCTS_GET_A_QUOTE'].content_en;
            Covid_19 = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COVID_19'] && sbiHomeData['PRODUCTS_RETAIL_COVID_19'].content_en;
            Individual_Accident = sbiHomeData && sbiHomeData['RENEW_POLICY_BLOG_HP_INDIVIDUAL_PA'] && sbiHomeData['RENEW_POLICY_BLOG_HP_INDIVIDUAL_PA'].content_en;
            Motor_Commercial = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOTOR_COMMERCIAL'] && sbiHomeData['PRODUCTS_RETAIL_MOTOR_COMMERCIAL'].content_en;

            Personal_Accident_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_PERSONAL_ACCIDENT_INSURENCE'] && sbiHomeData['PRODUCTS_PERSONAL_ACCIDENT_INSURENCE'].content_en;
            Motor_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_MOTOR_INSURENCE'] && sbiHomeData['PRODUCTS_MOTOR_INSURENCE'].content_en;
            Travel_Insurance = sbiHomeData && sbiHomeData['PRODUCS_TRAVEL_INSURENCE'] && sbiHomeData['PRODUCS_TRAVEL_INSURENCE'].content_en;
            Motor_Act_Only = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOTOR_ACT_ONLY'] && sbiHomeData['PRODUCTS_RETAIL_MOTOR_ACT_ONLY'].content_en;
            Trial_Insurence = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_TRIAL_INSURENCE'] && sbiHomeData['PRODUCTS_RETAIL_TRIAL_INSURENCE'].content_en;
            Motor_Private_3_Year = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOTOR_PRIVATE_3'] && sbiHomeData['PRODUCTS_RETAIL_MOTOR_PRIVATE_3'].content_en;
            Retail_Long_Term = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_LONG_TERM'] && sbiHomeData['PRODUCTS_RETAIL_LONG_TERM'].content_en;
            Motor_Two_Wheeler = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOTOR_TWO_WHELER'] && sbiHomeData['PRODUCTS_RETAIL_MOTOR_TWO_WHELER'].content_en;
            Private_Car = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOTOR_PRIVATE_CAR'] && sbiHomeData['PRODUCTS_RETAIL_MOTOR_PRIVATE_CAR'].content_en;
            Two_Wheeler = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOTOR_TWO_WHEELER'] && sbiHomeData['PRODUCTS_RETAIL_MOTOR_TWO_WHEELER'].content_en;
            Home_Insurance = sbiHomeData && sbiHomeData['SIDE_MENU_HELTH_SIMPLE_HOME'] && sbiHomeData['SIDE_MENU_HELTH_SIMPLE_HOME'].content_en;
            Loan_Policy = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_HEALTH_LOAN_POLICY'] && sbiHomeData['PRODUCTS_RETAIL_HEALTH_LOAN_POLICY'].content_en;
            Group_Policy = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_HEALTH_GROUP_POLICY'] && sbiHomeData['PRODUCTS_RETAIL_HEALTH_GROUP_POLICY'].content_en;
            Daily_Cash = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_HEALTH_DAILY_CASH'] && sbiHomeData['PRODUCTS_RETAIL_HEALTH_DAILY_CASH'].content_en;
            Illness_Policy = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_HEALTH_ILLNESS_POLICY'] && sbiHomeData['PRODUCTS_RETAIL_HEALTH_ILLNESS_POLICY'].content_en;
            Insurence_Policy = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_HEALTH_INSURENCE_POLICY'] && sbiHomeData['PRODUCTS_RETAIL_HEALTH_INSURENCE_POLICY'].content_en;
            Top_Up_policy = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_HEALTH_TOP_UP_POLICY'] && sbiHomeData['PRODUCTS_RETAIL_HEALTH_TOP_UP_POLICY'].content_en;
            Plus_Policy = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_HEALTH_PLUS_POLICY'] && sbiHomeData['PRODUCTS_RETAIL_HEALTH_PLUS_POLICY'].content_en;
            Premier_Policy = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_HEALTH_A_P_POLICY'] && sbiHomeData['PRODUCTS_RETAIL_HEALTH_A_P_POLICY'].content_en;
            Health_Arogya = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_HEALTH_AROGYA'] && sbiHomeData['PRODUCTS_RETAIL_HEALTH_AROGYA'].content_en;
            Personal_Accident = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_P_ACCIDENT'] && sbiHomeData['PRODUCTS_RETAIL_P_ACCIDENT'].content_en;
            Motor = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOTOR'] && sbiHomeData['PRODUCTS_RETAIL_MOTOR'].content_en;
            Travel = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_TRAVEL'] && sbiHomeData['PRODUCTS_RETAIL_TRAVEL'].content_en;
            Home = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_HOME'] && sbiHomeData['PRODUCTS_RETAIL_HOME'].content_en;
            Health = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_HEALTH'] && sbiHomeData['PRODUCTS_RETAIL_HEALTH'].content_en;
            Corona_Rakshak = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_CORONA_RAKSHAK_POLICY'] && sbiHomeData['PRODUCTS_RETAIL_CORONA_RAKSHAK_POLICY'].content_en;
            Corona_Kovach = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_CORONA_KAVACH_POLICY'] && sbiHomeData['PRODUCTS_RETAIL_CORONA_KAVACH_POLICY'].content_en;
            travel_insurance = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_TRAVEL_INSURENCE'] && sbiHomeData['PRODUCTS_RETAIL_TRAVEL_INSURENCE'].content_en;
            Health_Insurence = sbiHomeData && sbiHomeData['PRODUCS_HELTH_INSURENCE'] && sbiHomeData['PRODUCS_HELTH_INSURENCE'].content_en;
            Know_More = sbiHomeData && sbiHomeData['PRODUCTS_KNOW_MORE'] && sbiHomeData['PRODUCTS_KNOW_MORE'].content_en;

        } else {

            Health_Insurence = sbiHomeData && sbiHomeData['PRODUCS_HELTH_INSURENCE'] && sbiHomeData['PRODUCS_HELTH_INSURENCE'].content_hi;
            Covid_19 = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COVID_19'] && sbiHomeData['PRODUCTS_RETAIL_COVID_19'].content_hi;
            Get_Quote = sbiHomeData && sbiHomeData['PRODUCTS_GET_A_QUOTE'] && sbiHomeData['PRODUCTS_GET_A_QUOTE'].content_hi;
            Individual_Accident = sbiHomeData && sbiHomeData['RENEW_POLICY_BLOG_HP_INDIVIDUAL_PA'] && sbiHomeData['RENEW_POLICY_BLOG_HP_INDIVIDUAL_PA'].content_hi;
            Motor_Commercial = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOTOR_COMMERCIAL'] && sbiHomeData['PRODUCTS_RETAIL_MOTOR_COMMERCIAL'].content_hi;
            Motor_Act_Only = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOTOR_ACT_ONLY'] && sbiHomeData['PRODUCTS_RETAIL_MOTOR_ACT_ONLY'].content_hi;
            Trial_Insurence = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_TRIAL_INSURENCE'] && sbiHomeData['PRODUCTS_RETAIL_TRIAL_INSURENCE'].content_hi;
            Motor_Private_3_Year = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOTOR_PRIVATE_3'] && sbiHomeData['PRODUCTS_RETAIL_MOTOR_PRIVATE_3'].content_hi;
            Retail_Long_Term = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_LONG_TERM'] && sbiHomeData['PRODUCTS_RETAIL_LONG_TERM'].content_hi;
            Motor_Two_Wheeler = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOTOR_TWO_WHELER'] && sbiHomeData['PRODUCTS_RETAIL_MOTOR_TWO_WHELER'].content_hi;
            Private_Car = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOTOR_PRIVATE_CAR'] && sbiHomeData['PRODUCTS_RETAIL_MOTOR_PRIVATE_CAR'].content_hi;
            Two_Wheeler = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOTOR_TWO_WHEELER'] && sbiHomeData['PRODUCTS_RETAIL_MOTOR_TWO_WHEELER'].content_hi;
            Personal_Accident_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_PERSONAL_ACCIDENT_INSURENCE'] && sbiHomeData['PRODUCTS_PERSONAL_ACCIDENT_INSURENCE'].content_hi;
            
            Loan_Policy = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_HEALTH_LOAN_POLICY'] && sbiHomeData['PRODUCTS_RETAIL_HEALTH_LOAN_POLICY'].content_hi;
            Group_Policy = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_HEALTH_GROUP_POLICY'] && sbiHomeData['PRODUCTS_RETAIL_HEALTH_GROUP_POLICY'].content_hi;
            Daily_Cash = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_HEALTH_DAILY_CASH'] && sbiHomeData['PRODUCTS_RETAIL_HEALTH_DAILY_CASH'].content_hi;
            Illness_Policy = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_HEALTH_ILLNESS_POLICY'] && sbiHomeData['PRODUCTS_RETAIL_HEALTH_ILLNESS_POLICY'].content_hi;
            Insurence_Policy = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_HEALTH_INSURENCE_POLICY'] && sbiHomeData['PRODUCTS_RETAIL_HEALTH_INSURENCE_POLICY'].content_hi;
            Top_Up_policy = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_HEALTH_TOP_UP_POLICY'] && sbiHomeData['PRODUCTS_RETAIL_HEALTH_TOP_UP_POLICY'].content_hi;
            Plus_Policy = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_HEALTH_PLUS_POLICY'] && sbiHomeData['PRODUCTS_RETAIL_HEALTH_PLUS_POLICY'].content_hi;
            Premier_Policy = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_HEALTH_A_P_POLICY'] && sbiHomeData['PRODUCTS_RETAIL_HEALTH_A_P_POLICY'].content_hi;
            Health_Arogya = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_HEALTH_AROGYA'] && sbiHomeData['PRODUCTS_RETAIL_HEALTH_AROGYA'].content_hi;
            Personal_Accident = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_P_ACCIDENT'] && sbiHomeData['PRODUCTS_RETAIL_P_ACCIDENT'].content_hi;
            Motor = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOTOR'] && sbiHomeData['PRODUCTS_RETAIL_MOTOR'].content_hi;
            Travel = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_TRAVEL'] && sbiHomeData['PRODUCTS_RETAIL_TRAVEL'].content_hi;
            Home = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_HOME'] && sbiHomeData['PRODUCTS_RETAIL_HOME'].content_hi;
            Health = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_HEALTH'] && sbiHomeData['PRODUCTS_RETAIL_HEALTH'].content_hi;
            Corona_Rakshak = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_CORONA_RAKSHAK_POLICY'] && sbiHomeData['PRODUCTS_RETAIL_CORONA_RAKSHAK_POLICY'].content_hi;
            Corona_Kovach = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_CORONA_KAVACH_POLICY'] && sbiHomeData['PRODUCTS_RETAIL_CORONA_KAVACH_POLICY'].content_hi;
            Know_More = sbiHomeData && sbiHomeData['PRODUCTS_KNOW_MORE'] && sbiHomeData['PRODUCTS_KNOW_MORE'].content_hi;
            Motor_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_MOTOR_INSURENCE'] && sbiHomeData['PRODUCTS_MOTOR_INSURENCE'].content_hi;
            Travel_Insurance = sbiHomeData && sbiHomeData['PRODUCS_TRAVEL_INSURENCE'] && sbiHomeData['PRODUCS_TRAVEL_INSURENCE'].content_hi;
            Home_Insurance = sbiHomeData && sbiHomeData['SIDE_MENU_HELTH_SIMPLE_HOME'] && sbiHomeData['SIDE_MENU_HELTH_SIMPLE_HOME'].content_hi;
            travel_insurance = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_TRAVEL_INSURENCE'] && sbiHomeData['PRODUCTS_RETAIL_TRAVEL_INSURENCE'].content_hi;
        }
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
                                        {Covid_19}
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                            <ul className="product-list">
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/covid-19.svg")} alt="" />
                                                        </figure>
                                                        <h3>{Corona_Kovach}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/covid-kavach"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Corona Kavach') }}>
                                                                {Know_More}
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/covid-19.svg")} alt="" />
                                                        </figure>
                                                        <h3>{Corona_Rakshak}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/corona-rakshak"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Corona Rakshak') }}>
                                                                {Know_More}
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
                                                                {Know_More}
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
                                        {Health_Insurence}
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <ul className="product-list">
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/ArogyaSanjeevni.svg")} alt="ArogyaSanjeevni" />
                                                        </figure>
                                                        <h3>{Health_Arogya}</h3>
                                                        <div className="prod-content">
                                                            <ul>
                                                                <li></li>
                                                            </ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            {/* <Link to={"/health-insurance/arogya-sanjeevani-policy"} className="btn-more">
                                                                {Know_More}
                                                            </Link> */}
                                                            <a href={appUrl + "/health-insurance/arogya-sanjeevani-policy?lang=" + lang_name} rel="noopener noreferrer"
                                                                className="btn-more" onClick={() => { this.gtmClickHandler('Arogya Sanjeevani Policy') }}>{Know_More}</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/Arogya-Supreme.svg")} alt="Arogya-Supreme" />
                                                        </figure>
                                                        <h3>Arogya Supreme</h3>
                                                        <div className="prod-content">
                                                            <ul>
                                                                <li></li>
                                                            </ul>
                                                        </div>
                                                        <div className="prod-btn-holder">                                                          
                                                            <a href={ appUrl + "/health-insurance/arogya-supreme?lang=" + lang_name} rel="noopener noreferrer" 
                                                            className="btn-more" onClick={()=>{this.gtmClickHandler('Arogya Supreme')}}>Know More</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/ArogyaPremier.svg")} alt="" />
                                                        </figure>
                                                        <h3>{Premier_Policy}</h3>
                                                        <div className="prod-content">
                                                            <ul>
                                                                <li> </li>
                                                            </ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            {/* <Link to={"/health-insurance/arogya-premier-policy"} className="btn-more">
                                                                {Know_More}
                                                            </Link> */}
                                                            <a href={appUrl + "/health-insurance/arogya-premier-policy?lang=" + lang_name} rel="noopener noreferrer"
                                                                className="btn-more" onClick={() => { this.gtmClickHandler('Arogya Premier Policy') }}>{Know_More}</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/ArogyaPlus.svg")} alt="" />
                                                        </figure>
                                                        <h3>{Plus_Policy}</h3>
                                                        <div className="prod-content">
                                                            <ul>
                                                                <li></li>
                                                            </ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            {/* <Link to={"/health-insurance/arogya-plus-policy"} className="btn-more">
                                                                {Know_More}
                                                            </Link> */}
                                                            <a href={appUrl + "/health-insurance/arogya-plus-policy?lang=" + lang_name} rel="noopener noreferrer"
                                                                className="btn-more" onClick={() => { this.gtmClickHandler('Arogya Plus Policy') }}>{Know_More}</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/ArogyaTopupPolicy.svg")} alt="" />
                                                        </figure>
                                                        <h3>{Top_Up_policy}</h3>
                                                        <div className="prod-content">
                                                            <ul>
                                                                <li></li>
                                                            </ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            {/* <Link to={"/health-insurance/arogya-topup-policy"} className="btn-more">
                                                                {Know_More}
                                                            </Link> */}
                                                            <a href={appUrl + "/health-insurance/arogya-topup-policy?lang=" + lang_name} rel="noopener noreferrer"
                                                                className="btn-more" onClick={() => { this.gtmClickHandler('Arogya Top up Policy') }}>{Know_More}</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/HealthInsurance.svg")} alt="" />
                                                        </figure>
                                                        <h3>{Insurence_Policy}</h3>
                                                        <div className="prod-content">
                                                            <ul>
                                                                <li></li>
                                                            </ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            {/* <Link to={"/health-insurance/retail-health"} className="btn-more">
                                                                {Know_More}
                                                            </Link> */}
                                                            <a href={appUrl + "/health-insurance/retail-health?lang=" + lang_name} rel="noopener noreferrer"
                                                                className="btn-more" onClick={() => { this.gtmClickHandler('Retail Health Insurance Policy') }}>{Know_More}</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/CriticalillnessInsurancePolicy.svg")} alt="" />
                                                        </figure>
                                                        <h3>{Illness_Policy}</h3>
                                                        <div className="prod-content">
                                                            <ul>
                                                                <li></li>
                                                            </ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            {/* <Link to={"/health-insurance/critical-illness-insurance"} className="btn-more">
                                                                {Know_More}
                                                            </Link> */}
                                                            <a href={appUrl + "/health-insurance/critical-illness-insurance?lang=" + lang_name} rel="noopener noreferrer"
                                                                className="btn-more" onClick={() => { this.gtmClickHandler('Critical Illness Insurance Policy') }}>{Know_More}</a>
                                                        </div>
                                                    </div>
                                                </li>  
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/HospitalDailyCash.svg")} alt="" />
                                                        </figure>
                                                        <h3>{Daily_Cash}</h3>
                                                        <div className="prod-content">
                                                            <ul>
                                                                <li></li>
                                                            </ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            {/* <Link to={"/health-insurance/hospital-daily-cash"} className="btn-more">
                                                                {Know_More}
                                                            </Link> */}
                                                            <a href={appUrl + "/health-insurance/hospital-daily-cash?lang=" + lang_name} rel="noopener noreferrer"
                                                                className="btn-more" onClick={() => { this.gtmClickHandler('Hospital Daily Cash Insurance Policy') }}>{Know_More}</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/GroupHealthInsurance-SBI.svg")} alt="" />
                                                        </figure>
                                                        <h3>{Group_Policy}</h3>
                                                        <div className="prod-content">
                                                            <ul>
                                                                <li></li>
                                                            </ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <a href={appUrl + "/health-insurance/group-health-insurance?lang=" + lang_name} rel="noopener noreferrer"
                                                                className="btn-more" onClick={() => { this.gtmClickHandler('Group Health Insurance - SBI') }}>{Know_More}</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/LoanInsurance.svg")} alt="" />
                                                        </figure>
                                                        <h3>{Loan_Policy}</h3>
                                                        <div className="prod-content">
                                                            <ul>
                                                                <li></li>
                                                            </ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <a href={appUrl + "/health-insurance/loan-insurance?lang=" + lang_name} rel="noopener noreferrer"
                                                                className="btn-more" onClick={() => { this.gtmClickHandler('Loan Insurance Policy') }}>{Know_More}</a>
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
                                        {Home_Insurance}
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                            <ul className="product-list">
                                              
                                              
                                                <li>
                                                            <div className="prod-box">
                                                                <figure>
                                                                    <img src={require("../../assets/images/product-icons/landing-page/SBI-General-Bharat-Griha-Raksha.svg")} alt="" />
                                                                </figure>
                                                                <h3>Bharat Griha Raksha</h3>
                                                                <div className="prod-content">
                                                                    <ul></ul>
                                                                </div>
                                                                <div className="prod-btn-holder">
                                                                <a href={ appUrl + "/home-insurance/bharat-griha-raksha" } rel="noopener noreferrer" 
                                                                className="btn-more" onClick={()=>{this.gtmClickHandler('Bharat Griha Raksha')}}>Know More</a>
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
                                        {Travel_Insurance}
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body>
                                            <ul className="product-list">
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/TravelInsurance.svg")} alt="" />
                                                        </figure>
                                                        <h3>{travel_insurance}</h3>
                                                        <div className="prod-content">
                                                            <ul>
                                                                <li></li>
                                                            </ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            {/* <Link to={"/travel-insurance"} className="btn-more">
                                                                {Know_More}
                                                            </Link> */}
                                                            <a href={appUrl + "/travel-insurance?lang=" + lang_name} rel="noopener noreferrer"
                                                                className="btn-more" onClick={() => { this.gtmClickHandler('Travel Insurance (Business and Holiday)') }}>{Know_More}</a>
                                                            <a href={redirectUrl + "/travel/product"} target="_blank" rel="noopener noreferrer"
                                                                className="btn-quote" onClick={() => { this.gtmClickHandler('Travel Insurance (Business and Holiday)') }}>{Get_Quote}</a>
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
                                        {Motor_Insurance}
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body>
                                            <ul className="product-list">
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/MotorTwoWheeler.svg")} alt="" />
                                                        </figure>
                                                        <h3>{Two_Wheeler}</h3>
                                                        <div className="prod-content">
                                                            <ul>
                                                                <li></li>
                                                            </ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            {/* <Link to={"/motor-insurance/two-wheeler-insurance"} className="btn-more">{Know_More}</Link> */}
                                                            <a href={appUrl + "/motor-insurance/two-wheeler-insurance?lang=" + lang_name} rel="noopener noreferrer"
                                                                className="btn-more" onClick={() => { this.gtmClickHandler('Two Wheeler Insurance') }}>{Know_More}</a>
                                                            <a href={redirectUrl + "/M2W/GetQuote"} target="_blank" rel="noopener noreferrer"
                                                                className="btn-quote" onClick={() => { this.gtmClickHandler('Two Wheeler Insurance') }}>{Get_Quote}</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/MotorPrivateCarInsurance.svg")} alt="" />
                                                        </figure>
                                                        <h3>{Private_Car}</h3>
                                                        <div className="prod-content">
                                                            <ul>
                                                                <li></li>
                                                            </ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            {/* <Link to={"/motor-insurance/private-car-insurance"} className="btn-more">
                                                                {Know_More}</Link> */}
                                                            <a href={appUrl + "/motor-insurance/private-car-insurance?lang=" + lang_name} rel="noopener noreferrer"
                                                                className="btn-more" onClick={() => { this.gtmClickHandler('Private Car Insurance') }}>{Know_More}</a>
                                                            <a href={redirectUrl + "/PMCAR/GetQuote"} target="_blank" rel="noopener noreferrer"
                                                                className="btn-quote" onClick={() => { this.gtmClickHandler('Private Car Insurance') }}>{Get_Quote}</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/MotorActOnlyTwoWheelerLongTerm.svg")} alt="" />
                                                        </figure>
                                                        <h3>{Motor_Two_Wheeler}</h3>
                                                        <div className="prod-content">
                                                            <ul>
                                                                <li></li>
                                                            </ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <a href={appUrl + "/motor-insurance/motor-act-only-two-wheeler-insurance?lang=" + lang_name} rel="noopener noreferrer"
                                                                className="btn-more" onClick={() => { this.gtmClickHandler('Motor Act Only- Two Wheeler(5 Years)') }}>{Know_More}</a>
                                                            {/* <Link to={"/motor-insurance/motor-act-only-two-wheeler-insurance"} className="btn-more" >{Know_More}</Link> */}
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/LongTermTwoWheeler.svg")} alt="" />
                                                        </figure>
                                                        <h3>{Retail_Long_Term}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <a href={appUrl + "/motor-insurance/long-term-two-wheeler-insurance?lang=" + lang_name} rel="noopener noreferrer"
                                                                className="btn-more" onClick={() => { this.gtmClickHandler('Long Term Two Wheeler Insurance Policy - Package') }}>{Know_More}</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/MotorActOnlyPrivateCarLongTerm.svg")} alt="" />
                                                        </figure>
                                                        <h3>{Motor_Private_3_Year}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <a href={appUrl + "/motor-insurance/motor-act-only-private-car-insurance?lang=" + lang_name} rel="noopener noreferrer"
                                                                className="btn-more" onClick={() => { this.gtmClickHandler('Motor Act Only- Private Car (3 Years)') }}>{Know_More}</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/CommercialMotorInsurance.svg")} alt="CommercialMotorInsurance" /></figure>
                                                        <h3>{Trial_Insurence}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/commercial-motor-insurance"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Motor - Trailer Insurance') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/TractorandOtherFarmVehiclesInsurance.svg")} alt="TractorandOtherFarmVehiclesInsurance" /></figure>
                                                        <h3>{Motor_Commercial}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/tractor-and-other-farm-vehicle-insurance"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Motor Commercial Vehicle Insurance Policy Package') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/MotorActOnly.svg")} alt="MotorActOnly" /></figure>
                                                        <h3>{Motor_Act_Only}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/motor-act-only"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Act Only Insurance Policy') }}>{Know_More}</Link>
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
                                        {Personal_Accident_Insurance}
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body>
                                            <ul className="product-list">
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/IndividualPersonalAccidentInsurancePolicy.svg")} alt="" />
                                                        </figure>
                                                        <h3>{Individual_Accident}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/personal-accident-insurance/individual-pa-insurance"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Individual Personal Accident') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/Saral-Suraksha-Bima-SBI-General-Insurance-Company-Limited.svg")} alt="" />
                                                        </figure>
                                                        <h3>Saral Suraksha Bima</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={ "/saral-suraksha-bima" } className="btn-more" 
                                                                onClick={()=>{this.gtmClickHandler('Saral Suraksha Bima')}}>Know More</Link>
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
                                        <Nav.Item onClick={() => { this.gtmNavHandler('Retail', 'Covid-19') }}>
                                            <Nav.Link eventKey="covid-19">
                                                {Covid_19}
                                            </Nav.Link>
                                        </Nav.Item>
                                        {/*<Nav.Item onClick={()=>{this.gtmNavHandler('Retail','Shagun')}}>
                                                <Nav.Link eventKey="Shagun">
                                                    Shagun - Gift an insurance
                                                </Nav.Link>
                                            </Nav.Item>*/}
                                        <Nav.Item onClick={() => { this.gtmNavHandler('Retail', 'Health') }}>
                                            <Nav.Link eventKey="HealthInsurance">
                                                {Health}
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item onClick={() => { this.gtmNavHandler('Retail', 'Home') }}>
                                            <Nav.Link eventKey="HomeInsurance">
                                                {Home}
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item onClick={() => { this.gtmNavHandler('Retail', 'Travel') }}>
                                            <Nav.Link eventKey="TravelInsurance">
                                                {Travel}
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item onClick={() => { this.gtmNavHandler('Retail', 'Motor') }}>
                                            <Nav.Link eventKey="MotorInsurance">
                                                {Motor}
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item onClick={() => { this.gtmNavHandler('Retail', 'Personal Accident') }}>
                                            <Nav.Link eventKey="PersonalAccidentInsurance">
                                                {Personal_Accident}
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
                                                            <h3>{Corona_Kovach}</h3>
                                                            <div className="prod-content">
                                                                <ul>
                                                                    <li></li>
                                                                </ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/covid-kavach"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Corona Kavach Policy') }}>{Know_More}</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/covid-19.svg")} alt="" />
                                                            </figure>
                                                            <h3>{Corona_Rakshak}</h3>
                                                            <div className="prod-content">
                                                                <ul>
                                                                    <li></li>
                                                                </ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/corona-rakshak"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Corona Rakshak Policy') }}>{Know_More}</Link>
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
                                                                    onClick={() => { this.gtmClickHandler('Shagun') }}>{Know_More}</Link>
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
                                                            <h3>{Health_Arogya}</h3>
                                                            <div className="prod-content">
                                                                <ul>
                                                                    <li></li>
                                                                </ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                {/* <Link to={"/health-insurance/arogya-sanjeevani-policy"} className="btn-more">
                                                                        {Know_More}
                                                                    </Link> */}
                                                                <a href={appUrl + "/health-insurance/arogya-sanjeevani-policy?lang=" + lang_name} rel="noopener noreferrer"
                                                                    className="btn-more" onClick={() => { this.gtmClickHandler('Arogya Sanjeevani Policy') }}>{Know_More}</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/Arogya-Supreme.svg")} alt="Arogya-Supreme" />
                                                        </figure>
                                                        <h3>Arogya Supreme</h3>
                                                        <div className="prod-content">
                                                            <ul>
                                                                <li></li>
                                                            </ul>
                                                        </div>
                                                        <div className="prod-btn-holder">                                                          
                                                            <a href={ appUrl + "/health-insurance/arogya-supreme?lang=" + lang_name} rel="noopener noreferrer" 
                                                            className="btn-more" onClick={()=>{this.gtmClickHandler('Arogya Supreme')}}>Know More</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/ArogyaPremier.svg")} alt="" />
                                                            </figure>
                                                            <h3>{Premier_Policy}</h3>
                                                            <div className="prod-content">
                                                                <ul>
                                                                    <li></li>
                                                                </ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                {/* <Link to={"/health-insurance/arogya-premier-policy"} className="btn-more">
                                                                        {Know_More}
                                                                    </Link> */}
                                                                <a href={appUrl + "/health-insurance/arogya-premier-policy?lang=" + lang_name} rel="noopener noreferrer"
                                                                    className="btn-more" onClick={() => { this.gtmClickHandler('Arogya Premier Policy') }}>{Know_More}</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/ArogyaPlus.svg")} alt="" />
                                                            </figure>
                                                            <h3>{Plus_Policy}</h3>
                                                            <div className="prod-content">
                                                                <ul>
                                                                    <li></li>
                                                                </ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                {/* <Link to={"/health-insurance/arogya-plus-policy"} className="btn-more">
                                                                        {Know_More}
                                                                    </Link> */}
                                                                <a href={appUrl + "/health-insurance/arogya-plus-policy?lang=" + lang_name} rel="noopener noreferrer"
                                                                    className="btn-more" onClick={() => { this.gtmClickHandler('Arogya Plus Policy') }}>{Know_More}</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/ArogyaTopupPolicy.svg")} alt="" />
                                                            </figure>
                                                            <h3>{Top_Up_policy}</h3>
                                                            <div className="prod-content">
                                                                <ul>
                                                                    <li></li>
                                                                </ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                {/* <Link to={"/health-insurance/arogya-topup-policy"} className="btn-more" >
                                                                        {Know_More}
                                                                    </Link> */}
                                                                <a href={appUrl + "/health-insurance/arogya-topup-policy?lang=" + lang_name} rel="noopener noreferrer"
                                                                    className="btn-more" onClick={() => { this.gtmClickHandler('Arogya Top up Policy') }}>{Know_More}</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/HealthInsurance.svg")} alt="" />
                                                            </figure>
                                                            <h3>{Insurence_Policy}</h3>
                                                            <div className="prod-content">
                                                                <ul>
                                                                    <li></li>
                                                                </ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                {/* <Link to={"/health-insurance/retail-health"} className="btn-more">
                                                                        {Know_More}
                                                                    </Link> */}
                                                                <a href={appUrl + "/health-insurance/retail-health?lang=" + lang_name} rel="noopener noreferrer"
                                                                    className="btn-more" onClick={() => { this.gtmClickHandler('Retail Health Insurance Policy') }}>{Know_More}</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/CriticalillnessInsurancePolicy.svg")} alt="" />
                                                            </figure>
                                                            <h3>{Illness_Policy}</h3>
                                                            <div className="prod-content">
                                                                <ul>
                                                                    <li></li>
                                                                </ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                {/* <Link to={ "/health-insurance/critical-illness-insurance"} className="btn-more">
                                                                        {Know_More}
                                                                    </Link> */}
                                                                <a href={appUrl + "/health-insurance/critical-illness-insurance?lang=" + lang_name} rel="noopener noreferrer"
                                                                    className="btn-more" onClick={() => { this.gtmClickHandler('Critical Illness Insurance Policy') }}>{Know_More}</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/HospitalDailyCash.svg")} alt="" />
                                                            </figure>
                                                            <h3>{Daily_Cash}</h3>
                                                            <div className="prod-content">
                                                                <ul>
                                                                    <li></li>
                                                                </ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                {/* <Link to={"/health-insurance/hospital-daily-cash"} className="btn-more">
                                                                        {Know_More}
                                                                    </Link> */}
                                                                <a href={appUrl + "/health-insurance/hospital-daily-cash?lang=" + lang_name} rel="noopener noreferrer"
                                                                    className="btn-more" onClick={() => { this.gtmClickHandler('Hospital Daily Cash Insurance Policy') }}>{Know_More}</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/GroupHealthInsurance-SBI.svg")} alt="" />
                                                            </figure>
                                                            <h3>{Group_Policy}</h3>
                                                            <div className="prod-content">
                                                                <ul>
                                                                    <li></li>
                                                                </ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <a href={appUrl + "/health-insurance/group-health-insurance?lang=" + lang_name} rel="noopener noreferrer"
                                                                    className="btn-more" onClick={() => { this.gtmClickHandler('Group Health Insurance - SBI') }}>{Know_More}</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/LoanInsurance.svg")} alt="" />
                                                            </figure>
                                                            <h3>{Loan_Policy}</h3>
                                                            <div className="prod-content">
                                                                <ul>
                                                                    <li></li>
                                                                </ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <a href={appUrl + "/health-insurance/loan-insurance?lang=" + lang_name} rel="noopener noreferrer"
                                                                    className="btn-more" onClick={() => { this.gtmClickHandler('Loan Insurance Policy') }}>{Know_More}</a>
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
                                                                    <img src={require("../../assets/images/product-icons/landing-page/SBI-General-Bharat-Griha-Raksha.svg")} alt="" />
                                                                </figure>
                                                                <h3>Bharat Griha Raksha</h3>
                                                                <div className="prod-content">
                                                                    <ul></ul>
                                                                </div>
                                                                <div className="prod-btn-holder">
                                                                <a href={ appUrl + "/home-insurance/bharat-griha-raksha" } rel="noopener noreferrer" 
                                                                className="btn-more" onClick={()=>{this.gtmClickHandler('Bharat Griha Raksha')}}>Know More</a>
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
                                                            <h3>{travel_insurance}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                {/* <Link to={"/travel-insurance"} className="btn-more">{Know_More}</Link> */}
                                                                <a href={appUrl + "/travel-insurance?lang=" + lang_name} rel="noopener noreferrer"
                                                                    className="btn-more" onClick={() => { this.gtmClickHandler('Travel Insurance (Business and Holiday)') }}>{Know_More}</a>
                                                                <a href={redirectUrl + "/travel/product"} target="_blank" rel="noopener noreferrer"
                                                                    className="btn-quote" onClick={() => { this.gtmClickHandler('Travel Insurance (Business and Holiday)') }}>{Get_Quote}</a>
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
                                                            <h3>{Two_Wheeler}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                {/* <Link to={"/motor-insurance/two-wheeler-insurance"} className="btn-more">{Know_More}</Link> */}
                                                                <a href={appUrl + "/motor-insurance/two-wheeler-insurance?lang=" + lang_name} rel="noopener noreferrer"
                                                                    className="btn-more" onClick={() => { this.gtmClickHandler('Two Wheeler Insurance') }}>{Know_More}</a>
                                                                <a href={redirectUrl + "/M2W/GetQuote"} target="_blank" rel="noopener noreferrer"
                                                                    className="btn-quote" onClick={() => { this.gtmClickHandler('Two Wheeler Insurance') }}>{Get_Quote}</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/MotorPrivateCarInsurance.svg")} alt="" />
                                                            </figure>
                                                            <h3>{Private_Car}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                {/* <Link to={"/motor-insurance/private-car-insurance"} className="btn-more">{Know_More}</Link> */}
                                                                <a href={appUrl + "/motor-insurance/private-car-insurance?lang=" + lang_name} rel="noopener noreferrer"
                                                                    className="btn-more" onClick={() => { this.gtmClickHandler('Private Car Insurance') }}>{Know_More}</a>
                                                                <a href={redirectUrl + "/PMCAR/GetQuote"} target="_blank" rel="noopener noreferrer"
                                                                    className="btn-quote" onClick={() => { this.gtmClickHandler('Private Car Insurance') }}>{Get_Quote}</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/MotorActOnlyTwoWheelerLongTerm.svg")} alt="" />
                                                            </figure>
                                                            <h3>{Motor_Two_Wheeler}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <a href={appUrl + "/motor-insurance/motor-act-only-two-wheeler-insurance?lang=" + lang_name} rel="noopener noreferrer"
                                                                    className="btn-more" onClick={() => { this.gtmClickHandler('Motor Act Only- Two Wheeler(5 Years)') }}>{Know_More}</a>
                                                                {/* <Link to={"/motor-insurance/motor-act-only-two-wheeler-insurance"} className="btn-more">{Know_More}</Link> */}
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/LongTermTwoWheeler.svg")} alt="" />
                                                            </figure>
                                                            <h3>{Retail_Long_Term}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <a href={appUrl + "/motor-insurance/long-term-two-wheeler-insurance?lang=" + lang_name} rel="noopener noreferrer"
                                                                    className="btn-more" onClick={() => { this.gtmClickHandler('Long Term Two Wheeler Insurance Policy - Package') }}>{Know_More}</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/MotorActOnlyPrivateCarLongTerm.svg")} alt="" />
                                                            </figure>
                                                            <h3>{Motor_Private_3_Year}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <a href={appUrl + "/motor-insurance/motor-act-only-private-car-insurance?lang=" + lang_name} rel="noopener noreferrer"
                                                                    className="btn-more" onClick={() => { this.gtmClickHandler('Motor Act Only- Private Car (3 Years)') }}>{Know_More}</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/CommercialMotorInsurance.svg")} alt="CommercialMotorInsurance" />
                                                            </figure>
                                                            <h3>{Trial_Insurence}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/commercial-motor-insurance"}
                                                                    className="btn-more" onClick={() => { this.gtmClickHandler('Motor - Trailer Insurance') }}>{Know_More}</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/TractorandOtherFarmVehiclesInsurance.svg")} alt="TractorandOtherFarmVehiclesInsurance" />
                                                            </figure>
                                                            <h3>{Motor_Commercial}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/tractor-and-other-farm-vehicle-insurance"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Motor Commercial Vehicle Insurance Policy Package') }}>{Know_More}</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/MotorActOnly.svg")} alt="MotorActOnly" />
                                                            </figure>
                                                            <h3>{Motor_Act_Only}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/motor-act-only"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Act Only Insurance Policy') }}>{Know_More}</Link>
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
                                                            <h3>{Individual_Accident}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/personal-accident-insurance/individual-pa-insurance"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Individual Personal Accident') }}>{Know_More}</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/Saral-Suraksha-Bima-SBI-General-Insurance-Company-Limited.svg")} alt="" />
                                                        </figure>
                                                        <h3>Saral Suraksha Bima</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={ "/saral-suraksha-bima" } className="btn-more" 
                                                                onClick={()=>{this.gtmClickHandler('Saral Suraksha Bima')}}>Know More</Link>
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