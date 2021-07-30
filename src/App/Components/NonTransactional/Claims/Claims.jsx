import React, { Component, lazy } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

import BaseComponent from "../../BaseComponent";
const Garage = lazy(() => import("../Contact/Garage"));
const Hospital = lazy(() => import("../Contact/Hospital"));
const ClaimsPhilosophy = lazy(() => import("./ClaimsPhilosophy"));
const LossSurveyLimits = lazy(() => import("./LossSurveyLimits"));
const ClaimFormDownload = lazy(() => import("./ClaimFormDownload"));
const ClaimIntimation = lazy(() => import("./ClaimIntimation"));
const ClaimSettlement = lazy(() => import("./ClaimSettlement"));

class Claims extends Component {
  constructor(props) {
    super(props);

    this.claimsTab = [
      {
        title: "Claims Philosophy",
        propsName: "/claim/claims-philosophy",
        active: true
      },
      {
        title: "Claim Form Download",
        propsName: "/claim/claims-form-download",
        active: false
      },
      {
        title: "Claim Intimation",
        propsName: "/claim/claims-intimation",
        active: false
      },
      {
        title: "Claim Settlement",
        propsName: "/claim/claims-settlement",
        active: false
      },
      {
        title: "Garage Network",
        propsName: "/claim/garage-network",
        active: false
      },
      {
        title: "Hospital Network",
        propsName: "/claim/hospital-network",
        active: false
      },
      {
        title: "Loss Survey Limits",
        propsName: "/claim/loss-survey-limits",
        active: false
      }
    ];

    this.state = {
      pageTitle: "Claims Philosophy",
      claimsTab: this.claimsTab
    };
  }

  setPageTitle = componentPageTitle => {
    console.log(this);
    this.state.claimsTab.map(item => {
      if (item.title === componentPageTitle) {
        item.active = true;
      } else {
        item.active = false;
      }
      return true;
    });
    this.setState({
      pageTitle: componentPageTitle
    });
    if(this.props.history.action==='PUSH'){
      this.gtmHandler(componentPageTitle);
    }
  };

  componentDidMount() {
    if (this.props.location.pathname) {
      let index = this.state.claimsTab.findIndex(
        x => x.propsName === this.props.location.pathname
      );
      if (index > -1) {
        this.setPageTitle(this.state.claimsTab[index].title);
      }
    }
  }

  gtmHandler = (clickText) =>{
    window.dataLayer = window.dataLayer || [];
    const data = {
      'event': 'claims_intimation_page_1_icon_menu_click',
      'pagetype': 'Claim',
      'click_text': clickText
    };
    window.dataLayer.push(data);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.location.pathname &&
      this.props.location.pathname &&
      prevProps.location.pathname !== this.props.location.pathname
    ) {
      let index = this.state.claimsTab.findIndex(
        x => x.propsName === this.props.location.pathname
      );
      if (index > -1) {
        this.setPageTitle(this.state.claimsTab[index].title);
      }
    }
  }

  render() {
    
    const { path } = this.props.match;
    return (
      <BaseComponent>
        {/* Header Start */}
        {isMobile ? (
          <section className="topform product-header">
            <div className="insuTab">
              <h1>{this.state.pageTitle}</h1>
              {/* For Mobule */}
            </div>
          </section>
        ) : (
            <section className="container-with-no-padding container">
              <div className="innerpageBanner row">
                <div className="col-4">
                <figure className="justify-content-between align-items-center">
                      <img
                      src={require("../../../assets/images/banners/claims_intimation.svg")}
                      alt=""
                      />
                    </figure>
                </div>
                <div className="col-8 d-flex align-items-center">
                  <div className="flex-column">
                    <h1>{this.state.pageTitle}</h1>
                    {/* For Desktop */}
                  </div>
                  <div className="innerHeadBotomIcon">
                        <img
                          src={require("../../../assets/images/banners/claims_intimation_bottom.svg")}
                          alt=""
                        />
                  </div>

                </div>
              </div>
            </section>
          )}
        {/* Header End */}
        <Container>
          <div className="tabWrap mt-5">
            <Row className="m-b-65">
              <Col sm={12}>
                <ul className="top-icon-menu">
                  <li
                    className={
                      this.state.claimsTab[0].active ? "active" : "not-active"
                    }
                  >
                    <Link
                      to={`${path}/claims-philosophy`}
                      onClick={()=>{this.setPageTitle.bind(this,"Claims Philosophy")}}
                    >
                      <img
                        src={require("./../../../assets/images/icon-claims-philosophy.svg")}
                        alt="Claims Philosophy"
                      />
                      <span>Claims Philosophy</span>
                    </Link>
                  </li>
                  <li
                    className={
                      this.state.claimsTab[1].active ? "active" : "not-active"
                    }
                  >
                    <Link
                      to={`${path}/claims-form-download`}
                      onClick={()=>{this.setPageTitle.bind(this, "Claim Form Download" )}}
                    >
                      <img
                        src={require("./../../../assets/images/icon-download-form.svg")}
                        alt="Claim Form Download"
                      />
                      <span>Claim Form Download</span>
                    </Link>
                  </li>
                  <li
                    className={
                      this.state.claimsTab[2].active ? "active" : "not-active"
                    }
                  >
                    <Link
                      to={`${path}/claims-intimation`}
                      onClick={()=>{this.setPageTitle.bind(this, "Claim Intimation")}}
                    >
                      <img
                        src={require("./../../../assets/images/icon-claim-intimation.svg")}
                        alt="Claim Intimation"
                      />
                      <span>
                        Claim <br /> Intimation
                      </span>
                    </Link>
                  </li>
                  <li
                    className={
                      this.state.claimsTab[3].active ? "active" : "not-active"
                    }
                  >
                    <Link
                      to={`${path}/claims-settlement`}
                      onClick={()=>{this.setPageTitle.bind(this, "Claim Settlement")}}
                    >
                      <img
                        src={require("./../../../assets/images/icon-claim-settlement.svg")}
                        alt="Claim Settlement"
                      />
                      <span>
                        Claim <br /> Settlement
                      </span>
                    </Link>
                  </li>
                  <li
                    className={
                      this.state.claimsTab[4].active ? "active" : "not-active"
                    }
                  >
                    <Link
                      to={`${path}/garage-network`}
                      onClick={()=>{this.setPageTitle.bind(this, "Garage Network")}}
                    >
                      <img
                        src={require("./../../../assets/images/icon-garage.svg")}
                        alt="Garage Network"
                      />
                      <span>
                        Garage <br /> Network
                      </span>
                    </Link>
                  </li>
                  <li
                    className={
                      this.state.claimsTab[5].active ? "active" : "not-active"
                    }
                  >
                    <Link
                      to={`${path}/hospital-network`}
                      onClick={()=>{this.setPageTitle.bind(this, "Hospital Network")}}
                    >
                      <img
                        src={require("./../../../assets/images/icon-hospital.svg")}
                        alt="Hospital Network"
                      />
                      <span>
                        Hospital <br /> Network
                      </span>
                    </Link>
                  </li>
                  <li
                    className={
                      this.state.claimsTab[6].active ? "active" : "not-active"
                    }
                  >
                    <Link
                      to={`${path}/loss-survey-limits`}
                      onClick={()=>{this.setPageTitle.bind(this,"Loss Survey Limits")}}
                    >
                      <img
                        src={require("./../../../assets/images/icon-pdf.svg")}
                        alt="Loss Survey Limits"
                      />
                      <span>
                        Loss Survey
                        <br /> Limits
                      </span>
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>

            <div className="tabs">
              <Switch>
                <Route path={`${path}`} exact component={ClaimsPhilosophy} />
                <Route
                  path={`${path}/claims-philosophy`}
                  component={ClaimsPhilosophy}
                />
                <Route
                  path={`${path}/claims-form-download`}
                  component={ClaimFormDownload}
                />
                <Route
                  path={`${path}/claims-intimation`}
                  component={ClaimIntimation}
                />
                <Route
                  path={`${path}/claims-settlement`}
                  component={ClaimSettlement}
                />
                <Route path={`${path}/garage-network`} render={props => <Garage isHelmetDataSet="YES" {...props} />} />
                <Route path={`${path}/hospital-network`} render={props => <Hospital isHelmetDataSet="YES" {...props} />} />
                <Route
                  path={`${path}/loss-survey-limits`}
                  component={LossSurveyLimits}
                />
              </Switch>
            </div>
          </div>
        </Container>
      </BaseComponent>
    );
  }
}

export default Claims;
