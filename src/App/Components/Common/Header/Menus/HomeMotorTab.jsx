import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Button } from "react-bootstrap";
import { Form as Nform } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import { Formik, Field, Form } from "formik";

import AxiosTrans from "../../../../Services/Shared/AxiosTrans";
import * as AppConstant from "../../../AppConstant";
import swal from "sweetalert";

const initialValues = {
  product_type: "motor",
  policy_type: "",
  car_number: ""
};
//const initialRenewValues = { car_number: "" }

class MenuHomeMotorTab extends Component {

  constructor() {
    super();
    this.motor_product_list = React.createRef();
    this.renew_car_number = React.createRef();
  }
  state = {
    policy_select_type: "",
  };

  submitMotor = (values, action) => {
    // let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
        let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let redirectUrl = AppConstant.TRANSACTION_API_BASE_URL;
    if (this.state.policy_select_type === "motor4wheeler") {
      redirectUrl = redirectUrl + "/PMCAR";
    } else if (this.state.policy_select_type === "motor2wheeler") {
      redirectUrl = redirectUrl + "/M2W";
    }
    let errTxt = "";
    if (this.state.policy_select_type === null || this.state.policy_select_type === "") {
      if (lang_name === 'en') {
        errTxt = "Car Type is required";
    }
    else
    {
      errTxt = "कार का प्रकार आवश्यक है";
    }
    
     
    } else if (values.car_number === null || values.car_number === "") {
      if (lang_name === 'en') {
        errTxt = "Registration No is required";
    }
    else
    {
      errTxt = "पंजीकरण संख्या की आवश्यकता नहीं है";
    }
      
    } else {
      AxiosTrans({
        method: "POST",
        url: "/api/home",
        data: JSON.stringify({ "product_type": "motor", "policy_type": this.state.policy_select_type, "car_number": values.car_number })
      })
        .then(res => {
          //console.log(res.status);
          if (res.data.token) {
            redirectUrl = redirectUrl + "/display/token/" + res.data.token;
            document.getElementById("motorForm").reset();
            window.open(redirectUrl, "_blank");
            //window.location.replace(redirectUrl)
          }
        })
        .catch(err => {
          let msgText = "Something went wrong!";
          if (typeof err.response.data.policy_type != "undefined") {
            msgText = err.response.data.policy_type[0];
          } else if (typeof err.response.data.car_number != "undefined") {
            msgText = err.response.data.car_number[0];
          }
          swal({
            text: msgText,
            icon: "error"
          }).then(() => { });
        });
    }
    if (errTxt) {
      swal({
        text: errTxt,
        icon: "error"
      }).then(() => { });
    }
  };

  submitRenew = (values, action) => {
    //console.log(values);
  }

  handleMotorPolicyRenewal = (e) => {
    //console.log(this.motor_product_list.current.value);
    //console.log(this.renew_car_number.current.value);
    e.preventDefault();
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let redirectUrl = AppConstant.TRANSACTION_API_BASE_URL;
    let errTxt = '';
    if (this.motor_product_list.current.value === null || this.motor_product_list.current.value === "") {
      if (lang_name === 'en') {
        errTxt = "Car Type is required";
    }
    else
    {
      errTxt = "कार का प्रकार आवश्यक है";
    }
      
    } else {
      AxiosTrans({
        method: "POST",
        url: "/api/home",
        data: JSON.stringify({ "product_type": "motorrenewal", "productCode": this.motor_product_list.current.value, "car_number": this.renew_car_number.current.value })
      })
        .then(res => {
          //console.log(res.status);
          if (res.data.token) {
            redirectUrl = redirectUrl + "/motorrenewal/display/token/" + res.data.token;
            document.getElementById("MotorRenewForm").reset();
            window.open(redirectUrl, "_blank");
            //window.location.replace(redirectUrl)
          }
        })
        .catch(err => {
          let msgText = "Something went wrong!";
          if (typeof err.response.data.policy_type != "undefined") {
            msgText = err.response.data.policy_type[0];
          } else if (typeof err.response.data.policy_number != "undefined") {
            //msgText = err.response.data.policy_number[0];
            msgText = "";
            let motor_err = [];
            for (var key in err.response.data.policy_number) {
              motor_err.push(err.response.data.policy_number[key]);
            }
            motor_err.map(function (item, index) {
              msgText += item + (index + 1 < motor_err.length ? (". \n") : ("\n"));
              return true;
            });
          } else if (typeof err.response.data.car_number != "undefined") {
            //msgText = err.response.data.policy_number[0];
            msgText = "";
            let motor_err = [];
            for (let key in err.response.data.car_number) {
              motor_err.push(err.response.data.car_number[key]);
            }
            motor_err.map(function (item, index) {
              msgText += item + (index + 1 < motor_err.length ? (". \n") : ("\n"));
              return true;
            });
          }
          swal({
            text: msgText,
            icon: "error"
          }).then(() => { });
        });
    }
    if (errTxt) {
      swal({
        text: errTxt,
        icon: "error"
      }).then(() => { });
    }
    this.gtmClickHandlerDatalayer(
      "portal_display_page_8_form_interaction",
      "portal_display_page",
      "Motor",
      "form_submit"
      )


  }

  handleSelect = e => {
    //console.log(e.target.value);
    this.setState({ policy_select_type: e.target.value });
  }

  handleWithoutVehicleno = (e) => {
    e.preventDefault();
    let redirectUrl = AppConstant.TRANSACTION_API_BASE_URL;
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let txtmsg;
    if (lang_name === 'en') {
       txtmsg = "Please Select a Policy Type";
    }
    else
    {
      txtmsg = "कृपया एक पॉलिसी पटाइप चुनें";
    }
    if (this.state.policy_select_type === "motor4wheeler") {
      redirectUrl = redirectUrl + "/PMCAR/display/token?reg=";
      //document.getElementById("motorForm").reset();
      window.open(redirectUrl, "_blank");
    } else if (this.state.policy_select_type === "motor2wheeler") {
      redirectUrl = redirectUrl + "/M2W/display/token?reg=";
      //document.getElementById("motorForm").reset();
      window.open(redirectUrl, "_blank");
    } else {
      swal({
        text: txtmsg,
        icon: "error"
      }).then(() => { });
    }
    //console.log(this.state.policy_select_type);
    this.gtmClickHandlerDatalayer(
      "portal_display_page_8_form_interaction",
      "portal_display_page",
      "Motor",
      "Vehicle Number"
      )
  }

  gtmClickHandler = (cta) => {
    window.dataLayer = window.dataLayer || [];
    const data = {
      'event': "homepage_2_cta_click",
      'pagetype': "Home Page",
      'cta': cta
    };
    window.dataLayer.push(data);
  }

  gtmClickHandlerDatalayer = (eventName, pageType,productName,clickText) => {
    const data = {
      event: eventName,
      pagetype: pageType,
      product_name:productName,
      field_name: clickText,
    };
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(data);
  };


  handleLength = (e) => {
       
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    if (lang_name === 'en') {
        e.target.placeholder = "Enter Reg No.";
    }
    else
    {
        e.target.placeholder = "पंजीकरण नंबर दर्ज करें";
    }
    


}
  render() {
    let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let buy, renew, claim, Two_Wheeler, Four_Wheeler, Go, Enter_Reg_No, with_registration_No, Select_Vehicle,
      renew_my_car, without_Vehicle, buy_insurance_for_my

      ;

    if (lang_name === 'en') {
      buy = sbiHomeData && sbiHomeData['HOME_TAB_HEALTH_BUY'] && sbiHomeData['HOME_TAB_HEALTH_BUY'].content_en;
      renew = sbiHomeData && sbiHomeData['HOME_TAB_HELTH_RENEW'] && sbiHomeData['HOME_TAB_HELTH_RENEW'].content_en;
      claim = sbiHomeData && sbiHomeData['HOME_TAB_HEALTH_CLAIM'] && sbiHomeData['HOME_TAB_HEALTH_CLAIM'].content_en;
      Two_Wheeler = sbiHomeData && sbiHomeData['RENEW_POLICY_BLOG_MP_TWO_WHEELER'] && sbiHomeData['RENEW_POLICY_BLOG_MP_TWO_WHEELER'].content_en;
      Four_Wheeler = sbiHomeData && sbiHomeData['RENEW_POLICY_BLOG_MP_FOUR_WHEELER'] && sbiHomeData['RENEW_POLICY_BLOG_MP_FOUR_WHEELER'].content_en;
      Go = sbiHomeData && sbiHomeData['PRODUCTS_FORM_GO'] && sbiHomeData['PRODUCTS_FORM_GO'].content_en;
      Enter_Reg_No = sbiHomeData && sbiHomeData['HOME_ENTER_REG_NO'] && sbiHomeData['HOME_ENTER_REG_NO'].content_en;
      with_registration_No = sbiHomeData && sbiHomeData['HOME_ENTER_REGISTRATION_NO'] && sbiHomeData['HOME_ENTER_REGISTRATION_NO'].content_en;
      Select_Vehicle = sbiHomeData && sbiHomeData['HOME_SELECT_VEHICLE'] && sbiHomeData['HOME_SELECT_VEHICLE'].content_en;
      renew_my_car = sbiHomeData && sbiHomeData['HOME_RENEW_CAR'] && sbiHomeData['HOME_RENEW_CAR'].content_en;
      without_Vehicle = sbiHomeData && sbiHomeData['HOME_WITHOUT_VEHICLE'] && sbiHomeData['HOME_WITHOUT_VEHICLE'].content_en;
      buy_insurance_for_my = sbiHomeData && sbiHomeData['HOME_BUY_INSURENCE'] && sbiHomeData['HOME_BUY_INSURENCE'].content_en;


    } else {
      buy = sbiHomeData && sbiHomeData['HOME_TAB_HEALTH_BUY'] && sbiHomeData['HOME_TAB_HEALTH_BUY'].content_hi;
      renew = sbiHomeData && sbiHomeData['HOME_TAB_HELTH_RENEW'] && sbiHomeData['HOME_TAB_HELTH_RENEW'].content_hi;
      claim = sbiHomeData && sbiHomeData['HOME_TAB_HEALTH_CLAIM'] && sbiHomeData['HOME_TAB_HEALTH_CLAIM'].content_hi;
      Two_Wheeler = sbiHomeData && sbiHomeData['RENEW_POLICY_BLOG_MP_TWO_WHEELER'] && sbiHomeData['RENEW_POLICY_BLOG_MP_TWO_WHEELER'].content_hi;
      Four_Wheeler = sbiHomeData && sbiHomeData['RENEW_POLICY_BLOG_MP_FOUR_WHEELER'] && sbiHomeData['RENEW_POLICY_BLOG_MP_FOUR_WHEELER'].content_hi;
      Enter_Reg_No = sbiHomeData && sbiHomeData['HOME_ENTER_REG_NO'] && sbiHomeData['HOME_ENTER_REG_NO'].content_hi;
      with_registration_No = sbiHomeData && sbiHomeData['HOME_ENTER_REGISTRATION_NO'] && sbiHomeData['HOME_ENTER_REGISTRATION_NO'].content_hi;
      Select_Vehicle = sbiHomeData && sbiHomeData['HOME_SELECT_VEHICLE'] && sbiHomeData['HOME_SELECT_VEHICLE'].content_hi;
      renew_my_car = sbiHomeData && sbiHomeData['HOME_RENEW_CAR'] && sbiHomeData['HOME_RENEW_CAR'].content_hi;
      without_Vehicle = sbiHomeData && sbiHomeData['HOME_WITHOUT_VEHICLE'] && sbiHomeData['HOME_WITHOUT_VEHICLE'].content_hi;
      buy_insurance_for_my = sbiHomeData && sbiHomeData['HOME_BUY_INSURENCE'] && sbiHomeData['HOME_BUY_INSURENCE'].content_hi;
      Go = sbiHomeData && sbiHomeData['PRODUCTS_FORM_GO'] && sbiHomeData['PRODUCTS_FORM_GO'].content_hi;

    }
    return (
      <Tab.Pane eventKey="tabmain_1">
        <Tab.Container defaultActiveKey="subtab_1">
          <Nav className="tabsub" variant="pills">
            <Nav.Item onClick={() => this.gtmClickHandler("Motor Buy")}>
              <Nav.Link eventKey="subtab_1">{buy ? buy : 'Buy'}</Nav.Link>
            </Nav.Item>
            <Nav.Item onClick={() => this.gtmClickHandler("Motor Renew")}>
              <Nav.Link eventKey="subtab_2">{renew ? renew : 'Renew'}</Nav.Link>
            </Nav.Item>
            <Nav.Item onClick={() => this.gtmClickHandler("Motor Claim")}>
              {/* <Nav.Link eventKey="subtab_3">Claim</Nav.Link> */}
              {/* <a className="nav-link" href={AppConstant.TRANSACTION_API_BASE_URL} target="_blank" rel="noopener noreferrer" >Claim</a> */}
              <Link to={{
                pathname: "/claim/claims-intimation",
                state: { product_type: "motor" }
              }} className="nav-link">{claim ? claim : 'Claim'}</Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="subtab_1">
              <div className="getquote">
                <Formik
                  onSubmit={this.submitMotor}
                  initialValues={initialValues}
                >
                  {({
                    values,
                    errors,
                    isValid,
                    touched,
                    setFieldTouched,
                    isSubmitting,
                    setFieldValue
                  }) => {
                    return (
                      <Form className="form-row" id="motorForm" autoComplete="off">
                        <div className="parant-form-cover">
                          <div className="d-flex form-group">
                            <label className="form-label">
                              {buy_insurance_for_my?buy_insurance_for_my:'I would like to buy insurance for my'}
                            </label>
                            <Field
                              component="select"
                              name="policy_type"
                              className="form-control"
                              onChange={this.handleSelect}
                              value={this.state.policy_select_type}
                            onClick={() =>
                              this.gtmClickHandlerDatalayer(
                              "portal_display_page_8_form_interaction",
                              "portal_display_page",
                              "Motor",
                              "Vehicle"
                              )
                          }
                            >
                              <option value="">{Select_Vehicle?Select_Vehicle:'Select Vehicle'}</option>
                              <option value="motor2wheeler">{Two_Wheeler ? Two_Wheeler : 'Two wheeler'}</option>
                              <option value="motor4wheeler">{Four_Wheeler ? Four_Wheeler : 'Four wheeler'}</option>
                            </Field>
                          </div>
                          <div className="d-flex form-group">
                            <label className="form-label">
                              {with_registration_No?with_registration_No:'with registration No.'}
                            </label>
                            <Field
                              className="form-control capitalInput"
                              type="text"
                              name="car_number"
                              placeholder={Enter_Reg_No?Enter_Reg_No:'Enter Reg No.'}
                              maxLength="10"
                              onFocus={(e) => e.target.placeholder = ""}
                            // onBlur={(e) => e.target.placeholder = "Enter Reg No."}
                            onBlur={(e) => e.target.placeholder = Enter_Reg_No?Enter_Reg_No:'Enter Reg No.'}
                            onClick={() =>
                              this.gtmClickHandlerDatalayer(
                              "portal_display_page_8_form_interaction",
                              "portal_display_page",
                              "Motor",
                              "registration No"
                              )
                          }
                          />
                          </div>
                        </div>
                        <Button type="submit" variant="warning" className="btn-go" onClick={() =>
                              this.gtmClickHandlerDatalayer(
                              "portal_display_page_8_form_interaction",
                              "portal_display_page",
                              "Motor",
                              "form_submit"
                              )
                          }> 
                          {Go?Go:'Go'}
                        </Button>
                      </Form>
                    );
                  }}
                </Formik>
                {/* <a href={AppConstant.TRANSACTION_API_BASE_URL+"/PMCAR/display/token?reg="} target="_blank" className="cwvnLink" rel="noopener noreferrer" >
                  Continue without Vehicle Number
                </a> */}
                <div className="cwvnLinkMain"><Link to={"#!"} onClick={this.handleWithoutVehicleno} className="cwvnLink">
                  {without_Vehicle?without_Vehicle:'Continue without Vehicle Number'}
                </Link></div>
              </div>
            </Tab.Pane>

            <Tab.Pane eventKey="subtab_2">
              <div className="getquote">
                <Nform className="form-row" id="MotorRenewForm">
                  <div className="parant-form-cover">
                    <Nform.Group className="d-flex form-group">
                      <Nform.Label>{renew_my_car?renew_my_car:'I like to renew my car,'} </Nform.Label>
                      <Nform.Control as="select" ref={this.motor_product_list}>
                        <option value="">{Select_Vehicle?Select_Vehicle:'Select Vehicle'}</option>
                        <option value="M2W">{Two_Wheeler ? Two_Wheeler : 'Two wheeler'}</option>
                        <option value="M4W">{Four_Wheeler ? Four_Wheeler : 'Four wheeler'}</option>
                      </Nform.Control>
                    </Nform.Group>
                    <Nform.Group className="d-flex form-group">
                      <Nform.Label>{with_registration_No?with_registration_No:'with registration No.'}</Nform.Label>
                      <Nform.Control
                        type="text"
                        placeholder={Enter_Reg_No?Enter_Reg_No:'Enter_Reg_No.'}
                        ref={this.renew_car_number}
                        maxLength="10"
                        onFocus={(e) => e.target.placeholder = ""}
                        // onBlur={(e) => e.target.placeholder = {Enter_Reg_No}}
                        // onBlur={Enter_Reg_No}
                        onBlur={this.handleLength.bind()}
                        onClick={() =>
                        this.gtmClickHandlerDatalayer(
                        "portal_display_page_8_form_interaction",
                        "portal_display_page",
                        "Motor",
                        "Vehicle"
                        )
                    }
                      />
                    </Nform.Group>
                  </div>
                  <Nform.Group className="d-flex form-group">
                    <Button variant="warning" onClick={this.handleMotorPolicyRenewal} className="btn-go">
                      {Go}
                    </Button>
                  </Nform.Group>
                </Nform>

                {/* <Formik
                  onSubmit={this.submitRenew}
                  initialValues={initialRenewValues}
                >
                  {({
                    values,
                    errors,
                    isValid,
                    touched,
                    setFieldTouched,
                    isSubmitting,
                    setFieldValue
                  }) => {
                    return (
                      <Form className="form-row" id="motorRenewForm">
                        <div className="d-flex form-group">
                          <label className="form-label">
                            I like to renew my car,
                          </label>
                          <Field
                            component="select"
                            name="policy_type"
                            className="form-control"
                            onChange={this.handleSelect}
                            value={this.state.policy_select_type}
                          >
                            <option value="">Select</option>
                            <option value="M2W">Two Wheeler</option>
                            <option value="M4W">Four Wheeler</option>
                          </Field>
                        </div>
                        <div className="d-flex form-group">
                          <label className="form-label">
                            with registration No.
                          </label>
                          <Field
                            className="form-control"
                            type="text"
                            name="car_number"
                            placeholder="MH 01B4266"
                          />
                        </div>
                        <Button type="submit" variant="warning">
                          Get QUOTE
                        </Button>
                      </Form>
                    );
                  }}
                </Formik> */}
              </div>
            </Tab.Pane>

            <Tab.Pane eventKey="subtab_3">
              {/* <div className="getquote">
                <Formik
                  onSubmit={this.submitRenew}
                  initialValues={initialRenewValues}
                >
                  {({
                    values,
                    errors,
                    isValid,
                    touched,
                    setFieldTouched,
                    isSubmitting,
                    setFieldValue
                  }) => {
                    return (
                      <Form className="form-row" id="motorClaimForm">
                        <div className="d-flex form-group">
                          <label className="form-label">
                            I like to renew my car, registration number
                          </label>
                          <Field
                            className="form-control"
                            type="text"
                            name="reg_no"
                            placeholder="MH 01B4266"
                          />
                        </div>
                        <Button type="submit" variant="warning">
                          Get QUOTE
                        </Button>
                      </Form>
                    );
                  }}
                </Formik>
              </div> */}

            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Tab.Pane>
    );
  }
}

export default MenuHomeMotorTab;
