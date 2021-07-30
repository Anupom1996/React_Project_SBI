import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Nav } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import * as AppConstant from "../../../AppConstant";

import carcompact from "../../../../assets/images/tab-moror-icon.svg";
import healthcare from "../../../../assets/images/tab-healgth-icon.svg";
//import house from "../../../../assets/images/tab-house-icon.svg";
import bus from "../../../../assets/images/tab-travel-icon.svg";
//import business from "../../../../assets/images/tab-business-icon.svg";
//import shagun from "../../../../assets/images/shagun.svg";
import accidenticon from "../../../../assets/images/personal-accident.svg";


import HomeHealthTab from "./HomeHealthTab";
import HomeMotorTab from "./HomeMotorTab";
import HomeHomeTab from "./HomeHomeTab";
import HomeTravelTab from "./HomeTravelTab";
import HomeIPATab from "./HomeIPATab";

class HomeMenuWeb extends Component {

    state = {
        show_popup: this.props.show_popup,
        startDate: new Date(),
    };


    openPopup = (e) => {
        this.setState({ show_popup: true });
    }

    handleClose = (e) => {
        console.log('bbb');
        this.setState({ show_popup: false });
    }

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    openInNewTab = slug => {
        let url = AppConstant.TRANSACTION_API_BASE_URL;
        if (slug !== "#") {
            let redirectUrl = '';
            if (slug.indexOf('http') !== -1) {
                redirectUrl = slug;
            } else {
                redirectUrl = url + slug;
            }
            var win = window.open(redirectUrl, '_blank');
            win.focus();
        }
        this.gtmClickBtnHandler('Shagun Buy')
    };

    gtmClickHandler = (productCategory) => {
        window.dataLayer = window.dataLayer || [];
        const data = {
            'event': "homepage_1_product_category_click",
            'pagetype': "Home Page",
            'product_category': productCategory
        };
        window.dataLayer.push(data);
    }

    gotoShagunDetail = () => {
        this.props.history.push('/shagun/');
    }

    gtmClickBtnHandler = (cta) => {
        window.dataLayer = window.dataLayer || [];        
        const data = {
            'event': "homepage_2_cta_click",
            'pagetype': "Home Page",
            'cta': cta
        };
        window.dataLayer.push(data);
    }
    componentDidMount() {
        let phrases = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;    
        this.setState({
        sbiHomeData:phrases
        });
    }

    render() {
        const {sbiHomeData} = this.state      
        let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
        //console.log(lang_name);
        let health, travel, motor;
        if (lang_name==='en') {
            health = sbiHomeData && sbiHomeData['HOME_TAB_HEALTH'] && sbiHomeData['HOME_TAB_HEALTH'].content_en;
           // home = sbiHomeData && sbiHomeData['HOME_TAB_HOME'] && sbiHomeData['HOME_TAB_HOME'].content_en;
            travel = sbiHomeData && sbiHomeData['HOME_TAB_TRAVEL'] && sbiHomeData['HOME_TAB_TRAVEL'].content_en;
            motor = sbiHomeData && sbiHomeData['HOME_TAB_MOTOR'] && sbiHomeData['HOME_TAB_MOTOR'].content_en;
        } else {
            health = sbiHomeData && sbiHomeData['HOME_TAB_HEALTH'] && sbiHomeData['HOME_TAB_HEALTH'].content_hi;
           // home = sbiHomeData && sbiHomeData['HOME_TAB_HOME'] && sbiHomeData['HOME_TAB_HOME'].content_hi;
            travel = sbiHomeData && sbiHomeData['HOME_TAB_TRAVEL'] && sbiHomeData['HOME_TAB_TRAVEL'].content_hi;
            motor = sbiHomeData && sbiHomeData['HOME_TAB_MOTOR'] && sbiHomeData['HOME_TAB_MOTOR'].content_hi;
        }
        return (
            <>
                <div className="insuTabForDesktop">
                    <Tab.Container defaultActiveKey="tabmain_2">

                        <Nav className="tabmain" variant="pills" >
                            <Nav.Item>
                                <Nav.Link eventKey="tabmain_2" onClick={() => this.gtmClickHandler("Health")}><div><figure><img alt="" src={healthcare} /></figure>{health?health:'health'}</div></Nav.Link>
                            </Nav.Item>
                            {/* <Nav.Item>
                                <Nav.Link eventKey="tabmain_3" onClick={() => this.gtmClickHandler("Home")}><div><figure><img alt="" src={house} /></figure>{home?home:'home'}</div></Nav.Link>
                            </Nav.Item> */}
                            <Nav.Item>
                                <Nav.Link eventKey="tabmain_4" onClick={() => this.gtmClickHandler("Travel")}><div><figure><img alt="" src={bus} /></figure>{travel?travel:'travel'}</div></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tabmain_1" onClick={() => this.gtmClickHandler("Motor")}><div><figure><img alt="" src={carcompact} /></figure>{motor?motor:'motor'}</div></Nav.Link>
                            </Nav.Item>
                            {/*<Nav.Item>
                                <Nav.Link eventKey="tabmain_5" onClick={() => this.gtmClickHandler("Shagun")}><div><figure><img alt="" src={shagun} /></figure>Shagun</div></Nav.Link>
                            </Nav.Item>*/}
                            {/* {<Nav.Item>
                                <Nav.Link eventKey="tabmain_6" onClick={() => this.gtmClickHandler("IPA")}><div><figure><img alt="" src={accidenticon} /></figure>IPA</div></Nav.Link>
                            </Nav.Item> } */}

                        </Nav>

                        <Tab.Content>
                            {/****** Component Used For Home Tab********/}
                            <HomeMotorTab />
                            {/****** Component Used For Health Tab********/}
                            <HomeHealthTab show_popup={this.state.open_popup} />
                            {/****** Component Used For Home Tab********/}
                            <HomeHomeTab />
                            {/****** Component Used For Travel Tab********/}
                            <HomeTravelTab show_popup={this.state.open_popup} />
                            {/* <HomeIPATab show_popup={this.state.open_popup} /> */}
                            <Tab.Pane eventKey="tabmain_5">
                                <Tab.Container defaultActiveKey="subtab_1">
                                    <Nav className="tabsub" variant="pills" >
                                        <Nav.Item>
                                            <Nav.Link eventKey="subtab_1" onClick={e => this.openInNewTab("/shagun/")} >Buy</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Link to={{pathname: "/shagun" }} onClick={()=>{this.gtmClickBtnHandler('Shagun Know More')}} className="nav-link">Know more</Link>
                                        </Nav.Item>
                                    </Nav>
                                </Tab.Container>
                            </Tab.Pane>
                        </Tab.Content>


                    </Tab.Container>
                </div>


            </>
        );
    }
}

export default HomeMenuWeb;