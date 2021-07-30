import React, { Component } from "react";

import { Link } from "react-router-dom";
import { Nav, Row, Container, Col } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Tab from "react-bootstrap/Tab";
import ReactHtmlParser from "react-html-parser";

import { isMobile } from "react-device-detect";
import Axios from "../../Services/Shared/Axios.js";
import * as AppConstant from "../AppConstant";

class HomeBlogsLatestNews extends Component {
  constructor() {
    super();
    this.state = {
      blogList: [],
      newsList: [],
    };
  }


  componentDidMount() {
    this.getLatestBlogList();
    this.getLatestNewsList();
  }

  getLatestBlogList = () => {
    Axios({
      method: "get",
      url: "/blogs?_limit=3&_sort=created_at:desc"
    })
      .then(res => {
        this.setState({
          blogList: res.data
        });
      })
      .catch(err => {
        console.log(err);
        console.log("|Blog Error|");
      });
  };

  getLatestNewsList = () => {
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
        const jwt_token = res.data.jwt;
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + jwt_token
        };
        Axios({
          method: "get",
          url: "/news?_limit=3&_sort=published_on:desc",
          headers: headers
        })
          .then(res => {
            this.setState({
              newsList: res.data
            });
          })
          .catch(err => {
            console.log(err);
            console.log("|News Error|");
          });
      })
      .catch(err => {
        console.log(err);
        console.log("|Token Error|");
      });
  };

  gtmBlogClickHandler = (eventName, pageType, clickText) => {
    window.dataLayer = window.dataLayer || [];
    const data = {
      'event': eventName,
      'pagetype': pageType,
      'blog_title': clickText
    };
    window.dataLayer.push(data);
  }

  gtmNewsClickHandler = (eventName, pageType, clickText) => {
    window.dataLayer = window.dataLayer || [];
    const data = {
      'event': eventName,
      'pagetype': pageType,
      'news_title': clickText
    };
    window.dataLayer.push(data);
  }

  render() {
    let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let blog;        
    let latest_news;
  
    if (lang_name==='en') {
      blog = sbiHomeData && sbiHomeData['HOME_ICON_BLOGS'] && sbiHomeData['HOME_ICON_BLOGS'].content_en;            
      latest_news = sbiHomeData && sbiHomeData['HOME_ICON_LATEST_NEWS'] && sbiHomeData['HOME_ICON_LATEST_NEWS'].content_en;            
    } else {
      blog = sbiHomeData && sbiHomeData['HOME_ICON_BLOGS'] && sbiHomeData['HOME_ICON_BLOGS'].content_hi;           
      latest_news = sbiHomeData && sbiHomeData['HOME_ICON_LATEST_NEWS'] && sbiHomeData['HOME_ICON_LATEST_NEWS'].content_hi;           
    }
    return (
      <section className="blogWrapper">

        <Container>
          {/* Blogs Main Panel for Mobile Only*/}
          {isMobile ? (
            <section className="blogMainrow blogForMobile">
              <Tab.Container defaultActiveKey="tabmain_1a">
                <Nav className="tabmainA" variant="pills">
                  <Nav.Item>
                    <Nav.Link eventKey="tabmain_1a">
                      <div>{latest_news?latest_news:'Latest News'}</div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tabmain_2a">
                      <div>{blog?blog:'Blogs'}</div>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="tabmain_1a">
                    {this.state.newsList && this.state.newsList.length && (
                      <OwlCarousel
                        className="owl-theme"
                        loop
                        autoplay={true}
                        margin={10}
                        nav={false}
                        dots={false}
                        items={1}
                        dotsEach={true}
                      >
                        {this.state.newsList.map((item, index) => (
                          <div className="item hNewsMain" key={index} onClick={() => this.gtmNewsClickHandler("homepage_5_latest_news_click", "Home Page", "Latest News - " + item.headline)}>
                            <div className="hNewsSingM ">
                              {/* {item.image && item.image.url ? (
                                <figure className="m-0">
                                  <Link
                                    to={{
                                      pathname: `/news-details/${item.headline
                                        .replace(/\s+/g, "-")
                                        .toLowerCase()}/${item.id}`
                                    }}
                                  >
                                    <img
                                      alt=""
                                      src={
                                        AppConstant.IMG_BASE_URL +
                                        item.image.url
                                      }
                                    />
                                  </Link>
                                </figure>
                              ) : (
                                  <figure className="m-0">
                                    <Link
                                      to={{
                                        pathname: `/news-details/${item.headline
                                          .replace(/\s+/g, "-")
                                          .toLowerCase()}/${item.id}`
                                      }}
                                    >
                                      <img
                                        alt=""
                                        src={require("../../assets/images/no-news.jpg")}
                                      />
                                    </Link>
                                  </figure>
                                )} */}
                              <div className="hNewsMiddle">
                                <h5>
                                  <Link
                                    to={{
                                      pathname: `/news-details/${item.headline
                                        .replace(/\s+/g, "-")
                                        .toLowerCase()}/${item.id}`
                                    }}
                                  >
                                    {item.headline}
                                  </Link>
                                </h5>
                                <span className="postDate">
                                  {AppConstant.dateFormater(
                                    item.published_on,
                                    "DD MMMM, YYYY"
                                  )}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </OwlCarousel>
                    )}
                  </Tab.Pane>

                  <Tab.Pane eventKey="tabmain_2a">
                    {this.state.blogList && this.state.blogList.length && (
                      <OwlCarousel
                        className="owl-theme"
                        loop
                        autoplay={true}
                        margin={10}
                        nav={false}
                        dots={false}
                        items={1}
                        dotsEach={true}
                      >
                        {this.state.blogList.map((item, index) => (
                          <div className="item hBlogMain" key={index} onClick={() => this.gtmBlogClickHandler("homepage_4_blog_click", "Home Page", "Blog - " + item.blog_title)}>
                            <div className="hBlogSing ">
                              {/* {item.featured_image &&
                                item.featured_image.url ? (
                                  <figure className="m-0">
                                    <Link
                                      to={{
                                        pathname: `/blog-details/${item.slug}`,
                                        state: { blogItem: item }
                                      }}
                                    >
                                      <img
                                        alt=""
                                        src={
                                          AppConstant.IMG_BASE_URL +
                                          item.featured_image.url
                                        }
                                      />
                                    </Link>
                                  </figure>
                                ) : null} */}
                              <div className="hBlogRight">
                                <span className="postDate">
                                  {AppConstant.dateFormater(
                                    item.created_at,
                                    "DD MMMM, YYYY"
                                  )}
                                </span>
                                <h5>
                                  <Link
                                    to={{
                                      pathname: `/blog-details/${item.slug}`,
                                      state: { blogItem: item }
                                    }}
                                  >
                                    {item.blog_title}
                                  </Link>
                                </h5>
                                <span>
                                  {ReactHtmlParser(
                                    item.blog_post.substr(0, 190)
                                  )}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </OwlCarousel>
                    )}
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </section>
          ) : (
              <Row className="blogMainrow blogForDesktop">
                <Col xs="12" lg="7">
                  <h4 className="sptitle">
                    <a href={AppConstant.APP_URL + "/blog"} target="_blank" rel="noopener noreferrer">{blog?blog:'Blogs'}</a>
                  </h4>
                  <div className="hBlogMain">
                    {this.state.blogList.map((item, index) => (
                      <div
                        className="hBlogSing "
                        key={index}
                        onClick={() => this.gtmBlogClickHandler("homepage_4_blog_click", "Home Page", "Blog - " + item.blog_title)}
                      >
                        {/* { item.featured_image && item.featured_image.url ? (
                          <figure className="m-0"> */}
                            {/* <Link
                              to={{
                                pathname: `/blog-details/${item.slug}`,
                                state: { blogItem: item }
                              }}
                            > */}
                            {/* <a href={AppConstant.APP_URL + `/blog-details/${item.slug}`} target="_blank" rel="noopener noreferrer">
                              <img
                                alt=""
                                src={
                                  AppConstant.IMG_BASE_URL +
                                  item.featured_image.url
                                }
                              />
                            </a>
                          </figure>
                        ) : null} */}
                        <div className="hBlogRight">
                          <span className="postDate">
                            {AppConstant.dateFormater(
                              item.created_at,
                              "DD MMMM, YYYY"
                            )}
                          </span>
                          <h5>
                            <a href={AppConstant.APP_URL + `/blog-details/${item.slug}`} target="_blank" rel="noopener noreferrer">
                              {item.blog_title}
                            </a>
                          </h5>
                          <span>
                            {item.blog_post.length > 180 ? (
                              <>
                                {ReactHtmlParser(item.blog_post.substr(0, 180))}...

                          </>
                            ) : (
                                <>{ReactHtmlParser(item.blog_post.substr(0, 180))}</>
                              )}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Col>
                <Col xs="12" lg="5">
                  <h4 className="sptitle">
                    <a href={AppConstant.APP_URL + "/about-us/sbi-general-in-news"} target="_blank" rel="noopener noreferrer">{latest_news?latest_news:'Latest News'}</a>
                  </h4>
                  <div className="hNewsMain">
                    {this.state.newsList.map((item, index) => (
                      <div
                        className="hNewsSing "
                        key={index}
                        onClick={() => this.gtmNewsClickHandler("homepage_5_latest_news_click", "Home Page", "Latest News - " + item.headline)}
                      >
                        {/* {item.image && item.image.url ? (
                          <figure className="m-0">
                            <a href={AppConstant.APP_URL + `/news-details/${item.headline.toLowerCase().replace(/\s+/g, "-")}/${item.id}`} target="_blank" rel="noopener noreferrer">

                              <img
                                alt=""
                                src={AppConstant.IMG_BASE_URL + item.image.url}
                              />
                            </a>
                          </figure>
                        ) : (
                            <figure className="m-0"> */}
                              {/* <Link
                                to={{
                                  pathname: `/news-details/${item.headline
                                    .replace(/\s+/g, "-")
                                    .toLowerCase()}/${item.id}`
                                }}
                              > */}
                              {/* <a href={AppConstant.APP_URL + `/news-details/${item.headline.toLowerCase().replace(/\s+/g, "-")}/${item.id}`} target="_blank" rel="noopener noreferrer">
                                <img
                                  alt=""
                                  src={require("../../assets/images/no-news.jpg")}
                                />
                              </a>
                            </figure>
                          )} */}
                        <div className="hNewsMiddle">
                          <h5>
                            <a href={AppConstant.APP_URL + `/news-details/${item.headline.toLowerCase().replace(/\s+/g, "-")}/${item.id}`} target="_blank" rel="noopener noreferrer">
                              {item.headline}
                            </a>
                          </h5>
                          <span className="postDate">
                            {AppConstant.dateFormater(
                              item.published_on,
                              "DD MMMM, YYYY"
                            )}
                          </span>
                        </div>

                        <div className="hNewsRight">
                          <a href={AppConstant.APP_URL + `/news-details/${item.headline.toLowerCase().replace(/\s+/g, "-")}/${item.id}`} target="_blank" rel="noopener noreferrer">.</a>
                        </div>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>
            )}
          {/* Blogs Main Panel */}
        </Container>
      </section>
    );
  }
}

export default HomeBlogsLatestNews;
