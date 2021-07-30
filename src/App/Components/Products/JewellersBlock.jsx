import React, { Component } from "react";
import { Nav, Container, Row, Col} from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Tab from "react-bootstrap/Tab";
import { Scrollbars } from 'react-custom-scrollbars';
import BaseComponent from "../BaseComponent";
import BranchLocator from "./BranchLocator";
import FAQ from "./FAQ";
import ProductRelatedResources from "./ProductRelatedResources";
import HelmetData from "../Common/HelmetData";
import WhySBIInsurance from "./WhySBIInsurance";
import CallBackForm from "./CallBackForm";
import WeProtectYouResources from "./WeProtectYouResources";

class JewellersBlock extends Component {

  render() {
    return (
      <BaseComponent>
        {/* <Helmet> */}
        <HelmetData pageComponentType="JewellersBlock" />
        {isMobile ? (
          <section className="topform product-header">
            <div className="insuTab">
              <h1>Jeweller's Block</h1>
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
                <h1>Jeweller's Block</h1>
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
                        <figure> <img src={require("../../assets/images/exclusions-iocn.svg")} alt="" /></figure>
                        Exclusion
                            </div>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="tabmain_1">
                    <h5 className="htitle">Key Feature</h5>
                    <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={260} hideTracksWhenNotNeeded className="bg-dark-scroll">
                      <p>This Policy has been specially devised for Jewellers and Diamontaires</p>
                      <div className="tablecont">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Section</th>
                              <th>Subject Matter</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Section I: On Premises (Compulsory</td>
                              <td>
                                Insured’s property comprising of jewellery, gold and silver ornaments or plates/bars ,pearls, precious and semi precious stones, Currency notes and cash and any other similar  contents pertaining to Insured’s business whilst kept and lying in the insured premises, bank lockers, private lockers by –
                                <ul>
                                  <li>Fire</li>
                                  <li>Explosion</li>
                                  <li>Lightning</li>
                                  <li>Riot, strike and malicious damage</li>
                                  <li>Earthquake, including flood or overflow of the sea, lakes, reservoirs and rivers and/or landslide/rockslide resulting there from</li>
                                  <li>Loss, destruction or damage directly caused by storm, cyclone, typhoon, tempest, hurricane, tornado, flood or inundation.</li>
                                  <li>Terrorist attack</li>
                                  <li>Burglary, housebreaking, theft, hold-up, robbery.</li>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <td>Section II: In Transit</td>
                              <td>All Risk cover for Insured’s property excluding cash and currency as described in Section I above whilst in transit anywhere in India by angadias, registered parcel post and air freight can also be covered, if value declared to the airlines.</td>
                            </tr>
                            <tr>
                              <td>Section III:  Custody of Insured & Others</td>
                              <td>Insured’s property as described in Section I above excluding Cash and Currency Notes, whilst in custody of Insured and his employees and/ or in custody of persons not in Insured’s regular employment such as brokers, agents, cutters, sorters or goldsmith by perils listed under section I and not otherwise excluded.</td>
                            </tr>
                            <tr>
                              <td>Section IV: Building, Furniture, Fixtures and Fittings</td>
                              <td>Loss and/or damage to the Building, Furniture ,Fixtures, Fittings, Safes, Electrical Installations, other equipments and appliances used for trade purposes whilst kept /lying and/or installed at the premises insured under the policy by perils listed under section I.</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p><strong>Risk feature adjustments available</strong></p>
                      <p><strong>Good feature adjustment</strong> Good feature adjustment can be allowed only on the premium under Section I specified in the Policy where the premises have built in vaults, burglar alarms, watchmen etc.-</p>
                      <p><strong>Voluntary deductible adjustments (Applicable to Section I & III) </strong>- Voluntary deductible adjustments can be allowed, if Insured opts for voluntary higher deductible.</p>
                      <p><strong>Claim experience adjustment –</strong>Adjustment can be applied based on the claims experience of client.</p>
                    </Scrollbars>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tabmain_2">
                    <h5 className="htitle">Coverage</h5>
                    <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={260} hideTracksWhenNotNeeded className="bg-dark-scroll">
                      <p><strong>Section I :</strong> On Premises (Compulsory) -  Insured’s property comprising of jewellery, gold and silver ornaments or plates/bars ,pearls, precious and semi precious stones, Currency notes and cash and any other similar  contents pertaining to Insured’s business whilst kept and lying in the insured premises, bank lockers, private lockers by –</p>
                      <ul>
                        <li>Fire</li>
                        <li>Explosion</li>
                        <li>Lightning</li>
                        <li>Riot, Strike and Malicious Damage</li>
                        <li>Earthquake, including flood or overflow of the sea, lakes, reservoirs and rivers and/or landslide/rockslide resulting there from</li>
                        <li>Loss, destruction or damage directly caused by storm, cyclone, typhoon, tempest, hurricane, tornado, flood or inundation.</li>
                        <li>Terrorist attack</li>
                        <li>Burglary, housebreaking, theft, hold-up, robbery</li>
                      </ul>
                      <p><strong>Section II :</strong> In Transit - All Risk cover for Insured’s property excluding cash and currency as described in Section I above whilst in transit anywhere in India by Angadias, Registered Parcel Post and Air Freight can also be covered, if value declared to the Airlines.</p>
                      <p><strong>Section III :</strong> Custody of Insured & Others - Insured’s property as described in Section I above excluding Cash and Currency Notes, whilst in custody of Insured and his employees and/ or in custody of persons not in Insured’s regular employment such as brokers, agents, cutters, sorters or goldsmith by perils listed under section I and not otherwise excluded.</p>
                      <p><strong>Section IV :</strong> Building, Furniture, Fixtures and Fittings - Loss and/or damage to the Building and Furniture ,Fixtures, Fittings, Safes, Electrical Installations, other equipments and appliances used for trade purposes whilst kept /lying and/or installed at the premises insured under the policy by perils listed under section I.</p>
                      <p><strong>Add on– Following add on covers can be provided in Jeweller’s Block Insurance Policy – </strong></p>
                      <p>Escalation - Insured’s stocks excluding cash and currency as described in Section I,III and IV can be escalated on pro rata basis up to 25% by charging additional premium.</p>
                      <p><strong>Exhibition cover  -</strong></p>
                      <p> Coverage of Section III under the Policy can be extended to cover the loss of or damage to the insured property during any exhibition</p>
                    </Scrollbars>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tabmain_3">
                    <h5 className="htitle">Exclusion</h5>
                    <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={260} hideTracksWhenNotNeeded className="bg-dark-scroll">
                      <ul>
                        <li>Loss of and/or damage to the property insured from any process of cleaning, repairing or restoring.</li>
                        <li>Property missing at stock taking and mysterious circumstances/disappearance or unexplained reasons in respect of which no claim has been previously notified.</li>
                        <li>Loss of and/or damage to the property hereby insured whilst at any exhibition.</li>
                        <li>Theft or disappearance of property from vehicles which are left unoccupied.</li>
                        <li>Depreciation gradual deterioration, wear and tear, moth, vermin and mildew.</li>
                        <li>Burglary where Insured’s family members or employees are involved.</li>
                        <li>Loss or damage arising from detention, confiscation, nationalisation, requisition, occupation or willful destruction by or under the order of the government or any public or local authority.</li>
                        <li>Loss or damage to property insured whilst in window display at night or whilst kept out of safes after business hours.</li>
                        <li>Any consequential loss or damage including legal liability and delay.</li>
                        <li>Loss of and/or damage to the property hereby insured whilst the same is lying in kutcha construction.</li>
                      </ul>
                      <p>War, invasion, acts of foreign enemy, hostilities (whether war be declared or not), civil war, rebellion, revolution, insurrection, military or usurped power, martial law</p>
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

export default JewellersBlock;