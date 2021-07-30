import React, { Component } from "react";
import { isMobile } from 'react-device-detect';
import { Row, Container, Col } from "react-bootstrap";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import HomeMenuWeb from "./HomeMenuWeb";
import HomeMenuMob from "./HomeMenuMob";

//import icraicon from "../../../../assets/images/icra-icon.svg";
import homebanner from "../../../../assets/images/home-banner.jpg";

import "react-datepicker/dist/react-datepicker.css";

import Axios from "../../../../Services/Shared/Axios";
import * as AppConstant from "../../../AppConstant";

class HomeMenuBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerData: "",
      open_popup: false
    }
  };


  openPopup = (e) => {
    this.setState({ open_popup: true });
  }

  handleClose = (e) => {
    this.setState({ open_popup: false });
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  handleToggleMenu = () => {
    if (document.body.classList.contains("openmenu")) {
      document.body.classList.remove("openmenu");
    } else {
      document.body.classList.add("openmenu");
    }
  };

  handleInsuranceToggleMenu = id => {
    var y = document.getElementById(id);
    if (y.classList) {
      y.classList.toggle("insuAccorToggle");
    } else {
      // For IE9
      var classes = y.className.split(" ");
      var j = classes.indexOf("insuAccorToggle");

      if (j >= 0) classes.splice(j, 1);
      else classes.push("insuAccorToggle");
      y.className = classes.join(" ");
    }
  };

  getHomeBanner = () => {
    Axios({
      method: "get",
      url: "/banners?_sort=created_at:desc"
    })
      .then(res => {
        this.setState({
          bannerData: res.data
        });
      })
      .catch(err => {
        console.log(err);
        console.log("|Error|");
      });
  }

  componentDidMount() {
    this.getHomeBanner();
  }

  render() {
    const { bannerData } = this.state;
    if (isMobile) {
      return (
        <>
          {/* <section className="topform">
            <div className="rotateit">
              <div className="skewbg"></div>
              <div className="skewbg-light"></div>
              <div className="bgtexture"></div>
            </div>
            <div className="insuTab">
              <h1>Let us help you choose a trusted Insurance Cover for </h1>
               For Mobule
              <HomeMenuMob />
            </div>

          </section> */}

          <Container className="container-with-no-padding">
            {/* <section className="homebanner">
              {bannerData &&
                bannerData.length > 0 && (
                  <OwlCarousel
                    className="owl-theme"
                    loop
                    autoplay={true}
                    margin={0}
                    nav={false}
                    dots={true}
                    items={1}
                    dotsEach={true}
                  >

                    {bannerData.map((item, index) => (
                      <>
                    {item.head_line.trim()? (
                      <div className="item">
                        <div className="homebannerContet">
                          <div className="homebannerText">
                              <h2>{item.head_line}</h2>
                          </div>
                        </div>
                      </div>
                      ) : (null)}
                      </>
                    ))}
                  </OwlCarousel>
                )}
            </section> */}
          </Container>
          <Container>
            <Row className="hLine">
              <Col sm="12" className="insuTab">
                {/* For Mobule */}
                <HomeMenuMob />
              </Col>
              {/* <Col sm="3">
                <div className="bg-rating-card-home">
                  <div className="imgsection"><img alt="" src={icraicon} /></div>
                  <h4>ICRA</h4>
                  <p>SBI General Proudly retains the iAAA rating for its "highest claim paying ability"</p>
                </div>
              </Col> */}
            </Row>
          </Container>
        </>
      );
    } else {
      return (
        <>
          {/* <section className="topform">
            <div className="rotateit">
              <div className="skewbg"></div>
              <div className="skewbg-light"></div>
              <div className="bgtexture"></div>
            </div>
            <div className="insuTab">
              <h1>Let us help you choose a trusted Insurance Cover for </h1>

             For Desktop 
              <HomeMenuWeb />

            </div>

          </section>*/}
          <Container className="container-with-no-padding">
            <section className="homebanner">
              {bannerData &&
                bannerData.length > 0 && (
                  <OwlCarousel
                    className="owl-theme"
                    loop
                    autoplay={true}
                    margin={0}
                    nav={false}
                    dots={true}
                    items={1}
                    dotsEach={true}
                  >

                    {bannerData.map((item, index) => (
                      <div className="item" key={index}>
                        <div className="homebannerContet">
                          <div className="homebannerImg">
                            {typeof item.banner_image !='undefined' &&
                            item.banner_image ? (
                              <>
                              { item.head_line.trim().indexOf('http') === -1?(
                                <img alt="" src={AppConstant.IMG_BASE_URL + item.banner_image.url} />
                              ):(
                                <a href={item.head_line} target="_blank" rel="noopener noreferrer"><img alt="" src={AppConstant.IMG_BASE_URL + item.banner_image.url} /></a>
                              )}
                              </>
                            ) : (<img alt="" src={homebanner} />)}
                          </div>
                          {/* {item.head_line.trim() ? (
                          <div className="homebannerText">
                              <h2>{item.head_line}</h2>
                          </div>
                          ) : (null)} */}
                        </div>
                      </div>

                    ))}
                  </OwlCarousel>
                )}
            </section>
          </Container>
          <Container>
            <Row className="hLine">
              <Col md="12" className="insuTab">
                {/* For Desktop  */}
                <HomeMenuWeb />
              </Col>
              {/* <Col sm="3">
                <div className="bg-rating-card-home">
                  <div className="imgsection"><img alt="" src={icraicon} /></div>
                  <h4>ICRA</h4>
                  <p>SBI General Proudly<br></br> retains the iAAA rating for its "highest claim paying ability"</p>
                </div>
              </Col> */}
            </Row>
          </Container>
        </>
      );
    }


    // if (isMobile) {
    //     return <div> Mobile Content</div>
    // }
    // return <div> Browser Content </div>
  }
}

export default HomeMenuBase;
