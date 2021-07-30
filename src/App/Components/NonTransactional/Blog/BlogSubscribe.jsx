import React, { Component } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

import { isMobile } from "react-device-detect";
import swal from "sweetalert";
import Axios from "../../../Services/Shared/Axios.js";
import AxiosTrans from "../../../Services/Shared/AxiosTrans";

class BlogSubscribe extends Component {
  constructor() {
    super();

    this.state = {
      inputEmail: []
    };
  }

  handleChange = event => {
    this.setState({ inputEmail: event.target.value });
  };

  handleClick = () => {
    let email_regex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/i;
    if (email_regex.test(this.state.inputEmail)) {
      if (this.props.subscribeType === "BlogListing") {
        this.gtmClickHandler("blog_listing_page_1_email_subscription", "blog_listing_page", "")
      } else {
        window.dataLayer = window.dataLayer || [];
        const data = {
          event: "blog_article_page_1_email_subscription",
          pagetype: "blog_article_page",
          article_title: this.props.blogTitle
        };
        window.dataLayer.push(data);

      }

      this.submitEmail(this.state.inputEmail, true);
    } else {
      this.showErrorAlert("Please Enter Valid Email Id.");
    }
  };

  submitEmail = (userEmail, isSubscribe) => {
    const request = {
      is_active: isSubscribe,
      email: userEmail
    };

    Axios({
      method: "POST",
      url: "/blogsubscribtions",
      data: request
    })
      .then(res => {
        let msgText = "Subscribed Successfully";
        let requestParam = {
          "content": btoa(msgText),
          "to": userEmail,
          "attachment": "",
          "subject": "Subscribed Successfully"
        };
        AxiosTrans({
          method: "POST",
          url: "/api/mailer",
          data: JSON.stringify(requestParam)
        }).then(res => {
          //console.log(res.status);
          // let msgText = 'Email Has Been Sent Successfully.';
          // if (typeof res.message != 'undefined') {
          //   msgText = res.message;
          // }
          this.setState({ inputEmail: "" });
          this.showSuccessAlert("Subscribed Successfully!");
        }).catch(err => {
          let msgText = 'Something went wrong!';
          if (typeof err.message != 'undefined') {
            msgText = err.message;
          }
          this.showErrorAlert(msgText);
        });

      })
      .catch(err => {
        this.showErrorAlert("You Are Already Subscribed!");
        console.log(err);
        console.log("|Email Subscribe Error|");
      });
  };

  showSuccessAlert = successTxt => {
    swal({
      text: successTxt,
      icon: "success"
    }).then(() => { });
  };

  showErrorAlert = errTxt => {
    swal({
      text: errTxt,
      icon: "error"
    }).then(() => { });
  };

  gtmClickHandler = (eventName, pageType, clickText) => {
    window.dataLayer = window.dataLayer || [];
    const data = {
      'event': eventName,
      'pagetype': pageType,
      'click_text': clickText
    };
    window.dataLayer.push(data);
  }

  render() {
    return (
      <>
        {this.props.subscribeType === "BlogListing" ? (
          <>
            {isMobile ? (
              <div className="blog-box hide-desktop">
                <div className="blog-subscribe-form">
                  <h2>Subscribe Our Blog</h2>
                  <p>
                    Stay up to date with the latest marketing, sales, and
                    service tips and news.
                  </p>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        type="email"
                        placeholder="Enter email address"
                        onChange={this.handleChange}
                        value={this.state.inputEmail}
                      />
                    </Form.Group>

                    <div className="text-center">
                      <Button
                        variant="outline-primary"
                        onClick={this.handleClick}
                      >
                        Subscribe
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            ) : (
                <Col sm="12" lg="4" className="hide-mobile ">
                  <div className="blog-subscribe-form">
                    <h2>Subscribe Our Blog</h2>
                    <p>
                      Stay up to date with the latest marketing, sales, and
                      service tips and news.
                  </p>
                    <Form>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Control
                          type="email"
                          placeholder="Enter email address"
                          onChange={this.handleChange}
                          value={this.state.inputEmail}
                        />
                      </Form.Group>

                      <div className="text-center">
                        <Button
                          variant="outline-primary"
                          onClick={this.handleClick}
                        >
                          Subscribe
                      </Button>
                      </div>
                    </Form>
                  </div>
                </Col>
              )}
          </>
        ) : (
            <>
              {isMobile ? (
                <div className="blog-box hide-desktop">
                  <div className="blog-subscribe-form">
                    <h2>Subscribe Our Blog</h2>
                    <p>
                      Stay up to date with the latest marketing, sales, and
                      service tips and news.
                  </p>
                    <Form>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Control
                          type="email"
                          placeholder="Enter email address"
                          onChange={this.handleChange}
                          value={this.state.inputEmail}
                        />
                      </Form.Group>

                      <div className="text-center">
                        <Button
                          variant="outline-primary"
                          onClick={this.handleClick}
                        >
                          Subscribe
                      </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              ) : (
                  <div className="subscribe-details hide-mobile">
                    <div className="lt-blue">
                      <h2>Subscribe to Our Blog</h2>
                      <p>
                        Stay up to date with the latest marketing, sales, and
                        service tips and news.
                  </p>
                    </div>
                    <div className="rt-orange">
                      <div className="blog-subscribe-form">
                        <Form>
                          <Row>
                            <Col lg="8">
                              <Form.Control
                                type="email"
                                placeholder="Enter email address"
                                onChange={this.handleChange}
                                value={this.state.inputEmail}
                              />
                            </Col>
                            <Col lg="4">
                              <Button
                                variant="outline-primary"
                                onClick={this.handleClick}
                              >
                                Subscribe
                          </Button>
                            </Col>
                          </Row>
                        </Form>
                      </div>
                    </div>
                  </div>
                )}
            </>
          )}
      </>
    );
  }
}

export default BlogSubscribe;
