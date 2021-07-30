import React, { Component } from 'react';
//import { Nav, Row, Col, Tab, Container, InputGroup, Form, Button } from "react-bootstrap";
import {Row, Col, Tab, Container } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";

import * as AppConstant from "../../AppConstant";
import BaseComponent from "../../BaseComponent";
import HelmetData from "../../Common/HelmetData";
import Axios from "../../../Services/Shared/Axios";
//import AxiosTrans from "../../../Services/Shared/AxiosTrans";
//import swal from "sweetalert";
import ReactPlayer from 'react-player';

class LanguageProductFeatures extends Component {

    state = {
        productDetails:[],
        validated: false,
        successMsgShow: false,
        is_agent: false
    }

    getproductsDetails = () => {
        const { match: { params } } = this.props;
        
        Axios({
            method: "get",
            //url: "/qrfeatures?qrproduct.product_code_eq=arogya-sanjeevani&qrlanguage.tag_eq=en"
            url:"/qrfeatures?qrproduct.product_code_eq="+params.product_code+"&qrlanguage.tag_eq="+params.tag
        })
            .then(res => {
                this.setState({
                    productDetails: res.data
                });
            })
            .catch(err => {
                console.log(err);   
                console.log("|Error|");
            });
    }

    componentDidMount() {
        this.getproductsDetails();
    }

    downloadLink = (link, fileName,linkText) => {
        this.gtmClickHandler('become_an_agent_page_4_link_click','become_an_agent_page', linkText)
        fetch(link).then(response => {
            response.blob().then(blob => {
                let localurl = window.URL.createObjectURL(blob);
                let a = document.createElement("a");
                a.href = localurl;
                a.target = "_blank";
                a.download = fileName;
                a.click();
            })
        })
    }
    gtmClickHandler = (eventName,pageType, clickText) => {
        const data = {
            'event': eventName,
            'pagetype': pageType,
            'click_text': clickText
        };
        window.dataLayer.push(data);
    }

    gtmFormInit = (formField) => {
        window.dataLayer = window.dataLayer || [];       
        const data = {
          'event': 'become_an_agent_page_2_form_interaction',
          'pagetype': 'become_an_agent_page',
          //'timestamp': AppConstant.gtmCurrentTime(),
          'field_name': formField
        };
        window.dataLayer.push(data);
      }

    render() {
        //const formpath = AppConstant.BASE_URL + "/uploads/5dd8350eae8d456aae59f10f70355925.pdf";
        let { productDetails } = this.state;
        //const { match} = this.props;

        return (
            
            <BaseComponent pageTitle="language">
                {/* <Helmet> */}
                
                <HelmetData pageComponentType="language" />
                {/* Header Start */}
                
                {isMobile ? (
                    <section className="container-with-no-padding container">
                            {/* <div className="rotateit">
                                <div className="skewbg"></div>
                                <div className="skewbg-light"></div>
                                <div className="bgtextureProduct"></div>
                            </div> */}
                            <div className="innerpageBanner row">
                                <div className="col-5">
                                <figure className="justify-content-between align-items-center">
                      <img
                      src={require("../../../assets/images/retail-head-icon.svg")}
                      alt=""
                      />
                    </figure>
                                </div>

                                {productDetails.map((item, index) => (
                                <div className="col-7 d-flex align-items-center">
                                    <div className="flex-column" k>
                                        <h3 className="banTitle">{item.qrproduct.Name}<span>Policy Details</span></h3>
                                        {/* For Desktop */}
                                    </div>
                                    <div className="innerHeadBotomIcon">
                        
                            </div>

                                </div>
                                 ))}
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
                                <div className="col-5">
                                <figure className="justify-content-between align-items-center">
                      <img
                      src={require("../../../assets/images/retail-head-icon.svg")}
                      alt=""
                      />
                    </figure>
                                </div>

                                {productDetails.map((item, index) => (
                                <div className="col-7 d-flex align-items-center">
                                    <div className="flex-column" k>
                                        <h3 className="banTitle">{item.qrproduct.Name}<span>Policy Details</span></h3>
                                        {/* For Desktop */}
                                    </div>
                                    <div className="innerHeadBotomIcon">
                        
                            </div>

                                </div>
                                 ))}
                            </div>
                        </section>
                    )}
                {/* Header End */}
                <Container>
                    {/*Coverage Main */}
                    <Container>
                    {productDetails.map((item, index) => (
                        <div className="tabWrap mt-5">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="Agents">
                                <Row>
                                    <Col sm={6}>
                                        <div className="agentDocumentLinks claimProcess">
                                            Claims Process
                                            {/*<a className="dwnldIcon" target="_blank" rel="noopener noreferrer"  href={'https://uatcontent.sbigeneral.in'+item.claiminfographic.url}><img src={require("../../../assets/images/downloadIcon.png")} alt="" /></a>*/}
                                            <Link className="dwnldIcon" to={'#'} onClick={this.downloadFile.bind(this, AppConstant.BASE_URL+item.claiminfographic.url,'claim_process_form')} download><img src={require("../../../assets/images/downloadIcon.png")} alt="" /></Link>
                                        </div>
                                       
                                        
                                    </Col>

                                    <Col sm={6}>
                                        <div className="agentDocumentLinks policyDetails">
                                            Policy Details
                                            
                                            <Link className="dwnldIcon" to={'#'} onClick={this.downloadFile.bind(this, AppConstant.BASE_URL+item.policynfographic.url,'policy_detail_form')} download><img src={require("../../../assets/images/downloadIcon.png")} alt="" /></Link>
                                        </div>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </div>
                        ))}
                    </Container>
                </Container >


                <Container>
                    {/*Coverage Main */}
                    <Container>
                    {productDetails.map((item, index) => (
                        <div className="tabWrap space">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="Agents">
                                <Row>
                                    <Col sm={6}>
                                        <h5 className="htitle">Policy FAQs simplified via Audio</h5>
                                        <div className="audioVideoBox">
                                        {item.audioassistance ? (
                                    <ReactPlayer width="100%" height="100%" url={item.audioassistance}/> //ReactHtmlParser(item.youtube_video_embed_code)
                                    ) : (null)}
                                    </div>                                   
                                    </Col>

                                    <Col sm={6} >
                                        <h5 className="htitle">Policy FAQs simplified via Video</h5>
                                        <div className="audioVideoBox">
                                        {item.videofaq ? (
                                    <ReactPlayer width="100%" height="100%" url={item.videofaq}/> //ReactHtmlParser(item.youtube_video_embed_code)
                                    ) : (null)}
                                    </div>
                                    </Col>
                                
                                </Row>
                            </Tab.Container>
                        </div>
                          ))}
                    </Container>
                </Container >
            </BaseComponent >
        )
    }

    downloadFile = (link,filename) => {
        fetch(link).then(response => {
            response.blob().then(blob => {
                let localurl = window.URL.createObjectURL(blob);
                let a = document.createElement("a");
                a.href = localurl;
                a.target = "_blank";
                a.download = filename+".pdf";
                a.click();
            })
        })
    }

}

export default LanguageProductFeatures;