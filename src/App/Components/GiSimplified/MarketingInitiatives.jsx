import React, { Component } from "react";
import Axios from "../../Services/Shared/Axios";
import { Nav, Row, Col, Tab } from "react-bootstrap";
import CardLink from "./common/CardLink";
import { textTruncate } from "../AppConstant";

class MarketingInitiatives extends Component {
  state = {
    healthInitiative: [],
    homeInitiative: [],
    motorInitiative: [],
    travelInitiative: [],
    currentCategory: "",
    totalPageCount: 0,
    limit: 8,
    currentPage: 1,
  };

  setInitiativeInCategory = (data, marketingCat) => {
    let initiatives = [];
    if ((data && data.length) > 0) {
      for (const initiative of data) {
        let newEntry = {
          id: initiative.id,
          title: initiative.title,
          slug: initiative.slug,
          description: textTruncate(
            initiative.description.replace(/<(.|\n)*?>/g, ""),
            85
          ),
          imageUrl: initiative.image.url,
          imageName: initiative.image.name,
        };
        initiatives.push(newEntry);
      }
      switch (marketingCat) {
        default:
        case "Health":
          this.setState({
            healthInitiative: initiatives,
          });
          break;
        case "Home":
          this.setState({
            homeInitiative: initiatives,
          });
          break;
        case "Motor":
          this.setState({
            motorInitiative: initiatives,
          });
          break;
        case "Travel":
          this.setState({
            travelInitiative: initiatives,
          });
          break;
      }
    }
  };

  getTotalPageCount = (marketingCat) => {
    const url = `/markinitiatives/count?marketingcat.marketing_cat=${marketingCat}%20Insurance`;
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
            currentCategory: marketingCat,
          });
        })
        .catch((err) => {
          console.log(err);
          console.log("|Error|");
        });
    }
  };

  getInitiativeList = (marketingCat) => {
    if (marketingCat !== this.state.currentCategory) {
      this.getTotalPageCount(marketingCat);
      const url = `/markinitiatives?marketingcat.marketing_cat=${marketingCat}%20Insurance&_limit=${this.state.limit}&_sort=created_at:desc&_start=0`;
      //const url = `/iablogs?iacategory.blog_cat=${marketingCat}%20Insurance&_limit=${this.state.limit}&_sort=created_at:desc&_start=0`;
      this.fetchInitiative(url, marketingCat);
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
    const url = `/markinitiatives?marketingcat.marketing_cat=${currentCategory}%20Insurance&_limit=${limit}&_sort=created_at:desc&_start=${start}`;
    this.fetchInitiative(url, currentCategory);
  };

  fetchInitiative = (url, category) => {
    if (!!url || !!category) {
      Axios({
        method: "get",
        url: `${url}`,
      })
        .then((res) => {
          this.setInitiativeInCategory(res.data, category);
        })
        .catch((err) => {
          console.log(err);
          console.log("|Error|");
        });
    }
  };

  componentDidMount() {
    if (typeof this.props.location.state !== "undefined") {
      if (this.props.location.state.category.length > 0) {
        this.getInitiativeList(
          this.props.location.state.category.split(" ", 1)[0]
        );
      } else {
        this.getInitiativeList("Health");
      }
    } else {
      this.getInitiativeList("Health");
    }
  }

  render() {
    const {
      healthInitiative,
      homeInitiative,
      motorInitiative,
      travelInitiative,
      totalPageCount,
      currentPage,
      currentCategory,
    } = this.state;
    console.log(currentCategory);
    return (
      <div>
        <div className="blog-tab-content">
          <Tab.Container activeKey={`${currentCategory}-Insurance`}>
            <Row className="blog-tab-inner">
              <Col sm={12}>
                <Nav
                  variant="pills"
                  className="flex-row justify-content-center align-items-center"
                >
                  <Nav.Item>
                    <Nav.Link
                      eventKey="Health-Insurance"
                      onClick={() => this.getInitiativeList("Health")}
                    >
                      Health Insurance
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="Home-Insurance"
                      onClick={() => this.getInitiativeList("Home")}
                    >
                      Home Insurance
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="Motor-Insurance"
                      onClick={() => this.getInitiativeList("Motor")}
                    >
                      Motor Insurance
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="Travel-Insurance"
                      onClick={() => this.getInitiativeList("Travel")}
                    >
                      Travel Insurance
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={12}>
                <Tab.Content>
                  <Tab.Pane eventKey="Health-Insurance">
                    <div className="kn-blog-main">
                      <Row>
                        {healthInitiative.length > 0
                          ? healthInitiative.map((initiative) => (
                              <Col
                                lg={3}
                                md={4}
                                sm={6}
                                key={initiative.id}
                                className="d-flex"
                              >
                                <CardLink
                                  link={`/gi-simplified/marketing-initiative/${initiative.slug}`}
                                  imageUrl={initiative.imageUrl}
                                  imageName={initiative.imageName}
                                  title={initiative.title}
                                  description={initiative.description}
                                />
                              </Col>
                            ))
                          : null}
                      </Row>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Home-Insurance">
                    <div className="kn-blog-main">
                      <Row>
                        {homeInitiative.length > 0
                          ? homeInitiative.map((initiative) => (
                              <Col
                                lg={3}
                                md={4}
                                sm={6}
                                key={initiative.id}
                                className="d-flex"
                              >
                                <CardLink
                                  link={`/gi-simplified/marketing-initiative/${initiative.slug}`}
                                  imageUrl={initiative.imageUrl}
                                  imageName={initiative.imageName}
                                  title={initiative.title}
                                  description={initiative.description}
                                />
                              </Col>
                            ))
                          : null}
                      </Row>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Motor-Insurance">
                    <div className="kn-blog-main">
                      <Row>
                        {motorInitiative.length > 0
                          ? motorInitiative.map((initiative) => (
                              <Col
                                lg={3}
                                md={4}
                                sm={6}
                                key={initiative.id}
                                className="d-flex"
                              >
                                <CardLink
                                  link={`/gi-simplified/marketing-initiative/${initiative.slug}`}
                                  imageUrl={initiative.imageUrl}
                                  imageName={initiative.imageName}
                                  title={initiative.title}
                                  description={initiative.description}
                                />
                              </Col>
                            ))
                          : null}
                      </Row>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Travel-Insurance">
                    <div className="kn-blog-main">
                      <Row>
                        {travelInitiative.length > 0
                          ? travelInitiative.map((initiative) => (
                              <Col
                                lg={3}
                                md={4}
                                sm={6}
                                key={initiative.id}
                                className="d-flex"
                              >
                                <CardLink
                                  link={`/gi-simplified/marketing-initiative/${initiative.slug}`}
                                  imageUrl={initiative.imageUrl}
                                  imageName={initiative.imageName}
                                  title={initiative.title}
                                  description={initiative.description}
                                />
                              </Col>
                            ))
                          : null}
                      </Row>
                    </div>
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

export default MarketingInitiatives;
