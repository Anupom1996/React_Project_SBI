import React, {  } from "react";
import BaseComponent from "../BaseComponent";
import { Modal, Button, Form } from 'react-bootstrap'
import { Container } from "react-bootstrap";

import HomeWhySBI from "./HomeWhySBI";
import HomeAwardsRecognitions from "./HomeAwardsRecognitions";
import HomeValueAddedServices from "./ValueAddedServices";
import HomeBlogsLatestNews from "./HomeBlogsLatestNews";
//import HomeSocialFeed from "./HomeSocialFeed";
import HomeTestimonials from "./HomeTestimonials";
import { isMobile } from "react-device-detect";
import HelmetData from "../Common/HelmetData";

class Home extends React.PureComponent {

  constructor(props) {
    super(props); 
    this.state={
      isOpen: false
    } 
   
        this.closeModal = this.closeModal.bind(this);
  }
  componentDidMount() {
    this.setState({
      isOpen: true

  })
  }
  closeModal() {

    this.setState({
        isOpen: false

    })

}
  gotoPMYDetail = () => {
    this.props.history.push('/pradhan-mantri-fasal-bima-yojna/');
  }

  render() {
    let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;    
   let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let pm;
    let fasal;  
    if (lang_name==='en') {
      pm = sbiHomeData && sbiHomeData['HOME_BANNER_PM'] && sbiHomeData['HOME_BANNER_PM'].content_en;
      fasal = sbiHomeData && sbiHomeData['HOME_BANNER_FASAL_BIMA_YOJNA'] && sbiHomeData['HOME_BANNER_FASAL_BIMA_YOJNA'].content_en;       
    } else {
      pm = sbiHomeData && sbiHomeData['HOME_BANNER_PM'] && sbiHomeData['HOME_BANNER_PM'].content_hi;
      fasal = sbiHomeData && sbiHomeData['HOME_BANNER_FASAL_BIMA_YOJNA'] && sbiHomeData['HOME_BANNER_FASAL_BIMA_YOJNA'].content_hi;      
    }
    //console.log("fasal",sbiHomeData);
    return (
      <BaseComponent pageTitle="home">

        {/* <Helmet> */}
        <HelmetData pageComponentType="Home" />

        {/* Why SBI */}
        <HomeWhySBI />
        
        {/* Value Added Services */}
        <HomeValueAddedServices/>

        {/* Customers Say */}
        {/* <HomeVideos /> */}

        {/* Blogs and Latest News Wrapper */}
        <HomeBlogsLatestNews />

        {/* Awards & Recognitions */}
        <HomeAwardsRecognitions />

        {/*Pradhan Mantri Fasal Bima Yojna Panel */}
        {!isMobile ? (

          <section className="pradhanSec">
            <Container>

              <div className="itemArea d-flex align-items-center" style={{ cursor: "pointer" }} onClick={() => this.gotoPMYDetail()}>
                <figure className="m-0">
                  <img alt="" src={require("../../assets/images/pradhanLogo_new.png")} />
                </figure>
                <div className="pradhanSecCon">
                  <h2>
                    {pm?pm:'Pradhan Mantri'} <span>{fasal?fasal:'Fasal Bima Yojana'}</span>
                  </h2>
                </div>
              </div>
              <div className="pradhanSecShade"></div>

            </Container>
          </section>

        ) : null}



<Modal show={this.state.isOpen} className="homeModal">
          <Modal.Header closeButton onClick={this.closeModal}>
            {/* <Modal.Title>Share</Modal.Title> */}
          </Modal.Header>
          <Modal.Body>

          <figure className="m-0 m-btns">
            <img alt="" src={require("../../assets/images/SBIG-popup_800X800px.jpg")} />
            <div className="btnArea">
               <a href="#">Know More</a>
               <a href="#">Buy Now</a>
             </div>
          </figure>
             
          </Modal.Body>
          
        </Modal>






        {/* Social Feed Panel */}
        {/* {!isMobile ? <HomeSocialFeed /> : null} */}
        
        {/* Testimonials component */}
        <HomeTestimonials />     

      </BaseComponent>
    );
  }
}

export default Home;
