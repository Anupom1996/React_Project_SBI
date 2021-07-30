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
    let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let Banner_Renew_policy,Blog_Motor_Policy,Critical_Illness,Group_Policy,Hospital_Cash , Personal_Accident,Pai_Renewal,
     Select_Policy,Two_Wheeler,Four_Wheeler,Health_Policy,Arogya_Plus,Arogya_Premier,Arogya_Top_Up,Retail_Policy;
   
    if (lang_name==='en') {
      
      
      Banner_Renew_policy = sbiHomeData && sbiHomeData['RENEW_POLICY_BANNER_RENEW'] && sbiHomeData['RENEW_POLICY_BANNER_RENEW'].content_en;
      Pai_Renewal = sbiHomeData && sbiHomeData['RENEW_POLICY_BLOG_PAI_RENEWAL'] && sbiHomeData['RENEW_POLICY_BLOG_PAI_RENEWAL'].content_en;
      Personal_Accident = sbiHomeData && sbiHomeData['RENEW_POLICY_BLOG_HP_INDIVIDUAL_PA'] && sbiHomeData['RENEW_POLICY_BLOG_HP_INDIVIDUAL_PA'].content_en;
      Hospital_Cash = sbiHomeData && sbiHomeData['RENEW_POLICY_BLOG_HP_HOSPITAL_CASH'] && sbiHomeData['RENEW_POLICY_BLOG_HP_HOSPITAL_CASH'].content_en;
      Retail_Policy = sbiHomeData && sbiHomeData['RENEW_POLICY_BLOG_HP_RETAIL'] && sbiHomeData['RENEW_POLICY_BLOG_HP_RETAIL'].content_en;
      Group_Policy = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_HEALTH_GROUP_POLICY'] && sbiHomeData['PRODUCTS_RETAIL_HEALTH_GROUP_POLICY'].content_en;
      Critical_Illness = sbiHomeData && sbiHomeData['RENEW_POLICY_BLOG_HP_CRITICAL_ILLNESS'] && sbiHomeData['RENEW_POLICY_BLOG_HP_CRITICAL_ILLNESS'].content_en;
      Arogya_Top_Up= sbiHomeData && sbiHomeData['RENEW_POLICY_BLOG_HP_AROGYA_TOP_UP'] && sbiHomeData['RENEW_POLICY_BLOG_HP_AROGYA_TOP_UP'].content_en;
      Arogya_Premier = sbiHomeData && sbiHomeData['RENEW_POLICY_BLOG_HP_AROGYA_PREMIER'] && sbiHomeData['RENEW_POLICY_BLOG_HP_AROGYA_PREMIER'].content_en;
      Arogya_Plus = sbiHomeData && sbiHomeData['RENEW_POLICY_BLOG_HP_AROGYA_POLICY'] && sbiHomeData['RENEW_POLICY_BLOG_HP_AROGYA_POLICY'].content_en;
      Health_Policy = sbiHomeData && sbiHomeData['RENEW_POLICY_BLOG_HEALTH_POLICY'] && sbiHomeData['RENEW_POLICY_BLOG_HEALTH_POLICY'].content_en;
      Four_Wheeler = sbiHomeData && sbiHomeData['RENEW_POLICY_BLOG_MP_FOUR_WHEELER'] && sbiHomeData['RENEW_POLICY_BLOG_MP_FOUR_WHEELER'].content_en;
      Two_Wheeler = sbiHomeData && sbiHomeData['RENEW_POLICY_BLOG_MP_TWO_WHEELER'] && sbiHomeData['RENEW_POLICY_BLOG_MP_TWO_WHEELER'].content_en;
      Select_Policy = sbiHomeData && sbiHomeData['RENEW_POLICY_BLOG_MP_SELECT_POLICY'] && sbiHomeData['RENEW_POLICY_BLOG_MP_SELECT_POLICY'].content_en;
      Blog_Motor_Policy = sbiHomeData && sbiHomeData['RENEW_POLICY_BLOG_MOTOR_POLICY'] && sbiHomeData['RENEW_POLICY_BLOG_MOTOR_POLICY'].content_en;
   
   
  } else {
    
    Banner_Renew_policy = sbiHomeData && sbiHomeData['RENEW_POLICY_BANNER_RENEW'] && sbiHomeData['RENEW_POLICY_BANNER_RENEW'].content_hi;
    Pai_Renewal = sbiHomeData && sbiHomeData['RENEW_POLICY_BLOG_PAI_RENEWAL'] && sbiHomeData['RENEW_POLICY_BLOG_PAI_RENEWAL'].content_hi;
    Personal_Accident = sbiHomeData && sbiHomeData['RENEW_POLICY_BLOG_HP_INDIVIDUAL_PA'] && sbiHomeData['RENEW_POLICY_BLOG_HP_INDIVIDUAL_PA'].content_hi;
    Hospital_Cash = sbiHomeData && sbiHomeData['RENEW_POLICY_BLOG_HP_HOSPITAL_CASH'] && sbiHomeData['RENEW_POLICY_BLOG_HP_HOSPITAL_CASH'].content_hi;
    Retail_Policy = sbiHomeData && sbiHomeData['RENEW_POLICY_BLOG_HP_RETAIL'] && sbiHomeData['RENEW_POLICY_BLOG_HP_RETAIL'].content_hi;
    Group_Policy = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_HEALTH_GROUP_POLICY'] && sbiHomeData['PRODUCTS_RETAIL_HEALTH_GROUP_POLICY'].content_hi;
    Critical_Illness= sbiHomeData && sbiHomeData['RENEW_POLICY_BLOG_HP_CRITICAL_ILLNESS'] && sbiHomeData['RENEW_POLICY_BLOG_HP_CRITICAL_ILLNESS'].content_hi;
    Arogya_Top_Up = sbiHomeData && sbiHomeData['RENEW_POLICY_BLOG_HP_AROGYA_TOP_UP'] && sbiHomeData['RENEW_POLICY_BLOG_HP_AROGYA_TOP_UP'].content_hi;
    Arogya_Premier = sbiHomeData && sbiHomeData['RENEW_POLICY_BLOG_HP_AROGYA_PREMIER'] && sbiHomeData['RENEW_POLICY_BLOG_HP_AROGYA_PREMIER'].content_hi;
    Arogya_Plus = sbiHomeData && sbiHomeData['RENEW_POLICY_BLOG_HP_AROGYA_POLICY'] && sbiHomeData['RENEW_POLICY_BLOG_HP_AROGYA_POLICY'].content_hi;
    Health_Policy = sbiHomeData && sbiHomeData['RENEW_POLICY_BLOG_HEALTH_POLICY'] && sbiHomeData['RENEW_POLICY_BLOG_HEALTH_POLICY'].content_hi;
    Four_Wheeler = sbiHomeData && sbiHomeData['RENEW_POLICY_BLOG_MP_FOUR_WHEELER'] && sbiHomeData['RENEW_POLICY_BLOG_MP_FOUR_WHEELER'].content_hi;
    Two_Wheeler= sbiHomeData && sbiHomeData['RENEW_POLICY_BLOG_MP_TWO_WHEELER'] && sbiHomeData['RENEW_POLICY_BLOG_MP_TWO_WHEELER'].content_hi;
    Select_Policy = sbiHomeData && sbiHomeData['RENEW_POLICY_BLOG_MP_SELECT_POLICY'] && sbiHomeData['RENEW_POLICY_BLOG_MP_SELECT_POLICY'].content_hi;
    Blog_Motor_Policy = sbiHomeData && sbiHomeData['RENEW_POLICY_BLOG_MOTOR_POLICY'] && sbiHomeData['RENEW_POLICY_BLOG_MOTOR_POLICY'].content_hi;
     
  }
    //console.log("tes
    return (
      <div>
        <BaseComponent pageTitle="policyrenewal">
          {/* <Helmet> */}
          <HelmetData pageComponentType="PolicyRenewal" />
          {/* Header Start */}
          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>{Banner_Renew_policy}</h1>
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
                  <h1>{Banner_Renew_policy}</h1>
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
                    <h4>{Blog_Motor_Policy}</h4>
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
                          <option value="">{Select_Policy}</option>
                          <option value="M2W">{Two_Wheeler}</option>
                          <option value="M4W">{Four_Wheeler}</option>
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
                    <h4>{Health_Policy}</h4>
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
                          <option value="">{Select_Policy}</option>
                          <option value="APL">{Arogya_Plus}</option>
                          <option value="AP">{Arogya_Premier}</option>
                          <option value="AT">{Arogya_Top_Up}</option>
                          <option value="CI">{Critical_Illness}</option>
                          <option value="SH">{Group_Policy}</option>
                          <option value="RH">{Retail_Policy}</option>
                          <option value="HDC">{Hospital_Cash}</option>
                          <option value="IPA">{ Personal_Accident}</option>
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
                    <h4>{Pai_Renewal}</h4>
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
