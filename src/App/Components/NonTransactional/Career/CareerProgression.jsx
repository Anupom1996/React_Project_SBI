import React, { Component } from "react";
import { Accordion, Card, Button, Container } from "react-bootstrap";
import { isMobile } from "react-device-detect";

import BaseComponent from "../../BaseComponent";
import Axios from "../../../Services/Shared/Axios";
import ReactHtmlParser from "react-html-parser";
import HelmetData from "../../Common/HelmetData";

class CareerProgression extends Component {
    constructor() {
        super();

        this.state = {
            pageData: [],
            showLoader: true
        };
    }

    toggleAccordianBtn = (e) => {
        let classAccord = e.target.className;
        let els = document.getElementsByClassName('accordianBtn btn btn-link');
        if (els) {
            while (els[0]) {
                els[0].classList.remove('accordianBtn')
            }
        }
        if (classAccord.indexOf('accordianBtn') > -1) {
            e.target.className = 'btn btn-link';
        } else {
            e.target.className = 'accordianBtn btn btn-link';
        }
    }

    getPageContent = () => {
        Axios({
            method: "get",
            url: "/careerprogressions"
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
                    <BaseComponent>
                        {/* <Helmet> */}
                        <HelmetData pageComponentType="CareerProgression" />
                        {/* Header Start */}
                        {isMobile ? (
                            <section className="topform product-header">
                                <div className="insuTab">
                                    <h1>Grow With Us</h1>
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
                                            <h1>Grow With Us</h1>
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
                                <section className="career-section">
                                    <div className="faqContent">
                                        <h2> Career Progression</h2>
                                        <div className="faQinsuranceMain">
                                            <Accordion defaultActiveKey={0}>
                                                {pageData.map((item, i) => {
                                                    return (
                                                        <Card key={i}>
                                                            <Accordion.Toggle as={Button} variant="link" eventKey={i} onClick={(e) => this.toggleAccordianBtn(e)} className={i === 0 ? 'accordianBtn' : ''} >
                                                                {item.Title}
                                                            </Accordion.Toggle>
                                                            <Accordion.Collapse eventKey={i}>
                                                                <Card.Body>
                                                                    <div>{ReactHtmlParser(item.Description)}</div>
                                                                </Card.Body>
                                                            </Accordion.Collapse>
                                                        </Card>
                                                    )
                                                })}
                                            </Accordion>
                                        </div>
                                    </div>
                                </section>
                            </Container>
                        ) : (
                                <p className="text-center">No record found!</p>
                            )}
                    </BaseComponent>
                ) : (
                        null
                    )
                }
            </>
        );
    }
}

export default CareerProgression;
