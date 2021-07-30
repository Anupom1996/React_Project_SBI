import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Axios from "../../../Services/Shared/Axios.js";
import * as AppConstant from "../../AppConstant";
import Modal from "react-bootstrap/Modal";
import { isMobile } from "react-device-detect";
import AddressBox from "../../Common/AddressBox/AddressBox";

import ClaimEmailValidation from "./ClaimEmailValidation";
import HelmetData from "../../Common/HelmetData";

class ClaimFormDownload extends Component {
  constructor() {
    super();

    this.state = {
      totalDownloadListItem: 0,
      currentShowingDownloadItem: 7,
      totalPageCount: 0,
      currentPage: 1,
      startRange: 0,
      downloadList: [],
      openEmailModal: false,
      showLoader: true,
      fileName: "",
      fileUrl: "",
      id: ""
    };
  }

  componentDidMount() {
    this.getTotalPageCount();
    this.getDownloadList(this.state.startRange);
  }

  getTotalPageCount() {
    Axios({
      method: "get",
      url: "/claims/count"
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
        console.log("|Claims Page Count Error|");
      });
  }

  getDownloadList = startRange => {
    Axios({
      method: "get",
      url: `/claims?_limit=${this.state.currentShowingDownloadItem}&_sort=id:desc&_start=${startRange}`
    })
      .then(res => {
        this.setState({
          downloadList: res.data,
          showLoader: false
        });
      })
      .catch(err => {
        console.log(err);
        console.log("|Claims Error|");
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

  openEmailModal = (fileName, fileUrl, id) => {
    
    this.setState({
      openEmailModal: true,
      fileName: fileName,
      id: id,
      fileUrl: AppConstant.BASE_URL + fileUrl
    });
  };

  closeEmailModal = () => {
    this.setState({ openEmailModal: false });
  };

  render() {
    return (
      <>
        {/* <Helmet> */}
        <HelmetData pageComponentType="ClaimFormDownload" />
        <Row>
          <Col lg="6" xs="12">
            <>
              {this.state.showLoader ? (
                <div className="claim-content">
                  <ul className="download-form-list">
                    <li>
                      <div className="loader line"></div>
                      <div className="loader line"></div>
                    </li>
                    <li>&nbsp;</li>
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
                              item.claim_pdf.url,
                              item.claim_pdf.name
                            )}
                          >
                            Download
                          </Link>
                          <Link
                            className="btn-email"
                            to={"#"}
                            onClick={this.openEmailModal.bind(
                              this,
                              item.title,                              
                              item.claim_pdf.url,
                              item.id
                            )}
                          >
                            Email
                          </Link>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {this.state.totalPageCount > 1 ? (
                    <Row className="pt30 pb30">
                      <Col
                        sm="12"
                        lg="12"
                        className="text-center blog-carousel-control"
                      >
                        <span className="active">{this.state.currentPage}</span>{" "}
                        /{this.state.totalPageCount}
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

                  <Modal
                    centered={isMobile ? true : true}
                    animation
                    show={this.state.openEmailModal}
                    onHide={this.closeEmailModal}
                    backdrop="static"
                    size={"sm"}
                    dialogClassName="sms-modal"
                  >
                    <Modal.Header closeButton>Email Claim Form</Modal.Header>
                    <Modal.Body>
                      <ClaimEmailValidation
                        fileName={this.state.fileName}
                        fileUrl={this.state.fileUrl}
                        id={this.state.id}
                      />
                    </Modal.Body>
                  </Modal>
                </div>
              )}
            </>
          </Col>
          <Col lg="6" xs="12">
            <AddressBox addressBoxType="Claims" />
          </Col>
        </Row>
      </>
    );
  }
}

export default ClaimFormDownload;
