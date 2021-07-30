import React, { Component } from 'react';
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import BaseComponent from '../../BaseComponent';
import { Container } from "react-bootstrap";
import Axios from '../../../Services/Shared/Axios';
import * as AppConstant from '../../AppConstant';
import HelmetData from '../../Common/HelmetData';
class ImportantLinks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageTitle: 'Important links',
            pageData: [],
            showLoader: true
        };
    }
    componentDidMount() {
        this.getPageContent();
    }

    getPageContent = () => {
        Axios({
            method: "get",
            url: "/importantlinks"
        })
            .then(res => {
                //console.log(res);
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

    render() {
        let pagedata = this.state.pageData.length ? this.state.pageData : [];
        return (
            <BaseComponent pageTitle="Important links">
                {/* <Helmet> */}
                <HelmetData pageComponentType="ImportantLinks" />
                {/* Header Start */}
                {isMobile ? (
                    <section className="topform product-header">
                        <div className="insuTab">
                            <h1>Important links</h1>
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
                                        <h1>{this.state.pageTitle}</h1>
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
                    <div className="cms-page-content">
                        <div className="importantlinks">
                            {this.state.showLoader ? (
                                null
                            ) : (
                                    <ul>
                                        {pagedata.map((item, index) => (
                                            <li key={index}>
                                                {item.redirect_link === null ? (
                                                    <a target="_blank" href={AppConstant.BASE_URL + item.attachment.url} rel="noopener noreferrer">{item.tittle}</a>
                                                    //<Link to={"#"} onClick={this.downloadurl.bind(this, item.attachment.url, item.attachment.name)}>{item.tittle}</Link>
                                                ) : (
                                                        <>
                                                            {item.link_type === "external" ? (
                                                                <a href={item.redirect_link} title={item.tittle} target="_blank" rel="noopener noreferrer">{item.tittle}</a>
                                                            ) : (
                                                                    <Link to={item.redirect_link} target="_blank" rel="noopener noreferrer" title={item.tittle}>{item.tittle}</Link>
                                                                )}
                                                        </>
                                                    )}
                                            </li>
                                            // <li><Link title="Citizen Charter" top="download-path/Citizen_Charter.pdf" target="_blank">Citizen Charter</Link></li>

                                        ))}
                                    </ul>
                                )}
                        </div>
                    </div>
                </Container>
            </BaseComponent>
        );
    }

    downloadurl = (downloadUrl, fileName) => {
        fetch(AppConstant.BASE_URL + downloadUrl).then(response => {
            response.blob().then(blob => {
                let url = window.URL.createObjectURL(blob);
                //console.log(url);
                let a = document.createElement("a");
                a.href = url;
                a.target = "_blank";
                a.download = fileName;
                a.click();
            });
        });
    }

}

export default ImportantLinks;