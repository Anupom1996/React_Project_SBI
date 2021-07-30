import React, { Component } from "react";
import { isMobile } from "react-device-detect";

import BaseComponent from "../../BaseComponent";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ReactHtmlParser from "react-html-parser";

import Axios from "../../../Services/Shared/Axios";
import * as AppConstant from "../../AppConstant";
import HelmetData from "../../Common/HelmetData";

class Awards extends Component {
  constructor() {
    super();
    this.state = {
      pageData: [],
      showLoader: true,
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
          items: 3
        },
      }
    };
  }

  getPageContent = () => {
    let pageUrl = "/awards?_sort=updated_at:asc";
    Axios({
      method: "get",
      url: pageUrl
    })
      .then(res => {
        this.setState({
          pageData: res.data,
          showLoader: false
        });
      })
      .catch(err => {
        console.log(err);
        console.log("|Page Error|");
      });
  };

  componentDidMount() {
    this.getPageContent();
  }

  render() {
    const { pageData, responsiveOWL } = this.state;
    var slideItemCount = 0;
    var allItemCount = 0;
    return (
      <>
        {/* <Helmet> */}
        <HelmetData pageComponentType="Awards" />

        {this.state.showLoader ? (
          null
        ) : (
            <div>
              <BaseComponent pageTitle="awards">
                {/* Header Start */}
                {isMobile ? (
                  <section className="topform product-header">
                  <div className="insuTab">
                      <h1>SBI General Awards</h1>                
                      {/* For Mobule */}
                  </div>
                  </section>
                ) : (
                  <section className="container-with-no-padding container">                    
                     <div className="innerpageBanner row">
                  <div className="col-4">
                  <figure className="justify-content-between align-items-center">
                    <img src={require("../../../assets/images/banners/awards.svg")} alt="" />
                  </figure>
                  </div>
                  <div className="col-8 d-flex align-items-center">
                    <div className="flex-column">
                      <h1>SBI General Awards</h1>
                    </div>
                    {/* For Desktop */}
                  </div>
                  <div className="innerHeadBotomIcon">
                      <img
                        src={require("../../../assets/images/banners/awards_bottom.svg")}
                        alt=""
                      />
                    </div>
                </div>
                    </section>
                )}
                {/* Header End */}
                {pageData.length > 0 ? (
                  <Container>
                    <section className="awards-top-carousel">
                      <OwlCarousel
                        className="owl-theme"
                        loop
                        autoplay={true}
                        margin={8}
                        nav={true}
                        dots={false}
                        dotsEach={true}
                        responsive={responsiveOWL}
                      >
                        {pageData.map((item, index) => {
                          slideItemCount = slideItemCount + 1;
                          return (
                            slideItemCount < 7 ? (
                              <div className="item" key={index}>
                                <div className="award-box">
                                  <h4>{item.title}</h4>
                                  <figure className="m-0">
                                    {item.featured_image && item.featured_image.url ? (
                                      <img src={AppConstant.IMG_BASE_URL + item.featured_image.url} alt={item.title} />
                                    ) : (
                                        <img src={require("../../../assets/images/hAwards01.jpg")} alt={item.title} />
                                      )}
                                  </figure>
                                  <div className="award-content">{ReactHtmlParser(item.description)}</div>
                                  <div className="awardsLink"><Link to={{ pathname: `/award-details/${item.slug}` }}>More</Link></div>
                                </div>
                              </div>
                            ) : null
                          );
                        })}
                      </OwlCarousel>
                    </section>
                    <section className="award-bottom-list">
                      <ul>
                        {pageData.map((item, index) => {
                          allItemCount = allItemCount + 1;
                          return (
                            <li key={index}>
                              <figure>
                                {item.featured_image && item.featured_image.url ? (
                                  <img src={AppConstant.IMG_BASE_URL + item.featured_image.url} alt={item.title} />
                                ) : (
                                    <img src={require("../../../assets/images/hAwards01.jpg")} alt={item.title} />
                                  )}
                              </figure>
                              <div className="award-content">
                                <h4>{item.title}</h4>
                                <Link to={{ pathname: `/award-details/${item.slug}` }}>More</Link>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </section>
                  </Container>
                ) : (
                    <p className="text-center">No record found!</p>
                  )}
              </BaseComponent>
            </div>
          )}
      </>
    );
  }
}

export default Awards;
