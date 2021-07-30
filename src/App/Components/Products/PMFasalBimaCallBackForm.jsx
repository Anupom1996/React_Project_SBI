import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
//import queryString from 'query-string';
import swal from "sweetalert";
import productRequestCallbackData from "../../assets/productRequestCallbackData.json";
//import AxiosTrans from "../../Services/Shared/AxiosTrans";
import * as AppConstant from "../AppConstant";
import Axios from "../../Services/Shared/Axios";
// import jsonxml from "jsontoxml";
//import DatePicker from "react-datepicker";

const StateList = [
  "HP",
  "Karnataka",
  "Rajasthan",
  "Uttarakhand",
]

const fasalNature = [
    "Kharif",
    "Rabi"
  ]


const financeYear = [
  "2020-2021"

]

class PMFasalBimaCallBackForm extends Component {
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
      finance_year: "",
      fasal_type: "",
      list_state: "",
      expiry_date: "",
      request_id: "",
      has_policy: false
    };
  }

  componentDidMount() { }


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
      //const capthaCalulation = this.state.capthaOne + this.state.capthaTwo;
        let natureBusiness=form.natureBusiness.value
        let gaUserId = document.cookie.match(/_ga=(.+?);/)[1].split('.').slice(-2).join(".");
        requestParam["ClientId"] = gaUserId;
        requestParam["fasal_type"] =form.natureBusiness.value;
        requestParam["financeYear"] = form.financeYear.value;
        requestParam["listState"] = form.listState.value;

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
        Axios({
          method: "get",
          url: "/fasalbimas?fb_states="+requestParam["listState"]+"&croptype="+requestParam["fasal_type"],
        })
          .then(res => {
             console.log(res.data);
            this.downloadFile(AppConstant.BASE_URL+res.data[0]['policy_doc']['url'],'SBIG '+requestParam["fasal_type"]+'-'+requestParam["listState"]+'-FY'+requestParam["financeYear"]);
            // let msgText =
            //   res.data.success !== undefined
            //     ? res.data.success + " Request Submitted Successfully"
            //     : "Request Submitted Successfully";
            
            if (res.data) {
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
            //this.setState({ nextForm: true });
             let msgText = "Something Went Wrong!";
            swal({
              text: msgText,
            icon: "error"
            }).then(() => { });
          });
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


  handleChange = (field, value) => {
    this.setState({
      finance_year: field === 'finance_year' ? value : (this.state.finance_year),
      fasal_type: field === 'fasal_type' ? value : (this.state.fasal_type),
      list_state: field === 'list_state' ? value : (this.state.list_state),
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
    return (
      <>
         <div className="lookingForSub">
            <h5 className="htitle">State-wise Progress Report</h5>
            <Form
              id="request_call_back"
              noValidate
              validated={this.state.validated}
              onSubmit={this.handleSubmit}
              autoComplete="off"
            >
                  
                <Form.Group controlId="natureBusiness">
                    <Form.Control
                        as="select"
                        name="fasal_type"
                        placeholder="Season Type"
                        defaultValue={this.state.fasal_type}
                        onChange={(value) => this.handleChange('fasal_type', value)}
                        required
                        onBlur={() => this.gtmFormInitSecondpage('Season Type')}
                    >
                        <option value="">Season Type</option>
                        {fasalNature.map((item, index) => (
                            <option key={index} value={item}>
                            {item}
                            </option>
                        ))}
                    </Form.Control>

                    <Form.Control.Feedback type="invalid">
                    Please Select Season Type.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="financeYear">
                    <Form.Control
                        as="select"
                        name="finance_year"
                        placeholder="Financial Year"
                        defaultValue={this.state.finance_year}
                        onChange={(value) => this.handleChange('finance_year', value)}
                        required
                        onBlur={() => this.gtmFormInitSecondpage('Financial Year')}
                    >
                        <option value="">Financial Year</option>
                        {financeYear.map((item, index) => (
                            <option key={index} value={item}>
                            {item}
                            </option>
                        ))}
                    </Form.Control>

                <Form.Control.Feedback type="invalid">
                  Please Select Finance Year.
              </Form.Control.Feedback>
              </Form.Group>             
              <Form.Group controlId="listState">
                    <Form.Control
                        as="select"
                        name="list_state"
                        placeholder="State"
                        defaultValue={this.state.nature_business}
                        onChange={(value) => this.handleChange('list_state', value)}
                        required
                        onBlur={() => this.gtmFormInitSecondpage('State')}
                    >
                        <option value="">State</option>
                        {StateList.map((item, index) => (
                            <option key={index} value={item}>
                            {item}
                            </option>
                        ))}
                    </Form.Control>

                <Form.Control.Feedback type="invalid">
                  Please Select State.
              </Form.Control.Feedback>
              </Form.Group>           
              <div className="from-action">
                <Button ref="btn1" className="download" type="submit" variant="primary">
                Download
              </Button>
              </div>
            </Form>
          </div>
      </>
    );
  }
}

export default withRouter(PMFasalBimaCallBackForm);
