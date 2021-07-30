import React, { Component } from "react";
import { Container } from "react-bootstrap";
import BaseComponent from "../../BaseComponent";
import Axios from "../../../Services/Shared/Axios";
import * as AppConstant from "../../AppConstant";
import HelmetData from "../../Common/HelmetData";

class MeetOurPeopleDetails extends Component {
  constructor(props) {
    super(props);

    const peopleDetailsData = props.location.state;

    const { id } = props.match.params;

    if (typeof peopleDetailsData === "undefined") {
      this.state = {
        peopleId: id,
        peopleDetailsData: "",
        showLoader: true
      };
    } else {
      this.state = {
        peopleId: id,
        peopleDetailsData: peopleDetailsData.peopleDetailsData,
        showLoader: true
      };
    }
  }
  componentDidMount() {
    console.log(this.state.ppeopleDetailsData);

    if (this.state.peopleDetailsData === "") {
      this.getPeopleDetailsContent(this.state.peopleId);
    } else {
      this.setState({
        showLoader: false
      });
    }
  }
  getPeopleDetailsContent = peopleId => {
    Axios({
      method: "get",
      url: `/meetourpeople/${this.state.peopleId}`
    })
      .then(res => {
        console.log(res.data);
        this.setState({
          peopleDetailsData: res.data,
          showLoader: false
        });
      })
      .catch(err => {
        console.log(err);
        console.log("|Page Error|");
      });
  };

  render() {
    return (
      <>
        {/* <Helmet> */}
        <HelmetData pageComponentType="MeetOurPeopleDetails" />
        {this.state.showLoader ? null : (
          <BaseComponent>
            <div>
              {/* Header Start */}
              <div className="headerAbout text-center">
                <h2>Meet Our People</h2>
              </div>
              {/* Header End */}
              <Container>
                <div className="bod-details">
                  <div className="profile-block clerfix">
                    <figure className="profile-image">
                      <img
                        src={
                          AppConstant.IMG_BASE_URL +
                          this.state.peopleDetailsData.Image.url
                        }
                        alt={this.state.peopleDetailsData.Image.name}
                      />
                    </figure>
                    <div className="profile-cintent">
                      <h2>{this.state.peopleDetailsData.Name}</h2>
                      <div className="designation">
                        {this.state.peopleDetailsData.Designation}
                      </div>
                      <div className="profile-info">
                        <p>{this.state.peopleDetailsData.Description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </BaseComponent>
        )}
      </>
    );
  }
}

export default MeetOurPeopleDetails;
