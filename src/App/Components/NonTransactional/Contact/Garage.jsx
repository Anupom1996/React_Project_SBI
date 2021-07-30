import React, { Component } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import Axios from "../../../Services/Shared/Axios.js";
import AddressBox from "../../Common/AddressBox/AddressBox";
import HelmetData from "../../Common/HelmetData.jsx";

class Garage extends Component {
  constructor(props) {
    super(props);

    // creating references for form element in search form
    this.garage_name = React.createRef();
    this.manufacturer = React.createRef();
    this.city = React.createRef();
    this.states = React.createRef();
    this.vehicle = React.createRef();

    this.state = {
      totalGarageListItem: 0,
      currentShowingGarageItem: 8,
      totalPageCount: 0,
      currentPage: 1,
      startRange: 0,
      stateId: 0,
      garageList: [],
      stateList: [],
      cityList: [],
      vehicleList: [],
      manufacturerList: [],
      garageInfo: [],
      noGarageMsg: ""
    };
  }

  componentDidMount() {
    this.getStateList(0);
    this.getVehicleList();
    this.getManufacturerList();
    this.getGarageList(0);
    this.getTotalPageCount();
  }

  getTotalPageCount() {
    if (
      this.vehicle.current.value !== "" ||
      this.states.current.value > 0 ||
      this.city.current.value > 0 ||
      this.manufacturer.current.value !== "" ||
      this.garage_name.current.value !== ""
    ) {
      let cust_url;
      cust_url = `/garages/count?_sort=name:asc`;

      // generating url with respect to selected parameters
      if (this.vehicle.current.value !== "") {
        cust_url += `&vehicletype=${this.vehicle.current.value}`;
      }
      if (this.states.current.value > 0) {
        cust_url += `&state=${this.states.current.value}`;
      }
      if (this.city.current.value > 0) {
        cust_url += `&city=${this.city.current.value}`;
      }
      if (this.manufacturer.current.value !== "") {
        cust_url += `&manufacturer=${this.manufacturer.current.value}`;
      }
      if (this.garage_name.current.value !== "") {
        cust_url += `&name=${this.garage_name.current.value}`;
      }

      Axios({
        method: "get",
        url: cust_url
      })
        .then(res => {
          const pageCount = Math.ceil(
            res.data / this.state.currentShowingGarageItem
          );
          this.setState({
            totalGarageListItem: res.data,
            totalPageCount: pageCount,
            currentPage: 1
          });
        })
        .catch(err => {
          console.log(err);
          console.log("|Garage Page Count Error|");
        });
    } else {
      Axios({
        method: "get",
        url: "/garages/count"
      })
        .then(res => {
          const pageCount = Math.ceil(
            res.data / this.state.currentShowingGarageItem
          );
          this.setState({
            totalGarageListItem: res.data,
            totalPageCount: pageCount,
            currentPage: 1
          });
        })
        .catch(err => {
          console.log(err);
          console.log("|Garage Page Count Error|");
        });
    }
  }

  getGarageList = startRange => {
    this.setState({
      garageList: [],
      noGarageMsg: ""
    });
    if (
      this.vehicle.current.value !== "" ||
      this.states.current.value > 0 ||
      this.city.current.value > 0 ||
      this.manufacturer.current.value !== "" ||
      this.garage_name.current.value !== ""
    ) {
      let cust_url;
      cust_url = `/garages?_limit=${this.state.currentShowingGarageItem}&_sort=name:asc&_start=${startRange}`;

      // generating url with respect to selected parameters
      if (this.vehicle.current.value !== "") {
        cust_url += `&vehicletype=${this.vehicle.current.value}`;
      }
      if (this.states.current.value > 0) {
        cust_url += `&state=${this.states.current.value}`;
      }
      if (this.city.current.value > 0) {
        cust_url += `&city=${this.city.current.value}`;
      }
      if (this.manufacturer.current.value !== "") {
        cust_url += `&manufacturer=${this.manufacturer.current.value}`;
      }
      if (this.garage_name.current.value !== "") {
        cust_url += `&name=${this.garage_name.current.value}`;
      }

      Axios({
        method: "get",
        url: cust_url
      })
        .then(res => {
          let noMsg = "";
          if (res.data.length > 0) {
            noMsg = "";
          } else {
            noMsg = "No Garages Found";
          }

          this.setState({
            garageList: res.data,
            noGarageMsg: noMsg
          });
        })
        .catch(err => {
          console.log(err);
          console.log("|Garage Error|");
        });
    } else {
      Axios({
        method: "get",
        url: `/garages?_limit=${this.state.currentShowingGarageItem}&_sort=name:asc&_start=${startRange}`
      })
        .then(res => {
          // let noMsg = "";
          // if (res.data.length > 0) {
          //   noMsg = "";
          // } else {
          //   noMsg = "No Garages Found";
          // }
          this.setState({
            garageList: res.data,
            noGarageMsg: ""
          });
        })
        .catch(err => {
          console.log(err);
          console.log("|Garage Error|");
        });
    }
  };

  // get state list
  getStateList = cityId => {
    if (cityId > 0) {
      Axios({
        method: "get",
        url: `/cities?id=${cityId}&_sort=name:asc`
      })
        .then(res => {
          this.setState({
            stateList: res.data[0].state
          });
        })
        .catch(err => {
          console.log(err);
          console.log("|State List Error|");
        });
    } else {
      Axios({
        method: "get",
        url: "/states?_sort=name:asc"
      })
        .then(res => {
          this.setState({
            stateList: res.data
          });
        })
        .catch(err => {
          console.log(err);
          console.log("|State List Error|");
        });
    }
  };

  // get city list
  getCityList = stateId => {
    if (stateId > 0) {
      Axios({
        method: "get",
        url: `/cities?_sort=name:asc&state=${stateId}`
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
    } else {
      Axios({
        method: "get",
        url: "/cities?_sort=name:asc"
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
  };

  // get vehicle type list
  getVehicleList = () => {
    Axios({
      method: "get",
      url: "/vehicletypes?_sort=name:asc"
    })
      .then(res => {
        this.setState({
          vehicleList: res.data
        });
      })
      .catch(err => {
        console.log(err);
        console.log("|Vehicle List Error|");
      });
  };

  // get manufacturer list
  getManufacturerList = () => {
    Axios({
      method: "get",
      url: "/manufacturers?_sort=name:asc"
    })
      .then(res => {
        this.setState({
          manufacturerList: res.data
        });
      })
      .catch(err => {
        console.log(err);
        console.log("|Manufacturer List Error|");
      });
  };

  // handle city and state drop down changes
  handleStateChange = () => {
    // fetch city with respect to
    if (this.states.current.value === "0" || this.states.current.value === 0) {
      this.setState({
        cityList: []
      });
    } else {
      this.setState({
        cityList: []
      });
      this.getCityList(this.states.current.value);
    }
  };

  searchGarage = e => {
    this.getGarageList(0);
    this.getTotalPageCount();
  };

  handleArrowClick = isNext => {
    if (isNext) {
      if (this.state.currentPage < this.state.totalPageCount) {
        this.setState({
          currentPage: this.state.currentPage + 1,
          startRange:
            this.state.startRange + this.state.currentShowingGarageItem
        });
        this.getGarageList(
          this.state.startRange + this.state.currentShowingGarageItem
        );
      }
    } else {
      if (this.state.currentPage > 1) {
        this.setState({
          currentPage: this.state.currentPage - 1,
          startRange:
            this.state.startRange - this.state.currentShowingGarageItem
        });
        this.getGarageList(
          this.state.startRange - this.state.currentShowingGarageItem
        );
      }
    }
  };

  render() {

    console.log(this.state.garageList);
    return (
      <>
        {/* <Helmet> */}

        {typeof this.props.isHelmetDataSet !== "undefined" &&
        this.props.isHelmetDataSet === "YES" ? (
          <HelmetData pageComponentType="Garage" />
        ) : null}
        <Form className="garage-form">
          <Form.Row>
            <Form.Group as={Col} lg="4" controlId="formGridCity">
              <Form.Control as="select" ref={this.vehicle}>
                <option value="">Select Vehicle</option>
                {this.state.vehicleList.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} lg="4" controlId="formGridState">
              <Form.Control
                as="select"
                ref={this.states}
                onChange={this.handleStateChange.bind()}
              >
                <option value="0">Select State</option>
                {this.state.stateList.length > 0 ? (
                  <>
                    {this.state.stateList.map((item, index) => (
                      <option key={index} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </>
                ) : (
                  <option value={this.state.stateList.id}>
                    {this.state.stateList.name}
                  </option>
                )}
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} lg="4" controlId="formGridZip">
              <Form.Control as="select" ref={this.city}>
                <option value="0">Select City</option>
                {this.state.cityList.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.Name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} lg="4" controlId="formGridManufacturer">
              <Form.Control as="select" ref={this.manufacturer}>
                <option value="">All Manufacturer</option>
                {this.state.manufacturerList.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} lg="4" controlId="formGridGarageName">
              <Form.Control
                placeholder="Garage Name"
                ref={this.garage_name}
              ></Form.Control>{" "}
              {/* componentClass="input" */}
            </Form.Group>

            <Form.Group as={Col} lg="4" controlId="formGridZip">
              <Button variant="primary" onClick={this.searchGarage}>
                Search
              </Button>
            </Form.Group>
          </Form.Row>
        </Form>

        {this.state.totalGarageListItem > 0 ? (
          <>
            <Row className="flex-no-wrap">
              {this.state.garageList.map((item, index) => (
                <Col md="3" xs="12" key={index}>
                <AddressBox
                  addressBoxType="Garage"
                  addressName={(item.name && item.name != null) ? item.name : ""}
                  addressDetails={(item.address && item.address != null) ? item.address : ""}
                  addressId={(item.id && item.id != null) ? item.id : ""}
                  addressLat = {(item.lat && item.lat != null) ? item.lat : ""}
                  addressLng = {(item.long && item.long != null) ? item.long : ""}
                />
                </Col>
              ))}
            </Row>
            {this.state.totalPageCount > 1 ? (
              <Row className="pt30">
                <Col
                  sm="12"
                  lg="12"
                  className="text-center blog-carousel-control"
                >
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
          </>
        ) : (
          <>
            {this.state.noGarageMsg !== "" ? (
              <div className="text-center no_item">
                {this.state.noGarageMsg}
              </div>
            ) : null}
          </>
        )}
      </>
    );
  }
}

export default Garage;
