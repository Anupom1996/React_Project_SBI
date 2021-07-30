import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import ReactHtmlParser from 'react-html-parser'
class HomeValueAddedServices extends Component {
  constructor() {
    super();
    this.state = {
      oneMgUrl:
        "https://www.1mg.com/?_source=sbigwes&utm_source=online&utm_medium=sbigwes&utm_campaign=nov",
      fitternityUrl: "https://apistage.fitn.in:9999/sbi",
      testimonialData: [],
      showLoader: true,
    };
  }

  showThirdPartyAlert = (thirdPartyMerchant) => {
    swal({
      text:
        "By clicking this link you will be re-directed to third party merchant website. SBI General is not responsible for the content/ service provided by such external websites. SBI General makes no representations nor has any supervision or control over the quality, content, reliability or security of the third party website, nor shall SBI General be liable for its use",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDo) => {
      if (willDo) {
        if (thirdPartyMerchant === "fitternity") {
          window.open(this.state.fitternityUrl, "_blank");
        }
        if (thirdPartyMerchant === "oneMg") {
          window.open(this.state.oneMgUrl, "_blank");
        }
      }
    });
  };

  gtmClickHandler = (eventName, pageType, clickText) => {
    window.dataLayer = window.dataLayer || [];
    const data = {
      event: eventName,
      pagetype: pageType,
      click_text: clickText,
    };
    window.dataLayer.push(data);
  };

  render() {
    
    let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let Explore,Paragaraph1,Paragaraph2,Value_Added_Service,Fitternity,Mg_1

    ;
    
    
    
    if (lang_name==='en') {
      Explore=sbiHomeData && sbiHomeData['HOME_VALUE_ADDED_SERVICE_EXPLORE'] && sbiHomeData['HOME_VALUE_ADDED_SERVICE_EXPLORE'].content_en;
      Mg_1=sbiHomeData && sbiHomeData['PRODUCTS_SIDE_MENU_1MG'] && sbiHomeData['PRODUCTS_SIDE_MENU_1MG'].content_en;
      Fitternity=sbiHomeData && sbiHomeData['PRODUCTS_SIDE_MENU_FITTERNITY'] && sbiHomeData['PRODUCTS_SIDE_MENU_FITTERNITY'].content_en;
      Value_Added_Service=sbiHomeData && sbiHomeData['PRODUCTS_SIDE_MENU_VALUE_ADDED_SERVICE'] && sbiHomeData['PRODUCTS_SIDE_MENU_VALUE_ADDED_SERVICE'].content_en;
      Paragaraph2=sbiHomeData && sbiHomeData['HOME_VALUE_ADDED_SERVICE_PART2'] && sbiHomeData['HOME_VALUE_ADDED_SERVICE_PART2'].content_en;
      Paragaraph1=sbiHomeData && sbiHomeData['HOME_VALUE_ADDED_SERVICE_PART1'] && sbiHomeData['HOME_VALUE_ADDED_SERVICE_PART1'].content_en;
       
}
     else { 
     
      Explore=sbiHomeData && sbiHomeData['HOME_VALUE_ADDED_SERVICE_EXPLORE'] && sbiHomeData['HOME_VALUE_ADDED_SERVICE_EXPLORE'].content_hi;
      Paragaraph2=sbiHomeData && sbiHomeData['HOME_VALUE_ADDED_SERVICE_PART2'] && sbiHomeData['HOME_VALUE_ADDED_SERVICE_PART2'].content_hi;
      Mg_1=sbiHomeData && sbiHomeData['PRODUCTS_SIDE_MENU_1MG'] && sbiHomeData['PRODUCTS_SIDE_MENU_1MG'].content_hi;
      Fitternity=sbiHomeData && sbiHomeData['PRODUCTS_SIDE_MENU_FITTERNITY'] && sbiHomeData['PRODUCTS_SIDE_MENU_FITTERNITY'].content_hi;
      Value_Added_Service=sbiHomeData && sbiHomeData['PRODUCTS_SIDE_MENU_VALUE_ADDED_SERVICE'] && sbiHomeData['PRODUCTS_SIDE_MENU_VALUE_ADDED_SERVICE'].content_hi;
      Paragaraph1=sbiHomeData && sbiHomeData['HOME_VALUE_ADDED_SERVICE_PART1'] && sbiHomeData['HOME_VALUE_ADDED_SERVICE_PART1'].content_hi;
           
}
    return (
      <>
        {/* Value Added Services  Start  */}
        <section className="customersay value-main">
          <Container>
            <div className="customerbox">
              <div className="testishade"></div>

              <div className="customerboxTop-head">
                <h4>{Value_Added_Service?Value_Added_Service:'Value Added Services'}</h4>
              </div>
              <div className="value-con-main">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="value-1mg-main">
                      <h5>{Mg_1?Mg_1:'1MG'}</h5>
                      {Paragaraph1?ReactHtmlParser(Paragaraph1):ReactHtmlParser("<ul><li>1mg is India's leading integrated consumer health platform</li><li>e pharmacy network covers 1500 cities across tier 1, 2 and 3 cities</li></ul>")}
                      <Link
                        className="btn-explore"
                        to={"#"}
                        onClick={(e) => {
                          this.showThirdPartyAlert("oneMg");
                          this.gtmClickHandler(
                            "homepage_8_value_added_services_click",
                            "Home Page",
                            "Explore-1Mg"
                          );
                        }}
                      >
                       {Explore?Explore:'Explore'}
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="value-fitternity-main">
                      <h5>{Fitternity?Fitternity:'Fitternity'}</h5>
                      {Paragaraph2?ReactHtmlParser(Paragaraph2): ReactHtmlParser('<ul><li>12000+ workout options</li><li>17+ fitness forms</li><li>Best discounts on online & offline sesions</li></ul>')}
                      <Link
                        className="btn-explore"
                        to={"#"}
                        onClick={(e) => {
                          this.showThirdPartyAlert("fitternity");
                          this.gtmClickHandler(
                            "homepage_8_value_added_services_click",
                            "Home Page",
                            "fitternity"
                          );
                        }}
                      >
                      {Explore?Explore:'Explore'}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>

          <div className="cutomershade">
            <div className="cutsadhe"></div>
          </div>
        </section>

        {/* Value Added Services End*/}
      </>
    );
  }
}

export default HomeValueAddedServices;
