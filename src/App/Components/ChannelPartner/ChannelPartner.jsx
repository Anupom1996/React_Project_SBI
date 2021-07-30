import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import BaseComponent from "../BaseComponent";
import { Container } from "react-bootstrap";
import HelmetData from "../Common/HelmetData";

class ChannelPartner extends Component {

    gtmClickHandler = (eventName,pageType, clickText) => {
        const data = {
            'event': eventName,
            'pagetype': pageType,
            'click_text': clickText
        };
        window.dataLayer.push(data);
    }

    render() {
        return (
            <>
                {/* <Helmet> */}
                <HelmetData pageComponentType="ChannelPartner" />

                <BaseComponent>
                    {/* Header Start */}
                    {isMobile ? (
                        <section className="topform product-header">
                            <div className="insuTab">
                                <h1>Channel Partners</h1>

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
                                     </div>
                                     <div className="col-8 d-flex align-items-center">
                    <div className="flex-column">
                                    <h1>Channel Partners</h1>
                                    {/* For Desktop */}
                                </div>
                                </div>
                                </div>
                            </section>
                        )}
                    {/* Header End */}

                    {/*  Body Content Start */}
                    <Container className="channelPartner">

                        <div className="row equal">
                            <div className="col-sm-4 d-flex pb-3">
                                <a className="card" onClick={()=>this.gtmClickHandler("channel_partner_login_page_1_icon_menu_click","channel_partner_login_page","Break-In Inspection Module")} href="https://sso.sbigeneral.in/oamsso-bin/login.pl?resource_url=https%3A%2F%2Fsecure.sbigeneral.in%252FSurveyor" target="_blank" rel="noopener noreferrer" >
                                    <figure><img src={require("../../assets/images/inspection.svg")} alt="" /></figure>
                                    <span>Break-In Inspection Module</span>
                                </a>
                            </div>
                            <div className="col-sm-4 d-flex pb-3">
                                <a onClick={()=>this.gtmClickHandler("channel_partner_login_page_1_icon_menu_click","channel_partner_login_page","IMD Portal")} className="card" href="https://imd.sbigeneral.in/" target="_blank" rel="noopener noreferrer">
                                    <figure><img src={require("../../assets/images/web-site.svg")} alt="" /></figure>
                                    <span>IMD Portal</span>
                                </a>
                            </div>
                            <div className="col-sm-4 d-flex pb-3">
                                <a onClick={()=>this.gtmClickHandler("channel_partner_login_page_1_icon_menu_click","channel_partner_login_page","Surveyor Upload & Online Claim Assessment")} className="card" href="https://sso.sbigeneral.in/oamsso-bin/login.pl?resource_url=https%3A%2F%2Fsecure.sbigeneral.in%252FSurveyors%252Ffaces%252FsurveyorLandingPage%3FSource%253DMotorSurveyor" target="_blank" rel="noopener noreferrer">
                                    <figure><img src={require("../../assets/images/icon-claim-intimation.svg")} alt="" /></figure>
                                    <span>Surveyor Upload & Online Claim Assessment </span>
                                </a>
                            </div>
                            {/* <div className="col-sm-4 d-flex pb-3">
                                <a onClick={()=>this.gtmClickHandler("channel_partner_login_page_1_icon_menu_click","channel_partner_login_page","SBI General Employees")} className="card" href="https://sso.sbigeneral.in/oamsso-bin/login.pl?resource_url=https%3A%2F%2Fsecure.sbigeneral.in%252FExtranetEmployee" target="_blank" rel="noopener noreferrer">
                                    <figure><img src={require("../../assets/images/teamIcon.svg")} alt="" /></figure>
                                    <span>SBI General Employees</span>
                                </a>
                            </div> */}
                            <div className="col-sm-4 d-flex pb-3">
                                <a onClick={()=>this.gtmClickHandler("channel_partner_login_page_1_icon_menu_click","channel_partner_login_page","Surveyor Non-Motor Document Upload")} className="card" href="https://sso.sbigeneral.in/oamsso-bin/login.pl?resource_url=https%3A%2F%2Fsecure.sbigeneral.in%252FSurveyors%252Ffaces%252FsurveyorLandingPage%3FSource%253DNonMotorSurveyor" target="_blank" rel="noopener noreferrer">
                                    <figure><img src={require("../../assets/images/document-upload.svg")} alt="" /></figure>
                                    <span>Surveyor Non-Motor Document Upload</span>
                                </a>
                            </div>
                            <div className="col-sm-4 d-flex pb-3">
                                <a onClick={()=>this.gtmClickHandler("channel_partner_login_page_1_icon_menu_click","channel_partner_login_page","Surveyor Garage Assessment")} className="card" href="https://sso.sbigeneral.in/oamsso-bin/login.pl?resource_url=https%3A%2F%2Fsecure.sbigeneral.in%252FSurveyors%252Ffaces%252FsurveyorLandingPage%3FSource%253DGarage" target="_blank" rel="noopener noreferrer">
                                    <figure><img src={require("../../assets/images/icon-garage.svg")} alt="" /></figure>
                                    <span>Surveyor Garage Assessment</span>
                                </a>
                            </div>
                        </div>
                    </Container>
                    {/*  Body Content End */}


                </BaseComponent>
            </>
        );
    }
}

export default ChannelPartner;