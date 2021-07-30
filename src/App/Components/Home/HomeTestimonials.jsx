import React, { Component } from "react";
import {Container} from "react-bootstrap";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Axios from "../../Services/Shared/Axios";
import ReactHtmlParser from 'react-html-parser'
class HomeTestimonials extends Component {
  constructor() {
    super();   
    this.state = {
     testimonialData: [],
      showLoader: true
    };
  }

  getTestimonials = () => {
    Axios({
      method: "get",
      url: "/testimonials?_sort=id:desc"
    })
      .then(result => {
        this.setState({
          testimonialData: result.data,
          showLoader: false
        });
      })
      .catch(err => {
        console.log(err);
        console.log("|Page Error|");
      });
  };

  componentDidMount() {
    this.getTestimonials();
  }

  render() {
    let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let Customer_Say

    ;
    
    
    
    if (lang_name==='en') {
      Customer_Say=sbiHomeData && sbiHomeData['HOME_FOOTER_CUSTOMER_SAY'] && sbiHomeData['HOME_FOOTER_CUSTOMER_SAY'].content_en;
    
       
}
     else { 
     
      Customer_Say=sbiHomeData && sbiHomeData['HOME_FOOTER_CUSTOMER_SAY'] && sbiHomeData['HOME_FOOTER_CUSTOMER_SAY'].content_hi;
     
           
}
    
    const { testimonialData } = this.state;
    //console.log(testimonialData);
    return (
      <>
       {/* What our customer says  Start  */}
        <section className="customersay">
          <Container>

            <div className="customerbox">
              <div className="testishade"></div>

                <div className="customerboxTop-head"><h4>
                {Customer_Say?ReactHtmlParser(Customer_Say):ReactHtmlParser("<span>What our</span>customers say about us")}
               
                </h4>
                </div>
          {testimonialData &&
                testimonialData.length > 0 &&(
              <OwlCarousel
                className="owl-theme"
                loop={true}
                mouseDrag={false}
                autoplay={true}
                margin={0}
                nav={true}
                dots={false}
                items={1}
                rewind={false}
              >

              { testimonialData.map((item, index) => (

                <div className="item" key={index}>
                  <div className="clearfix customer-content-wrapper">
                    <div className="customercont">
                      <p>{item.message}</p>
                      <h6>
                      {item.client_name}
                        <span>{item.designation}</span>
                      </h6>
                    </div>
                  </div>
                </div>
                
                ))}
              </OwlCarousel>
            )}
            </div>

          </Container>

          <div className="cutomershade">
            <div className="cutsadhe"></div>
          </div>
        </section>

        {/* What our customer says End*/}
      </>
    );
  }
}

export default HomeTestimonials;
