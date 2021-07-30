import React, { Component } from "react";
import { isMobile, isAndroid, isIOS } from "react-device-detect";
import { Link } from "react-router-dom";
import { Button, ButtonToolbar } from "react-bootstrap";

import Modal from "react-bootstrap/Modal";
import ReactHtmlParser from "react-html-parser";

import GoogleMapReact from "google-map-react";

import * as AppConstant from "../../AppConstant";

import ContactEmailValidation from "../../NonTransactional/Contact/ContactEmailValidation";
import ContactSMSValidation from "../../NonTransactional/Contact/ContactSMSValidation";

class AddressBox extends Component {
  static defaultProps = {
    center: {
      lat: 21.898966,
      lng: 78.2312163,
    },
    zoom: AppConstant.DEFAULT_LAT_LNG.zoom,
  };

  constructor(props) {
    super(props);

    let mLat = "";
    let mLng = "";

    if (props.addressBoxType) {
      if (
        props.addressBoxType === "Branch" ||
        props.addressBoxType === "Garage" ||
        props.addressBoxType === "Hospital"
      ) {
        if (
          props.addressLat &&
          props.addressLng &&
          props.addressLat !== null &&
          props.addressLng !== null &&
          props.addressLat !== "" &&
          props.addressLat !== "0" &&
          props.addressLng !== "" &&
          props.addressLng !== "0"
        ) {
          mLat = "";
          mLng = "";
          mLat = props.addressLat;
          mLng = props.addressLng;

          // console.log( "1 constructor : " + props.addressLat + " || " + props.addressLng);
        } else {
          mLat = "";
          mLng = "";

          // console.log( "2 constructor : " + props.addressLat + " || " + props.addressLng);
        }
      } else if (
        props.addressBoxType === "Contact" ||
        props.addressBoxType === "Claims" ||
        props.addressBoxType === "DoNotCall"
      ) {
        mLat = AppConstant.DEFAULT_LAT_LNG.lat;
        mLng = AppConstant.DEFAULT_LAT_LNG.lng;

        // console.log( "3 constructor : " + props.addressLat + " || " + props.addressLng);
      }
    } else {
      mLat = AppConstant.DEFAULT_LAT_LNG.lat;
      mLng = AppConstant.DEFAULT_LAT_LNG.lng;

      // console.log( "4 constructor : " + props.addressLat + " || " + props.addressLng);
    }

    // console.log("addressBoxType : " + this.props.addressBoxType);
    // console.log("addressName : " + this.props.addressName);
    // console.log("addressLat : " + mLat);
    // console.log("addressLng : " + mLng);
    // console.log("--------------------------------------------------");

    this.state = {
      openFrom: props.addressBoxType ? props.addressBoxType : "",
      show_popup: false,
      markerLat: mLat,
      markerLng: mLng,
      markerTitle: "SBI General Insurance Company Ltd.",
      markerAddress: "",
      openSmsEmailModal: false,
      openEmail: false,
      addressName: props.addressName ? props.addressName : "",
      addressDetails: props.addressDetails ? props.addressDetails : "",
      addressBoxType: props.addressBoxType ? props.addressBoxType : "",
    };
  }

  renderMarkers(map, maps) {
    // console.log(this.state.markerLat + " " + this.state.markerLng);
    let marker = new maps.Marker({
      position: {
        lat: Number(this.state.markerLat),
        lng: Number(this.state.markerLng),
      },
      animation: Animation.BOUNCE,
      map,
      title: this.state.markerTitles,
    });

    this.infowindow = new maps.InfoWindow();
    const infoContent =
      this.state.markerTitle + "<br>" + this.state.markerAddress;
    marker.addListener("click", () => {
      this.infowindow.setContent(infoContent);
      this.infowindow.open(this.map, marker);
    });
  }

  openLocationMapPopup = (e) => {
    if (
      this.props.addressLat !== "" &&
      this.props.addressLat !== 0 &&
      this.props.addressLng !== "" &&
      this.props.addressLng !== 0
    ) {
      this.setState({ markerLat: this.props.addressLat });
      this.setState({ markerLng: this.props.addressLng });
      this.setState({ markerTitle: this.props.addressName });
      if (isMobile) {
        let destination = this.state.markerLat + "," + this.state.markerLng;
        this.openDeviceMap(destination);
      } else {
        this.setState({ show_popup: true });
      }
    }
  };

  openDeviceMap = (destination) => {
    if (isAndroid) {
      window.open(`http://maps.google.com/maps?daddr=${destination}&amp;ll=`);
    } else if (isIOS) {
      window.open(`maps://maps.google.com/maps?daddr=${destination}&amp;ll=`);
    } else {
      this.setState({ show_popup: true });
    }
  };

  closeLocationMapPopup = (e) => {
    this.setState({ show_popup: false });
  };

  openSmsEmailModal = (openEmail) => {
    this.setState({ openSmsEmailModal: true, openEmail: openEmail });
  };

  closeSmsEmailModal = () => {
    this.setState({ openSmsEmailModal: false });
  };

  handleCorporateAgent = () => {
    fetch(
      AppConstant.BASE_URL + "/uploads/d0c2a003125041d39ef7ff803114cf9a.xlsb"
    ).then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "CA_Details.xlsb";
        a.click();
      });
    });
  };

  render() {
    let button;
    if(this.state.openFrom==="Garage")
    {
      button = <Button
      variant="outline-info"
      size="sm"
      onClick={(e) =>
        this.openLocationMapPopup(e, this.props.addressId)
      }
      className={
        this.props.addressLat === "" ||
        this.props.addressLat === 0 ||
        this.props.addressLng === "" ||
        this.props.addressLng === 0
          ? "disable-map-btn"
          : ""
      }
    >
      View Location Map
    </Button>;

    }else{
      button = "";
    }

    return (
      <>
        {this.state.openFrom === "DoNotCall" ||
        this.state.openFrom === "Claims" ? (
          <div className="address-box">
            <h2>Corporate Office and Registered Office</h2>
            <h3>SBI General Insurance Company Ltd.</h3>
            <p>
              <strong>"Natraj"</strong>
              <br />
              301, Junction of Western Express Highway & Andheri Kurla - Road,
              Andheri (East), Mumbai - 400 069
            </p>
            <p>
              <strong>Office Timings :</strong>
              <br />
              9:30 AM to 5:30 PM  (Monday to Friday)
            </p>
            <Link
              to={"#"}
              className="btn-location-map"
              onClick={(e) => this.openLocationMapPopup(e)}
            >
              View Location Map
            </Link>
          </div>
        ) : (
          <>
            {this.state.openFrom === "Branch" ||
            this.state.openFrom === "Garage" ? (
              <div className="blist">
                <h4>{this.props.addressName}</h4>
                <p>{ReactHtmlParser(this.props.addressDetails)}</p>
                <div>
                  Send Via{" "}
                  <Link
                    to={"#"}
                    onClick={this.openSmsEmailModal.bind(this, false)}
                  >
                    SMS
                  </Link>
                  <Link
                    to={"#"}
                    onClick={this.openSmsEmailModal.bind(this, true)}
                  >
                    Email
                  </Link>
                </div>
                {button}
              </div>
            ) : (
              <>
                {this.state.openFrom === "Hospital" ? (
                  <div className="blist">
                    <h4>{this.props.addressName}</h4>
                    <p className="hospital">
                      {ReactHtmlParser(this.props.addressDetails)}
                    </p>
                    <Button
                      variant="outline-info"
                      size="sm"
                      onClick={(e) =>
                        this.openLocationMapPopup(e, this.props.addressId)
                      }
                      className={
                        this.props.addressLat === "" ||
                        this.props.addressLat === 0 ||
                        this.props.addressLng === "" ||
                        this.props.addressLng === 0
                          ? "disable-map-btn"
                          : ""
                      }
                    >
                      View Location Map
                    </Button>
                  </div>
                ) : (
                  <>
                    <h4 className="mt-4 mb-3">
                      Corporate Office and Registered Office
                    </h4>
                    <h5>SBI General Insurance Company Ltd.</h5>
                    <p>
                      <strong className="d-block">"Natraj"</strong>301, Junction
                      of Western Express Highway & Andheri Kurla - Road, Andheri
                      (East) Mumbai - 400 069
                    </p>
                    <p>
                      <strong className="d-block">Office Timings :</strong>9:30 AM to 5:30 PM  (Monday to Friday)
                    </p>
                    <ButtonToolbar className="pt-3">
                      <Button
                        variant="outline-success"
                        className="mr-4"
                        onClick={(e) => this.openLocationMapPopup(e)}
                      >
                        View Location Map
                      </Button>
                      {/* <Button
                        variant="info"
                        className="ml-1"
                        onClick={this.handleCorporateAgent}
                      >
                        Corporate Agent
                      </Button> */}
                    </ButtonToolbar>
                  </>
                )}
              </>
            )}
          </>
        )}

        <Modal
          centered={isMobile ? true : true}
          animation
          show={this.state.show_popup}
          onHide={this.closeLocationMapPopup}
          backdrop="static"
          size={isMobile ? "sm" : "lg"}
          aria-labelledby="location-map"
        >
          <Modal.Header closeButton>
            <Modal.Title id="location-map">
              <h4>{this.state.markerTitle}</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ height: "80vh", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={AppConstant.MAP_API_KEY}
                defaultCenter={{
                  lat: Number(this.state.markerLat),
                  lng: Number(this.state.markerLng),
                }}
                defaultZoom={AppConstant.DEFAULT_LAT_LNG.zoom}
                onGoogleApiLoaded={({ map, maps }) =>
                  this.renderMarkers(map, maps)
                }
                yesIWantToUseGoogleMapApiInternals={true}
              ></GoogleMapReact>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          centered={isMobile ? true : true}
          animation
          show={this.state.openSmsEmailModal}
          onHide={this.closeSmsEmailModal}
          backdrop="static"
          size={"sm"}
          dialogClassName="sms-modal"
        >
          <Modal.Header closeButton>
            {this.state.openEmail ? (
              <span>Send Via Email</span>
            ) : (
              <span>Send Via SMS</span>
            )}
          </Modal.Header>
          <Modal.Body>
            {this.state.openEmail ? (
              <ContactEmailValidation
                addressName={this.state.addressName}
                addressDetails={this.state.addressDetails}
                addressBoxType={this.state.addressBoxType}
              />
            ) : (
              <ContactSMSValidation
                addressName={this.state.addressName}
                addressDetails={this.state.addressDetails}
              />
            )}
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default AddressBox;
