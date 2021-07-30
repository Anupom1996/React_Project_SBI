import React, { Component } from "react";
import { Container } from "react-bootstrap";

import ReactHtmlParser from 'react-html-parser'
class WhySBIInsurance extends Component {

    render() {
        let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let Heading,Text,Text_6400,Text_24000,Text_114,Text_10000,Text_350
    ;
    if (lang_name==='en') {   
        
        Heading = sbiHomeData && sbiHomeData['PRODUCTS_HEALTH_INSURENCE_HEADING'] && sbiHomeData['PRODUCTS_HEALTH_INSURENCE_HEADING'].content_en;
        Text = sbiHomeData && sbiHomeData['PRODUCTS_HEALTH_INSURENCE_TEXT'] && sbiHomeData['PRODUCTS_HEALTH_INSURENCE_TEXT'].content_en;
        Text_6400 = sbiHomeData && sbiHomeData['PRODUCTS_HEALTH_INSURENCE_6400'] && sbiHomeData['PRODUCTS_HEALTH_INSURENCE_6400'].content_en;
        Text_24000 = sbiHomeData && sbiHomeData['PRODUCTS_HEALTH_INSURENCE_24000'] && sbiHomeData['PRODUCTS_HEALTH_INSURENCE_24000'].content_en;
        Text_114 = sbiHomeData && sbiHomeData['PRODUCTS_HEALTH_INSURENCE_114'] && sbiHomeData['PRODUCTS_HEALTH_INSURENCE_114'].content_en;
        Text_10000 = sbiHomeData && sbiHomeData['PRODUCTS_HEALTH_INSURENCE_10000'] && sbiHomeData['PRODUCTS_HEALTH_INSURENCE_10000'].content_en;
        Text_350 = sbiHomeData && sbiHomeData['PRODUCTS_HEALTH_INSURENCE_350'] && sbiHomeData['PRODUCTS_HEALTH_INSURENCE_350'].content_en;
      
     
        
  } else {       
    Heading = sbiHomeData && sbiHomeData['PRODUCTS_HEALTH_INSURENCE_HEADING'] && sbiHomeData['PRODUCTS_HEALTH_INSURENCE_HEADING'].content_hi;
    Text = sbiHomeData && sbiHomeData['PRODUCTS_HEALTH_INSURENCE_TEXT'] && sbiHomeData['PRODUCTS_HEALTH_INSURENCE_TEXT'].content_hi;
    Text_6400 = sbiHomeData && sbiHomeData['PRODUCTS_HEALTH_INSURENCE_6400'] && sbiHomeData['PRODUCTS_HEALTH_INSURENCE_6400'].content_hi;
    Text_24000 = sbiHomeData && sbiHomeData['PRODUCTS_HEALTH_INSURENCE_24000'] && sbiHomeData['PRODUCTS_HEALTH_INSURENCE_24000'].content_hi;
    Text_114 = sbiHomeData && sbiHomeData['PRODUCTS_HEALTH_INSURENCE_114'] && sbiHomeData['PRODUCTS_HEALTH_INSURENCE_114'].content_hi;
    Text_10000 = sbiHomeData && sbiHomeData['PRODUCTS_HEALTH_INSURENCE_10000'] && sbiHomeData['PRODUCTS_HEALTH_INSURENCE_10000'].content_hi;
    Text_350 = sbiHomeData && sbiHomeData['PRODUCTS_HEALTH_INSURENCE_350'] && sbiHomeData['PRODUCTS_HEALTH_INSURENCE_350'].content_hi;
  
    
   
  }
        //let subcategoryList = this.state.subcategoryList;
        return (

            <section className="healthWrapper">
                <Container>
                    <div className="healthContainer">
                        <h5 className="htitle">{Heading}</h5>
                        <p className="mainTxt">
                           {Text}
                        </p>
                        <ul>
                            <li>
                                <figure className="justify-content-between align-items-center">
                                    <img
                                        src={require("../../assets/images/rura-banks-icon.svg")}
                                        alt=""
                                    />
                                </figure>
                                {ReactHtmlParser(Text_6400)}
                             
                            </li>
                            <li>
                                <figure className="justify-content-between align-items-center">
                                    <img
                                        src={require("../../assets/images/cities-icon.svg")}
                                        alt=""
                                    />
                                </figure>
                                {ReactHtmlParser(Text_24000)}
                              
                            </li>
                            <li>
                                <figure className="justify-content-between align-items-center">
                                    <img
                                        src={require("../../assets/images/map-locations-icon.svg")}
                                        alt=""
                                    />
                                </figure>
                                {ReactHtmlParser(Text_114)}
                              
                            </li>
                            <li>
                                <figure className="justify-content-between align-items-center">
                                    <img
                                        src={require("../../assets/images/real-estate-agent-icon.svg")}
                                        alt=""
                                    />
                                </figure>
                                {ReactHtmlParser(Text_10000)}
                              
                            </li>
                            <li>
                                <figure className="justify-content-between align-items-center">
                                    <img
                                        src={require("../../assets/images/broker-icon.svg")}
                                        alt=""
                                    />
                                </figure>
                                {ReactHtmlParser(Text_350)}
                             
                            </li>
                        </ul>
                    </div>
                </Container>
            </section>

        )
    }
}

export default WhySBIInsurance;