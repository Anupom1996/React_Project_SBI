import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Row, Col, Tab, Modal } from "react-bootstrap";
import Axios from "../../Services/Shared/Axios";
import * as AppConstant from "../AppConstant";
import ReactPlayer from "react-player";
// import Reaudio from "reaudio";
import "reaudio/build/index.css";
// import { textTruncate } from "../AppConstant";
import { Scrollbars } from "react-custom-scrollbars";

class Avs extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      // audioHealthData: [],
      // audioHomeData: [],
      // audioMotorData: [],
      // audiotravelData: [],
      videoHealthData: [],
      videoHomeData: [],
      videoMotorData: [],
      videotravelData: [],
      currentCategory: "",

      //Rendering variables
      videoUrl: "",
      audioList: [],
      videoList: [],
      allVideoList: [],

      videoPageCount: 0,
      videoLimit: 6,
      videoCurrentPage: 1,

      // audioPageCount: 0,
      // audioLimit: 8,
      // audioCurrentPage: 1,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow(videoUrl) {
    this.setState({ show: true, videoUrl: videoUrl });
  }

  getAVData = (category) => {
    if (category !== this.state.currentCategory) {
      // this.getTotalPageCount(category, "audio");
      // const audioUrl = `/avs?avcat.av_categories=${category}&type=audio&_limit=${this.state.audioLimit}&_sort=created_at:desc&_start=0`;
      // this.fetchData(audioUrl, category, "audio");
      this.getTotalPageCount(category, "video");
      const videoUrl = `/avs?avcat.av_categories=${category}&type=video&_limit=${this.state.videoLimit}&_sort=created_at:desc&_start=0`;
      this.fetchData(videoUrl, category, "video");

      const allVideoUrl = `/avs?avcat.av_categories=${category}&type=video&_sort=created_at:desc&_start=0`;
      this.fetchAllData(allVideoUrl, category, "video");
    }
  };

  fetchData = (url, category, type) => {
    if (!!url || !!category || !!type) {
      // console.log(`URL: ${url}  category: ${category}  type: ${type}`);
      Axios({
        method: "get",
        url: `${url}`,
      })
        .then((res) => {
          // if (type === "audio") {
          //   this.setAudioList(res.data, category);
          // }
          if (type === "video") {
            this.setVideoList(res.data, category);
          }
        })
        .catch((err) => {
          console.log(err);
          console.log("|Error|");
        });
    }
  };

  fetchAllData = (url, category, type) => {
    if (!!url || !!category || !!type) {
      Axios({
        method: "get",
        url: `${url}`,
      })
        .then((res) => {
          if (type === "video") {
            this.setAllVideoList(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
          console.log("|Error|");
        });
    }
  };

  componentDidMount() {
    this.getAVData("Health Insurance");
  }

  setAVData = (category, type, data) => {
    if (!!category || !!type || !!data) {
      switch (category) {
        default:
        case "Health Insurance":
          if (type === "video") {
            this.setState({ videoHealthData: data });
          }
          // if (type === "audio") {
          //   this.setState({ audioHealthData: data });
          // }
          break;
        case "Home Insurance":
          if (type === "video") {
            this.setState({ videoHomeData: data });
          }
          // if (type === "audio") {
          //   this.setState({ audioHomeData: data });
          // }
          break;
        case "Motor Insurance":
          if (type === "video") {
            this.setState({ videoMotorData: data });
          }
          // if (type === "audio") {
          //   this.setState({ audioMotorData: data });
          // }
          break;
        case "Travel Insurance":
          if (type === "video") {
            this.setState({ videoTravelData: data });
          }
          // if (type === "audio") {
          //   this.setState({ audioTravelData: data });
          // }
          break;
      }
    }
  };

  setVideoList = (data, category) => {
    this.setState({ videoList: data });
    this.setAVData(category, "video", data);
  };

  setAllVideoList = (data) => {
    this.setState({ allVideoList: data });
  };

  // setAudioList = (data, category) => {
  //   const audioList = [];
  //   for (const [i, audioData] of data.entries()) {
  //     if (audioData.type === "audio") {
  //       let trackImg = "";
  //       if (audioData.thumb) {
  //         trackImg = AppConstant.IMG_BASE_URL + audioData.thumb.url;
  //       }
  //       let audioObj = {
  //         id: i,
  //         source: audioData.av_link,
  //         // trackName: audioData.title,
  //         trackName: textTruncate(audioData.title, 20),
  //         trackArtist: "Joshua Iz",
  //         trackImage: trackImg,
  //         loop: true,
  //       };
  //       audioList.push(audioObj);
  //     }
  //   }
  //   this.setState({ audioList });
  //   this.setAVData(category, "audio", audioList);
  // };

  getTotalPageCount = (category, type) => {
    const url = `/avs/count?avcat.av_categories=${category}&type=${type}`;
    if (!!url) {
      Axios({
        method: "get",
        url: `${url}`,
      })
        .then((res) => {
          // console.log(res.data);
          if (type === "video") {
            let videoPageCount = Math.ceil(res.data / this.state.videoLimit);
            this.setState({
              videoPageCount,
              videoCurrentPage: 1,
            });
          }
          if (type === "audio") {
            let audioPageCount = Math.ceil(res.data / this.state.audioLimit);
            this.setState({
              audioPageCount,
              audioCurrentPage: 1,
            });
          }
          this.setState({ currentCategory: category });
        })
        .catch((err) => {
          console.log(err);
          console.log("|Error|");
        });
    }
  };

  // handleAudioArrowClick = (currentPage) => {
  //   const {
  //     currentCategory,
  //     audioPageCount: totalPageCount,
  //     audioLimit: limit,
  //   } = this.state;

  //   if (!currentPage) {
  //     currentPage = totalPageCount;
  //   }

  //   if (currentPage > totalPageCount) {
  //     currentPage = 1;
  //   }
  //   this.setState({ audioCurrentPage: currentPage });

  //   const start = (currentPage - 1) * limit;
  //   const url = `/avs?avcat.av_categories=${currentCategory}&type=audio&_limit=${limit}&_sort=created_at:desc&_start=${start}`;
  //   this.fetchData(url, currentCategory, "audio");
  // };

  handleVideoArrowClick = (currentPage) => {
    const {
      currentCategory,
      videoPageCount: totalPageCount,
      videoLimit: limit,
    } = this.state;

    if (!currentPage) {
      currentPage = totalPageCount;
    }

    if (currentPage > totalPageCount) {
      currentPage = 1;
    }
    this.setState({ videoCurrentPage: currentPage });

    const start = (currentPage - 1) * limit;
    const url = `/avs?avcat.av_categories=${currentCategory}&type=video&_limit=${limit}&_sort=created_at:desc&_start=${start}`;
    this.fetchData(url, currentCategory, "video");
  };

  render() {
    let {
      videoList,
      allVideoList,
      // audioList,
      videoUrl,
      videoPageCount,
      videoCurrentPage,
      // audioPageCount,
      // audioCurrentPage,
    } = this.state;
    // console.log("audioList: ", audioList);
    // console.log("videoList: ", videoList);
    return (
      <>
        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          centered
          size="lg"
          className="special_modal" //Add class name here
          show={this.state.show}
          onHide={this.handleClose}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div class="embed-responsive embed-responsive-16by9">
              {/* <iframe id="cartoonVideo" class="embed-responsive-item" width="560" height="315" src="//www.youtube.com/embed/YE7VzlLtp-4" allowfullscreen></iframe> */}
              <ReactPlayer
                url={videoUrl}
                class="embed-responsive-item"
                width="560"
                height="315"
              />
            </div>
          </Modal.Body>
        </Modal>

        <div className="blog-tab-content">
          <Tab.Container defaultActiveKey="health-insurance">
            <Row className="blog-tab-inner">
              <Col sm={12}>
                <Nav
                  variant="pills"
                  className="flex-row justify-content-center align-items-center"
                >
                  <Nav.Item>
                    <Nav.Link
                      eventKey="health-insurance"
                      onClick={() => {
                        this.getAVData("Health Insurance");
                      }}
                    >
                      Health Insurance
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="home-insurance"
                      onClick={() => {
                        this.getAVData("Home Insurance");
                      }}
                    >
                      Home Insurance
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="motor-insurance"
                      onClick={() => {
                        this.getAVData("Motor Insurance");
                      }}
                    >
                      Motor Insurance
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="travel-insurance"
                      onClick={() => {
                        this.getAVData("Travel Insurance");
                      }}
                    >
                      Travel Insurance
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={12}>
                <Row>
                  <Col lg={12} md={12} sm={12}>
                    <Row>
                      <Col lg={3} md={3} sm={12} className="">
                        {allVideoList.length > 0 ? (
                          // <div className="kn-blog-main-scroll">
                          <Scrollbars
                            autoHeight
                            //autoHeightMin={730}
                            autoHeightMax={730}
                          >
                            <div className="kn-blog-main-list">
                              {allVideoList.map((item, i) => (
                                <Link
                                  onClick={() => {
                                    this.handleShow(item.av_link);
                                  }}
                                >
                                  <div className="kn-blog-sub-list">
                                    <h6>{item.title}</h6>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </Scrollbars>
                        ) : null}
                      </Col>
                      <Col lg={9} md={9} sm={12} className="">
                        <Row>
                          {videoList.map((item, i) => (
                            <Col lg={4} md={4} sm={12} key={item.id}>
                              <Link
                                onClick={() => {
                                  this.handleShow(item.av_link);
                                }}
                              >
                                <div className="kn-vdo-cnt">
                                  <figure>
                                    {item.thumb ? (
                                      <img
                                        src={
                                          AppConstant.IMG_BASE_URL +
                                          item.thumb.url
                                        }
                                        alt=""
                                      />
                                    ) : null}
                                  </figure>
                                  <div className="kn-vdo-blw-cnt">
                                    <p className="av-cont">{item.title}</p>
                                  </div>
                                </div>
                              </Link>
                            </Col>
                          ))}
                        </Row>
                        {/* page arrow video */}
                        {videoPageCount > 1 ? (
                          <Row className="pt30">
                            <Col
                              sm="12"
                              lg="12"
                              className="text-right blog-carousel-control"
                            >
                              <span className="active">{videoCurrentPage}</span>{" "}
                              / {videoPageCount}
                              <img
                                className={"remove-opticity pagePrev"}
                                onClick={() =>
                                  this.handleVideoArrowClick(
                                    videoCurrentPage - 1
                                  )
                                }
                                src={require("../../assets/images/arrow-left.png")}
                                alt=""
                              />
                              <img
                                className={"remove-opticity pageNext"}
                                onClick={() =>
                                  this.handleVideoArrowClick(
                                    videoCurrentPage + 1
                                  )
                                }
                                src={require("../../assets/images/arrow-right.png")}
                                alt=""
                              />
                            </Col>
                          </Row>
                        ) : null}
                      </Col>
                    </Row>
                  </Col>
                  {/* page arrow audio */}
                  {/* <Col lg={6} md={6} sm={12}>
                    <h3>Audios</h3>
                    <div className="kn-autdio">
                      <Reaudio playlist={audioList} />
                    </div>
                    {audioPageCount > 1 ? (
                      <Row className="pt30">
                        <Col
                          sm="12"
                          lg="12"
                          className="text-right blog-carousel-control"
                        >
                          <span className="active">{audioCurrentPage}</span> /{" "}
                          {audioPageCount}
                          <img
                            className={"remove-opticity pagePrev"}
                            onClick={() =>
                              this.handleAudioArrowClick(audioCurrentPage - 1)
                            }
                            src={require("../../assets/images/arrow-left.png")}
                            alt=""
                          />
                          <img
                            className={"remove-opticity pageNext"}
                            onClick={() =>
                              this.handleAudioArrowClick(audioCurrentPage + 1)
                            }
                            src={require("../../assets/images/arrow-right.png")}
                            alt=""
                          />
                        </Col>
                      </Row>
                    ) : null}
                  </Col> */}
                </Row>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </>
    );
  }
}

export default Avs;
