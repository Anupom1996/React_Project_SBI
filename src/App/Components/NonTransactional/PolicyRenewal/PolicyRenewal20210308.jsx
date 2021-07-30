import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import BaseComponent from "../../BaseComponent";
import { Container, Button } from "react-bootstrap";
import { Form as Nform } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import * as AppConstant from "../../AppConstant";
import swal from "sweetalert";
import HelmetData from "../../Common/HelmetData";
//import AxiosTrans from "../../../Services/Shared/AxiosTrans";

class PolicyRenewal extends Component {
  constructor(props) {
    super(props);
    this.motor_policy_type = React.createRef();
    this.health_policy_number = React.createRef();
    this.home_policy_number = React.createRef();
    this.travel_policy_number = React.createRef();
    this.state = {
      policy_type: "motor_policy",
      policy_value: "",
      responsiveOWL: {
        0: {
          items: 1,
          margin: 0
        },
        640: {
          items: 1,
          margin: 0
        },
        768: {
          items: 3
        },
        1024: {
          items: 3
        },
      }

    };
  }

  handleMotorSubmit = e => {
    e.preventDefault();  
    let motorLabel = this.motor_policy_type.current.value;
    this.gtmClickHandler("renewal_listing_page_1_policy_selection", "Renewal Listing Page", motorLabel);
    let redirectUrl = AppConstant.TRANSACTION_API_BASE_URL;
    let error = "";
    console.log(this.motor_policy_type.current.text);
    if (this.motor_policy_type.current.value === "M4W") {
      redirectUrl = redirectUrl + "/motorrenewal/display_product?product=M4W";
      window.open(redirectUrl, "_blank");
    } else if (this.motor_policy_type.current.value === "M2W") {
      redirectUrl = redirectUrl + "/motorrenewal/display_product?product=M2W";
      window.open(redirectUrl, "_blank");
    } else {
      error = "Please Select a Policy";
    }
    if (error !== "") {
      swal({
        text: error,
        icon: "error"
      }).then(() => { });
    }
  };

  handleHealthSubmit = e => {
    e.preventDefault();   
    this.gtmClickHandler("renewal_listing_page_1_policy_selection", "Renewal Listing Page", this.health_policy_number.current.value);
    let redirectUrl = AppConstant.TRANSACTION_API_BASE_URL;
    let error = "";
    //var requestParam = {};
    if (this.health_policy_number.current.value !== "") {
      redirectUrl = redirectUrl + "/healthrenewal/display_product?product=" + this.health_policy_number.current.value;
      window.open(redirectUrl, "_blank");
      // requestParam['product_type'] = "healthrenewal";
      // requestParam['productCode'] = this.health_policy_number.current.value;
      // requestParam['policy_number'] = '';
      // AxiosTrans({
      //   method: "POST",
      //   url: "/api/home",
      //   data: JSON.stringify(requestParam)
      // })
      //   .then(res => {
      //     //console.log(res.status);
      //     if (res.data.token) {
      //       redirectUrl = redirectUrl + "/healthrenewal/display/token/" + res.data.token;
      //       document.getElementById("health_policy_form").reset();
      //       window.open(redirectUrl, "_blank");
      //     }
      //   })
      //   .catch(err => {
      //     let msgText = 'Something went wrong!';
      //     if (typeof err.response.data.selected_type != 'undefined') {
      //       msgText = err.response.data.selected_type[0];
      //     } else if (typeof err.response.data.reg_no != 'undefined') {
      //       msgText = err.response.data.reg_no[0];
      //     } else if (typeof err.response.data.policy_number != 'undefined') {
      //       msgText = err.response.data.policy_number[0];
      //     }
      //     document.getElementById("health_policy_form").reset();
      //     swal({
      //       text: msgText,
      //       icon: "error"
      //     }).then(() => {

      //     });
      //   });
      document.getElementById("health_policy_form").reset();
    } else {
      error = "Please Select a Policy";
    }
    if (error !== "") {
      swal({
        text: error,
        icon: "error"
      }).then(() => { });
    }
  };
  handleTravelSubmit = e => {
    e.preventDefault();    
    // this.gtmClickHandler("renewal_listing_page_1_policy_selection", "Renewal Listing Page", this.travel_policy_number.current.value);
    let redirectUrl = AppConstant.TRANSACTION_API_BASE_URL;
    let error = "";
    if (this.travel_policy_number.current.value !== "") {
      window.open(
        redirectUrl + "?param=" + this.travel_policy_number.current.value,
        "_blank"
      );
      document.getElementById("travel_policy_form").reset();
    } else {
      error = "Please Select a Policy";
    }
    if (error !== "") {
      swal({
        text: error,
        icon: "error"
      }).then(() => { });
    }
  };
  handleHomeSubmit = e => {
    e.preventDefault();
    this.gtmClickHandler("renewal_listing_page_1_policy_selection", "Renewal Listing Page", "PAI Renewal");
    let redirectUrl = AppConstant.TRANSACTION_API_BASE_URL + '/pairenewal';
    window.open(
      redirectUrl,
      "_blank"
    );
  };

  gtmClickHandler = (eventName, pageType, productName) => {    
    window.dataLayer = window.dataLayer || [];
    const data = {
      'event': eventName,
      'pagetype': pageType,
      'product_name': productName
    };
    window.dataLayer.push(data);
  }

  gtmHandler = (event)=>{
    let productName = event.target.value;
    window.dataLayer = window.dataLayer || [];
    const data = {
      'event': 'renewal_listing_page_1_policy_selection',
      'pagetype': 'Renewal Listing Page',
      'product_name': productName
    };
    window.dataLayer.push(data);

  }

  render() {
    return (
      <div>
        <BaseComponent pageTitle="policyrenewal">
          {/* <Helmet> */}
          <HelmetData pageComponentType="PolicyRenewal" />
          {/* Header Start */}
          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>Renew Your Policy</h1>
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
                      src={require("../../../assets/images/renew_banner.svg")}
                      alt=""
                      />
                    </figure>
                  </div>
              <div className="col-8 d-flex align-items-center">
                    <div className="flex-column">
                  <h1>Renew Your Policy</h1>
                  {/* For Desktop */}
                </div>
                  <div className="innerHeadBotomIcon">
                        <img
                          src={require("../../../assets/images/renew_banner_right.svg")}
                          alt=""
                        />
                  </div>

                </div>
               </div>
              </section>
            )}
          {/* Header End */}
          <Container>
            <section className="policy-top-carousel">
              <OwlCarousel
                className="owl-theme"
                loop={false}
                autoplay={false}
                margin={8}
                nav={false}
                dots={false}
                dotsEach={true}
                responsive={this.state.responsiveOWL}
              >
                <div className="item">
                  <div className="policy-box">
                    <figure className="m-0">
                      <img
                        src={require("../../../assets/images/renew-icon-car.svg")}
                        alt=""
                      />
                    </figure>
                    <h4>Motor Policy</h4>
                    <Nform
                      id="motor_policy_form"
                      onSubmit={this.handleMotorSubmit}
                    >
                      <Nform.Group>
                        <Nform.Control
                          as="select"
                          id="motor_policy"
                          name="motor_policy"
                          ref={this.motor_policy_type}
                        >
                          <option value="">Select Policy</option>
                          <option value="M2W">Two Wheeler</option>
                          <option value="M4W">Four Wheeler</option>
                        </Nform.Control>
                      </Nform.Group>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Nform>
                    {/* <Formik onSubmit={this.handleSubmit.bind()} initialValues={motor_policy_initialValues}  >
                      {({ values, errors, isValid, touched, setFieldTouched, isSubmitting, setFieldValue }) => {
                        return (
                          <Form>
                            <div className="form-group">
                              <Field component="select" className="form-control" id="motor_policy" name="policy" onChange={this.handleChange.bind()} value={this.state.policy_type === 'motor_policy' ? (this.state.policy_value) : ("")}>
                                <option value=''>Select Policy</option>
                                <option value='policy1'>Policy No 1</option>
                                <option value='policy2'>Policy No 2</option>
                                <option value='policy3'>Policy No 3</option>
                                <option value='policy4'>Policy No 4</option>
                              </Field>
                            </div>
                            <Button variant="primary" type="submit" id="motor_policy_submit" onClick={this.handleClick.bind()}>
                              Submit
                          </Button>
                          </Form>
                        )
                      }}

                    </Formik> */}
                  </div>
                </div>
                <div className="item">
                  <div className="policy-box">
                    <figure className="m-0">
                      <img
                        src={require("../../../assets/images/renew-icon-health.svg")}
                        alt=""
                      />
                    </figure>
                    <h4>Health Policy</h4>
                    <Nform
                      id="health_policy_form"
                      onSubmit={this.handleHealthSubmit}
                    >
                      <Nform.Group>
                        <Nform.Control
                          as="select"
                          id="health_policy"
                          name="health_policy"
                          ref={this.health_policy_number} 
                        >
                          <option value="">Select Policy</option>
                          <option value="APL">Arogya Plus</option>
                          <option value="AP">Arogya Premier</option>
                          <option value="AT">Arogya Top up</option>
                          <option value="CI">Critical Illness</option>
                          <option value="SH">Group Health Insurance - SBI</option>
                          <option value="RH">Health Insurance Policy - Retail</option>
                          <option value="HDC">Hospital Daily Cash</option>
                          <option value="IPA">Individual Personal Accident</option>
                        </Nform.Control>
                      </Nform.Group>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Nform>
                    {/* <Formik onSubmit={this.handleSubmit.bind()} initialValues={motor_policy_initialValues}  >
                      {({ values, errors, isValid, touched, setFieldTouched, isSubmitting, setFieldValue }) => {
                        return (
                          <Form>
                            <div className="form-group">
                              <Field component="select" className="form-control" id="health_policy" name="policy" onChange={this.handleChange.bind()} value={this.state.policy_type === 'health_policy' ? (this.state.policy_value) : ("")}>
                                <option value=''>Select Policy</option>
                                <option value='policy1'>Policy No 1</option>
                                <option value='policy2'>Policy No 2</option>
                                <option value='policy3'>Policy No 3</option>
                                <option value='policy4'>Policy No 4</option>
                              </Field>
                            </div>
                            <Button variant="primary" type="submit" id="health_policy_submit" onClick={this.handleClick.bind()}>
                              Submit
                          </Button>
                          </Form>
                        )
                      }}

                    </Formik> */}
                  </div>
                </div>
                {/* <div className="item">
                  <div className="policy-box">
                    <figure className="m-0">
                      <img
                        src={require("../../../assets/images/icon-globe.png")}
                        alt=""
                      />
                    </figure>
                    <h4>Travel Policy</h4>
                    <Nform
                      id="travel_policy_form"
                      onSubmit={this.handleTravelSubmit}
                    >
                      <Nform.Group>
                        <Nform.Control
                          as="select"
                          id="travel_policy"
                          name="travel_policy"
                          ref={this.travel_policy_number}
                        >
                          <option value="">Select Policy</option>
                          <option value="policy1">Policy No 1</option>
                          <option value="policy2">Policy No 2</option>
                          <option value="policy3">Policy No 3</option>
                          <option value="policy4">Policy No 4</option>
                        </Nform.Control>
                      </Nform.Group>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Nform>
                  </div>
                </div> */}
                <div className="item">
                  <div className="policy-box">
                    <figure className="m-0">
                      <img
                        src={require("../../../assets/images/product-icons/personal-accident-icon.svg")}
                        alt=""
                      />
                    </figure>
                    <h4>PAI Renewal</h4>
                    <Nform
                      id="home_policy_form"
                      onSubmit={this.handleHomeSubmit}
                    >
                      <Nform.Group>

                      </Nform.Group>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Nform>
                  </div>
                </div>
              </OwlCarousel>
            </section>
          </Container>
        </BaseComponent>
      </div>
    );
  }
}

export default PolicyRenewal;
