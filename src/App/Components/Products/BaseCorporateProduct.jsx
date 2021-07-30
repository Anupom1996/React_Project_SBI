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
        let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
        let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
        let Miscellaneous, Others, Marine_Insurence, Package_Insurence, Construction_And_Engineer_Insurence,
            Money_Insurance_Policy, Plate_Glass_Insurance_Policy, Burglary_Insurance_Policy, Motor_Trade_Road_Transit, Motor_Trade_Road_Risk, Motor_Trade_Internal_Risk, Group_Personal_Accident, Group_Health_Insurance_Policy, Group_Loan_Insurance_Policy, Arogya_Sanjeevani_Group_Product, Standard_Fire_Special_Perils_Insurance_Policy, Consequential_Loss_Insurance_Policy, Marine_Cargo_Insurance_Open_Cover, Industrial_All_Risks_Insurance_Policy, Business_Package_Insurance_Policy, Latent_Defects_Insurance_Policy, Electronic_Equipment_Insurance, Contractors_All_Risks_Insurance, Erection_All_Risks_Insurance, Contractors_Plant_Machinery_Insurance, Machinery_Breakdown_Insurance, Boiler_Pressure_Plant_Insurance, Machinery_Loss_of_Profit_Insurance_Policy, Sign_Board_Insurance_Policy,
            Modified_National_Agriculture_Insurance_Scheme, Motor_Insurence, Health_Insurence, Fire_Insurence,
            Trade_Credit_Insurance_Policy, Aviation_Hull_Package_policy, SME_Package_Insurance_Policy, Cellular_Network_Insurance_policy, Advance_Loss_of_Profit_Policy, Baggage_Insurance_Policy, Portable_Electronic_Equipment_Insurance_Policy, Weather_Insurance, Mega_Risk_Insurance_Policy, Port_Package_Insurance_Policy, Delay_in_Start_Up_Insurance, All_Risk_Insurance_Policy, Kidnap_Ransom_and_Extortion_Insurance, Fidelity_Guarantee_Insurance_Policy,
            Oil_Energy_Risk_Insurance, motor, health, fire, marine, packages, construction, others, Know_More;

        if (lang_name === 'en') {

            Package_Insurence = sbiHomeData && sbiHomeData['PRODUCTS_PACKAGE_INSURENCE'] && sbiHomeData['PRODUCTS_PACKAGE_INSURENCE'].content_en;
            Marine_Insurence = sbiHomeData && sbiHomeData['PRODUCTS_MARINE_INSURENCE'] && sbiHomeData['PRODUCTS_MARINE_INSURENCE'].content_en;
            Fire_Insurence = sbiHomeData && sbiHomeData['PRODUCTS_FIRE_INSURENCE'] && sbiHomeData['PRODUCTS_FIRE_INSURENCE'].content_en;
            Health_Insurence = sbiHomeData && sbiHomeData['PRODUCS_HELTH_INSURENCE'] &&
                sbiHomeData['PRODUCS_HELTH_INSURENCE'].content_en;
            Miscellaneous = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MISCELLANEOUS'] &&
                sbiHomeData['PRODUCTS_CORPORATE_MISCELLANEOUS'].content_en;
            // Motor_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR'] &&
            //  sbiHomeData['PRODUCTS_CORPORATE_MOTOR'].content_en;  
            // Health_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_HEALTH'] && sbiHomeData['PRODUCTS_RETAIL_HEALTH'].content_en;       
            // Fire_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE'] &&
            //  sbiHomeData['PRODUCTS_CORPORATE_FIRE'].content_en;    
            // Marine_Insurance= sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE'] && 
            // sbiHomeData['PRODUCTS_CORPORATE_MARINE'].content_en;    
            // Package_Insurance= sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKGE'] &&
            //  sbiHomeData['PRODUCTS_CORPORATE_PACKGE'].content_en;    
            // Construction_Engineering_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_CON_ENG'] && 
            // sbiHomeData['PRODUCTS_CORPORATE_CON_ENG'].content_en;    
            Others = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS'] &&
                sbiHomeData['PRODUCTS_CORPORATE_OTHERS'].content_en;
            Money_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MISCELLANEOUS_MONEY_POLICY'] &&
                sbiHomeData['PRODUCTS_CORPORATE_MISCELLANEOUS_MONEY_POLICY'].content_en;
            Plate_Glass_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MISCELLANEOUS_PLATE_POLICY'] &&
                sbiHomeData['PRODUCTS_CORPORATE_MISCELLANEOUS_PLATE_POLICY'].content_en;
            Burglary_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MISCELLANEOUS_BURGLARY_POLICY'] &&
                sbiHomeData['PRODUCTS_CORPORATE_MISCELLANEOUS_BURGLARY_POLICY'].content_en;
            Motor_Trade_Road_Transit = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TRADE_ROAD'] &&
                sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TRADE_ROAD'].content_en;
            Motor_Trade_Road_Risk = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_ROAD_RISK'] &&
                sbiHomeData['PRODUCTS_CORPORATE_MOTOR_ROAD_RISK'].content_en;
            Motor_Trade_Internal_Risk = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_INTERNAL_RISK'] &&
                sbiHomeData['PRODUCTS_CORPORATE_MOTOR_INTERNAL_RISK'].content_en;
            Group_Personal_Accident = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_PERSONAL_ACCIDENT'] &&
                sbiHomeData['PRODUCTS_CORPORATE_HEALTH_PERSONAL_ACCIDENT'].content_en;
            Group_Health_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_INSURENCE_POLICY'] &&
                sbiHomeData['PRODUCTS_CORPORATE_HEALTH_INSURENCE_POLICY'].content_en;
            Group_Loan_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_LOAN_INSURENCE_POLICY'] &&
                sbiHomeData['PRODUCTS_CORPORATE_HEALTH_LOAN_INSURENCE_POLICY'].content_en;
            Arogya_Sanjeevani_Group_Product = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_SANJEEVANI_PRODUCT'] &&
                sbiHomeData['PRODUCTS_CORPORATE_HEALTH_SANJEEVANI_PRODUCT'].content_en;
            Standard_Fire_Special_Perils_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_SFSP'] &&
                sbiHomeData['PRODUCTS_CORPORATE_FIRE_SFSP'].content_en;
            Consequential_Loss_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_LOSS_POLICY'] &&
                sbiHomeData['PRODUCTS_CORPORATE_FIRE_LOSS_POLICY'].content_en;
            Marine_Cargo_Insurance_Open_Cover = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_OPEN_COVER'] &&
                sbiHomeData['PRODUCTS_CORPORATE_MARINE_OPEN_COVER'].content_en;
            Industrial_All_Risks_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_INDUSTRIAL_POLICY'] &&
                sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_INDUSTRIAL_POLICY'].content_en;
            Business_Package_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_BUSINESS_POLICY'] &&
                sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_BUSINESS_POLICY'].content_en;
            Latent_Defects_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_CONSTRUCTION_DEFECTS_POLICY'] &&
                sbiHomeData['PRODUCTS_CORPORATE_CONSTRUCTION_DEFECTS_POLICY'].content_en;
            Electronic_Equipment_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_CONSTRUCTION_EEI'] &&
                sbiHomeData['PRODUCTS_CORPORATE_CONSTRUCTION_EEI'].content_en;

            Know_More = sbiHomeData &&
                sbiHomeData['PRODUCTS_KNOW_MORE']
                && sbiHomeData['PRODUCTS_KNOW_MORE'].content_en;
            Contractors_All_Risks_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_CONSTRUCTION_CAR'] && sbiHomeData['PRODUCTS_CORPORATE_CONSTRUCTION_CAR'].content_en;
            Erection_All_Risks_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_CONSTRUCTION_EAR'] && sbiHomeData['PRODUCTS_CORPORATE_CONSTRUCTION_EAR'].content_en;
            Contractors_Plant_Machinery_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_CONSTRUCTION_CPM'] && sbiHomeData['PRODUCTS_CORPORATE_CONSTRUCTION_CPM'].content_en;
            Machinery_Breakdown_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_CONSTRUCTION_MB'] && sbiHomeData['PRODUCTS_CORPORATE_CONSTRUCTION_MB'].content_en;
            Boiler_Pressure_Plant_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_CONSTRUCTION_BOILER'] && sbiHomeData['PRODUCTS_CORPORATE_CONSTRUCTION_BOILER'].content_en;
            Machinery_Loss_of_Profit_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_CONSTRUCTION_LOSS_OF_PROFIT'] && sbiHomeData['PRODUCTS_CORPORATE_CONSTRUCTION_LOSS_OF_PROFIT'].content_en;
            Sign_Board_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_SIGN_BOARD'] && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_SIGN_BOARD'].content_en;
            Modified_National_Agriculture_Insurance_Scheme = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_MNAIS'] && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_MNAIS'].content_en;
            Trade_Credit_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_TRADE_CREDIT'] && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_TRADE_CREDIT'].content_en;
            Aviation_Hull_Package_policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_AVIATION'] && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_AVIATION'].content_en;
            SME_Package_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_SME'] && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_SME'].content_en;
            Cellular_Network_Insurance_policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_CELLUAR'] && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_CELLUAR'].content_en;
            Advance_Loss_of_Profit_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_ADVANCE_POLICY'] && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_ADVANCE_POLICY'].content_en;
            Baggage_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_BAGGAGE'] && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_BAGGAGE'].content_en;
            Portable_Electronic_Equipment_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_PORTABLE'] && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_PORTABLE'].content_en;
            Weather_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_WEATHER'] && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_WEATHER'].content_en;
            Mega_Risk_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_MEGA'] && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_MEGA'].content_en;
            Port_Package_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_PORT'] && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_PORT'].content_en;
            Delay_in_Start_Up_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_DELAY'] && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_DELAY'].content_en;
            All_Risk_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_ALL_RISK'] && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_ALL_RISK'].content_en;
            Kidnap_Ransom_and_Extortion_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_KIDNAP'] && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_KIDNAP'].content_en;
            Fidelity_Guarantee_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_FIDELITY'] && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_FIDELITY'].content_en;
            Oil_Energy_Risk_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_OIL'] && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_OIL'].content_en;
            Construction_And_Engineer_Insurence = sbiHomeData && sbiHomeData['PRODUCTS_CONSTRUCTION_ENG_INSURENCE'] && sbiHomeData['PRODUCTS_CONSTRUCTION_ENG_INSURENCE'].content_en;

            Motor_Insurence = sbiHomeData && sbiHomeData['PRODUCTS_MOTOR_INSURENCE'] && sbiHomeData['PRODUCTS_MOTOR_INSURENCE'].content_en;
            motor = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR'].content_en;
            health = sbiHomeData && sbiHomeData['HOME_TAB_HEALTH'] && sbiHomeData['HOME_TAB_HEALTH'].content_en;
            fire = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE'].content_en;
            marine = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE'].content_en;
            packages = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKGE'] && sbiHomeData['PRODUCTS_CORPORATE_PACKGE'].content_en;
            construction = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_CON_ENG'] && sbiHomeData['PRODUCTS_CORPORATE_CON_ENG'].content_en;
            others = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS'] && sbiHomeData['PRODUCTS_CORPORATE_OTHERS'].content_en;



        } else {

            Construction_And_Engineer_Insurence = sbiHomeData && sbiHomeData['PRODUCTS_CONSTRUCTION_ENG_INSURENCE'] && sbiHomeData['PRODUCTS_CONSTRUCTION_ENG_INSURENCE'].content_hi;
            Package_Insurence = sbiHomeData && sbiHomeData['PRODUCTS_PACKAGE_INSURENCE'] && sbiHomeData['PRODUCTS_PACKAGE_INSURENCE'].content_hi;
            Motor_Insurence = sbiHomeData && sbiHomeData['PRODUCTS_MOTOR_INSURENCE'] && sbiHomeData['PRODUCTS_MOTOR_INSURENCE'].content_hi;
            Miscellaneous = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MISCELLANEOUS'] && sbiHomeData['PRODUCTS_CORPORATE_MISCELLANEOUS'].content_hi;
            // Motor_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR'] &&    sbiHomeData['PRODUCTS_CORPORATE_MOTOR'].content_hi; 
            // Health_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_HEALTH'] && sbiHomeData['PRODUCTS_RETAIL_HEALTH'].content_hi;   
            // Fire_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE'] &&    sbiHomeData['PRODUCTS_CORPORATE_FIRE'].content_hi;  
            // Marine_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE'] &&    sbiHomeData['PRODUCTS_CORPORATE_MARINE'].content_hi;  
            // Package_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKGE'] &&    sbiHomeData['PRODUCTS_CORPORATE_PACKGE'].content_hi;  
            // Construction_Engineering_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_CON_ENG'] &&    sbiHomeData['PRODUCTS_CORPORATE_CON_ENG'].content_hi;  
            Others = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS'] && sbiHomeData['PRODUCTS_CORPORATE_OTHERS'].content_hi;
            Money_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MISCELLANEOUS_MONEY_POLICY'] && sbiHomeData['PRODUCTS_CORPORATE_MISCELLANEOUS_MONEY_POLICY'].content_hi;
            Plate_Glass_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MISCELLANEOUS_PLATE_POLICY'] &&
                sbiHomeData['PRODUCTS_CORPORATE_MISCELLANEOUS_PLATE_POLICY'].content_hi;
            Burglary_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MISCELLANEOUS_BURGLARY_POLICY'] &&
                sbiHomeData['PRODUCTS_CORPORATE_MISCELLANEOUS_BURGLARY_POLICY'].content_hi;
            Motor_Trade_Road_Transit = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TRADE_ROAD'] &&
                sbiHomeData['PRODUCTS_CORPORATE_MOTOR_TRADE_ROAD'].content_hi;
            Motor_Trade_Road_Risk = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_ROAD_RISK'] &&
                sbiHomeData['PRODUCTS_CORPORATE_MOTOR_ROAD_RISK'].content_hi;
            Motor_Trade_Internal_Risk = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR_INTERNAL_RISK'] &&
                sbiHomeData['PRODUCTS_CORPORATE_MOTOR_INTERNAL_RISK'].content_hi;
            Group_Personal_Accident = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_PERSONAL_ACCIDENT'] &&
                sbiHomeData['PRODUCTS_CORPORATE_HEALTH_PERSONAL_ACCIDENT'].content_hi;
            Group_Health_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_INSURENCE_POLICY'] &&
                sbiHomeData['PRODUCTS_CORPORATE_HEALTH_INSURENCE_POLICY'].content_hi;
            Group_Loan_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_LOAN_INSURENCE_POLICY'] &&
                sbiHomeData['PRODUCTS_CORPORATE_HEALTH_LOAN_INSURENCE_POLICY'].content_hi;

            Know_More = sbiHomeData &&
                sbiHomeData['PRODUCTS_KNOW_MORE']
                && sbiHomeData['PRODUCTS_KNOW_MORE'].content_hi;
            Arogya_Sanjeevani_Group_Product = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_SANJEEVANI_PRODUCT'] &&
                sbiHomeData['PRODUCTS_CORPORATE_HEALTH_SANJEEVANI_PRODUCT'].content_hi;
            Standard_Fire_Special_Perils_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_SFSP'] &&
                sbiHomeData['PRODUCTS_CORPORATE_FIRE_SFSP'].content_hi;
            Consequential_Loss_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE_LOSS_POLICY'] &&
                sbiHomeData['PRODUCTS_CORPORATE_FIRE_LOSS_POLICY'].content_hi;
            Marine_Cargo_Insurance_Open_Cover = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE_OPEN_COVER'] &&
                sbiHomeData['PRODUCTS_CORPORATE_MARINE_OPEN_COVER'].content_hi;
            Industrial_All_Risks_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_INDUSTRIAL_POLICY'] &&
                sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_INDUSTRIAL_POLICY'].content_hi;
            Business_Package_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_BUSINESS_POLICY'] &&
                sbiHomeData['PRODUCTS_CORPORATE_PACKAGE_BUSINESS_POLICY'].content_hi;
            Latent_Defects_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_CONSTRUCTION_DEFECTS_POLICY'] &&
                sbiHomeData['PRODUCTS_CORPORATE_CONSTRUCTION_DEFECTS_POLICY'].content_hi;
            Health_Insurence = sbiHomeData && sbiHomeData['PRODUCS_HELTH_INSURENCE'] &&
                sbiHomeData['PRODUCS_HELTH_INSURENCE'].content_hi;
            // Package_Insurence = sbiHomeData && sbiHomeData['PRODUCTS_PACKAGE_INSURENCE'] && sbiHomeData['PRODUCTS_PACKAGE_INSURENCE'].content_hi;    
            Marine_Insurence = sbiHomeData && sbiHomeData['PRODUCTS_MARINE_INSURENCE'] && sbiHomeData['PRODUCTS_MARINE_INSURENCE'].content_hi;
            Electronic_Equipment_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_CONSTRUCTION_EEI'] &&
                sbiHomeData['PRODUCTS_CORPORATE_CONSTRUCTION_EEI'].content_hi;
            Contractors_All_Risks_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_CONSTRUCTION_CAR'] &&
                sbiHomeData['PRODUCTS_CORPORATE_CONSTRUCTION_CAR'].content_hi;
            Erection_All_Risks_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_CONSTRUCTION_EAR'] &&
                sbiHomeData['PRODUCTS_CORPORATE_CONSTRUCTION_EAR'].content_hi;
            Contractors_Plant_Machinery_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_CONSTRUCTION_CPM'] &&
                sbiHomeData['PRODUCTS_CORPORATE_CONSTRUCTION_CPM'].content_hi;
            Machinery_Breakdown_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_CONSTRUCTION_MB'] &&
                sbiHomeData['PRODUCTS_CORPORATE_CONSTRUCTION_MB'].content_hi;
            Boiler_Pressure_Plant_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_CONSTRUCTION_BOILER'] &&
                sbiHomeData['PRODUCTS_CORPORATE_CONSTRUCTION_BOILER'].content_hi;

            Machinery_Loss_of_Profit_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_CONSTRUCTION_LOSS_OF_PROFIT'] &&
                sbiHomeData['PRODUCTS_CORPORATE_CONSTRUCTION_LOSS_OF_PROFIT'].content_hi;
            Sign_Board_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_SIGN_BOARD'] &&
                sbiHomeData['PRODUCTS_CORPORATE_OTHERS_SIGN_BOARD'].content_hi;
            Modified_National_Agriculture_Insurance_Scheme = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_MNAIS'] &&
                sbiHomeData['PRODUCTS_CORPORATE_OTHERS_MNAIS'].content_hi;
            Trade_Credit_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_TRADE_CREDIT'] &&
                sbiHomeData['PRODUCTS_CORPORATE_OTHERS_TRADE_CREDIT'].content_hi;
            Aviation_Hull_Package_policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_AVIATION'] &&
                sbiHomeData['PRODUCTS_CORPORATE_OTHERS_AVIATION'].content_hi;
            SME_Package_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_SME'] &&
                sbiHomeData['PRODUCTS_CORPORATE_OTHERS_SME'].content_hi;
            Cellular_Network_Insurance_policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_CELLUAR'] &&
                sbiHomeData['PRODUCTS_CORPORATE_OTHERS_CELLUAR'].content_hi;
            Advance_Loss_of_Profit_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_ADVANCE_POLICY'] &&
                sbiHomeData['PRODUCTS_CORPORATE_OTHERS_ADVANCE_POLICY'].content_hi;
            Baggage_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_BAGGAGE'] &&
                sbiHomeData['PRODUCTS_CORPORATE_OTHERS_BAGGAGE'].content_hi;
            Portable_Electronic_Equipment_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_PORTABLE'] &&
                sbiHomeData['PRODUCTS_CORPORATE_OTHERS_PORTABLE'].content_hi;
            Weather_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_WEATHER'] &&
                sbiHomeData['PRODUCTS_CORPORATE_OTHERS_WEATHER'].content_hi;
            Mega_Risk_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_MEGA'] &&
                sbiHomeData['PRODUCTS_CORPORATE_OTHERS_MEGA'].content_hi;
            Port_Package_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_PORT'] &&
                sbiHomeData['PRODUCTS_CORPORATE_OTHERS_PORT'].content_hi;
            Delay_in_Start_Up_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_DELAY'] &&
                sbiHomeData['PRODUCTS_CORPORATE_OTHERS_DELAY'].content_hi;
            All_Risk_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_ALL_RISK'] &&
                sbiHomeData['PRODUCTS_CORPORATE_OTHERS_ALL_RISK'].content_hi;
            Kidnap_Ransom_and_Extortion_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_KIDNAP'] &&
                sbiHomeData['PRODUCTS_CORPORATE_OTHERS_KIDNAP'].content_hi;
            Fidelity_Guarantee_Insurance_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_FIDELITY'] &&
                sbiHomeData['PRODUCTS_CORPORATE_OTHERS_FIDELITY'].content_hi;
            Oil_Energy_Risk_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS_OIL'] &&
                sbiHomeData['PRODUCTS_CORPORATE_OTHERS_OIL'].content_hi;

            Marine_Insurence = sbiHomeData && sbiHomeData['PRODUCTS_MARINE_INSURENCE'] && sbiHomeData['PRODUCTS_MARINE_INSURENCE'].content_hi;
            Fire_Insurence = sbiHomeData && sbiHomeData['PRODUCTS_FIRE_INSURENCE'] && sbiHomeData['PRODUCTS_FIRE_INSURENCE'].content_hi;
            motor = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MOTOR'] && sbiHomeData['PRODUCTS_CORPORATE_MOTOR'].content_hi;
            health = sbiHomeData && sbiHomeData['HOME_TAB_HEALTH'] && sbiHomeData['HOME_TAB_HEALTH'].content_hi;
            fire = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FIRE'] && sbiHomeData['PRODUCTS_CORPORATE_FIRE'].content_hi;
            marine = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MARINE'] && sbiHomeData['PRODUCTS_CORPORATE_MARINE'].content_hi;
            packages = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PACKGE'] && sbiHomeData['PRODUCTS_CORPORATE_PACKGE'].content_hi;
            construction = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_CON_ENG'] && sbiHomeData['PRODUCTS_CORPORATE_CON_ENG'].content_hi;
            others = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_OTHERS'] && sbiHomeData['PRODUCTS_CORPORATE_OTHERS'].content_hi;


        }
        return (
            <>
                {isMobile ? ( //For Mobil View 
                    <div className="faqContent">
                        <section className="faQinsuranceMain" id="CorporateTab">
                            <Accordion defaultActiveKey="0">
                                <Card>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0" onClick={(e) => this.toggleAccordianBtn(e)} className={'accordianBtn'} >
                                        {Miscellaneous}
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <ul className="product-list">
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/MoneyInsurance.svg")} alt="MoneyInsurance" /></figure>
                                                        <h3>{Money_Insurance_Policy}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/money-insurance"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Money Insurance Policy') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/corporate/plate-glass-insurance.svg")} alt="" /></figure>
                                                        <h3>{Plate_Glass_Insurance_Policy}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/plate-glass-insurance"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Plate Glass Insurance Policy') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/corporate/burglay-insurance.svg")} alt="" /></figure>
                                                        <h3>{Burglary_Insurance_Policy}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/burglary-insurance"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Burglary Insurance Policy') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1" onClick={(e) => this.toggleAccordianBtn(e)} className={'accordianBtn'} >
                                        {Motor_Insurence}
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                            <ul className="product-list">
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/MotorTradeTransitRisks.svg")} alt="MotorTradeTransitRisks" /></figure>
                                                        <h3>{Motor_Trade_Road_Transit}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/motor-trade-transit-risks"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Motor Trade-Road Transit') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/MotorTradeRoadRisks.svg")} alt="MotorTradeRoadRisks" /></figure>
                                                        <h3>{Motor_Trade_Road_Risk}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/motor-trade-road-risks"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Motor Trade-Road Risk') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/MotorTradeInternalRisks.svg")} alt="MotorTradeInternalRisks" /></figure>
                                                        <h3>{Motor_Trade_Internal_Risk}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/motor-trade-internal-risks"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Motor Trade-Internal Risk') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>


                                <Card>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="2" onClick={(e) => this.toggleAccordianBtn(e)} className={'accordianBtn'} >
                                        {Health_Insurence}
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body>
                                            <ul className="product-list">
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/GroupPersonalAccidentInsurance.svg")} alt="" /></figure>
                                                        <h3>{Group_Personal_Accident}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/group-personal-accident-insurance"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Group Personal Accident') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/GroupHealthInsurance.svg")} alt="GroupHealthInsurance" /></figure>
                                                        <h3>{Group_Health_Insurance_Policy}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/group-health-insurance"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Group Health Insurance Policy') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/LoanInsurance.svg")} alt="" />
                                                        </figure>
                                                        <h3>{Group_Loan_Insurance_Policy}</h3>
                                                        <div className="prod-content">
                                                            <ul>
                                                                <li></li>
                                                            </ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/group-loan-insurance"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Group Loan Insurance Policy') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure>
                                                            <img src={require("../../assets/images/product-icons/landing-page/ArogyaSanjeevni.svg")} alt="" />
                                                        </figure>
                                                        <h3>{Arogya_Sanjeevani_Group_Product}</h3>
                                                        <div className="prod-content">
                                                            <ul>
                                                                <li></li>
                                                            </ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/arogya-sanjeevani-group-policy"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Arogya Sanjeevani Group Product') }}>{Know_More}</Link>
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
                                    {Know_More}
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
                                        {Fire_Insurence}
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body>
                                            <ul className="product-list">
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/StandardFireandSpecialPerilsInsurances.svg")} alt="StandardFireandSpecialPerilsInsurances" /></figure>
                                                        <h3>{Standard_Fire_Special_Perils_Insurance_Policy}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/standard-fire-and-special-perils-insurances"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('SFSP') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/ConsequentialLossFireInsurance.svg")} alt="ConsequentialLossFireInsurance" /></figure>
                                                        <h3>{Consequential_Loss_Insurance_Policy}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/consequential-loss-fire-insurance"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Consequential Loss (Fire) Insurance') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                        <div className="prod-box">
                        <figure> <img src={require("../../assets/images/product-icons/landing-page/SBI-General-Bharat-Sookshma-Udyam-Suraksha.svg")} alt="Bharat Sookshma Udyam Suraksha" /></figure>
                        <h3>Bharat Sookshma Udyam Suraksha</h3>
                        <div className="prod-content">
                            <ul></ul>
                        </div>
                        <div className="prod-btn-holder">
                            <Link to={"/bharat-sookshma-udyam-suraksha"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('Bharat Sookshma Udyam Suraksha')}}>Know More</Link>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="prod-box">
                        <figure> <img src={require("../../assets/images/product-icons/landing-page/SBI-General-Bharat-Laghu-Udyam-Suraksha.svg")} alt="Bharat Laghu Udyam Suraksha" /></figure>
                        <h3>Bharat Laghu Udyam Suraksha</h3>
                        <div className="prod-content">
                            <ul></ul>
                        </div>
                        <div className="prod-btn-holder">
                            <Link to={"/bharat-laghu-udyam-suraksha"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('Bharat Laghu Udyam Suraksha')}}>Know More</Link>
                        </div>
                        </div>
                    </li>
                                            </ul>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="4" onClick={(e) => this.toggleAccordianBtn(e)} className={'accordianBtn'} >
                                        {Marine_Insurence}
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body>
                                            <ul className="product-list">
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/MarineCargoInsurance.svg")} alt="MarineCargoInsurance" /></figure>
                                                        <h3>{Marine_Cargo_Insurance_Open_Cover}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/marine-cargo-insurance"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Marine Cargo Insurance') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="5" onClick={(e) => this.toggleAccordianBtn(e)} className={'accordianBtn'} >
                                        {Package_Insurence}
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="5">
                                        <Card.Body>
                                            <ul className="product-list">
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/IndustrialAllRisksInsurance.svg")} alt="IndustrialAllRisksInsurance" /></figure>
                                                        <h3>{Industrial_All_Risks_Insurance_Policy}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/industrial-all-risks-insurance"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Industrial All Risks Insurance') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/BusinessPackageInsurance.svg")} alt="BusinessPackageInsurance" /></figure>
                                                        <h3>{Business_Package_Insurance_Policy}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/business-package-insurance"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Business Package Insurance Policy') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="5" onClick={(e) => this.toggleAccordianBtn(e)} className={'accordianBtn'} >
                                        {Construction_And_Engineer_Insurence}
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="5">
                                        <Card.Body>
                                            <ul className="product-list">
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/corporate/latent-defect-insurance.svg")} alt="" /></figure>
                                                        <h3>{Latent_Defects_Insurance_Policy}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/latent-defects-insurance-policy"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Latent Defects Insurance') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/corporate/electronic-equipment-insurance.svg")} alt="" /></figure>
                                                        <h3>{Electronic_Equipment_Insurance}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/electronic-equipment-insurance"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('EEI') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/ContractorsAllRiskInsurance.svg")} alt="ContractorsAllRiskInsurance" /></figure>
                                                        <h3>{Contractors_All_Risks_Insurance}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/contractors-all-risk-insurance"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Contractors All Risks (CAR) Insurance') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/ErectionAllRisksInsurance.svg")} alt="ErectionAllRisksInsurance" /></figure>
                                                        <h3>{Erection_All_Risks_Insurance}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/erection-all-risks-insurance"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Erection All Risks (EAR) Insurance') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/corporate/plant-machinery-insurance.svg")} alt="" /></figure>
                                                        <h3>{Contractors_Plant_Machinery_Insurance}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/contractors-plant-machinery"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('CPM') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/MachineryBreakdownInsurance.svg")} alt="MachineryBreakdownInsurance" /></figure>
                                                        <h3>{Machinery_Breakdown_Insurance}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/machinery-breakdown-insurance"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('MB') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/BoilerPressurePlantInsurance.svg")} alt="BoilerPressurePlantInsurance" /></figure>
                                                        <h3>{Boiler_Pressure_Plant_Insurance}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/boiler-pressure-plant-insurance"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Boiler & Pressure Plant Insurance') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/ConsequentialLossMachineryBreakdown.svg")} alt="ConsequentialLossMachineryBreakdown" /></figure>
                                                        <h3>{Machinery_Loss_of_Profit_Insurance_Policy}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/consequential-loss-machinery-breakdown"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Machinery Loss of Profit Insurance') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="6" onClick={(e) => this.toggleAccordianBtn(e)} className={'accordianBtn'} >
                                        {Others}
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="6">
                                        <Card.Body>
                                            <ul className="product-list">
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/corporate/sign-board.svg")} alt="" /></figure>
                                                        <h3>{Sign_Board_Insurance_Policy}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/sign-board"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Sign Board Insurance Policy') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/ModifiedNationalAgricultureInsurance.svg")} alt="ModifiedNationalAgricultureInsurance" /></figure>
                                                        <h3>{Modified_National_Agriculture_Insurance_Scheme}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/national-agriculture-insurance"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('MNAIS') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/TradeCreditInsurance.svg")} alt="TradeCreditInsurance" /></figure>
                                                        <h3>{Trade_Credit_Insurance_Policy}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/trade-credit-insurance"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Trade Credit Insurance') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/AviationHullPackage.svg")} alt="AviationHullPackage" /></figure>
                                                        <h3>{Aviation_Hull_Package_policy}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/aviation-hull-package"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Aviation & Hull Package') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/SMEPackage.svg")} alt="SMEPackage.svg" /></figure>
                                                        <h3>{SME_Package_Insurance_Policy}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/sme-package"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('SME Package Insurance') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/CellularNetwork.svg")} alt="CellularNetwork" /></figure>
                                                        <h3>{Cellular_Network_Insurance_policy}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/cellular-network"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Cellular Network Insurance') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/corporate/advance-loss-of-profit.svg")} alt="" /></figure>
                                                        <h3>{Advance_Loss_of_Profit_Policy}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/advance-lossof-profit"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Advance Loss of Profit') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/BaggageInsurance.svg")} alt="BaggageInsurance" /></figure>
                                                        <h3>{Baggage_Insurance_Policy}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/baggage-insurance"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Baggage Insurance') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/PortableElectronicEquipment.svg")} alt="PortableElectronicEquipment" /></figure>
                                                        <h3>{Portable_Electronic_Equipment_Insurance_Policy}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/portable-electronic-equipment"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Portable Electronic Equipment Insurance') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/WeatherInsurance.svg")} alt="WeatherInsurance" /></figure>
                                                        <h3>{Weather_Insurance}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/weather-insurance"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Weather Insurance') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/MegaRisk.svg")} alt="MegaRisk" /></figure>
                                                        <h3>{Mega_Risk_Insurance_Policy}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/mega-risk"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Mega Risk Insurance') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/PortPackage.svg")} alt="PortPackage" /></figure>
                                                        <h3>{Port_Package_Insurance_Policy}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/port-package"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Port Package Insurance') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/MarineDelayinStartup.svg")} alt="MarineDelayinStartup" /></figure>
                                                        <h3>{Delay_in_Start_Up_Insurance}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/marine-delay-start"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('DSU Insurance') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/AllRiskInsurance.svg")} alt="AllRiskInsurance" /></figure>
                                                        <h3>{All_Risk_Insurance_Policy}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/all-risk-insurance"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('All Risk Insurance') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/KidnapRansomAndExtortion.svg")} alt="KidnapRansomAndExtortion" /></figure>
                                                        <h3>{Kidnap_Ransom_and_Extortion_Insurance}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/kidnap-ransom-and-extortion"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('KRE Insurance') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/FidelityGuarantee.svg")} alt="FidelityGuarantee" /></figure>
                                                        <h3>{Fidelity_Guarantee_Insurance_Policy}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/fidelity-guarantee"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Fidelity Guarantee Insurance') }}>{Know_More}</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="prod-box">
                                                        <figure> <img src={require("../../assets/images/product-icons/landing-page/OilEnergy.svg")} alt="OilEnergy" /></figure>
                                                        <h3>{Oil_Energy_Risk_Insurance}</h3>
                                                        <div className="prod-content">
                                                            <ul></ul>
                                                        </div>
                                                        <div className="prod-btn-holder">
                                                            <Link to={"/oil-energy"} className="btn-more"
                                                                onClick={() => { this.gtmClickHandler('Oil & Energy Risk Insurance') }}>{Know_More}</Link>
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
                                            <Nav.Link eventKey="Miscellaneous" onClick={() => { this.gtmNavHandler('Corporate', 'Miscellaneous') }}>
                                                {Miscellaneous}
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="MotorInsurance" onClick={() => { this.gtmNavHandler('Corporate', 'Motor') }}>
                                                {motor}
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="HealthInsurance" onClick={() => { this.gtmNavHandler('Corporate', 'Health') }}>
                                                {" "}
                                                {health}{" "}
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="FireInsurance" onClick={() => { this.gtmNavHandler('Corporate', 'Fire') }}>
                                                {" "}
                                                {fire}{" "}
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="MarineInsurance" onClick={() => { this.gtmNavHandler('Corporate', 'Marine') }}>
                                                {" "}
                                                {marine}{" "}
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="PackageInsurance" onClick={() => { this.gtmNavHandler('Corporate', 'Package') }}>
                                                {" "}
                                                {packages}{" "}
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="ConstructionInsurance" onClick={() => { this.gtmNavHandler('Corporate', 'Construction / Engineering') }}>
                                                {" "}
                                                {construction}{" "}
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="Others" onClick={() => { this.gtmNavHandler('Corporate', 'Others') }}>
                                                {" "}
                                                {others}{" "}
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
                                                            <h3>{Money_Insurance_Policy}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/money-insurance"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Money Insurance Policy') }}>{Know_More}</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure> <img src={require("../../assets/images/product-icons/corporate/PlateGlassInsurance.svg")} alt="" /></figure>
                                                            <h3>{Plate_Glass_Insurance_Policy}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/plate-glass-insurance"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Plate Glass Insurance Policy') }}>{Know_More}</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure> <img src={require("../../assets/images/product-icons/landing-page/Burglary.svg")} alt="" /></figure>
                                                            <h3>{Burglary_Insurance_Policy}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/burglary-insurance"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Burglary Insurance Policy') }}>{Know_More}</Link>
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
                                                            <h3>{Motor_Trade_Road_Transit}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/motor-trade-transit-risks"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Motor Trade-Road Transit') }}>{Know_More}</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/MotorTradeRoadRisks.svg")} alt="MotorTradeRoadRisks" />
                                                            </figure>
                                                            <h3>{Motor_Trade_Road_Risk}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/motor-trade-road-risks"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Motor Trade-Road Risk') }}>{Know_More}</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/MotorTradeInternalRisks.svg")} alt="MotorTradeInternalRisks" />
                                                            </figure>
                                                            <h3>{Motor_Trade_Internal_Risk}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/motor-trade-internal-risks"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Motor Trade-Internal Risk') }}>{Know_More}</Link>
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
                                                            <h3>{Group_Personal_Accident}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/group-personal-accident-insurance"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Group Personal Accident') }}>{Know_More}</Link>
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
                                                            <h3>{Group_Health_Insurance_Policy}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/group-health-insurance"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Group Health Insurance Policy') }}>{Know_More}</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/LoanInsurance.svg")} alt="" />
                                                            </figure>
                                                            <h3>{Group_Loan_Insurance_Policy}</h3>
                                                            <div className="prod-content">
                                                                <ul>
                                                                    <li></li>
                                                                </ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/group-loan-insurance"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Group Loan Insurance Policy') }}>{Know_More}</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/ArogyaSanjeevni.svg")} alt="" />
                                                            </figure>
                                                            <h3>{Arogya_Sanjeevani_Group_Product}</h3>
                                                            <div className="prod-content">
                                                                <ul>
                                                                    <li></li>
                                                                </ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/arogya-sanjeevani-group-policy"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Arogya Sanjeevani Group Product') }}>{Know_More}</Link>
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
                                        {Know_More}
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
                                                            <h3>{Standard_Fire_Special_Perils_Insurance_Policy}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/standard-fire-and-special-perils-insurances"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Standard Fire & Special Perils') }}>{Know_More}</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/ConsequentialLossFireInsurance.svg")} alt="ConsequentialLossFireInsurance" />
                                                            </figure>
                                                            <h3>{Consequential_Loss_Insurance_Policy}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/consequential-loss-fire-insurance"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Consequential Loss (Fire) Insurance Policy') }}>{Know_More}</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                        <div className="prod-box">
                        <figure> <img src={require("../../assets/images/product-icons/landing-page/SBI-General-Bharat-Sookshma-Udyam-Suraksha.svg")} alt="Bharat Sookshma Udyam Suraksha" /></figure>
                        <h3>Bharat Sookshma Udyam Suraksha</h3>
                        <div className="prod-content">
                            <ul></ul>
                        </div>
                        <div className="prod-btn-holder">
                            <Link to={"/bharat-sookshma-udyam-suraksha"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('Bharat Sookshma Udyam Suraksha')}}>Know More</Link>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="prod-box">
                        <figure> <img src={require("../../assets/images/product-icons/landing-page/SBI-General-Bharat-Laghu-Udyam-Suraksha.svg")} alt="Bharat Laghu Udyam Suraksha" /></figure>
                        <h3>Bharat Laghu Udyam Suraksha</h3>
                        <div className="prod-content">
                            <ul></ul>
                        </div>
                        <div className="prod-btn-holder">
                            <Link to={"/bharat-laghu-udyam-suraksha"} className="btn-more" 
                            onClick={()=>{this.gtmClickHandler('Bharat Laghu Udyam Suraksha')}}>Know More</Link>
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
                                                            <h3>{Marine_Cargo_Insurance_Open_Cover}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/marine-cargo-insurance"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Marine Cargo Insurance') }}>{Know_More}</Link>
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
                                                            <h3>{Industrial_All_Risks_Insurance_Policy}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/industrial-all-risks-insurance"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Industrial All Risks Insurance Policy') }}>{Know_More}</Link>
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
                                                            <h3>{Business_Package_Insurance_Policy}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/business-package-insurance"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Business Package Insurance Policy') }}>{Know_More}</Link>
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
                                                            <h3>{Latent_Defects_Insurance_Policy}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/latent-defects-insurance-policy"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Latent Defects Insurance Policy') }}>{Know_More}</Link>
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
                                                            <h3>{Electronic_Equipment_Insurance}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/electronic-equipment-insurance"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Electronic Equipment Insurance (EEI)') }}>{Know_More}</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/ContractorsAllRiskInsurance.svg")} alt="ContractorsAllRiskInsurance" />
                                                            </figure>
                                                            <h3>{Contractors_All_Risks_Insurance}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/contractors-all-risk-insurance"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Contractors All Risks') }}>{Know_More}</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/ErectionAllRisksInsurance.svg")} alt="ErectionAllRisksInsurance" />
                                                            </figure>
                                                            <h3>{Erection_All_Risks_Insurance}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/erection-all-risks-insurance"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Erection All Risks') }}>{Know_More}</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure> <img src={require("../../assets/images/product-icons/landing-page/ContractorsPlant.svg")} alt="" /></figure>
                                                            <h3>{Contractors_Plant_Machinery_Insurance}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/contractors-plant-machinery"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Contractors Plant & Machinery Insurance') }}>{Know_More}</Link>
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
                                                            <h3>{Machinery_Breakdown_Insurance}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/machinery-breakdown-insurance"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Machinery Breakdown Insurance') }}>{Know_More}</Link>
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
                                                            <h3>{Boiler_Pressure_Plant_Insurance}
                                                            </h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/boiler-pressure-plant-insurance"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Boiler & Pressure Plant Insurance') }}>{Know_More}</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure>
                                                                <img src={require("../../assets/images/product-icons/landing-page/ConsequentialLossMachineryBreakdown.svg")} alt="ConsequentialLossMachineryBreakdown" />
                                                            </figure>
                                                            <h3>{Machinery_Loss_of_Profit_Insurance_Policy}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/consequential-loss-machinery-breakdown"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Machinery Loss of Profit Insurance') }}>{Know_More}</Link>
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
                                                            <h3>{Sign_Board_Insurance_Policy}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/sign-board"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Sign Board Insurance') }}>{Know_More}</Link>
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
                                                            <h3>{Modified_National_Agriculture_Insurance_Scheme}
                                                            </h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/national-agriculture-insurance"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('MNAIS') }}>{Know_More}</Link>
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
                                                            <h3>{Trade_Credit_Insurance_Policy}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/trade-credit-insurance"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Trade Credit Insurance') }}>{Know_More}</Link>
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
                                                            <h3>{Aviation_Hull_Package_policy}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/aviation-hull-package"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Aviation & Hull Package') }}>{Know_More}</Link>
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
                                                            <h3>{SME_Package_Insurance_Policy}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/sme-package"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('SME Package Insurance') }}>{Know_More}</Link>
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
                                                            <h3>{Cellular_Network_Insurance_policy}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/cellular-network"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Cellular Network Insurance') }}>{Know_More}</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="prod-box">
                                                            <figure> <img src={require("../../assets/images/product-icons/corporate/advance-loss-of-profit.svg")} alt="" /></figure>
                                                            <h3>{Advance_Loss_of_Profit_Policy}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/advance-lossof-profit"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Advance Loss of Profit Policy') }}>{Know_More}</Link>
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
                                                            <h3>{Baggage_Insurance_Policy}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/baggage-insurance"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Baggage Insurance') }}>{Know_More}</Link>
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
                                                            <h3>{Portable_Electronic_Equipment_Insurance_Policy}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/portable-electronic-equipment"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Portable Electronic Equipment Insurance') }}>{Know_More}</Link>
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
                                                            <h3>{Weather_Insurance}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/weather-insurance"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Weather Insurance') }}>{Know_More}</Link>
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
                                                            <h3>{Mega_Risk_Insurance_Policy}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/mega-risk"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Mega Risk Insurance') }}>{Know_More}</Link>
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
                                                            <h3>{Port_Package_Insurance_Policy}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/port-package"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Port Package Insurance') }}>{Know_More}</Link>
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
                                                                {Delay_in_Start_Up_Insurance}
                                                            </h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/marine-delay-start"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('DSU Insurance') }}>{Know_More}</Link>
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
                                                            <h3>{All_Risk_Insurance_Policy}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/all-risk-insurance"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('All Risk Insurance Policy') }}>{Know_More}</Link>
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
                                                                {Kidnap_Ransom_and_Extortion_Insurance}
                                                            </h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/kidnap-ransom-and-extortion"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('KRE Insurance') }}>{Know_More}</Link>
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
                                                            <h3>{Fidelity_Guarantee_Insurance_Policy}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/fidelity-guarantee"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Fidelity Guarantee Insurance') }}>{Know_More}</Link>
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
                                                            <h3>{Oil_Energy_Risk_Insurance}</h3>
                                                            <div className="prod-content">
                                                                <ul></ul>
                                                            </div>
                                                            <div className="prod-btn-holder">
                                                                <Link to={"/oil-energy"} className="btn-more"
                                                                    onClick={() => { this.gtmClickHandler('Oil & Energy Risk Insurance') }}>{Know_More}</Link>
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