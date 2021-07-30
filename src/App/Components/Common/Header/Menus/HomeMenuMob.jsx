import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as AppConstant from "../../../AppConstant";


class HomeMenuMob extends Component {
    state = {
        startDate: new Date()
    };

    handleClose = (e) => {
        this.setState({ open_popup: false });
    }

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    handleToggleMenu = () => {
        if (document.body.classList.contains("openmenu")) {
            document.body.classList.remove("openmenu");
        } else {
            document.body.classList.add("openmenu");
        }
    };

    handleInsuranceToggleMenu = id => {
        let parentClass = document.getElementById(id).parentNode.className;
        let domNode = document.getElementsByClassName(parentClass)[0].childNodes;
        console.log(domNode);
        for (let i = 0; i < domNode.length; i++) {
            console.log('product: ', domNode[i]);
            domNode[i].classList.remove("insuAccorToggle");
        }
        var y = document.getElementById(id);
        if (y.classList) {
            y.classList.toggle("insuAccorToggle");
        } else {
            // For IE9
            var classes = y.className.split(" ");
            var j = classes.indexOf("insuAccorToggle");

            if (j >= 0) classes.splice(j, 1);
            else classes.push("insuAccorToggle");
            y.className = classes.join(" ");
        }
    };
    componentDidMount() {
        let phrases = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;    
        this.setState({
        sbiHomeData:phrases
        });
    }
    render() {
        const {sbiHomeData} = this.state      
        let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
        let health;
        let home;
        let travel;
        let motor;
        let buy;
        let renew;
        let claim;
        if (lang_name==='en') {
            health = sbiHomeData && sbiHomeData['HOME_TAB_HEALTH'] && sbiHomeData['HOME_TAB_HEALTH'].content_en;
            home = sbiHomeData && sbiHomeData['HOME_TAB_HOME'] && sbiHomeData['HOME_TAB_HOME'].content_en;
            travel = sbiHomeData && sbiHomeData['HOME_TAB_TRAVEL'] && sbiHomeData['HOME_TAB_TRAVEL'].content_en;
            motor = sbiHomeData && sbiHomeData['HOME_TAB_MOTOR'] && sbiHomeData['HOME_TAB_MOTOR'].content_en;
            buy = sbiHomeData && sbiHomeData['HOME_TAB_HEALTH_BUY'] && sbiHomeData['HOME_TAB_HEALTH_BUY'].content_en;
            renew = sbiHomeData && sbiHomeData['HOME_TAB_HELTH_RENEW'] && sbiHomeData['HOME_TAB_HELTH_RENEW'].content_en;
            claim = sbiHomeData && sbiHomeData['HOME_TAB_HEALTH_CLAIM'] && sbiHomeData['HOME_TAB_HEALTH_CLAIM'].content_en;
        } else {
            health = sbiHomeData && sbiHomeData['HOME_TAB_HEALTH'] && sbiHomeData['HOME_TAB_HEALTH'].content_hi;
            home = sbiHomeData && sbiHomeData['HOME_TAB_HOME'] && sbiHomeData['HOME_TAB_HOME'].content_hi;
            travel = sbiHomeData && sbiHomeData['HOME_TAB_TRAVEL'] && sbiHomeData['HOME_TAB_TRAVEL'].content_hi;
            motor = sbiHomeData && sbiHomeData['HOME_TAB_MOTOR'] && sbiHomeData['HOME_TAB_MOTOR'].content_hi;
            buy = sbiHomeData && sbiHomeData['HOME_TAB_HEALTH_BUY'] && sbiHomeData['HOME_TAB_HEALTH_BUY'].content_hi;
            renew = sbiHomeData && sbiHomeData['HOME_TAB_HELTH_RENEW'] && sbiHomeData['HOME_TAB_HELTH_RENEW'].content_hi;
            claim = sbiHomeData && sbiHomeData['HOME_TAB_HEALTH_CLAIM'] && sbiHomeData['HOME_TAB_HEALTH_CLAIM'].content_hi;
        }
        return (
            <>
                <div className="insuTabForMobile">
 <div onClick={this.handleInsuranceToggleMenu.bind(this, 'insuAccor02')} className="insuAccor d-flex align-items-center" id="insuAccor02">
                        <figure className="healthcareIcon">
                            {/*<img alt="" src={healthcare} className="forInactive" />
                            <img alt="" src={healthcareActive} className="forActive" />*/}
                        </figure>
                        <div className="contant">
                            <h4>{health}</h4>
                            <ul className="contentList">
                                <li><a href={AppConstant.TRANSACTION_API_BASE_URL + "/healthinsurance/display_page/type/arogya"} rel="noopener noreferrer" target="_blank">{buy}</a></li>
                                <li><a className="nav-link" href={AppConstant.HEALTH_POLICY_RENEWAL_BASE_URL} target="_blank" rel="noopener noreferrer" >{renew}</a></li>
                                <li><Link to={{
                                    pathname: "/claim/claims-intimation",
                                    state: { product_type: "health" }
                                }}>{claim}</Link></li>
                            </ul>
                        </div>
                        <div className="linkPanel"> <Link to={'#'}></Link></div>
                    </div>

                    {/*<div onClick={this.handleInsuranceToggleMenu.bind(this, 'insuAccor03')} className="insuAccor d-flex align-items-center" id="insuAccor03">
                        <figure>
                            <img alt="" src={house} className="forInactive" />
                            <img alt="" src={houseActive} className="forActive" />
                        </figure>
                        <div className="contant">
                            <h4>{home}</h4>
                            <ul className="contentList">
                                <li><a href={AppConstant.TRANSACTION_API_BASE_URL + "/simplehomeinsurance/display_mobile"} rel="noopener noreferrer" target="_blank">{buy}</a></li>
                                <li><Link to={{
                                    pathname: "/claim/claims-intimation",
                                    state: { product_type: "home" }
                                }}>{claim}</Link></li>
                            </ul>
                        </div>
                        <div className="linkPanel"> <Link to={'#'}></Link></div>
                    </div>*/}

                    <div onClick={this.handleInsuranceToggleMenu.bind(this, 'insuAccor04')} className="insuAccor d-flex align-items-center" id="insuAccor04">
                        <figure className="busIcon">
                            {/*<img alt="" src={bus} className="forInactive" />
                            <img alt="" src={busActive} className="forActive" />*/}
                        </figure>
                        <div className="contant">
                            <h4>{travel}</h4>
                            <ul className="contentList">
                                <li><a href={AppConstant.TRANSACTION_API_BASE_URL + "/travel/product"} rel="noopener noreferrer" target="_blank">{buy}</a></li>
                                <li><Link to={{
                                    pathname: "/claim/claims-intimation",
                                    state: { product_type: "travel" }
                                }}>{claim}</Link></li>
                            </ul>
                        </div>
                        <div className="linkPanel"> <Link to={'#'}></Link></div>
                    </div>
 
                    
                    <div onClick={this.handleInsuranceToggleMenu.bind(this, 'insuAccor01')} className="insuAccor d-flex align-items-center" id="insuAccor01">
                        <figure className="carcompactIcon">
                            {/*<img alt="" src={carcompact} className="forInactive" />
                            <img alt="" src={clear} className="forActive" />*/}
                        </figure>
                        <div className="contant">
                            <h4>{motor}</h4>
                            <ul className="contentList">
                                <li><a href={AppConstant.TRANSACTION_API_BASE_URL + "/PMCAR/GetQuote"} rel="noopener noreferrer" target="_blank">{buy}</a></li>
                                <li><a className="nav-link" href={AppConstant.MOTOR_POLICY_RENEWAL_BASE_URL} target="_blank" rel="noopener noreferrer" >{renew}</a></li>
                                <li><Link to={{
                                    pathname: "/claim/claims-intimation",
                                    state: {product_type: "motor"}
                                    }}>{claim}</Link></li>
                            </ul>
                        </div>
                        <div className="linkPanel"> <Link to={'#'}></Link></div>
                    </div>

                                 
                   

                   {/* <div onClick={this.handleInsuranceToggleMenu.bind(this, 'insuAccor05')} className="insuAccor d-flex align-items-center" id="insuAccor05">
                        <figure>
                            <img alt="" src={shagun} className="forInactive" />
                            <img alt="" src={shagunActive} className="forActive" />
                        </figure>
                        <div className="contant">
                            <h4>Shagun</h4>
                            <ul className="contentList">
                            <li><a href={AppConstant.TRANSACTION_API_BASE_URL + "/shagun/"} rel="noopener noreferrer" target="_blank">Buy</a></li>
                            <li><Link to={{pathname: "/shagun" }}>Know more</Link></li>
                            </ul>
                        </div>
                        <div className="linkPanel"> <Link to={"#"}></Link></div>
                    </div> */}
                </div>

            </>
        );
    };
}

export default HomeMenuMob;