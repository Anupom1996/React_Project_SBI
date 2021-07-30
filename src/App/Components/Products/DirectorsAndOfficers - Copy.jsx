import React, { Component } from "react";
import { Nav, Row, Container, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Tab from "react-bootstrap/Tab";
import { Scrollbars } from "react-custom-scrollbars";
import HelmetData from "../Common/HelmetData";
import BaseComponent from "../BaseComponent";
import CallBackForm from "./CallBackForm";
import BranchLocator from "./BranchLocator";
import FAQ from "./FAQ";
import ProductRelatedResources from "./ProductRelatedResources";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";

class DirectorsAndOfficers extends Component {
  state = {
    accordianBtn: false
  };

  toggleAccordianBtn = e => {
    let classAccord = e.target.className;
    let els = document.getElementsByClassName("accordianBtn btn btn-link");
    if (els) {
      while (els[0]) {
        els[0].classList.remove("accordianBtn");
      }
    }
    if (classAccord.indexOf("accordianBtn") > -1) {
      e.target.className = "btn btn-link";
    } else {
      e.target.className = "accordianBtn btn btn-link";
    }
  };

  render() {
    let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
  let key_feature,Coverage,locate_us, Exclusion,Directors_Officers,legal_liability,Cover_provided,additional_premium,Deliberate_willful,Seepage_Pollution,Fines_penalties,
  Criminal_Wrongs,Major_Shareholder,Improper_gains,Insured_Insured,Bodily_Injury,Pending_Act,insurance_covers,Add_Covers,Legal_Expenses,
  additional_premium1,Outside_Directorship,Pollution_Defence,Communication_Cover,Risk_Management_Extension,
  Auto_Inclusion,Liability_Coverage,protect_Directors,Organisation_Reimbursement
  

  ;
  if (lang_name==='en') {
    key_feature=sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_en;
      Coverage=sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'].content_en;
      locate_us=sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'] &&
      sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'].content_en; 
Exclusion=sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'].content_en;
Directors_Officers=sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT1'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT1'].content_en;
legal_liability=sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT2'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT2'].content_en;
Cover_provided=sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT3'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT3'].content_en;
additional_premium=sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT4'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT4'].content_en;
Fines_penalties=sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT5'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT5'].content_en;
Deliberate_willful=sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT6'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT6'].content_en;
Seepage_Pollution=sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT7'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT7'].content_en;
Criminal_Wrongs=sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT8'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT8'].content_en;
Major_Shareholder=sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT9'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT9'].content_en;
Improper_gains=sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT10'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT10'].content_en;
Insured_Insured=sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT15'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT15'].content_en;
Bodily_Injury=sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT16'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT16'].content_en;
Pending_Act=sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT17'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT17'].content_en;
insurance_covers=sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT18'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT18'].content_en;
Add_Covers=sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT19'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT19'].content_en;
additional_premium1=sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT20'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT20'].content_en;
Outside_Directorship=sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT21'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT21'].content_en;
Pollution_Defence=sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT22'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT22'].content_en;
Communication_Cover=sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT23'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT23'].content_en;
Legal_Expenses=sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT24'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT24'].content_en;
Risk_Management_Extension=sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT25'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT25'].content_en;
Auto_Inclusion=sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT26'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT26'].content_en;
Liability_Coverage=sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT29'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT29'].content_en;
protect_Directors=sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT30'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT30'].content_en;
Organisation_Reimbursement=sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT31'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT31'].content_en;

                 
     }
   else { 
    key_feature= sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_hi;
      Coverage= sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'].content_hi;
      locate_us=sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'] &&
      sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'].content_hi;
Exclusion= sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'].content_hi;
Directors_Officers= sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT1'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT1'].content_hi;
legal_liability= sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT2'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT2'].content_hi;
Cover_provided= sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT3'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT3'].content_hi;
additional_premium= sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT4'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT4'].content_hi;
Fines_penalties= sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT5'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT5'].content_hi;
Deliberate_willful= sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT6'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT6'].content_hi;
Seepage_Pollution= sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT7'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT7'].content_hi;
Criminal_Wrongs= sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT8'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT8'].content_hi;
Major_Shareholder= sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT9'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT9'].content_hi;
Improper_gains= sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT10'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT10'].content_hi;
Insured_Insured= sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT15'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT15'].content_hi;
Bodily_Injury= sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT16'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT16'].content_hi;
Pending_Act= sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT17'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT17'].content_hi;
insurance_covers= sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT18'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT18'].content_hi;
Add_Covers= sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT19'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT19'].content_hi;
additional_premium1= sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT20'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT20'].content_hi;
Outside_Directorship= sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT21'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT21'].content_hi;
Pollution_Defence= sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT22'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT22'].content_hi;
Communication_Cover= sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT23'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT23'].content_hi;
Legal_Expenses= sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT24'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT24'].content_hi;
Risk_Management_Extension= sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT25'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT25'].content_hi;
Auto_Inclusion= sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT26'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT26'].content_hi;
Liability_Coverage= sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT29'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT29'].content_hi;
protect_Directors= sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT30'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT30'].content_hi;
Organisation_Reimbursement= sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT31'] && sbiHomeData['PRODUCTS_LIABILITY_DIRECTORS_TEXT31'].content_hi;

   




}


    return (
      <div>
        <BaseComponent>
          {/* <Helmet> */}
          <HelmetData pageComponentType="DirectorsAndOfficers" />
          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>{Directors_Officers}</h1>
                <div className="healgth-list">
                  <ul>
                    <li>Policy upto a period of 30 years</li>
                    <li>In-built coverage for earthquake</li>
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
                    <img src={require("../../assets/images/common_banner.svg")} alt="" />
                  </figure>
                   </div>
                <div className="col-8 d-flex align-items-center">
                  <div className="flex-column">
                  <h1>{Directors_Officers}</h1>
                  {/* <div className="healgth-list">
                    <ul>
                      <li>Policy upto a period of 30 years</li>
                      <li>In-built coverage for earthquake</li>
                    </ul>
                  </div> */}
                  {/* For Desktop */}
                </div>
                <div className="innerHeadBotomIcon">
                      <img
                        src={require("../../assets/images/general_product_bottom_icon.svg")}
                        alt=""
                      />
                    </div>
                </div>
                </div>
              </section>
            )}

          {/* We Protect you Main */}
          <section className="protectWrapper motor-protectWrapper innerPageSection">
            <Container>
              <Row className="rotectRow">
                <WeProtectYouResources productType={this.props.location.pathname.split('/')[1]} />
                <Col xs="12" lg="4" className="lookingFor">
                  {/***** Call Back Form Component ****/}
                  <CallBackForm />
                </Col>
              </Row>
            </Container>
          </section>

          {/*Coverage Main */}
          <section className="coverageWrapper">
            <Container>
              <div className="coverageBase">
                <Tab.Container defaultActiveKey="tabmain_1">
                  <Nav className="tabmainProduct" variant="pills">
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_1">
                        <div>
                          <figure>
                            {" "}
                            <img
                              src={require("../../assets/images/key-feature-icon.svg")}
                              alt=""
                            />
                          </figure>
                          {key_feature}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_2">
                        <div>
                          <figure>
                            {" "}
                            <img
                              src={require("../../assets/images/coverage-icon.svg")}
                              alt=""
                            />
                          </figure>
                          {Coverage}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_3">
                        <div>
                          <figure>
                            {" "}
                            <img
                              src={require("../../assets/images/exclusions-iocn.svg")}
                              alt=""
                            />
                          </figure>
                         {Exclusion}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="tabmain_1">
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={400}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <h5 className="htitle">{key_feature}</h5>
                        <p>
                         {legal_liability}
                        </p>
                        <p>
                          {Cover_provided}
                        </p>
                        <p>
                           {additional_premium}
                        </p>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_2">
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={400}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <h5 className="htitle">{Coverage}</h5>

                        <p>
                           {insurance_covers}
                        </p>
                        <p>
                          <strong>
                            {Liability_Coverage}
                          </strong>{" "}
                          {protect_Directors}                       </p>
                        <p>
                          {Organisation_Reimbursement}                        </p>
                        <p>
                          It also covers the legal cost and expenses incurred by
                          the Insured within the Limit of Indemnity.
                        </p>
                        <p>
                          It covers past, present and future Directors along
                          with heirs, estates &amp; legal representatives and
                          spousal liabilities.
                        </p>
                        <p>
                          <strong>{Add_Covers}</strong>
                        </p>
                        <p>
                          {additional_premium1}
                        </p>
                        <p>{Outside_Directorship}</p>
                        <p>{Pollution_Defence} </p>
                        <p>{Communication_Cover}</p>
                        <p>{Legal_Expenses}</p>
                        <p>{Risk_Management_Extension}</p>
                        <p>{Auto_Inclusion}</p>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_3">
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={400}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <h5 className="htitle">{Exclusion}</h5>

                        <p>
                          {Fines_penalties}
                        </p>
                        <p>
                          {Deliberate_willful}
                        </p>
                        <p>{Seepage_Pollution}</p>
                        <p>{Criminal_Wrongs}</p>
                        <p>{Major_Shareholder}</p>
                        <p>{Improper_gains}</p>
                        <p>{Insured_Insured}</p>
                        <p>{Bodily_Injury}</p>
                        <p>{Pending_Act}</p>
                        <p>Intellectual Property Rights (IPR);</p>
                        <p>Future offering of securities;</p>
                        <p>Insider Trading &amp; Money Laundering.</p>
                        <p>Commission and Bribes</p>
                      </Scrollbars>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </Container>
          </section>

          <ProductRelatedResources productType={this.props.location.pathname.split('/')[1]} />

          {/*We are closer than you think, locate us: Main */}
          <section className="weAreWrapper weAreMomeWrapper">
            <Container>
              <h5 className="htitle text-center">{locate_us}</h5>
              {/***** Branch Locator Component */}
              <BranchLocator />
            </Container>
          </section>

          {/*Why SBI General Insurance? */}
          <WhySBIInsurance productType={this.props.location.pathname.split('/')[1]} />

          {/* FAQ Main */}
          <FAQ productType={this.props.location.pathname.split('/')[1]} />
        </BaseComponent>
      </div>
    );
  }
}

export default DirectorsAndOfficers;
