import React, { Component } from "react";
import { Nav, Row, Container, Col, Table } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Tab from "react-bootstrap/Tab";
import { Scrollbars } from 'react-custom-scrollbars';
import BaseComponent from "../BaseComponent";
import CallBackFormRetail from "./CallBackFormRetail";
import BranchLocator from "./BranchLocator";
import FAQ from "./FAQ";
import ProductRelatedResources from "./ProductRelatedResources";
import HelmetData from "../Common/HelmetData";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";
import RelatedProducts from "./RelatedProducts";

class LoanInsurance extends Component {

  state = {
    faqcategory: "",
    subcategoryList: []
  }

  render() {
    return (
      <BaseComponent>
        {/* <Helmet> */}
        <HelmetData pageComponentType="LoanInsurance" />
        {isMobile ? (
          <section className="topform product-header">
            <div className="insuTab">
              <h1>Loan Insurance Policy</h1>
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
                  <img
                        src={require("../../assets/images/retail-head-icon.svg")}
                        alt="Loan Insurance Policy"
                      />
                </figure>
                </div>
                <div className="col-8 d-flex align-items-center">
                  <div className="flex-column">
                    <h1>Loan Insurance Policy</h1>
                    {/* <div className="healgth-list">
                      <ul>
                        <li>Policy upto a period of 30 years</li>
                        <li>In-built coverage for earthquake</li>
                      </ul>
                    </div> */}
                  </div>
                  {/* For Desktop */}
                </div>
                <div className="innerHeadBotomIcon">
                      <img
                        src={require("../../assets/images/inner-banner-bottom-icon.svg")}
                        alt="Loan Insurance Policy"
                      />
                    </div>
              </div>
            </section>
          )
        }

        {/* We Protect you Main */}
        <section className="protectWrapper motor-protectWrapper innerPageSection">
          <Container>
            <Row className="rotectRow">
              <WeProtectYouResources productType={this.props.location.pathname.split('/')[1]} />
              <Col xs="12" lg="4" className="lookingFor">
                {/***** Call Back Form Component ****/}
                <CallBackFormRetail />
              </Col>
            </Row>
          </Container>
        </section>

        {/*Coverage Main */}
        <section className="coverageWrapper">

          <Container>
            <div className="coverageBase">
              <Tab.Container defaultActiveKey="tabmain_1">

                <Nav className="tabmainProduct" variant="pills" >
                  <Nav.Item>
                    <Nav.Link eventKey="tabmain_1">
                      <div>
                        <figure> <img src={require("../../assets/images/key-feature-icon.svg")} alt="" /></figure>
                        Key Feature
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tabmain_2">
                      <div>
                        <figure> <img src={require("../../assets/images/coverage-icon.svg")} alt="" /></figure>
                        Coverage
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tabmain_3">
                      <div>
                        <figure> <img src={require("../../assets/images/exclusions-iocn.svg")} alt="" /></figure>
                        General Exclusion
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tabmain_4">
                      <div>
                        <figure> <img src={require("../../assets/images/exclusions-specific-icon.svg")} alt="" /></figure>
                        Specific Exclusion
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="tabmain_1">

                    <h5 className="htitle">Key Feature</h5>
                    <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={510} hideTracksWhenNotNeeded className="bg-dark-scroll">
                      <ul>
                        <li>No medical check-up up to Sum Insured of Rs.1 Crore and/or age up to 55 years</li>
                        <li>Policy can be availed for maximum of three years benefitting the purse strings</li>
                        <li>Coverage for 13 critical illnesses, accidental death or permanent disablement and loss of job</li>
                        <li>Sum Insured available on fixed or reducing basis</li>
                      </ul>
                    </Scrollbars>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tabmain_2">

                    <h5 className="htitle">Coverage</h5>
                    <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={510} hideTracksWhenNotNeeded className="bg-dark-scroll">
                      <p>SBI General’s Loan Insurance Policy offers the following covers -</p>
                      <p>• Critical Illness  • Personal Accident  • Loss of employment</p>
                      <h5>Section I - Critical Illness</h5>
                      <p>Policy provides coverage against 13 critical illnesses listed below. Immediately on diagnosis of any one of them, benefit amount is paid subject to policy terms and conditions.</p>
                      <ul>
                        <li>Cancer</li>
                        <li>Kidney Failure (End Stage Renal Failure)</li>
                        <li>Primary Pulmonary Arterial Hypertension</li>
                        <li>Multiple Sclerosis</li>
                        <li>Major Organ Transplant</li>
                        <li>Coronary Artery Bypass Graft</li>
                        <li>Aorta Graft Surgery</li>
                        <li>Heart Valve Surgery</li>
                        <li>Stroke</li>
                        <li>Myocardial Infarction (First Heart Attack)</li>
                        <li>Coma</li>
                        <li>Total blindness</li>
                        <li>Paralysis</li>
                      </ul>
                      <h5>Section II - Personal Accident</h5>
                      <p>Policy pays for</p>
                      <ul>
                        <li>Accidental Death or</li>
                        <li>Permanent Total Disability</li>
                      </ul>
                      <Table striped bordered responsive >
                        <tbody>
                          <tr>
                            <td> Permanent Total Disablement</td>
                            <td>% of compensation</td>
                          </tr>
                          <tr>
                            <td>Loss of sight in both eyes</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>Actual loss by Physical Separation of both hands or both feet or one entire hand and one entire foot</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>Loss of use of both hands or both feet or of one hand and one foot without Physical Separation</td>
                            <td>100%</td>
                          </tr>
                        </tbody>
                      </Table>
                      <h5>Section III - Loss of Job</h5>
                      <p>Maximum of 3 EMI will be payable in the unfortunate event of temporary unemployment or dismissal or retrenchment</p>
                      <h5>Age eligibility:</h5>
                      <p>The minimum age of entry for the SBI General’s Loan Insurance Policy is 18 years and maximum age of entry is 60 years</p>
                      <h5>Tenure:</h5>
                      <p> SBI General’s Loan Insurance Policy is available for a maximum period of three years.</p>
                      <h5>Extent of compensation under Loan insurance Policy:</h5>
                      <p>If any of the contingencies occurs during the policy period, compensation will be provided as given below -</p>
                      <p>Death: Outstanding Loan Amount or Sum Insured respectively for reducing SI basis and Fixed Sum Insured</p>
                      <p>Accidental Permanent & Total Disability: Outstanding Loan Amount or Sum Insured respectively for reducing SI basis & Fixed Sum Insured</p>
                      <p>Critical Illness: Outstanding Loan Amount or Sum Insured respectively for reducing Sum Insured basis and Fixed Sum Insured</p>
                      <p>Loss of Job:Maximum 3 EMIs</p>
                    </Scrollbars>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tabmain_3">

                    <h5 className="htitle">General Exclusion</h5>
                    <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={510} hideTracksWhenNotNeeded className="bg-dark-scroll">
                      <ul>
                        <li>War, invasion; acts of terrorism, riot, strike , malicious damage</li>
                        <li>or such similar perils</li>
                        <li>Nuclear perils; ionising radiations</li>
                        <li>Drug abuse or alcoholism</li>
                        <li>Self inflicted injury, attempted suicide or suicide</li>
                        <li>HIV/AIDS</li>
                        <li>Consequential loss or indirect expenses</li>
                      </ul>
                    </Scrollbars>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tabmain_4">
                    <h5 className="htitle">Specific Exclusion</h5>
                    <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={510} hideTracksWhenNotNeeded className="bg-dark-scroll">

                      <h5>Section I- Critical Illness</h5>
                      <ul>
                        <li>Any pre-existing illness</li>
                        <li>Any critical illness discovered within 90 days of the policy</li>
                        <li>Self medication; treatment not administered by a doctor or which is not medically necessary</li>
                        <li>Congenital illness or defects and/or treatment administered for them</li>
                        <li>Hormone Replacement Therapy; contraceptive procedures</li>
                        <li>Gender change or cosmetic surgery or treatment/procedures associated with the same</li>
                        <li>Self medication; unauthorized treatment</li>
                      </ul>
                      <h5>Section II-Personal Accident</h5>
                      <ul>
                        <li>Payment under more than one category specified i.e Death or Permanent Total Displacement</li>
                        <li>Any infirmity/conditions existing before the inception of the policy</li>
                        <li>Persons learning to operate an aircraft or operating as crew or participating in adventure sports including winter sports, hazardous activities and the like</li>
                        <li>Death or permanent total disability arising out of illness</li>
                        <li>Venereal diseases or insanity</li>
                      </ul>
                      <h5>Section III-Loss of Job</h5>
                      <ul>
                        <li>Termination, dismissal, temporary suspension or retrenchment due to fraud or dishonesty, poor performance</li>
                        <li>Businessmen; persons who are self employed</li>
                        <li>Employees on casual, temporary or contractual basis</li>
                        <li>Unemployment due to resignation, retirement whether voluntary or otherwise</li>
                        <li>Unemployment at inception or arising within first 90 days of Inception</li>
                      </ul>
                    </Scrollbars>
                  </Tab.Pane>
                </Tab.Content>

              </Tab.Container>
            </div>
          </Container>
        </section>


        {/*Prospectus Main */}
        <ProductRelatedResources productType={this.props.location.pathname.split('/')[1]} />

        {/*We are closer than you think, locate us: Main */}
        <section className="weAreWrapper weAreMomeWrapper">
          <Container>
            <h5 className="htitle text-center">We are closer than you think, locate us:</h5>
            {/***** Branch Locator Component */}
            <BranchLocator />
          </Container>
        </section>

        {/*Why SBI General Insurance? */}
        <WhySBIInsurance productType={this.props.location.pathname.split('/')[1]} />

        {/*Related Products Main */}
        <RelatedProducts category="health" productType={this.props.location.pathname.split('/')[1]} />

        {/* FAQ Main */}
        <FAQ productType={this.props.location.pathname.split('/')[1]} />
      </BaseComponent>
    );
  }
}

export default LoanInsurance;