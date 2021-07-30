import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import BaseComponent from "../../BaseComponent";
import { Row, Container, Col } from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
import BlogSubscribe from "./BlogSubscribe";
import BlogRelatedPost from "./BlogRelatedPost";

import Axios from "../../../Services/Shared/Axios.js";
import * as AppConstant from "../../AppConstant";

import { Facebook, Twitter, Linkedin } from "react-social-sharing";
import HelmetData from "../../Common/HelmetData";

const styles = {
  background: "none",
  padding: "5px 0"
};

class BlogDetails extends Component {
  constructor(props) {
    super(props);

    window.scrollTo(0, 0);

    const blogItem = props.Name;
    const { slug } = props.match.params;

    if (typeof blogItem === "undefined") {
      this.state = {
        blogSlug: slug,
        blogItem: "",
        showLoader: true
      };
    } else {
      this.state = {
        blogSlug: slug,
        blogItem: blogItem.blogItem,
        showLoader: true
      };
    }
  }

  componentDidMount() {
    if (this.state.blogItem === "") {
      this.getBlogDetails(this.state.blogSlug);
    } else {
      this.setState({
        showLoader: false
      });
    }
  }

  handleCategoryItemClick = blogItem => {
    this.setState({
      blogItem: blogItem,
      showLoader: false
    });
  };

  getBlogDetails = blogSlug => {
    Axios({
      method: "get",
      url: `/blogs?slug=${this.state.blogSlug}`
    })
      .then(res => {
        this.setState({
          blogItem: res.data[0],
          showLoader: false
        });
      })
      .catch(err => {
        console.log(err);
        console.log("|Blog Details Error|");
      });
  };

  render() {
    return (
      <>
        {/* <Helmet> */}
        <HelmetData pageComponentType="BlogDetails" />

        {this.state.showLoader ? null : (
          <BaseComponent pageTitle="blogdetails">
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

              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to={"/home"}>Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to={"/blog"}>Blogs</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <span className="active">{this.state.blogItem.blog_title}</span>
                </li>
              </ol>

              <div className="blog-details">
                {this.state.blogItem.featured_image &&
                  this.state.blogItem.featured_image.url ? (
                    <figure className="blog-details-pic">
                      <img
                        alt={this.state.blogItem.featured_image.name}
                        src={
                          AppConstant.IMG_BASE_URL +
                          this.state.blogItem.featured_image.url
                        }
                      />
                    </figure>
                  ) : null}
              </div>
              <div className="blog-details-header hide-mobile">
                <Row>
                  <Col sm="12" lg="6" className="">
                    <div className="date">
                      {AppConstant.dateFormater(
                        this.state.blogItem.created_at,
                        "DD MMM, YYYY"
                      )}
                    </div>

                    <div className="social-links">
                      <ul>
                        <li>
                          <Facebook
                            style={styles}
                            solid
                            small
                            link={window.location.href}
                          />
                        </li>
                        <li>
                          <Twitter
                            style={styles}
                            solid
                            small
                            message={this.state.blogItem.blog_title}
                            link={window.location.href}
                          />
                        </li>
                        <li>
                          <Linkedin
                            style={styles}
                            solid
                            small
                            message={this.state.blogItem.blog_title}
                            link={window.location.href}
                          />
                        </li>
                        {/* <li>
                          <Google
                            style={styles}
                            solid
                            small
                            link={window.location.href}
                          />
                        </li> */}
                      </ul>
                    </div>
                  </Col>
                  <Col sm="12" lg="6" className=""></Col>
                </Row>
              </div>

              <div className="blog-details-content">
                <h2>{this.state.blogItem.blog_title}</h2>

                <div>{ReactHtmlParser(this.state.blogItem.blog_post)}</div>
              </div>

              {/* Subscribe Our Blog */}
              <BlogSubscribe subscribeType="BlogDetails" blogTitle={this.state.blogItem.blog_title} />

              {/* Related Post */}
              <BlogRelatedPost
                postCategoryType={
                  this.state.blogItem.blogcategory.blog_category
                }
                postCategoryID={this.state.blogItem.blogcategory.id}
                postID={this.state.blogItem.id}
                handleCategoryItemClick={this.handleCategoryItemClick}
              />
            </Container>
          </BaseComponent>
        )}
      </>
    );
  }
}

export default BlogDetails;
