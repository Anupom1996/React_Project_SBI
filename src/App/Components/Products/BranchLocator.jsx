import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Formik, Field, Form } from "formik";
import { withRouter } from "react-router-dom";
import Axios from "../../Services/Shared/Axios";
import AddressBox from "../../Components/Common/AddressBox/AddressBox";
import productData from "../../assets/productRequestCallbackData.json";

const initialValues = {
    stateVal: "",
    city: ""
}
class BranchLocator extends Component {


    state = {
        stateList: [],
        cityList: [],
        branchList: [],
        stateVal: "",
        city: "",
        isSearch: false,
        currentShowingBranchItem: 8,
        totalBranchItem: 0,
        totalPageCount: 0,
        currentPage: 1,
        startRange: 0,

    }

    getStateList = () => {
        Axios({
            method: "GET",
            url: "/states?_sort=name:asc"
        })
            .then(res => {
                this.setState({
                    stateList: res.data
                })
            })
            .catch(err => {
                console.log("Err");
            });
    }

    getCityList = (event) => {
        let id = event.target.value
        this.setState({ stateVal: id, city: "", cityList: [] });
        Axios({
            method: "GET",
            url: `/cities?_sort=name:asc&state=${id}`
        })
            .then(res => {
                this.setState({
                    cityList: res.data
                })
            })
            .catch(err => {
                console.log("Err");
            });
        //alert(document.getElementById('cityVal').selectedIndex);
        // document.getElementById('cityVal').selectedIndex = "0";
    }

    getTotalPageCount() {
        let city = this.state.city;
        let stateVal = this.state.stateVal;
        let queryStr = "";
        if (city > 0) {
            queryStr = "&city=" + city;
        }
        if (stateVal > 0) {
            queryStr = queryStr + "&state=" + stateVal;
        }

        Axios({
            method: "get",
            url: `/branches/count?` + queryStr
        })
            .then(res => {
                const pageCount = Math.ceil(
                    res.data / this.state.currentShowingBranchItem
                );
                this.setState({
                    totalBranchItem: res.data,
                    totalPageCount: pageCount,
                    currentPage: 1,
                    startRange: 0
                });
            })
            .catch(err => {
                console.log(err);
                console.log("|Blog Page Count Error|");
            });
    }

    getBranchList = (startRange) => {
        let city = this.state.city;
        let stateVal = this.state.stateVal;
        let queryStr = "";
        if (city > 0) {
            queryStr = "&city=" + city;
        }
        if (stateVal > 0) {
            queryStr = queryStr + "&state=" + stateVal;
        }
        this.setState({
            branchList: []
        });

        Axios({
            method: "get",
            url: `/branches?_limit=${this.state.currentShowingBranchItem}&_sort=created_at:desc&_start=${startRange}` + queryStr
        })
            .then(res => {
                this.setState({
                    branchList: res.data,
                    isSearch: true
                });
            })
            .catch(err => {
                console.log(err);
                console.log("|Branch Error|");
            });
    }

    handleArrowClick = isNext => {
        setTimeout(() => {
            if (isNext) {

                if (this.state.currentPage < this.state.totalPageCount) {
                    this.setState({
                        currentPage: this.state.currentPage + 1,
                        startRange: this.state.startRange + this.state.currentShowingBranchItem
                    });
                    console.log("startRange::" + this.state.startRange);
                    this.getBranchList(this.state.startRange);

                }
            } else {
                if (this.state.currentPage > 1) {
                    this.setState({
                        currentPage: this.state.currentPage - 1,
                        startRange: this.state.startRange - this.state.currentShowingBranchItem
                    });
                    this.getBranchList(this.state.startRange);

                }
            }
        }, 100);
    };

    componentDidMount() {
        this.getStateList();
        this.getTotalPageCount();
    }

    submitBranch = () => {
        //let city = values.city;
        //this.setState({ city: city });
        this.getBranchList(0);
        this.getTotalPageCount();

        //GTM Added
        let productSlug = this.props.location.pathname.split("/");
        let productKey = "";
        if (productSlug.length === 2) {
            productKey = productSlug[1];
            if (productKey === "group-health-insurance") {
                productKey = "group-health-insurance-C";
            }
        } else if (productSlug.length === 3) {
            productKey = productSlug[2];
        }
        let productName = "";
        if (productData) {
            let index = productData.findIndex(
                x => x.key === productKey
            );
            if (index > -1) {
                productName = productData[index].productName;
                let pagetype = productName.toLocaleLowerCase().replace(" ", "_");
                pagetype = pagetype + "_product_page";
                let gaUserId = document.cookie.match(/_ga=(.+?);/)[1].split('.').slice(-2).join(".");
                const data = {
                    'event': pagetype + '_6_location_filter_click',
                    'product_name': productName,
                    'pagetype': pagetype,
                    'client_id': gaUserId,
                    'timestamp': new Date().getTime()
                };
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push(data);
            }
        }
    }

    selectCity = (event) => {
        let cityVal = event.target.value
        this.setState({ city: cityVal });

    }

    render() {




        let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
        let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
        let Not_Found_Branch, Filter_Result, Select_City, Select_State
            ;


        if (lang_name === 'en') {
            Not_Found_Branch = sbiHomeData && sbiHomeData['PRODUCTS_NO_BRANCHES_FOUND'] && sbiHomeData['PRODUCTS_NO_BRANCHES_FOUND'].content_en;
            Filter_Result = sbiHomeData && sbiHomeData['PRODUCTS_FILTER_RESULT'] && sbiHomeData['PRODUCTS_FILTER_RESULT'].content_en;
            Select_City = sbiHomeData && sbiHomeData['PRODUCTS_SELECT_CITY'] && sbiHomeData['PRODUCTS_SELECT_CITY'].content_en;
            Select_State = sbiHomeData && sbiHomeData['PRODUCTS_SELECT_STATE'] && sbiHomeData['PRODUCTS_SELECT_STATE'].content_en;


        }
        else {
            Select_State = sbiHomeData && sbiHomeData['PRODUCTS_SELECT_STATE'] && sbiHomeData['PRODUCTS_SELECT_STATE'].content_hi;
            Select_City = sbiHomeData && sbiHomeData['PRODUCTS_SELECT_CITY'] && sbiHomeData['PRODUCTS_SELECT_CITY'].content_hi;
            Filter_Result = sbiHomeData && sbiHomeData['PRODUCTS_FILTER_RESULT'] && sbiHomeData['PRODUCTS_FILTER_RESULT'].content_hi;
            Not_Found_Branch = sbiHomeData && sbiHomeData['PRODUCTS_NO_BRANCHES_FOUND'] && sbiHomeData['PRODUCTS_NO_BRANCHES_FOUND'].content_hi;


        }
        const { stateList, cityList, stateVal, branchList, isSearch, totalBranchItem, city } = this.state;
        return (
            <>
                <Formik onSubmit={this.submitBranch} initialValues={initialValues} enableReinitialize={true}>
                    {({ values, errors, isValid, touched, setFieldTouched, isSubmitting, setFieldValue }) => {
                        return (
                            <div className="garage-form">
                                <Form id="branchLocation">
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <Field component="select" name="stateVal" className="form-control" onChange={this.getCityList} value={stateVal}>
                                                <option>{Select_State}</option>
                                                {stateList.map((item, i) => (

                                                    <option value={item.id} key={i}>{item.name}</option>

                                                ))}
                                            </Field>
                                        </div>

                                        <div className="form-group col">
                                            <Field component="select" name="city" className="form-control" id="cityVal" value={city} onChange={this.selectCity}>
                                                <option>{Select_City}</option>
                                                {cityList.map((item, i) => (

                                                    <option value={item.id} key={i}>{item.Name}</option>

                                                ))}
                                            </Field>
                                        </div>
                                        <div className="form-action">
                                            <Button variant="primary" type="submit">{Filter_Result}</Button>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        )
                    }}
                </Formik>
                <>
                    {isSearch ? (
                        <>
                            {totalBranchItem > 0 ? (
                                <>
                                    <Row >
                                        {branchList.map((item, index) => (
                                            <Col md="3" xs="12" key={index}>
                                                <AddressBox
                                                    addressBoxType="Branch"
                                                    addressName={(item.name && item.name != null) ? item.name : ""}
                                                    addressDetails={(item.address && item.address != null) ? item.address : ""}
                                                    addressId={(item.id && item.id != null) ? item.id : ""}
                                                    addressLat={(item.lat && item.lat != null) ? item.lat : ""}
                                                    addressLng={(item.long && item.long != null) ? item.long : ""}
                                                />
                                            </Col>
                                        ))}
                                    </Row>

                                    {this.state.totalPageCount > 1 ? (
                                        <div className="text-center prev-next-panel blog-carousel-control">
                                            <span className="active">{this.state.currentPage}</span> / {this.state.totalPageCount}
                                            <img className={
                                                this.state.currentPage === 1
                                                    ? "add-opticity pagePrev"
                                                    : "remove-opticity pagePrev"
                                            }
                                                onClick={this.handleArrowClick.bind(this, false)}
                                                src={require("../../assets/images/arrow-left.png")} alt="" />
                                            <img className={
                                                this.state.currentPage === this.state.totalPageCount
                                                    ? "add-opticity pageNext"
                                                    : "remove-opticity pageNext"
                                            }
                                                onClick={this.handleArrowClick.bind(this, true)}
                                                src={require("../../assets/images/arrow-right.png")} alt="" />
                                        </div>
                                    ) : (null)}

                                </>
                            ) : (
                                <div className="no_item">{Not_Found_Branch} </div>
                            )}
                        </>
                    ) : (null)}
                </>
            </>
        )
    }

}

export default withRouter(BranchLocator);;
