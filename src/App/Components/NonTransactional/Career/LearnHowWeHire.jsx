import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import { Container } from "react-bootstrap";
import { isMobile } from "react-device-detect";

import BaseComponent from "../../BaseComponent";
import Axios from "../../../Services/Shared/Axios";
import HelmetData from "../../Common/HelmetData";

class LearnHowWeHire extends Component {
    constructor() {
        super();
        this.state = {
            pageData: [],
            showLoader: true
        };
    }

    getPageContent = () => {
        Axios({
            method: "get",
            url: "/pages?slug=learn-how-we-hire"
        })
            .then(res => {
                this.setState({
                    pageData: res.data,
                    showLoader: false
                });
            })
            .catch(err => {
                console.log(err);
                console.log("|Page Error|");
            });
    };

    componentDidMount() {
        this.getPageContent();
    }

    render() {
        const { pageData } = this.state;
        return (
            <>
                {/* <Helmet> */}
                <HelmetData pageComponentType="LearnHowWeHire" />
                {this.state.showLoader ? (
                    null
                ) : (
                        <BaseComponent pageTitle="learn-how-we-hire">

                            {/* Header Start */}
                            {isMobile ? (
                            <section className="topform product-header">
                                <div className="insuTab">
                                    <h1>Learn How We Hire</h1>
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
                                                <h1>Learn How We Hire</h1>
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
                                <section className="hire-steps-section clearfix">
                                    {ReactHtmlParser(pageData[0].description)}
                                </section>
                            </Container>
                        </BaseComponent>
                    )}
            </>
        )
    }
}

export default LearnHowWeHire;