import React, { Component } from 'react';
//import { Nav, Row, Col, Tab, Container, InputGroup, Form, Button } from "react-bootstrap";
import {Row, Col, Tab, Container } from "react-bootstrap";
import { isMobile } from "react-device-detect";
//import { Link } from "react-router-dom";

//import * as AppConstant from "../../AppConstant";
import BaseComponent from "../../BaseComponent";
import HelmetData from "../../Common/HelmetData";
import Axios from "../../../Services/Shared/Axios";
//import AxiosTrans from "../../../Services/Shared/AxiosTrans";
import swal from "sweetalert";

class LanguageProductFeatures extends Component {

    state = {
        productDetails: [],
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

    handleOptionChange = e => {
        console.log(e.target.id);
        if (e.target.id === "yes") {
            this.setState({ is_agent: true });
        } else if (e.target.id === "no") {
            this.setState({ is_agent: false });
        }
        this.gtmFormInit('Are you an agent with any other insurance company?');
    };

    handleSubmit = event => {
        event.preventDefault();
        //GTM added
        const data = {
            'event': 'become_an_agent_page_3_form_submit',
            'pagetype': 'become_an_agent_page',
            'click_text': 'form_submit'
        };
        window.dataLayer.push(data);
        //GTM added

        this.setState({
            successMsgShow: false
        });

        const form = event.currentTarget;
        let requestParam = {};
        this.setState({
            validated: true
        });
        if (
            form.checkValidity() === false ||
            form.selectCity.value === 0
        ) {
            event.stopPropagation();
        } else {
            requestParam["first_name"] = form.firstName.value;
            requestParam["last_name"] = form.lastName.value;
            requestParam["mobile"] = form.mobNo.value;
            requestParam["email"] = form.emailId.value;
            requestParam["city"] = form.selectCity.value;
            requestParam["profession"] = form.profession.value;
            requestParam["age"] = form.age.value;
            requestParam["gender"] = form.gender.value;
            requestParam["agent"] = form.becomeAgent.value;
            requestParam["existing_agent"] = this.state.is_agent ? "yes" : "no";
            requestParam["insurance_company"] = this.state.is_agent ? form.companyName.value : "";
            //console.log(requestParam);
            if (requestParam["agent"] === 'yes') {
                this.postClaimIntimation(requestParam);
            } else if (requestParam["agent"] === 'no') {
                this.setState({
                    validated: false
                });
                document.getElementById("agent_form").reset();
                swal({
                    text: "This form is solely for the purpose of applying to become an agent with SBI General Insurance",
                    icon: "error"
                }).then(() => { });
            }
        }
    };


    
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
            <BaseComponent pageTitle="Agent">
                {/* <Helmet> */}
                <HelmetData pageComponentType="Agent" />
                {/* Header Start */}
                {isMobile ? (
                    <section className="topform product-header">
                        <div className="insuTab">
                            <h1>Product Details</h1>
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
                                <div className="col-5">
                                <figure className="justify-content-between align-items-center">
                      <img
                      src={require("../../../assets/images/agent_banner.svg")}
                      alt=""
                      />
                    </figure>
                                </div>
                                <div className="col-7 d-flex align-items-center">
                                    <div className="flex-column">
                                        <h3 className="banTitle">Arogya Sanjeevani <span>Policy Details</span></h3>
                                        {/* For Desktop */}
                                    </div>
                                    <div className="innerHeadBotomIcon">
                        <img
                          src={require("../../../assets/images/agent_banner_right.svg")}
                          alt=""
                        />
                  </div>

                                </div>
                            </div>
                        </section>
                    )}
                {/* Header End */}
                <Container>
                    {/*Coverage Main */}
                    <Container>

                        <div className="tabWrap mt-5">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="Agents">
                                <Row>
                                    <Col sm={6}>
                                        <div className="agentDocumentLinks">
                                                {productDetails.map((item, index) => (
                                
                                                 <div className="prospectusBtmSingle text-center">
                                                    <h4 className="heading">
                                                    Products Details: {item.qrproduct.Name} 
                                                    </h4>

                                                    <figure>
                                                    <a target="_blank" rel="claims Infographic" href={'https://uatcontent.sbigeneral.in'+item.claiminfographic.url} 
                                                    onclick="">claims Infographic</a>
                                                   </figure>

                                                   <figure>
                                                    <a target="_blank" rel="Policy Infographi" href={'https://uatcontent.sbigeneral.in'+item.policynfographic.url} 
                                                    onclick="">Policy Infographic</a>
                                                   </figure>

                                                   
                                                   <figure>
                                                    <a target="_blank" rel="video FAQ" href={'https://uatcontent.sbigeneral.in'+item.videofaq} 
                                                    onclick="">video FAQ</a>
                                                   </figure>

                                                   <figure>
                                                    <a target="_blank" rel="Audio Assistance" href={'https://uatcontent.sbigeneral.in'+item.audioassistance} 
                                                    onclick="">Audio Assistance</a>
                                                   </figure>
                                                 </div>
                                                ))}
                                        </div>
                                    </Col>

                                    <Col sm={6}>
                                        <div className="agentDocumentLinks">
                                            {productDetails.map((item, index) => (

                                                <div className="prospectusBtmSingle text-center">
                                                    <h4 className="heading">
                                                        Products Details: {item.qrproduct.Name}
                                                    </h4>

                                                    <figure>
                                                        <a target="_blank" rel="claims Infographic" href={'https://uatcontent.sbigeneral.in' + item.claiminfographic.url}
                                                            onclick="">claims Infographic</a>
                                                    </figure>

                                                    <figure>
                                                        <a target="_blank" rel="Policy Infographi" href={'https://uatcontent.sbigeneral.in' + item.policynfographic.url}
                                                            onclick="">Policy Infographic</a>
                                                    </figure>


                                                    <figure>
                                                        <a target="_blank" rel="video FAQ" href={'https://uatcontent.sbigeneral.in' + item.videofaq}
                                                            onclick="">video FAQ</a>
                                                    </figure>

                                                    <figure>
                                                        <a target="_blank" rel="Audio Assistance" href={'https://uatcontent.sbigeneral.in' + item.audioassistance}
                                                            onclick="">Audio Assistance</a>
                                                    </figure>
                                                </div>
                                            ))}
                                        </div>
                                    </Col>

                                </Row>

                            </Tab.Container>
                        </div>

                    </Container>

                </Container >
            </BaseComponent >
        )
    }

    /*downloadFile = (link) =>{
        console.log(link);
        fetch(link).then(response =>{
            response.blob().then(blob =>{
                let url = window.URL.createObjectURL(blob);
                //console.log(url);
                let a = document.createElement('a');
                a.href=url;
                a.download = "Application-form.pdf";
                a.click();
            });
        })
    }*/

    downloadFile = (link) => {
        fetch(link).then(response => {
            response.blob().then(blob => {
                let localurl = window.URL.createObjectURL(blob);
                let a = document.createElement("a");
                a.href = localurl;
                a.target = "_blank";
                a.download = "Application-form.pdf";
                a.click();
            })
        })
    }

}

export default LanguageProductFeatures;