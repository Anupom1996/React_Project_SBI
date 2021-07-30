import React, { Component } from "react";
import BaseComponent from "../../BaseComponent";
import { Nav, Row, Col, Tab, Container } from "react-bootstrap";
import HelmetData from "../../Common/HelmetData";

class PublicDisclosure extends Component {
  render() {
    return (
      <div>
        <BaseComponent pageTitle="publicdisclosure">
          {/* <Helmet> */}
          <HelmetData pageComponentType="PublicDisclosure" />
          {/* Header Start */}
          <div className="headerAbout text-center">
            <h2>Public Disclosures</h2>
          </div>
          {/* Header End */}
          {/* <div className="headerPD text-center"><h2>Public Disclosures</h2></div> */}
          <Container>
            <Tab.Container id="Inner-tabs-example" defaultActiveKey="three">
              <Row className="lineBdrTab">
                <Col sm={12}>
                  <Nav
                    variant="pills"
                    className="flex-row justify-content-center align-items-center"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="one">About Us</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="two">
                        {" "}
                        Board of Directors & Management
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="three">Public Disclosures </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="four">
                        Whistle Blower Policy{" "}
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="five">SBI General in News</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="six">Testimonials</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={12}>
                  <Tab.Content>
                    <Tab.Pane eventKey="one">Hello World1!</Tab.Pane>
                    <Tab.Pane eventKey="two">Hello World2!</Tab.Pane>
                    <Tab.Pane eventKey="three">
                      <div className="PDTabCont">
                        <div className="searchSec">
                          <div>
                            <select autoComplete="off" className="styleSelect">
                              <option>Select</option>
                              <option>01</option>
                            </select>
                          </div>
                          <div>
                            <select autoComplete="off" className="styleSelect">
                              <option>1 st Quarter</option>
                              <option>01</option>
                            </select>
                          </div>
                          <div>
                            <button
                              type="button"
                              class="btn btn-default stylebtn greenButBg"
                            >
                              Apply
                            </button>
                          </div>
                        </div>
                        <div className="statementSec">
                          <ul className="statementList">
                            <li>
                              <div className="itemSec">
                                <div>NL-1-19</div>
                                <div>
                                  <img
                                    src={require("./../../../assets/images/pdfIcon.svg")}
                                    alt=""
                                  />
                                  Financial Statements
                                </div>
                              </div>
                            </li>
                            <li>
                              {" "}
                              <div className="itemSec">
                                <div>NL-22</div>
                                <div>
                                  <img
                                    src={require("./../../../assets/images/pdfIcon.svg")}
                                    alt=""
                                  />
                                  Statement of Liabilities
                                </div>
                              </div>
                            </li>
                            <li>
                              {" "}
                              <div className="itemSec">
                                <div>NL-1-19</div>
                                <div>
                                  <img
                                    src={require("./../../../assets/images/pdfIcon.svg")}
                                    alt=""
                                  />
                                  Financial Statements
                                </div>
                              </div>
                            </li>
                            <li>
                              {" "}
                              <div className="itemSec">
                                <div>NL-23</div>
                                <div>
                                  <img
                                    src={require("./../../../assets/images/pdfIcon.svg")}
                                    alt=""
                                  />
                                  Reinsurance Risk Concentration
                                </div>
                              </div>
                            </li>
                            <li>
                              {" "}
                              <div className="itemSec">
                                <div>NL-24</div>
                                <div>
                                  <img
                                    src={require("./../../../assets/images/pdfIcon.svg")}
                                    alt=""
                                  />
                                  Ageing of Claims
                                </div>
                              </div>
                            </li>
                            <li>
                              {" "}
                              <div className="itemSec">
                                <div>NL-25</div>
                                <div>
                                  <img
                                    src={require("./../../../assets/images/pdfIcon.svg")}
                                    alt=""
                                  />
                                  Claims Data
                                </div>
                              </div>
                            </li>
                            <li>
                              {" "}
                              <div className="itemSec">
                                <div>NL-26</div>
                                <div>
                                  <img
                                    src={require("./../../../assets/images/pdfIcon.svg")}
                                    alt=""
                                  />
                                  Claims Information
                                </div>
                              </div>
                            </li>
                            <li>
                              {" "}
                              <div className="itemSec">
                                <div>NL-27</div>
                                <div>
                                  <img
                                    src={require("./../../../assets/images/pdfIcon.svg")}
                                    alt=""
                                  />
                                  Office Opening
                                </div>
                              </div>
                            </li>
                            <li>
                              {" "}
                              <div className="itemSec">
                                <div>NL-28</div>
                                <div>
                                  <img
                                    src={require("./../../../assets/images/pdfIcon.svg")}
                                    alt=""
                                  />
                                  Statement of Assets
                                </div>
                              </div>
                            </li>
                            <li>
                              {" "}
                              <div className="itemSec">
                                <div>NL-29</div>
                                <div>
                                  <img
                                    src={require("./../../../assets/images/pdfIcon.svg")}
                                    alt=""
                                  />
                                  Debt Securities
                                </div>
                              </div>
                            </li>
                            <li>
                              {" "}
                              <div className="itemSec">
                                <div>NL-30</div>
                                <div>
                                  <img
                                    src={require("./../../../assets/images/pdfIcon.svg")}
                                    alt=""
                                  />
                                  Analytical Ratios
                                </div>
                              </div>
                            </li>
                            <li>
                              {" "}
                              <div className="itemSec">
                                <div>NL-31</div>
                                <div>
                                  <img
                                    src={require("./../../../assets/images/pdfIcon.svg")}
                                    alt=""
                                  />
                                  Related Party Transactions
                                </div>
                              </div>
                            </li>
                            <li>
                              {" "}
                              <div className="itemSec">
                                <div>NL-1-19</div>
                                <div>
                                  <img
                                    src={require("./../../../assets/images/pdfIcon.svg")}
                                    alt=""
                                  />
                                  Financial Statements
                                </div>
                              </div>
                            </li>
                            <li>
                              {" "}
                              <div className="itemSec">
                                <div>NL-1-19</div>
                                <div>
                                  <img
                                    src={require("./../../../assets/images/pdfIcon.svg")}
                                    alt=""
                                  />
                                  Financial Statements
                                </div>
                              </div>
                            </li>
                            <li>
                              {" "}
                              <div className="itemSec">
                                <div>NL-1-19</div>
                                <div>
                                  <img
                                    src={require("./../../../assets/images/pdfIcon.svg")}
                                    alt=""
                                  />
                                  Financial Statements
                                </div>
                              </div>
                            </li>
                            <li>
                              {" "}
                              <div className="itemSec">
                                <div>NL-1-19</div>
                                <div>
                                  <img
                                    src={require("./../../../assets/images/pdfIcon.svg")}
                                    alt=""
                                  />
                                  Financial Statements
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="four">Hello World4!</Tab.Pane>
                    <Tab.Pane eventKey="five">Hello World5!</Tab.Pane>
                    <Tab.Pane eventKey="six">Hello World6!</Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Container>
        </BaseComponent>
      </div>
    );
  }
}

export default PublicDisclosure;
