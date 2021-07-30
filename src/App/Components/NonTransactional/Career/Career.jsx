import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import { Row, Container, Col } from "react-bootstrap";

import BaseComponent from "../../BaseComponent";
import { Link } from "react-router-dom";
import Axios from "../../../Services/Shared/Axios";
import * as AppConstant from "../../AppConstant";
import HelmetData from "../../Common/HelmetData";

class Career extends Component {
  constructor() {
    super();

    this.state = {
      careerData: [],
      showLoader: true
    };
  }
  getCareerContent = () => {
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
        const jwt_token = AppConstant.JWT_TOKEN;
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + jwt_token
        };
        Axios({
          method: "get",
          url: "/jobs",
          headers: headers
        })
          .then(res => {
            this.setState({
              careerData: res.data,
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

  componentDidMount() {
    this.getCareerContent();
  }
  render() {
    let careerData = this.state.careerData;
    return (
      <>
        {this.state.showLoader === false ? (
          <div>
            <BaseComponent pageTitle="career">
              {/* <Helmet> */}
              <HelmetData pageComponentType="Career" />

              {/* Header Start */}
              {isMobile ? (
                <section className="topform product-header">
                  <div className="insuTab">
                    <h1>Careers</h1>
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
                          <h1>Careers</h1>
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
              {careerData.length > 0 ? (
                <Container>
                  <section className="career-section">
                    <h2>Begin your journey with SBI General</h2>
                    <Row>
                      {careerData.map((item, i) => (
                        <Col lg="3" xs="12" key={i}>
                          <div className="career-box">
                            <figure>
                              <img
                                src={AppConstant.IMG_BASE_URL + item.image.url}
                                alt={item.image.name}
                              />
                            </figure>
                            <div className="career-content">
                              <h3>{item.name}</h3>
                              <ul>
                                {item.job_item_link.map((sub_link, j) => (
                                  <li key={j}>
                                    <Link to={sub_link.job_link}>
                                      {sub_link.job_title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </section>
                </Container>
              ) : (
                  <p className="text-center">No record found!</p>
                )}
            </BaseComponent>
          </div>
        ) : (
            null
          )
        }
      </>

    );
  }
}

export default Career;
