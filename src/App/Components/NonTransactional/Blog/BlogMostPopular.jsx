import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "../../../Services/Shared/Axios.js";
import * as AppConstant from "../../AppConstant";

class BlogMostPopular extends Component {
  constructor() {
    super();

    this.state = {
      mostPopularCategoryList: [],
      showLoader: true
    };
  }

  componentDidMount() {
    this.getMostPopularCategoryList();
  }

  getMostPopularCategoryList = () => {
    Axios({
      method: "get",
      url: "/blogs?_sort=view_count:desc&_limit=2"
    })
      .then(res => {
        this.setState({
          mostPopularCategoryList: res.data,
          showLoader: false
        });
      })
      .catch(err => {
        console.log(err);
        console.log("|Most Popular Category List Error|");
      });
  };

  render() {
    return (
      <>
        {this.state.showLoader ? (
          <div className="side-box">
            <h2>Most Popular</h2>
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
            </ul>
          </div>
        ) : (
          <div className="side-box">
            <h2>Most Popular</h2>
            {this.state.mostPopularCategoryList &&
              this.state.mostPopularCategoryList.length > 0 && (
                <ul className="popular-blog-list">
                  {this.state.mostPopularCategoryList.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={{
                          pathname: `/blog-details/${
                            item.slug
                          }`,
                          state: { blogItem: item }
                        }}
                      >
                        <div className="title">
                          {item.blog_title.length > 80 ? (
                            <>
                              {item.blog_title.substr(0, 80)}
                              ...
                            </>
                          ) : (
                            <>{item.blog_title}</>
                          )}
                        </div>
                        <div className="date">
                          {AppConstant.dateFormater(
                            item.created_at,
                            "DD MMMM, YYYY"
                          )}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
          </div>
        )}
      </>
    );
  }
}

export default BlogMostPopular;
