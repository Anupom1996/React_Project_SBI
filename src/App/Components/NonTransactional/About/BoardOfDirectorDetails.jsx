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
      showLoader: true,
      pageHeading:''
    };
  }

  getPageContent = () => {
    let pageId = this.state.pageId;
    Axios({
      method: "get",
      url: "/boards/" + pageId
    })
      .then(res => {
        let pageHeading = "Board of Directors";
        if( typeof res.data.member_type!=='undefined' &&
        res.data.member_type==='Management'){
          pageHeading = 'Management'; 
        }
        this.setState({
          pageData: res.data,
          showLoader: false,
          pageHeading:pageHeading
        });
      })
      .catch(err => {
        console.log(err);
        console.log("|Page Error|");
      });
  };

  componentDidMount() {
    this.getPageContent();
    // let pageHeading = "Board of Directors";
    // if( typeof this.props.location.state!=='undefined'){
    //   pageHeading = this.props.location.state.tabName; 
    // }
    // this.setState({pageHeading:pageHeading});
    console.log(this.props);
  }

  render() {
    const { pageData,pageHeading } = this.state;
    return (
      <BaseComponent>
        {/* <Helmet> */}
        <HelmetData pageComponentType="BoardOfDirectorDetails" />
        <div>
          {/* Header Start */}
          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>{pageHeading}</h1>
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
                    <figure className="justify-content-between align-items-center">
                      <img
                        src={require("../../../assets/images/about_banner.svg")}
                        alt=""
                      />
                    </figure>
                  </div>
                  <div className="col-8 d-flex align-items-center">
                    <div className="flex-column">
                      <h1>{pageHeading}</h1>
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
          <Container>
            <div className="bod-details">
              <div className="profile-block clerfix">
                <figure className="profile-image">
                  {pageData.image && pageData.image.url ? (
                    <figure className="image-full-width">
                      <img
                        src={AppConstant.IMG_BASE_URL + pageData.image.url}
                        alt=""
                      />
                    </figure>
                  ) : null}
                </figure>
                <div className="profile-cintent">
                  <h2>{pageData.name}</h2>
                  <div className="designation">{pageData.designation}</div>
                  <div className="profile-info">
                    {pageData.details
                      ? ReactHtmlParser(pageData.details)
                      : null}
                    {/*
                        <div className="social-links">
                          <ul>
                            <li>
                              <Link to="/">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M4.652 0h1.44l.988 3.702.916-3.702h1.454l-1.665 5.505v3.757h-1.431v-3.757l-1.702-5.505zm6.594 2.373c-1.119 0-1.861.74-1.861 1.835v3.349c0 1.204.629 1.831 1.861 1.831 1.022 0 1.826-.683 1.826-1.831v-3.349c0-1.069-.797-1.835-1.826-1.835zm.531 5.127c0 .372-.19.646-.532.646-.351 0-.554-.287-.554-.646v-3.179c0-.374.172-.651.529-.651.39 0 .557.269.557.651v3.179zm4.729-5.07v5.186c-.155.194-.5.512-.747.512-.271 0-.338-.186-.338-.46v-5.238h-1.27v5.71c0 .675.206 1.22.887 1.22.384 0 .918-.2 1.468-.853v.754h1.27v-6.831h-1.27zm2.203 13.858c-.448 0-.541.315-.541.763v.659h1.069v-.66c.001-.44-.092-.762-.528-.762zm-4.703.04c-.084.043-.167.109-.25.198v4.055c.099.106.194.182.287.229.197.1.485.107.619-.067.07-.092.105-.241.105-.449v-3.359c0-.22-.043-.386-.129-.5-.147-.193-.42-.214-.632-.107zm4.827-5.195c-2.604-.177-11.066-.177-13.666 0-2.814.192-3.146 1.892-3.167 6.367.021 4.467.35 6.175 3.167 6.367 2.6.177 11.062.177 13.666 0 2.814-.192 3.146-1.893 3.167-6.367-.021-4.467-.35-6.175-3.167-6.367zm-12.324 10.686h-1.363v-7.54h-1.41v-1.28h4.182v1.28h-1.41v7.54zm4.846 0h-1.21v-.718c-.223.265-.455.467-.696.605-.652.374-1.547.365-1.547-.955v-5.438h1.209v4.988c0 .262.063.438.322.438.236 0 .564-.303.711-.487v-4.939h1.21v6.506zm4.657-1.348c0 .805-.301 1.431-1.106 1.431-.443 0-.812-.162-1.149-.583v.5h-1.221v-8.82h1.221v2.84c.273-.333.644-.608 1.076-.608.886 0 1.18.749 1.18 1.631v3.609zm4.471-1.752h-2.314v1.228c0 .488.042.91.528.91.511 0 .541-.344.541-.91v-.452h1.245v.489c0 1.253-.538 2.013-1.813 2.013-1.155 0-1.746-.842-1.746-2.013v-2.921c0-1.129.746-1.914 1.837-1.914 1.161 0 1.721.738 1.721 1.914v1.656z" />
                                </svg>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                </svg>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                          </div>
                        */}
                  </div>
                </div>
                <div className="clerfix"></div>
              </div>
            </div>
          </Container>
        </div>
      </BaseComponent>
    );
  }
}

export default BoardOfDirectorDetails;
