import React, { Component } from "react";

import Axios from "../../../Services/Shared/Axios";
import HelmetData from "../../Common/HelmetData";

class Testimonials extends Component {
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
      url: "/testimonials?_sort=id:desc"
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
    return (
      <>
        <HelmetData pageComponentType="Testimonials" />
        <div className="PDTabCont">
          <div className="statementSec">
            <ul className="testi-list">
              {pageData &&
                pageData.length > 0 &&
                pageData.map((item, index) => (
                  <li key={index}>
                    <h2 className="testi-title">{item.client_name}</h2>
                    <div className="testi-content">{item.message}</div>
                    <div className="testi-author-info">{item.designation}</div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Testimonials;
