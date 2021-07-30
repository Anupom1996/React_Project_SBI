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
import ReactHtmlParser from 'react-html-parser';
class StandardFireAndSpecialPerilsInsurances extends Component {

  render() {
    let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let key_feature, Coverage, locate_us, Exclusion, Sum_Insured, Standard_Fire_Perils,
      Indemnity_market, Optional_benefit, Multiple_options, unique_features, perils_policy, Named_exclusions, Standard_cover_across,
      covers_assets, Fire, Lightning, Explosion_Implosion, Aircraft_Damage, Malicious_Damages, Impact_damage, Storm_Tempest,
      Subsidence_Landslide, Missile_Testing, Bush_Fire, Bursting_overflowing, Leakage_Automatic, Further_payment, Architects_Surveyors,
      Debris_Removal, Deterioration_Stock, Forest_Fire, Impact_Damage, Spontaneous_combustion, Omission_insure, Earthquake_Fire,
      Spoilage_Material, Leakage_Contamination, Loss_Rent, Alternative_Accommodation, StartUp_Expenses, Terrorism_Cover,
      exclusions_Policy, Arising_Excess, war_perils, Nuclear_risks, Pollution_contamination, High_items, Stocks_inside, Damage_equipment,
      incurred_Architects, incurred_removal, Loss_of_earnings, Spoilage_of_material, Loss_by_theft, Earthquake_volcanic, Property_premises,
      depreciated_cost, Heading_Mobile_Version

      ;
    if (lang_name === 'en') {
      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_en;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT11'].content_en;
      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'] &&
        sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'].content_en;
      Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'].content_en;
      Sum_Insured = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT16'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT16'].content_en;
      Standard_Fire_Perils = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT1'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT1'].content_en;
      Indemnity_market = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT2'].content_en;
      Optional_benefit = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT3'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT3'].content_en;
      Multiple_options = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT4'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT4'].content_en;
      unique_features = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT5'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT5'].content_en;
      perils_policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT6'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT6'].content_en;
      Named_exclusions = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT7'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT7'].content_en;
      Standard_cover_across = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT8'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT8'].content_en;
      covers_assets = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT9'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT9'].content_en;
      Fire = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT10'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT10'].content_en;
      Lightning = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT11'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT11'].content_en;
      Explosion_Implosion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT12'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT12'].content_en;
      Aircraft_Damage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT13'].content_en;
      Malicious_Damages = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT14'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT14'].content_en;
      Storm_Tempest = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT15'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT15'].content_en;
      Impact_damage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT16'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT16'].content_en;
      Subsidence_Landslide = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT17'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT17'].content_en;
      Missile_Testing = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT18'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT18'].content_en;
      Bush_Fire = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT19'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT19'].content_en;
      Bursting_overflowing = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT20'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT20'].content_en;
      Leakage_Automatic = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT21'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT21'].content_en;
      Further_payment = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT22'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT22'].content_en;
      Architects_Surveyors = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT23'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT23'].content_en;
      Debris_Removal = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT24'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT24'].content_en;
      Deterioration_Stock = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT25'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT25'].content_en;
      Forest_Fire = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT26'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT26'].content_en;
      Impact_Damage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT27'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT27'].content_en;
      Spontaneous_combustion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT28'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT28'].content_en;
      Omission_insure = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT29'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT29'].content_en;
      Earthquake_Fire = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT30'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT30'].content_en;
      Spoilage_Material = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT31'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT31'].content_en;
      Leakage_Contamination = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT32'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT32'].content_en;
      Loss_Rent = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT33'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT33'].content_en;
      Alternative_Accommodation = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT34'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT34'].content_en;
      StartUp_Expenses = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT35'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT35'].content_en;
      Terrorism_Cover = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT36'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT36'].content_en;
      exclusions_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT37'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT37'].content_en;
      Arising_Excess = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT38'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT38'].content_en;
      war_perils = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT39'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT39'].content_en;
      Nuclear_risks = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT40'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT40'].content_en;
      Pollution_contamination = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT41'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT41'].content_en;
      High_items = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT42'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT42'].content_en;
      Stocks_inside = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT43'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT43'].content_en;
      Damage_equipment = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT44'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT44'].content_en;
      incurred_Architects = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT45'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT45'].content_en;
      incurred_removal = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT46'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT46'].content_en;
      Loss_of_earnings = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT47'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT47'].content_en;
      Spoilage_of_material = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT48'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT48'].content_en;
      Loss_by_theft = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT49'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT49'].content_en;
      Earthquake_volcanic = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT50'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT50'].content_en;
      Property_premises = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT51'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT51'].content_en;
      depreciated_cost = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT52'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT52'].content_en;
      Heading_Mobile_Version = sbiHomeData && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'] && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'].content_en;


    }
    else {
      key_feature = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_hi;
      Coverage = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'] && sbiHomeData['PRODUCTS_RETAIL_COVERAGE'].content_hi;
      locate_us = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'] &&
        sbiHomeData['PRODUCTS_CORPORATE_PLATE_TEXT25'].content_hi;
      Exclusion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT13'].content_hi;
      Sum_Insured = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT16'] && sbiHomeData['PRODUCTS_CORPORATE_HEALTH_TEXT16'].content_hi;
      Standard_Fire_Perils = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT1'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT1'].content_hi;
      Indemnity_market = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT2'].content_hi;
      Optional_benefit = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT3'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT3'].content_hi;
      Multiple_options = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT4'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT4'].content_hi;
      unique_features = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT5'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT5'].content_hi;
      perils_policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT6'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT6'].content_hi;
      Named_exclusions = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT7'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT7'].content_hi;
      Standard_cover_across = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT8'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT8'].content_hi;
      covers_assets = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT9'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT9'].content_hi;
      Fire = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT10'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT10'].content_hi;
      Lightning = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT11'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT11'].content_hi;
      Explosion_Implosion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT12'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT12'].content_hi;
      Aircraft_Damage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT13'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT13'].content_hi;
      Malicious_Damages = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT14'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT14'].content_hi;
      Storm_Tempest = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT15'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT15'].content_hi;
      Impact_damage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT16'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT16'].content_hi;
      Subsidence_Landslide = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT17'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT17'].content_hi;
      Missile_Testing = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT18'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT18'].content_hi;
      Bush_Fire = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT19'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT19'].content_hi;
      Bursting_overflowing = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT20'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT20'].content_hi;
      Leakage_Automatic = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT21'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT21'].content_hi;
      Further_payment = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT22'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT22'].content_hi;
      Architects_Surveyors = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT23'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT23'].content_hi;
      Debris_Removal = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT24'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT24'].content_hi;
      Deterioration_Stock = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT25'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT25'].content_hi;
      Forest_Fire = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT26'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT26'].content_hi;
      Impact_Damage = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT27'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT27'].content_hi;
      Spontaneous_combustion = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT28'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT28'].content_hi;
      Omission_insure = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT29'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT29'].content_hi;
      Earthquake_Fire = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT30'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT30'].content_hi;
      Spoilage_Material = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT31'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT31'].content_hi;
      Leakage_Contamination = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT32'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT32'].content_hi;
      Loss_Rent = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT33'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT33'].content_hi;
      Alternative_Accommodation = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT34'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT34'].content_hi;
      StartUp_Expenses = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT35'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT35'].content_hi;
      Terrorism_Cover = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT36'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT36'].content_hi;
      exclusions_Policy = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT37'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT37'].content_hi;
      Arising_Excess = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT38'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT38'].content_hi;
      war_perils = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT39'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT39'].content_hi;
      Nuclear_risks = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT40'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT40'].content_hi;
      Pollution_contamination = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT41'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT41'].content_hi;
      High_items = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT42'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT42'].content_hi;
      Stocks_inside = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT43'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT43'].content_hi;
      Damage_equipment = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT44'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT44'].content_hi;
      incurred_Architects = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT45'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT45'].content_hi;
      incurred_removal = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT46'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT46'].content_hi;
      Loss_of_earnings = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT47'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT47'].content_hi;
      Spoilage_of_material = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT48'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT48'].content_hi;
      Loss_by_theft = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT49'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT49'].content_hi;
      Earthquake_volcanic = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT50'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT50'].content_hi;
      Property_premises = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT51'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT51'].content_hi;
      depreciated_cost = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT52'] && sbiHomeData['PRODUCTS_CORPORATE_FITE_TEXT52'].content_hi;
      Heading_Mobile_Version = sbiHomeData && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'] && sbiHomeData['CORPORATE_HEALTH_MOBILE_VERSION_HEADING'].content_hi;



    }
    return (
      <div>
        <BaseComponent>
          {/* <Helmet> */}
          <HelmetData pageComponentType="StandardFireAndSpecialPerilsInsurances" />
          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>{Standard_Fire_Perils}</h1>
                <div className="healgth-list">
                  {ReactHtmlParser(Heading_Mobile_Version)}
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
                    <h1>{Standard_Fire_Perils}</h1>
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
                            <img src={require("../../assets/images/key-feature-icon.svg")} alt="" />
                          </figure>
                          {key_feature}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_2">
                        <div>
                          <figure>
                            <img src={require("../../assets/images/coverage-icon.svg")} alt="" />
                          </figure>
                          {Coverage}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_3">
                        <div>
                          <figure>
                            <img src={require("../../assets/images/exclusions-iocn.svg")} alt="" />
                          </figure>
                          {Exclusion}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tabmain_4">
                        <div>
                          <figure>
                            <img src={require("../../assets/images/sum-insured-icon.svg")} alt="" />
                          </figure>
                          {Sum_Insured}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="tabmain_1">
                      <h5 className="htitle">{key_feature}</h5>
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={460}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <ul>
                          <li>
                            {Indemnity_market}
                          </li>
                          <li>
                            {Optional_benefit}                           </li>
                          <li>
                            {Multiple_options}
                          </li>
                          <li>
                            {unique_features}                          </li>
                          <li>{perils_policy}</li>
                          <li>{Named_exclusions}</li>
                          <li>
                            {Standard_cover_across}
                          </li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_2">
                      <h5 className="htitle">{Coverage}</h5>
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={460}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <ul>
                          <li>
                            {covers_assets}
                          </li>
                          <li>{Fire}</li>
                          <li>{Lightning}</li>
                          <li>{Explosion_Implosion}</li>
                          <li>{Aircraft_Damage}</li>
                          <li> {Malicious_Damages} </li>
                          <li>
                            {Storm_Tempest}
                          </li>
                          <li>{Impact_damage}</li>
                          <li>{Subsidence_Landslide}</li>
                          <li>{Missile_Testing} </li>
                          <li>{Bush_Fire}</li>
                          <li>
                            {Bursting_overflowing}
                          </li>
                          <li>
                            {Leakage_Automatic}
                          </li>
                          <li>
                            {Further_payment}
                          </li>
                          <li>
                            {Architects_Surveyors}
                          </li>
                          <li>
                            {Debris_Removal}
                          </li>
                          <li>{Deterioration_Stock}</li>
                          <li>{Forest_Fire}</li>
                          <li>{Impact_Damage}</li>
                          <li>{Spontaneous_combustion}</li>
                          <li>
                            {Omission_insure}
                          </li>
                          <li>{Earthquake_Fire}</li>
                          <li>{Spoilage_Material}</li>
                          <li>{Leakage_Contamination} </li>
                          <li>{Loss_Rent}</li>
                          <li>{Alternative_Accommodation}</li>
                          <li>{StartUp_Expenses}</li>
                          <li>{Terrorism_Cover}</li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_3">
                      <h5 className="htitle">{Exclusion}</h5>
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={460}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <ul>
                          <li>
                            {exclusions_Policy}                          </li>
                          <li>{Arising_Excess}</li>
                          <li>{war_perils}</li>
                          <li>{Nuclear_risks}</li>
                          <li>
                            {Pollution_contamination}
                          </li>
                          <li>
                            {High_items}
                          </li>
                          <li>{Stocks_inside}</li>
                          <li>
                            {Damage_equipment}
                          </li>
                          <li>
                            {incurred_Architects}
                          </li>
                          <li>
                            {incurred_removal}
                          </li>
                          <li>
                            {Loss_of_earnings}
                          </li>
                          <li>
                            {Spoilage_of_material}
                          </li>
                          <li>
                            {Loss_by_theft}
                          </li>
                          <li>{Earthquake_volcanic}</li>
                          <li>
                            {Property_premises}
                          </li>
                        </ul>
                      </Scrollbars>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tabmain_4">
                      <h5 className="htitle">{Sum_Insured}</h5>
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={460}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <ul>
                          <p>
                            {depreciated_cost}
                          </p>
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

export default StandardFireAndSpecialPerilsInsurances;
