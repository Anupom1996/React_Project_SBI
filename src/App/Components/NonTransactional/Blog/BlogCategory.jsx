import React, { Component } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "../../../Services/Shared/Axios.js";
import { isMobile } from "react-device-detect";

class BlogCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryList: [],
      showLoader: true
    };
  }

  componentDidMount() {
    this.getCategoryList();
  }

  getCategoryList = () => {
    Axios({
      method: "get",
      url: "/blogcategories"
    })
      .then(res => {
        res.data.map(listItem => {
          listItem["isSelected"] = false;
          return true;
        });

        res.data = res.data.filter(function(obj) {
          return obj.publish === true;
        });

        this.setState({
          categoryList: res.data,
          showLoader: false
        });

        if (this.props.categoryProduct !== "") {
          let definedBlogCategory = res.data;
          let indexDefinedBlogCategory = definedBlogCategory.findIndex(
            x =>
              x.slug.toString().toLowerCase() ===
              this.props.categoryProduct.toString().toLowerCase()
          );
          if (indexDefinedBlogCategory > -1) {
            this.handleBlogCategoryClick(
              definedBlogCategory[indexDefinedBlogCategory]
            );
          }
        }
      })
      .catch(err => {
        console.log(err);
        console.log("|Category List Error|");
      });
  };

  handleBlogCategoryClick = categoryListItem => {
    this.state.categoryList.map(item => {
      if (item.id === categoryListItem.id) {
        item.isSelected = true;
      } else {
        item.isSelected = false;
      }
      return true;
    });
    this.props.handleCategoryItemClick(
      categoryListItem.id,
      categoryListItem.blog_category,
      categoryListItem.slug
    );
  };

  render() {
    return (
      <>
        {this.state.showLoader ? (
          <>
            {!isMobile ? (
              <div className="side-box">
                <h2>Category</h2>
                <ul className="popular-blog-list">
                  <li>
                    <div className="loader line"></div>
                    <div className="loader line"></div>
                  </li>
                  <li>&nbsp;</li>
                  <li>
                    <div className="loader line"></div>
                    <div className="loader line"></div>
                  </li>
                  <li>&nbsp;</li>
                  <li>
                    <div className="loader line"></div>
                    <div className="loader line"></div>
                  </li>
                  <li>&nbsp;</li>
                  <li>
                    <div className="loader line"></div>
                    <div className="loader line"></div>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="side-box">
                <ul className="popular-blog-list">
                  <li>&nbsp;</li>
                  <li>
                    <div className="loader line"></div>
                    <div className="loader line"></div>
                  </li>
                  <li>&nbsp;</li>
                </ul>
              </div>
            )}
          </>
        ) : (
          <>
            {this.props.categoryType === "Mobile" ? (
              <Col sm="12" lg="4" className="hide-desktop mobile-scroll">
                <div className="blog-side-panel ">
                  <div className="side-box pad30">
                    {this.state.categoryList &&
                      this.state.categoryList.length > 0 && (
                        <ul className="category-list mobile">
                          {this.state.categoryList.map((item, index) => (
                            <li
                              key={index}
                              className={
                                item.isSelected
                                  ? "category-list-selected"
                                  : "category-list-not-selected"
                              }
                            >
                              <Link
                                to={"#"}
                                onClick={this.handleBlogCategoryClick.bind(
                                  this,
                                  item
                                )}
                              >
                                {item.blog_category}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                  </div>
                </div>
              </Col>
            ) : (
              <div className="side-box">
                <h2>Category</h2>
                {this.state.categoryList && this.state.categoryList.length > 0 && (
                  <ul className="category-list">
                    {this.state.categoryList.map((item, index) => (
                      <li
                        key={index}
                        className={
                          item.isSelected
                            ? "category-list-selected"
                            : "category-list-not-selected"
                        }
                      >
                        <Link
                          to={"#"}
                          onClick={this.handleBlogCategoryClick.bind(
                            this,
                            item
                          )}
                        >
                          {item.blog_category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </>
        )}
      </>
    );
  }
}

export default BlogCategory;
