import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import Axios from "../../../Services/Shared/Axios.js";
import * as AppConstant from "../../AppConstant";

class BlogRelatedPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      relatedCategoryList: [],
      blogCategory: props.postCategoryType,
      showLoader: true,
      blogId: props.postID,
      blogCategoryId: props.postCategoryID
    };
  }

  componentDidMount() {
    this.getRelatedCategoryList(this.state.blogId);
  }

  getRelatedCategoryList = blogId => {
    Axios({
      method: "get",
      url: `/blogs?id_ne=${blogId}&_limit=3&blogcategory=${this.state.blogCategoryId}`
    })
      .then(res => {
        this.setState({
          relatedCategoryList: res.data,
          showLoader: false
        });
      })
      .catch(err => {
        console.log(err);
        console.log("|Most Popular Category List Error|");
      });
  };

  handleBlogItemclick = blogListItem => {
    console.log(blogListItem);
    this.setState({
      blogId: blogListItem.id,
      blogCategoryId: blogListItem.blogcategory.id
    });
    this.getRelatedCategoryList(blogListItem.id);
    this.props.handleCategoryItemClick(blogListItem);
    this.gtmClickHandler(blogListItem.blog_title);
  };

  gtmClickHandler = (clickText) => {
    window.dataLayer = window.dataLayer || [];
    const data = {
      'event': 'blog_article_page_2_related_posts_click',
      'pagetype': 'blog_article_page',
      'target_article_title': clickText
    };
    window.dataLayer.push(data);
  }

  render() {
    return (
      <>
        {this.state.showLoader ? (
          <>
            <div className="related-post hide-mobile">
              <>
                <h2>Related Posts</h2>
                <Row>
                  <Col sm="12" lg="4">
                    <div className="blog-box">
                      <figure className="blog-figure">
                        <div className="loader photo"></div>
                      </figure>
                      <div className="blog-content">
                        <div className="blog-head">
                          <div className="blog-category">
                            <div className="loader line"></div>
                          </div>
                          <div className="blog-time">
                            <div className="loader line"></div>
                          </div>
                        </div>
                        <h2 className="blog-title">
                          <div className="loader line"></div>
                          <div className="loader line"></div>
                        </h2>
                      </div>
                    </div>
                  </Col>
                </Row>
              </>
            </div>

            <div className="related-post-mobile hide-desktop">
              <h2>Related Posts</h2>
              <Row className="flex-no-wrap">
                <Col sm="12" >
                  <div className="blog-box">
                    <figure className="blog-figure">
                      <div className="loader photo"></div>
                    </figure>
                    <div className="blog-content">
                      <div className="blog-head">
                        <div className="blog-category">
                          <div className="loader line"></div>
                        </div>
                        <div className="blog-time">
                          <div className="loader line"></div>
                        </div>
                      </div>
                      <h2 className="blog-title">
                        <div className="loader line"></div>
                        <div className="loader line"></div>
                      </h2>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </>
        ) : (
            <>
              <div className="related-post hide-mobile">
                {this.state.relatedCategoryList &&
                  this.state.relatedCategoryList.length > 0 && (
                    <>
                      <h2>Related Posts</h2>
                      <Row>
                        {this.state.relatedCategoryList.map((item, index) => (
                          <Col sm="12" lg="4" key={index}>
                            <div className="blog-box">
                              {item.featured_image && item.featured_image.url ? (
                                <figure className="blog-figure">
                                  <Link
                                    to={{
                                      pathname: `/blog-details/${item.slug
                                        }`,
                                      state: { blogItem: item }
                                    }}
                                    onClick={this.handleBlogItemclick.bind(
                                      this,
                                      item
                                    )}
                                  >
                                    <img
                                      alt={item.featured_image.name}
                                      className="img-fluid"
                                      src={
                                        AppConstant.IMG_BASE_URL +
                                        item.featured_image.url
                                      }
                                    />
                                  </Link>
                                </figure>
                              ) : null}
                              <div className="blog-content">
                                <div className="blog-head">
                                  <div className="blog-category">
                                    {item.blogcategory.blog_category}
                                  </div>
                                  <div className="blog-time">
                                    {AppConstant.dateFormater(
                                      item.created_at,
                                      "DD MMM, YYYY"
                                    )}
                                  </div>
                                </div>
                                <h2 className="blog-title">
                                  <Link
                                    to={{
                                      pathname: `/blog-details/${item.slug
                                        }`,
                                      state: { blogItem: item }
                                    }}
                                    onClick={this.handleBlogItemclick.bind(
                                      this,
                                      item
                                    )}
                                  >
                                    {item.blog_title.length > 45 ? (
                                      <>
                                        {item.blog_title.substr(0, 45)}
                                      ...
                                    </>
                                    ) : (
                                        <>{item.blog_title}</>
                                      )}
                                  </Link>
                                </h2>
                              </div>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </>
                  )}
              </div>

              <div className="related-post-mobile hide-desktop">
                <h2>Related Posts</h2>
                {this.state.relatedCategoryList &&
                  this.state.relatedCategoryList.length && (
                    <Row className="flex-no-wrap">
                      {this.state.relatedCategoryList.map((item, index) => (
                        <Col sm="12" key={index}>
                          <div className="blog-box">
                            {item.featured_image && item.featured_image.url ? (
                              <figure className="blog-figure">
                                <Link
                                  to={{
                                    pathname: `/blog-details/${item.id
                                      }/${item.blog_title.replace(/\s+/g, "-").toLowerCase()}`,
                                    state: { blogItem: item }
                                  }}
                                  onClick={this.handleBlogItemclick.bind(
                                    this,
                                    item
                                  )}
                                >
                                  <img
                                    alt={item.featured_image.name}
                                    className="img-fluid"
                                    src={
                                      AppConstant.IMG_BASE_URL +
                                      item.featured_image.url
                                    }
                                  />
                                </Link>
                              </figure>
                            ) : null}
                            <div className="blog-content">
                              <div className="blog-head">
                                <div className="blog-category">
                                  {item.blogcategory.blog_category}
                                </div>
                                <div className="blog-time">
                                  {AppConstant.dateFormater(
                                    item.created_at,
                                    "DD MMM, YYYY"
                                  )}
                                </div>
                              </div>
                              <h2 className="blog-title">
                                <Link
                                  to={{
                                    pathname: `/blog-details/${item.id
                                      }/${item.blog_title.replace(/\s+/g, "-").toLowerCase()}`,
                                    state: { blogItem: item }
                                  }}
                                  onClick={this.handleBlogItemclick.bind(
                                    this,
                                    item
                                  )}
                                >
                                  {item.blog_title.length > 45 ? (
                                    <>
                                      {item.blog_title.substr(0, 45)}
                                    ...
                                  </>
                                  ) : (
                                      <>{item.blog_title}</>
                                    )}
                                </Link>
                              </h2>
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  )}
              </div>
            </>
          )}
      </>
    );
  }
}

export default BlogRelatedPost;
