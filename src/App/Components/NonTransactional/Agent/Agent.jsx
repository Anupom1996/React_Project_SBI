import React, { Component } from 'react';
import { Nav, Row, Col, Tab, Container, InputGroup, Form, Button } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";

import * as AppConstant from "../../AppConstant";
import BaseComponent from "../../BaseComponent";
import HelmetData from "../../Common/HelmetData";
import Axios from "../../../Services/Shared/Axios";
import AxiosTrans from "../../../Services/Shared/AxiosTrans";
import swal from "sweetalert";
import ReactHtmlParser from 'react-html-parser'
class Agent extends Component {

    state = {
        agentDocument: [],
        validated: false,
        successMsgShow: false,
        is_agent: false
    }

    getAgentDocument = () => {
        Axios({
            method: "get",
            url: "/agentdocuments?status=true"
        })
            .then(res => {
                this.setState({
                    agentDocument: res.data
                });
            })
            .catch(err => {
                console.log(err);
                console.log("|Error|");
            });
    }

    componentDidMount() {
        this.getAgentDocument();
    }

    downloadLink = (link, fileName, linkText) => {
        this.gtmClickHandler('become_an_agent_page_4_link_click', 'become_an_agent_page', linkText)
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

    postClaimIntimation = jsonData => {
        AxiosTrans({
            method: "POST",
            url: "/api/agent_form",
            data: JSON.stringify(jsonData),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                swal({
                    text: "Thank you for your interest in SBI General Insurance. Our executive will get in touch with you shortly.",
                    icon: "success"
                }).then(() => { });
            })
            .catch(err => {
                swal({
                    text: "Something Went Wrong, Please Try Again!",
                    icon: "error"
                }).then(() => { });
            });

        this.setState({
            validated: false
        });
        document.getElementById("agent_form").reset();
    };


    gtmClickHandler = (eventName, pageType, clickText) => {
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
        let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
        let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
        let Ajent, Agents, Specified_Person, Select_Option, Become_An_Agent, Submit, Enter_Company_Name, Application_Form_Text,
            Company_Name, Are_You_An_Agent, No, Yes, Do_You_Want, Select_Gender, Male, Text2_Specified_Person, Female, Gender, Enter_Age,
            Age, Enter_Profession, Profession, Select_City, Enter_Email, Email, Enter_Mobile, Mobile_No, Enter_Last_Name,
            Last_Name, Enter_First_Name, First_Name, Text_Description, Text_Specified_Person, Text1_Specified_Person, Application_Form
            ;


        if (lang_name === 'en') {

            Text2_Specified_Person = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_TEXT2_SPECIFIED_PERSON'] && sbiHomeData['PRODUCTS_AGENT_TEXT2_SPECIFIED_PERSON'].content_en;
            Text1_Specified_Person = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_TEXT1_SPECIFIED_PERSON'] && sbiHomeData['PRODUCTS_AGENT_TEXT1_SPECIFIED_PERSON'].content_en;
            Text_Specified_Person = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_TEXT_SPECIFIED_PERSON'] && sbiHomeData['PRODUCTS_AGENT_TEXT_SPECIFIED_PERSON'].content_en;
            Text_Description = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_TEXT'] && sbiHomeData['PRODUCTS_AGENT_TEXT'].content_en;
            Submit = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_SUBMIT'] && sbiHomeData['PRODUCTS_AGENT_SUBMIT'].content_en;
            Enter_Company_Name = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_ENTER_COMPANY_NAME'] && sbiHomeData['PRODUCTS_AGENT_ENTER_COMPANY_NAME'].content_en;
            Company_Name = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_COMPANY_NAME'] && sbiHomeData['PRODUCTS_AGENT_COMPANY_NAME'].content_en;
            Are_You_An_Agent = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_ARE_YOU_AN_AGENT'] && sbiHomeData['PRODUCTS_AGENT_ARE_YOU_AN_AGENT'].content_en;
            No = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_NO'] && sbiHomeData['PRODUCTS_AGENT_NO'].content_en;
            Yes = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_YES'] && sbiHomeData['PRODUCTS_AGENT_YES'].content_en;
            Do_You_Want = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_DO_YOU_WANT'] && sbiHomeData['PRODUCTS_AGENT_DO_YOU_WANT'].content_en;
            Select_Gender = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_SELECT_GENDER'] && sbiHomeData['PRODUCTS_AGENT_SELECT_GENDER'].content_en;
            Female = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_FEMALE'] && sbiHomeData['PRODUCTS_AGENT_FEMALE'].content_en;
            Male = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_MALE'] && sbiHomeData['PRODUCTS_AGENT_MALE'].content_en;
            Gender = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_GENDER'] && sbiHomeData['PRODUCTS_AGENT_GENDER'].content_en;
            Enter_Age = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_ENTER_AGE'] && sbiHomeData['PRODUCTS_AGENT_ENTER_AGE'].content_en;
            Age = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_AGE'] && sbiHomeData['PRODUCTS_AGENT_AGE'].content_en;
            Enter_Profession = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_ENTER_PROFESSION'] && sbiHomeData['PRODUCTS_AGENT_ENTER_PROFESSION'].content_en;
            Profession = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_PROFESSION'] && sbiHomeData['PRODUCTS_AGENT_PROFESSION'].content_en;
            Select_City = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_SELECT_CITY'] && sbiHomeData['PRODUCTS_AGENT_SELECT_CITY'].content_en;
            Enter_Email = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_ENTER_EMAIL'] && sbiHomeData['PRODUCTS_AGENT_ENTER_EMAIL'].content_en;
            Email = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_EMAIL'] && sbiHomeData['PRODUCTS_AGENT_EMAIL'].content_en;
            Enter_Mobile = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_ENTER_MOBILE_NO'] && sbiHomeData['PRODUCTS_AGENT_ENTER_MOBILE_NO'].content_en;
            Mobile_No = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_MOBILE_NO'] && sbiHomeData['PRODUCTS_AGENT_MOBILE_NO'].content_en;
            Enter_Last_Name = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_ENTER_LAST_NAME'] && sbiHomeData['PRODUCTS_AGENT_ENTER_LAST_NAME'].content_en;
            Last_Name = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_LAST_NAME'] && sbiHomeData['PRODUCTS_AGENT_LAST_NAME'].content_en;
            Enter_First_Name = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_ENTER_FIRST_NAME'] && sbiHomeData['PRODUCTS_AGENT_ENTER_FIRST_NAME'].content_en;
            First_Name = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_FIRST_NAME'] && sbiHomeData['PRODUCTS_AGENT_FIRST_NAME'].content_en;
            Become_An_Agent = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_BECOME_AN_AGENT'] && sbiHomeData['PRODUCTS_AGENT_BECOME_AN_AGENT'].content_en;
            Select_Option = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_OPTION'] && sbiHomeData['PRODUCTS_AGENT_OPTION'].content_en;
            Ajent = sbiHomeData && sbiHomeData['HOME_AGENT'] && sbiHomeData['HOME_AGENT'].content_en;
            Agents = sbiHomeData && sbiHomeData['HOME_AGENTS'] && sbiHomeData['HOME_AGENTS'].content_en;
            Specified_Person = sbiHomeData && sbiHomeData['HOME_SPECIFIED_PERSON'] && sbiHomeData['HOME_SPECIFIED_PERSON'].content_en;
            Application_Form = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_APPLICATION_FORM'] && sbiHomeData['PRODUCTS_AGENT_APPLICATION_FORM'].content_en;
            Application_Form_Text = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_APPLICATION_FORM_TEXT'] && sbiHomeData['PRODUCTS_AGENT_APPLICATION_FORM_TEXT'].content_en;



        } else {
            Text2_Specified_Person = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_TEXT2_SPECIFIED_PERSON'] && sbiHomeData['PRODUCTS_AGENT_TEXT2_SPECIFIED_PERSON'].content_hi;
            Application_Form_Text = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_APPLICATION_FORM_TEXT'] && sbiHomeData['PRODUCTS_AGENT_APPLICATION_FORM_TEXT'].content_hi;
            Application_Form = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_APPLICATION_FORM'] && sbiHomeData['PRODUCTS_AGENT_APPLICATION_FORM'].content_hi;
            Text_Specified_Person = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_TEXT_SPECIFIED_PERSON'] && sbiHomeData['PRODUCTS_AGENT_TEXT_SPECIFIED_PERSON'].content_hi;
            Submit = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_SUBMIT'] && sbiHomeData['PRODUCTS_AGENT_SUBMIT'].content_hi;
            Enter_Company_Name = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_ENTER_COMPANY_NAME'] && sbiHomeData['PRODUCTS_AGENT_ENTER_COMPANY_NAME'].content_hi;
            Company_Name = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_COMPANY_NAME'] && sbiHomeData['PRODUCTS_AGENT_COMPANY_NAME'].content_hi;
            Are_You_An_Agent = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_ARE_YOU_AN_AGENT'] && sbiHomeData['PRODUCTS_AGENT_ARE_YOU_AN_AGENT'].content_hi;
            No = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_NO'] && sbiHomeData['PRODUCTS_AGENT_NO'].content_hi;
            Yes = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_YES'] && sbiHomeData['PRODUCTS_AGENT_YES'].content_hi;
            Do_You_Want = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_DO_YOU_WANT'] && sbiHomeData['PRODUCTS_AGENT_DO_YOU_WANT'].content_hi;
            Select_Gender = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_SELECT_GENDER'] && sbiHomeData['PRODUCTS_AGENT_SELECT_GENDER'].content_hi;
            Female = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_FEMALE'] && sbiHomeData['PRODUCTS_AGENT_FEMALE'].content_hi;
            Male = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_MALE'] && sbiHomeData['PRODUCTS_AGENT_MALE'].content_hi;
            Gender = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_GENDER'] && sbiHomeData['PRODUCTS_AGENT_GENDER'].content_hi;
            Enter_Age = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_ENTER_AGE'] && sbiHomeData['PRODUCTS_AGENT_ENTER_AGE'].content_hi;
            Age = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_AGE'] && sbiHomeData['PRODUCTS_AGENT_AGE'].content_hi;
            Enter_Profession = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_ENTER_PROFESSION'] && sbiHomeData['PRODUCTS_AGENT_ENTER_PROFESSION'].content_hi;
            Profession = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_PROFESSION'] && sbiHomeData['PRODUCTS_AGENT_PROFESSION'].content_hi;
            Select_City = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_SELECT_CITY'] && sbiHomeData['PRODUCTS_AGENT_SELECT_CITY'].content_hi;
            Enter_Email = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_ENTER_EMAIL'] && sbiHomeData['PRODUCTS_AGENT_ENTER_EMAIL'].content_hi;
            Email = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_EMAIL'] && sbiHomeData['PRODUCTS_AGENT_EMAIL'].content_hi;
            Enter_Mobile = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_ENTER_MOBILE_NO'] && sbiHomeData['PRODUCTS_AGENT_ENTER_MOBILE_NO'].content_hi;
            Mobile_No = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_MOBILE_NO'] && sbiHomeData['PRODUCTS_AGENT_MOBILE_NO'].content_hi;
            Enter_Last_Name = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_ENTER_LAST_NAME'] && sbiHomeData['PRODUCTS_AGENT_ENTER_LAST_NAME'].content_hi;
            Last_Name = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_LAST_NAME'] && sbiHomeData['PRODUCTS_AGENT_LAST_NAME'].content_hi;
            Enter_First_Name = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_ENTER_FIRST_NAME'] && sbiHomeData['PRODUCTS_AGENT_ENTER_FIRST_NAME'].content_hi;
            First_Name = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_FIRST_NAME'] && sbiHomeData['PRODUCTS_AGENT_FIRST_NAME'].content_hi;
            Select_Option = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_OPTION'] && sbiHomeData['PRODUCTS_AGENT_OPTION'].content_hi;
            Ajent = sbiHomeData && sbiHomeData['HOME_AGENT'] && sbiHomeData['HOME_AGENT'].content_hi;
            Agents = sbiHomeData && sbiHomeData['HOME_AGENTS'] && sbiHomeData['HOME_AGENTS'].content_hi;
            Become_An_Agent = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_BECOME_AN_AGENT'] && sbiHomeData['PRODUCTS_AGENT_BECOME_AN_AGENT'].content_hi;
            Specified_Person = sbiHomeData && sbiHomeData['HOME_SPECIFIED_PERSON'] && sbiHomeData['HOME_SPECIFIED_PERSON'].content_hi;
            Text_Description = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_TEXT'] && sbiHomeData['PRODUCTS_AGENT_TEXT'].content_hi;
            Text1_Specified_Person = sbiHomeData && sbiHomeData['PRODUCTS_AGENT_TEXT1_SPECIFIED_PERSON'] && sbiHomeData['PRODUCTS_AGENT_TEXT1_SPECIFIED_PERSON'].content_hi;


        }
        const formpath = AppConstant.BASE_URL + "/uploads/5dd8350eae8d456aae59f10f70355925.pdf";
        let { agentDocument } = this.state;
        return (
            <BaseComponent pageTitle="Agent">
                {/* <Helmet> */}
                <HelmetData pageComponentType="Agent" />
                {/* Header Start */}
                {isMobile ? (
                    <section className="topform product-header">
                        <div className="insuTab">
                            <h1>{Ajent}</h1>
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
                            <div className="col-4">
                                <figure className="justify-content-between align-items-center">
                                    <img
                                        src={require("../../../assets/images/agent_banner.svg")}
                                        alt=""
                                    />
                                </figure>
                            </div>
                            <div className="col-8 d-flex align-items-center">
                                <div className="flex-column">
                                    <h1>{Ajent}</h1>
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
                                <Row className="m-b-65">
                                    <Col sm={12}>
                                        <Nav variant="pills" className="flex-row aboutTab justify-content-md-start justify-content-lg-center align-items-center">
                                            <Nav.Item>
                                                <Nav.Link eventKey="Agents" className="d-flex flex-column justify-content-center align-items-center"
                                                    onClick={() => { this.gtmClickHandler('become_an_agent_page_1_icon_menu_click', 'become_an_agent_page', 'Agents') }} >
                                                    <img src={require("./../../../assets/images/teamIcon.svg")} alt="" />
                                                    <h2>{Agents}</h2>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="SpecifiedPerson" className="d-flex flex-column justify-content-center align-items-center"
                                                    onClick={() => { this.gtmClickHandler('become_an_agent_page_1_icon_menu_click', 'become_an_agent_page', 'Specified Person') }}  >
                                                    <img src={require("./../../../assets/images/icon-claim-settlement.svg")} alt="" />
                                                    <h2>{Specified_Person}</h2>
                                                </Nav.Link>
                                            </Nav.Item>


                                        </Nav>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={8}>

                                        <Tab.Content className="aboutTabContent">
                                            <Tab.Pane eventKey="Agents">

                                                <div className="cms-page-content">
                                                    <Row>
                                                        <Col lg="12">
                                                            {ReactHtmlParser(Text_Description)}
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="SpecifiedPerson">

                                                <div className="cms-page-content">
                                                    <Row>
                                                        <Col lg="12">
                                                            {ReactHtmlParser(Text_Specified_Person)}
                                                            <p> {Text2_Specified_Person} (<a href="http://www.statebanktimes.com" rel="noopener noreferrer" target="_blank">www.statebanktimes.com</a>).</p>

                                                            {ReactHtmlParser(Text1_Specified_Person)}
                                                            <p><Link to={'#'} onClick={this.downloadFile.bind(this, formpath)} download>{Application_Form}</Link></p>
                                                            {ReactHtmlParser(Application_Form_Text)}

                                                        </Col>
                                                    </Row>
                                                </div>



                                            </Tab.Pane>


                                        </Tab.Content>
                                    </Col>
                                    <Col sm={4}>
                                        <div className="agentDocumentLinks">
                                            <h4 className="heading">
                                                {Become_An_Agent}
                                            </h4>
                                            <Form
                                                className="agent_form"
                                                id="agent_form"
                                                noValidate
                                                validated={this.state.validated}
                                                onSubmit={this.handleSubmit}
                                                autoComplete="off"
                                            >
                                                <Form.Row>
                                                    <Form.Group className="col-lg-12" controlId="firstName">
                                                        <InputGroup>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder={First_Name}
                                                                required
                                                                onChange={() => this.gtmFormInit('First Name')}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {Enter_First_Name}
                                                            </Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                </Form.Row>
                                                <Form.Row>
                                                    <Form.Group className="col-lg-12" controlId="lastName">
                                                        <InputGroup>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder={Last_Name}
                                                                required
                                                                onChange={() => this.gtmFormInit('Last Name')}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {Enter_Last_Name}
                                                            </Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                </Form.Row>
                                                <Form.Row>
                                                    <Form.Group className="col-lg-12" controlId="mobNo">
                                                        <InputGroup>
                                                            <Form.Control
                                                                placeholder={Mobile_No}
                                                                type="text"
                                                                required
                                                                pattern="^[0-9]{10}$"
                                                                maxLength="10"
                                                                onChange={() => this.gtmFormInit('Mobile No')}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {Enter_Mobile}
                                                            </Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                </Form.Row>
                                                <Form.Row>
                                                    <Form.Group className="col-lg-12" controlId="emailId">
                                                        <Form.Control
                                                            placeholder={Email}
                                                            type="email"
                                                            required
                                                            pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                                                            onChange={() => this.gtmFormInit('Email')}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            {Enter_Email}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Form.Row>
                                                <Form.Row>
                                                    <Form.Group className="col-lg-12" controlId="selectCity">
                                                        <Form.Control as="select" ref={this.city} required
                                                            onChange={() => this.gtmFormInit('City')}>
                                                            {ReactHtmlParser(Select_Option)}


                                                        </Form.Control>
                                                        <Form.Control.Feedback type="invalid">
                                                            {Select_City}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Form.Row>
                                                <Form.Row>
                                                    <Form.Group className="col-lg-12" controlId="profession">
                                                        <InputGroup>
                                                            <Form.Control
                                                                placeholder={Profession}
                                                                type="text"
                                                                required
                                                                maxLength="100"
                                                                onChange={() => this.gtmFormInit('Profession')}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {Enter_Profession}
                                                            </Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                </Form.Row>
                                                <Form.Row>
                                                    <Form.Group className="col-lg-12" controlId="age">
                                                        <InputGroup>
                                                            <Form.Control
                                                                placeholder={Age}
                                                                type="text"
                                                                required
                                                                pattern="^[0-9.]{1,3}$"
                                                                maxLength="3"
                                                                onChange={() => this.gtmFormInit('Age')}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {Enter_Age}
                                                            </Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                </Form.Row>
                                                <Form.Row>
                                                    <Form.Group className="col-lg-12" controlId="gender">
                                                        <label className="remarks-label">
                                                            {Gender}
                                                        </label>
                                                        <InputGroup>
                                                            <Form.Check
                                                                type="radio"
                                                                label={Male}
                                                                name="gender"
                                                                inline
                                                                value="male"
                                                                required
                                                                onChange={() => this.gtmFormInit('Gender')}
                                                            />
                                                            <Form.Check
                                                                type="radio"
                                                                label={Female}
                                                                name="gender"
                                                                inline
                                                                value="female"
                                                                required
                                                                onChange={() => this.gtmFormInit('Gender')}
                                                            />
                                                        </InputGroup>
                                                        <Form.Control.Feedback type="invalid">
                                                            {Select_Gender}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Form.Row>
                                                <Form.Row>
                                                    <Form.Group className="col-lg-12" controlId="becomeAgent">
                                                        <label className="remarks-label">
                                                            {Do_You_Want}
                                                        </label>
                                                        <InputGroup>
                                                            <Form.Check
                                                                type="radio"
                                                                label={Yes}
                                                                name="becomeAgent"
                                                                inline
                                                                value="yes"
                                                                required
                                                                onChange={() => this.gtmFormInit('Do you want to become an agent?')}
                                                            />
                                                            <Form.Check
                                                                type="radio"
                                                                label={No}
                                                                name="becomeAgent"
                                                                inline
                                                                value="no"
                                                                required
                                                                onChange={() => this.gtmFormInit('Do you want to become an agent?')}
                                                            />
                                                        </InputGroup>
                                                    </Form.Group>
                                                </Form.Row>
                                                <Form.Row>
                                                    <Form.Group className="col-lg-12">
                                                        <InputGroup>
                                                            <label className="remarks-label">
                                                                {Are_You_An_Agent}
                                                            </label>
                                                        </InputGroup>
                                                    </Form.Group>
                                                </Form.Row>
                                                <Form.Row>
                                                    <Form.Group className="col-lg-12">
                                                        <InputGroup>
                                                            <Form.Check
                                                                type="radio"
                                                                label={Yes}
                                                                name="mobRadio"
                                                                inline
                                                                id="yes"
                                                                onChange={this.handleOptionChange}
                                                            />
                                                            <Form.Check
                                                                type="radio"
                                                                label={No}
                                                                name="mobRadio"
                                                                inline
                                                                id="no"
                                                                onChange={this.handleOptionChange}
                                                                defaultChecked
                                                            />
                                                        </InputGroup>
                                                    </Form.Group>
                                                </Form.Row>
                                                <Form.Row
                                                    className={
                                                        this.state.is_agent ? null : "readlessContentHide"
                                                    }
                                                >
                                                    <Form.Group className="col-lg-12" controlId="companyName">
                                                        <InputGroup>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder={Company_Name}
                                                                required={this.state.is_agent ? true : false}
                                                                onChange={() => this.gtmFormInit('Company Name')}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {Enter_Company_Name}
                                                            </Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                </Form.Row>
                                                <Button type="submit" variant="primary">
                                                    {Submit}
                                                </Button>
                                            </Form>


                                        </div>
                                        <div className="agentDocumentLinks">
                                            <ul>
                                                {agentDocument.map((item, index) => (
                                                    <li key={index}><Link to={'#'}
                                                        onClick={this.downloadLink.bind(this, AppConstant.BASE_URL + item.document.url, item.document.name, item.title)} >
                                                    {
                                                    (() => {
                                                        if (lang_name === 'hi') {
                                                            if (item.title==="Individual Agents List On Website")
                                                                return <span>वेबसाइट पर व्यक्तिगत एजेंटों की सूची</span>
                                                            if (item.title==="Corporate Agent Details on Website")
                                                                return <span>वेबसाइट पर कॉर्पोरेट एजेंट विवरण</span>
                                                            if (item.title==="Blacklisted Agent List On Website")
                                                                return <span>वेबसाइट पर ब्लैक लिस्टेड एजेंट लिस्ट</span>
                                                        }
                                                        else{
                                                            return item.title
                                                        }                                                    
                                                    })()
                                                    
                                                    }</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="imgShadow displayContLg">
                                            <Link to={"/home-insurance/long-term-home-insurance"}>
                                                <img
                                                    className="img-fluid"
                                                    src={require("./../../../assets/images/addsafeGuard.svg")}
                                                    alt=""
                                                />
                                            </Link>
                                        </div>
                                        <div className="displayContMd text-center">
                                            <Link to={"/home-insurance/long-term-home-insurance"}>
                                                <img
                                                    className="img-fluid"
                                                    src={require("./../../../assets/images/addsafeGuardSm.svg")}
                                                    alt=""
                                                />
                                            </Link>
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

export default Agent;