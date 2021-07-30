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
          'event': pagetype + '_3_form_submitted',
          'product_name': productName,
          'pagetype': pagetype,
          'client_id': gaUserId,
          'timestamp': AppConstant.gtmCurrentTime(),
          'quote_no': 'NA',
          'lead_no': 'NA',
          'policy_no': 'NA'
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
      'event': pagetype + '_2_form_interaction',
      'product_name': productName,
      'pagetype': pagetype,
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
        'event': pagetype + '_3_form_submitted',
        'product_name': productName,
        'pagetype': pagetype,
        'client_id': gaUserId,
        'timestamp': AppConstant.gtmCurrentTime(),
        'quote_no': 'NA',
        'lead_no': 'NA',
        'policy_no': 'NA'
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
    return (
      <>
        {nextForm === false ? (
          <div className="lookingForSub">
            <h5 className="htitle">Looking for the right policy?</h5>
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
                  placeholder="Enter your Name"
                  required
                  onBlur={() => this.gtmFormInit('Customer Name')}
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter Your Name.
              </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="customerEmail">
                {/* <Form.Label>Your Email ID</Form.Label> */}
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Your Email ID"
                  pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                  required
                  onBlur={() => this.gtmFormInit('Email ID')}
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter Your Valid Email ID.
              </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="customerMobile">
                {/* <Form.Label>Mobile Number</Form.Label> */}
                <Form.Control
                  type="text"
                  name="mobile"
                  placeholder="Mobile Number"
                  pattern="^[0-9]{10}$"
                  maxLength="10"
                  required
                  onBlur={() => this.gtmFormInit('Mobile Number')}
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter Your Valid Mobile Number.
              </Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                className="d-flex checkbox-span"
                controlId="customerAccept"
              >
                <Form.Check
                  required
                  name="termsCheck"
                  label="I accept"
                  feedback="You must accept before submitting."
                  onChange={() => this.gtmFormInit('Terms')}
                />
                <span>
                  &nbsp;
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"/website-terms-usage"}
                  >
                    Terms & Conditions
                </a>
                </span>
              </Form.Group>

              <p className="required">
                Enter the Text shown in the image<span>*</span>
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
                    placeholder="Type Here"
                    pattern="^[0-9]*$"
                    required
                    onBlur={() => this.gtmFormInit('Captcha')}
                  />
                  <Form.Control.Feedback type="invalid">
                    You Enter Invalid Number
                </Form.Control.Feedback>
                </div>
              </Form.Group>
              <div className="from-action">
                <Button ref="btn1" type="submit" variant="primary">
                  Talk to an Expert
              </Button>
              </div>
            </Form>
          </div>
        ) : (
            <div className="lookingForSub">
              <h5 className="htitle">Please help us with a few more details</h5>
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
                    placeholder="Pincode"
                    pattern="^[0-9]{6}$"
                    maxLength="6"
                    onChange={(value) => this.handleChange('pincode', value)}
                    required
                    onBlur={() => this.gtmFormInit('Pincode')}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Enter Pincode
              </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="natureBusiness">
                  <Form.Control
                    as="select"
                    name="nature_business"
                    placeholder="Nature of Business"
                    defaultValue={this.state.nature_business}
                    onChange={(value) => this.handleChange('nature_business', value)}
                    required
                    onBlur={() => this.gtmFormInit('Nature of Business')}
                  >
                     <option value="">Nature of Business</option>
                     {businessNature.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Please Select Nature of Business
              </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="annualTurnover">
                  {/* <Form.Label>Mobile Number</Form.Label> */}
                  <Form.Control
                    as="select"
                    name="annual_turnover"
                    placeholder="Annual Turnover"
                    maxLength="50"
                    defaultValue={this.state.annual_turnover}
                    onChange={(value) => this.handleChange('annual_turnover', value)}
                    required
                    onBlur={() => this.gtmFormInit('Annual Turnover')}
                  >
                      <option value="">Annual Turnover</option>
                     {annualTurnoverData.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Please Select Annual Turnover
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
                    placeholderText="Renewal Date of Current Policy"
                    popperPlacement="top-end"
                    className="form-control"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Enter Expiry Date of Current Policy
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
                  label="I do not have this policy"
                  onChange={() => { this.gtmFormInit('I do not have this policy');this.hasNoPolicy();}}
                />                
              </Form.Group>

                <div className="from-action">
                  <Button ref="btn2" type="submit" variant="primary">
                    Go
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
