import React, { Component } from "react";
import { Nav, Row, Container, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Tab from "react-bootstrap/Tab";
import { Scrollbars } from 'react-custom-scrollbars';
import BaseComponent from "../BaseComponent";
import CallBackForm from "./CallBackForm";
import BranchLocator from "./BranchLocator";
import FAQ from "./FAQ";
import ProductRelatedResources from "./ProductRelatedResources";
import HelmetData from "../Common/HelmetData";
import WhySBIInsurance from "./WhySBIInsurance";
import WeProtectYouResources from "./WeProtectYouResources";

class SheepGoatInsurance extends Component {

  render() {
    return (
      <BaseComponent>
        {/* <Helmet> */}
        <HelmetData pageComponentType="SheepGoatInsurance" />
        {isMobile ? (
          <section className="topform product-header">
            <div className="insuTab">
              <h1>Sheep and Goat Insurance</h1>
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
              <div className="innerpageBanner row">
                  <div className="col-4">
                  <figure className="justify-content-between align-items-center">
                    <img src={require("../../assets/images/banners/rural.svg")} alt="" />
                  </figure>
                </div>
                <div className="col-8 d-flex align-items-center">
                  <div className="flex-column">
                <h1>Sheep and Goat Insurance</h1>
                {/* For Desktop */}
              </div>
              <div className="innerHeadBotomIcon">
                      <img
                        src={require("../../assets/images/banners/rural_bottom.svg")}
                        alt=""
                      />
                    </div>
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
                        <figure> <img src={require("../../assets/images/sum-insured-icon.svg")} alt="" /></figure>
                        Sum Insured                            </div>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="tabmain_1">
                    <h5 className="htitle">Key Feature</h5>
                    <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={360} hideTracksWhenNotNeeded className="bg-dark-scroll">
                      <p>Who can take this Policy The Proposer may be any individual/ Group of people/ any co operative body who are either owner or have bonafide interest in the protection of the animal.</p>
                      <p><strong>Policy Period</strong></p>
                      <p>Minimum 1 year to maximum of 3 years.</p>
                    </Scrollbars>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tabmain_2">
                    <h5 className="htitle">Coverage</h5>
                    <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={360} hideTracksWhenNotNeeded className="bg-dark-scroll">
                      <p><strong>Eligible Age Groups for Coverage</strong></p>
                      <p>Following age groups of animals are eligible to be covered under a Sheep &amp; Goat Insurance Policy</p>
                      <div className="tablecont">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Type of Animal</th>
                              <th>Age of Animal</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Sheep</td>
                              <td>4 Months to 7 Years</td>
                            </tr>
                            <tr>
                              <td>Goat</td>
                              <td>4 Months to 7 Years</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p><strong> What does the insurance Policy Cover </strong></p>
                      <p>Sheep &amp; Goat Insurance Policy covers the sudden and unforeseen Death of animal due to-</p>
                      <ul>
                        <li>Fire, Lightning, Explosion/Implosion</li>
                        <li>Aircraft Damage, Missile testing operations.</li>
                        <li>Riot, Strike.</li>
                        <li>Storm, Typhoon, Hurricane, Tornado, Flood and Inundation.</li>
                        <li>Earthquake</li>
                        <li>Famine</li>
                        <li>Surgical Operations</li>
                        <li>Accident</li>
                        <li>Disease contracted and occurred during the Policy period.</li>
                      </ul>
                    </Scrollbars>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tabmain_3">
                    <h5 className="htitle">Sum Insured</h5>
                    <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={360} hideTracksWhenNotNeeded className="bg-dark-scroll">
                      <p>An animal will be insured for its current market price. The market price of the animal to be insured will be assessed and agreed jointly by the beneficiary and authorized veterinary practitioner.</p>
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

        {/* FAQ Main */}
        <FAQ productType={this.props.location.pathname.split('/')[1]} />
      </BaseComponent>
    );
  }
}

export default SheepGoatInsurance;