import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "../../../Services/Shared/Axios.js";
import { Row, Col } from "react-bootstrap";
import * as AppConstant from "../../AppConstant";
import HelmetData from "../../Common/HelmetData";

class LossSurveyLimits extends Component {
  constructor() {
    super();

    this.state = {
      totalDownloadListItem: 0,
      currentShowingDownloadItem: 7,
      totalPageCount: 0,
      currentPage: 1,
      startRange: 0,
      downloadList: [],
      showLoader: true
    };
  }

  componentDidMount() {
    this.getTotalPageCount();
    this.getDownloadList(this.state.startRange);
  }

  getTotalPageCount() {
    Axios({
      method: "get",
      url: "/losssurveys/count"
    })
      .then(res => {
        const pageCount = Math.ceil(
          res.data / this.state.currentShowingDownloadItem
        );
        this.setState({
          totalDownloadListItem: res.data,
          totalPageCount: pageCount,
          currentPage: 1
        });
      })
      .catch(err => {
        console.log(err);
        console.log("|Loss Surveys Page Count Error|");
      });
  }

  getDownloadList = startRange => {
    Axios({
      method: "get",
      url: `/losssurveys?_limit=${this.state.currentShowingDownloadItem}&_sort=id:desc&_start=${startRange}`
    })
      .then(res => {
        this.setState({
          downloadList: res.data,
          showLoader: false
        });
      })
      .catch(err => {
        console.log(err);
        console.log("|Loss Surveys Error|");
      });
  };

  downloadListItem = (downloadUrl, fileName) => {
    fetch(AppConstant.BASE_URL + downloadUrl).then(response => {
      response.blob().then(blob => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        a.click();
      });
    });
  };

  handleArrowClick = isNext => {
    if (isNext) {
      if (this.state.currentPage < this.state.totalPageCount) {
        this.setState({
          currentPage: this.state.currentPage + 1,
          startRange:
            this.state.startRange + this.state.currentShowingDownloadItem
        });
        this.getDownloadList(
          this.state.startRange + this.state.currentShowingDownloadItem
        );
      }
    } else {
      if (this.state.currentPage > 1) {
        this.setState({
          currentPage: this.state.currentPage - 1,
          startRange:
            this.state.startRange - this.state.currentShowingDownloadItem
        });
        this.getDownloadList(
          this.state.startRange - this.state.currentShowingDownloadItem
        );
      }
    }
  };

  render() {
    return (
      <>
        {/* <Helmet> */}
        <HelmetData pageComponentType="LossSurveyLimits" />
        <>
          {this.state.showLoader ? (
            <div className="claim-content">
              <ul className="download-form-list">
                <li>
                  <div className="loader line"></div>
                  <div className="loader line"></div>
                </li>
              </ul>
            </div>
          ) : (
            <div className="claim-content">
              <ul className="download-form-list">
                {this.state.downloadList.map((item, index) => (
                  <li key={index}>
                    {item.title}
                    <div className="rt-buttons">
                      <Link
                        className="btn-download"
                        to={"#"}
                        onClick={this.downloadListItem.bind(
                          this,
                          item.pdf_file.url,
                          item.pdf_file.name
                        )}
                      >
                        Download
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>

              {this.state.totalPageCount > 1 ? (
                <Row className="pt30">
                  <Col
                    sm="12"
                    lg="12"
                    className="text-center blog-carousel-control"
                  >
                    <span className="active">{this.state.currentPage}</span> /
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
              ) : null}
            </div>
          )}
        </>
      </>
    );
  }
}

export default LossSurveyLimits;
