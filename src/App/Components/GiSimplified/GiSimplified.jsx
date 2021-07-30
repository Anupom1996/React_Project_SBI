import React, { Component, lazy } from "react";
import { isMobile } from "react-device-detect";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import BaseComponent from "../BaseComponent";
import HelmetData from "../Common/HelmetData";
import BlogInner from "./BlogInner";
// import InitiativeInner from "./InitiativeInner";

const Faqs = lazy(() => import("./Faqs"));
const Blogs = lazy(() => import("./Blogs"));
const Avs = lazy(() => import("./Avs"));
// const MarketingInitiatives = lazy(() => import("./MarketingInitiatives"));

class GiSimplified extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "blogs",
    };
  }

  setActiveTab = (propsName) => {
    let activeTab = "blogs";
    if (propsName.search("blog") > 0) {
      activeTab = "blogs";
    } else if (propsName.search("avs") > 0) {
      activeTab = "avs";
    } else if (propsName.search("faqs") > 0) {
      activeTab = "faqs";
    }
    // else if (propsName.search("marketing-initiative") > 0) {
    //   activeTab = "marketing-initiatives";
    // }
    else {
      activeTab = "blogs";
    }
    this.setState({
      activeTab: activeTab,
    });
  };

  componentDidMount() {
    let pathname = this.props.location.pathname;
    if (pathname) {
      this.setActiveTab(pathname);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.location.pathname &&
      this.props.location.pathname &&
      prevProps.location.pathname !== this.props.location.pathname
    ) {
      this.setActiveTab(this.props.location.pathname);
    }

    // Focus To Page Tab
    let pathname = this.props.location.pathname;
    if (
      pathname === "/gi-simplified/blogs" ||
      pathname === "/gi-simplified/avs" ||
      pathname === "/gi-simplified/faqs"
      // ||
      // pathname === "/gi-simplified/marketing-initiatives"
    ) {
      setTimeout(() => {
        var elmnt = document.getElementById("focusTab");
        elmnt.scrollIntoView();
      }, 500);
    }
  }

  render() {
    const { path } = this.props.match;
    // console.log("path::" + path);
    let { activeTab } = this.state;
    return (
      <BaseComponent>
        {/* <Helmet> */}
        <HelmetData pageComponentType="GiSimplified" />
        {/* Header Start */}
        {isMobile ? (
          <section className="topform product-header">
            <div className="insuTab">
              <h1>GI Simplified</h1>
              <h2>General Insurance made easy</h2>
              {/* For Mobule */}
            </div>
          </section>
        ) : (
          <section className="container-with-no-padding container">
            <div className="innerpageBanner row">
              <div className="col-4">
                <figure className="justify-content-between align-items-center">
                  <img
                    src={require("../../assets/images/group_5065.svg")}
                    alt=""
                  />
                </figure>
              </div>
              <div className="col-8 d-flex align-items-center">
                <div className="flex-column">
                  <h1>GI Simplified</h1>
                  <h2 className="gi-heading-info">General Insurance made easy</h2>
                  {/* For Desktop */}
                </div>
                <div className="innerHeadBotomIcon">
                  <img
                    src={require("../../assets/images/knowledge_bottom_icon.svg")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
        )}
        {/* Header End */}
        <div className="container mt-10 tabWrapMain">
          <div className="tabWrap" id="focusTab">
            <Row className="m-b-65">
              <Col sm={12}>
                <ul className="top-icon-menu">
                  <li
                    className={activeTab === "blogs" ? "link active" : "link"}
                  >
                    <Link to={`${path}/blogs`} className="link">
                      <img
                        src={require("../../assets/images/blog-icon.svg")}
                        alt=""
                      />
                      <span>Blogs</span>
                    </Link>
                  </li>
                  <li className={activeTab === "avs" ? "two active" : "two"}>
                    <Link to={`${path}/avs`} className="link">
                      <img
                        src={require("../../assets/images/avs-icon.svg")}
                        alt=""
                      />
                      <span>AVs</span>
                    </Link>
                  </li>
                  <li
                    className={activeTab === "faqs" ? "three active" : "three"}
                  >
                    <Link to={`${path}/faqs`} className="link">
                      <img
                        src={require("../../assets/images/faq-icon.svg")}
                        alt=""
                      />
                      <span>FAQs</span>
                    </Link>
                  </li>
                  {/* <li
                    className={
                      activeTab === "marketing-initiatives"
                        ? "four active"
                        : "four"
                    }
                  >
                    <Link to={`${path}/marketing-initiatives`} className="link">
                      <img
                        src={require("../../assets/images/marketing-icon.svg")}
                        alt=""
                      />
                      <span>Marketing Initiatives</span>
                    </Link>
                  </li> */}
                </ul>
              </Col>
              <Col sm={12}>
                <div className="tabContent">
                  <Switch>
                    <Route path={`${path}`} exact component={Blogs} />
                    <Route path={`${path}/blogs`} exact component={Blogs} />
                    <Route
                      path={`${path}/blog/:slug`}
                      exact
                      component={BlogInner}
                    />
                    <Route path={`${path}/avs`} exact component={Avs} />
                    <Route path={`${path}/faqs`} exact component={Faqs} />
                    {/* <Route
                      path={`${path}/marketing-initiatives`}
                      exact
                      component={MarketingInitiatives}
                    />
                    <Route
                      path={`${path}/marketing-initiative/:slug`}
                      exact
                      component={InitiativeInner}
                    /> */}
                    <Route render={() => <Redirect to="/NotFound" />} />
                  </Switch>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </BaseComponent>
    );
  }
}

export default GiSimplified;
