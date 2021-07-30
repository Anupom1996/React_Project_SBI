import React, { Component } from "react";
import { Col } from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import WeProtectYouResourcesData from "../../assets/WeProtectYouResourcesData.json";
import WeProtectYouResourcesDataHindi from "../../assets/WeProtectYouResourcesDataHindi.json";
import { withRouter } from 'react-router-dom';
import OwlCarousel from "react-owl-carousel";

class WeProtectYouResources extends Component {

    constructor(props) {
        super(props);

        let productSlug = this.props.location.pathname.split("/");
        let productKey = "";
        if (productSlug.length === 2) {
            productKey = productSlug[1];
            if (productKey === "group-health-insurance") {
                productKey = "group-health-insurance-C";
            }
        } else if (productSlug.length === 3) {
            productKey = productSlug[2];
        }

        this.state = {
            productRelatedData: this.getProductRelatedData(productKey),
            newarray: [],
            newarray1: [],
            obj: []

        };
        if (this.state.productRelatedData && this.state.productRelatedData.related_data && this.state.productRelatedData.related_data.length > 6) {

            this.state.productRelatedData.related_data.map(
                (item, index) => {

                    if (index <= 5) {
                        this.state.newarray.push({ item });
                        this.state.obj[0] = this.state.newarray;
                    }
                    else {
                        this.state.newarray1.push({ item });
                        this.state.obj[1] = this.state.newarray1;
                    }
                    return true;
                });
        }
        //console.log(this.state);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    getProductRelatedData = productType => {
        if (WeProtectYouResourcesData || WeProtectYouResourcesDataHindi) {	
            let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';	
            if (lang_name === 'hi') {	
                var weProtectYouData = WeProtectYouResourcesDataHindi;	
            } else {	
                 weProtectYouData = WeProtectYouResourcesData;	
            }	

            let index = weProtectYouData.findIndex(x => x.key === productType);
            if (index > -1) {
                return weProtectYouData[index];
            } else {
                return weProtectYouData[0];
            }
        }
        return null;
    };

    render() {
        let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
        let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
        let We_Protect_You;
        if (lang_name === 'en') {
            We_Protect_You = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_WE_PROTECT'] && sbiHomeData['PRODUCTS_LIABILITY_WE_PROTECT'].content_en;
        } else {
            We_Protect_You = sbiHomeData && sbiHomeData['PRODUCTS_LIABILITY_WE_PROTECT'] && sbiHomeData['PRODUCTS_LIABILITY_WE_PROTECT'].content_hi;
        }
        return (
            <>
                <Col xs="12" lg="8" className="weProtect">
                    <h5 className="htitle">{We_Protect_You}</h5>
                    <div className="weProtectSub color-purple">
                        {this.state.productRelatedData &&
                            this.state.productRelatedData.related_data &&
                            this.state.productRelatedData.related_data.length > 0 ? (
                                this.state.obj && this.state.obj.length > 0 ? (
                                    <OwlCarousel
                                        className="owl-theme"
                                        margin={5}
                                        nav={false}
                                        dots={true}
                                        items={1}
                                        dotsEach={true}

                                    >
                                        {this.state.obj.map(
                                            (item, index) => (
                                                <ul className="d-flex flex-wrap" key={index}>
                                                    <>
                                                        {item.map(
                                                            (element, index) => (
                                                                <li key={index}>
                                                                    <figure className="justify-content-between align-items-center">
                                                                        <img src={require(`../../assets/images/product-icons/we-protect-you/${element.item.resource_icon}`)} alt={element.item.resource_icon} />
                                                                    </figure>
                                                                    {ReactHtmlParser(element.item.label)}
                                                                </li>
                                                            ))
                                                        }
                                                    </>
                                                </ul>
                                            ))

                                        }
                                    </OwlCarousel>

                                ) :
                                    (<ul className="d-flex flex-wrap">
                                        <>
                                            {this.state.productRelatedData.related_data.map(
                                                (item, index) => (
                                                    <li key={index}>
                                                        <figure className="justify-content-between align-items-center">
                                                            <img src={require(`../../assets/images/product-icons/we-protect-you/${item.resource_icon}`)} alt={item.resource_icon} />
                                                        </figure>
                                                        {ReactHtmlParser(item.label)}
                                                    </li>
                                                ))
                                            }
                                        </>
                                    </ul>
                                    )
                            ) : (null)}
                        {/* <ul className="d-flex flex-wrap">
                                        
                                        <li>
                                            <figure className="justify-content-between align-items-center">
                                                <img src={require("../../assets/images/personal-accident-icon.svg")} alt="" />
                                            </figure>
                                            <p>Personal <span>Accident</span></p>
                                        </li>
                                        <li>
                                            <figure className="justify-content-between align-items-center">
                                                <img src={require("../../assets/images/zero-depreciation-icon.svg")} alt="" />
                                            </figure>
                                            <p>Zero <span>Depreciation</span></p>
                                        </li>
                                        <li>
                                            <figure className="justify-content-between align-items-center">
                                                <img src={require("../../assets/images/ncb-protection-icon.svg")} alt="" />
                                            </figure>
                                            <p>NCB <span>Protection</span></p>
                                        </li>
                                        <li>
                                            <figure className="justify-content-between align-items-center">
                                                <img src={require("../../assets/images/flexible-plan-icon.svg")} alt="" />
                                            </figure>
                                            <p>Return to <span>Invoice</span></p>
                                        </li> 
                                        <li>
                                            <figure className="justify-content-between align-items-center">
                                                <img src={require("../../assets/images/belongings-icon.svg")} alt="" />
                                            </figure>
                                            <p>Loss of Personal <span>Belongings</span></p>
                                        </li>
                                        <li>
                                            <figure className="justify-content-between align-items-center">
                                                <img src={require("../../assets/images/bi-fule-icon.svg")} alt="" />
                                            </figure>
                                            <p>Bi-Fuel <span>Kit</span></p>
                                        </li> 
                                    </ul> */}
                    </div>
                </Col>

            </>
        );
    }
}

export default withRouter(WeProtectYouResources);