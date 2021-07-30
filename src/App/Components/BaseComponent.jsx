import React, { Component } from "react";
import Header from "./Common/Header/Header";
import Footer from "./Common/Footer/Footer";
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

class BaseComponent extends Component {

  // constructor(props) {
  //   super(props);

  // this.state = {
  //   isOpenCVDPopup: sessionStorage.getItem('isOpenCVDPopup'),
  //   displayBlk: 'none'
  // };
  // }


  // handlePopClose = () => {
  //   this.setState({
  //     isOpenCVDPopup: sessionStorage.setItem('isOpenCVDPopup', 'off'),
  //     displayBlk: 'none',
  //     pageName:""
  //   });
  // };

  // goToRenew = () => {
  //   this.handlePopClose();
  //   this.props.history.push('/health-insurance/arogya-sanjeevani-policy?utm_source=Banner_Website&utm_medium=banner&utm_campaign=ArogyaSanjeevani_ManuBhaker_140520');
  // }

  componentDidMount(){

    //UTM Source Store
    let urlPage = this.props.location.search;
    let paramPage;
    if(sessionStorage.getItem('paramPage')){
      paramPage = sessionStorage.getItem('paramPage');
    } else {
      paramPage = queryString.parse(urlPage);
      sessionStorage.setItem('paramPage', JSON.stringify(paramPage));
    }
    //UTM Source Store

    let productSlug = this.props.location.pathname.split("/");
    //console.log(productSlug);
    if(typeof productSlug[1] !=='undefined' && productSlug[1]===''){
      //this.setState({pageName:"Home"});
      document.body.classList.add('home-page');
      document.body.classList.remove('other-page');
    } else {
      document.body.classList.remove('home-page');
      document.body.classList.add('other-page');
    }
    
  }

  render() {
    
    return (
      <div>
        <Header title={this.props.pageTitle} />
        {this.props.children}
        <Footer />
        {/* {(this.state.isOpenCVDPopup !== 'off' && this.state.pageName==="Home") ?
          <div className="home-popup" style={{ display: this.state.displayBlk }}>
            <div className="home-overley"></div>
            <div className="home-popup-content">
              <div className="close-btn" onClick={this.handlePopClose.bind(this)}><span>x</span></div>
              <div className="home-popup-inner" onClick={this.goToRenew.bind(this)}>
              <img alt="" src={require("../assets/images/Arogya_Sanjeevani_Banner.jpg")} className="popupBannerImg" />

                {/* <img alt="" src={require("../assets/images/logo-ab.png")} className="main" />               
                <h3>Policyholders who have missed renewing their Motor Third Party Insurance Policy
                or Health Insurance Policy in the period between 25th March 2020 to 3rd May 2020
                due to lockdown situation in the Country can renew the same by 15th May 2020
                  with continuation of coverage and other continuity benefits. </h3>
                <div className="reach-us">
                  <h5>Reach us on: </h5>
                  <ul className="linkUrl">
                    <li><img alt="" src={require("../assets/images/geography-iocn.png")} />
                      <div style={{ cursor: "pointer" }} onClick={this.goToRenew.bind(this)}>www.sbigeneral.in</div>
                    </li>
                    <li><img alt="" src={require("../assets/images/email-iocn.png")} /> customer.care@sbigeneral.in</li>
                  </ul>
                </div>
                <div className="popup-foot">ADBAN/CORPCOM/20-21/APR/001 | T&C Apply</div> /}
              </div>
            </div>
          </div>
          : null} */}
      </div>
    );
  }
}

export default withRouter(BaseComponent);
