import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import { Row, Col, Accordion, Card, Button, Container } from "react-bootstrap";
import BaseComponent from "../../BaseComponent";
import Axios from "../../../Services/Shared/Axios";
import swal from "sweetalert";
import HelmetData from "../../Common/HelmetData";

class FAQ extends Component {
  state = {
    categoryList: [],
    faqcategory: "",
    faqsubcategory: "",
    subcategoryList: [],
    faqList: [],
    currentShowingFAQItem: 8,
    totalFAQItem: 0,
    totalPageCount: 0,
    currentPage: 1,
    startRange: 0
  };

  toggleAccordianBtn = e => {
    let classAccord = e.target.className;
    let els = document.getElementsByClassName("accordianBtn btn btn-link");
    if (els) {
      while (els[0]) {
        els[0].classList.remove("accordianBtn");
      }
    }
    if (classAccord.indexOf("accordianBtn") > -1) {
      e.target.className = "btn btn-link";
    } else {
      e.target.className = "accordianBtn btn btn-link";
    }
  };

  getCategoryList = () => {
    Axios({
      method: "get",
      url: "/faqcategories"
    })
      .then(res => {
        this.setState({
          categoryList: res.data
        });
      })
      .catch(err => {
        console.log(err);
        console.log("|Error|");
      });
  };

  getSubCategoryList = faqcategory => {
    Axios({
      method: "GET",
      url: "/faqsubcategories?faqcategory.name=" + faqcategory
    })
      .then(res => {
        this.setState({
          subcategoryList: res.data
        });
      })
      .catch(err => {
        console.log("Err");
      });
  };

  getTotalPageCount() {
    let faqcategory = this.state.faqcategory;
    let faqsubcategory = this.state.faqsubcategory;
    let queryStr = "";
    if (faqcategory) {
      queryStr = "&faqcategory.name=" + faqcategory;
    }
    if (faqsubcategory) {
      queryStr = queryStr + "&name=" + faqsubcategory;
    }

    Axios({
      method: "get",
      url:
        `/faqsubcategories/count?_limit=${this.state.currentShowingFAQItem}&_start=${this.state.startRange}` +
        queryStr
    })
      .then(res => {
        const pageCount = Math.ceil(
          res.data / this.state.currentShowingFAQItem
        );

        this.setState({
          totalFAQItem: res.data,
          totalPageCount: pageCount,
          currentPage: 1
        });
      })
      .catch(err => {
        console.log(err);
        console.log("|FAQ Count Error|");
      });
  }

  getFAQList = startRange => {
    let faqcategory = this.state.faqcategory;
    let faqsubcategory = this.state.faqsubcategory;
    let queryStr = "";
    if (faqcategory) {
      queryStr = "&faqcategory.name=" + faqcategory;
    }
    if (faqsubcategory) {
      queryStr = queryStr + "&name=" + faqsubcategory;
    }
    this.setState({
      faqList: []
    });
    if (queryStr) {
      Axios({
        method: "get",
        url:
          `/faqsubcategories?_limit=${this.state.currentShowingFAQItem}&_start=${startRange}` +
          queryStr
      })
        .then(res => {
          this.setState({
            faqList: res.data[0].faq_ques_ans
          });
        })
        .catch(err => {
          console.log(err);
          console.log("|FAQ Error|");
        });
    }
  };

  handleChange = event => {
    let faqcategory = event.target.value;
    if (faqcategory !== "") {
      this.setState({ faqcategory: faqcategory });
      this.getSubCategoryList(faqcategory);
    } else {
      this.setState({
        faqcategory: "",
        faqsubcategory: "",
        subcategoryList: [],
        faqList: []
      });
    }
  };

  handleArrowClick = isNext => {
    if (isNext) {
      if (this.state.currentPage < this.state.totalPageCount) {
        this.setState({
          currentPage: this.state.currentPage + 1,
          startRange: this.state.startRange + this.state.currentShowingFAQItem
        });
        this.getFAQList(this.state.startRange + 6);
      }
    } else {
      if (this.state.currentPage > 1) {
        this.setState({
          currentPage: this.state.currentPage - 1,
          startRange: this.state.startRange - this.state.currentShowingFAQItem
        });
        this.getFAQList(this.state.startRange - 6);
      }
    }
  };

  componentDidMount() {
    this.getCategoryList();
    // this.getSubCategoryList(this.state.faqcategory);
    // this.getFAQList(0);
    // this.getTotalPageCount();
  }

  handleSubmit = event => {
    event.preventDefault();
    const faqcategory = event.target.faqcategory.value;
    const faqsubcategory = event.target.faqsubcategory.value;

    if (faqcategory !== "" && faqsubcategory !== "") {
      this.setState({
        faqcategory: faqcategory,
        faqsubcategory: faqsubcategory
      });
      setTimeout(() => {
        this.getFAQList(0);
        this.getTotalPageCount();
      }, 500);
    } else {
      this.showErrorAlert("Please Select Product and Category.");
    }
  };

  showErrorAlert = errTxt => {
    swal({
      text: errTxt,
      icon: "error"
    }).then(() => { });
  };

  render() {
    const {
      categoryList,
      faqcategory,
      subcategoryList,
      faqList,
      totalFAQItem
    } = this.state;
    return (
      <div>
        <BaseComponent pageTitle="privacypolicy">
          {/* <Helmet> */}
          <HelmetData pageComponentType="FAQ" />
          {/* Header Start */}
          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>Frequently Asked Questions</h1>
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
                      <h1>Frequently Asked Questions</h1>
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
          <Container className="privacyPolicy">
            <form
              name="searchFAQ"
              id="searchFAQ"
              onSubmit={this.handleSubmit.bind(this)}
            >
              <div className="searchSec">
                <div>
                  <select
                    name="faqcategory"
                    autoComplete="off"
                    className="styleSelect"
                    onChange={this.handleChange}
                    value={faqcategory}
                  >
                    <option value={""}>Select Product</option>
                    {categoryList.map((item, index) => (
                      <option value={item.name} key={index}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <select
                    name="faqsubcategory"
                    autoComplete="off"
                    className="styleSelect"
                  >
                    <option value={""}>I want to know about</option>
                    {subcategoryList.map((item, index) => (
                      <option value={item.name} key={index}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-default stylebtn greenButBg"
                  >
                    Continue{" "}
                  </button>
                </div>
              </div>
            </form>

            <div className="faqContent">
              {(faqList && faqList.length) > 0 ? (
                <h2 className="titleclose pb-3 text-left">
                  {faqcategory} FAQs
                </h2>
              ) : null}
              {totalFAQItem > 0 ? (
                <>
                  <div className="faQinsuranceMain">
                    <Accordion defaultActiveKey={0}>
                      {faqList.map((item, i) => (
                        <Card key={i}>
                          <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey={i}
                            onClick={e => this.toggleAccordianBtn(e)}
                            className={i === 0 ? "accordianBtn" : ""}
                          >
                            {item.Question}
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey={i}>
                            <Card.Body>{item.Answer}</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      ))}
                    </Accordion>
                  </div>
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
                </>
              ) : null}
            </div>
          </Container>
        </BaseComponent>
      </div>
    );
  }
}

export default FAQ;
