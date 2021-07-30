import React, { Component } from "react";

import { Nav, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Tab } from "react-bootstrap";

import Axios from "../../../Services/Shared/Axios";
import * as AppConstant from "../../AppConstant";
import HelmetData from "../../Common/HelmetData";

class Boards extends Component {
  constructor() {
    super();
    this.state = {
      pageData: [],
      showLoader: true
    };
  }

  getPageContent = () => {
    let pageUrl = "/boards?publish=true&_sort=id:asc";
    Axios({
      method: "get",
      url: pageUrl
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
    var directorCount = 0;
    var managementCount = 0;
    return (
      <div>
        {/* <Helmet> */}
        <HelmetData pageComponentType="BoardOfDirectors" />

        <Tab.Container id="bodTab-content" defaultActiveKey="one">
          <div className="statementSec">
            <Row className="bodTab">
              <Col sm={12}>
                <Nav
                  variant="pills"
                  className="flex-row justify-content-center align-items-center"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="one">Board of Directors</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="two"> Management</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={12}>
                <Tab.Content>
                  <Tab.Pane eventKey="one">
                    <div className="bod-list">
                      {pageData.length > 0 ? (
                        <ul>
                          {pageData.map((item, index) => {
                            directorCount = 1;
                            return item.member_type === "Director" ? (
                              <li key={index}>
                                <figure>
                                  <Link
                                    to={{
                                      pathname: `/member-details/${item.name
                                        .replace(/\s+/g, "-")
                                        .toLowerCase()}/${item.id}`,
                                        state: { tabName: 'Board of Directors'}
                                    }}
                                  >
                                    <img
                                      src={
                                        AppConstant.IMG_BASE_URL +
                                        item.image.url
                                      }
                                      alt={item.name}
                                    />
                                  </Link>
                                </figure>
                                <div className="bod-content">
                                  <h3>
                                    <Link
                                      to={{
                                        pathname: `/member-details/${item.name
                                          .replace(/\s+/g, "-")
                                          .toLowerCase()}/${item.id}`,
                                          state: { tabName: 'Board of Directors'}
                                      }}
                                    >
                                      {item.name}
                                    </Link>
                                  </h3>
                                  <h4>{item.designation}</h4>
                                </div>
                              </li>
                            ) : null;
                          })}
                        </ul>
                      ) : null}
                      {directorCount === 0 ? (
                        <p className="text-center">No record found!</p>
                      ) : null}
                    </div>
                    <div className="BODBottomContent">
                      <div className="pb30">
                        <h4>Composition of Board and Committee</h4>
                        <p><a href={AppConstant.BASE_URL + "/uploads/1726a5eef32040108ea0abc80e0485ea.pdf"} target="_blank" rel="noopener noreferrer">Composition of Board and Committee</a></p>
                      </div>
                      <h4>Resigned / Retired Board of Directors</h4>
                      <ul>
                        <li>Shri S. Vishvanathan resigned from the Board w.e.f. 30th April 2014 due to superannuation.</li>
                        <li>Shri A. Krishna Kumar resigned from the Board w.e.f. 1st December 2014 due to superannuation.</li>
                        <li>Shri Michael John Wilkins resigned from the Board w.e.f. 24th November 2015 due to superannuation.</li>
                        <li>Shri Bhaskar J. Sarma resigned from the Board w.e.f. 31st December 2015 due to superannuation.</li>
                        <li>Shri B. Sriram ceased to be Member of the Board w.e.f. 15th March 2016 due to his resignation.</li>
                        <li>Shri V. G. Kannan resigned from the Board w.e.f. 30th July 2016 due to superannuation.</li>
                        <li>Shri Aidan Pallister ceased to be the Member of the Board w.e.f. 2nd Dec 2016 due to his resignation.</li>
                        <li>Smt. Arundhati Bhattacharya resigned from the Board w.e.f. 9th October 2017 due to superannuation.</li>
                        <li>Shri Alp Altun ceased to be the Member of the Board w.e.f. closing hours of 19th December 2018 due to his resignation.</li>
                        <li>Smt. Smeeta Bhatkal, ceased to be the Member of the Board w.e.f. 30th July 2019 due to her resignation.</li>
                        <li>Shri Ashok Pradhan, retired from the Board w.e.f. 25th August 2019, due to completion of his tenure.</li>
                        <li>Shri Duncan Victor Brain ceased to be the Member of the Board w.e.f. 3rd November 2019 due to his resignation.</li>
                        <li>Shri Jonathan Guy Delalande ceased to be the Member of the Board w.e.f. 31st January 2020 due to his resignation.</li>
                        <li>Shri Andrew Stuart Collings ceased to be the member of the Board w.e.f. 27th March 2020 due to Resignation.</li>
                        <li>Shri P. K. Gupta resigned from the Board w.e.f. 31st March 2020 due to superannuation.</li>
                        <li>Dr. A. K. Saxena resigned  from the Board  w.e.f. 20th August 2020 due to personal reason.</li>
                        <li>Shri Rajnish Kumar resigned from the Board w.e.f. close of business of 6th October 2020 due to completion of his term.</li>
                        <li>Shri Pushan Mahapatra retired from the Board w.e.f. close of business of 31st December 2020 due to completion of his term as Whole Time Director.</li>
                      </ul>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="two">
                    <div className="bod-list mgmtBlk">
                      {pageData.length > 0 ? (
                        <ul>
                          {pageData.map((item, index) => {                           
                            return item.member_type === "Management" ? (
                              <>
                              <li style={{'display':'none'}}>{managementCount++}</li>                              
                              <li key={index} className={managementCount===1||managementCount===2?'topElm'+managementCount:''}>
                                <figure>
                                  <Link
                                    to={{
                                      pathname: `/member-details/${item.name
                                        .replace(/\s+/g, "-")
                                        .toLowerCase()}/${item.id}`,
                                        state: { tabName: 'Management'}
                                    }}
                                  >
                                    <img
                                      src={
                                        AppConstant.IMG_BASE_URL +
                                        item.image.url
                                      }
                                      alt={item.name}
                                    />
                                  </Link>
                                </figure>
                                <div className="bod-content">
                                  <h3>
                                    <Link
                                      to={{
                                        pathname: `/member-details/${item.name
                                          .replace(/\s+/g, "-")
                                          .toLowerCase()}/${item.id}`,
                                          state: { tabName: 'Management'}
                                      }}
                                    >
                                      {item.name}
                                    </Link>
                                  </h3>
                                  <h4>{item.designation}</h4>
                                </div>
                              </li>
                              {managementCount===2 &&
                              <div className="topLi"></div>
                              }
                              </>
                            ) : null;
                          })}
                        </ul>
                        
                      ) : null}
                      {managementCount === 0 ? (
                        <p className="text-center">No record found!</p>
                      ) : null}
                      <p className="disclaimer-sec">Names arranged in alphabetical order</p>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </div>
        </Tab.Container>
      </div>
    );
  }
}

export default Boards;
