import React, { Component } from "react";

import { Nav, Row, Col, Tab } from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";

import Axios from "../../../Services/Shared/Axios";
import * as AppConstant from "../../AppConstant";

class JointVentures extends Component {
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
      url: "/ventures"
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
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;   
    let  promoter;
    if (lang_name && lang_name==='en') {   
      promoter = sbiHomeData && sbiHomeData['ABOUT_US_TEXT_PROMOTERS'] && sbiHomeData['ABOUT_US_TEXT_PROMOTERS'].content_en;     
    } else {
      promoter = sbiHomeData && sbiHomeData['ABOUT_US_TEXT_PROMOTERS'] && sbiHomeData['ABOUT_US_TEXT_PROMOTERS'].content_hi;     
    }
    return (
      <>
        {this.state.showLoader ? (
          null
        ) : (
            <Col sm={7}>
              {pageData && pageData.length > 0 && (
                <>
                  <h2 className="titleLg m-b-30">{promoter}</h2>
                  {/* <h4>About Premji Invest</h4> */}
                  <div className="jointVentureSec">
                    {/* Logo Tab Start */}
                    <Tab.Container id="aa" defaultActiveKey="oneBA">
                      <Row>
                        <Col sm={12}>
                          <Nav variant="pills" className="jointVenturetab">
                            {pageData.map((item, index) => (
                              <Nav.Item key={index}>
                                <Nav.Link eventKey={index === 0 ? "oneBA" : "twoBA"}>
                                  <div>
                                    <img className="img-fluid" src={AppConstant.IMG_BASE_URL + item.logo.url} alt="" />
                                  </div>
                                </Nav.Link>
                              </Nav.Item>
                            ))}
                          </Nav>
                        </Col>
                        <Col sm={12}>
                          <Tab.Content className="jointVenturetabCont">
                            {pageData.map((item, index) => (                              
                              <Tab.Pane eventKey={index === 0 ? "oneBA" : "twoBA"}  key={index}>
                                {ReactHtmlParser((lang_name === 'en')
                                    ? item.description_en ? item.description_en : item.description
                                    :  item.description_hi ? item.description_hi : item.description)}
                              </Tab.Pane>
                            ))}
                          </Tab.Content>
                        </Col>
                      </Row>
                    </Tab.Container>
                    {/* Logo Tab End */}
                  </div>
                </>
              )}
            </Col>
          )}
      </>
    )
  }
}

export default JointVentures;