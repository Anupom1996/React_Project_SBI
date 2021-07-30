import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";

import BaseComponent from '../../BaseComponent';
import { Container } from "react-bootstrap";
import Axios from '../../../Services/Shared/Axios';
import * as AppConstant from '../../AppConstant';
import HelmetData from "../../Common/HelmetData";

class Tender extends Component {

    constructor() {
        super();

        this.state = {
            tenderData: [],
            showLoader: true,
            currentShowingTenderItem: 8,
            totalTenderItem: 0,
            totalPageCount: 0,
            currentPage: 1,
            startRange: 0
        };
    }

    componentDidMount() {
        this.getTenderList(0);
        this.getTotalPageCount();
    }

    getTotalPageCount() {
        const credentialJson = {
            "identifier": AppConstant.JWT_USER,
            "password": AppConstant.JWT_PASS
        };
        Axios({
            method: "post",
            url: '/auth/local',
            data: JSON.stringify(credentialJson),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                let current_date = new Date();
                let queryStr = "&start_date_lte=" + this.formatDate(current_date) + "&end_date_gte=" + this.formatDate(current_date) + "&type=Keep";
                const jwt_token = res.data.jwt;
                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + jwt_token
                };
                Axios({
                    method: "get",
                    url: `/tenders/count?_limit=${this.state.currentShowingTenderItem}&_sort=created_at:desc&_start=${this.state.startRange}` + queryStr,
                    headers: headers
                })
                    .then(res => {
                        const pageCount = Math.ceil(
                            res.data / this.state.currentShowingTenderItem
                        );
                        this.setState({
                            totalTenderItem: res.data,
                            totalPageCount: pageCount,
                            currentPage: 1
                        });
                    })
                    .catch(err => {
                        console.log(err);
                        console.log("|Tender Page Count Error|");
                    });
            })
            .catch(err => {
                console.log(err);
                console.log("|Token Error|");
            });
    }

    getTenderList = (startRange) => {
        const credentialJson = {
            "identifier": AppConstant.JWT_USER,
            "password": AppConstant.JWT_PASS
        };
        Axios({
            method: "post",
            url: '/auth/local',
            data: JSON.stringify(credentialJson),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {

                let current_date = new Date();
                let queryStr = "&start_date_lte=" + this.formatDate(current_date) + "&end_date_gte=" + this.formatDate(current_date) + "&type=Keep";
                const jwt_token = res.data.jwt;
                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + jwt_token
                };
                Axios({
                    method: "get",
                    url: `/tenders?_limit=${this.state.currentShowingTenderItem}&_sort=created_at:desc&_start=${this.state.startRange}` + queryStr,
                    headers: headers
                })
                    .then(res => {
                        this.setState({
                            tenderData: res.data,
                            showLoader: false
                        });
                    })
                    .catch(err => {
                        console.log(err);
                        console.log("|Tender Error|");
                    });
            })
            .catch(err => {
                console.log(err);
                console.log("|Token Error|");
            });
    }

    formatDate = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
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

    handleArrowClick = isNext => {
        if (isNext) {
            if (this.state.currentPage < this.state.totalPageCount) {
                this.setState({
                    currentPage: this.state.currentPage + 1,
                    startRange: this.state.startRange + this.state.currentShowingTenderItem
                });
                this.getTenderList(this.state.startRange + 6);
            }
        } else {
            if (this.state.currentPage > 1) {
                this.setState({
                    currentPage: this.state.currentPage - 1,
                    startRange: this.state.startRange - this.state.currentShowingTenderItem
                });
                this.getTenderList(this.state.startRange - 6);
            }
        }
    };

    render() {
        const { tenderData, totalTenderItem } = this.state;
        return (
            <BaseComponent pageTitle="Tender And Procurement">
                {/* <Helmet> */}
                <HelmetData pageComponentType="Tender" />
                {/* Header Start */}
                {isMobile ? (
                    <section className="topform product-header">
                        <div className="insuTab">
                            <h1>Tenders And Procurement</h1>
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
                                        <h1>Tenders And Procurement</h1>
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
                    <>
                        <div className="cms-page-content">
                            <h3>Tender Detail</h3>
                            {this.state.showLoader ? (
                                null
                            ) : (
                                    <>
                                        {totalTenderItem > 0 ? (
                                            <>
                                                <ul className="tender-list">
                                                    {tenderData.map((item, index) => (
                                                        <li key={index}>
                                                            <h4>{item.title}</h4>
                                                            <div className="date">{AppConstant.dateFormater(item.start_date, 'DD MMMM, YYYY')} to {AppConstant.dateFormater(item.end_date, 'DD MMMM, YYYY')}</div>
                                                            <Link to={"#"} className="btn-view-more" onClick={this.downloadurl.bind(this, item.document.url, item.document.name)}>Download Document</Link>
                                                        </li>
                                                    ))}
                                                </ul>

                                                {this.state.totalPageCount > 1 ? (
                                                    <div className="text-center prev-next-panel blog-carousel-control">
                                                        <span className="active">{this.state.currentPage}</span> / {this.state.totalPageCount}
                                                        <img className={
                                                            this.state.currentPage === 1
                                                                ? "add-opticity"
                                                                : "remove-opticity"
                                                        }
                                                            onClick={this.handleArrowClick.bind(this, false)}
                                                            src={require("../../../assets/images/arrow-left.png")} alt="" />
                                                        <img className={
                                                            this.state.currentPage === this.state.totalPageCount
                                                                ? "add-opticity"
                                                                : "remove-opticity"
                                                        }
                                                            onClick={this.handleArrowClick.bind(this, true)}
                                                            src={require("../../../assets/images/arrow-right.png")} alt="" />
                                                    </div>
                                                ) : (null)}

                                            </>
                                        ) : (
                                                <div className="no_item">No Tender Found </div>
                                            )}

                                    </>
                                )}
                        </div>
                    </>
                </Container>
            </BaseComponent>

        )
    }
}

export default Tender;