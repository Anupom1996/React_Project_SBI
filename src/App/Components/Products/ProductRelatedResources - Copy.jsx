import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import ProductRelatedResourceDataHindi from "../../assets/ProductRelatedResourceDataHindi.json";
import productRelatedResourcesDataUAT from "../../assets/productRelatedResourcesData.json";
import productRelatedResourcesDataPROD from "../../assets/productRelatedResourcesData.json";
import productData from "../../assets/productRequestCallbackData.json";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { withRouter } from 'react-router-dom';
import * as AppConstant from "../AppConstant";

class ProductRelatedResources extends Component {
  constructor(props) {
    super(props);

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

    this.state = {
      productRelatedData: this.getProductRelatedData(productKey),
      responsiveOWL: {
        0: {
          items: 1
        },
        640: {
          items: 1
        },
        768: {
          items: 2
        },
        1024: {
          items: 4
        }
      }
    };
  }

  handleRelatedProductClick = relatedProductItem => {
    //GTM Added
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
    let productName = "";
    if (productData) {
        let index = productData.findIndex(
          x => x.key === productKey
        );
        if (index > -1) {
         
            productName =  productData[index].productName;
            let pagetype = productData[index].prodEventName;
            pagetype = pagetype + "_product_page";
            let gaUserId = document.cookie.match(/_ga=(.+?);/)[1].split('.').slice(-2).join(".");
            const data = {'event':'portal_product_page_5_pdf_download_click',
            'product_name':productName,
            'pagetype':pagetype,
            'client_id':gaUserId,
            'timestamp': AppConstant.gtmCurrentTime(),
            'quote_no': 'NA',
            'lead_no': 'NA',
            'policy_no': 'NA',
            'click_text':relatedProductItem.label

            };
            window.dataLayer.push(data);
        }
      }
    // if(relatedProductItem.is_media) {
      if(relatedProductItem.file_url==='maintenance'){
     window.open(AppConstant.MAINTANCE_URL, "_blank");
      }else{
        window.open(AppConstant.BASE_URL + relatedProductItem.file_url, "_blank");
      }
    // }
  };

  render() {
    return (
      <>
        <section className="prospectusWrapper">
          <Container>
            {this.state.productRelatedData &&
              this.state.productRelatedData.product_disclaimer ? (
                <div className="prospectusTop ">
                  <span>
                    {ReactHtmlParser(
                      this.state.productRelatedData.product_disclaimer
                    )}
                  </span>
                </div>
              ) : null}
            <div className="hideExtra">
              {/* <div className="prospectusTop d-flex  justify-content-center align-items-center">
              <div className="prospectusSingle color-01  text-center">
                <figure>
                  <img
                    src={require("../../assets/images/transfer-ownership-icon.svg")}
                    alt=""
                  />
                </figure>
                <p>Transfer Ownership</p>
                <div className="prospectusFooter">
                  <Link to={"#"}>View</Link>
                </div>
              </div>
              <div className="prospectusSingle color-02 text-center">
                <figure>
                  <img
                    src={require("../../assets/images/taxi-icon.svg")}
                    alt=""
                  />
                </figure>
                <p>Upgrade Vehicle Details</p>
                <div className="prospectusFooter">
                  <Link to={"#"}>Upgrade</Link>
                </div>
              </div>
              <div className="prospectusSingle color-03 text-center">
                <figure>
                  <img
                    src={require("../../assets/images/revised-rate-icon.svg")}
                    alt=""
                  />
                </figure>
                <p>Motor TP Revised Rate</p>
                <div className="prospectusFooter">
                  <Link to={"#"}>View</Link>
                </div>
              </div>
            </div> */}
            </div>

            <div className="prospectusBtm">
              {this.state.productRelatedData &&
                this.state.productRelatedData.related_data &&
                this.state.productRelatedData.related_data.length > 0 ? (
                  <>
                    <OwlCarousel
                      className="owl-theme"
                      loop={false}
                      autoplay={false}
                      margin={8}
                      nav={true}
                      dots={false}
                      dotsEach={true}
                      responsive={this.state.responsiveOWL}
                    >
                      {this.state.productRelatedData.related_data.map(
                        (item, index) => (
                          <div
                            className="prospectusBtmSingle text-center"
                            key={index}
                            onClick={this.handleRelatedProductClick.bind(
                              this,
                              item
                            )}
                          >
                            <Link to={"#"}>
                              <figure>
                                <img
                                  src={require(`../../assets/images/${item.resource_icon}`)}
                                  alt={item.label}
                                />
                              </figure>
                              {item.label}
                            </Link>
                          </div>
                        )
                      )}
                    </OwlCarousel>
                  </>
                ) : null}
            </div>
          </Container>
        </section>
      </>
    );
  }

  getProductRelatedData = productType => {
    let productRelatedData;
    //console.log(process.env);
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    
    if (process.env.REACT_APP_MODE === "uat") {
      if (lang_name === 'hi') {
        productRelatedData = ProductRelatedResourceDataHindi;
      }else{
        productRelatedData = productRelatedResourcesDataUAT;
      }
    } else {
      if (lang_name === 'hi') {
        productRelatedData = ProductRelatedResourceDataHindi;
      }else{
        productRelatedData = productRelatedResourcesDataPROD;
      }      
    }
    if (productRelatedData) {
      let index = productRelatedData.findIndex(x => x.key === productType);
      if (index > -1) {
        return productRelatedData[index];
      } else {
        return productRelatedData[0];
      }
    }
    return null;
  };
}

export default withRouter(ProductRelatedResources);
