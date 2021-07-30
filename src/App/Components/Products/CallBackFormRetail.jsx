import React, { Component } from "react";
import { Form as Nform, Button, Modal, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
//import queryString from 'query-string';
import swal from "sweetalert";
import productRequestCallbackData from "../../assets/productRequestCallbackData.json";
import AxiosTrans from "../../Services/Shared/AxiosTrans";
import * as AppConstant from "../AppConstant";
import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import DatePicker from "react-datepicker";
// import jsonxml from "jsontoxml";

import ReactHtmlParser from 'react-html-parser'
import plusSign from '../../assets/images/plus-sign-white.svg';

const initialPopupValues = {
  self: '',
  self_dob: '',
  spouse: '',
  child1: '',
  child1_dob: '',
  child1_gender: '',
  child2: '',
  child2_dob: '',
  child2_gender: '',
};

class CallBackFormRetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      policy_name: this.props.policyName,
      validated: false,
      validateNext: false,
      successMsgShow: false,
      capthaOne: Math.floor(Math.random() * 5) + 1,
      capthaTwo: Math.floor(Math.random() * 50) + 1,
      nextForm: false,
      genderValue: "",
      cityValue: "",
      show_popup: false,
      relation: '',
      popup_errors: {},
      errors: {},
      initialPopupValues: {
        self: 'Self',
        self_ischecked: false,
        self_dob: '',//new Date(),
        spouse: 'Spouse',
        spouse_ischecked: false,
        spouse_dob: '',
        child1: 'Child1',
        child1_ischecked: false,
        child1_dob: '',
        child1_gender: '',
        child2: 'Child2',
        child2_ischecked: false,
        child2_dob: '',
        child2_gender: '',
      },
      request_id: ""
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
        let middleName = "";
        // console.log(userNameSplit);

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
        const product_type = this.getProductRelatedData(productKey).productType;

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
          url: "/api/callme",
          data: JSON.stringify(requestParam),
          headers: { "Content-Type": "application/json" }
        })
          .then(res => {
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

            this.setState({
              validated: false,
              capthaOne: Math.floor(Math.random() * 5) + 1,
              capthaTwo: Math.floor(Math.random() * 50) + 1
            });
            this.refs.btn1.removeAttribute("disabled");
            if (product_type === 'health') {
              this.setState({
                nextForm: true,
                request_id: res.data.request_id
              });
            } else {
              // console.log(res.data);
              let msgText =
                res.data.success !== undefined
                  ? res.data.success
                  : "Request Submitted Successfully";
              swal({
                text: msgText,
                icon: "success"
              }).then(() => { });
            }
            document.getElementById("request_call_back").reset();
          })
          .catch(err => {
            console.log(err);
            this.refs.btn1.removeAttribute("disabled");
            
            if (product_type === 'health') {
              this.setState({ nextForm: true });
            } else {
              let msgText = "Something Went Wrong!";
              swal({
                text: msgText,
                icon: "error"
              }).then(() => { });
            }
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
        proArr['productType'] = productRequestCallbackData[index].productType;
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

  handleGenderChange = event => {
    this.setState({ genderValue: event.target.value });
    
    
  };

  handleCityChange = event => {
    this.setState({ cityValue: event.target.value });
  };

  openPopup = (e) => {
    this.setState({ show_popup: true });
  }

  popupSubmit = (popupvalues, action) => {
    if (this.validatepopupform()) {
      let relation = '';
      let fields = this.state.initialPopupValues;
      //console.log(fields);
      if (fields.self_ischecked) {
        relation += 'Self, ';
      }
      if (fields.spouse_ischecked) {
        relation += 'Spouse, ';
      }
      if (fields.child1_ischecked) {
        relation += 'Child 1, ';
      }
      if (fields.child2_ischecked) {
        relation += 'Child 2';
      }
      relation = relation.replace(/,\s*$/, "");
      console.log(relation);
      this.setState({ relation: relation });
      //initialValues.relation = relation;
      this.handleClose();
    } else {
      this.setState({ relation: '' });
      console.log(this.state.popup_errors);
    }
  }

  validatepopupform = () => {
    let fields = this.state.initialPopupValues;
    let errors = {};
    let formIsValid = true;

    if (fields.self_ischecked) {
      if (fields.self_dob === '') {
        formIsValid = false;
        errors['self_dob'] = "Select DOB";
      }
    } else {
      //formIsValid = false;
      //errors['common'] = "Please Enter Self Details Before Proceed";
      let check_count = 0;
      if (fields.spouse_ischecked) { check_count++; }
      if (fields.child1_ischecked) { check_count++; }
      if (fields.child2_ischecked) { check_count++; }

      if (check_count > 1) {
        formIsValid = false;
        errors['common'] = "Please Enter Self Details Before Proceed";
      } else if (check_count === 1 && (fields.child1_ischecked || fields.child2_ischecked)) {
        formIsValid = false;
        errors['common'] = "Please Enter Self Details Before Proceed";
      }
    }
    if (fields.spouse_ischecked) {
      if (fields.spouse_dob === '') {
        formIsValid = false;
        errors['spouse_dob'] = "Select DOB";
      }
    }

    if (fields.self_ischecked === false && fields.spouse_ischecked === false && fields.child1_ischecked === false && fields.child2_ischecked === false) {
      formIsValid = false;
      errors['common'] = "Select Atleast An Applicant";
    }
    //console.log(errors);
    this.setState({
      popup_errors: errors
    });
    return formIsValid;
  }

  handleClose = (e) => {
    this.setState({ show_popup: false });
    if (!this.validatepopupform()) {
      this.setState({ relation: '' });
    }
  }

  handleCheck = (e) => {
    //console.log(e.target.value);
    this.setState({
          initialPopupValues: {
              self: e.target.value === 'Self' ? ('Self') : (this.state.initialPopupValues.self),
              self_ischecked: e.target.value === 'Self' ? (e.target.checked) : (this.state.initialPopupValues.self_ischecked),
              self_dob: this.state.initialPopupValues.self_dob,
              spouse: e.target.value === 'Spouse' ? ('Spouse') : (this.state.initialPopupValues.spouse),
              spouse_ischecked: e.target.value === 'Spouse' ? (e.target.checked) : (this.state.initialPopupValues.spouse_ischecked),
              spouse_dob: this.state.initialPopupValues.spouse_dob,
              child1: e.target.value === 'Child1' ? ('Child1') : (this.state.initialPopupValues.child1),
              child1_ischecked: e.target.value === 'Child1' ? (e.target.checked) : (this.state.initialPopupValues.child1_ischecked),
              child1_dob: this.state.initialPopupValues.child1_dob,
              child1_gender: this.state.initialPopupValues.child1_gender,
              child2: e.target.value === 'Child2' ? ('Child2') : (this.state.initialPopupValues.child2),
              child2_ischecked: e.target.value === 'Child2' ? (e.target.checked) : (this.state.initialPopupValues.child2_ischecked),
              child2_dob: this.state.initialPopupValues.child2_dob,
              child2_gender: this.state.initialPopupValues.child2_gender,
          }
      });
      //console.log(this.state.initialPopupValues);
    this.gtmEvntHandler('portal_product_page_1_policy_action_click',e.target.name);
  }

  handleChange = (name, date) => {
    this.setState({
      initialPopupValues: {
        self: this.state.initialPopupValues.self,
        self_ischecked: this.state.initialPopupValues.self_ischecked,
        self_dob: name === 'self_dob' ? date : (this.state.initialPopupValues.self_dob),
        spouse: this.state.initialPopupValues.spouse,
        spouse_ischecked: this.state.initialPopupValues.spouse_ischecked,
        spouse_dob: name === 'spouse_dob' ? date : (this.state.initialPopupValues.spouse_dob),
        child1: this.state.initialPopupValues.child1,
        child1_ischecked: this.state.initialPopupValues.child1_ischecked,
        child1_dob: name === 'child1_dob' ? date : (this.state.initialPopupValues.child1_dob),
        child1_gender: this.state.initialPopupValues.child1_gender,
        child2: this.state.initialPopupValues.child2,
        child2_ischecked: this.state.initialPopupValues.child2_ischecked,
        child2_dob: name === 'child2_dob' ? date : (this.state.initialPopupValues.child2_dob),
        child2_gender: this.state.initialPopupValues.child2_gender,
      }
    });
    this.gtmEvntHandler('portal_product_page_1_policy_action_click',name);
  
  };
  handleGenderChangePopup = (name, e) => {
    this.setState({
      initialPopupValues: {
        self: this.state.initialPopupValues.self,
        self_ischecked: this.state.initialPopupValues.self_ischecked,
        self_dob: this.state.initialPopupValues.self_dob,
        spouse: this.state.initialPopupValues.spouse,
        spouse_ischecked: this.state.initialPopupValues.spouse_ischecked,
        spouse_dob: this.state.initialPopupValues.spouse_dob,
        child1: this.state.initialPopupValues.child1,
        child1_ischecked: this.state.initialPopupValues.child1_ischecked,
        child1_dob: this.state.initialPopupValues.child1_dob,
        child1_gender: name === 'child1_gender' ? e.target.value : (this.state.initialPopupValues.child1_gender),
        child2: this.state.initialPopupValues.child2,
        child2_ischecked: this.state.initialPopupValues.child2_ischecked,
        child2_dob: this.state.initialPopupValues.child2_dob,
        child2_gender: name === 'child2_gender' ? e.target.value : (this.state.initialPopupValues.child2_gender),
      }
    });

    
  };


  handleSubmitNext = event => {
    event.preventDefault();
    this.setState({
      successMsgShow: false
    });

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
      requestParam["gender"] = form.customerGender.value;
      requestParam["location"] = form.customerCity.value;
      let fields = this.state.initialPopupValues;
      requestParam['family'] = {};
      if (fields.self_ischecked) {
        requestParam['family'][0] = {
          'type': 'Self',
          'dob': this.formatDate(fields.self_dob),
          'gender': requestParam["gender"],
        };
      }
      if (fields.spouse_ischecked) {
        requestParam['family'][1] = {
          'type': 'Spouse',
          'dob': this.formatDate(fields.spouse_dob),
          'gender': requestParam["gender"] === 'Male' ? ('Female') : ('Male'),
        };
      }
      if (fields.child1_ischecked) {
        requestParam['family'][2] = {
          'type': 'Child_1',
          'dob': this.formatDate(fields.child1_dob),
          'gender': fields.child1_gender,
        };
      }
      if (fields.child2_ischecked) {
        requestParam['family'][3] = {
          'type': 'Child_2',
          'dob': this.formatDate(fields.child2_dob),
          'gender': fields.child2_gender,
        };
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
        'event': 'portal_product_callback_page_27_form_submit',
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
        url: "/api/callme",
        data: JSON.stringify(requestParam),
        headers: { "Content-Type": "application/json" }
      })
        .then(res => {
          // console.log(res.data);
          let msgText =
            res.data.success !== undefined
              ? res.data.success + " Request Submitted Successfully"
              : "Request Submitted Successfully";
          if (res.data.success) {
            //GTM Added
            window.dataLayer = window.dataLayer || [];
            let productName = requestParam["SBIProductName"];
            let pagetype = this.getProductRelatedData(productKey).pageType;
            pagetype = pagetype + "_product_page";;
            const data = {
              'event': 'portal_product_callback_page_27_form_submit',
              'product_name': productName,
              'pagetype': 'portal_product_callback_page',
              'client_id': gaUserId,
              'timestamp': AppConstant.gtmCurrentTime(),
              'quote_no': 'NA',
              'lead_no': res.data.success,
              'policy_no': 'NA',
              'field_name':'form_submit'
            };
            window.dataLayer.push(data);
            document.getElementById("request_call_back_2").reset();
            this.refs.btn2.removeAttribute("disabled");
            this.setState({
              validateNext: false,
              genderValue: "",
              cityValue: "",
              relation: '',
              nextForm: false,
              validated: false
            });
            // console.log(requestParam);
          }
          swal({
            text: msgText,
            icon: "success"
          }).then(() => { });
        })
        .catch(err => {
          console.log(err);
          document.getElementById("request_call_back_2").reset();
          this.refs.btn2.removeAttribute("disabled");
          this.setState({
            validateNext: false,
            genderValue: "",
            cityValue: "",
            relation: '',
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
 gtmEvntHandler=(eventName,fieldName)=> {
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

  let gaUserId = document.cookie.match(/_ga=(.+?);/)[1].split('.').slice(-2).join(".");
  let productName = this.getProductRelatedData(productKey).productName;
  let pagetype = this.getProductRelatedData(productKey).pageType;
  pagetype = pagetype + "_product_page";

	pagetype = pagetype + "_product_page";
	const data = {
		'event': eventName,
		'product_name': productName,
		'pagetype': pagetype,
		'client_id': gaUserId,
		'timestamp':AppConstant.gtmCurrentTime(),
		'quote_no': 'NA',
		'lead_no': 'NA',
		'policy_no': 'NA',
		'field_name': fieldName
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
    pagetype = pagetype + "_product_page";
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

  render() {
    let { nextForm } = this.state;
    let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let Placeholder_Name, Form_Heading, Term_Condition, Placeholder_Email, Placeholder_Mobile, Show_Image, Select_Option,
      Placeholder_Type, Label_Accept, Error_Name_Show, Error_Email_Show, Select_Gender, Self, Spouse, Child_1, Child_2, Select,
      Error_Mobile_Show,Looking_To_Ensure,Select_DOB,
      Error_Invalid_Num_Show, Talk_To_An_Expert, Help_Us, Please_Select_Gender, Add_Member, Add_Fmaily, Go, Add_Family_Member
      ;
    if (lang_name === 'en') {

      
      Placeholder_Name = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_PLACEHOLDER_NAME'] && sbiHomeData['PRODUCTS_CAPTHA_PLACEHOLDER_NAME'].content_en;
      Help_Us = sbiHomeData && sbiHomeData['PRODUCTS_FORM_HELP_US'] && sbiHomeData['PRODUCTS_FORM_HELP_US'].content_en;
      Looking_To_Ensure = sbiHomeData && sbiHomeData['PRODUCTS_FORM_LOOKING_TO_ENSURE'] && sbiHomeData['PRODUCTS_FORM_LOOKING_TO_ENSURE'].content_en;
      Child_1 = sbiHomeData && sbiHomeData['PRODUCTS_FORM_CHILD1'] && sbiHomeData['PRODUCTS_FORM_CHILD1'].content_en;
      Select_DOB = sbiHomeData && sbiHomeData['PRODUCTS_FORM_SELECT_DOB'] && sbiHomeData['PRODUCTS_FORM_SELECT_DOB'].content_en;
     
      Child_2 = sbiHomeData && sbiHomeData['PRODUCTS_FORM_CHILD2'] && sbiHomeData['PRODUCTS_FORM_CHILD2'].content_en;
      Select = sbiHomeData && sbiHomeData['PRODUCTS_FORM_SELECT'] && sbiHomeData['PRODUCTS_FORM_SELECT'].content_en;
      Spouse = sbiHomeData && sbiHomeData['PRODUCTS_FORM_SPOUSE'] && sbiHomeData['PRODUCTS_FORM_SPOUSE'].content_en;
      Go = sbiHomeData && sbiHomeData['PRODUCTS_FORM_GO'] && sbiHomeData['PRODUCTS_FORM_GO'].content_en;
      Self = sbiHomeData && sbiHomeData['PRODUCTS_FORM_SELF'] && sbiHomeData['PRODUCTS_FORM_SELF'].content_en;
      Add_Family_Member = sbiHomeData && sbiHomeData['PRODUCTS_FORM_ADD_FAMILY_MEMBER'] && sbiHomeData['PRODUCTS_FORM_ADD_FAMILY_MEMBER'].content_en;
      Add_Fmaily = sbiHomeData && sbiHomeData['PRODUCTS_FORM_PLEASE_ADD_FAMILY'] && sbiHomeData['PRODUCTS_FORM_PLEASE_ADD_FAMILY'].content_en;
      Add_Member = sbiHomeData && sbiHomeData['PRODUCTS_FORM_PLEASE_ADD_MEMBER'] && sbiHomeData['PRODUCTS_FORM_PLEASE_ADD_MEMBER'].content_en;
      
      Please_Select_Gender = sbiHomeData && sbiHomeData['PRODUCTS_FORM_PLEASE_SELECT_GENDER'] && sbiHomeData['PRODUCTS_FORM_PLEASE_SELECT_GENDER'].content_en;
      Select_Gender = sbiHomeData && sbiHomeData['PRODUCTS_FORM_SELECT_GENDER'] && sbiHomeData['PRODUCTS_FORM_SELECT_GENDER'].content_en;
      Select_Option = sbiHomeData && sbiHomeData['PRODUCTS_FORM_SELECT_OPTION'] && sbiHomeData['PRODUCTS_FORM_SELECT_OPTION'].content_en;
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
    
      Error_Email_Show = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_FORM_ENTET_EMAIL'] && sbiHomeData['PRODUCTS_CAPTHA_FORM_ENTET_EMAIL'].content_en;
      Error_Mobile_Show = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_FORM_ENTET_MOBILE'] && sbiHomeData['PRODUCTS_CAPTHA_FORM_ENTET_MOBILE'].content_en;





    } else {
      Placeholder_Name = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_PLACEHOLDER_NAME'] && sbiHomeData['PRODUCTS_CAPTHA_PLACEHOLDER_NAME'].content_hi;
      Term_Condition = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_FORM_TERM'] && sbiHomeData['PRODUCTS_CAPTHA_FORM_TERM'].content_hi;
      Help_Us = sbiHomeData && sbiHomeData['PRODUCTS_FORM_HELP_US'] && sbiHomeData['PRODUCTS_FORM_HELP_US'].content_hi;
      Go = sbiHomeData && sbiHomeData['PRODUCTS_FORM_GO'] && sbiHomeData['PRODUCTS_FORM_GO'].content_hi;
      Select = sbiHomeData && sbiHomeData['PRODUCTS_FORM_SELECT'] && sbiHomeData['PRODUCTS_FORM_SELECT'].content_hi;
     
      Add_Fmaily = sbiHomeData && sbiHomeData['PRODUCTS_FORM_PLEASE_ADD_FAMILY'] && sbiHomeData['PRODUCTS_FORM_PLEASE_ADD_FAMILY'].content_hi;
      Add_Member = sbiHomeData && sbiHomeData['PRODUCTS_FORM_PLEASE_ADD_MEMBER'] && sbiHomeData['PRODUCTS_FORM_PLEASE_ADD_MEMBER'].content_hi;
      Please_Select_Gender = sbiHomeData && sbiHomeData['PRODUCTS_FORM_PLEASE_SELECT_GENDER'] && sbiHomeData['PRODUCTS_FORM_PLEASE_SELECT_GENDER'].content_hi;
      Error_Name_Show = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_FORM_NAME'] && sbiHomeData['PRODUCTS_CAPTHA_FORM_NAME'].content_hi;
      Select_Gender = sbiHomeData && sbiHomeData['PRODUCTS_FORM_SELECT_GENDER'] && sbiHomeData['PRODUCTS_FORM_SELECT_GENDER'].content_hi;
      Select_Option = sbiHomeData && sbiHomeData['PRODUCTS_FORM_SELECT_OPTION'] && sbiHomeData['PRODUCTS_FORM_SELECT_OPTION'].content_hi;
      Placeholder_Mobile = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_PLACEHOLDER_MOBILE'] && sbiHomeData['PRODUCTS_CAPTHA_PLACEHOLDER_MOBILE'].content_hi;
      Placeholder_Email = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_PLACEHOLDER_EMAIL'] && sbiHomeData['PRODUCTS_CAPTHA_PLACEHOLDER_EMAIL'].content_hi;
      Form_Heading = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_FORM_HEADING'] && sbiHomeData['PRODUCTS_CAPTHA_FORM_HEADING'].content_hi;
      Show_Image = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_FORM_IMAGE'] && sbiHomeData['PRODUCTS_CAPTHA_FORM_IMAGE'].content_hi;
      Self = sbiHomeData && sbiHomeData['PRODUCTS_FORM_SELF'] && sbiHomeData['PRODUCTS_FORM_SELF'].content_hi;
      Spouse = sbiHomeData && sbiHomeData['PRODUCTS_FORM_SPOUSE'] && sbiHomeData['PRODUCTS_FORM_SPOUSE'].content_hi;
      Child_1 = sbiHomeData && sbiHomeData['PRODUCTS_FORM_CHILD1'] && sbiHomeData['PRODUCTS_FORM_CHILD1'].content_hi;
      Child_2 = sbiHomeData && sbiHomeData['PRODUCTS_FORM_CHILD2'] && sbiHomeData['PRODUCTS_FORM_CHILD2'].content_hi;
      Select_DOB = sbiHomeData && sbiHomeData['PRODUCTS_FORM_SELECT_DOB'] && sbiHomeData['PRODUCTS_FORM_SELECT_DOB'].content_hi;
      Looking_To_Ensure = sbiHomeData && sbiHomeData['PRODUCTS_FORM_LOOKING_TO_ENSURE'] && sbiHomeData['PRODUCTS_FORM_LOOKING_TO_ENSURE'].content_hi;
      Talk_To_An_Expert = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_TALK_EXPERT'] && sbiHomeData['PRODUCTS_CAPTHA_TALK_EXPERT'].content_hi;
      Label_Accept = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_LABEL_I_ACCEPT'] && sbiHomeData['PRODUCTS_CAPTHA_LABEL_I_ACCEPT'].content_hi;
      Add_Family_Member = sbiHomeData && sbiHomeData['PRODUCTS_FORM_ADD_FAMILY_MEMBER'] && sbiHomeData['PRODUCTS_FORM_ADD_FAMILY_MEMBER'].content_hi;
      Error_Email_Show = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_FORM_ENTET_EMAIL'] && sbiHomeData['PRODUCTS_CAPTHA_FORM_ENTET_EMAIL'].content_hi;
      Placeholder_Type = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_PLACEHOLDER_TYPE_HERE'] && sbiHomeData['PRODUCTS_CAPTHA_PLACEHOLDER_TYPE_HERE'].content_hi;
      Error_Mobile_Show = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_FORM_ENTET_MOBILE'] && sbiHomeData['PRODUCTS_CAPTHA_FORM_ENTET_MOBILE'].content_hi;
      Error_Invalid_Num_Show = sbiHomeData && sbiHomeData['PRODUCTS_CAPTHA_FORM_INVALID_NUMBER'] && sbiHomeData['PRODUCTS_CAPTHA_FORM_INVALID_NUMBER'].content_hi;

    }
    return (
      <>
        {/* <h5 className="htitle">Looking for the right policy?</h5> */}

        {nextForm === false ? (
          <div className="lookingForSub">
            <h5 className="htitle">{Form_Heading}</h5>
            <Nform
              id="request_call_back"
              noValidate
              validated={this.state.validated}
              onSubmit={this.handleSubmit}
              autoComplete="off"
            >
              <Nform.Group controlId="customerName">
                <Nform.Control
                  type="text"
                  name="name"
                  placeholder={Placeholder_Name}
                  required
                  onBlur={() => this.gtmFormInit('Customer Name')}
                />
                <Nform.Control.Feedback type="invalid">
                  {Error_Name_Show}
                </Nform.Control.Feedback>
              </Nform.Group>
              <Nform.Group controlId="customerEmail">
                <Nform.Control
                  type="email"
                  name="email"
                  placeholder={Placeholder_Email}
                  pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                  required
                  onBlur={() => this.gtmFormInit('Email ID')}
                />
                <Nform.Control.Feedback type="invalid">
                  {Error_Email_Show}
                </Nform.Control.Feedback>
              </Nform.Group>
              <Nform.Group controlId="customerMobile">
                <Nform.Control
                  type="text"
                  name="mobile"
                  placeholder={Placeholder_Mobile}
                  pattern="^[0-9]{10}$"
                  maxLength="10"
                  required
                  onBlur={() => this.gtmFormInit('Mobile Number')}
                />
                <Nform.Control.Feedback type="invalid">
                  {Error_Mobile_Show}
                </Nform.Control.Feedback>
              </Nform.Group>

              <Nform.Group
                className="d-flex checkbox-span"
                controlId="customerAccept"
              >
                <Nform.Check
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
              </Nform.Group>

              <p className="required">
                {ReactHtmlParser(Show_Image)}


              </p>

              <Nform.Group
                className="d-flex number-validation"
                controlId="customerMathCalculation"
              >
                <div className="captchaNumber">
                  {this.state.capthaOne}+{this.state.capthaTwo} =
                     </div>
                <div>
                  <Nform.Control
                    type="text"
                    name="type"
                    placeholder={Placeholder_Type}
                    pattern="^[0-9]*$"
                    required
                    onBlur={() => this.gtmFormInit('Captcha')}
                  />
                  <Nform.Control.Feedback type="invalid">
                    {Error_Invalid_Num_Show}
                  </Nform.Control.Feedback>
                </div>
              </Nform.Group>
              <div className="from-action">
                <Button ref="btn1" type="submit" variant="primary">
                  {Talk_To_An_Expert}
                </Button>
              </div>
            </Nform>
          </div>
        ) : (
          <div className="lookingForSub calbackreatail">
            <h5 className="htitle">{Help_Us}</h5>
            <Nform
              id="request_call_back_2"
              noValidate
              validated={this.state.validateNext}
              onSubmit={this.handleSubmitNext}
              autoComplete="off"
            >
              <Nform.Group controlId="customerGender">
                {/* <Nform.Label>Gender</Nform.Label> */}
                <Nform.Control
                  as="select"
                  name="gender"
                  value={this.state.genderValue}
                  onChange={this.handleGenderChange}
                  onBlur={() => this.gtmFormInitSecondpage('gender')}
                  required
                >
                  {ReactHtmlParser(Select_Gender)}
                </Nform.Control>
                <Nform.Control.Feedback type="invalid">
                  {Please_Select_Gender}
                </Nform.Control.Feedback>
              </Nform.Group>
              <Nform.Group controlId="customerCity">
                {/* <Nform.Label>Location</Nform.Label> */}
                <Nform.Control
                  as="select"
                  name="city"
                  required
                  onChange={this.handleCityChange}
                  onBlur={() => this.gtmFormInitSecondpage('city')}
                >
                  {ReactHtmlParser(Select_Option)}

                </Nform.Control>
                <Nform.Control.Feedback type="invalid">




                </Nform.Control.Feedback>
              </Nform.Group>

              <div className="d-flex calbackreatailInput">
                <Nform.Group className="d-flex" controlId="familyMembers">
                  {/* <Nform.Label>Looking to insure</Nform.Label>                   */}
                  <Nform.Control
                    type="text"
                    name="relation"
                    placeholder={Looking_To_Ensure}
                    readOnly="readOnly"
                    value={this.state.relation}
                    required
                    onClick={e => this.openPopup(e)}
                    onBlur={() => this.gtmFormInitSecondpage('insure')}
                  />
                  <Nform.Control.Feedback type="invalid">
                    {Add_Member}
                  </Nform.Control.Feedback>
                </Nform.Group>
                <Link className="cwvnPlusLink" to={'#'} onClick={e => this.openPopup(e)} ><img alt="" src={plusSign} /></Link>
              </div>
              {Add_Fmaily}
              <div className="from-action">
                <Button ref="btn2" type="submit" variant="primary">
                  {Go}
                </Button>
              </div>
            </Nform>
          </div>

        )}

        <div className="btn-holder"></div>

        {/* Motal for Member Details */}
        <Modal centered show={this.state.show_popup} onHide={this.handleClose} backdrop="static" size="lg">
          <Formik onSubmit={this.popupSubmit} initialValues={initialPopupValues} >
            {({ popupvalues, errors, isValid, touched, setFieldTouched, isSubmitting, setFieldValue }) => {
              return (
                <>
                  <Form autoComplete="off">
                    <Modal.Header closeButton>
                      <h5>{Add_Family_Member}</h5>
                    </Modal.Header>
                    <Modal.Body>
                      <div className="errorMsg common">{this.state.popup_errors.common}</div>

                      <div className="form-group row" as={Row}>

                        <Col sm="3">
                          <div className="form-check"><Field type="checkbox" className="form-check-input" value="Self" id="self" name="self" onChange={this.handleCheck} checked={this.state.initialPopupValues.self_ischecked} />
                            <label className="form-check-label"> {Self} </label></div>
                        </Col>
                        <Col sm="6" className={this.state.initialPopupValues.self_ischecked ? ("") : ("readlessContentHide")}>
                          {/* <Form.Control plaintext placeholder="Date of birth" /> */}
                          <DatePicker
                            selected={this.state.initialPopupValues.self_dob}
                            onChange={(value) => this.handleChange('self_dob', value)}
                            dateFormat="dd-MM-yyy"
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            maxDate={new Date()}
                            name="self_dob"
                            onKeyDown={e => e.preventDefault()}
                            placeholderText={Select_DOB}
                            popperPlacement="top-end"
                          />
                          <div className="errorMsg">{this.state.popup_errors.self_dob}</div>
                        </Col>
                        <Col sm="3"></Col>
                      </div>

                      <div className="form-group row" as={Row}>
                        <Col sm="3">
                          <div className="form-check"><Field type="checkbox" className="form-check-input" value="Spouse" name="spouse" label="Spouse" onChange={this.handleCheck} checked={this.state.initialPopupValues.spouse_ischecked} />
                            <label className="form-check-label"> {Spouse} </label></div>
                        </Col>
                        <Col sm="6" className={this.state.initialPopupValues.spouse_ischecked ? ("") : ("readlessContentHide")}>
                          <DatePicker
                            selected={this.state.initialPopupValues.spouse_dob}
                            onChange={(value) => this.handleChange('spouse_dob', value)}
                            dateFormat="dd-MM-yyy"
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            maxDate={new Date()}
                            name="spouse_dob"
                            onKeyDown={e => e.preventDefault()}
                            placeholderText={Select_DOB}
                            popperPlacement="top-end"
                          />
                          <div className="errorMsg">{this.state.popup_errors.spouse_dob}</div>
                        </Col>
                        <Col sm="3" className={this.state.initialPopupValues.spouse_ischecked ? ("") : ("readlessContentHide")}></Col>
                      </div>

                      <div className="form-group row">
                        <Col sm="3">
                          <div className="form-check"><Field type="checkbox" className="form-check-input" value="Child1" name="child1" label="Child 1" onChange={this.handleCheck} checked={this.state.initialPopupValues.child1_ischecked} />
                            <label className="form-check-label"> {Child_1} </label></div>
                        </Col>
                        <Col sm="6" className={this.state.initialPopupValues.child1_ischecked ? ("") : ("readlessContentHide")}>
                          <DatePicker
                            selected={this.state.initialPopupValues.child1_dob}
                            onChange={(value) => this.handleChange('child1_dob', value)}
                            dateFormat="dd-MM-yyy"
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            maxDate={new Date()}
                            name="child1_dob"
                            onKeyDown={e => e.preventDefault()}
                            placeholderText={Select_DOB}
                            popperPlacement="top-end"
                            autoComplete="off"
                          />
                          <div className="errorMsg child1_dob_err">{this.state.popup_errors.child1_dob}</div>
                        </Col>
                        <Col sm="3" className={this.state.initialPopupValues.child1_ischecked ? ("") : ("readlessContentHide")}>
                          <Field className="form-control" component="select" name="child1_gender" onChange={(e) => this.handleGenderChangePopup('child1_gender', e)} value={this.state.initialPopupValues.child1_gender} >
                            {ReactHtmlParser(Select_Gender)}
                          </Field>
                          <div className="errorMsg">{this.state.popup_errors.child1_gender}</div>
                        </Col>
                      </div>

                      <div className="form-group row">
                        <Col sm="3">
                          <div className="form-check"><Field type="checkbox" className="form-check-input" value="Child2" name="child2" label="Child 2" onChange={this.handleCheck} checked={this.state.initialPopupValues.child2_ischecked} />
                            <label className="form-check-label"> {Child_2} </label></div>
                        </Col>
                        <Col sm="6" className={this.state.initialPopupValues.child2_ischecked ? ("") : ("readlessContentHide")}>
                          <DatePicker
                            selected={this.state.initialPopupValues.child2_dob}
                            onChange={(value) => this.handleChange('child2_dob', value)}
                            dateFormat="dd-MM-yyy"
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            maxDate={new Date()}
                            name="child2_dob"
                            onKeyDown={e => e.preventDefault()}
                            placeholderText={Select_DOB}
                            popperPlacement="top-end"
                          />
                          <div className="errorMsg">{this.state.popup_errors.child2_dob}</div>
                        </Col>
                        <Col sm="3" className={this.state.initialPopupValues.child2_ischecked ? ("") : ("readlessContentHide")}>
                          <Field className="form-control" component="select" name="child2_gender" onChange={(value) => this.handleGenderChangePopup('child2_gender', value)} value={this.state.initialPopupValues.child2_gender} >
                            {ReactHtmlParser(Select_Gender)}
                          </Field>
                          <div className="errorMsg">{this.state.popup_errors.child2_gender}</div>
                        </Col>
                      </div>

                    </Modal.Body>

                    <Modal.Footer>
                      <Button variant="primary"  type="submit" >{Select}</Button>
                    </Modal.Footer>
                  </Form>
                </>
              )
            }}
          </Formik>

        </Modal>

      </>
    );
  }
}

export default withRouter(CallBackFormRetail);
