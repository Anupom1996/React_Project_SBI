import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import * as AppConstant from "../AppConstant";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Axios from "../../Services/Shared/Axios";
import CardLink from "./common/CardLink";
import { dateFormater, textTruncate } from "../AppConstant";

class BlogInner extends Component {
  state = {
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
    presentBlog: {},
    blogs: [],
  };
  getBlogDetails = (slug) => {
    const url = `/iablogs?slug=${slug}`;
    if (!!slug) {
      Axios({
        method: "get",
        url: url,
      })
        .then((res) => {
          let newEntry = {
            id: res.data[0].id,
            slug: res.data[0].slug,
            title: res.data[0].title,
            description: res.data[0].description,
            date: dateFormater(res.data[0].updated_at, "DD MMMM, YYYY"),
            imageUrl: res.data[0].image.url,
            imageName: res.data[0].image.name,
            category: res.data[0].iacategory.blog_cat,
          };
          this.setState({
            presentBlog: newEntry,
          });
          //Get Blog List
          const category = newEntry.category.split(" ")[0];
          this.getBlogList(category);
        })
        .catch((err) => {
          console.log(err);
          console.log("|Error|");
        });
    }
  };
  getBlogList = (category) => {
    let blogs = [];
    Axios({
      method: "get",
      url: `/iablogs?iacategory.blog_cat=${category}%20Insurance`,
    })
      .then((res) => {
        const { data } = res;
        if ((data && data.length) > 0) {
          for (const blog of data) {
            let newEntry = {
              id: blog.id,
              slug: blog.slug,
              title: blog.title,
              // description: blog.description.slice(0, 85) + "...",
              description: textTruncate(
                blog.description.replace(/<(.|\n)*?>/g, ""),
                85
              ),
              date: dateFormater(res.data[0].updated_at, "DD MMMM, YYYY"),
              imageUrl: blog.image.url,
              imageName: blog.image.name,
            };
            blogs.push(newEntry);
          }
          this.setState({
            blogs,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        console.log("|Error|");
      });
  };

  componentDidMount() {
    this.getBlogDetails(this.props.match.params.slug);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.location.pathname &&
      this.props.location.pathname &&
      prevProps.location.pathname !== this.props.location.pathname
    ) {
      this.getBlogDetails(this.props.match.params.slug);
    }
  }

  render() {
    const { presentBlog, blogs } = this.state;
    return (
      <div>
        {!!presentBlog ? (
          <div className="kn-blg-details">
            <div className="kn-blg-head">
              {isMobile ? (
                <h3>{ReactHtmlParser(presentBlog.title)}</h3>
              ) : (
                <div className="kn-blg-head-a">
                  {" "}
                  <Link
                    to={{
                      pathname: "/gi-simplified/blogs",
                      state: { category: presentBlog.category },
                    }}
                  >
                    <img
                      src={require("../../assets/images/next-brt.png")}
                      alt=""
                    />
                  </Link>
                  <h3>{ReactHtmlParser(presentBlog.title)}</h3>
                </div>
              )}
              <ol>
                <li>{presentBlog.date} </li>
              </ol>
            </div>
            <div className="kn-blg-cont-main">
              <figure>
                <img
                  src={AppConstant.IMG_BASE_URL + presentBlog.imageUrl}
                  alt={presentBlog.imageName}
                />
              </figure>
              <p>{ReactHtmlParser(presentBlog.description)}</p>
            </div>
          </div>
        ) : null}
        {blogs.length > 0 ? (
          <div className="kn-rld-post">
            <h3>Related Blogs</h3>
            <div className="kn-relaed">
              <OwlCarousel
                className="owl-theme"
                loop
                autoplay={true}
                margin={20}
                nav={true}
                dots={true}
                //dotsEach={true}
                //items={4}
                responsive={this.state.responsive}
              >
                {blogs.map((blog) => (
                  <CardLink
                    key={blog.id}
                    link={`/gi-simplified/blog/${blog.slug}`}
                    title={blog.title}
                    description={blog.description}
                    imageUrl={blog.imageUrl}
                    imageName={blog.imageName}
                    date={blog.date}
                  />
                ))}
              </OwlCarousel>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default BlogInner;
