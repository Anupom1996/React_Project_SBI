import React, { Component } from "react";
import { Row, Container, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import ReactHtmlParser from "react-html-parser";

import BaseComponent from "../../BaseComponent";
import Axios from "../../../Services/Shared/Axios";
import * as AppConstant from "../../AppConstant";
import HelmetData from "../../Common/HelmetData";

class OurReach extends Component {

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
            url: "/ourreaches"
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
        let pageData = this.state.pageData;
        return (
            <>
                {this.state.showLoader === false ? (
                    <div>
                        <BaseComponent>
                            {/* <Helmet> */}
                            <HelmetData pageComponentType="OurReach" />

                            {/* Header Start */}
                            {isMobile ? (
                                <section className="topform product-header">
                                    <div className="insuTab">
                                        <h1>Our Reach</h1>
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
                                        <h1>Our Reach</h1>
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
                            {pageData.length > 0 ? (
                                <Container>
                                    <section className="our-reach-section">
                                        <Row>
                                            {pageData.map((item, i) => (
                                                <Col sm="6" xs="12" key={i}>
                                                    <div className="hLineMobile livesnfo align-items-center d-flex">
                                                        <figure >
                                                            <img src={AppConstant.IMG_BASE_URL + item.Image.url} alt={item.Image.name} />
                                                        </figure>
                                                        <div className="pl-2">
                                                            {ReactHtmlParser(item.Description)}
                                                        </div>
                                                    </div>
                                                </Col>
                                            ))}
                                        </Row>
                                    </section>
                                </Container>
                            ) : (
                                    <p className="text-center">No record found!</p>
                                )}
                        </BaseComponent>
                    </div>
                ) : (
                        null
                    )
                }
            </>
        );
    }
}

export default OurReach;