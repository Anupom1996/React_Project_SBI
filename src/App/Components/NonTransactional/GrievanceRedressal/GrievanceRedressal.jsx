import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import BaseComponent from "../../BaseComponent";
import Axios from "../../../Services/Shared/Axios.js";
import { Accordion, Card, Button, Container, Table } from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import HelmetData from "../../Common/HelmetData";

class GrievanceRedressal extends Component {
    constructor() {
        super();
        this.state = {
            pageData: [],
            showLoader: true,
            officeData: []
        }
    }

    componentDidMount() {
        this.getPageContent();
        this.setState({
            showLoader: true
        });
        this.getOmbudsmanData();
    }

    getPageContent = () => {
        Axios({
            method: "get",
            url: '/pages?slug=grievance-redressal'
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
    }

    getOmbudsmanData = () => {

        Axios({
            method: "get",
            url: '/ombudsmanoffices'
        })
            .then(res => {
                this.setState({
                    officeData: res.data,
                    showLoader: false
                });
            })
            .catch(err => {
                console.log(err);
                console.log("|Page Error|");
            });
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

    render() {
        const { pageData } = this.state;
        let pageslug = pageData.length ? pageData[0].slug : null;
        let pagetitle = pageData.length ? pageData[0].title : null;
        let pagedescription = pageData.length ? pageData[0].description : null;
        return (
            <>
                {/* <Helmet> */}
                <HelmetData pageComponentType="GrievanceRedressal" />
                {this.state.showLoader ? (
                    null
                ) : (
                        <BaseComponent pageTitle={pageslug}>
                            {/* Header Start */}
                            {isMobile ? (
                                <section className="topform product-header">
                                    <div className="insuTab">
                                        <h1>{pagetitle}</h1>
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
                                                <h1>{pagetitle}</h1>
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
                                <section className="life-at-sbig-section">
                                    <div className="cms-page-content">
                                        {ReactHtmlParser(pagedescription)}
                                    </div>
                                </section>
                                <section>
                                    <div className="faqContent pt30">
                                        <h3>Insurance Ombudsman Offices</h3>
                                        <div className="faQinsuranceMain">
                                            <Accordion defaultActiveKey={0}>
                                                {this.state.officeData.map((item, i) => (
                                                    <Card key={i}>
                                                        <Accordion.Toggle as={Button} variant="link" eventKey={i} onClick={(e) => this.toggleAccordianBtn(e)} className={i === 0 ? 'accordianBtn' : ''} >
                                                            {item.Title}
                                                        </Accordion.Toggle>
                                                        <Accordion.Collapse eventKey={i}>
                                                            <Card.Body>
                                                                <Table className="grievance-redressal" responsive>
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Contact Details</th>
                                                                            <th>Jurisdiction</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>{ReactHtmlParser(item.contact_details)}</td>
                                                                            <td>{item.jurisdiction}</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </Card.Body>
                                                        </Accordion.Collapse>
                                                    </Card>
                                                ))}
                                            </Accordion>
                                        </div>
                                    </div>
                                </section>
                            </Container>

                        </BaseComponent>
                    )}
            </>
        );
    }
}

export default GrievanceRedressal;
