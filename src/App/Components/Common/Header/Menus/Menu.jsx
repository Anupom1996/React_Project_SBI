import React, { Component } from "react";
import Axios from "../../../../Services/Shared/Axios";
import { isMobile } from "react-device-detect";
import HomeMenuBase from "./HomeMenuBase";
import { Container } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown'
import { Accordion, Card, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import siteLogo from "../../../../assets/images/logo.svg";
import * as AppConstant from "../../../AppConstant";
import swal from "sweetalert";

class Menu extends Component {
  togglemenuAccordianBtn = (e) => {
    let classAccord = e.target.className;
    let els = document.getElementsByClassName("buttonactive btn btn-link");
    if (els) {
      while (els[0]) {
        els[0].classList.remove("buttonactive");
      }
    }
    if (classAccord.indexOf("buttonactive") > -1) {
      e.target.className = "btn btn-link";
    } else {
      e.target.className = "buttonactive btn btn-link";
    }
  }


  constructor(props) {
    super(props);
    this.state = {
      oneMgUrl:
        "https://www.1mg.com/?_source=sbigwes&utm_source=online&utm_medium=sbigwes&utm_campaign=nov",
      fitternityUrl: "https://apistage.fitn.in:9999/sbi",
      open_popup: false,
      headerMenu: [],

    };
    this.getHeaderMenuList();

  }

  getHeaderMenuList() {
    Axios({
      method: "get",
      url: "/menucategories?menu_type=HeaderMenu",
    })
      .then((res) => {
        this.setState({
          headerMenu: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        console.log("|Error|");
      });
  }

  handleToggleMenu = () => {
    if (document.body.classList.contains("openmenu")) {
      document.body.classList.remove("openmenu");
    } else {
      document.body.classList.add("openmenu");
    }
  };

  handleToggleProductMenu = () => {
    var prod = document.getElementById("menuProduct");
    if (prod.classList) {
      prod.classList.toggle("openProductMenu");
    } else {
      // For IE9
      var classes = prod.className.split(" ");
      var j = classes.indexOf("openProductMenu");

      if (j >= 0) classes.splice(j, 1);
      else classes.push("openProductMenu");
      prod.className = classes.join(" ");
    }
    this.preventBodyScroll();
    this.gtmClickHandler("all_pages_3_menu_click", "all_pages", "Menu");
  };
  preventBodyScroll = () => {
    //Function used for mobile menu scrolling
    var prod = document.getElementById("menuProduct");
    if (prod.classList.contains("openProductMenu")) {
      document.body.classList.add("menuOpen");
    } else {
      document.body.classList.remove("menuOpen");
    }
  };

  handleInsuranceToggleMenu = (id) => {
    var y = document.getElementById(id);
    if (y.classList) {
      y.classList.toggle("insuAccorToggle");
    } else {
      // For IE9
      var classes = y.className.split(" ");
      var j = classes.indexOf("insuAccorToggle");

      if (j >= 0) classes.splice(j, 1);
      else classes.push("insuAccorToggle");
      y.className = classes.join(" ");
    }
  };
  fetchPhrases = () => {
    //this.props.loadingStart();
    Axios
      .get(`/translationkeywords?&_limit=2000`, {})
      .then(res => {
        //console.log(res);
        let phraseData = (res.data ? res.data : []);
        let sbiHomeData = {}
        let rObj = {}
        sbiHomeData = phraseData && phraseData.length > 0 && phraseData.map((obj) => {
          rObj[obj.keyword] = {
            'content_en': obj.content_en,
            'content_hi': obj.content_hi
          }
        })
        this.setState({
          sbiHomeData: rObj
        });
        localStorage.setItem("phrases", JSON.stringify(rObj))

        //console.log(localStorage.getItem("lang_name"));
        //this.props.loadingStop();
        //window.location.reload();
        return true
      })
      .catch(err => {
        this.setState({
          phrases: []
        });
        //this.props.loadingStop();
        return false
      });
  }

  componentDidMount() {
    this.preventBodyScroll();
    (localStorage.getItem("lang_name") === "hi") ? localStorage.setItem("lang_name", "hi") : localStorage.setItem("lang_name", "en");

    this.fetchPhrases();
    /* document.querySelectorAll('.menuProduct a').forEach(item => {
            item.addEventListener('click', event => {
                this.handleToggleProductMenu();
            })
        });*/
  }

  gtmClickHandler = (eventName, pageType, clickText) => {
    const data = {
      event: eventName,
      pagetype: pageType,
      click_text: clickText,
    };
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(data);
  };

  showThirdPartyAlert = (thirdPartyMerchant) => {
    swal({
      text:
        "By clicking this link you will be re-directed to third party merchant website. SBI General is not responsible for the content/ service provided by such external websites. SBI General makes no representations nor has any supervision or control over the quality, content, reliability or security of the third party website, nor shall SBI General be liable for its use",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDo) => {
      if (willDo) {
        if (thirdPartyMerchant === "fitternity") {
          window.open(this.state.fitternityUrl, "_blank");
          this.gtmClickHandler(
            "all_pages_3_menu_click",
            "all_pages",
            "fitternity"
            );
        }
        if (thirdPartyMerchant === "oneMg") {
          window.open(this.state.oneMgUrl, "_blank");
          this.gtmClickHandler(
            "all_pages_3_menu_click",
            "all_pages",
            "1Mg"
          );
        }
      }
    });
  };

  render() {
    let appUrl = AppConstant.APP_URL;
    let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    let menu,quick_assist, health2,  travel, motor, Fitternity, Mg_1, Value_Added_Service,
      personal_accident_individual, Arogya_Premier, Arogya_Top_Up, Arogya_Sanjeevani,
      More_Product, Quick_Links, Motor_2_Wheeler, Wheeler_2, Long_Term_Wheeler, Private_Car_Wheeler, Simple_Home,
      Arogya_Plus, Retail_Health, Critical_Illness, Daily_Cash, Group_Helth, Helth_Loan,  Motor_Private_Car, Motor_Act_Only_3,
       Travel_Insirence, Two_Wheeler, Motor_Long_Term, Motor_Act_Only, Motor_Insurence, Motor_Vehicle, Act_Only_Insurence, Personal_Accident;
    if (lang_name && lang_name === 'en') {

      Value_Added_Service = sbiHomeData && sbiHomeData['PRODUCTS_SIDE_MENU_VALUE_ADDED_SERVICE'] && sbiHomeData['PRODUCTS_SIDE_MENU_VALUE_ADDED_SERVICE'].content_en;
      Mg_1 = sbiHomeData && sbiHomeData['PRODUCTS_SIDE_MENU_1MG'] && sbiHomeData['PRODUCTS_SIDE_MENU_1MG'].content_en;
      Fitternity = sbiHomeData && sbiHomeData['PRODUCTS_SIDE_MENU_FITTERNITY'] && sbiHomeData['PRODUCTS_SIDE_MENU_FITTERNITY'].content_en;
      menu = sbiHomeData && sbiHomeData['HOME_TAB_MENU'] && sbiHomeData['HOME_TAB_MENU'].content_en;
      health2 = sbiHomeData && sbiHomeData['HOME_TAB_HEALTH'] && sbiHomeData['HOME_TAB_HEALTH'].content_en;
      Motor_Act_Only_3 = sbiHomeData && sbiHomeData['SIDE_MENU_MOTOR_ACT_ONLY_3'] && sbiHomeData['SIDE_MENU_MOTOR_ACT_ONLY_3'].content_en;
      personal_accident_individual = sbiHomeData && sbiHomeData['SIDE_MENU_PERSONAL_ACCIDENT_INDIVIDUAL'] && sbiHomeData['SIDE_MENU_PERSONAL_ACCIDENT_INDIVIDUAL'].content_en;
      Act_Only_Insurence = sbiHomeData && sbiHomeData['SIDE_MENU_ACT_ONLY_INSURENCE'] && sbiHomeData['SIDE_MENU_ACT_ONLY_INSURENCE'].content_en;
      Motor_Vehicle = sbiHomeData && sbiHomeData['SIDE_MENU_MOTOR_VEHICLE'] && sbiHomeData['SIDE_MENU_MOTOR_VEHICLE'].content_en;
      Motor_Insurence = sbiHomeData && sbiHomeData['SIDE_MENU_MOTOR_TRAILER_INSURENCE'] && sbiHomeData['SIDE_MENU_MOTOR_TRAILER_INSURENCE'].content_en;
      Motor_Act_Only = sbiHomeData && sbiHomeData['SIDE_MENU_MOTOR_ACT_ONLY'] && sbiHomeData['SIDE_MENU_MOTOR_ACT_ONLY'].content_en;
      Motor_Long_Term = sbiHomeData && sbiHomeData['SIDE_MENU_MOTOR_LONG_TERM'] && sbiHomeData['SIDE_MENU_MOTOR_LONG_TERM'].content_en;
      Two_Wheeler = sbiHomeData && sbiHomeData['SIDE_MENU_MOTOR_TWO_WHEELER'] && sbiHomeData['SIDE_MENU_MOTOR_TWO_WHEELER'].content_en;
      Motor_Private_Car = sbiHomeData && sbiHomeData['SIDE_MENU_MOTOR_PRIVATE_CAR'] && sbiHomeData['SIDE_MENU_MOTOR_PRIVATE_CAR'].content_en;
      Travel_Insirence = sbiHomeData && sbiHomeData['SIDE_MENU_TRAVEL_INSURENCE'] && sbiHomeData['SIDE_MENU_TRAVEL_INSURENCE'].content_en;      
      Helth_Loan = sbiHomeData && sbiHomeData['SIDE_MENU_HELTH_LOAN'] && sbiHomeData['SIDE_MENU_HELTH_LOAN'].content_en;
      Group_Helth = sbiHomeData && sbiHomeData['SIDE_MENU_HELTH_GROUP_HELTH'] && sbiHomeData['SIDE_MENU_HELTH_GROUP_HELTH'].content_en;
      Daily_Cash = sbiHomeData && sbiHomeData['SIDE_MENU_HELTH_HOSPITAL_DAILY_CASH'] && sbiHomeData['SIDE_MENU_HELTH_HOSPITAL_DAILY_CASH'].content_en;
      Critical_Illness = sbiHomeData && sbiHomeData['SIDE_MENU_HELTH_CRITICAL_ILLNESS'] && sbiHomeData['SIDE_MENU_HELTH_CRITICAL_ILLNESS'].content_en;
      Retail_Health = sbiHomeData && sbiHomeData['SIDE_MENU_HELTH_RETAIL_HEALTH'] && sbiHomeData['SIDE_MENU_HELTH_RETAIL_HEALTH'].content_en;
      Arogya_Top_Up = sbiHomeData && sbiHomeData['SIDE_MENU_HELTH_AROGYA_TOP_UP'] && sbiHomeData['SIDE_MENU_HELTH_AROGYA_TOP_UP'].content_en;
      Arogya_Sanjeevani = sbiHomeData && sbiHomeData['SIDE_MENU_HELTH_AROGYA_SANJEEVANI'] && sbiHomeData['SIDE_MENU_HELTH_AROGYA_SANJEEVANI'].content_en;
      Arogya_Plus = sbiHomeData && sbiHomeData['SIDE_MENU_HELTH_AROGYA_PLUS'] && sbiHomeData['SIDE_MENU_HELTH_AROGYA_PLUS'].content_en;
      Arogya_Premier = sbiHomeData && sbiHomeData['RENEW_POLICY_BLOG_HP_AROGYA_PREMIER'] && sbiHomeData['RENEW_POLICY_BLOG_HP_AROGYA_PREMIER'].content_en;     
      travel = sbiHomeData && sbiHomeData['HOME_TAB_TRAVEL'] && sbiHomeData['HOME_TAB_TRAVEL'].content_en;
      motor = sbiHomeData && sbiHomeData['HOME_TAB_MOTOR'] && sbiHomeData['HOME_TAB_MOTOR'].content_en;
      More_Product = sbiHomeData && sbiHomeData['SIDE_MENU_HELTH_MORE_PRODUCTS'] && sbiHomeData['SIDE_MENU_HELTH_MORE_PRODUCTS'].content_en;
      Quick_Links = sbiHomeData && sbiHomeData['SIDE_MENU_HELTH_QUICK_LINKS'] && sbiHomeData['SIDE_MENU_HELTH_QUICK_LINKS'].content_en;
      Motor_2_Wheeler = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOTOR_TWO_WHEELER'] && sbiHomeData['PRODUCTS_RETAIL_MOTOR_TWO_WHEELER'].content_en;
      Wheeler_2 = sbiHomeData && sbiHomeData['SIDE_MENU_HELTH_2_WHEELER'] && sbiHomeData['SIDE_MENU_HELTH_2_WHEELER'].content_en;
      Long_Term_Wheeler = sbiHomeData && sbiHomeData['SIDE_MENU_HELTH_LONG_TERM_2_WHEELER'] && sbiHomeData['SIDE_MENU_HELTH_LONG_TERM_2_WHEELER'].content_en;
      Private_Car_Wheeler = sbiHomeData && sbiHomeData['SIDE_MENU_HELTH_LONG_TERM_PRIVATE_CAR'] && sbiHomeData['SIDE_MENU_HELTH_LONG_TERM_PRIVATE_CAR'].content_en;
      Simple_Home = sbiHomeData && sbiHomeData['SIDE_MENU_HELTH_SIMPLE_HOME'] && sbiHomeData['SIDE_MENU_HELTH_SIMPLE_HOME'].content_en;
      quick_assist = sbiHomeData && sbiHomeData['HOME_HEADER_QUICK_ASSIST'] && sbiHomeData['HOME_HEADER_QUICK_ASSIST'].content_en;
      Personal_Accident = sbiHomeData && sbiHomeData['HOME_MENU_PERSONAL_ACCIDENT'] && sbiHomeData['HOME_MENU_PERSONAL_ACCIDENT'].content_en;
    } else {

      health2 = sbiHomeData && sbiHomeData['HOME_TAB_HEALTH'] && sbiHomeData['HOME_TAB_HEALTH'].content_hi;
      Mg_1 = sbiHomeData && sbiHomeData['PRODUCTS_SIDE_MENU_1MG'] && sbiHomeData['PRODUCTS_SIDE_MENU_1MG'].content_hi;
      Motor_Act_Only_3 = sbiHomeData && sbiHomeData['SIDE_MENU_MOTOR_ACT_ONLY_3'] && sbiHomeData['SIDE_MENU_MOTOR_ACT_ONLY_3'].content_hi;
      More_Product = sbiHomeData && sbiHomeData['SIDE_MENU_HELTH_MORE_PRODUCTS'] && sbiHomeData['SIDE_MENU_HELTH_MORE_PRODUCTS'].content_hi;
      Quick_Links = sbiHomeData && sbiHomeData['SIDE_MENU_HELTH_QUICK_LINKS'] && sbiHomeData['SIDE_MENU_HELTH_QUICK_LINKS'].content_hi;
      Motor_2_Wheeler = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_MOTOR_TWO_WHEELER'] && sbiHomeData['PRODUCTS_RETAIL_MOTOR_TWO_WHEELER'].content_hi;
      Wheeler_2 = sbiHomeData && sbiHomeData['SIDE_MENU_HELTH_2_WHEELER'] && sbiHomeData['SIDE_MENU_HELTH_2_WHEELER'].content_hi;
      Long_Term_Wheeler = sbiHomeData && sbiHomeData['SIDE_MENU_HELTH_LONG_TERM_2_WHEELER'] && sbiHomeData['SIDE_MENU_HELTH_LONG_TERM_2_WHEELER'].content_hi;
      Private_Car_Wheeler = sbiHomeData && sbiHomeData['SIDE_MENU_HELTH_LONG_TERM_PRIVATE_CAR'] && sbiHomeData['SIDE_MENU_HELTH_LONG_TERM_PRIVATE_CAR'].content_hi;
      Simple_Home = sbiHomeData && sbiHomeData['SIDE_MENU_HELTH_SIMPLE_HOME'] && sbiHomeData['SIDE_MENU_HELTH_SIMPLE_HOME'].content_hi;
      personal_accident_individual = sbiHomeData && sbiHomeData['SIDE_MENU_PERSONAL_ACCIDENT_INDIVIDUAL'] && sbiHomeData['SIDE_MENU_PERSONAL_ACCIDENT_INDIVIDUAL'].content_hi;
      Act_Only_Insurence = sbiHomeData && sbiHomeData['SIDE_MENU_ACT_ONLY_INSURENCE'] && sbiHomeData['SIDE_MENU_ACT_ONLY_INSURENCE'].content_hi;
      Motor_Vehicle = sbiHomeData && sbiHomeData['SIDE_MENU_MOTOR_VEHICLE'] && sbiHomeData['SIDE_MENU_MOTOR_VEHICLE'].content_hi;
      Motor_Insurence = sbiHomeData && sbiHomeData['SIDE_MENU_MOTOR_TRAILER_INSURENCE'] && sbiHomeData['SIDE_MENU_MOTOR_TRAILER_INSURENCE'].content_hi;
      Motor_Act_Only = sbiHomeData && sbiHomeData['SIDE_MENU_MOTOR_ACT_ONLY'] && sbiHomeData['SIDE_MENU_MOTOR_ACT_ONLY'].content_hi;
      Motor_Long_Term = sbiHomeData && sbiHomeData['SIDE_MENU_MOTOR_LONG_TERM'] && sbiHomeData['SIDE_MENU_MOTOR_LONG_TERM'].content_hi;
      Two_Wheeler = sbiHomeData && sbiHomeData['SIDE_MENU_MOTOR_TWO_WHEELER'] && sbiHomeData['SIDE_MENU_MOTOR_TWO_WHEELER'].content_hi;
      Motor_Private_Car = sbiHomeData && sbiHomeData['SIDE_MENU_MOTOR_PRIVATE_CAR'] && sbiHomeData['SIDE_MENU_MOTOR_PRIVATE_CAR'].content_hi;
      Travel_Insirence = sbiHomeData && sbiHomeData['SIDE_MENU_TRAVEL_INSURENCE'] && sbiHomeData['SIDE_MENU_TRAVEL_INSURENCE'].content_hi;    
      Helth_Loan = sbiHomeData && sbiHomeData['SIDE_MENU_HELTH_LOAN'] && sbiHomeData['SIDE_MENU_HELTH_LOAN'].content_hi;
      Group_Helth = sbiHomeData && sbiHomeData['SIDE_MENU_HELTH_GROUP_HELTH'] && sbiHomeData['SIDE_MENU_HELTH_GROUP_HELTH'].content_hi;
      Daily_Cash = sbiHomeData && sbiHomeData['SIDE_MENU_HELTH_HOSPITAL_DAILY_CASH'] && sbiHomeData['SIDE_MENU_HELTH_HOSPITAL_DAILY_CASH'].content_hi;
      Critical_Illness = sbiHomeData && sbiHomeData['SIDE_MENU_HELTH_CRITICAL_ILLNESS'] && sbiHomeData['SIDE_MENU_HELTH_CRITICAL_ILLNESS'].content_hi;
      Retail_Health = sbiHomeData && sbiHomeData['SIDE_MENU_HELTH_RETAIL_HEALTH'] && sbiHomeData['SIDE_MENU_HELTH_RETAIL_HEALTH'].content_hi;
      Arogya_Top_Up = sbiHomeData && sbiHomeData['SIDE_MENU_HELTH_AROGYA_TOP_UP'] && sbiHomeData['SIDE_MENU_HELTH_AROGYA_TOP_UP'].content_hi;
      Arogya_Plus = sbiHomeData && sbiHomeData['SIDE_MENU_HELTH_AROGYA_PLUS'] && sbiHomeData['SIDE_MENU_HELTH_AROGYA_PLUS'].content_hi;
      Arogya_Sanjeevani = sbiHomeData && sbiHomeData['SIDE_MENU_HELTH_AROGYA_SANJEEVANI'] && sbiHomeData['SIDE_MENU_HELTH_AROGYA_SANJEEVANI'].content_hi;
      Arogya_Premier = sbiHomeData && sbiHomeData['RENEW_POLICY_BLOG_HP_AROGYA_PREMIER'] && sbiHomeData['RENEW_POLICY_BLOG_HP_AROGYA_PREMIER'].content_hi;
      menu = sbiHomeData && sbiHomeData['HOME_TAB_MENU'] && sbiHomeData['HOME_TAB_MENU'].content_hi;
      Fitternity = sbiHomeData && sbiHomeData['PRODUCTS_SIDE_MENU_FITTERNITY'] && sbiHomeData['PRODUCTS_SIDE_MENU_FITTERNITY'].content_hi;
      travel = sbiHomeData && sbiHomeData['HOME_TAB_TRAVEL'] && sbiHomeData['HOME_TAB_TRAVEL'].content_hi;
      Value_Added_Service = sbiHomeData && sbiHomeData['PRODUCTS_SIDE_MENU_VALUE_ADDED_SERVICE'] && sbiHomeData['PRODUCTS_SIDE_MENU_VALUE_ADDED_SERVICE'].content_hi;
      motor = sbiHomeData && sbiHomeData['HOME_TAB_MOTOR'] && sbiHomeData['HOME_TAB_MOTOR'].content_hi;
      quick_assist = sbiHomeData && sbiHomeData['HOME_HEADER_QUICK_ASSIST'] && sbiHomeData['HOME_HEADER_QUICK_ASSIST'].content_hi;
      Personal_Accident = sbiHomeData && sbiHomeData['HOME_MENU_PERSONAL_ACCIDENT'] && sbiHomeData['HOME_MENU_PERSONAL_ACCIDENT'].content_hi;
    }
    //console.log("hm", this.state.headerMenu);
    return (
      <div className="">
        <Navbar className="sbi-top-nav">
          <Container>
            <Link
              to={"/"}
              className="navbar-brand"
              id="logo_click"
              onClick={() =>
                this.gtmClickHandler(
                  "all_pages_1_logo_click",
                  "all_pages",
                  "Logo Click"
                )
              }
            >
              <img alt="" src={siteLogo} />

            </Link>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                {isMobile === false
                  ? this.state.headerMenu.length === 0
                    ? null
                    : this.state.headerMenu.map((item, i) =>
                      item.sub_menu_items.map((sub_menu, j) => (
                        <Link
                          className="nav-link"
                          key={j}
                          to={sub_menu.menu_link}
                          onClick={() =>
                            this.gtmClickHandler(
                              "all_pages_2_navigation_menu_click",
                              "all_pages",
                              "Nav Menu " + sub_menu.title
                            )
                          }
                        >
                          {(lang_name === 'en')
                            ? sub_menu.title_en ? sub_menu.title_en : sub_menu.title
                            : sub_menu.title_hi ? sub_menu.title_hi : sub_menu.title}
                        </Link>
                      ))
                    )
                  : null}
              </Nav>
              <div className="righthead d-flex">
                {/* <select
                            name="langauage"
                            className="listSelect"
                            defaultValue={localStorage.getItem('lang_name')}
                            onChange={e => {
                                localStorage.setItem('lang_name', e.target.value);
                                this.fetchPhrases();
                                window.location.reload();
                            }}
                            style={{
                                width: '96px',
                                position: 'relative',
                                left: '-9px',
                                border: '0px',
                                boxShadow: 'none',
                                background: 'none',
                                color: '#65106b',
                            }}>
                            <option value="en">English</option>
                            <option value="hi">हिन्दी</option>
                        </select> */}
                <ul className="linkninfo">
                  {/* <li className="phonenumber"></li>
                  <li className="quickassist">
                    <a
                      className="nav-link"
                      onClick={() =>
                        this.gtmClickHandler(
                          "all_pages_2_navigation_menu_click",
                          "all_pages",
                          "quick assist"
                        )
                      }
                      href={AppConstant.QUICK_ASIST_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    </a>
                  </li>
                  <li className="phonenumber"></li>
                  <li className="phonenumber"></li> */}
                  {/* <li
                    className="loginlink"
                    onClick={() =>
                      this.gtmClickHandler(
                        "all_pages_2_navigation_menu_click",
                        "all_pages",
                        "login"
                      )
                    }
                  >
                    <Link to={"/channel-partner-login"}>login</Link>
                  </li> */}
                  {/* <li className="search">
                    <a
                      className="nav-link"
                      onClick={() =>
                        this.gtmClickHandler(
                          "all_pages_2_navigation_menu_click",
                          "all_pages",
                          "quick assist"
                        )
                      }
                      href={AppConstant.QUICK_ASIST_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    </a>
                  </li> */}
                  <li className="call">
                    <a className="nav-link" href="tel:18001021111" title="1800 102 1111" ></a>
                  </li>
                  <li className="quickassist">
                    <a
                      className="nav-link"
                      onClick={() =>
                        this.gtmClickHandler(
                          "all_pages_2_navigation_menu_click",
                          "all_pages",
                          "quick assist"
                        )
                      }
                      href={AppConstant.QUICK_ASIST_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    </a>
                  </li>
                  <li className="login">
                    <a
                      className="nav-link"
                      onClick={() =>
                        this.gtmClickHandler(
                          "all_pages_2_navigation_menu_click",
                          "all_pages",
                          "quick assist"
                        )
                      }
                      href={AppConstant.LOGIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    </a>
                  </li>
                </ul>
              </div>
            </Navbar.Collapse>
            <Dropdown
              // onSelect={function(evt){this.setState({language:evt})}}
              onSelect={function (evt) {
                localStorage.setItem('lang_name', evt);
                window.location.reload();
              }}>
              <Dropdown.Toggle variant="success" id="dropdown-basic" >
                {(lang_name === 'en') ? 'English' : 'हिन्दी'}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="en" className="dropTop">English</Dropdown.Item>
                <Dropdown.Item eventKey="hi" className="dropBot">हिन्दी</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button
              className="togglemeDeskTop"
              onClick={this.handleToggleProductMenu}
            >
              {/*<img alt="" src={sitemenu} />*/}&nbsp;
            </Button>

            <Button className="toggleme" onClick={this.handleToggleMenu}>
              Menu
            </Button>
          </Container>
        </Navbar>

        <section className="menuProduct" id="menuProduct">
          <div className="menuheading">
            <span>{menu?menu:'Menu'}</span>
            <div className="menuclose" onClick={this.handleToggleProductMenu}>
              {/*<svg
                xmlns="http://www.w3.org/2000/svg"
                width="17.035"
                height="20.884"
                viewBox="0 0 17.035 20.884"
              >
                <g
                  id="Group_1518"
                  data-name="Group 1518"
                  transform="translate(-1318 -34)"
                >
                  <g id="back" transform="translate(1324 34)">
                    <path
                      id="Path_16066"
                      data-name="Path 16066"
                      d="M122.118,10.441,112.687,1.01a.591.591,0,0,1,.836-.836l9.852,9.851a.589.589,0,0,1,0,.836l-9.852,9.847a.6.6,0,0,1-.416.175.576.576,0,0,1-.416-.175.589.589,0,0,1,0-.836Z"
                      transform="translate(-112.513 0)"
                      fill="#073b68"
                    />
                  </g>
                  <g
                    id="back-2"
                    data-name="back"
                    transform="translate(1318 34)"
                  >
                    <path
                      id="Path_16066-2"
                      data-name="Path 16066"
                      d="M122.118,10.441,112.687,1.01a.591.591,0,0,1,.836-.836l9.852,9.851a.589.589,0,0,1,0,.836l-9.852,9.847a.6.6,0,0,1-.416.175.576.576,0,0,1-.416-.175.589.589,0,0,1,0-.836Z"
                      transform="translate(-112.513 0)"
                      fill="#073b68"
                    />
                  </g>
                </g>
              </svg>*/}
            </div>
          </div>
          <div className="menuitem">
            <div className="quickassist quickassistMenu">
              <a
                href={AppConstant.QUICK_ASIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  this.gtmClickHandler(
                    "all_pages_3_menu_click",
                    "all_pages",
                    "quick assist"
                  )
                }
              >
                {quick_assist?quick_assist:'QUICK ASSIST'}
              </a>
            </div>
            <Accordion>
              {/* <Accordion defaultActiveKey="0"> */}
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey="1"
                    onClick={(e) => this.togglemenuAccordianBtn(e)}
                  >
                    <div className="healthIcon">
                      {/* <img src={health} alt="" /> */}
                    </div>
                    {health2?health2:'Health'}
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <a
                      href={
                        appUrl + "/health-insurance/arogya-sanjeevani-policy?lang=" + lang_name
                      }
                      rel="noopener noreferrer"
                      className="nav-link ftProduct"
                      onClick={() =>
                        this.gtmClickHandler(
                          "all_pages_3_menu_click",
                          "all_pages",
                          "Menu - Arogya Sanjeevani Policy"
                        )
                      }
                    >
                      {Arogya_Sanjeevani?Arogya_Sanjeevani:'Arogya Sanjeevani Policy(NEW)'} <span></span>
                    </a>
                    <a
                      href={appUrl + "/health-insurance/arogya-premier-policy?lang=" + lang_name}
                      rel="noopener noreferrer"
                      className="nav-link"
                      onClick={() =>
                        this.gtmClickHandler(
                          "all_pages_3_menu_click",
                          "all_pages",
                          "Menu - Arogya Premier"
                        )
                      }
                    >
                      {Arogya_Premier?Arogya_Premier:'Arogya Premier'}
                    </a>
                    <a
                      href={appUrl + "/health-insurance/arogya-plus-policy?lang=" + lang_name}
                      rel="noopener noreferrer"
                      className="nav-link"
                      onClick={() =>
                        this.gtmClickHandler(
                          "all_pages_3_menu_click",
                          "all_pages",
                          "Menu - Arogya Plus"
                        )
                      }
                    >
                      {Arogya_Plus?Arogya_Plus:'Arogya Plus'}
                    </a>
                    <a
                      href={appUrl + "/health-insurance/arogya-topup-policy?lang=" + lang_name}
                      rel="noopener noreferrer"
                      className="nav-link"
                      onClick={() =>
                        this.gtmClickHandler(
                          "all_pages_3_menu_click",
                          "all_pages",
                          "Menu - Arogya Top up"
                        )
                      }
                    >
                      {Arogya_Top_Up?Arogya_Top_Up:'Arogya Top up'}
                    </a>
                    <a
                      href={appUrl + "/health-insurance/retail-health?lang=" + lang_name}
                      rel="noopener noreferrer"
                      className="nav-link"
                      onClick={() =>
                        this.gtmClickHandler(
                          "all_pages_3_menu_click",
                          "all_pages",
                          "Menu - Health Insurance"
                        )
                      }
                    >
                      {Retail_Health?Retail_Health:'Retail Health Insurance'}
                    </a>
                    <a
                      href={
                        appUrl + "/health-insurance/critical-illness-insurance?lang=" + lang_name
                      }
                      rel="noopener noreferrer"
                      className="nav-link"
                      onClick={() =>
                        this.gtmClickHandler(
                          "all_pages_3_menu_click",
                          "all_pages",
                          "Menu - Critical Illness"
                        )
                      }
                    >
                      {Critical_Illness?Critical_Illness:'Critical Illness'}
                    </a>
                    <a
                      href={appUrl + "/health-insurance/hospital-daily-cash?lang=" + lang_name}
                      rel="noopener noreferrer"
                      className="nav-link"
                      onClick={() =>
                        this.gtmClickHandler(
                          "all_pages_3_menu_click",
                          "all_pages",
                          "Menu - Hospital Daily Cash"
                        )
                      }
                    >
                      {Daily_Cash?Daily_Cash:'Hospital Daily Cash'}
                    </a>
                    <a
                      href={appUrl + "/health-insurance/group-health-insurance?lang=" + lang_name}
                      rel="noopener noreferrer"
                      className="nav-link"
                      onClick={() =>
                        this.gtmClickHandler(
                          "all_pages_3_menu_click",
                          "all_pages",
                          "Menu - Group Health Insurance - SBI"
                        )
                      }
                    >
                      {Group_Helth?Group_Helth:'Group Health Insurance - SBI'}
                    </a>
                    <a
                      href={appUrl + "/health-insurance/loan-insurance?lang=" + lang_name}
                      rel="noopener noreferrer"
                      className="nav-link"
                      onClick={() =>
                        this.gtmClickHandler(
                          "all_pages_3_menu_click",
                          "all_pages",
                          "Menu - Loan Insurance"
                        )
                      }
                    >
                      {Helth_Loan?Helth_Loan:'Loan Insurance'}
                    </a>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              {/*<Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey="3"
                    onClick={(e) => this.togglemenuAccordianBtn(e)}
                  >
                    <div className="mortgageIcon">
                      <img src={mortgage} alt="" />
                    </div>
                    {home}
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <a
                      href={appUrl + "/home-insurance/long-term-home-insurance"}
                      rel="noopener noreferrer"
                      className="nav-link"
                      onClick={() =>
                        this.gtmClickHandler(
                          "all_pages_3_menu_click",
                          "all_pages",
                          "Menu - Long Term Home Insurance"
                        )
                      }
                    >
                      {Home_Long_Term}
                    </a>
                    <a
                      href={appUrl + "/home-insurance/simple-home-insurance"}
                      rel="noopener noreferrer"
                      className="nav-link"
                      onClick={() =>
                        this.gtmClickHandler(
                          "all_pages_3_menu_click",
                          "all_pages",
                          "Menu - Simple Home Insurance"
                        )
                      }
                    >
                      {Home_simple}
                    </a>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>*/}
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey="2"
                    onClick={(e) => this.togglemenuAccordianBtn(e)}
                  >
                    <div className="traveliconIcon">
                      {/*<img src={travelicon} alt="" />*/}
                    </div>
                    {travel?travel:'Travel'}
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <a
                      href={appUrl + "/travel-insurance?lang=" + lang_name}
                      rel="noopener noreferrer"
                      className="nav-link"
                      onClick={() =>
                        this.gtmClickHandler(
                          "all_pages_3_menu_click",
                          "all_pages",
                          "Menu - Travel Insurance"
                        )
                      }
                    >
                      {Travel_Insirence?Travel_Insirence:'Travel insurance '}
                    </a>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey="0"
                    onClick={(e) => this.togglemenuAccordianBtn(e)}
                  >
                    <div className="taxiIcon">
                      {/*<img src={taxi} alt="" />*/}
                    </div>{" "}
                    {motor?motor:'Motor'}
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <a
                      href={appUrl + "/motor-insurance/private-car-insurance?lang=" + lang_name}
                      rel="noopener noreferrer"
                      className="nav-link"
                      onClick={() =>
                        this.gtmClickHandler(
                          "all_pages_3_menu_click",
                          "all_pages",
                          "Menu - Motor Private car"
                        )
                      }
                    >
                      {Motor_Private_Car?Motor_Private_Car:'Private car insurance'}
                    </a>
                    <a
                      href={appUrl + "/motor-insurance/two-wheeler-insurance?lang=" + lang_name}
                      rel="noopener noreferrer"
                      className="nav-link"
                      onClick={() =>
                        this.gtmClickHandler(
                          "all_pages_3_menu_click",
                          "all_pages",
                          "Menu - Motor Two Wheeler"
                        )
                      }
                    >
                      {Two_Wheeler?Two_Wheeler:'Two wheeler insurance'}
                    </a>
                    <a
                      href={
                        appUrl +
                        "/motor-insurance/long-term-two-wheeler-insurance?lang=" + lang_name
                      }
                      rel="noopener noreferrer"
                      className="nav-link"
                      onClick={() =>
                        this.gtmClickHandler(
                          "all_pages_3_menu_click",
                          "all_pages",
                          "Menu - Long Term Two Wheeler Insurance Policy"
                        )
                      }
                    >
                      {Motor_Long_Term?Motor_Long_Term:'Long Term Two Wheeler Insurance Policy'}
                    </a>
                    <a
                      href={
                        appUrl +
                        "/motor-insurance/motor-act-only-two-wheeler-insurance?lang=" + lang_name
                      }
                      rel="noopener noreferrer"
                      className="nav-link"
                      onClick={() =>
                        this.gtmClickHandler(
                          "all_pages_3_menu_click",
                          "all_pages",
                          "Menu - Motor Act Only- Two Wheeler (5 Years)"
                        )
                      }
                    >
                      {Motor_Act_Only?Motor_Act_Only:'Motor Act only - Two wheeler (5 Years)'}
                    </a>
                    <a
                      href={
                        appUrl +
                        "/motor-insurance/motor-act-only-private-car-insurance?lang=" + lang_name
                      }
                      rel="noopener noreferrer"
                      className="nav-link"
                      onClick={() =>
                        this.gtmClickHandler(
                          "all_pages_3_menu_click",
                          "all_pages",
                          "Menu - Motor Act Only- Private Car (3 Years)"
                        )
                      }
                    >
                      {Motor_Act_Only_3?Motor_Act_Only_3:'Motor act only-private car (3 years)'}
                    </a>
                    <Link
                      className="nav-link"
                      to={"/commercial-motor-insurance"}
                      onClick={() =>
                        this.gtmClickHandler(
                          "all_pages_3_menu_click",
                          "all_pages",
                          "Menu - Motor - Trailer Insurance"
                        )
                      }
                    >
                      {Motor_Insurence?Motor_Insurence:'Motor Trailer Insurance'}
                    </Link>
                    <Link
                      className="nav-link"
                      to={"/tractor-and-other-farm-vehicle-insurance"}
                      onClick={() =>
                        this.gtmClickHandler(
                          "all_pages_3_menu_click",
                          "all_pages",
                          "Menu - Motor Commercial Vehicle Insurance Policy Package"
                        )
                      }
                    >
                      {Motor_Vehicle?Motor_Vehicle:'Motor commercial vehicle insurance policy package'}
                    </Link>
                    <Link
                      className="nav-link"
                      to={"/motor-act-only"}
                      onClick={() =>
                        this.gtmClickHandler(
                          "all_pages_3_menu_click",
                          "all_pages",
                          "Menu - Act Only Insurance Policy"
                        )
                      }
                    >
                      {Act_Only_Insurence?Act_Only_Insurence:'Act only insurance policy'}
                    </Link>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey="4"
                    onClick={(e) => this.togglemenuAccordianBtn(e)}
                  >
                    <div className="personalaccidentIcon">
                      {/*<img src={personalaccident} alt="" />*/}
                    </div>
                    {Personal_Accident?Personal_Accident:'Personal Accident'}
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    <Link
                      className="nav-link"
                      to={
                        "/personal-accident-insurance/individual-pa-insurance?lang=" + lang_name
                      }
                      onClick={() =>
                        this.gtmClickHandler(
                          "all_pages_3_menu_click",
                          "all_pages",
                          "Menu - Individual Personal Accident"
                        )
                      }
                    >
                     
                      {personal_accident_individual?personal_accident_individual:'Individual personal accident'}
                    </Link>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey="6"
                    onClick={(e) => this.togglemenuAccordianBtn(e)}
                  >
                    <div className="valueaddedservicesIcon">
                      {/*<img src={valueaddedservices} alt="" />*/}
                    </div>
                    {Value_Added_Service?Value_Added_Service:'Value Added Services'}
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="6">
                  <Card.Body>
                    <Link
                      className="nav-link"
                      to={"#"}
                      onClick={(e) => {
                        this.showThirdPartyAlert("oneMg");
                        this.gtmClickHandler(
                          "all_pages_3_menu_click",
                          "all_pages",
                          "1Mg"
                        );
                      }}
                    >
                      {Mg_1?Mg_1:'1MG'}
                    </Link>
                    <Link
                      className="nav-link"
                      to={"#"}
                      onClick={(e) => {
                        this.showThirdPartyAlert("fitternity");
                        this.gtmClickHandler(
                          "all_pages_3_menu_click",
                          "all_pages",
                          "fitternity"
                        );
                      }}
                    >
                      {Fitternity?Fitternity:'Fitternity'}
                    </Link>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              {isMobile ? (
                <>
                  <Link
                    className="more-nav-link"
                    to={"/product"}
                    onClick={() =>
                      this.gtmClickHandler(
                        "all_pages_3_menu_click",
                        "all_pages",
                        "Menu - More Products"
                      )
                    }
                  >
                    <div className="morelinkIcon">
                      {/*<img
                        src={require("../../../../assets/images/morelink.svg")}
                        alt=""
                      />*/}
                    </div>{" "}
                    {More_Product?More_Product:'More Products'}
                  </Link>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle
                        as={Button}
                        variant="link"
                        eventKey="7"
                        onClick={(e) => this.togglemenuAccordianBtn(e)}
                      >
                        <div className="backlinkIcon">
                          {/*<img
                            src={require("../../../../assets/images/backlink.svg")}
                            alt=""
                          />*/}
                        </div>
                        {Quick_Links?Quick_Links:'Quick Links'}
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="7">
                      <Card.Body>
                        {this.state.headerMenu.length === 0
                          ? null
                          : this.state.headerMenu.map((item, i) =>
                            item.sub_menu_items.map((sub_menu, j) => (
                              <>
                                {sub_menu.title !== "Products" ? (
                                  <Link
                                    className="nav-link"
                                    key={j}
                                    to={sub_menu.menu_link}
                                    onClick={() =>
                                      this.gtmClickHandler(
                                        "all_pages_3_menu_click",
                                        "all_pages",
                                        "Menu - " + sub_menu.title
                                      )
                                    }
                                  >
                                    {(lang_name === 'en')
                            ? sub_menu.title_en ? sub_menu.title_en : sub_menu.title
                            : sub_menu.title_hi ? sub_menu.title_hi : sub_menu.title}
                                    
                                  </Link>
                                ) : null}
                              </>
                            ))
                          )}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </>
              ) : null}
            </Accordion>
          </div>
        </section>

        <section className="menudesktop">
          <Nav>
            <button onClick={this.handleToggleMenu} className="closemenu">
              &times;
            </button>
            {this.state.headerMenu.length === 0
              ? null
              : this.state.headerMenu.map((item, i) =>
                item.sub_menu_items.map((sub_menu, j) => (
                  <Link className="nav-link" key={j} to={sub_menu.menu_link}>
                    {sub_menu.title}
                  </Link>
                ))
              )}
            <Link
              className="nav-link"
              to={"/motor-insurance/two-wheeler-insurance"}
            >
              {" "}
              {Motor_2_Wheeler}
            </Link>
            <Link
              className="nav-link"
              to={"/motor-insurance/long-term-two-wheeler-insurance"}
            >
              {Wheeler_2}
            </Link>
            <Link className="nav-link" to={"motor-act-only-two-wheeler"}>
              {Long_Term_Wheeler}
            </Link>
            <Link
              className="nav-link"
              to={"/motor-insurance/motor-act-only-private-car-insurance"}
            >
              {Private_Car_Wheeler}
            </Link>
            <Link className="nav-link" to={"simple-home-insurance"}>
              {Simple_Home}
            </Link>
          </Nav>
        </section>

        {this.props.page_name === "home" ? (
          <HomeMenuBase show_popup={this.state.open_popup} />
        ) : null}
      </div>
    );
  }
}

export default Menu;
