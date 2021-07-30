import React, { Component } from "react";
import BaseComponent from "../../BaseComponent";
import { Row, Container, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";

import BlogSubscribe from "./BlogSubscribe";
import BlogCategory from "./BlogCategory";
import BlogMostPopular from "./BlogMostPopular";

import Axios from "../../../Services/Shared/Axios.js";
import * as AppConstant from "../../AppConstant";
import ReactHtmlParser from "react-html-parser";

import { isMobile } from "react-device-detect";
import HelmetData from "../../Common/HelmetData";

class Blog extends Component {
  constructor(props) {
    super(props);

    const { slug } = props.match.params;

    let urlBlogCategoryProduct = "";
    if (typeof slug === "undefined") {
      urlBlogCategoryProduct = "";
    } else {
      urlBlogCategoryProduct = slug;
    }

    this.state = {
      totalBlogListItem: 0,
      currentShowingBlogItem: 6,
      totalPageCount: 0,
      currentPage: 1,
      startRange: 0,
      blogList: [],
      selectedCategoryId: 0,
      selectedCategoryType: "",
      urlBlogCategoryProduct: urlBlogCategoryProduct,
      noBlogMSG: "",
    };
  }

  componentDidMount() {
    if (this.state.urlBlogCategoryProduct === "") {
      this.getBlogList(0, this.state.selectedCategoryId);
      this.getTotalPageCount(this.state.selectedCategoryId);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.location.pathname !== this.props.location.pathname &&
      this.props.location.pathname === "/blog"
    ) {
      this.props.history.push(prevProps.location.pathname);
    }
  }

  handleCategoryItemClick = (categoryID, categoryType, categorySlug) => {
    this.setState({
      totalBlogListItem: 0,
      currentShowingBlogItem: 6,
      totalPageCount: 0,
      currentPage: 1,
      startRange: 0,
      blogList: [],
      selectedCategoryId: categoryID,
      selectedCategoryType: categoryType,
      noBlogMSG: "",
    });
    this.getBlogList(0, categoryID);
    this.getTotalPageCount(categoryID);
    this.gtmCategoryClickHandler(
      "blog_listing_page_2_category_click",
      "blog_listing_page",
      categorySlug
    );

    let slug = "";
    if (categorySlug && categorySlug !== null && categorySlug !== "") {
      slug = categorySlug;
    }
    this.props.history.push(`/blog/${slug}`);
  };

  getTotalPageCount(selectedCategoryId) {
    let URL = "";
    if (selectedCategoryId !== 0) {
      URL = `blogs/count?blogcategory=${selectedCategoryId}`;
    } else {
      URL = "/blogs/count";
    }

    Axios({
      method: "get",
      url: URL,
    })
      .then((res) => {
        const pageCount = Math.ceil(
          res.data / this.state.currentShowingBlogItem
        );
        this.setState({
          totalBlogListItem: res.data,
          totalPageCount: pageCount,
          currentPage: 1,
        });
      })
      .catch((err) => {
        console.log(err);
        console.log("|Blog Page Count Error|");
      });
  }

  getBlogList = (startRange, selectedCategoryId) => {
    let URL = "";
    if (selectedCategoryId !== 0) {
      URL = `/blogs?_limit=${this.state.currentShowingBlogItem}&blogcategory=${selectedCategoryId}&_sort=created_at:desc&_start=${startRange}`;
    } else {
      console.log(startRange);
      URL = `/blogs?_limit=${this.state.currentShowingBlogItem}&_sort=created_at:desc&_start=${startRange}`;
    }

    Axios({
      method: "get",
      url: URL,
    })
      .then((res) => {
        if (res.data.length > 0) {
          this.setState({
            blogList: res.data,
            noBlogMSG: "",
          });
        } else {
          this.setState({
            blogList: [],
            noBlogMSG: "Coming Soon, our writers are writing great stuff here!",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        console.log("|Blog Error|");
      });
  };

  handleArrowClick = (isNext) => {
    if (isNext) {
      if (this.state.currentPage < this.state.totalPageCount) {
        this.setState({
          currentPage: this.state.currentPage + 1,
          startRange: this.state.startRange + this.state.currentShowingBlogItem,
        });
        this.getBlogList(
          this.state.startRange + 6,
          this.state.selectedCategoryId
        );
      }
    } else {
      if (this.state.currentPage > 1) {
        this.setState({
          currentPage: this.state.currentPage - 1,
          startRange: this.state.startRange - this.state.currentShowingBlogItem,
        });
        this.getBlogList(
          this.state.startRange - 6,
          this.state.selectedCategoryId
        );
      }
    }
  };

  gtmClickHandler = (eventName, pageType, clickText) => {
    window.dataLayer = window.dataLayer || [];
    const data = {
      event: eventName,
      pagetype: pageType,
      blog_title: clickText,
    };
    window.dataLayer.push(data);
  };

  gtmCategoryClickHandler = (eventName, pageType, blogCategory) => {
    window.dataLayer = window.dataLayer || [];
    const data = {
      event: eventName,
      pagetype: pageType,
      blog_category: blogCategory,
    };
    window.dataLayer.push(data);
  };

  render() {
    let appUrl = AppConstant.APP_URL;
    return (
      <BaseComponent pageTitle="blog">
        {/* <Helmet> */}
        <HelmetData pageComponentType="Blog" />

        {/* Header Start */}
        {isMobile ? (
          <section className="topform product-header">
            <div className="insuTab">
              <h1>Samvad</h1>
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
                  <h1>Samvad</h1>
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
          {this.state.blogList && this.state.blogList.length === 0 ? (
            <Row className="rotectRow blog-first-block">
              <Col sm="12" lg="8">
                <h5>{this.state.noBlogMSG}</h5>
              </Col>
            </Row>
          ) : null}

          <Row className="rotectRow blog-first-block">
            {/* Category */}
            <>
              {isMobile ? (
                <BlogCategory
                  categoryType="Mobile"
                  handleCategoryItemClick={this.handleCategoryItemClick}
                  categoryProduct={this.state.urlBlogCategoryProduct}
                />
              ) : null}
            </>

            {/* Blog 1 */}
            <Col sm="12" lg="8">
              {this.state.blogList.length > 0 && this.state.blogList[0] ? (
                <div
                  className="blog-box"
                  onClick={() => {
                    this.gtmClickHandler(
                      "blog_listing_page_3_select_article",
                      "blog_listing_page",
                      this.state.blogList[0].blog_title
                    );
                  }}
                >
                  {this.state.blogList[0].featured_image &&
                  this.state.blogList[0].featured_image.url ? (
                    <figure className="blog-figure">
                      {/* <Link
                          to={{
                            pathname: `/blog-details/${this.state.blogList[0].slug}`,
                            state: { blogItem: this.state.blogList[0] }
                          }}
                        > */}
                      <a
                        href={
                          appUrl +
                          `/blog-details/${this.state.blogList[0].slug}`
                        }
                      >
                        <img
                          className="img-fluid"
                          alt={this.state.blogList[0].featured_image.name}
                          src={
                            AppConstant.IMG_BASE_URL +
                            this.state.blogList[0].featured_image.url
                          }
                        />
                        {/* </Link> */}
                      </a>
                    </figure>
                  ) : null}
                  <div className="blog-content">
                    <div className="blog-head">
                      <div className="blog-category">
                        {this.state.blogList[0].blogcategory.blog_category}
                      </div>
                      <div className="blog-time">
                        {AppConstant.dateFormater(
                          this.state.blogList[0].created_at,
                          "DD MMM, YYYY"
                        )}
                      </div>
                    </div>
                    <h2 className="blog-title">
                      {/* <Link
                        to={{
                          pathname: `/blog-details/${this.state.blogList[0].slug}`,
                          state: { blogItem: this.state.blogList[0] },
                        }}
                      > */}
                      <a
                        href={
                          appUrl +
                          `/blog-details/${this.state.blogList[0].slug}`
                        }
                      >
                        {this.state.blogList[0].blog_title.length > 150 ? (
                          <>
                            {this.state.blogList[0].blog_title.substr(0, 150)}
                            ...
                          </>
                        ) : (
                          <>{this.state.blogList[0].blog_title}</>
                        )}
                        {/* </Link> */}
                      </a>
                    </h2>
                    <>
                      {isMobile ? null : (
                        <div className="blog-article">
                          <>
                            {AppConstant.isTextTruncateReadMore(
                              this.state.blogList[0].blog_post,
                              310
                            ) ? (
                              <div>
                                <>
                                  {ReactHtmlParser(
                                    AppConstant.textTruncate(
                                      this.state.blogList[0].blog_post,
                                      310,
                                      "..."
                                    )
                                  )}
                                </>
                                {/* <Link
                                  to={{
                                    pathname: `/blog-details/${this.state.blogList[0].slug}`,
                                    state: { blogItem: this.state.blogList[0] },
                                  }}
                                > */}
                                <a
                                  href={
                                    appUrl +
                                    `/blog-details/${this.state.blogList[0].slug}`
                                  }
                                >
                                  Read More
                                  {/* </Link> */}
                                </a>
                              </div>
                            ) : null}
                          </>
                        </div>
                      )}
                    </>
                  </div>
                </div>
              ) : null}
            </Col>

            <Col sm="12" lg="4" className={isMobile ? "hide-mobile" : "not"}>
              <div className="blog-side-panel">
                {/* Category */}

                <>
                  {isMobile ? null : (
                    <BlogCategory
                      categoryType="Web"
                      handleCategoryItemClick={this.handleCategoryItemClick}
                      categoryProduct={this.state.urlBlogCategoryProduct}
                    />
                  )}
                </>

                {/* Most Popular */}
                <BlogMostPopular />
              </div>
            </Col>
          </Row>

          <Row className="rotectRow blog-second-block">
            <Col sm="12" lg="4">
              {/* Blog 2*/}
              {this.state.blogList.length > 0 && this.state.blogList[1] ? (
                <div
                  className="blog-box"
                  onClick={() => {
                    this.gtmClickHandler(
                      "blog_listing_page_3_select_article",
                      "blog_listing_page",
                      this.state.blogList[1].blog_title
                    );
                  }}
                >
                  {this.state.blogList[1].featured_image &&
                  this.state.blogList[1].featured_image.url ? (
                    <figure className="blog-figure">
                      {/* <Link
                        to={{
                          pathname: `/blog-details/${this.state.blogList[1].slug}`,
                          state: { blogItem: this.state.blogList[1] },
                        }}
                      > */}
                      <a
                        href={
                          appUrl +
                          `/blog-details/${this.state.blogList[1].slug}`
                        }
                      >
                        <img
                          className="img-fluid"
                          alt={this.state.blogList[1].featured_image.name}
                          src={
                            AppConstant.IMG_BASE_URL +
                            this.state.blogList[1].featured_image.url
                          }
                        />
                        {/* </Link> */}
                      </a>
                    </figure>
                  ) : null}
                  <div className="blog-content">
                    <div className="blog-head">
                      <div className="blog-category">
                        {this.state.blogList[1].blogcategory.blog_category}
                      </div>
                      <div className="blog-time">
                        {AppConstant.dateFormater(
                          this.state.blogList[1].created_at,
                          "DD MMM, YYYY"
                        )}
                      </div>
                    </div>
                    <h2 className="blog-title">
                      {/* <Link
                        to={{
                          pathname: `/blog-details/${this.state.blogList[1].slug}`,
                          state: { blogItem: this.state.blogList[1] },
                        }}
                      > */}
                      <a
                        href={
                          appUrl +
                          `/blog-details/${this.state.blogList[1].slug}`
                        }
                      >
                        {this.state.blogList[1].blog_title.length > 45 ? (
                          <>
                            {this.state.blogList[1].blog_title.substr(0, 45)}
                            ...
                          </>
                        ) : (
                          <>{this.state.blogList[1].blog_title}</>
                        )}
                        {/* </Link> */}
                      </a>
                    </h2>
                  </div>
                </div>
              ) : null}

              <>
                {isMobile ? (
                  <BlogSubscribe subscribeType="BlogListing" />
                ) : null}
              </>

              {/* Blog 3 */}
              {this.state.blogList.length > 0 && this.state.blogList[2] ? (
                <div
                  className="blog-box"
                  onClick={() => {
                    this.gtmClickHandler(
                      "blog_listing_page_3_select_article",
                      "blog_listing_page",
                      this.state.blogList[2].blog_title
                    );
                  }}
                >
                  {this.state.blogList[2].featured_image &&
                  this.state.blogList[2].featured_image.url ? (
                    <figure className="blog-figure">
                      {/* <Link
                        to={{
                          pathname: `/blog-details/${this.state.blogList[2].slug}`,
                          state: { blogItem: this.state.blogList[2] },
                        }}
                      > */}
                      <a
                        href={
                          appUrl +
                          `/blog-details/${this.state.blogList[2].slug}`
                        }
                      >
                        <img
                          className="img-fluid"
                          alt={this.state.blogList[2].featured_image.name}
                          src={
                            AppConstant.IMG_BASE_URL +
                            this.state.blogList[2].featured_image.url
                          }
                        />
                        {/* </Link> */}
                      </a>
                    </figure>
                  ) : null}
                  <div className="blog-content">
                    <div className="blog-head">
                      <div className="blog-category">
                        {this.state.blogList[2].blogcategory.blog_category}
                      </div>
                      <div className="blog-time">
                        {AppConstant.dateFormater(
                          this.state.blogList[2].created_at,
                          "DD MMM, YYYY"
                        )}
                      </div>
                    </div>
                    <h2 className="blog-title">
                      {/* <Link
                        to={{
                          pathname: `/blog-details/${this.state.blogList[2].slug}`,
                          state: { blogItem: this.state.blogList[2] },
                        }}
                      > */}
                      <a
                        href={
                          appUrl +
                          `/blog-details/${this.state.blogList[2].slug}`
                        }
                      >
                        {this.state.blogList[2].blog_title.length > 45 ? (
                          <>
                            {this.state.blogList[2].blog_title.substr(0, 45)}
                            ...
                          </>
                        ) : (
                          <>{this.state.blogList[2].blog_title}</>
                        )}
                        {/* </Link> */}
                      </a>
                    </h2>
                  </div>
                </div>
              ) : null}
            </Col>

            {/* Blog 4 */}
            <Col sm="12" lg="8">
              {this.state.blogList.length > 0 && this.state.blogList[3] ? (
                <div
                  className="blog-box"
                  onClick={() => {
                    this.gtmClickHandler(
                      "blog_listing_page_3_select_article",
                      "blog_listing_page",
                      this.state.blogList[3].blog_title
                    );
                  }}
                >
                  {this.state.blogList[3].featured_image &&
                  this.state.blogList[3].featured_image.url ? (
                    <figure className="blog-figure">
                      {/* <Link
                        to={{
                          pathname: `/blog-details/${this.state.blogList[3].slug}`,
                          state: { blogItem: this.state.blogList[3] },
                        }}
                      > */}
                      <a
                        href={
                          appUrl +
                          `/blog-details/${this.state.blogList[3].slug}`
                        }
                      >
                        <img
                          className="img-fluid"
                          alt={this.state.blogList[3].featured_image.name}
                          src={
                            AppConstant.IMG_BASE_URL +
                            this.state.blogList[3].featured_image.url
                          }
                        />
                        {/* </Link> */}
                      </a>
                    </figure>
                  ) : null}
                  <div className="blog-content">
                    <div className="blog-head">
                      <div className="blog-category">
                        {this.state.blogList[3].blogcategory.blog_category}
                      </div>
                      <div className="blog-time">
                        {AppConstant.dateFormater(
                          this.state.blogList[3].created_at,
                          "DD MMM, YYYY"
                        )}
                      </div>
                    </div>
                    <h2 className="blog-title">
                      {/* <Link
                        to={{
                          pathname: `/blog-details/${this.state.blogList[3].slug}`,
                          state: { blogItem: this.state.blogList[3] },
                        }}
                      > */}
                      <a
                        href={
                          appUrl +
                          `/blog-details/${this.state.blogList[3].slug}`
                        }
                      >
                        {this.state.blogList[3].blog_title.length > 150 ? (
                          <>
                            {this.state.blogList[3].blog_title.substr(0, 150)}
                            ...
                          </>
                        ) : (
                          <>{this.state.blogList[3].blog_title}</>
                        )}
                        {/* </Link> */}
                      </a>
                    </h2>
                    <>
                      {isMobile ? null : (
                        <div className="blog-article">
                          <>
                            {AppConstant.isTextTruncateReadMore(
                              this.state.blogList[3].blog_post,
                              430
                            ) ? (
                              <div>
                                <>
                                  {ReactHtmlParser(
                                    AppConstant.textTruncate(
                                      this.state.blogList[3].blog_post,
                                      430,
                                      "..."
                                    )
                                  )}
                                </>
                                {/* <Link
                                  to={{
                                    pathname: `/blog-details/${this.state.blogList[3].slug}`,
                                    state: { blogItem: this.state.blogList[3] },
                                  }}
                                > */}
                                <a
                                  href={
                                    appUrl +
                                    `/blog-details/${this.state.blogList[3].slug}`
                                  }
                                >
                                  Read More
                                  {/* </Link> */}
                                </a>
                              </div>
                            ) : null}
                          </>
                        </div>
                      )}
                    </>
                  </div>
                </div>
              ) : null}
            </Col>
          </Row>

          <Row className="rotectRow blog-third-block">
            <Col sm="12" lg="8" className="">
              <Row>
                {/* Blog 5 */}
                <Col sm="12" lg="6">
                  {this.state.blogList.length > 0 && this.state.blogList[4] ? (
                    <div
                      className="blog-box"
                      onClick={() => {
                        this.gtmClickHandler(
                          "blog_listing_page_3_select_article",
                          "blog_listing_page",
                          this.state.blogList[4].blog_title
                        );
                      }}
                    >
                      {this.state.blogList[4].featured_image &&
                      this.state.blogList[4].featured_image.url ? (
                        <figure className="blog-figure">
                          {/* <Link
                            to={{
                              pathname: `/blog-details/${this.state.blogList[4].slug}`,
                              state: { blogItem: this.state.blogList[3] },
                            }}
                          > */}
                          <a
                            href={
                              appUrl +
                              `/blog-details/${this.state.blogList[4].slug}`
                            }
                          >
                            <img
                              className="img-fluid"
                              alt={this.state.blogList[4].featured_image.name}
                              src={
                                AppConstant.IMG_BASE_URL +
                                this.state.blogList[4].featured_image.url
                              }
                            />
                            {/* </Link> */}
                          </a>
                        </figure>
                      ) : null}
                      <div className="blog-content">
                        <div className="blog-head">
                          <div className="blog-category">
                            {this.state.blogList[4].blogcategory.blog_category}
                          </div>
                          <div className="blog-time">
                            {AppConstant.dateFormater(
                              this.state.blogList[4].created_at,
                              "DD MMM, YYYY"
                            )}
                          </div>
                        </div>
                        <h2 className="blog-title">
                          {/* <Link
                            to={{
                              pathname: `/blog-details/${this.state.blogList[4].slug}`,
                              state: { blogItem: this.state.blogList[4] },
                            }}
                          > */}
                          <a
                            href={
                              appUrl +
                              `/blog-details/${this.state.blogList[4].slug}`
                            }
                          >
                            {this.state.blogList[4].blog_title.length > 45 ? (
                              <>
                                {this.state.blogList[4].blog_title.substr(
                                  0,
                                  45
                                )}
                                ...
                              </>
                            ) : (
                              <>{this.state.blogList[4].blog_title}</>
                            )}
                            {/* </Link> */}
                          </a>
                        </h2>
                      </div>
                    </div>
                  ) : null}
                </Col>

                {/* Blog 6 */}
                <Col sm="12" lg="6">
                  {this.state.blogList.length > 0 && this.state.blogList[5] ? (
                    <div
                      className="blog-box"
                      onClick={() => {
                        this.gtmClickHandler(
                          "blog_listing_page_3_select_article",
                          "blog_listing_page",
                          this.state.blogList[5].blog_title
                        );
                      }}
                    >
                      {this.state.blogList[5].featured_image &&
                      this.state.blogList[5].featured_image.url ? (
                        <figure className="blog-figure">
                          {/* <Link
                            to={{
                              pathname: `/blog-details/${this.state.blogList[5].slug}`,
                              state: { blogItem: this.state.blogList[3] },
                            }}
                          > */}
                          <a
                            href={
                              appUrl +
                              `/blog-details/${this.state.blogList[5].slug}`
                            }
                          >
                            <img
                              className="img-fluid"
                              alt={this.state.blogList[5].featured_image.name}
                              src={
                                AppConstant.IMG_BASE_URL +
                                this.state.blogList[5].featured_image.url
                              }
                            />
                            {/* </Link> */}
                          </a>
                        </figure>
                      ) : null}
                      <div className="blog-content">
                        <div className="blog-head">
                          <div className="blog-category">
                            {this.state.blogList[5].blogcategory.blog_category}
                          </div>
                          <div className="blog-time">
                            {AppConstant.dateFormater(
                              this.state.blogList[5].created_at,
                              "DD MMM, YYYY"
                            )}
                          </div>
                        </div>
                        <h2 className="blog-title">
                          {/* <Link
                            to={{
                              pathname: `/blog-details/${this.state.blogList[5].slug}`,
                              state: { blogItem: this.state.blogList[5] },
                            }}
                          > */}
                          <a
                            href={
                              appUrl +
                              `/blog-details/${this.state.blogList[5].slug}`
                            }
                          >
                            {this.state.blogList[5].blog_title.length > 45 ? (
                              <>
                                {this.state.blogList[5].blog_title.substr(
                                  0,
                                  45
                                )}
                                ...
                              </>
                            ) : (
                              <>{this.state.blogList[5].blog_title}</>
                            )}
                            {/* </Link> */}
                          </a>
                        </h2>
                      </div>
                    </div>
                  ) : null}
                </Col>
              </Row>
            </Col>

            <>
              {isMobile ? null : <BlogSubscribe subscribeType="BlogListing" />}
            </>
          </Row>

          {this.state.totalPageCount > 1 ? (
            <Row className="pt30 ">
              <Col sm="12" lg="8" className="text-right blog-carousel-control">
                <span className="active">{this.state.currentPage}</span> /{" "}
                {this.state.totalPageCount}
                <img
                  className={
                    this.state.currentPage === 1
                      ? "add-opticity"
                      : "remove-opticity"
                  }
                  onClick={this.handleArrowClick.bind(this, false)}
                  src={require("../../../assets/images/arrow-left.png")}
                  alt=""
                />
                <img
                  className={
                    this.state.currentPage === this.state.totalPageCount
                      ? "add-opticity"
                      : "remove-opticity"
                  }
                  onClick={this.handleArrowClick.bind(this, true)}
                  src={require("../../../assets/images/arrow-right.png")}
                  alt=""
                />
              </Col>
            </Row>
          ) : null}
        </Container>
      </BaseComponent>
    );
  }
}

export default Blog;
