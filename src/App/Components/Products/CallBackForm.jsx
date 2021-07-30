import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
//import queryString from 'query-string';
import swal from "sweetalert";
import productRequestCallbackData from "../../assets/productRequestCallbackData.json";
import AxiosTrans from "../../Services/Shared/AxiosTrans";
import * as AppConstant from "../AppConstant";
// import jsonxml from "jsontoxml";
import DatePicker from "react-datepicker";
import ReactHtmlParser from 'react-html-parser'
const businessNature = [
  "Manufacturing",
  "Food & Lodging",
  "Entertainment",
  "Construction",
  "Educational Services",
  "Finance & Insurance",
  "Healthcare",
  "Mining ,quarrying & gas extraction",
  "Real Estate",
  "Retail Trade/ Wholesale Trade",
  "Transportation & Warehousing",
  "Utilities",
  "Professional, scientific & technical services",
  "Others"
]
const annualTurnoverData = [
  "Less than Rs 100 Cr",
  "Greater than Rs 100 Cr"
]

class CallBackForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      policy_name: this.props.policyName,
      validated: false,
      successMsgShow: false,
      capthaOne: Math.floor(Math.random() * 5) + 1,
      capthaTwo: Math.floor(Math.random() * 50) + 1,
      nextForm: false,
      validateNext: false,
      pincode: "",
      nature_business: "",
      annual_turnover: "",
      expiry_date: "",
      request_id: "",
      has_policy: false
    };
  }

  componentDidMount() { }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      successMsgShow: false
    });
    const form = event.currentTarget;
    let requestParam = {};
    this.setState({
      validated: true
    });
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const capthaCalulation = this.state.capthaOne + this.state.capthaTwo;

      if (
        Number(capthaCalulation) === Number(form.customerMathCalculation.value)
      ) {
        let userName = form.customerName.value.trim();
        let userNameSplit = userName.split(" ");
        let firstName = "";
        let lastName = "";
        let middleName="";


         console.log(userNameSplit.length);

        if (userNameSplit != null && userNameSplit.length > 0) {
          if (userNameSplit.length > 1 && userNameSplit.length <= 2) {
            firstName = userNameSplit[0];
            lastName = userNameSplit[1];
          } else if (userNameSplit.length > 2) {
            firstName = userNameSplit[0];
            middleName = userNameSplit[1];
            lastName = userNameSplit[userNameSplit.length - 1];
          } else {
            firstName = userNameSplit[0];
            lastName = "";
          }
        } else {
          firstName = userName;
          lastName = "";
        }

        let gaUserId = document.cookie.match(/_ga=(.+?);/)[1].split('.').slice(-2).join(".");
        requestParam["ClientId"] = gaUserId;
        requestParam["SBILeadFirstName"] = firstName;
        requestParam["SBILeadMiddleName"] = middleName;
        requestParam["SBILeadLastName"] = lastName;
        requestParam["LeadType"] = "1";
        requestParam["SBIEmailId"] = form.customerEmail.value;
        requestParam["SBIMobileNum"] = form.customerMobile.value;

        let productSlug = this.props.location.pathname.split("/");
        let productKey = "";
        if (productSlug.length === 2) {
          productKey = productSlug[1];
          if (productKey === "group-health-insurance") {
            productKey = "group-health-insurance-C";
          }
        } else if (productSlug.length === 3) {
          productKey = productSlug[2];
        }

        requestParam["SBIProductName"] = this.getProductRelatedData(productKey).productName;

        //UTM Source Catch
        let sourceParam = AppConstant.getUTMSource();
        let utm_source = sourceParam["utm_source"];
        let utm_medium = sourceParam["utm_medium"];
        let utm_campaign = sourceParam["utm_campaign"];
        requestParam["utm_source"] = utm_source;
        requestParam["utm_medium"] = utm_medium;
        requestParam["utm_campaign"] = utm_campaign;
        //GTM Added
        window.dataLayer = window.dataLayer || [];
        let productName = requestParam["SBIProductName"];
        let pagetype = this.getProductRelatedData(productKey).pageType;
        pagetype = pagetype + "_product_page";;
        const data = {
          'event': 'portal_product_callback_page_3_form_submit',
          'product_name': productName,
          'pagetype': 'portal_product_callback_page',
          'client_id': gaUserId,
          'timestamp': AppConstant.gtmCurrentTime(),
          'quote_no': 'NA',
          'lead_no': 'NA',
          'policy_no': 'NA',
          'field_name':'form_submit'
        };
        window.dataLayer.push(data);
        // console.log(requestParam);        
        this.refs.btn1.setAttribute("disabled", "disabled");
        AxiosTrans({
          method: "POST",
          url: "/api/callmeyuva",
          data: JSON.stringify(requestParam),
          headers: { "Content-Type": "application/json" }
        })
          .then(res => {
            // console.log(res.data);
            // let msgText =
            //   res.data.success !== undefined
            //     ? res.data.success + " Request Submitted Successfully"
            //     : "Request Submitted Successfully";
            if (res.data.success) {
              //GTM Added
              window.dataLayer = window.dataLayer || [];
              let productName = requestParam["SBIProductName"];
              let pagetype = this.getProductRelatedData(productKey).pageType;
              pagetype = pagetype + "_product_page";;
              const data = {
                'event': pagetype + '_3_form_submitted',
                'product_name': productName,
                'pagetype': pagetype,
                'client_id': gaUserId,
                'timestamp': AppConstant.gtmCurrentTime(),
                'quote_no': 'NA',
                'lead_no': res.data.success,
                'policy_no': 'NA'
              };
              window.dataLayer.push(data);
              // console.log(requestParam);
            }
            // swal({
            //   text: msgText,
            //   icon: "success"
            // }).then(() => { });
            document.getElementById("request_call_back").reset();
            this.refs.btn1.removeAttribute("disabled");
            this.setState({
              validated: false,
              capthaOne: Math.floor(Math.random() * 5) + 1,
              capthaTwo: Math.floor(Math.random() * 50) + 1,
              nextForm: true,
              request_id: res.data.request_id
            });
          })
          .catch(err => {
            console.log(err);
            this.refs.btn1.removeAttribute("disabled");
            document.getElementById("request_call_back").reset();
            this.setState({ nextForm: true });
            // let msgText = "Something Went Wrong!";
            // swal({
            //   text: msgText,
            //   icon: "error"
            // }).then(() => { });
          });
      } else {
        swal({
          text: "You Enter Invalid Number",
          icon: "error"
        }).then(() => { });
      }
    }
  };

  getProductRelatedData = productType => {
    let proArr = { "productName": "", "pageType": "" };
    if (productRequestCallbackData) {
      let index = productRequestCallbackData.findIndex(
        x => x.key === productType
      );
      if (index > -1) {
        proArr['productName'] = productRequestCallbackData[index].productName;
        proArr['pageType'] = productRequestCallbackData[index].prodEventName;
      }
    }
    return proArr;
  };

  gtmFormInit = (formField) => {
    window.dataLayer = window.dataLayer || [];
    //console.log(AppConstant.gtmCurrentTime());
    let productSlug = this.props.location.pathname.split("/");
    let productKey = "";
    if (productSlug.length === 2) {
      productKey = productSlug[1];
      if (productKey === "group-health-insurance") {
        productKey = "group-health-insurance-C";
      }
    } else if (productSlug.length === 3) {
      productKey = productSlug[2];
    }
    let gaUserId = document.cookie.match(/_ga=(.+?);/)[1].split('.').slice(-2).join(".");
    let productName = this.getProductRelatedData(productKey).productName;
    let pagetype = this.getProductRelatedData(productKey).pageType;
    pagetype = pagetype + "_product_page";;
    const data = {
      'event': 'portal_product_callback_page_2_form_interaction',
      'product_name': productName,
      'pagetype': 'portal_product_callback_page',
      'client_id': gaUserId,
      'timestamp': AppConstant.gtmCurrentTime(),
      'field_name': formField,
      'quote_no': 'NA',
      'lead_no': 'NA',
      'policy_no': 'NA'
    };
    window.dataLayer.push(data);
  }
  gtmFormInitSecondpage = (formField) => {
    window.dataLayer = window.dataLayer || [];
    //console.log(AppConstant.gtmCurrentTime());
    let productSlug = this.props.location.pathname.split("/");
    let productKey = "";
    if (productSlug.length === 2) {
      productKey = productSlug[1];
      if (productKey === "group-health-insurance") {
        productKey = "group-health-insurance-C";
      }
    } else if (productSlug.length === 3) {
      productKey = productSlug[2];
    }
    let gaUserId = document.cookie.match(/_ga=(.+?);/)[1].split('.').slice(-2).join(".");
    let productName = this.getProductRelatedData(productKey).productName;
    let pagetype = this.getProductRelatedData(productKey).pageType;
    pagetype = pagetype + "_product_page";;
    const data = {
      'event': 'portal_product_callback_page_24_form_interaction',
      'product_name': productName,
      'pagetype': 'portal_product_callback_page',
      'client_id': gaUserId,
      'timestamp': AppConstant.gtmCurrentTime(),
      'field_name': formField,
      'quote_no': 'NA',
      'lead_no': 'NA',
      'policy_no': 'NA'
    };
    window.dataLayer.push(data);
  }



  handleSubmitNext = event => {
    event.preventDefault();    
    const form = event.currentTarget;
    console.log(form);
    let requestParam = {};
    this.setState({
      validateNext: true
    });
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      requestParam["request_id"] = this.state.request_id;
      requestParam["pincode"] = form.customerPincode.value;
      requestParam["nature_of_business"] = form.natureBusiness.value;
      requestParam["annual_turnover"] = form.annualTurnover.value;
      requestParam["expiry_date"] = this.formatDate(this.state.expiry_date);
      if(this.state.has_policy){
        requestParam["expiry_date"] = null;
      }

      //GTM Added
      window.dataLayer = window.dataLayer || [];
      let productSlug = this.props.location.pathname.split("/");
      let productKey = "";
      if (productSlug.length === 2) {
        productKey = productSlug[1];
        if (productKey === "group-health-insurance") {
          productKey = "group-health-insurance-C";
        }
      } else if (productSlug.length === 3) {
        productKey = productSlug[2];
      }
      let productName = this.getProductRelatedData(productKey).productName;
      let pagetype = this.getProductRelatedData(productKey).pageType;
      pagetype = pagetype + "_product_page";
      let gaUserId = document.cookie.match(/_ga=(.+?);/)[1].split('.').slice(-2).join(".");
      const data = {
        'event':'portal_product_callback_page_27_form_submit',
        'product_name': productName,
        'pagetype': 'portal_product_callback_page',
        'client_id': gaUserId,
        'timestamp': AppConstant.gtmCurrentTime(),
        'quote_no': 'NA',
        'lead_no': 'NA',
        'policy_no': 'NA',
        'field_name':'form_submit'
      };
      window.dataLayer.push(data);
      // console.log(requestParam);
      this.refs.btn2.setAttribute("disabled", "disabled");
      AxiosTrans({
        method: "POST",
        url: "/api/callmeyuva",
        data: JSON.stringify(requestParam),
        headers: { "Content-Type": "application/json" }
      })
        .then(res => {
          // console.log(res.data);
          let msgText =
            res.data.success !== undefined
              ? res.data.success : "Request Submitted Successfully";
          if (res.data.success) {
            //GTM Added
            window.dataLayer = window.dataLayer || [];
            let productName = requestParam["SBIProductName"];
            let pagetype = this.getProductRelatedData(productKey).pageType;
            pagetype = pagetype + "_product_page";;
            const data = {
              'event': pagetype + '_3_form_submitted',
              'product_name': productName,
              'pagetype': pagetype,
              'client_id': gaUserId,
              'timestamp': AppConstant.gtmCurrentTime(),
              'quote_no': 'NA',
              'lead_no': res.data.success,
              'policy_no': 'NA'
            };
            window.dataLayer.push(data);
            this.refs.btn2.removeAttribute("disabled");
            document.getElementById("next_call_back_request").reset();
            this.setState({
              validateNext: false,
              pincode: "",
              nature_business: "",
              annual_turnover: "",
              expiry_date: "",
              has_policy:false,
              nextForm: false,
              validated: false
            });
          }
          swal({
            text: msgText,
            icon: "success"
          }).then(() => { });          
        })
        .catch(err => {
          console.log(err);
          document.getElementById("next_call_back_request").reset();
          this.refs.btn2.removeAttribute("disabled");
          this.setState({
            validateNext: false,
            pincode: "",
            nature_business: "",
            annual_turnover: "",
            expiry_date: "",
            nextForm: false,
            validated: false
          });
          let msgText = "Something Went Wrong!";
          swal({
            text: msgText,
            icon: "error"
          }).then(() => { });
        });
    }
    console.log(requestParam);
  }

  handleChange = (field, value) => {
    this.setState({
      pincode: field === 'pincode' ? value : (this.state.pincode),
      nature_business: field === 'nature_business' ? value : (this.state.nature_business),
      annual_turnover: field === 'annual_turnover' ? value : (this.state.annual_turnover),
      expiry_date: field === 'expiry_date' ? value : (this.state.expiry_date)
    });
  }

  formatDate = (date) => {
    if (date) {
      var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2)
        month = '0' + month;
      if (day.length < 2)
        day = '0' + day;
      return [year, month, day].join('-');
    }
    return null;
  }

  hasNoPolicy = ()=>{

    this.setState({ has_policy: !this.state.has_policy });
  }

  render() {
    let { nextForm } = this.state;
    let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let Placeholder_Name, Form_Heading, Term_Condition, Placeholder_Email, Placeholder_Mobile, Show_Image,Have_Not_Policy,
      Placeholder_Type, Label_Accept, Error_Name_Show, Error_Email_Show,Pincode,
      Error_Mobile_Show,Enter_Pin,Nature_Business,Please_Select_Nature,Annual_Turn_Over,Renewal_Date,Expire_Date,
      Error_Invalid_Num_Show, Talk_To_An_Expert, Help_Us, Go,Please_Select_Annual_Turnover
      ;
    if (lang_name === 'en') {
      
      Have_Not_Policy = sbiHomeData && sbiHomeData['PRODUCTS_FORM_NOT_POLICY'] && sbiHomeData['PRODUCTS_FORM_NOT_POLICY'].content_en;
     
      Expire_Date = sbiHomeData && sbiHomeData['PRODUCTS_FORM_EXPIRE_DATE'] && sbiHomeData['PRODUCTS_FORM_EXPIRE_DATE'].content_en;
      Renewal_Date = sbiHomeData && sbiHomeData['PRODUCTS_FORM_RENEWAL_DATE'] && sbiHomeData['PRODUCTS_FORM_RENEWAL_DATE'].content_en;
      Please_Select_Annual_Turnover = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_FORM_SELECT_TURNOVER'] && sbiHomeData['PRODUCTS_CAPTHA_FORM_SELECT_TURNOVER'].content_en;
      Placeholder_Name = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_PLACEHOLDER_NAME'] && sbiHomeData['PRODUCTS_CAPTHA_PLACEHOLDER_NAME'].content_en;
      Help_Us = sbiHomeData && sbiHomeData['PRODUCTS_FORM_HELP_US'] && sbiHomeData['PRODUCTS_FORM_HELP_US'].content_en;
     // Looking_To_Ensure = sbiHomeData && sbiHomeData['PRODUCTS_FORM_LOOKING_TO_ENSURE'] && sbiHomeData['PRODUCTS_FORM_LOOKING_TO_ENSURE'].content_en;
      //Child_1 = sbiHomeData && sbiHomeData['PRODUCTS_FORM_CHILD1'] && sbiHomeData['PRODUCTS_FORM_CHILD1'].content_en;
      //Select_DOB = sbiHomeData && sbiHomeData['PRODUCTS_FORM_SELECT_DOB'] && sbiHomeData['PRODUCTS_FORM_SELECT_DOB'].content_en;
      
      Enter_Pin = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_FORM_PIN_CODE'] && sbiHomeData['PRODUCTS_CAPTHA_FORM_PIN_CODE'].content_en;
      
      Nature_Business = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_FORM_NATURE'] && sbiHomeData['PRODUCTS_CAPTHA_FORM_NATURE'].content_en;
      Annual_Turn_Over = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_FORM_TURNOVER'] && sbiHomeData['PRODUCTS_CAPTHA_FORM_TURNOVER'].content_en;
      //Child_2 = sbiHomeData && sbiHomeData['PRODUCTS_FORM_CHILD2'] && sbiHomeData['PRODUCTS_FORM_CHILD2'].content_en;
   // Select = sbiHomeData && sbiHomeData['PRODUCTS_FORM_SELECT'] && sbiHomeData['PRODUCTS_FORM_SELECT'].content_en;
     // Spouse = sbiHomeData && sbiHomeData['PRODUCTS_FORM_SPOUSE'] && sbiHomeData['PRODUCTS_FORM_SPOUSE'].content_en;
      Go = sbiHomeData && sbiHomeData['PRODUCTS_FORM_GO'] && sbiHomeData['PRODUCTS_FORM_GO'].content_en;
   // Self = sbiHomeData && sbiHomeData['PRODUCTS_FORM_SELF'] && sbiHomeData['PRODUCTS_FORM_SELF'].content_en;
      //Add_Family_Member = sbiHomeData && sbiHomeData['PRODUCTS_FORM_ADD_FAMILY_MEMBER'] && sbiHomeData['PRODUCTS_FORM_ADD_FAMILY_MEMBER'].content_en;
     // Add_Fmaily = sbiHomeData && sbiHomeData['PRODUCTS_FORM_PLEASE_ADD_FAMILY'] && sbiHomeData['PRODUCTS_FORM_PLEASE_ADD_FAMILY'].content_en;
    // Add_Member = sbiHomeData && sbiHomeData['PRODUCTS_FORM_PLEASE_ADD_MEMBER'] && sbiHomeData['PRODUCTS_FORM_PLEASE_ADD_MEMBER'].content_en;
      
      //Please_Select_Gender = sbiHomeData && sbiHomeData['PRODUCTS_FORM_PLEASE_SELECT_GENDER'] && sbiHomeData['PRODUCTS_FORM_PLEASE_SELECT_GENDER'].content_en;
     // Select_Gender = sbiHomeData && sbiHomeData['PRODUCTS_FORM_SELECT_GENDER'] && sbiHomeData['PRODUCTS_FORM_SELECT_GENDER'].content_en;
     // Select_Option = sbiHomeData && sbiHomeData['PRODUCTS_FORM_SELECT_OPTION'] && sbiHomeData['PRODUCTS_FORM_SELECT_OPTION'].content_en;
      Talk_To_An_Expert = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_TALK_EXPERT'] && sbiHomeData['PRODUCTS_CAPTHA_TALK_EXPERT'].content_en;
      Label_Accept = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_LABEL_I_ACCEPT'] && sbiHomeData['PRODUCTS_CAPTHA_LABEL_I_ACCEPT'].content_en;
      Error_Name_Show = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_FORM_NAME'] && sbiHomeData['PRODUCTS_CAPTHA_FORM_NAME'].content_en;
      Error_Invalid_Num_Show = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_FORM_INVALID_NUMBER'] && sbiHomeData['PRODUCTS_CAPTHA_FORM_INVALID_NUMBER'].content_en;
      Placeholder_Type = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_PLACEHOLDER_TYPE_HERE'] && sbiHomeData['PRODUCTS_CAPTHA_PLACEHOLDER_TYPE_HERE'].content_en;
      Placeholder_Mobile = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_PLACEHOLDER_MOBILE'] && sbiHomeData['PRODUCTS_CAPTHA_PLACEHOLDER_MOBILE'].content_en;
      Form_Heading = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_FORM_HEADING'] && sbiHomeData['PRODUCTS_CAPTHA_FORM_HEADING'].content_en;
      Term_Condition = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_FORM_TERM'] && sbiHomeData['PRODUCTS_CAPTHA_FORM_TERM'].content_en;
      Placeholder_Email = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_PLACEHOLDER_EMAIL'] && sbiHomeData['PRODUCTS_CAPTHA_PLACEHOLDER_EMAIL'].content_en;
      Show_Image = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_FORM_IMAGE'] && sbiHomeData['PRODUCTS_CAPTHA_FORM_IMAGE'].content_en;
      Pincode = sbiHomeData && sbiHomeData['PRODUCTS_FORM_PINCODE'] && sbiHomeData['PRODUCTS_FORM_PINCODE'].content_en;
      Please_Select_Nature = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_FORM_SELECT_NATURE'] && sbiHomeData['PRODUCTS_CAPTHA_FORM_SELECT_NATURE'].content_en;
      
      Error_Email_Show = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_FORM_ENTET_EMAIL'] && sbiHomeData['PRODUCTS_CAPTHA_FORM_ENTET_EMAIL'].content_en;
      Error_Mobile_Show = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_FORM_ENTET_MOBILE'] && sbiHomeData['PRODUCTS_CAPTHA_FORM_ENTET_MOBILE'].content_en;





    } else {
      
      Pincode = sbiHomeData && sbiHomeData['PRODUCTS_FORM_PINCODE'] && sbiHomeData['PRODUCTS_FORM_PINCODE'].content_hi;

      Placeholder_Name = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_PLACEHOLDER_NAME'] && sbiHomeData['PRODUCTS_CAPTHA_PLACEHOLDER_NAME'].content_hi;
      Term_Condition = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_FORM_TERM'] && sbiHomeData['PRODUCTS_CAPTHA_FORM_TERM'].content_hi;
      Help_Us = sbiHomeData && sbiHomeData['PRODUCTS_FORM_HELP_US'] && sbiHomeData['PRODUCTS_FORM_HELP_US'].content_hi;
      Go = sbiHomeData && sbiHomeData['PRODUCTS_FORM_GO'] && sbiHomeData['PRODUCTS_FORM_GO'].content_hi;
     // Select = sbiHomeData && sbiHomeData['PRODUCTS_FORM_SELECT'] && sbiHomeData['PRODUCTS_FORM_SELECT'].content_hi;
      
      Annual_Turn_Over = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_FORM_TURNOVER'] && sbiHomeData['PRODUCTS_CAPTHA_FORM_TURNOVER'].content_hi;
    
     // Add_Fmaily = sbiHomeData && sbiHomeData['PRODUCTS_FORM_PLEASE_ADD_FAMILY'] && sbiHomeData['PRODUCTS_FORM_PLEASE_ADD_FAMILY'].content_hi;
   // Add_Member = sbiHomeData && sbiHomeData['PRODUCTS_FORM_PLEASE_ADD_MEMBER'] && sbiHomeData['PRODUCTS_FORM_PLEASE_ADD_MEMBER'].content_hi;
   // Please_Select_Gender = sbiHomeData && sbiHomeData['PRODUCTS_FORM_PLEASE_SELECT_GENDER'] && sbiHomeData['PRODUCTS_FORM_PLEASE_SELECT_GENDER'].content_hi;
      Error_Name_Show = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_FORM_NAME'] && sbiHomeData['PRODUCTS_CAPTHA_FORM_NAME'].content_hi;
      //Select_Gender = sbiHomeData && sbiHomeData['PRODUCTS_FORM_SELECT_GENDER'] && sbiHomeData['PRODUCTS_FORM_SELECT_GENDER'].content_hi;
   // Select_Option = sbiHomeData && sbiHomeData['PRODUCTS_FORM_SELECT_OPTION'] && sbiHomeData['PRODUCTS_FORM_SELECT_OPTION'].content_hi;
      Placeholder_Mobile = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_PLACEHOLDER_MOBILE'] && sbiHomeData['PRODUCTS_CAPTHA_PLACEHOLDER_MOBILE'].content_hi;
      Placeholder_Email = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_PLACEHOLDER_EMAIL'] && sbiHomeData['PRODUCTS_CAPTHA_PLACEHOLDER_EMAIL'].content_hi;
      Form_Heading = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_FORM_HEADING'] && sbiHomeData['PRODUCTS_CAPTHA_FORM_HEADING'].content_hi;
      Show_Image = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_FORM_IMAGE'] && sbiHomeData['PRODUCTS_CAPTHA_FORM_IMAGE'].content_hi;
     // Self = sbiHomeData && sbiHomeData['PRODUCTS_FORM_SELF'] && sbiHomeData['PRODUCTS_FORM_SELF'].content_hi;
      //Spouse = sbiHomeData && sbiHomeData['PRODUCTS_FORM_SPOUSE'] && sbiHomeData['PRODUCTS_FORM_SPOUSE'].content_hi;
      
      Please_Select_Annual_Turnover = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_FORM_SELECT_TURNOVER'] && sbiHomeData['PRODUCTS_CAPTHA_FORM_SELECT_TURNOVER'].content_hi;
      
      Renewal_Date = sbiHomeData && sbiHomeData['PRODUCTS_FORM_RENEWAL_DATE'] && sbiHomeData['PRODUCTS_FORM_RENEWAL_DATE'].content_hi;
     
      //Child_1 = sbiHomeData && sbiHomeData['PRODUCTS_FORM_CHILD1'] && sbiHomeData['PRODUCTS_FORM_CHILD1'].content_hi;
     // Child_2 = sbiHomeData && sbiHomeData['PRODUCTS_FORM_CHILD2'] && sbiHomeData['PRODUCTS_FORM_CHILD2'].content_hi;
      Have_Not_Policy = sbiHomeData && sbiHomeData['PRODUCTS_FORM_NOT_POLICY'] && sbiHomeData['PRODUCTS_FORM_NOT_POLICY'].content_hi;
      Expire_Date = sbiHomeData && sbiHomeData['PRODUCTS_FORM_EXPIRE_DATE'] && sbiHomeData['PRODUCTS_FORM_EXPIRE_DATE'].content_hi;
     
   // Select_DOB = sbiHomeData && sbiHomeData['PRODUCTS_FORM_SELECT_DOB'] && sbiHomeData['PRODUCTS_FORM_SELECT_DOB'].content_hi;
   // Looking_To_Ensure = sbiHomeData && sbiHomeData['PRODUCTS_FORM_LOOKING_TO_ENSURE'] && sbiHomeData['PRODUCTS_FORM_LOOKING_TO_ENSURE'].content_hi;
      Talk_To_An_Expert = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_TALK_EXPERT'] && sbiHomeData['PRODUCTS_CAPTHA_TALK_EXPERT'].content_hi;
      Label_Accept = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_LABEL_I_ACCEPT'] && sbiHomeData['PRODUCTS_CAPTHA_LABEL_I_ACCEPT'].content_hi;
     // Add_Family_Member = sbiHomeData && sbiHomeData['PRODUCTS_FORM_ADD_FAMILY_MEMBER'] && sbiHomeData['PRODUCTS_FORM_ADD_FAMILY_MEMBER'].content_hi;
      Error_Email_Show = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_FORM_ENTET_EMAIL'] && sbiHomeData['PRODUCTS_CAPTHA_FORM_ENTET_EMAIL'].content_hi;
      Placeholder_Type = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_PLACEHOLDER_TYPE_HERE'] && sbiHomeData['PRODUCTS_CAPTHA_PLACEHOLDER_TYPE_HERE'].content_hi;
      Error_Mobile_Show = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_FORM_ENTET_MOBILE'] && sbiHomeData['PRODUCTS_CAPTHA_FORM_ENTET_MOBILE'].content_hi;
      Error_Invalid_Num_Show = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_FORM_INVALID_NUMBER'] && sbiHomeData['PRODUCTS_CAPTHA_FORM_INVALID_NUMBER'].content_hi;
      Enter_Pin= sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_FORM_PIN_CODE'] && sbiHomeData['PRODUCTS_CAPTHA_FORM_PIN_CODE'].content_hi;
      Nature_Business = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_FORM_NATURE'] && sbiHomeData['PRODUCTS_CAPTHA_FORM_NATURE'].content_hi;
      Please_Select_Nature = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_FORM_SELECT_NATURE'] && sbiHomeData['PRODUCTS_CAPTHA_FORM_SELECT_NATURE'].content_hi;
    }
    return (
      <>
        {nextForm === false ? (
          <div className="lookingForSub">
            <h5 className="htitle">{Form_Heading}</h5>
            <Form
              id="request_call_back"
              noValidate
              validated={this.state.validated}
              onSubmit={this.handleSubmit}
              autoComplete="off"
            >
              <Form.Group controlId="customerName">
                {/* <Form.Label>Enter your Name</Form.Label> */}
                <Form.Control
                  type="text"
                  name="name"
                  placeholder={Placeholder_Name}
                  required
                  onBlur={() => this.gtmFormInit('Customer Name')}
                />
                <Form.Control.Feedback type="invalid">
                  {Error_Name_Show}
              </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="customerEmail">
                {/* <Form.Label>Your Email ID</Form.Label> */}
                <Form.Control
                  type="email"
                  name="email"
                  placeholder={Placeholder_Email}
                  pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                  required
                  onBlur={() => this.gtmFormInit('Email ID')}
                />
                <Form.Control.Feedback type="invalid">
                 {Error_Email_Show}
              </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="customerMobile">
                {/* <Form.Label>Mobile Number</Form.Label> */}
                <Form.Control
                  type="text"
                  name="mobile"
                  placeholder={Placeholder_Mobile}
                  pattern="^[0-9]{10}$"
                  maxLength="10"
                  required
                  onBlur={() => this.gtmFormInit('Mobile Number')}
                />
                <Form.Control.Feedback type="invalid">
                 {Error_Mobile_Show}
              </Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                className="d-flex checkbox-span"
                controlId="customerAccept"
              >
                <Form.Check
                  required
                  name="termsCheck"
                  label={Label_Accept}
                  feedback="You must accept before submitting."
                  onChange={() => this.gtmFormInit('Terms')}
                />
                <span>
                  &nbsp;
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"/portal/website-terms-usage"}
                  >
                    {Term_Condition}
                </a>
                </span>
              </Form.Group>

              <p className="required">
              {ReactHtmlParser(Show_Image)}
              </p>

              <Form.Group
                className="d-flex number-validation"
                controlId="customerMathCalculation"
              >
                <div className="captchaNumber">
                  {this.state.capthaOne}+{this.state.capthaTwo} =
              </div>
                <div>
                  <Form.Control
                    type="text"
                    name="type"
                    placeholder={Placeholder_Type}
                    pattern="^[0-9]*$"
                    required
                    onBlur={() => this.gtmFormInit('Captcha')}
                  />
                  <Form.Control.Feedback type="invalid">
                   {Error_Invalid_Num_Show}
                </Form.Control.Feedback>
                </div>
              </Form.Group>
              <div className="from-action">
                <Button ref="btn1" type="submit" variant="primary">
                 {Talk_To_An_Expert}
              </Button>
              </div>
            </Form>
          </div>
        ) : (
            <div className="lookingForSub">
              <h5 className="htitle">{Help_Us}</h5>
              <Form
                id="next_call_back_request"
                noValidate
                validated={this.state.validateNext}
                onSubmit={this.handleSubmitNext}
                autoComplete="off"
              >
                <Form.Group controlId="customerPincode">
                  <Form.Control
                    type="text"
                    name="pincode"
                    placeholder={Pincode}
                    pattern="^[0-9]{6}$"
                    maxLength="6"
                    onChange={(value) => this.handleChange('pincode', value)}
                    required
                    onBlur={() => this.gtmFormInitSecondpage('Pincode')}
                  />
                  <Form.Control.Feedback type="invalid">
                   {Enter_Pin}
              </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="natureBusiness">
                  <Form.Control
                    as="select"
                    name="nature_business"
                    placeholder={Nature_Business}
                    defaultValue={this.state.nature_business}
                    onChange={(value) => this.handleChange('nature_business', value)}
                    required
                    onBlur={() => this.gtmFormInitSecondpage('Nature of Business')}
                  >
                     <option value="">{Nature_Business}</option>
                     {businessNature.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                  {Please_Select_Nature}
              </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="annualTurnover">
                  {/* <Form.Label>Mobile Number</Form.Label> */}
                  <Form.Control
                    as="select"
                    name="annual_turnover"
                    placeholder={Annual_Turn_Over}
                    maxLength="50"
                    defaultValue={this.state.annual_turnover}
                    onChange={(value) => this.handleChange('annual_turnover', value)}
                    required
                    onBlur={() => this.gtmFormInitSecondpage('Annual Turnover')}
                  >
                      <option value="">{Annual_Turn_Over}</option>
                     {annualTurnoverData.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </Form.Control>
                  <Form.Control.Feedback type="invalid">
                  {Please_Select_Annual_Turnover}
                  </Form.Control.Feedback>
                </Form.Group>
                {!this.state.has_policy ? 
                (
                  <Form.Group className="callbackFormDatePicker" controlId="expiryDate">
                  <DatePicker selected={this.state.expiry_date}
                    dateFormat="dd-MM-yyy"
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    name="expiry_date"
                    defaultValue={this.state.expiry_date}
                    onChange={(value) => this.handleChange('expiry_date', value)}
                    onKeyDown={e => e.preventDefault()}
                    placeholderText={Renewal_Date}
                    popperPlacement="top-end"
                    className="form-control"
                  />
                  <Form.Control.Feedback type="invalid">
                   {Expire_Date}
                  </Form.Control.Feedback>
                </Form.Group>
                )
                : null}                

                <Form.Group
                className="d-flex checkbox-span"
                controlId="customerAccept"
              >
                <Form.Check
                  name="noPolicy"
                  label={Have_Not_Policy}
                  onChange={() => { this.gtmFormInitSecondpage('I do not have this policy');this.hasNoPolicy();}}
                />                
              </Form.Group>

                <div className="from-action">
                  <Button ref="btn2" type="submit" variant="primary">
                   {Go}
                  </Button>
                </div>
              </Form>
            </div>
          )}

        <div className="btn-holder"></div>
      </>
    );
  }
}

export default withRouter(CallBackForm);
