import React, { Component } from "react";
import { isMobile } from "react-device-detect";

import { Container } from "react-bootstrap";
import BaseComponent from "../../BaseComponent";
import ReactHtmlParser from "react-html-parser";

import Axios from "../../../Services/Shared/Axios";
import * as AppConstant from "../../AppConstant";
import HelmetData from "../../Common/HelmetData";

class BoardOfDirectorDetails extends Component {
  constructor(props) {
    super(props);
    const { id } = props.match.params;
    this.state = {
      pageData: [],
      pageId: id,
      showLoader: true
    };
  }

  getPageContent = () => {
    let pageId = this.state.pageId;
    Axios({
      method: "get",
      url: "/news/" + pageId
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
      <BaseComponent>
        {/* <Helmet> */}
        <HelmetData pageComponentType="NewsDetails" />
        <div>
          {/* Header Start */}
          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>SBI General in News</h1>
                {/* For Mobule */}
              </div>
            </section>
          ) : (
              <section className="container-with-no-padding container">
                {/* <div className="rotateit">
                  <div className="skewbg"></div>
                  <div className="skewbg-light"></div>
                  <div className="bgtextureProduct"></div>
                </div> */}
                <div className="innerpageBanner row">
                  <div className="col-4">
                  </div>
                  <div className="col-8 d-flex align-items-center">
                    <div className="flex-column">
                      <h1>SBI General in News</h1>
                      {/* For Desktop */}
                    </div>
                  </div>
                </div>
              </section>
            )}
          {/* Header End */}
          <Container>
            <div className="statementSec">
              {pageData && (
                <>
                  <div className="news-details">
                    <h2>{pageData.headline}</h2>
                    <div className="news-head">
                      <div className="magzine-name">
                        <strong>Publisher:</strong> {pageData.publisher}
                      </div>
                      <div className="publish-date">
                        <strong>Published On:</strong>{" "}
                        {AppConstant.dateFormater(
                          pageData.published_on,
                          "DD MMMM, YYYY"
                        )}
                      </div>
                    </div>
                    <div className="news-content">
                      {pageData.description
                        ? ReactHtmlParser(pageData.description)
                        : null}

                      {pageData.image && pageData.image.url ? (
                        <figure className="image-full-width">
                          <img
                            src={AppConstant.IMG_BASE_URL + pageData.image.url}
                            alt=""
                          />
                        </figure>
                      ) : null}

                      {pageData.news_link ? (
                        <a href={pageData.news_link} className="btn-news-link">
                          Read on Actual Source
                        </a>
                      ) : null}

                      {pageData.pdf_file && pageData.pdf_file.url ? (
                        <a
                          href={
                            AppConstant.IMG_BASE_URL + pageData.pdf_file.url
                          }
                          className="btn-news-link"
                        >
                          Read on Actual Source
                        </a>
                      ) : null}
                    </div>
                  </div>
                </>
              )}
            </div>
          </Container>
        </div>
      </BaseComponent>
    );
  }
}

export default BoardOfDirectorDetails;
