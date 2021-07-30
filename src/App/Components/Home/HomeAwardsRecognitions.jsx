import React, { Component } from "react";

import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Axios from "../../Services/Shared/Axios.js";
import * as AppConstant from "../AppConstant";
//import TagManager from 'react-gtm-module';

class HomeAwardsRecognitions extends Component {
  constructor() {
    super();
    this.state = {
      awardsList: []
    };
  }

  componentDidMount() {
    this.getawardsList();
  }

  getawardsList = () => {
    Axios({
      method: "get",
      url: "/awards?_limit=10&_sort=created_at:desc"
    })
      .then(res => {
        this.setState({
          awardsList: res.data
        });
      })
      .catch(err => {
        console.log(err);
        console.log("|Awards Error|");
      });
  };

  gtmClickHandler = (eventName, pageType, clickText) => {    
    window.dataLayer = window.dataLayer || [];
    const data = {
      'event': eventName,
      'pagetype': pageType,
      'click_text': clickText
    };
    window.dataLayer.push(data);
  }

  render() {
    let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let award;       
   
    if (lang_name==='en') {
      award = sbiHomeData && sbiHomeData['HOME_BODY_AWARDS_AND_RECOGNITIONS'] && sbiHomeData['HOME_BODY_AWARDS_AND_RECOGNITIONS'].content_en; 
    } else {
      award = sbiHomeData && sbiHomeData['HOME_BODY_AWARDS_AND_RECOGNITIONS'] && sbiHomeData['HOME_BODY_AWARDS_AND_RECOGNITIONS'].content_hi; 
    }
    //console.log(this.state.awardsList);
    return (
      <section className="awardsWrapper">
        <Container>
          <div className="awardsTitle">
            <h6>
              <span>{award?award:'Awards & Recognitions'}</span>{" "}
            </h6>
          </div>

          <section className="awardsMainrow">
            {this.state.awardsList && this.state.awardsList.length && (
              <OwlCarousel
                className="owl-theme"
                loop
                autoplay={true}
                margin={35}
                nav={false}
                dots={false}
                items={3}
                dotsEach={true}
              >
                {this.state.awardsList.map((item, index) => (
                  <div className="item" key={index}>
                    <div className="awardsResult" onClick={()=>this.gtmClickHandler("homepage_6_award_click", "Home Page", "Award - "+item.title)}>
                      {item.featured_image.url ? (
                        <figure className="m-0">
                          <Link to={{ pathname: `/award-details/${item.slug}` }}>
                          <img
                            src={
                              AppConstant.IMG_BASE_URL + item.featured_image.url
                            }
                            alt=""
                          />
                          </Link>
                        </figure>
                      ) : null}

<h4>
                      <Link to={{ pathname: `/award-details/${item.slug}` }}>
                        {item.title.length > 40 ? (
                          <>
                            {item.title.substr(0, 40)}
                            ...
                          </>
                        ) : (
                          <>{item.title}</>
                        )}
                        </Link>
                      </h4>
                      <div className="awardsLink">
                        <Link to={{ pathname: `/award-details/${item.slug}` }}></Link>
                      </div>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            )}
          </section>
        </Container>
      </section>
    );
  }
}

export default HomeAwardsRecognitions;
