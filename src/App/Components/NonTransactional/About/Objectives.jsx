import React, { Component } from "react";

import { Scrollbars } from 'react-custom-scrollbars';
import { Nav, Row, Col, Tab } from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";

import { isMobile } from "react-device-detect";
import Axios from "../../../Services/Shared/Axios";

class Objectives extends Component {
  constructor() {
    super();
    this.state = {
      pageData: [],
      showLoader: true
    };
  }

  getPageContent = () => {
    Axios({
      method: "get",
      url: "/objectives"
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
    const { pageData } = this.state;
    console.log("about",pageData);
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    return (
      <>
        {this.state.showLoader ? (
          null
        ) : (
            <Col lg={5}>
              {pageData && pageData.length > 0 && (
                <>
                  {isMobile ? (
                    /* Objective Main Panel for Mobile Only*/
                    <div className="companyGoal displayContMd">
                      <Tab.Container id="aa" defaultActiveKey="oneB">
                        <Row>
                          <Col sm={12}>
                            <Nav variant="pills" className="flex-row companyGoaltab justify-content-center align-items-center">
                              {pageData.map((item, index) => (
                                <Nav.Item key={index}>
                                  <Nav.Link eventKey={index === 0 ? "oneB" : index === 1 ? "twoB" : "threeB"}>
                                    <div className={index === 0 ? "missionIcon" : index === 1 ? "teamIcon" : "creativeIcon"}></div>
                                    <div>{(lang_name === 'en')
                                    ? item.title_en ? item.title_en : item.title
                                    :  item.title_hi ? item.title_hi : item.title}</div>
                                  </Nav.Link>
                                </Nav.Item>
                              ))}
                            </Nav>
                          </Col>
                          <Col sm={12}>
                            <Tab.Content className="companyGoaltabCont">
                              {pageData.map((item, index) => (
                                <Tab.Pane eventKey={index === 0 ? "oneB" : index === 1 ? "twoB" : "threeB"} key={index}>
                                  {ReactHtmlParser((lang_name === 'en')
                                    ? item.description_en ? item.description_en : item.description
                                    :  item.description_hi ? item.description_hi : item.description)}
                                </Tab.Pane>
                              ))}
                            </Tab.Content>
                          </Col>
                        </Row>
                      </Tab.Container>
                    </div>
                  ) : (
                      /* Objective Main Panel for Web Only*/
                      <div className="companyGoal displayContLg">
                        <div className="cGoal">
                          <Scrollbars autoHeight autoHeightMin={100} autoHeightMax={520}>
                            <div className="p-r-10">
                              {pageData.map((item, index) => (
                                <div className="companyGoalItem" key={index}>
                                  {/* <div>
                                  <img src={AppConstant.IMG_BASE_URL + item.icon.url} alt="" />
                                </div> */}
                                  <div>
                                    <h3>{(lang_name === 'en')
                                    ? item.title_en ? item.title_en : item.title
                                    :  item.title_hi ? item.title_hi : item.title}</h3>
                                    {ReactHtmlParser((lang_name === 'en')
                                    ? item.description_en ? item.description_en : item.description
                                    :  item.description_hi ? item.description_hi : item.description)}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </Scrollbars>
                        </div>
                      </div>
                    )}
                </>
              )}
            </Col>
          )}
      </>
    )
  }
}

export default Objectives;