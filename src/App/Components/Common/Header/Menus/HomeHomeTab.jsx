import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Button } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import { Formik, Field, Form } from "formik";

import AxiosTrans from "../../../../Services/Shared/AxiosTrans";
import * as AppConstant from "../../../AppConstant";
import swal from "sweetalert";

const initialValues = {
  ownerType: "",
};

class MenuHomeHomeTab extends Component {
  submitHome = (values, action) => {
   
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let redirectUrl = AppConstant.TRANSACTION_API_BASE_URL;
    let errTxt = "";
    if (values.ownerType === null || values.ownerType === "") {
      if (lang_name === 'en') {
        errTxt = "Owner Type is required";
      }
      else {
        errTxt = "स्वामी प्रकार की आवश्यकता है";
      }

    } else if (values.ownerType === "owner" || values.ownerType === "tenant") {
      AxiosTrans({
        method: "POST",
        url: "/api/home",
        data: JSON.stringify({
          product_type: "simplehome",
          assetOwnerType: values.ownerType,
        }),
      })
        .then((res) => {
          //console.log(res.status);
          // console.log(res.data);
          if (res.data.token) {
            redirectUrl =
              redirectUrl +
              "/simplehomeinsurance/contact_information/token/" +
              res.data.token;
            document.getElementById("homeForm").reset();
            //window.location.replace(redirectUrl);
            window.open(redirectUrl, "_blank");
          }
        })
        .catch((err) => {
          let msgText = "Something went wrong!";
          if (typeof err.response.data.pincode != "undefined") {
            msgText = err.response.data.pincode[0];
          } else if (typeof err.response.data.si != "undefined") {
            msgText = err.response.data.si[0];
          }
          swal({
            text: msgText,
            icon: "error",
          }).then(() => { });
        });
    } else {
      redirectUrl =
        redirectUrl +
        "/lth/lthHome?itm_source=direct&itm_medium=none&itm_campaign=";
      window.open(redirectUrl, "_blank");
    }
    if (errTxt) {
      swal({
        text: errTxt,
        icon: "error",
      }).then(() => { });
    }
  };

  gtmClickHandler = (cta) => {
    window.dataLayer = window.dataLayer || [];
    const data = {
      event: "homepage_2_cta_click",
      pagetype: "Home Page",
      cta: cta,
    };
    window.dataLayer.push(data);
  };

  render() {
    let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let buy, claim, Iam, Go, Looking_For_Home, Select_Suitable, Tenet, Owner,
     Landlord_Text;

    if (lang_name === 'en') {

      Landlord_Text = sbiHomeData && sbiHomeData['PRODUCT_LANDLORD'] && sbiHomeData['PRODUCT_LANDLORD'].content_en;
      Owner = sbiHomeData && sbiHomeData['PRODUCT_OWNER'] && sbiHomeData['PRODUCT_OWNER'].content_en;
      Tenet = sbiHomeData && sbiHomeData['PRODUCT_TENENT'] && sbiHomeData['PRODUCT_TENENT'].content_en;
      Select_Suitable = sbiHomeData && sbiHomeData['PRODUCT_SELECT_SUITABLE'] && sbiHomeData['PRODUCT_SELECT_SUITABLE'].content_en;
      Looking_For_Home = sbiHomeData && sbiHomeData['PRODUCT_LOOKING_FOR_HOME_INSURENCE'] && sbiHomeData['PRODUCT_LOOKING_FOR_HOME_INSURENCE'].content_en;
      Go = sbiHomeData && sbiHomeData['PRODUCTS_FORM_GO'] && sbiHomeData['PRODUCTS_FORM_GO'].content_en;
      buy = sbiHomeData && sbiHomeData['HOME_TAB_HEALTH_BUY'] && sbiHomeData['HOME_TAB_HEALTH_BUY'].content_en;
      claim = sbiHomeData && sbiHomeData['HOME_TAB_HEALTH_CLAIM'] && sbiHomeData['HOME_TAB_HEALTH_CLAIM'].content_en;

      Iam = sbiHomeData && sbiHomeData['HOME_BODY_SEARCH_BAR_I_AM'] && sbiHomeData['HOME_BODY_SEARCH_BAR_I_AM'].content_en;
     
     
     
     
    } else {
      Landlord_Text = sbiHomeData && sbiHomeData['PRODUCT_LANDLORD'] && sbiHomeData['PRODUCT_LANDLORD'].content_hi;
      Owner = sbiHomeData && sbiHomeData['PRODUCT_OWNER'] && sbiHomeData['PRODUCT_OWNER'].content_hi;
      Select_Suitable = sbiHomeData && sbiHomeData['PRODUCT_SELECT_SUITABLE'] && sbiHomeData['PRODUCT_SELECT_SUITABLE'].content_hi;
      buy = sbiHomeData && sbiHomeData['HOME_TAB_HEALTH_BUY'] && sbiHomeData['HOME_TAB_HEALTH_BUY'].content_hi;
      Looking_For_Home = sbiHomeData && sbiHomeData['PRODUCT_LOOKING_FOR_HOME_INSURENCE'] && sbiHomeData['PRODUCT_LOOKING_FOR_HOME_INSURENCE'].content_hi;
      claim = sbiHomeData && sbiHomeData['HOME_TAB_HEALTH_CLAIM'] && sbiHomeData['HOME_TAB_HEALTH_CLAIM'].content_hi;
      Go = sbiHomeData && sbiHomeData['PRODUCTS_FORM_GO'] && sbiHomeData['PRODUCTS_FORM_GO'].content_hi;
      Iam = sbiHomeData && sbiHomeData['HOME_BODY_SEARCH_BAR_I_AM'] && sbiHomeData['HOME_BODY_SEARCH_BAR_I_AM'].content_hi;
      Tenet = sbiHomeData && sbiHomeData['PRODUCT_TENENT'] && sbiHomeData['PRODUCT_TENENT'].content_hi;
     
     
     
    
    }
    return (
      <Tab.Pane eventKey="tabmain_3">
        <Tab.Container defaultActiveKey="subtab_1">
          <Nav className="tabsub" variant="pills">
            <Nav.Item onClick={() => this.gtmClickHandler("Home Buy")}>
              <Nav.Link eventKey="subtab_1">{buy}</Nav.Link>
            </Nav.Item>
            <Nav.Item onClick={() => this.gtmClickHandler("Home Claim")}>
              {/* <Nav.Link eventKey="subtab_2">Claim</Nav.Link> */}
              <Link
                to={{
                  pathname: "/claim/claims-intimation",
                  state: { product_type: "home" },
                }}
                className="nav-link"
              >
                {claim}
              </Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="subtab_1">
              <div className="getquote">
                <Formik
                  onSubmit={this.submitHome}
                  initialValues={initialValues}
                >
                  {({
                    values,
                    errors,
                    isValid,
                    touched,
                    setFieldTouched,
                    isSubmitting,
                    setFieldValue,
                  }) => {
                    return (
                      <Form
                        className="form-row"
                        id="homeForm"
                        autoComplete="off"
                      >
                        <div className="parant-form-cover">
                          <div className="d-flex form-group">
                            <label>{Iam}</label>
                            <Field
                              component="select"
                              name="ownerType"
                              className="form-control-home form-control2"
                            >
                              <option>{Select_Suitable}</option>
                              <option value="tenant">{Tenet}</option>
                              <option value="owner">
                                {Owner}
                              </option>
                              <option value="landlord">
                                {Landlord_Text}
                              </option>
                            </Field>
                          </div>
                          <label>{Looking_For_Home}</label>
                        </div>
                        <Button
                          type="submit"
                          variant="warning"
                          className="btn-go"
                        >
                          {Go}
                        </Button>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </Tab.Pane>

            <Tab.Pane eventKey="subtab_2">
              {/* <div className="getquote">
                                <Formik onSubmit={this.submitHome} initialValues={initialValues}>
                                    {({ values, errors, isValid, touched, setFieldTouched, isSubmitting, setFieldValue }) => {
                                        return (
                                            <Form className="form-row" id="homeForm">
                                                <div className="d-flex form-group">
                                                    <label className="form-label">I want to insure my Home at </label>
                                                    <Field className="form-control"
                                                        type="text"
                                                        name="pincode"
                                                        placeholder="Enter your pincode"
                                                    />
                                                </div>
                                                <div className="d-flex form-group">
                                                    <label className="form-label">with Sum Insured &#x20B9;</label>
                                                    <Field className="form-control"
                                                        type="text"
                                                        name="si"
                                                        placeholder="Enter Sum Amount"
                                                    />
                                                </div>
                                                <Button type="submit" variant="warning">Get QUOTE</Button>
                                            </Form>
                                        )
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

export default MenuHomeHomeTab;
