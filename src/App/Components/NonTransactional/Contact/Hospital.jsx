import React, { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Axios from "../../../Services/Shared/Axios.js";
import AddressBox from "../../Common/AddressBox/AddressBox";
import swal from "sweetalert";
import HelmetData from "../../Common/HelmetData.jsx";

class Hospital extends Component {
  constructor(props) {
    super(props);

    this.hospital = React.createRef();
    this.inputContent = React.createRef();

    this.state = {
      hospitalList: [],
      hospitalInfoList: [],
      totalPageCount: 0,
      currentPage: 0,
      limit: 12,
      lastSearch: "",
    };
  }

  componentDidMount() {
    this.getHospitalList();
  }

  getHospitalList = () => {
    Axios({
      method: "get",
      url: "/hospitals?_sort=tp_title",
    })
      .then((res) => {
        this.setState({
          hospitalList: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        console.log("|State List Error|");
      });
  };

  downloadHospital = () => {
    Axios({
      method: "get",
      url: `/hospitals?id=${this.hospital.current.value}`,
    })
      .then((res) => {
        if (res.data[0].download_link !== "") {
          fetch(res.data[0].download_link).then((response) => {
            let fileExten = res.data[0].download_link.split(".");
            let fileName = res.data[0].tp_title.replace(/\./g, "_");
            fileName = fileName.replace(/ /g, "_");

            response.blob().then((blob) => {
              let url = window.URL.createObjectURL(blob);
              let a = document.createElement("a");
              a.href = url;
              a.download = fileName + "." + fileExten[fileExten.length - 1];
              a.click();
            });
          });
        } else {
          this.showErrorAlert("No Download Link Found");
        }
      })
      .catch((err) => {
        console.log(err);
        console.log("|State List Error|");
      });
  };

  showErrorAlert = (errTxt) => {
    swal({
      text: errTxt,
      icon: "error",
    }).then(() => {});
  };

  getTotalPageCount = (cust_url) => {
    if (!!cust_url) {
      Axios({
        method: "get",
        url: `${cust_url}`,
      })
        .then((res) => {
          let totalPageCount = Math.ceil(res.data / this.state.limit);
          this.setState({
            totalPageCount,
            currentPage: 1,
          });
        })
        .catch((err) => {
          console.log(err);
          console.log("|Error|");
        });
    }
  };

  fetchHospitalInfo = (url) => {
    if (!!url) {
      Axios({
        method: "get",
        url: `${url}`,
      })
        .then((res) => {
          this.setState({ hospitalInfoList: res.data });
        })
        .catch((err) => {
          console.log(err);
          console.log("|Error|");
        });
    }
  };

  searchHospitalInfo = (e) => {
    let cust_url = "";
    const inputContent = this.inputContent.current.value.trim();
    if (inputContent.length < 1) {
      this.setState({ hospitalInfoList: [] });
    } else {
      if (isNaN(inputContent)) {
        //Search by Area
        cust_url = `/hospitallists?Hospital_Area=${inputContent}`;
        if (this.state.lastSearch !== cust_url) {
          //Set lastSearch
          this.setState({ lastSearch: cust_url });
          //page count
          this.getTotalPageCount(
            `/hospitallists/count?Hospital_Area=${inputContent}`
          );
          //fetch data
          this.fetchHospitalInfo(
            `${cust_url}&_limit=${this.state.limit}&_sort=Hospital_Name:asc&_start=0`
          );
        }
      } else {
        //Search by Pincode
        cust_url = `/hospitallists?Hospital_Pincode=${inputContent}`;
        if (this.state.lastSearch !== cust_url) {
          //Set lastSearch
          this.setState({ lastSearch: cust_url });
          //page count
          this.getTotalPageCount(
            `/hospitallists/count?Hospital_Pincode=${inputContent}`
          );
          //fetch data
          this.fetchHospitalInfo(
            `${cust_url}&_limit=${this.state.limit}&_sort=Hospital_Name:asc&_start=0`
          );
        }
      }
    }
  };

  handleArrowClick = (currentPage) => {
    const { totalPageCount, limit, lastSearch } = this.state;
    if (!currentPage) {
      currentPage = totalPageCount;
    }
    if (currentPage > totalPageCount) {
      currentPage = 1;
    }
    this.setState({ currentPage });
    const start = (currentPage - 1) * limit;

    this.fetchHospitalInfo(
      `${lastSearch}&_limit=${this.state.limit}&_sort=Hospital_Name:asc&_start=${start}`
    );
  };

  render() {
    const { hospitalInfoList, totalPageCount, currentPage } = this.state;
    return (
      <>
        {/* <Helmet> */}

        {typeof this.props.isHelmetDataSet !== "undefined" &&
        this.props.isHelmetDataSet === "YES" ? (
          <HelmetData pageComponentType="Hospital" />
        ) : null}
        <div className="hospital-form-div">
          <h5 className="hospital-header">Search by TPA</h5>
          <div className="formsearch hospital-formsearch">
            <Form.Control as="select" ref={this.hospital}>
              <option value="">Select TPA</option>
              {this.state.hospitalList.map((item, index) => (
                <option key={index} value={item.id}>
                  {item.tp_title}
                </option>
              ))}
            </Form.Control>
            <Button variant="info" onClick={this.downloadHospital}>
              Search
            </Button>
          </div>
        </div>
        <div>
          <h5 className="hospital-header">Search by Location</h5>
          <div className="formsearch hospital-formsearch">
            <Form.Control
              className="removeDrop"
              placeholder="Search by Area or Pin code"
              ref={this.inputContent}
            ></Form.Control>
            <Button variant="info" onClick={this.searchHospitalInfo}>
              Search
            </Button>
          </div>
        </div>

        {/* ************************************************ */}
        {hospitalInfoList.length > 0 ? (
          <>
            <Row className="flex-no-wrap">
              {hospitalInfoList.map((item, index) => (
                <Col md="3" xs="12" key={index}>
                  <AddressBox
                    addressBoxType="Hospital"
                    addressName={
                      item.Hospital_Name && item.Hospital_Name != null ? item.Hospital_Name : ""
                    }
                    addressDetails={
                      item.Hospital_Address_1 && item.Hospital_Address_1 != null ? item.Hospital_Address_1 : ""
                    }
                    addressId={item.id && item.id != null ? item.id : ""}
                    addressLat={item.Latitude && item.Latitude != null ? item.Latitude : ""}
                    addressLng={item.Longitude && item.Longitude != null ? item.Longitude : ""}
                  />
                </Col>
              ))}
            </Row>
            {totalPageCount > 1 ? (
              <Row className="pt30">
                <Col
                  sm="12"
                  lg="12"
                  className="text-center blog-carousel-control"
                >
                  <span className="active">{currentPage}</span> /{" "}
                  {totalPageCount}
                  <img
                    className={"remove-opticity pagePrev"}
                    onClick={() => this.handleArrowClick(currentPage - 1)}
                    src={require("../../../assets/images/arrow-left.png")}
                    alt=""
                  />
                  <img
                    className={"remove-opticity pageNext"}
                    onClick={() => this.handleArrowClick(currentPage + 1)}
                    src={require("../../../assets/images/arrow-right.png")}
                    alt=""
                  />
                </Col>
              </Row>
            ) : null}
          </>
        ) : (
          <div className="text-center no_item">No Hospital Found</div>
        )}
      </>
    );
  }
}

export default Hospital;
