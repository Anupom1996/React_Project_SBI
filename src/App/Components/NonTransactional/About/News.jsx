import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import swal from "sweetalert";

import Axios from "../../../Services/Shared/Axios";
import * as AppConstant from "../../AppConstant";
import HelmetData from "../../Common/HelmetData";

class News extends Component {
  constructor() {
    super();
    this.state = {
      pageData: [],
      curYear: new Date().getFullYear(),
      curMonth: new Date().getMonth() + 1,
      selectedYear: new Date().getFullYear(),
      selectedMonth: (new Date().getMonth() + 1).toString().padStart(2, "0"),
      pageIndex: 0,
      pageLimit: 10,
      pageSort: "desc",
      totalPageCount: 0,
      currentPage: 1,
      showLoader: true
    };
  }

  getPageContent = () => {
    let pageIndex = this.state.pageIndex;
    let pageLimit = this.state.pageLimit;
    let pageSort = this.state.pageSort;
    let pageUrl = "";
    let lastDateOfMonth = new Date(
      this.state.selectedYear,
      this.state.selectedMonth,
      0
    ).getDate();
    //console.log(this.state.selectedMonth + '-' + this.state.selectedYear+'=='+lastDateOfMonth);
    let fromDate =
      this.state.selectedYear +
      "-" +
      this.state.selectedMonth +
      "-01T00:00:000Z";
    let toDate =
      this.state.selectedYear +
      "-" +
      this.state.selectedMonth +
      "-" +
      lastDateOfMonth +
      "T00:00:000Z";
    pageUrl =
      "/news?publish=1&_start=" +
      pageIndex +
      "&_limit=" +
      pageLimit +
      "&_sort=published_on:" +
      pageSort +
      "&published_on_gte=" +
      fromDate +
      "&published_on_lte=" +
      toDate;
    //pageUrl = "/news?publish=1&_start=" + pageIndex + "&_limit=" + pageLimit + "&_sort=created_at:" + pageSort;
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
        const jwt_token = res.data.jwt;
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + jwt_token
        };
        Axios({
          method: "get",
          url: pageUrl,
          headers: headers
        })
          .then(res => {
            this.getTotalPageCount();
            this.setState({
              pageData: res.data,
              showLoader: false
            });
          })
          .catch(err => {
            console.log(err);
            console.log("|Page Error|");
          });
      })
      .catch(err => {
        console.log(err);
        console.log("|Token Error|");
      });
  };

  getTotalPageCount = () => {
    let pageCountUrl = "";
    let lastDateOfMonth = new Date(
      this.state.selectedYear,
      this.state.selectedMonth,
      0
    ).getDate();
    let fromDate =
      this.state.selectedYear +
      "-" +
      this.state.selectedMonth +
      "-01T00:00:000Z";
    let toDate =
      this.state.selectedYear +
      "-" +
      this.state.selectedMonth +
      "-" +
      lastDateOfMonth +
      "T00:00:000Z";
    pageCountUrl =
      "/news/count?publish=1&published_on_gte=" +
      fromDate +
      "&published_on_lte=" +
      toDate;
    //pageCountUrl = "/news/count?publish=1";
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
        const jwt_token = res.data.jwt;
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + jwt_token
        };
        Axios({
          method: "get",
          url: pageCountUrl,
          headers: headers
        })
          .then(res => {
            const pageCount = Math.ceil(res.data / this.state.pageLimit);
            this.setState({
              totalPageCount: pageCount
            });
          })
          .catch(err => {
            console.log(err);
            console.log("|Page Error|");
          });
      })
      .catch(err => {
        console.log(err);
        console.log("|Token Error|");
      });
  };

  componentDidMount() {
    this.getPageContent();
  }

  searchSelectedMonth = event => {
    this.setState({
      selectedMonth: event.target.value
    });
  };

  searchSelectedYear = event => {
    this.setState({
      selectedYear: event.target.value
    });
  };

  searchDataParam = () => {
    this.getPageContent();
    if (
      this.state.selectedYear === "all" ||
      this.state.selectedMonth === "all"
    ) {
      this.showErrorAlert("Please Select Month & Year!");
    }
  };

  handleArrowClick = isNext => {
    if (isNext) {
      if (this.state.currentPage < this.state.totalPageCount) {
        this.setState({
          currentPage: this.state.currentPage + 1,
          pageIndex: this.state.pageIndex + this.state.pageLimit
        });
        this.getPageContent();
      }
    } else {
      if (this.state.currentPage > 1) {
        this.setState({
          currentPage: this.state.currentPage - 1,
          pageIndex: this.state.pageIndex - this.state.pageLimit
        });
        this.getPageContent();
      }
    }
  };

  showSuccessAlert = successTxt => {
    swal({
      text: successTxt,
      icon: "success"
    }).then(() => { });
  };

  showErrorAlert = errTxt => {
    swal({
      text: errTxt,
      icon: "error"
    }).then(() => { });
  };

  render() {
    const { pageData, curYear } = this.state;
    return (
      <>
        <HelmetData pageComponentType="News" />
        <div className="PDTabCont">
          <div className="searchSec">
            <div>
              <select
                autoComplete="off"
                className="styleSelect"
                onChange={this.searchSelectedMonth}
                value={this.state.selectedMonth}
              >
                <option value="01">Jan</option>
                <option value="02">Feb</option>
                <option value="03">Mar</option>
                <option value="04">Apr</option>
                <option value="05">May</option>
                <option value="06">Jun</option>
                <option value="07">Jul</option>
                <option value="08">Aug</option>
                <option value="09">Sep</option>
                <option value="10">Oct</option>
                <option value="11">Nov</option>
                <option value="12">Dec</option>
              </select>
            </div>
            <div>
              <select
                autoComplete="off"
                className="styleSelect"
                onChange={this.searchSelectedYear}
                value={this.state.selectedYear}
              >
                <option value={curYear - 4}>{curYear - 4}</option>
                <option value={curYear - 3}>{curYear - 3}</option>
                <option value={curYear - 2}>{curYear - 2}</option>
                <option value={curYear - 1}>{curYear - 1}</option>
                <option value={curYear}>{curYear}</option>
              </select>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-default stylebtn greenButBg"
                onClick={this.searchDataParam}
              >
                Apply
              </button>
            </div>
          </div>
          <div className="statementSec">
            <ul className="news-list">
              {pageData &&
                pageData.length > 0 &&
                pageData.map((item, index) => (
                  <li key={index}>
                    <h3>
                      <Link
                        to={{
                          pathname: `/news-details/${item.headline
                            .replace(/\s|%+/g, "-")
                            //.replace(/\s+/g, "-")
                            .toLowerCase()}/${item.id}`
                        }}
                      >
                        {item.headline}
                      </Link>
                    </h3>
                    <div className="date">
                      {AppConstant.dateFormater(
                        item.published_on,
                        "DD MMMM, YYYY"
                      )}
                      , {item.publisher}
                    </div>
                  </li>
                ))}
            </ul>

            {this.state.totalPageCount > 1 ? (
              <Row className="pt30 ">
                <Col
                  sm="12"
                  lg="12"
                  className="text-right blog-carousel-control"
                >
                  <span className="active">{this.state.currentPage}</span> /{" "}
                  {this.state.totalPageCount}
                  <img
                    className={
                      this.state.currentPage === 1
                        ? "add-opticity"
                        : "remove-opticity"
                    }
                    onClick={this.handleArrowClick.bind(this, false)}
                    src={require("../../../assets/images/arrow-left.png")}
                    alt=""
                  />
                  <img
                    className={
                      this.state.currentPage === this.state.totalPageCount
                        ? "add-opticity"
                        : "remove-opticity"
                    }
                    onClick={this.handleArrowClick.bind(this, true)}
                    src={require("../../../assets/images/arrow-right.png")}
                    alt=""
                  />
                </Col>
              </Row>
            ) : (
                <>
                  {this.state.totalPageCount > 0 ? null : (
                    <p className="text-center">No record found!</p>
                  )}
                </>
              )}
          </div>
        </div>
      </>
    );
  }
}

export default News;
