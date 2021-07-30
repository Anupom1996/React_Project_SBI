import React, { Component, lazy } from "react";
import BaseComponent from "../BaseComponent";
import { isMobile } from "react-device-detect";
import { Route, Switch, Link } from "react-router-dom";
import { Container, Row, Col, Tab } from "react-bootstrap";
import HelmetData from "../Common/HelmetData";
import { Redirect } from 'react-router';
const BaseRetailProduct = lazy(() => import("./BaseRetailProduct"));
const BaseCorporateProduct = lazy(() => import("./BaseCorporateProduct"));
const BaseRuralProduct = lazy(() => import("./BaseRuralProduct"));
const BaseWithdrawnProduct = lazy(() => import("./BaseWithdrawnProduct"));
const BaseLiabilityProduct = lazy(() => import("./BaseLiabilityProduct"));

class BaseProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "retail"
    };
  }

  setActiveTab = propsName => {
    let activeTab = "retail";
    if (propsName === "/product/retail") {
      activeTab = "retail";
    } else if (propsName === "/product/corporate") {
      activeTab = "corporate";
    } else if (propsName === "/product/rural") {
      activeTab = "rural";
    } else if (propsName === "/product/withdrawn") {
      activeTab = "withdrawn";
    } else if (propsName === "/product/liability") {
      activeTab = "liability";
    } else {
      activeTab = "retail";
    }
    this.setState({
      activeTab: activeTab
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
      pathname === "/product/retail" ||
      pathname === "/product/corporate" ||
      pathname === "/product/rural" ||
      pathname === "/product/withdrawn" ||
      pathname === "/product/liability"
    ) {
      setTimeout(() => {
        var elmnt = document.getElementById("focusProdTab");
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
        <HelmetData pageComponentType="BaseProduct" />
        {isMobile ? (
          <section className="topform product-header motor-product-header">
            <div className="insuTab">
              <h1>SBI General Products</h1>
              <div className="healgth-list">
                <ul>
                  <li>
                    We believe insurance was always meant to protect what one
                    loves
                  </li>
                  <li>Prices That Can’t Get Any Better</li>
                </ul>
              </div>
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
                  src={require("../../assets/images/general_product.svg")}
                  alt=""
                />
              </figure>
              </div>
              <div className="col-8 d-flex align-items-center">
                    <div className="flex-column">
              <h1>SBI General Products</h1>
              <div className="healgth-list">
                <ul>
                  <li>
                    We believe insurance was always meant to protect what one
                    loves
                  </li>
                  <li>Prices That Can’t Get Any Better</li>
                </ul>
              </div>
              </div>
              {/* For Desktop */}
              </div>

              <div className="innerHeadBotomIcon">
                      <img
                        src={require("../../assets/images/general_product_bottom_icon.svg")}
                        alt="SBI General Products"
                      />
                    </div>

            </div>
          </section>
        )}
        <section className="protectWrapper">
          <Container>
            <div className="prod-landing-content">
              <h2>Products</h2>

              <Tab.Container id="prodTab-content">
                <Row className="prod-tab" id="focusProdTab">
                  <Col sm={12}>
                    <div
                      variant="pills"
                      className="flex-row justify-content-center align-items-center nav nav-pills"
                    >
                      <div className="nav-item">
                        <Link
                          to={`${path}/retail`}
                          className={
                            activeTab === "retail"
                              ? "nav-link active"
                              : "nav-link"
                          }
                        >
                          Retail
                        </Link>
                      </div>
                      <div className="nav-item">
                        <Link
                          to={`${path}/corporate`}
                          className={
                            activeTab === "corporate"
                              ? "nav-link active"
                              : "nav-link"
                          }
                        >
                          Corporate
                        </Link>
                      </div>
                      <div className="nav-item">
                        <Link
                          to={`${path}/rural`}
                          className={
                            activeTab === "rural"
                              ? "nav-link active"
                              : "nav-link"
                          }
                        >
                          Rural
                        </Link>
                      </div>
                      {/* <div className="nav-item">
                        <Link
                          to={`${path}/withdrawn`}
                          className={
                            activeTab === "withdrawn"
                              ? "nav-link active"
                              : "nav-link"
                          }
                        >
                          Withdrawn
                        </Link>
                      </div> */}
                      <div className="nav-item">
                        <Link to={`${path}/liability`}
                          className={
                            activeTab === "liability"
                              ? "nav-link active"
                              : "nav-link"
                          }
                        >
                          Liability
                        </Link>
                      </div> 
                    </div>
                  </Col>
                  <Col sm={12}>
                    <div className="tab-content">
                      <Switch>
                        <Route
                          path={`${path}`}
                          exact
                          component={BaseRetailProduct}
                        />
                        <Route
                          path={`${path}/retail`}
                          component={BaseRetailProduct}
                        />
                        <Route
                          path={`${path}/corporate`}
                          component={BaseCorporateProduct}
                        />
                        <Route
                          path={`${path}/rural`}
                          component={BaseRuralProduct}
                        />
                        <Route
                          path={`${path}/withdrawn`}
                          component={BaseWithdrawnProduct}
                        />
                        <Route
                          path={`${path}/liability`}
                          component={BaseLiabilityProduct}
                        />

                        <Route exact path='/product/arogya-premier-policy' render={() => (
                            <Redirect to="/health-insurance/arogya-premier-policy" />
                        )}/>
                        <Route exact path='/product/arogya-plus-policy' render={() => (
                            <Redirect to="/health-insurance/arogya-plus-policy" />
                        )}/>
                        <Route exact path='/product/arogya-topup-policy' render={() => (
                            <Redirect to="/health-insurance/arogya-topup-policy" />
                        )}/>
                        <Route exact path='/product/health-insurance' render={() => (
                            <Redirect to="/health-insurance/health-insurance" />
                        )}/>
                        <Route exact path='/product/critical-illness-insurance' render={() => (
                            <Redirect to="/health-insurance/critical-illness-insurance" />
                        )}/>
                        <Route exact path='/product/hospital-daily-cash' render={() => (
                            <Redirect to="/health-insurance/hospital-daily-cash" />
                        )}/>
                        <Route exact path='/product/group-health-insurance' render={() => (
                            <Redirect to="/health-insurance/group-health-insurance" />
                        )}/>
                        <Route exact path='/product/loan-insurance' render={() => (
                            <Redirect to="/health-insurance/loan-insurance" />
                        )}/>

                        <Route exact path='/product/long-term-home-insurance' render={() => (
                            <Redirect to="/home-insurance/long-term-home-insurance" />
                        )}/>
                        <Route exact path='/product/simple-home-insurance' render={() => (
                            <Redirect to="/home-insurance/simple-home-insurance" />
                        )}/>

                        <Route exact path='/product/two-wheeler-insurance' render={() => (
                            <Redirect to="/motor-insurance/two-wheeler-insurance" />
                        )}/>
                        <Route exact path='/product/private-car-insurance' render={() => (
                            <Redirect to="/motor-insurance/private-car-insurance" />
                        )}/>
                        <Route exact path='/product/motor-act-only-two-wheeler-insurance' render={() => (
                            <Redirect to="/motor-insurance/motor-act-only-two-wheeler-insurance" />
                        )}/>
                        <Route exact path='/product/long-term-two-wheeler-insurance' render={() => (
                            <Redirect to="/motor-insurance/long-term-two-wheeler-insurance" />
                        )}/>
                        <Route exact path='/product/motor-act-only-private-car-insurance' render={() => (
                            <Redirect to="/motor-insurance/motor-act-only-private-car-insurance" />
                        )}/>

                        <Route exact path='/product/individual-pa-insurance' render={() => (
                            <Redirect to="/personal-accident-insurance/individual-pa-insurance" />
                        )}/>

                        <Route exact path='/product/travel-insurance' render={() => (
                            <Redirect to="/travel-insurance" />
                        )}/>

                        <Route exact path='/product/agriculture-pumpset-insurance-policy' render={() => (
                            <Redirect to="/agriculture-pumpset-insurance-policy" />
                        )}/>
                        <Route exact path='/product/cattle-insurance-policy' render={() => (
                            <Redirect to="/cattle-insurance-policy" />
                        )}/>
                        <Route exact path='/product/micro-insurance-policy' render={() => (
                            <Redirect to="/micro-insurance-policy" />
                        )}/>
                        <Route exact path='/product/sheep-goat-insurance-policy' render={() => (
                            <Redirect to="/sheep-goat-insurance-policy" />
                        )}/> 

                        <Route exact path='/product/jewellers-block' render={() => (
                            <Redirect to="/jewellers-block" />
                        )}/>
                        
                        <Route exact path='/product/money-insurance' render={() => (
                            <Redirect to="/money-insurance" />
                        )}/>
                        <Route exact path='/product/plate-glass-insurance' render={() => (
                            <Redirect to="/plate-glass-insurance" />
                        )}/>
                        <Route exact path='/product/burglary-insurance' render={() => (
                            <Redirect to="/burglary-insurance" />
                        )}/>
                        <Route exact path='/product/commercial-motor-insurance' render={() => (
                            <Redirect to="/commercial-motor-insurance" />
                        )}/>
                        <Route exact path='/product/tractor-and-other-farm-vehicle-insurance' render={() => (
                            <Redirect to="/tractor-and-other-farm-vehicle-insurance" />
                        )}/>
                        <Route exact path='/product/group-personal-accident-insurance' render={() => (
                            <Redirect to="/group-personal-accident-insurance" />
                        )}/>
                        <Route exact path='/product/group-health-insurance' render={() => (
                            <Redirect to="/group-health-insurance" />
                        )}/>
                        <Route exact path='/product/standard-fire-and-special-perils-insurances' render={() => (
                            <Redirect to="/standard-fire-and-special-perils-insurances" />
                        )}/>
                        <Route exact path='/product/consequential-loss-fire-insurance' render={() => (
                            <Redirect to="/consequential-loss-fire-insurance" />
                        )}/>
                        <Route exact path='/product/marine-cargo-insurance' render={() => (
                            <Redirect to="/marine-cargo-insurance" />
                        )}/>
                        <Route exact path='/product/industrial-all-risks-insurance' render={() => (
                            <Redirect to="/industrial-all-risks-insurance" />
                        )}/>
                        <Route exact path='/product/business-package-insurance' render={() => (
                            <Redirect to="/business-package-insurance" />
                        )}/>
                        <Route exact path='/product/latent-defects-insurance-policy' render={() => (
                            <Redirect to="/latent-defects-insurance-policy" />
                        )}/>
                        <Route exact path='/product/electronic-equipment-insurance' render={() => (
                            <Redirect to="/electronic-equipment-insurance" />
                        )}/>
                        <Route exact path='/product/contractors-all-risk-insurance' render={() => (
                            <Redirect to="/contractors-all-risk-insurance" />
                        )}/>
                        <Route exact path='/product/erection-all-risks-insurance' render={() => (
                            <Redirect to="/erection-all-risks-insurance" />
                        )}/>
                        <Route exact path='/product/contractors-plant-machinery' render={() => (
                            <Redirect to="/contractors-plant-machinery" />
                        )}/>
                        <Route exact path='/product/machinery-breakdown-insurance' render={() => (
                            <Redirect to="/machinery-breakdown-insurance" />
                        )}/>
                        <Route exact path='/product/boiler-pressure-plant-insurance' render={() => (
                            <Redirect to="/boiler-pressure-plant-insurance" />
                        )}/>
                        <Route exact path='/product/consequential-loss-machinery-breakdown' render={() => (
                            <Redirect to="/consequential-loss-machinery-breakdown" />
                        )}/>
                        <Route exact path='/product/directors-and-officers' render={() => (
                            <Redirect to="/directors-and-officers" />
                        )}/>
                        <Route exact path='/product/motor-commercial-trailer' render={() => (
                            <Redirect to="/motor-commercial-trailer" />
                        )}/>
                        <Route exact path='/product/errors-and-omissions' render={() => (
                            <Redirect to="/errors-and-omissions" />
                        )}/>
                        <Route exact path='/product/pradhan-mantri-fasal-bima-yojna' render={() => (
                            <Redirect to="/pradhan-mantri-fasal-bima-yojna" />
                        )}/>
                        <Route exact path='/product/sign-board' render={() => (
                            <Redirect to="/sign-board" />
                        )}/>
                        <Route exact path='/product/national-agriculture-insurance' render={() => (
                            <Redirect to="/national-agriculture-insurance" />
                        )}/>
                        <Route exact path='/product/motor-act-only' render={() => (
                            <Redirect to="/motor-act-only" />
                        )}/>
                        <Route exact path='/product/event-cancellation' render={() => (
                            <Redirect to="/event-cancellation" />
                        )}/>
                        <Route exact path='/product/trade-credit-insurance' render={() => (
                            <Redirect to="/trade-credit-insurance" />
                        )}/>
                        <Route exact path='/product/aviation-hull-package' render={() => (
                            <Redirect to="/aviation-hull-package" />
                        )}/>
                        <Route exact path='/product/sme-package' render={() => (
                            <Redirect to="/sme-package" />
                        )}/>
                        <Route exact path='/product/broadform-liability' render={() => (
                            <Redirect to="/broadform-liability" />
                        )}/>
                        <Route exact path='/product/product-liability' render={() => (
                            <Redirect to="/product-liability" />
                        )}/>
                        <Route exact path='/product/cellular-network' render={() => (
                            <Redirect to="/cellular-network" />
                        )}/>
                        <Route exact path='/product/advance-lossof-profit' render={() => (
                            <Redirect to="/advance-lossof-profit" />
                        )}/>
                        <Route exact path='/product/clinical-trial-professional-liability' render={() => (
                            <Redirect to="/clinical-trial-professional-liability" />
                        )}/>
                        <Route exact path='/product/cyber-defense-insurance' render={() => (
                            <Redirect to="/cyber-defense-insurance" />
                        )}/>
                        <Route exact path='/product/public-liability' render={() => (
                            <Redirect to="/public-liability" />
                        )}/>
                        <Route exact path='/product/baggage-insurance' render={() => (
                            <Redirect to="/baggage-insurance" />
                        )}/>
                        <Route exact path='/product/portable-electronic-equipment' render={() => (
                            <Redirect to="/portable-electronic-equipment" />
                        )}/>
                        <Route exact path='/product/weather-insurance' render={() => (
                            <Redirect to="/weather-insurance" />
                        )}/>
                        <Route exact path='/product/mega-risk' render={() => (
                            <Redirect to="/mega-risk" />
                        )}/>
                        <Route exact path='/product/port-package' render={() => (
                            <Redirect to="/port-package" />
                        )}/>
                        <Route exact path='/product/marine-delay-start' render={() => (
                            <Redirect to="/marine-delay-start" />
                        )}/>
                        <Route exact path='/product/motor-trade-transit-risks' render={() => (
                            <Redirect to="/motor-trade-transit-risks" />
                        )}/>
                        <Route exact path='/product/all-risk-insurance' render={() => (
                            <Redirect to="/all-risk-insurance" />
                        )}/>
                        <Route exact path='/product/clinical-trial-no-fault' render={() => (
                            <Redirect to="/clinical-trial-no-fault" />
                        )}/>
                        <Route exact path='/product/employees-compensation-ec' render={() => (
                            <Redirect to="/employees-compensation-ec" />
                        )}/>
                        <Route exact path='/product/motor-trade-road-risks' render={() => (
                            <Redirect to="/motor-trade-road-risks" />
                        )}/>
                        <Route exact path='/product/public-liability-act' render={() => (
                            <Redirect to="/public-liability-act" />
                        )}/>
                        <Route exact path='/product/kidnap-ransom-and-extortion' render={() => (
                            <Redirect to="/kidnap-ransom-and-extortion" />
                        )}/>
                        <Route exact path='/product/commercial-general-liability' render={() => (
                            <Redirect to="/commercial-general-liability" />
                        )}/>
                        <Route exact path='/product/motor-trade-internal-risks' render={() => (
                            <Redirect to="/motor-trade-internal-risks" />
                        )}/>
                        <Route exact path='/product/fidelity-guarantee' render={() => (
                            <Redirect to="/fidelity-guarantee" />
                        )}/>
                        <Route exact path='/product/oil-energy' render={() => (
                            <Redirect to="/oil-energy" />
                        )}/>

                        <Route exact path='/product/motor-two-wheeler-insurance' render={() => (
                            <Redirect to="/motor-insurance/two-wheeler-insurance" />
                        )}/>
                        <Route exact path='/product/motor-act-only-–-private-car-long-term' render={() => (
                            <Redirect to="/motor-insurance/motor-act-only-private-car-insurance" />
                        )}/>
                        
                      </Switch>
                    </div>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </Container>
        </section>
      </BaseComponent>
    );
  }
}

export default BaseProduct;
