import React, { Component, lazy } from "react";
import { Row, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import { Link, Route, Switch } from "react-router-dom";
import BaseComponent from "../../BaseComponent";

const AboutSbiContent = lazy(() => import("./AboutSbiContent"));
const Boards = lazy(() => import("./BoardOfDirectors"));
const PublicDisclosures = lazy(() => import("./PublicDisclosures"));
const WhistleBlowerPolicy = lazy(() => import("./WhistleBlowerPolicy"));
const News = lazy(() => import("./News"));
const Testimonials = lazy(() => import("./Testimonials"));

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTitle: "About Us",
      pageType: this.props.location.pathname,
      activeTab: "one",
      showLoader: true,
      loadFlag: true
    };
  }

  setPageCosmetics = (pageTitle, tabCount) => {
    this.setState({
      pageTitle: pageTitle,
      activeTab: tabCount
    });
    //GTM Added
    window.dataLayer = window.dataLayer || [];
    const data = {
      'event': 'about_us_page_1_icon_menu_click',
      'pagetype': 'about_us_page',
      'click_text': pageTitle
    };
    window.dataLayer.push(data);
  };

  setPageTab = () => {
    let tabCount = "one";
    let pageTitle = "About Us";
    if (this.state.pageType === "/about-us/board-directors-and-management") {
      tabCount = "two";
      pageTitle = "Board of Directors & Management";
    } else if (this.state.pageType === "/about-us/public-disclosure") {
      tabCount = "three";
      pageTitle = "Public Disclosures";
    } else if (this.state.pageType === "/about-us/whistle-blower-policy") {
      tabCount = "four";
      pageTitle = "Whistle Blower Policy";
    } else if (this.state.pageType === "/about-us/sbi-general-in-news") {
      tabCount = "five";
      pageTitle = "SBI General in News";
    } else if (this.state.pageType === "/about-us/testimonials") {
      tabCount = "six";
      pageTitle = "Testimonials";
    }

    this.setState({
      pageTitle: pageTitle,
      activeTab: tabCount,
      showLoader: false
    });
  };

  componentDidMount() {
    this.setPageTab();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.location.pathname &&
      this.props.location.pathname &&
      prevProps.location.pathname !== this.props.location.pathname
    ) {
      let tabCount = "one";
      let pageTitle = "About Us";
      if (
        this.props.location.pathname === "/about-us/board-directors-and-management"
      ) {
        tabCount = "two";
        pageTitle = "Board of Directors & Management";
      } else if (this.props.location.pathname === "/about-us/public-disclosure") {
        tabCount = "three";
        pageTitle = "Public Disclosures";
      } else if (
        this.props.location.pathname === "/about-us/whistle-blower-policy"
      ) {
        tabCount = "four";
        pageTitle = "Whistle Blower Policy";
      } else if (this.props.location.pathname === "/about-us/sbi-general-in-news") {
        tabCount = "five";
        pageTitle = "SBI General in News";
      } else if (this.props.location.pathname === "/about-us/testimonials") {
        tabCount = "six";
        pageTitle = "Testimonials";
      }
      this.setState({
        pageTitle: pageTitle,
        activeTab: tabCount,
        showLoader: false
      });
    }
  }vision_details

  render() {
    let pageTitle = this.state.pageTitle;
    let tabCount = this.state.activeTab;
    let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let about_us_title, board_of_director, public_disclosure, whistle_blower, in_news, testimonials
     ;
  
    if (lang_name==='en') {
      about_us_title = sbiHomeData && sbiHomeData['ABOUT_US_BANNER_TEXT_ABOUT_US'] && sbiHomeData['ABOUT_US_BANNER_TEXT_ABOUT_US'].content_en;            
      board_of_director = sbiHomeData && sbiHomeData['ABOUT_US_BANNER_TEXT'] && sbiHomeData['ABOUT_US_BANNER_TEXT'].content_en;         
      public_disclosure = sbiHomeData && sbiHomeData['ABOUT_US_BANNER_PUBLIC_DISCLOSURES'] && sbiHomeData['ABOUT_US_BANNER_PUBLIC_DISCLOSURES'].content_en;
      whistle_blower = sbiHomeData && sbiHomeData['ABOUT_US_BANNER_POLICY'] && sbiHomeData['ABOUT_US_BANNER_POLICY'].content_en;
      in_news = sbiHomeData && sbiHomeData['ABOUT_US_BANNER_SBI_NEWS'] && sbiHomeData['ABOUT_US_BANNER_SBI_NEWS'].content_en;  
      testimonials = sbiHomeData && sbiHomeData['ABOUT_US_BANNER_TESTIMONIALS'] && sbiHomeData['ABOUT_US_BANNER_TESTIMONIALS'].content_en;               
    } else {
      about_us_title = sbiHomeData && sbiHomeData['ABOUT_US_BANNER_TEXT_ABOUT_US'] && sbiHomeData['ABOUT_US_BANNER_TEXT_ABOUT_US'].content_hi;           
      board_of_director = sbiHomeData && sbiHomeData['ABOUT_US_BANNER_TEXT'] && sbiHomeData['ABOUT_US_BANNER_TEXT'].content_hi;
      public_disclosure = sbiHomeData && sbiHomeData['ABOUT_US_BANNER_PUBLIC_DISCLOSURES'] && sbiHomeData['ABOUT_US_BANNER_PUBLIC_DISCLOSURES'].content_hi;
      whistle_blower = sbiHomeData && sbiHomeData['ABOUT_US_BANNER_POLICY'] && sbiHomeData['ABOUT_US_BANNER_POLICY'].content_hi;
      in_news = sbiHomeData && sbiHomeData['ABOUT_US_BANNER_SBI_NEWS'] && sbiHomeData['ABOUT_US_BANNER_SBI_NEWS'].content_hi;  
      testimonials = sbiHomeData && sbiHomeData['ABOUT_US_BANNER_TESTIMONIALS'] && sbiHomeData['ABOUT_US_BANNER_TESTIMONIALS'].content_hi;   
    }
    return (
      <BaseComponent pageTitle="about">
        {/* Header Start */}
        {isMobile ? (
          <section className="topform product-header">
            <div className="insuTab">
              <h1>{pageTitle}</h1>
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
                      src={require("../../../assets/images/about_banner.svg")}
                      alt=""
                    />
                  </figure>
                </div>
                <div className="col-8 d-flex align-items-center">
                  <div className="flex-column">
                    <h1>{pageTitle==="About Us"
                    ? 
                    about_us_title
                    :
                    pageTitle==="Board of Directors & Management"
                    ?
                    board_of_director
                    :
                    pageTitle==="Public Disclosures"
                    ?
                    public_disclosure
                    :
                    pageTitle==="Whistle Blower Policy"
                    ?
                    whistle_blower
                    :
                    pageTitle==="SBI General in News"
                    ?
                    in_news
                    :
                    testimonials}                                       
                   
                    </h1>
                    {/* For Desktop */}
                  </div>
                  <div className="innerHeadBotomIcon">
                    <img
                      src={require("../../../assets/images/general_product_bottom_icon.svg")}
                      alt=""
                    />
                  </div>

                </div>
              </div>
            </section>
          )}
        {/* Header End */}
        <div className="container mt-10 tabWrapMain">
          <div className="tabWrap">
            <Row className="m-b-65">
              <Col sm={12}>
                <ul className="top-icon-menu">
                  <li className={tabCount === "one" ? "active" : null}>
                    <Link
                      to={`/about-us`}
                      className="link"
                      onClick={this.setPageCosmetics.bind(
                        this,
                        "About Us",
                        "one"
                      )}
                    >
                      <img
                        src={require("./../../../assets/images/teamIcon.svg")}
                        alt=""
                      />
                      <span>{about_us_title}</span>
                    </Link>
                  </li>
                  <li className={tabCount === "two" ? "active" : null}>
                    <Link
                      to={`/about-us/board-directors-and-management`}
                      className="link"
                      onClick={this.setPageCosmetics.bind(
                        this,
                        "Board of Directors & Management",
                        "two"
                      )}
                    >
                      <img
                        src={require("./../../../assets/images/networkingIcon.svg")}
                        alt=""
                      />
                      <span>{board_of_director}</span>
                    </Link>
                  </li>
                  <li className={tabCount === "three" ? "active" : null}>
                    <Link
                      to={`/about-us/public-disclosure`}
                      className="link"
                      onClick={this.setPageCosmetics.bind(
                        this,
                        "Public Disclosures",
                        "three"
                      )}
                    >
                      <img
                        src={require("./../../../assets/images/padlockIcon.svg")}
                        alt=""
                      />
                      <span>{public_disclosure}</span>
                    </Link>
                  </li>
                  <li className={tabCount === "four" ? "active" : null}>
                    <Link
                      to={`/about-us/whistle-blower-policy`}
                      className="link"
                      onClick={this.setPageCosmetics.bind(
                        this,
                        "Whistle Blower Policy",
                        "four"
                      )}
                    >
                      <img
                        src={require("./../../../assets/images/umbrellaIcon.svg")}
                        alt=""
                      />
                      <span>{whistle_blower}</span>
                    </Link>
                  </li>
                  <li className={tabCount === "five" ? "active" : null}>
                    <Link
                      to={`/about-us/sbi-general-in-news`}
                      className="link"
                      onClick={this.setPageCosmetics.bind(
                        this,
                        "SBI General in News",
                        "five"
                      )}
                    >
                      <img
                        src={require("./../../../assets/images/newspaperIcon.svg")}
                        alt=""
                      />
                      <span> {in_news}</span>
                    </Link>
                  </li>
                  <li className={tabCount === "six" ? "active" : null}>
                    <Link
                      to={`/about-us/testimonials`}
                      className="link"
                      onClick={this.setPageCosmetics.bind(
                        this,
                        "Testimonials",
                        "six"
                      )}
                    >
                      <img
                        src={require("./../../../assets/images/chatIcon.svg")}
                        alt=""
                      />
                      <span>{testimonials}</span>
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row className="m-b-65">
              <Col sm={12}>
                <Switch>
                  <Route
                    path={`/about-us`}
                    exact
                    component={AboutSbiContent}
                  />
                  <Route
                    path={`/about-us/board-directors-and-management`}
                    component={Boards}
                  />
                  <Route
                    path={`/about-us/public-disclosure`}
                    component={PublicDisclosures}
                  />
                  <Route
                    path={`/about-us/whistle-blower-policy`}
                    component={WhistleBlowerPolicy}
                  />
                  <Route path={`/about-us/sbi-general-in-news`} component={News} />
                  <Route path={`/about-us/testimonials`} component={Testimonials} />
                </Switch>
              </Col>
            </Row>
          </div>
        </div>
      </BaseComponent>
    );
  }
}

export default About;
