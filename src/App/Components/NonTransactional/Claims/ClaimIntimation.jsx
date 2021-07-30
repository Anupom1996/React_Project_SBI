import React, { Component } from "react";
import { Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import AddressBox from "../../Common/AddressBox/AddressBox";
import HelmetData from "../../Common/HelmetData";
import Axios from "../../../Services/Shared/Axios.js";
import swal from "sweetalert";

class ClaimIntimation extends Component {
  constructor(props) {
    super(props);

    const paramItem = props.location.state;
    let productType = "";

    if (typeof paramItem === "undefined") {
      productType = "";
    } else {
      productType = paramItem.product_type;
    }

    this.state = {
      has_policyno: false,
      product_type: productType,
      cityList: [],
      productList: [],
      productValue: "Select Product",
      isProductDropdownDisabled: false,
      isMObileNo: false,
      validated: false,
      successMsgShow: false
    };
  }

  componentDidMount() {
    this.getCityList();
    this.getProductList();
  }

  handleOptionChange = e => {
    console.log(e.target.id);
    if (e.target.id === "yes") {
      this.setState({ has_policyno: true });
    } else if (e.target.id === "no") {
      this.setState({ has_policyno: false });
    }
  };

  getCityList() {
    Axios({
      method: "get",
      url: "/cities?_sort=name:asc&_limit=1200"
    })
      .then(res => {
        this.setState({
          cityList: res.data
        });
      })
      .catch(err => {
        console.log(err);
        console.log("|City List Error|");
      });
  }

  getProductList() {
    Axios({
      method: "get",
      url: "/products?_sort=name:asc"
    })
      .then(res => {
        if (this.state.product_type === "") {
          this.setState({
            productList: res.data
          });
          // res.data.map(listItem => {console.log(listItem.name)});
        } else {
          res.data.map(listItem => {
            if (
              listItem.name.toString().toLowerCase() ===
              this.state.product_type.toString().toLowerCase()
            ) {
              listItem["isSelected"] = true;
              listItem["isDisabled"] = true;
            } else {
              listItem["isSelected"] = false;
              listItem["isDisabled"] = false;
            }

            return true;
          });

          try {
            let productResult = res.data.filter(pv => pv.isSelected === true);
            if (productResult != null && productResult.length > 0) {
              this.setState({
                productList: res.data,
                productValue: productResult[0].name,
                isProductDropdownDisabled: productResult[0].isDisabled
              });
            } else {
              this.setState({
                productList: res.data
              });
            }
          } catch (err) {
            this.setState({
              productList: res.data
            });
          }
        }
      })
      .catch(err => {
        console.log(err);
        console.log("|Product List Error|");
      });
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
    if (
      form.checkValidity() === false ||
      form.selectCity.value === 0 ||
      form.selectProduct.value === 0
    ) {
      event.stopPropagation();
    } else {
      requestParam["firstName"] = form.firstName.value;
      requestParam["lastName"] = form.lastName.value;
      requestParam["mobile_number"] = form.mobNo.value;
      requestParam["emailId"] = form.emailId.value;
      requestParam["city"] = form.selectCity.value;
      requestParam["product"] = form.selectProduct.value;
      requestParam["policyNo"] = form.policyNo.value;
      requestParam["remarks"] = form.remarks.value;

      this.postClaimIntimation(requestParam);
    }
  };

  postClaimIntimation = jsonData => {
    Axios({
      method: "POST",
      url: "/claimsintimations",
      data: JSON.stringify(jsonData),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        this.setState({
          validated: false,
          has_policyno: false,
          productValue: "Select Product"
        });
        document.getElementById("claim_intimation_form").reset();

        let msgText = "Request Submitted Successfully";
        swal({
          text: msgText,
          icon: "success"
        }).then(() => { });
      })
      .catch(err => {
        let msgText = "Something Went Wrong!";
        swal({
          text: msgText,
          icon: "error"
        }).then(() => { });
      });
  };

  handleMobRadioChange = e => {
    if (e.target.id === "yes") {
      this.setState({ isMObileNo: true, has_policyno: true });
    } else if (e.target.id === "no") {
      this.setState({ isMObileNo: false, has_policyno: false });
    }
  };

  handleProductChange = event => {
    this.setState({ productValue: event.target.value });
  };

  render() {
    return (
      <>
        {/* <Helmet> */}
        <HelmetData pageComponentType="ClaimIntimation" />
        <Row>
          <Col lg="6" xs="12">
            <div className="claim-content">
              <ul>
                <li>
                                Contact our toll free number 1800 102 1111 or SMS "CLAIM" to
                                561612 or email your details on customer.care@sbigeneral.in
                                and get your claim number / reference number.
                </li>
                <li>
                  You can also intimate your claim by providing your details
                  here and then click on Submit
                  {this.state.product_type}
                </li>
              </ul>
              <Form
                className="claim-form"
                id="claim_intimation_form"
                noValidate
                validated={this.state.validated}
                onSubmit={this.handleSubmit}
                autoComplete="off"
              >
                <Form.Row>
                  <Form.Group as={Col} lg="6" controlId="firstName">
                    <InputGroup>
                      <Form.Control
                        type="text"
                        placeholder="First Name "
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please Enter Your First Name.
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group as={Col} lg="6" controlId="lastName">
                    <InputGroup>
                      <Form.Control
                        type="text"
                        placeholder="Last Name "
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please Enter Your Last Name.
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} lg="6" controlId="mobNo">
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>+91</InputGroup.Text>
                      </InputGroup.Prepend>
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
                    </InputGroup>
                  </Form.Group>
                  <Form.Group as={Col} lg="6" controlId="emailId">
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
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} lg="6" controlId="selectCity">
                    <Form.Control as="select" ref={this.city} required>
                      <option value="">Select City</option>
                      {this.state.cityList.map((item, index) => (
                        <option key={index} value={item.Name}>
                          {item.Name}
                        </option>
                      ))}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      Please Select Your City.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} lg="6" controlId="selectProduct">
                    <Form.Control
                      as="select"
                      ref={this.product}
                      value={this.state.productValue}
                      onChange={this.handleProductChange}
                      disabled={this.state.isProductDropdownDisabled}
                      required
                    >
                      <option value="">Select Product</option>
                      {this.state.productList.map((item, index) => (
                        <option key={index} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      Please Select Product.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Row className="m-0 p-0">
                  <Form.Group as={Col} lg="12">
                    <InputGroup>
                      <label className="remarks-label">
                        Do you have Policy Number?
                      </label>
                    </InputGroup>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} lg="12">
                    <InputGroup>
                      <Form.Check
                        type="radio"
                        label="Yes"
                        name="mobRadio"
                        inline
                        id="yes"
                        onChange={this.handleOptionChange}
                      />
                      <Form.Check
                        type="radio"
                        label="No"
                        name="mobRadio"
                        inline
                        id="no"
                        onChange={this.handleOptionChange}
                        defaultChecked
                      />
                    </InputGroup>
                  </Form.Group>
                </Form.Row>
                <Form.Row
                  className={
                    this.state.has_policyno ? null : "readlessContentHide"
                  }
                >
                  <Form.Group as={Col} lg="6" controlId="policyNo">
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
                <Form.Row className="m-0 p-0">
                  <Form.Group as={Col} lg="12">
                    <InputGroup>
                      <label className="remarks-label">Remarks</label>
                    </InputGroup>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} lg="12" controlId="remarks">
                    <InputGroup>
                      <Form.Control
                        as="textarea"
                        rows="3"
                        type="text"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please Enter Your Remarks.
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Form.Row>
                <Button type="submit" variant="primary">
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
          <Col lg="6" xm="12">
            <AddressBox addressBoxType="Claims" />
          </Col>
        </Row>
      </>
    );
  }
}

export default ClaimIntimation;
