import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { isMobile } from "react-device-detect";

import BaseComponent from "../../BaseComponent";
import Axios from "../../../Services/Shared/Axios";
import * as AppConstant from "../../AppConstant";
import DevelopingYoungLeadersContent from "./DevelopingYoungLeadersContent";
import HelmetData from "../../Common/HelmetData";

class DevelopingYoungLeaders extends Component {
  constructor() {
    super();

    this.state = {
      peopleData: []
      ,
      showLoader: true
    };
  }
  getPeopleContent = () => {
    Axios({
      method: "get",
      url: "/developingyoungleaders"
    })
      .then(res => {
        this.setState({
          peopleData: res.data,
          showLoader: false
        });
      })
      .catch(err => {
        console.log(err);
        console.log("|Page Error|");
      });
  };

  componentDidMount() {
    this.getPeopleContent();
  }
  render() {
    let peopleData = this.state.peopleData;
    return (
      <>
        {this.state.showLoader === false ? (
          <div>
            <BaseComponent pageTitle="meetourpeople">
              {/* <Helmet> */}
              <HelmetData pageComponentType="DevelopingYoungLeaders" />
              {/* Header Start */}
              {isMobile ? (
                <section className="topform product-header">
                  <div className="insuTab">
                    <h1>Developing Young Leaders</h1>
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
                      <h1>Developing Young Leaders</h1>
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

              {peopleData.length > 0 ? (
                <Container>
                  <div className="cms-page-content cms-page-content no-bg no-border p-0">
                    <DevelopingYoungLeadersContent />
                    <section className="developing-young-leaders-section">
                      <ul className="leader-list">
                        {peopleData.map((item, i) => (
                          <li key={i}>
                            <figure>
                              <img
                                src={AppConstant.IMG_BASE_URL + item.Image.url}
                                alt={item.Image.name}
                              />
                            </figure>
                            <div className="leader-content">
                              <h3>{item.Name}</h3>
                              <div className="leader-desc">{item.Description}</div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>
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

export default DevelopingYoungLeaders;
