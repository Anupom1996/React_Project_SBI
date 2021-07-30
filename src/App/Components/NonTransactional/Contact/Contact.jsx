import React, { Component, lazy } from "react";
import { isMobile } from "react-device-detect";
import { Route, Switch, Link } from "react-router-dom";
import BaseComponent from "../../BaseComponent";
import { Row, Container, Col } from "react-bootstrap";

import callUs from "../../../assets/images/call-us.svg";
import requestacallback from "../../../assets/images/request-a-call-back.svg";
import haveaquerysuggestion from "../../../assets/images/have-a-query-suggestion.svg";
import pharmacy from "../../../assets/images/pharmacy.svg";
import Maintenance from "../../../assets/images/Maintenance.svg";
import bank from "../../../assets/images/bank.svg";
import AddressBox from "../../Common/AddressBox/AddressBox";
import HelmetData from "../../Common/HelmetData";
import * as AppConstant from "../../AppConstant";
const Branch = lazy(() => import("./Branch"));
const Garage = lazy(() => import("./Garage"));
const Hospital = lazy(() => import("./Hospital"));

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: "branch"
    };
  }

  setActiveTab = (propsName) => {
    let activeTab = "branch";
    if (propsName === "/contact-us/branch") {
      activeTab = "branch";
    } else if (propsName === "/contact-us/garage") {
      activeTab = "garage";
    } else if (propsName === "/contact-us/hospital") {
      activeTab = "hospital";
    }
    this.setState({
      activeTab: activeTab
    });
  }

  componentDidMount() {
    let pathname = this.props.location.pathname;
    if (pathname) {
      this.setActiveTab(pathname);
    }
    // Focus To Page Tab
    if (pathname === "/contact-us/branch" || pathname === "/contact-us/garage" || pathname === "/contact-us/hospital") {
      setTimeout(() => {
        var elmnt = document.getElementById("contactTab");
        elmnt.scrollIntoView();
      }, 500);

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
    if (pathname === "/contact-us/branch" || pathname === "/contact-us/garage" || pathname === "/contact-us/hospital") {
      setTimeout(() => {
        var elmnt = document.getElementById("contactTab");
        elmnt.scrollIntoView();
      }, 500);

    }
  }

  gtmHandler = (clickText) =>{
    window.dataLayer = window.dataLayer || [];
    const data = {
      'event': 'contact_us_page_1_icon_menu_click',
      'pagetype': 'contact_us_page',
      'click_text': clickText
    };
    window.dataLayer.push(data);
  }


  render() {
    const { path } = this.props.match;
    let { activeTab } = this.state;
    return (
      <div>
        <BaseComponent pageTitle="Contact">
          {/* <Helmet> */}
          <HelmetData pageComponentType="Contact" />

          {/* Header Start */}
          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>Contact Us</h1>

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
                      src={require("../../../assets/images/contact_banner_icon.svg")}
                      alt=""
                      />
                    </figure>
                    </div>
                    <div className="col-8 d-flex align-items-center">
                    <div className="flex-column">
                  <h1>Contact Us</h1>
                  {/* For Desktop */}
                  </div>
                  <div className="innerHeadBotomIcon">
                      <img
                        src={require("../../../assets/images/contact_banner_bottom_icon.svg")}
                        alt=""
                      />
                </div>
                  </div>
                </div>
              </section>
            )}
          {/* Header End */}
          <Container className="conatctpage mt-5">
            <div className="querytxt-mobile">
              <div className="querytxt">
                {/* <h4>For any Query:{" "}</h4> */}
                <h4>For any Query:{" "}</h4>
              

{/* 5:30 PM to 9:30 AM - 8097575500, 8097575505 */}


				<div class="queryInfo cont_custom">
					<span>Customers:</span>

          <div className="cont_time">
            <div className="time_lft">
              <span>9:30 AM to 5:30 PM</span>
              <p>1800 102 1111</p>
            </div>
            <div className="time_right">
            <span>5:30 PM to 9:30 AM</span>
              <p>8097575500,</p>
               <p>8097575505</p>
             
            </div>
          </div>
			
				</div>
				<div class="queryInfo lastDiv conCms">
					<span>Agents &amp; Intermediaries:</span>
					<span>1800 22 1111</span>
				</div>
              </div>	  
			  
			  <div className="querytxt">
                <h4>
                  Email us:{" "}
                  <a href="mailto:customer.care@sbigeneral.in">
                    <span className="envalop">customer.care@sbigeneral.in</span>
                  </a>
                </h4>
              </div>
            </div>

            <Row>
              <Col md="5" sm="12" className="linkMain">
                <a href={AppConstant.QUICK_ASIST_URL} target="_blank" rel="noopener noreferrer" className="link1"
                      onClick={()=>{this.gtmHandler('Quick Assist')}}>
                  <div className="link-div">
                    <div>
                      <img src={callUs} alt="" />
                      <span>Quick Assist</span>
                    </div>
                  </div>
                </a>
                <a href={AppConstant.TRANSACTION_API_BASE_URL + "/writetous"} target="_blank" rel="noopener noreferrer" className="link2" 
                onClick={()=>{this.gtmHandler('Request a Call Back')}}>
                  <div className="link-div">
                    <div>
                      <img src={requestacallback} alt="" />
                      <span>
                        Request a <br></br> Call Back
                      </span>
                    </div>
                  </div>
                </a>
                <a href={AppConstant.TRANSACTION_API_BASE_URL + "/writetous#qrequest"} target="_blank" rel="noopener noreferrer" className="link3" 
                onClick={()=>{this.gtmHandler('Have a Query / Suggestion')}}>
                  <div className="link-div">
                    <div>
                      <img src={haveaquerysuggestion} alt="" />
                      <span>Have a Query / Suggestion</span>
                    </div>
                  </div>
                </a>
              </Col>
              
              <Col md="7" sm="12" className="ctright">
                <div className="querytxt querytxt-desktop">
					<h4>For any Query:</h4>
					<div class="queryInfo cont_custom">
						<span>Customers: </span>
            <div className="cont_time">
            <div className="time_lft">
              <span>9:30 AM to 5:30 PM</span>
              <p>1800 102 1111</p>
            </div>
            <div className="time_right">
            <span>5:30 PM to 9:30 AM</span>
              <p>8097575500,</p>
               <p>8097575505</p>
             
            </div>
          </div>
					</div>
         
        
					<div class="queryInfo lastDiv conCms">
						<span>Agents &amp; Intermediaries:</span>
						<span>1800 22 1111</span>
					</div>
                </div>
				
				<div className="querytxt querytxt-desktop">
                  <h4>
                    Email us: <span className="envalop">customer.care@sbigeneral.in</span>
                  </h4>
                </div>
				
				
				
                {/* <div className="grievanceBlk">
                  <h4>Grievance Officer:</h4>
                  <p>Arun Bhatia</p>
                  <p>Head-Customer Grievance Redressal</p>
                  <p><a href="tel:8879634557">8879634557</a></p>
                </div> */}
                <AddressBox addressBoxType="Contact" />
              </Col>
            </Row>
            <h2 className="titleclose pb-3" id="contactTab">We are closer than you think, locate our:</h2>

            <div className="nav nav-pills" role="tablist">
              <div className="nav-item">
                <Link to={`${path}/branch`} className={activeTab === "branch" ? "nav-link active" : "nav-link"} >
                  <div>
                    <figure><img src={bank} alt="Branch" /></figure>
                    <span>Branch</span>
                  </div>
                </Link>
              </div>
              <div className="nav-item">
                <Link to={`${path}/garage`} className={activeTab === "garage" ? "nav-link active" : "nav-link"} >
                  <div>
                    <figure><img src={Maintenance} alt="Garage" /></figure>
                    <span>Garage</span>
                  </div>
                </Link>
              </div>
              <div className="nav-item">
                <Link to={`${path}/hospital`} className={activeTab === "hospital" ? "nav-link active" : "nav-link"} >
                  <div>
                    <figure><img src={pharmacy} alt="Hospital" /></figure>
                    <span>Hospital</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="tabs">
              <Switch>
                <Route path={`${path}`} exact render={props => <Branch isHelmetDataSet="NO" {...props} />} />
                <Route path={`${path}/branch`} exact render={props => <Branch isHelmetDataSet="YES" {...props} />} />
                <Route path={`${path}/garage`} exact render={props => <Garage isHelmetDataSet="YES" {...props} />} />
                <Route path={`${path}/hospital`} exact render={props => <Hospital isHelmetDataSet="YES" {...props} />} />
              </Switch>
            </div>
          </Container>
        </BaseComponent>
      </div>
    );
  }
}

export default Contact;
