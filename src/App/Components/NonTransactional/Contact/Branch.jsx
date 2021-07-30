import React, { Component } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import Axios from "../../../Services/Shared/Axios.js";
import AddressBox from "../../Common/AddressBox/AddressBox";
import HelmetData from "../../Common/HelmetData.jsx";

class Branch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalBranchListItem: 0,
      currentShowingBranchItem: 8,
      totalPageCount: 0,
      currentPage: 1,
      startRange: 0,
      stateId: 0,
      branchList: [],
      stateList: [],
      brInfo: [],
      noBranchMsg: ""
    };
  }

  componentDidMount() {
    this.getStateList();
    this.getBranchList(0);
    this.getTotalPageCount();
  }

  getTotalPageCount() {
    if (this.state.stateId > 0) {
      Axios({
        method: "get",
        url: `/branches/count?state=${this.state.stateId}`
      })
        .then(res => {
          const pageCount = Math.ceil(
            res.data / this.state.currentShowingBranchItem
          );
          this.setState({
            totalBranchListItem: res.data,
            totalPageCount: pageCount,
            currentPage: 1,
            startRange:0
          });
        })
        .catch(err => {
          console.log(err);
          console.log("|Branch Page Count Error|");
        });
    } else {
      Axios({
        method: "get",
        url: "/branches/count"
      })
        .then(res => {
          const pageCount = Math.ceil(
            res.data / this.state.currentShowingBranchItem
          );
          this.setState({
            totalBranchListItem: res.data,
            totalPageCount: pageCount,
            currentPage: 1
          });
        })
        .catch(err => {
          console.log(err);
          console.log("|Branch Page Count Error|");
        });
    }
  }

  getBranchList = startRange => {
    this.setState({
      branchList: [],
      noBranchMsg: ""
    });
    if (this.state.stateId > 0) {
      Axios({
        method: "get",
        url: `/branches?state=${this.state.stateId}&_limit=${this.state.currentShowingBranchItem}&_sort=created_at:desc&_start=${startRange}`
      })
        .then(res => {
          let noMsg = "";
          if (res.data.length > 0) {
            noMsg = "";
          } else {
            noMsg = "No Branches Found";
          }
          this.setState({
            branchList: res.data,
            noBranchMsg: noMsg
          });
        })
        .catch(err => {
          console.log(err);
          console.log("|Branch Error|");
        });
    } else {
      Axios({
        method: "get",
        url: `/branches?_limit=${this.state.currentShowingBranchItem}&_sort=created_at:desc&_start=${startRange}`
      })
        .then(res => {
          // let noMsg = "";
          // if (res.data.length > 0) {
          //   noMsg = "";
          // } else {
          //   noMsg = "No Branches Found";
          // }
          this.setState({
            branchList: res.data,
            noBranchMsg: ""
          });
        })
        .catch(err => {
          console.log(err);
          console.log("|Branch Error|");
        });
    }
  };

  getStateList = () => {
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
  };

  handleChange = e => {
    this.setState({
      stateId: e.target.value
    });
  };

  searchBranch = e => {
    this.getBranchList(0);
    this.getTotalPageCount();
  };

  handleArrowClick = isNext => {
    if (isNext) {
      if (this.state.currentPage < this.state.totalPageCount) {
        this.setState({
          currentPage: this.state.currentPage + 1,
          startRange:
            this.state.startRange + this.state.currentShowingBranchItem
        });
        this.getBranchList(
          this.state.startRange + this.state.currentShowingBranchItem
        );
      }
    } else {
      if (this.state.currentPage > 1) {
        this.setState({
          currentPage: this.state.currentPage - 1,
          startRange:
            this.state.startRange - this.state.currentShowingBranchItem
        });
        this.getBranchList(
          this.state.startRange - this.state.currentShowingBranchItem
        );
      }
    }
  };

  render() {
    return (
      <>
        {/* <Helmet> */}

        {typeof this.props.isHelmetDataSet !== "undefined" &&
        this.props.isHelmetDataSet === "YES" ? (
          <HelmetData pageComponentType="Branch" />
        ) : null}

        <div className="formsearch">
          <Form.Control as="select" onChange={this.handleChange}>
            <option value="">Select State</option>
            {this.state.stateList.map((item, index) => (
              <option key={index} value={item.id}>
                {item.name}
              </option>
            ))}
          </Form.Control>
          <Button variant="info" onClick={this.searchBranch}>
            Search
          </Button>
        </div>

        {this.state.totalBranchListItem > 0 ? (
          <>
            <Row className="flex-no-wrap">
              {this.state.branchList.map((item, index) => (
                <Col md="3" xs="12" key={index}>
                  <AddressBox
                    addressBoxType="Branch"
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
                        ? "add-opticity pagePrev"
                        : "remove-opticity pagePrev"
                    }
                    onClick={this.handleArrowClick.bind(this, false)}
                    src={require("../../../assets/images/arrow-left.png")}
                    alt=""
                  />
                  <img
                    className={
                      this.state.currentPage === this.state.totalPageCount
                        ? "add-opticity pageNext"
                        : "remove-opticity pageNext"
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
            {this.state.noBranchMsg !== "" ? (
              <div className="text-center no_item">
                {this.state.noBranchMsg}
              </div>
            ) : null}
          </>
        )}
      </>
    );
  }
}

export default Branch;
