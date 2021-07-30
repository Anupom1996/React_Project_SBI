import React, { Component} from 'react';
//import { Nav, Row, Col, Tab, Container, InputGroup, Form, Button } from "react-bootstrap";
import {Row, Col, Tab, Container } from "react-bootstrap";
import { isMobile } from "react-device-detect";
//import { Link } from "react-router-dom";

//import * as AppConstant from "../../AppConstant";
import BaseComponent from "../../BaseComponent";
import HelmetData from "../../Common/HelmetData";
import Axios from "../../../Services/Shared/Axios";
//import AxiosTrans from "../../../Services/Shared/AxiosTrans";
//import swal from "sweetalert";

class MaintenancePage extends Component {

    state = {
        languageDetails: [],
        productNameData:'',
        validated: false,
        successMsgShow: false,
        is_agent: false
    }

    getlanguagesDetails = () => {
        Axios({
            method: "get",
            url: "/qrlanguages?Active_eq=true"
        })
            .then(res => {
                this.setState({
                    languageDetails: res.data
                });
            })
            .catch(err => {
                console.log(err);
                console.log("|Error|");
            });
    }

    getproductName = () => {
        const { match: { params } } = this.props;
        Axios({
            method: "get",
            url:"qrproducts?product_code_eq="+params.productname
        })
            .then(res => {
                this.setState({
                    productNameData: res.data['0'].Name
                });
            })
            .catch(err => {
                console.log(err);
                console.log("|Error|");
            });
    }

    componentDidMount() {
        this.getlanguagesDetails();
        this.getproductName();
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
 
        let { languageDetails } = this.state;
        //const { match} = this.props;

        return (
            <BaseComponent pageTitle="Language Peference">
                {/* <Helmet> */}
                <HelmetData pageComponentType="Language Peference" />
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
                                <div className="col-7 d-flex align-items-center">
                                    <div className="flex-column">
                                        <h3 className="banTitle">{this.state.productNameData} <span>Under Maintenance</span></h3>
                                        {/* For Desktop */}
                                    </div>
                                    <div className="innerHeadBotomIcon">
                    
                  </div>

                                </div>
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
                                <div className="col-7 d-flex align-items-center">
                                    <div className="flex-column">
                                        <h3 className="banTitle">{this.state.productNameData} <span>Under Maintance </span></h3>
                                        {/* For Desktop */}
                                    </div>
                                    <div className="innerHeadBotomIcon">
                    
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
                                
                                </Row>

                            </Tab.Container>
                        </div>

                    </Container>

                </Container >
            </BaseComponent >
        )
    }
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

export default MaintenancePage;