import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import Axios from "../../Services/Shared/Axios";
import { Nav, Row, Col, Tab, Accordion, Card, Button } from "react-bootstrap";

class Faqs extends Component {
  state = {
    healthFaqs: [],
    homeFaqs: [],
    motorFaqs: [],
    travelFaqs: [],
    currentCategory: "",
    totalPageCount: 0,
    limit: 5,
    currentPage: 1,
  };

  setFaqsInCategory = (data, faqCats) => {
    let faqs = [];
    if ((data && data.length) > 0) {
      for (const faq of data) {
        let newEntry = {
          id: faq.id,
          question: faq.question,
          answer: faq.ans,
        };
        faqs.push(newEntry);
      }
      switch (faqCats) {
        default:
        case "Health":
          this.setState({
            healthFaqs: faqs,
          });
          break;
        case "Home":
          this.setState({
            homeFaqs: faqs,
          });
          break;
        case "Motor":
          this.setState({
            motorFaqs: faqs,
          });
          break;
        case "Travel":
          this.setState({
            travelFaqs: faqs,
          });
          break;
      }
    }
  };

  getTotalPageCount = (faqCats) => {
    const url = `/iafaqs/count?iafaqcat.faq_cat=${faqCats}%20Insurance`;
    if (!!url) {
      Axios({
        method: "get",
        url: `${url}`,
      })
        .then((res) => {
          let totalPageCount = Math.ceil(res.data / this.state.limit);
          this.setState({
            totalPageCount,
            currentPage: 1,
            currentCategory: faqCats,
          });
        })
        .catch((err) => {
          console.log(err);
          console.log("|Error|");
        });
    }
  };

  getFaqList = (faqCats) => {
    if (faqCats !== this.state.currentCategory) {
      this.getTotalPageCount(faqCats);
      const url = `/iafaqs?iafaqcat.faq_cat=${faqCats}%20Insurance&_limit=${this.state.limit}&_sort=created_at:desc&_start=0`;
      this.fetchFaqs(url, faqCats);
    }
  };

  handleArrowClick = (currentPage) => {
    const { currentCategory, totalPageCount, limit } = this.state;
    if (!currentPage) {
      currentPage = totalPageCount;
    }
    if (currentPage > totalPageCount) {
      currentPage = 1;
    }
    this.setState({ currentPage });
    const start = (currentPage - 1) * limit;
    const url = `/iafaqs?iafaqcat.faq_cat=${currentCategory}%20Insurance&_limit=${limit}&_sort=created_at:desc&_start=${start}`;
    this.fetchFaqs(url, currentCategory);
  };

  fetchFaqs = (url, category) => {
    if (!!url || !!category) {
      Axios({
        method: "get",
        url: `${url}`,
      })
        .then((res) => {
          this.setFaqsInCategory(res.data, category);
        })
        .catch((err) => {
          console.log(err);
          console.log("|Error|");
        });
    }
  };

  componentDidMount() {
    this.getFaqList("Health");
  }

  toggleAccordianBtn = (e) => {
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

  render() {
    const {
      healthFaqs,
      homeFaqs,
      motorFaqs,
      travelFaqs,
      totalPageCount,
      currentPage,
    } = this.state;
    return (
      <div>
        <div className="blog-tab-content">
          <Tab.Container defaultActiveKey="health-insurance">
            <Row className="blog-tab-inner">
              <Col sm={12}>
                <Nav
                  variant="pills"
                  className="flex-row justify-content-center align-items-center"
                >
                  <Nav.Item>
                    <Nav.Link
                      eventKey="health-insurance"
                      onClick={() => this.getFaqList("Health")}
                    >
                      Health Insurance
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="home-insurance"
                      onClick={() => this.getFaqList("Home")}
                    >
                      Home Insurance
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="motor-insurance"
                      onClick={() => this.getFaqList("Motor")}
                    >
                      Motor Insurance
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="travel-insurance"
                      onClick={() => this.getFaqList("Travel")}
                    >
                      Travel Insurance
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={12}>
                <Tab.Content>
                  <Tab.Pane eventKey="health-insurance">
                    {healthFaqs.length > 0 ? (
                      <div className="faqContent">
                        <div className="faQinsuranceMain">
                          <Accordion defaultActiveKey={0}>
                            {healthFaqs.map((item, i) => (
                              <Card key={item.id}>
                                <Accordion.Toggle
                                  as={Button}
                                  variant="link"
                                  eventKey={i}
                                  onClick={(e) => this.toggleAccordianBtn(e)}
                                  className={i === 0 ? "accordianBtn" : ""}
                                >
                                  {ReactHtmlParser(item.question)}
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={i}>
                                  <Card.Body>{ReactHtmlParser(item.answer)}</Card.Body>
                                </Accordion.Collapse>
                              </Card>
                            ))}
                          </Accordion>
                        </div>
                      </div>
                    ) : null}
                  </Tab.Pane>
                  <Tab.Pane eventKey="home-insurance">
                    {homeFaqs.length > 0 ? (
                      <div className="faqContent">
                        <div className="faQinsuranceMain">
                          <Accordion defaultActiveKey={0}>
                            {homeFaqs.map((item, i) => (
                              <Card key={item.id}>
                                <Accordion.Toggle
                                  as={Button}
                                  variant="link"
                                  eventKey={i}
                                  onClick={(e) => this.toggleAccordianBtn(e)}
                                  className={i === 0 ? "accordianBtn" : ""}
                                >
                                  {ReactHtmlParser(item.question)}
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={i}>
                                  <Card.Body>{ReactHtmlParser(item.answer)}</Card.Body>
                                </Accordion.Collapse>
                              </Card>
                            ))}
                          </Accordion>
                        </div>
                      </div>
                    ) : null}
                  </Tab.Pane>
                  <Tab.Pane eventKey="motor-insurance">
                    {motorFaqs.length > 0 ? (
                      <div className="faqContent">
                        <div className="faQinsuranceMain">
                          <Accordion defaultActiveKey={0}>
                            {motorFaqs.map((item, i) => (
                              <Card key={item.id}>
                                <Accordion.Toggle
                                  as={Button}
                                  variant="link"
                                  eventKey={i}
                                  onClick={(e) => this.toggleAccordianBtn(e)}
                                  className={i === 0 ? "accordianBtn" : ""}
                                >
                                  {ReactHtmlParser(item.question)}
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={i}>
                                  <Card.Body>{ReactHtmlParser(item.answer)}</Card.Body>
                                </Accordion.Collapse>
                              </Card>
                            ))}
                          </Accordion>
                        </div>
                      </div>
                    ) : null}
                  </Tab.Pane>
                  <Tab.Pane eventKey="travel-insurance">
                    {travelFaqs.length > 0 ? (
                      <div className="faqContent">
                        <div className="faQinsuranceMain">
                          <Accordion defaultActiveKey={0}>
                            {travelFaqs.map((item, i) => (
                              <Card key={item.id}>
                                <Accordion.Toggle
                                  as={Button}
                                  variant="link"
                                  eventKey={i}
                                  onClick={(e) => this.toggleAccordianBtn(e)}
                                  className={i === 0 ? "accordianBtn" : ""}
                                >
                                  {ReactHtmlParser(item.question)}
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={i}>
                                  <Card.Body>{ReactHtmlParser(item.answer)}</Card.Body>
                                </Accordion.Collapse>
                              </Card>
                            ))}
                          </Accordion>
                        </div>
                      </div>
                    ) : null}
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
        {totalPageCount > 1 ? (
          <Row className="pt30">
            <Col sm="12" lg="12" className="text-right blog-carousel-control">
              <span className="active">{currentPage}</span> / {totalPageCount}
              <img
                className={"remove-opticity pagePrev"}
                onClick={() => this.handleArrowClick(currentPage - 1)}
                src={require("../../assets/images/arrow-left.png")}
                alt=""
              />
              <img
                className={"remove-opticity pageNext"}
                onClick={() => this.handleArrowClick(currentPage + 1)}
                src={require("../../assets/images/arrow-right.png")}
                alt=""
              />
            </Col>
          </Row>
        ) : null}
      </div>
    );
  }
}

export default Faqs;
