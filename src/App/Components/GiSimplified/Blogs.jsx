import React, { Component } from "react";
import Axios from "../../Services/Shared/Axios";
import { Nav, Row, Col, Tab } from "react-bootstrap";
import CardLink from "./common/CardLink";
import { dateFormater, textTruncate } from "../AppConstant";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import { Scrollbars } from "react-custom-scrollbars";

class Blogs extends Component {
  state = {
    healthBlog: [],
    homeBlog: [],
    motorBlog: [],
    travelBlog: [],
    healthAllBlog: [],
    homeAllBlog: [],
    motorAllBlog: [],
    travelAllBlog: [],
    currentCategory: "",
    totalPageCount: 0,
    limit: 6,
    currentPage: 1,
  };

  setBlogInCategory = (data, blogCat) => {
    let blogs = [];
    if ((data && data.length) > 0) {
      for (const blog of data) {
        let newEntry = {
          id: blog.id,
          slug: blog.slug,
          title: blog.title,
          // description: blog.description.slice(0, 82) + "...",
          description: textTruncate(
            blog.description.replace(/<(.|\n)*?>/g, ""),
            85
          ),
          date: dateFormater(blog.updated_at, "DD MMMM, YYYY"),
          imageUrl: blog.image.url,
          imageName: blog.image.name,
        };
        blogs.push(newEntry);
      }
      switch (blogCat) {
        default:
        case "Health":
          this.setState({
            healthBlog: blogs,
          });
          break;
        case "Home":
          this.setState({
            homeBlog: blogs,
          });
          break;
        case "Motor":
          this.setState({
            motorBlog: blogs,
          });
          break;
        case "Travel":
          this.setState({
            travelBlog: blogs,
          });
          break;
      }
    }
  };

  setAllBlogInCategory = (data, blogCat) => {
    let blogs = [];
    if ((data && data.length) > 0) {
      for (const blog of data) {
        let newEntry = {
          id: blog.id,
          slug: blog.slug,
          title: blog.title,
          // description: blog.description.slice(0, 82) + "...",
          description: textTruncate(
            blog.description.replace(/<(.|\n)*?>/g, ""),
            85
          ),
          date: dateFormater(blog.updated_at, "DD MMMM, YYYY"),
          imageUrl: blog.image.url,
          imageName: blog.image.name,
        };
        blogs.push(newEntry);
      }
      switch (blogCat) {
        default:
        case "Health":
          this.setState({
            healthAllBlog: blogs,
          });
          break;
        case "Home":
          this.setState({
            homeAllBlog: blogs,
          });
          break;
        case "Motor":
          this.setState({
            motorAllBlog: blogs,
          });
          break;
        case "Travel":
          this.setState({
            travelAllBlog: blogs,
          });
          break;
      }
    }
  };

  getTotalPageCount = (blogCat) => {
    const url = `/iablogs/count?iacategory.blog_cat=${blogCat}%20Insurance`;
    if (!!url) {
      Axios({
        method: "get",
        url: `${url}`,
      })
        .then((res) => {
          // console.log(res.data);
          let totalPageCount = Math.ceil(res.data / this.state.limit);
          this.setState({
            totalPageCount,
            currentPage: 1,
            currentCategory: blogCat,
          });
        })
        .catch((err) => {
          console.log(err);
          console.log("|Error|");
        });
    }
  };

  getBlogList = (blogCat) => {
    if (blogCat !== this.state.currentCategory) {
      this.getTotalPageCount(blogCat);
      const url = `/iablogs?iacategory.blog_cat=${blogCat}%20Insurance&_limit=${this.state.limit}&_sort=created_at:desc&_start=0`;
      this.fetchBlogs(url, blogCat);

      const allUrl = `/iablogs?iacategory.blog_cat=${blogCat}%20Insurance&_sort=created_at:desc&_start=0`;
      // const allUrl = `/iablogs`;
      this.fetchAllBlogs(allUrl, blogCat);
    }
  };

  handleArrowClick = (currentPage) => {
    const { currentCategory, totalPageCount, limit } = this.state;
    if (!currentPage) {
      currentPage = totalPageCount;
    }
    if (currentPage > totalPageCount) {
      currentPage = 1;
    }
    this.setState({ currentPage });
    const start = (currentPage - 1) * limit;
    const url = `/iablogs?iacategory.blog_cat=${currentCategory}%20Insurance&_limit=${limit}&_sort=created_at:desc&_start=${start}`;
    this.fetchBlogs(url, currentCategory);
  };

  fetchBlogs = (url, category) => {
    if (!!url || !!category) {
      Axios({
        method: "get",
        url: `${url}`,
      })
        .then((res) => {
          this.setBlogInCategory(res.data, category);
        })
        .catch((err) => {
          console.log(err);
          console.log("|Error|");
        });
    }
  };

  fetchAllBlogs = (url, category) => {
    if (!!url || !!category) {
      Axios({
        method: "get",
        url: `${url}`,
      })
        .then((res) => {
          this.setAllBlogInCategory(res.data, category);
        })
        .catch((err) => {
          console.log(err);
          console.log("|Error|");
        });
    }
  };

  componentDidMount() {
    if (typeof this.props.location.state !== "undefined") {
      if (this.props.location.state.category.length > 0) {
        this.getBlogList(this.props.location.state.category.split(" ", 1)[0]);
      } else {
        this.getBlogList("Health");
      }
    } else {
      this.getBlogList("Health");
    }
  }

  render() {
    const {
      healthBlog,
      homeBlog,
      motorBlog,
      travelBlog,
      healthAllBlog,
      homeAllBlog,
      motorAllBlog,
      travelAllBlog,
      totalPageCount,
      currentPage,
      currentCategory,
    } = this.state;
    return (
      <div>
        <div className="blog-tab-content">
          <Tab.Container activeKey={`${currentCategory}-Insurance`}>
            <Row className="blog-tab-inner">
              <Col sm={12}>
                <Nav
                  variant="pills"
                  className="flex-row justify-content-center align-items-center"
                >
                  <Nav.Item>
                    <Nav.Link
                      eventKey="Health-Insurance"
                      onClick={() => this.getBlogList("Health")}
                    >
                      Health Insurance
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="Home-Insurance"
                      onClick={() => this.getBlogList("Home")}
                    >
                      Home Insurance
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="Motor-Insurance"
                      onClick={() => this.getBlogList("Motor")}
                    >
                      Motor Insurance
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="Travel-Insurance"
                      onClick={() => this.getBlogList("Travel")}
                    >
                      Travel Insurance
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={12}>
                <Tab.Content>
                  <Tab.Pane eventKey="Health-Insurance">
                    <div className="kn-blog-main">
                      <Row>
                        <Col lg={3} md={3} sm={12} className="">
                          <Scrollbars
                            autoHeight
                            autoHeightMin={730}
                            autoHeightMax={730}
                          >
                            {/* <div className="kn-blog-main-scroll"> */}
                            <div className="kn-blog-main-list">
                              {healthAllBlog.length > 0
                                ? healthAllBlog.map((blog) => (
                                    <Link
                                      to={`/gi-simplified/blog/${blog.slug}`}
                                    >
                                      <div className="kn-blog-sub-list">
                                        <h6>{ReactHtmlParser(blog.title)}</h6>
                                        <p>{blog.description}</p>
                                      </div>
                                    </Link>
                                  ))
                                : null}
                            </div>
                          </Scrollbars>
                        </Col>
                        <Col lg={9} md={9} sm={12} className="">
                          <Row>
                            {healthBlog.length > 0
                              ? healthBlog.map((blog) => (
                                  <Col
                                    lg={4}
                                    md={4}
                                    sm={6}
                                    key={blog.id}
                                    className="d-flex"
                                  >
                                    <CardLink
                                      link={`/gi-simplified/blog/${blog.slug}`}
                                      title={blog.title}
                                      description={blog.description}
                                      imageUrl={blog.imageUrl}
                                      imageName={blog.imageName}
                                      date={blog.date}
                                    />
                                  </Col>
                                ))
                              : null}
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Home-Insurance">
                    <div className="kn-blog-main">
                      <Row>
                        <Col lg={3} md={3} sm={12} className="">
                          <Scrollbars
                            autoHeight
                            autoHeightMin={730}
                            autoHeightMax={730}
                          >
                            <div className="kn-blog-main-list">
                              {homeAllBlog.length > 0
                                ? homeAllBlog.map((blog) => (
                                    <Link
                                      to={`/gi-simplified/blog/${blog.slug}`}
                                    >
                                      <div className="kn-blog-sub-list">
                                        <h6>{ReactHtmlParser(blog.title)}</h6>
                                        <p>{blog.description}</p>
                                      </div>
                                    </Link>
                                  ))
                                : null}
                            </div>
                          </Scrollbars>
                        </Col>
                        <Col lg={9} md={9} sm={12} className="">
                          <Row>
                            {homeBlog.length > 0
                              ? homeBlog.map((blog) => (
                                  <Col lg={4} md={4} sm={6} className="d-flex">
                                    <CardLink
                                      key={blog.id}
                                      link={`/gi-simplified/blog/${blog.slug}`}
                                      title={blog.title}
                                      description={blog.description}
                                      imageUrl={blog.imageUrl}
                                      imageName={blog.imageName}
                                      date={blog.date}
                                    />
                                  </Col>
                                ))
                              : null}
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Motor-Insurance">
                    <div className="kn-blog-main">
                      <Row>
                        <Col lg={3} md={3} sm={12} className="">
                          <Scrollbars
                            autoHeight
                            autoHeightMin={730}
                            autoHeightMax={730}
                          >
                            <div className="kn-blog-main-list">
                              {motorAllBlog.length > 0
                                ? motorAllBlog.map((blog) => (
                                    <Link
                                      to={`/gi-simplified/blog/${blog.slug}`}
                                    >
                                      <div className="kn-blog-sub-list">
                                        <h6>{ReactHtmlParser(blog.title)}</h6>
                                        <p>{blog.description}</p>
                                      </div>
                                    </Link>
                                  ))
                                : null}
                            </div>
                          </Scrollbars>
                        </Col>
                        <Col lg={9} md={9} sm={12} className="">
                          <Row>
                            {motorBlog.length > 0
                              ? motorBlog.map((blog) => (
                                  <Col lg={4} md={4} sm={6} className="d-flex">
                                    <CardLink
                                      key={blog.id}
                                      link={`/gi-simplified/blog/${blog.slug}`}
                                      title={blog.title}
                                      description={blog.description}
                                      imageUrl={blog.imageUrl}
                                      imageName={blog.imageName}
                                      date={blog.date}
                                    />
                                  </Col>
                                ))
                              : null}
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Travel-Insurance">
                    <div className="kn-blog-main">
                      <Row>
                        <Col lg={3} md={3} sm={12} className="">
                          <Scrollbars
                            autoHeight
                            autoHeightMin={730}
                            autoHeightMax={730}
                          >
                            <div className="kn-blog-main-list">
                              {travelAllBlog.length > 0
                                ? travelAllBlog.map((blog) => (
                                    <Link
                                      to={`/gi-simplified/blog/${blog.slug}`}
                                    >
                                      <div className="kn-blog-sub-list">
                                        <h6>{ReactHtmlParser(blog.title)}</h6>
                                        <p>{blog.description}</p>
                                      </div>
                                    </Link>
                                  ))
                                : null}
                            </div>
                          </Scrollbars>
                        </Col>
                        <Col lg={9} md={9} sm={12} className="">
                          <Row>
                            {travelBlog.length > 0
                              ? travelBlog.map((blog) => (
                                  <Col lg={4} md={4} sm={6} className="d-flex">
                                    <CardLink
                                      key={blog.id}
                                      link={`/gi-simplified/blog/${blog.slug}`}
                                      title={blog.title}
                                      description={blog.description}
                                      imageUrl={blog.imageUrl}
                                      imageName={blog.imageName}
                                      date={blog.date}
                                    />
                                  </Col>
                                ))
                              : null}
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
        {totalPageCount > 1 ? (
          <Row className="pt30">
            <Col sm="12" lg="12" className="text-right blog-carousel-control">
              <span className="active">{currentPage}</span> / {totalPageCount}
              <img
                className={"remove-opticity pagePrev"}
                onClick={() => this.handleArrowClick(currentPage - 1)}
                src={require("../../assets/images/arrow-left.png")}
                alt=""
              />
              <img
                className={"remove-opticity pageNext"}
                onClick={() => this.handleArrowClick(currentPage + 1)}
                src={require("../../assets/images/arrow-right.png")}
                alt=""
              />
            </Col>
          </Row>
        ) : null}
      </div>
    );
  }
}

export default Blogs;
