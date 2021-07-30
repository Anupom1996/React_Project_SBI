import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import BaseComponent from "../../BaseComponent";
import { Row, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import HelmetData from "../../Common/HelmetData";
import * as AppConstant from "../../AppConstant";

class SiteMap extends Component {

  downloadLink = (link) => {
      fetch(link).then(response => {
          response.blob().then(blob => {
              let localurl = window.URL.createObjectURL(blob);
              let a = document.createElement("a");
              a.href = localurl;
              a.target = "_blank";
              a.download = "ISO-27001-Certified.pdf";
              a.click();
          })
      })
  }

  render() {
    let isoURL = AppConstant.BASE_URL+'/uploads/94136f0d281843f98f0c31e84b730244.pdf';
    return (
      <div>
        <BaseComponent pageTitle="sitemap">
          {/* <Helmet> */}
          <HelmetData pageComponentType="SiteMap" />
          {/* Header Start */}
          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>Sitemap</h1>
                {/* For Mobule */}
              </div>
            </section>
          ) : (
            <section className="container-with-no-padding container">
                  <div className="innerpageBanner row">
                    <div className="col-4">
                      <figure className="justify-content-between align-items-center">
                        <img
                          src={require("../../../assets/images/common_banner.svg")}
                          alt=""
                        />
                      </figure>
                    </div>
                    <div className="col-8 d-flex align-items-center">
                      <div className="flex-column">
                        <h1>Sitemap</h1>
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
          <Container>
            <section className="section-sitemap">
              <Row >
                <Col lg="3" xs="12">
                  <h3>Useful Links</h3>
                  <ul className="sitemap-list">
                    <li><a href={AppConstant.EMP_LOGIN_PATH} target="_blank" rel="noopener noreferrer">Employee Login </a></li>
                    <li><Link to="/product/">Individual Insurance </Link></li>
                    <li><Link to="/product/corporate">Business Insurance </Link></li>
                    <li><Link to="/product/rural">Rural Insurance </Link></li>
                    <li><Link to="/product/withdrawn">Withdrawn Products </Link></li>
                    <li><Link to="/blog">Blogs</Link></li>
                  </ul>
                </Col>
                <Col lg="3" xs="12"><h3>Locate Us</h3>
                  <ul className="sitemap-list">
                    <li><Link to="/contact-us">Contact Us</Link></li>
                    <li><Link to="/contact-us/garage">Garage Network</Link></li>
                    <li><Link to="/contact-us/hospital">Hospital Network</Link></li>
                    <li><Link to="/contact-us/branch">SBI General Branches</Link></li>
                    <li><Link to="/agent">Agents/SP</Link></li>

                  </ul>

                </Col>
                <Col lg="4" xs="12"> <h3>Group Of Companies</h3>
                  <ul className="sitemap-list two-column">
                    <li><a target="_blank" rel="noopener noreferrer" href={'https://www.sbi.co.in/'}>SBI Bank </a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href={'https://www.sbicard.com/en/home.page'}>SBI Card </a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href={'https://www.onlinesbi.com/'}>SBI Online Banking </a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href={'https://www.sbidfhi.co.in/'}>SBI DFHI </a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href={'https://www.sbilife.co.in/'}>SBI Life </a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href={'https://www.sbiglobal.in/'}>SBI Global Factors  </a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href={'http://epolicy.sbilife.co.in/'}>SBI Life Epolicy </a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href={'https://cedge.in/'}>C-Edge </a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href={'https://www.sbimf.com/en-us'}>SBI Mutual Fund </a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href={'https://www.iag.com.au/'}>IAG </a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href={'http://www.sbicaps.com/'}>SBI Capital </a></li>
                  </ul>
                </Col>
                <Col lg="2" xs="12"> <h3>Travel</h3>
                  <ul className="sitemap-list">
                    <li><Link to="/travel-insurance">Travel Insurance </Link></li>
                  </ul>
                  <h3>Home</h3>
                  <ul className="sitemap-list">
                    <li><Link to="/home-insurance/long-term-home-insurance">Long Term Home </Link></li>
                    <li><Link to="/home-insurance/simple-home-insurance">Simple Home Insurance</Link></li>
                  </ul>
                  <h3>Personal Accident</h3>
                  <ul className="sitemap-list">
                    <li><Link to="/personal-accident-insurance/individual-pa-insurance">Individual Personal Accident </Link></li>
                  </ul>
                </Col>
              </Row>

              <Row>
                <Col lg="3" xs="12">
                  <h3>Health</h3>
                  <ul className="sitemap-list">
                    <li><Link to="/health-insurance/retail-health">Health Insurance</Link></li>
                    <li><Link to="/health-insurance/arogya-premier-policy">Arogya Premier</Link></li>
                    <li><Link to="/health-insurance/arogya-plus-policy">Arogya Plus</Link></li>
                    <li><Link to="/health-insurance/arogya-topup-policy">Arogya Top up</Link></li>
                    <li><Link to="/health-insurance/group-health-insurance">Group Health Insurance - SBI</Link></li>
                    <li><Link to="/health-insurance/critical-illness-insurance">Critical Illness</Link></li>
                    <li><Link to="/health-insurance/hospital-daily-cash">Hospital Daily Cash</Link></li>
                    <li><Link to="/health-insurance/loan-insurance">Loan Insurance</Link></li>
                  </ul>
                </Col>
                <Col lg="3" xs="12"><h3>Motor</h3>
                  <ul className="sitemap-list">
                    <li><Link to="/motor-insurance/private-car-insurance">Motor Private car</Link></li>
                    <li><Link to="/motor-insurance/two-wheeler-insurance">Motor Two Wheeler</Link></li>
                    <li><Link to="/motor-insurance/long-term-two-wheeler-insurance">Long Term Two Wheeler Insurance Policy</Link></li>
                    <li><Link to="/motor-insurance/motor-act-only-two-wheeler-insurance">Motor Act Only – Two Wheeler (Long Term)</Link></li>
                    <li><Link to="/motor-insurance/motor-act-only-private-car-insurance">Motor Act Only – Private Car (Long Term)</Link></li>

                  </ul>

                </Col>
                <Col lg="4" xs="12"> <h3>Other Links</h3>
                  <ul className="sitemap-list two-column">
                    <li><Link to="/downloads">Downloads  </Link></li>
                    <li><Link to="/privacy-policy">Privacy Policy </Link></li>
                    <li><Link to="/faq">FAQ </Link></li>
                    <li><Link to="/website-terms-usage">Terms of Usage </Link></li>
                    <li><a href={AppConstant.TRANSACTION_API_BASE_URL+"/writetous"} target="_blank" rel="noopener noreferrer">Write To Us  </a></li>
                    <li><Link to="/ucc-disclaimer">UCC Disclaimer </Link></li>
                    {/* <li><Link to="/career">Careers </Link></li> */}
                    <li><Link to="/important-links">Important Links </Link></li>
                    <li><Link to="/tender">Tenders &amp; Procurement </Link></li>
                    <li><Link onClick={this.downloadLink.bind(this, isoURL)} to={'#'}>ISO 27001 Certified</Link></li>
                  </ul>
                </Col>

              </Row>
            </section>
          </Container>

        </BaseComponent>
      </div>
    );
  }
}

export default SiteMap;