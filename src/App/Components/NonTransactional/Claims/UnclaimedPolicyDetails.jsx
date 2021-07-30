import React, { Component } from "react";
import { Col, Form, InputGroup, Button } from "react-bootstrap";
import { isMobile } from "react-device-detect";
//import { Link } from "react-router-dom";
import BaseComponent from "../../BaseComponent";
import DatePicker from "react-datepicker";
import Axios from "../../../Services/Shared/Axios";
import swal from "sweetalert";
import moment from 'moment';

class UnclaimedPolicyDetails extends Component {
    constructor(props) {
        super(props);
         // creating references for form element in search form
         this.name = React.createRef();
         this.pan = React.createRef();
         this.dob = React.createRef();
         this.policyNo = React.createRef();

        this.state = {
            dob: "",
            successMsgShow: false,
            showLoader: true,
            showDobError: false,
            policyList: [],
            isSearch:false
        };
    }

    searchUnclaimedPolicy = (requestParam) => {
        let queryStr = "";
    if (requestParam["name"]) {
      queryStr = "holder_name_contains=" + requestParam["name"];
    }
    if (requestParam["pan"]) {
      queryStr = queryStr + "&pan_contains=" + requestParam["pan"];
    }
    if (requestParam["dob"]) {
      queryStr = queryStr + "&date_of_birth_contains=" + requestParam["dob"];
    }
    if (requestParam["policyNo"]) {
      queryStr = queryStr + "&policy_no_contains=" + requestParam["policyNo"];
    }
    this.setState({
      policyList: [],
      isSearch:true
    });
    if (queryStr) {
      Axios({
        method: "get",
        url: `/unclaimedpolicies?` + queryStr
      })
        .then(res => {
            console.log(res);
          this.setState({
            policyList: res.data
          });
        })
        .catch(err => {
          console.log(err);
          console.log("|Search Error|");
        });
    }
       
        
    }

    componentDidMount() {
    }

    handleDateChange = (dob) => {
        this.setState({
            dob: dob,
            showDobError: false
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        let requestParam = {};
        // this.setState({
        //     successMsgShow: false
        // });

        // const form = event.currentTarget;
        // let requestParam = {};
        // this.setState({
        //     validated: true
        // });
        // if (
        //     form.checkValidity() === false || this.state.dob === ""
        // ) {
        //     if (this.state.dob === "") {
        //         this.setState({
        //             showDobError: true
        //         });
        //     }
        //     event.stopPropagation();
        // } else 
        let dob = "";
        if(this.state.dob){
            dob = moment(this.state.dob).format('YYYY-MM-DD');
        }

        requestParam["name"] = this.name.current.value;
        requestParam["pan"] = this.pan.current.value;
        requestParam["dob"] = dob;
        requestParam["policyNo"] = this.policyNo.current.value;

        if (requestParam["name"] || requestParam["pan"] || requestParam["dob"] ||requestParam["policyNo"] ) {
            this.searchUnclaimedPolicy(requestParam);
        } else {
            swal({
                text: "Please enter atleast one input to see the search result!",
                icon: "error"
            }).then(() => { });
        }
    };

    render() {
        const{policyList,isSearch} = this.state;
        return (
            <BaseComponent pageTitle="UnclaimedPolicyDetails">
                {/* Header Start */}
                {isMobile ? (
                    <section className="topform product-header">
                        <div className="insuTab">
                            <h1>Unclaimed Policy Details</h1>
                            {/* For Mobule */}
                        </div>
                    </section>
                ) : (
                        <section className="topform product-header">
                            <div className="rotateit">
                                <div className="skewbg"></div>
                                <div className="skewbg-light"></div>
                                <div className="bgtextureProduct"></div>
                            </div>
                            <div className="insuTab">
                                <h1>Unclaimed Policy Details</h1>
                                {/* For Desktop */}
                            </div>
                        </section>
                    )}
                {/* Header End */}
                <div className="container">
                {/* <p><a href={AppConstant.BASE_URL + "/uploads/37125802a0644925b49f4cbd2b0af7f1.xlsx"} target="_blank" rel="noopener noreferrer">
                Unclaimed Amount due to Policy Holder Mar 20
                    </a></p> */}
                    <div className="searchSec">
                        <Form
                            className="claim-form"
                            id="claim_intimation_form"
                            noValidate
                            validated={false}
                            onSubmit={this.handleSubmit}
                            autoComplete="off"
                        >
                            <Form.Row>
                                <Form.Group as={Col} lg="3" controlId="name">
                                    <InputGroup>
                                        <Form.Control
                                            type="text"
                                            placeholder="Name "
                                            maxLength="50"
                                            ref={this.name}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please Enter Your Full Name.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group as={Col} lg="2" controlId="pan">
                                    <InputGroup>
                                        <Form.Control
                                            type="text"
                                            placeholder="PAN "
                                            pattern="^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$"
                                            maxLength="10"
                                            ref={this.pan}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please Enter Your Valid PAN Number.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group as={Col} lg="3" controlId="dob">
                                    <InputGroup>
                                        <DatePicker
                                            selected={this.state.dob}
                                            className="form-control"
                                            onChange={(value) => this.handleDateChange(value)}
                                            dateFormat="dd/MM/yyyy"
                                            showMonthDropdown
                                            showYearDropdown
                                            dropdownMode="select"
                                            maxDate={new Date()}
                                            onKeyDown={e => e.preventDefault()}
                                            popperPlacement="top-end"
                                            placeholderText="Date of Birth (dd/mm/yyyy) "
                                        />
                                        <div id="dobInvalid" className={this.state.showDobError === true ? "invalid-feedback readMoreContentShow" : "invalid-feedback"}>Please Enter Your Date of Birth.</div> 
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group as={Col} lg="2" controlId="policyNo">
                                    <InputGroup>
                                        <Form.Control
                                            type="text"
                                            placeholder="Policy No"
                                            maxLength="50"
                                            ref={this.policyNo}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please Enter a Valid Policy Number.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group as={Col} lg="2" controlId="submitBtn">
                                    <Button type="submit" variant="primary">
                                        Apply
                                    </Button>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </div>
                    {isSearch === true ? (
                    <div className="statementSec">
                   {(policyList.length > 0 )? (
                    <div className="tablecont table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th style={{"width":"20%"}}>Name</th>
                              <th style={{"width":"20%"}}>Date of Birth</th>
                              <th style={{"width":"30%"}}>Address</th>
                              <th style={{"width":"10%"}}>PAN</th>
                              <th style={{"width":"10%"}}>Policy No</th>
                              <th style={{"width":"10%"}}>Reason</th>
                            </tr>
                          </thead>
                          <tbody>
                          {policyList.map((item, index) => (
                            <tr>
                              <td>{item.holder_name}</td>
                              <td>
                                  {moment(item.published_on).format("DD MMMM, YYYY")}
                            </td>
                              <td>{item.address}</td>
                              <td>{item.pan}</td>
                              <td>{item.policy_no}</td>
                              <td>{item.reason}</td>
                            </tr>
                          ))}
                          </tbody>
                        </table>
                      </div>
                      ):(
                        <p className="text-center">No record found!</p>
                      )}
                        
                    </div>
                    ):(null)}
                
                </div>
            </BaseComponent >
        );
    }
}

export default UnclaimedPolicyDetails;