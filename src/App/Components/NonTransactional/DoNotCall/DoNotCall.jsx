import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import BaseComponent from "../../BaseComponent";
import {
  Row,
  Container,
  Col,
  Form,
  Button,
  Spinner,
  InputGroup
} from "react-bootstrap";

import AddressBox from "../../Common/AddressBox/AddressBox";
import HelmetData from "../../Common/HelmetData";
import Axios from "../../../Services/Shared/Axios";
import swal from "sweetalert";

class DoNotCall extends Component {
  constructor(props) {
    super(props);

    this.state = {
      has_policyno: false,
      isMObileNo: false,
      validated: false,
      showLoader: false,
      successMsgShow: false
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      successMsgShow: false
    });

    const form = event.currentTarget;
    let requestParam = {};
    this.setState({
      validated: true
    });
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      requestParam['full_name'] = form.fullName.value;
      requestParam['phone_number'] = form.phoneNo.value;
      requestParam['email'] = form.emailId.value;
      requestParam['mobile_number'] = form.mobileNumber.value;
      requestParam['has_policy'] = this.state.isMObileNo;
      requestParam['policy_number'] = form.policy_no.value;
      requestParam['remarks'] = form.remarks.value;
      Axios({
        method: "POST",
        url: "/donotcalls",
        data: JSON.stringify(requestParam),
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then(res => {
          console.log(res.data);
          let msgText = 'Request Submitted Successfully';
          swal({
            text: msgText,
            icon: "success"
          }).then(() => {

          });

          this.setState({
            showLoader: false,
            successMsgShow: true
          });
        })
        .catch(err => {
          let msgText = 'Something Went Wrong!';
          swal({
            text: msgText,
            icon: "error"
          }).then(() => {

          });

          this.setState({
            showLoader: false,
            successMsgShow: false
          });
        });
      this.setState({
        validated: false,
        has_policyno: false
      });
      document.getElementById('do_not_call_form').reset();
    }

  };

  handleMobRadioChange = e => {
    console.log(e.target.id);
    if (e.target.id === 'yes') {
      this.setState({ isMObileNo: true, has_policyno: true });
    } else if (e.target.id === 'no') {
      this.setState({ isMObileNo: false, has_policyno: false });
    }
  };

  render() {
    return (
      <div>
        <BaseComponent pageTitle="donotcall">
          {/* <Helmet> */}
          <HelmetData pageComponentType="DoNotCall" />
          {/* Header Start */}
          {isMobile ? (
            <section className="topform product-header">
              <div className="insuTab">
                <h1>Do Not Call</h1>
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
                      <h1>Do Not Call</h1>
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
            <section className="section-do-not-call">
              <Row>
                <Col lg="6" xs="12">
                  <div className="lt-form">
                    <h2>Please Provide Your Details</h2>
                    <Form
                      className="do-not-call-form"
                      id="do_not_call_form"
                      noValidate
                      validated={this.state.validated}
                      onSubmit={this.handleSubmit}
                    >
                      <Form.Row>
                        <Col lg="6" xs="12">
                          <Form.Group controlId="fullName">
                            <Form.Control
                              placeholder="Full Name"
                              type="text"
                              required
                            />
                            <Form.Control.Feedback type="invalid">
                              Please Enter Your Full Name.
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                        <Col lg="6" xs="12">
                          <Form.Group controlId="phoneNo">
                            <Form.Control
                              placeholder="Phone No."
                              type="text"
                              required
                              pattern="\d{5}([- ]*)\d{6}"
                              maxLength="12"
                            />
                            <Form.Control.Feedback type="invalid">
                              Please Enter Your Valid Phone No.
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </Form.Row>
                      <Form.Row>
                        <Col lg="6" xs="12">
                          <Form.Group controlId="emailId">
                            <Form.Control
                              placeholder="Email"
                              type="email"
                              required
                              pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                            />
                            <Form.Control.Feedback type="invalid">
                              Please Enter Your Valid Email Address.
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                        <Col lg="6" xs="12">
                          <Form.Group controlId="location">
                            <Form.Control
                              placeholder="Location"
                              type="text"
                              required
                            />
                            <Form.Control.Feedback type="invalid">
                              Please Enter Your Location.
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </Form.Row>
                      <Form.Row>
                        <Col lg="6" xs="12">
                          <Form.Group controlId="mobileNumber">
                            <Form.Control
                              placeholder="Mobile No."
                              type="text"
                              required
                              pattern="^[0-9]{10}$"
                              maxLength="10"
                            />
                            <Form.Control.Feedback type="invalid">
                              Please Enter Your Valid Mobile No.
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </Form.Row>
                      <Form.Row>
                        <Col lg="12" xs="12">
                          <label className="remarks-label">
                            Do you have Policy Number?
                          </label>
                        </Col>
                        <Col lg="12" xs="12">
                          <Form.Check
                            type="radio"
                            label="Yes"
                            name="mobRadio"
                            inline
                            onChange={this.handleMobRadioChange}
                            id="yes"
                            value={true}
                          />
                          <Form.Check
                            type="radio"
                            label="No"
                            name="mobRadio"
                            inline
                            id="no"
                            onChange={this.handleMobRadioChange}
                            value={false}
                            defaultChecked={true}
                          />
                        </Col>
                      </Form.Row>
                      <Form.Row className={this.state.has_policyno ? (null) : ('readlessContentHide')}>
                        <Form.Group as={Col} lg="6" controlId="policy_no">
                          <InputGroup>
                            <Form.Control
                              type="text"
                              placeholder="Policy Number"
                              maxLength="16"
                              pattern="^[0-9]{16}$"
                              required={this.state.has_policyno ? true : false}
                            />
                            <Form.Control.Feedback type="invalid">
                              Please Enter Valid Policy Number.
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Col lg="6" xs="12">
                          <label className="remarks-label">Remarks</label>

                          <Form.Group controlId="remarks">
                            <Form.Control
                              as="textarea"
                              rows="3"
                              type="text"
                              required
                            />
                            <Form.Control.Feedback type="invalid">
                              Please Enter Your Remarks.
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                        <Col lg="6" xs="12">
                          {!this.state.showLoader ? (
                            <Button type="submit" variant="primary">
                              Submit
                            </Button>
                          ) : (
                              <span className="loading-view-do-not-call">
                                <Spinner
                                  variant="success"
                                  size="sm"
                                  animation="border"
                                  role="status"
                                />{" "}
                                Please Wait. . .
                              </span>
                            )}
                        </Col>
                      </Form.Row>
                    </Form>
                  </div>
                </Col>
                <Col lg="6" xs="12">
                  <AddressBox addressBoxType="DoNotCall" />
                </Col>
              </Row>
            </section>
          </Container>
        </BaseComponent>
      </div>
    );
  }
}

export default DoNotCall;
