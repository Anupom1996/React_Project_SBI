import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { Nav, Button, Modal, Row, Col } from "react-bootstrap";
import { Form as Nform } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import DatePicker from "react-datepicker";
import { Formik, Field, Form } from "formik";

import plusSign from '../../../../assets/images/plus-sign-white.svg';
import * as AppConstant from '../../../AppConstant';
import AxiosTrans from "../../../../Services/Shared/AxiosTrans";
import swal from "sweetalert";

const HealthinitialValues = {
    gender: '',
    address: '',
    relation: '',
};

const HealthinitialPopupValues = {
    self: '',
    self_dob: '',
    spouse: '',
    child1: '',
    child1_dob: '',
    child1_gender: '',
    child2: '',
    child2_dob: '',
    child2_gender: '',
};

class HomeHealthTab extends Component {

    constructor(props) {
        super(props);

        // creating references for form element in search form
        this.health_product_list = React.createRef();
        this.policy_number = React.createRef();

        //this.clearErrMsg = this.clearErrMsg.bind(this);

        this.state = {
            show_popup: this.props.show_popup,
            startDate: new Date(),
            popup_errors: {},
            errors: {},
            health_policies: ['Health Insurance', 'Arogya Premier', 'Arogya Plus', 'Arogya Top up', 'Group Health Insurance', 'Critical Illness', 'Hospital Daily Cash', 'Loan Insurance'],
            //checked: false,
            relation: '',
            HealthinitialPopupValues: {
                self: 'Self',
                self_ischecked: false,
                self_dob: '',//new Date(),
                spouse: 'Spouse',
                spouse_ischecked: false,
                spouse_dob: '',
                child1: 'Child1',
                child1_ischecked: false,
                child1_dob: '',
                child1_gender: '',
                child2: 'Child2',
                child2_ischecked: false,
                child2_dob: '',
                child2_gender: '',
            },
        };
    }

    openPopup = (e) => {
        this.setState({ show_popup: true });
        this.setState({ popup_errors: {} });
        this.setState({ errors: {} });
        this.setState({
            HealthinitialPopupValues: {
                self: 'Self',
                self_ischecked: this.state.HealthinitialPopupValues.self_ischecked === true ? true : false,
                //self_dob: this.state.HealthinitialPopupValues.self_dob === '' ? (new Date()) : (this.state.HealthinitialPopupValues.self_dob),
                self_dob: this.state.HealthinitialPopupValues.self_dob === '' ? ('') : (this.state.HealthinitialPopupValues.self_dob),
                spouse: this.state.HealthinitialPopupValues.spouse,
                spouse_ischecked: this.state.HealthinitialPopupValues.spouse_ischecked,
                spouse_dob: (this.state.HealthinitialPopupValues.spouse_dob) ? this.state.HealthinitialPopupValues.spouse_dob : '', //new Date(),
                child1: this.state.HealthinitialPopupValues.child1,
                child1_ischecked: this.state.HealthinitialPopupValues.child1_ischecked,
                child1_dob: (this.state.HealthinitialPopupValues.child1_dob) ? this.state.HealthinitialPopupValues.child1_dob : '', //new Date(),
                child1_gender: this.state.HealthinitialPopupValues.child1_gender,
                child2: this.state.HealthinitialPopupValues.child2,
                child2_ischecked: this.state.HealthinitialPopupValues.child2_ischecked,
                child2_dob: (this.state.HealthinitialPopupValues.child2_dob) ? this.state.HealthinitialPopupValues.child2_dob : '', //new Date(),
                child2_gender: this.state.HealthinitialPopupValues.child2_gender,
            }
        });
    }

    handleClose = (e) => {
        this.setState({ show_popup: false });
        if (!this.validatepopupform()) {
            this.setState({ relation: '' });
        }
    }

    handleChange = (name, date) => {
        //let date = new Date(value);
        //console.log(name+'=='+date);
        this.setState({
            HealthinitialPopupValues: {
                self: this.state.HealthinitialPopupValues.self,
                self_ischecked: this.state.HealthinitialPopupValues.self_ischecked,
                self_dob: name === 'self_dob' ? date : (this.state.HealthinitialPopupValues.self_dob),
                spouse: this.state.HealthinitialPopupValues.spouse,
                spouse_ischecked: this.state.HealthinitialPopupValues.spouse_ischecked,
                spouse_dob: name === 'spouse_dob' ? date : (this.state.HealthinitialPopupValues.spouse_dob),
                child1: this.state.HealthinitialPopupValues.child1,
                child1_ischecked: this.state.HealthinitialPopupValues.child1_ischecked,
                child1_dob: name === 'child1_dob' ? date : (this.state.HealthinitialPopupValues.child1_dob),
                child1_gender: this.state.HealthinitialPopupValues.child1_gender,
                child2: this.state.HealthinitialPopupValues.child2,
                child2_ischecked: this.state.HealthinitialPopupValues.child2_ischecked,
                child2_dob: name === 'child2_dob' ? date : (this.state.HealthinitialPopupValues.child2_dob),
                child2_gender: this.state.HealthinitialPopupValues.child2_gender,
            }
        });
    };

    handleCheck = (e) => {
        //console.log(e.target.value);
        this.setState({
            HealthinitialPopupValues: {
                self: e.target.value === 'Self' ? ('Self') : (this.state.HealthinitialPopupValues.self),
                self_ischecked: e.target.value === 'Self' ? (e.target.checked) : (this.state.HealthinitialPopupValues.self_ischecked),
                self_dob: this.state.HealthinitialPopupValues.self_dob,
                spouse: e.target.value === 'Spouse' ? ('Spouse') : (this.state.HealthinitialPopupValues.spouse),
                spouse_ischecked: e.target.value === 'Spouse' ? (e.target.checked) : (this.state.HealthinitialPopupValues.spouse_ischecked),
                spouse_dob: this.state.HealthinitialPopupValues.spouse_dob,
                child1: e.target.value === 'Child1' ? ('Child1') : (this.state.HealthinitialPopupValues.child1),
                child1_ischecked: e.target.value === 'Child1' ? (e.target.checked) : (this.state.HealthinitialPopupValues.child1_ischecked),
                child1_dob: this.state.HealthinitialPopupValues.child1_dob,
                child1_gender: this.state.HealthinitialPopupValues.child1_gender,
                child2: e.target.value === 'Child2' ? ('Child2') : (this.state.HealthinitialPopupValues.child2),
                child2_ischecked: e.target.value === 'Child2' ? (e.target.checked) : (this.state.HealthinitialPopupValues.child2_ischecked),
                child2_dob: this.state.HealthinitialPopupValues.child2_dob,
                child2_gender: this.state.HealthinitialPopupValues.child2_gender,
            }
        });
        //console.log(this.state.HealthinitialPopupValues);

    }

    handleGenderChange = (name, e) => {
        this.setState({
            HealthinitialPopupValues: {
                self: this.state.HealthinitialPopupValues.self,
                self_ischecked: this.state.HealthinitialPopupValues.self_ischecked,
                self_dob: this.state.HealthinitialPopupValues.self_dob,
                spouse: this.state.HealthinitialPopupValues.spouse,
                spouse_ischecked: this.state.HealthinitialPopupValues.spouse_ischecked,
                spouse_dob: this.state.HealthinitialPopupValues.spouse_dob,
                child1: this.state.HealthinitialPopupValues.child1,
                child1_ischecked: this.state.HealthinitialPopupValues.child1_ischecked,
                child1_dob: this.state.HealthinitialPopupValues.child1_dob,
                child1_gender: name === 'child1_gender' ? e.target.value : (this.state.HealthinitialPopupValues.child1_gender),
                child2: this.state.HealthinitialPopupValues.child2,
                child2_ischecked: this.state.HealthinitialPopupValues.child2_ischecked,
                child2_dob: this.state.HealthinitialPopupValues.child2_dob,
                child2_gender: name === 'child2_gender' ? e.target.value : (this.state.HealthinitialPopupValues.child2_gender),
            }
        });
    };

    healthpopupsubmit = (popupvalues, action) => {
        let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
        let Self,Spouse,Child1,Child2;
        if (lang_name === 'en') {
            Self = 'Self';
            Spouse = 'Spouse';
            Child1 = 'Child 1';
            Child2 = 'Child 2';           
        }
        else {
            Self = 'स्वयं';
            Spouse = 'पत्नी';
            Child1 = 'बच्चा १';
            Child2 = 'बच्चा २';          
        }
        if (this.validatepopupform()) {
            let relation = '';
            let fields = this.state.HealthinitialPopupValues;
            //console.log(fields);
            if (fields.self_ischecked) {
                relation += Self+', ';
            }
            if (fields.spouse_ischecked) {
                relation += Spouse+', ';
            }
            if (fields.child1_ischecked) {
                relation += Child1+', ';
            }
            if (fields.child2_ischecked) {
                relation += Child2;
            }
            relation = relation.replace(/,\s*$/, "");
            //console.log(relation);
            this.setState({ relation: relation });
            HealthinitialValues.relation = relation;
            this.handleClose();
        } else {
            this.setState({ relation: '' });
            //console.log(this.state.popup_errors);
        }
    }

    validatepopupform = () => {
        let fields = this.state.HealthinitialPopupValues;
        let errors = {};
        let formIsValid = true;
        let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
        if (fields.self_ischecked) {
            if (fields.self_dob === '') {
                formIsValid = false;
                if (lang_name === 'en') {
                    errors['self_dob'] = "Select DOB";

                }
                else {
                    errors['self_dob'] = "DOB का चयन करें";

                }


            } else {
                if (!this.underAgeValidate(this.formatDate(fields.self_dob), 'adult')) {
                    formIsValid = false;
                    if (lang_name === 'en') {
                        errors['self_dob'] = "Age should be 18 years";

                    }
                    else {
                        errors['self_dob'] = "आयु 18 वर्ष होनी चाहिए";

                    }

                }
                if (!this.overAgeValidate(this.formatDate(fields.self_dob), 'adult')) {
                    formIsValid = false;
                    if (lang_name === 'en') {
                        errors['self_dob'] = "Age should be less than 65";

                    }
                    else {
                        errors['self_dob'] = "आयु 65 से कम होनी चाहिए";

                    }

                }
            }
        } else {
            //formIsValid = false;
            //errors['common'] = "Please Enter Self Details Before Proceed";
            let check_count = 0;
            if (fields.spouse_ischecked) { check_count++; }
            if (fields.child1_ischecked) { check_count++; }
            if (fields.child2_ischecked) { check_count++; }

            if (check_count > 1) {
                formIsValid = false;
                if (lang_name === 'en') {
                    errors['common'] = "Please Enter Self Details Before Proceed";

                }
                else {
                    errors['common'] = "कृपया आगे बढ़ने से पहले स्व विवरण दर्ज करें";

                }

            } else if (check_count === 1 && (fields.child1_ischecked || fields.child2_ischecked)) {
                formIsValid = false;

                if (lang_name === 'en') {
                    errors['common'] = "Please Enter Self Details Before Proceed";

                }
                else {
                    errors['common'] = "कृपया आगे बढ़ने से पहले स्व विवरण दर्ज करें";

                }
            }
        }
        if (fields.spouse_ischecked) {
            if (fields.spouse_dob === '') {
                formIsValid = false;
                if (lang_name === 'en') {
                    errors['spouse_dob'] = "Select DOB";
                }
                else {
                    errors['spouse_dob'] = "DOB का चयन करें";

                }

            } else {
                if (!this.underAgeValidate(this.formatDate(fields.spouse_dob), 'adult')) {
                    formIsValid = false;
                    if (lang_name === 'en') {
                        errors['spouse_dob'] = "Age should be 18 years";
                    }
                    else {
                        errors['spouse_dob'] = "आयु 18 वर्ष होनी चाहिए";

                    }

                }
                if (!this.overAgeValidate(this.formatDate(fields.spouse_dob), 'adult')) {
                    formIsValid = false;
                    if (lang_name === 'en') {
                        errors['spouse_dob'] = "Age should be less than 65";
                    }
                    else {
                        errors['spouse_dob'] = "आयु 65 से कम होनी चाहिए";
                    }

                }
            }
        }
        if (fields.child1_ischecked) {
            if (fields.child1_dob === '') {
                formIsValid = false;
                if (lang_name === 'en') {
                    errors['child1_dob'] = "Select DOB";
                }
                else {
                    errors['child1_dob'] = "DOB का चयन करें";
                }


            } else {
                if (!this.underAgeValidate(this.formatDate(fields.child1_dob), 'child')) {
                    formIsValid = false;
                    if (lang_name === 'en') {
                        errors['child1_dob'] = "Age should be 3 month+";
                    }
                    else {
                        errors['child1_dob'] = "आयु 3 महीने से अधिक होनी चाहिए";
                    }

                }
                if (fields.self_ischecked && !this.parentAgeValidate(this.formatDate(fields.self_dob), this.formatDate(fields.child1_dob))) {
                    formIsValid = false;
                    if (lang_name === 'en') {
                        errors['child1_dob'] = "Age should be less than Parents";
                    }
                    else {
                        errors['child1_dob'] = "उम्र माता-पिता से कम होनी चाहिए";
                    }

                }
                if (fields.spouse_ischecked && !this.parentAgeValidate(this.formatDate(fields.spouse_dob), this.formatDate(fields.child1_dob))) {
                    formIsValid = false;
                    if (lang_name === 'en') {
                        errors['child1_dob'] = "Age should be less than Parents";
                    }
                    else {
                        errors['child1_dob'] = "उम्र माता-पिता से कम होनी चाहिए";
                    }


                }
                if (!this.overAgeValidate(this.formatDate(fields.child1_dob), 'child')) {
                    formIsValid = false;
                    if (lang_name === 'en') {
                        errors['child1_dob'] = "Age should be less than 24 years";
                    }
                    else {
                        errors['child1_dob'] = "आयु 24 वर्ष से कम होनी चाहिए";
                    }

                }
            }
            if (fields.child1_gender === '') {
                formIsValid = false;
                if (lang_name === 'en') {
                    errors['child1_gender'] = "Select Gender";
                }
                else {
                    errors['child1_gender'] = "लिंग चुनें";
                }

            }
        }
        if (fields.child2_ischecked) {
            if (fields.child2_dob === '') {
                formIsValid = false;
                if (lang_name === 'en') {
                    errors['child2_dob'] = "Select DOB";
                }
                else {
                    errors['child2_dob'] = "DOB का चयन करें";
                }

            } else {
                if (!this.underAgeValidate(this.formatDate(fields.child2_dob), 'child')) {
                    formIsValid = false;
                    if (lang_name === 'en') {
                        errors['child2_dob'] = "Age should be 3 month+";
                    }
                    else {
                        errors['child2_dob'] = "आयु 3 महीने से अधिक होनी चाहिए";
                    }

                }
                if (fields.self_ischecked && !this.parentAgeValidate(this.formatDate(fields.self_dob), this.formatDate(fields.child2_dob))) {
                    formIsValid = false;
                    if (lang_name === 'en') {
                        errors['child2_dob'] = "Age should be less than Parents";
                    }
                    else {
                        errors['child2_dob'] = "उम्र माता-पिता से कम होनी चाहिए";
                    }

                }
                if (fields.spouse_ischecked && !this.parentAgeValidate(this.formatDate(fields.spouse_dob), this.formatDate(fields.child2_dob))) {
                    formIsValid = false;
                    if (lang_name === 'en') {
                        errors['child2_dob'] = "Age should be less than Parents";
                    }
                    else {
                        errors['child2_dob'] = "उम्र माता-पिता से कम होनी चाहिए";
                    }
                }
                if (!this.overAgeValidate(this.formatDate(fields.child2_dob), 'child')) {
                    formIsValid = false;
                    if (lang_name === 'en') {
                        errors['child2_dob'] = "Age should be less than 24 years";
                    }
                    else {
                        errors['child2_dob'] = "आयु 24 वर्ष से कम होनी चाहिए";
                    }

                }
            }
            if (fields.child2_gender === '') {
                formIsValid = false;
                if (lang_name === 'en') {
                    errors['child2_gender'] = "Select Gender";
                }
                else {
                    errors['child2_gender'] = "लिंग चुनें";
                }


            }
        }
        if (fields.self_ischecked === false && fields.spouse_ischecked === false && fields.child1_ischecked === false && fields.child2_ischecked === false) {
            formIsValid = false;
            if (lang_name === 'en') {
                errors['common'] = "Select Atleast An Applicant";
            }
            else {
                errors['common'] = "कम से कम एक आवेदक का चयन करें";
            }

        }
        //console.log(errors);
        this.setState({
            popup_errors: errors
        });
        return formIsValid;
    }

    handleSubmit = (values) => {
        let redirectUrl = AppConstant.TRANSACTION_API_BASE_URL;
        let fields = this.state.HealthinitialPopupValues;
        let errTxt = "";
        let formIsValid = true;
        var requestParam = {};
        let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
        //console.log(values);
        if (values.gender === null || values.gender === "") {
            formIsValid = false;
            if(lang_name==='en')
            {
                errTxt = "Gender is required";
            }
            else{
                errTxt = "लिंग आवश्यक है";
            }
           
        } else if (values.address === null || values.address === "") {
            formIsValid = false;
            if(lang_name==='en')
            {
                errTxt = "Location is required";
            }
            else{
                errTxt = "स्थान आवश्यक है";
            }
           
        } else if (this.state.relation === null || this.state.relation === "") {
            formIsValid = false;
            if(lang_name==='en')
            {
                errTxt = "Applicant is required";
            }
            else{
                errTxt = "आवेदक की आवश्यकता है";
            }
           
        } else {
            requestParam['product_type'] = "health";
            requestParam['gender'] = values.gender;
            requestParam['location'] = values.address;
            requestParam['family'] = {};
            // console.log(fields.self_ischecked);
            if (fields.self_ischecked) {
                requestParam['family'][0] = {
                    'type': 'Self',
                    'dob': this.formatDate(fields.self_dob),
                    'gender': values.gender,
                };
            }
            if (fields.spouse_ischecked) {
                requestParam['family'][1] = {
                    'type': 'Spouse',
                    'dob': this.formatDate(fields.spouse_dob),
                    'gender': values.gender === 'male' ? ('female') : ('male'),
                };
            }
            if (fields.child1_ischecked) {
                requestParam['family'][2] = {
                    'type': 'Child_1',
                    'dob': this.formatDate(fields.child1_dob),
                    'gender': fields.child1_gender,
                };
            }
            if (fields.child2_ischecked) {
                requestParam['family'][3] = {
                    'type': 'Child_2',
                    'dob': this.formatDate(fields.child2_dob),
                    'gender': fields.child2_gender,
                };
            }
            //console.log(requestParam);
            AxiosTrans({
                method: "POST",
                url: "/api/home",
                data: JSON.stringify(requestParam)
            })
                .then(res => {
                    //console.log(res.status);
                    if (res.data.token) {
                        redirectUrl = redirectUrl + "/healthinsurance/display/token/" + res.data.token;
                        //document.getElementById("motorForm").reset();
                        window.open(redirectUrl, "_blank");
                        //window.location.replace(redirectUrl)
                    }
                })
                .catch(err => {
                    let msgText = 'Something went wrong!';
                    if (typeof err.response.data.selected_type != 'undefined') {
                        msgText = err.response.data.selected_type[0];
                    } else if (typeof err.response.data.reg_no != 'undefined') {
                        msgText = err.response.data.reg_no[0];
                    } else if (typeof err.response.data.family != 'undefined') {
                        msgText = ""; //err.response.data.family[0].dob.dob;
                        let family_err = [];
                        for (var key in err.response.data.family) {
                            family_err.push(err.response.data.family[key]);
                        }
                        family_err.map(function (item, index) {
                            let relate = "";
                            switch (item.type[0]) {
                                case 'Child_1':
                                    relate = "First Child";
                                    break;
                                case 'Child_2':
                                    relate = "Second Child";
                                    break;
                                default:
                                    relate = item.type[0];
                            }
                            msgText += relate + " " + item.dob[0] + (index + 1 < family_err.length ? (", \n") : ("\n"));
                            return true;
                        });

                    }
                    swal({
                        text: msgText,
                        icon: "error"
                    }).then(() => {

                    });

                });
        }
        if (formIsValid === false) {
            swal({
                text: errTxt,
                icon: "error"
            }).then(() => {

            });
        }

    }

    formatDate = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }

    underAgeValidate = (birthdate, person) => {
        // it will accept two types of format yyyy-mm-dd and yyyy/mm/dd
        var optimizedBirthday = birthdate.replace(/-/g, "/");

        //set date based on birthday at 01:00:00 hours GMT+0100 (CET)
        var myBirthday = new Date(optimizedBirthday);

        // set current day on 01:00:00 hours GMT+0100 (CET)
        var currentDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
        //console.log((moment(currentDate).diff(moment(myBirthday), 'months', true)));
        // calculate age comparing current date and borthday
        var myAge = 0;
        //let diffTime = Math.abs(Date.now(currentDate) - myBirthday);
        //myAge = Math.round(Math.abs(diffTime / (1000 * 60 * 60 * 24)));
        if (person === "adult") {
            myAge = moment(moment(currentDate, "YYYY-MM-DD")).diff(moment(moment(myBirthday, "YYYY-MM-DD")), 'years', true);
        } else {
            myAge = moment(moment(currentDate, "YYYY-MM-DD")).diff(moment(moment(myBirthday, "YYYY-MM-DD")), 'months', true); //~~((Date.now(currentDate) - myBirthday) / (2592000000));
        }
        //console.log(myAge);

        if (person === "adult" && myAge < 18) { // In years
            return false;
        } else if (person === "child" && myAge < 3) { // In months
            return false;
        } else {
            return true;
        }
    }

    overAgeValidate = (birthdate, person) => {
        // it will accept two types of format yyyy-mm-dd and yyyy/mm/dd
        var optimizedBirthday = birthdate.replace(/-/g, "/");

        //set date based on birthday at 01:00:00 hours GMT+0100 (CET)
        var myBirthday = new Date(optimizedBirthday);

        // set current day on 01:00:00 hours GMT+0100 (CET)
        //var currentDate = new Date().toJSON().slice(0, 10) + ' 00:00:00';
        var currentDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
        // calculate age comparing current date and borthday
        var myAge = 0;
        myAge = moment(moment(currentDate, "YYYY-MM-DD")).diff(moment(moment(myBirthday, "YYYY-MM-DD")), 'years', true);
        //myAge = Math.round(Math.abs(diffTime / (1000 * 60 * 60 * 24)));
        //console.log(myAge);
        if (person === "adult" && myAge <= 65) {
            return true;
        } else if (person === "child" && myAge <= 23) {
            return true;
        } else {
            return false;
        }
    }

    parentAgeValidate = (parent_birthdate, child_birthdate) => {
        var parent_optimizedBirthday = parent_birthdate.replace(/-/g, "/");
        var parentBirthday = new Date(parent_optimizedBirthday);
        var child_optimizedBirthday = child_birthdate.replace(/-/g, "/");
        var childBirthday = new Date(child_optimizedBirthday);
        var Difference_In_Days = ~~((childBirthday.getTime() - parentBirthday.getTime()) / (1000 * 3600 * 24));
        //console.log(Difference_In_Days) ;
        if (Difference_In_Days > 0) {
            return true;
        } else {
            return false;
        }
    }

    handleHealthPolicyRenewal = () => {
        //console.log(this.health_product_list.current.value);
        //console.log(this.policy_number.current.value);
        let redirectUrl = AppConstant.TRANSACTION_API_BASE_URL;
        let errTxt = "";
        let formIsValid = true;
        var requestParam = {};
        let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
        if (this.health_product_list.current.value === null || this.health_product_list.current.value === "") {
            formIsValid = false;
            if(lang_name==='en')	
            {	
                errTxt = "Please Select A Policy";	
            }	
            else{	
                errTxt = "कृपया एक पॉलिसी चुनें";	
            }
            
        } else {
            requestParam['product_type'] = "healthrenewal";
            requestParam['productCode'] = this.health_product_list.current.value;
            requestParam['policy_number'] = this.policy_number.current.value;
            //console.log(requestParam);
            AxiosTrans({
                method: "POST",
                url: "/api/home",
                data: JSON.stringify(requestParam)
            })
                .then(res => {
                    //console.log(res.status);
                    if (res.data.token) {
                        redirectUrl = redirectUrl + "/healthrenewal/display/token/" + res.data.token;
                        document.getElementById("HealthRenewForm").reset();
                        window.open(redirectUrl, "_blank");
                        //window.location.replace(redirectUrl)
                    }
                })
                .catch(err => {
                    let msgText = 'Something went wrong!';
                    if (typeof err.response.data.selected_type != 'undefined') {
                        msgText = err.response.data.selected_type[0];
                    } else if (typeof err.response.data.reg_no != 'undefined') {
                        msgText = err.response.data.reg_no[0];
                    } else if (typeof err.response.data.policy_number != 'undefined') {
                        msgText = err.response.data.policy_number[0];
                    }
                    document.getElementById("HealthRenewForm").reset();
                    swal({
                        text: msgText,
                        icon: "error"
                    }).then(() => {

                    });

                });
        }
        if (formIsValid === false) {
            swal({
                text: errTxt,
                icon: "error"
            }).then(() => {

            });
        }

        this.gtmClickHandlerDatalayer(
            "portal_display_page_8_form_interaction",
            "portal_display_page",
            "Health Product",
            "form_submit"
            )
    }

    handleLength = (e) => {
        //console.log(e.target.value);
        let pnum = e.target.value;
        pnum = pnum.replace(/\s/g, '');
        if (pnum !== "") {
            if (pnum.indexOf('-') > -1) {
                if (pnum.length < 19) {
                    let _str = '';
                    for (let i = pnum.length; i < 19; i++) {
                        _str += "0";
                    }
                    e.target.value = _str + pnum;
                }
            } else {
                if (pnum.length < 16) {
                    let _str = '';
                    for (let i = pnum.length; i < 16; i++) {
                        _str += "0";
                    }
                    e.target.value = _str + pnum;
                }
            }
        } else {
            let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
            if (lang_name === 'en') {
                e.target.placeholder = "Policy Number";
            }
            else
            {
                e.target.placeholder = "पॉलिसी संख्या";
            }
            
        }

    }

    componentDidUpdate() {

    }

    gtmClickHandler = (cta) => {
        window.dataLayer = window.dataLayer || [];
        const data = {
            'event': "homepage_2_cta_click",
            'pagetype': "Home Page",
            'cta': cta
        };
        window.dataLayer.push(data);
    }
    componentDidMount() {
        let phrases = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
        this.setState({
            sbiHomeData: phrases
        });
    }
    
    gtmClickHandlerDatalayer = (eventName, pageType,productName,clickText) => {
        const data = {
          event: eventName,
          pagetype: pageType,
          product_name:productName,
          field_name: clickText,
        };
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(data);
      };

    render() {
        const { sbiHomeData } = this.state
        let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
        let buy, renew, claim, Iam, residing, gender, male, female, selcity, Ahmedabad, Bangalore, Chennai,
            Delhi, Hyderabad, Kolkata, Mumbai, RestIndia, insurance_for, Individual_Personal_Accident,
            Hospital_Daily_Cash, Critical_Illness, Arogya_Top_up, Arogya_Plus, Arogya_Premier, Select_policy,
            Group_Health_Insurance, Health_Insurance_Policy, like_to_renew, My_policy, Policy_Number, Select_Members,
            Add_Family_Members, Self, Spouse, Child_1, Child_2, Select, Go,Hun, Select_DOB



            ;
        if (lang_name === 'en') {
            buy = sbiHomeData && sbiHomeData['HOME_TAB_HEALTH_BUY'] && sbiHomeData['HOME_TAB_HEALTH_BUY'].content_en;
            renew = sbiHomeData && sbiHomeData['HOME_TAB_HELTH_RENEW'] && sbiHomeData['HOME_TAB_HELTH_RENEW'].content_en;
            claim = sbiHomeData && sbiHomeData['HOME_TAB_HEALTH_CLAIM'] && sbiHomeData['HOME_TAB_HEALTH_CLAIM'].content_en;

            Iam = sbiHomeData && sbiHomeData['HOME_BODY_SEARCH_BAR_I_AM'] && sbiHomeData['HOME_BODY_SEARCH_BAR_I_AM'].content_en;
            residing = sbiHomeData && sbiHomeData['HOME_BODY_SEARCH_BAR_RESIDING'] && sbiHomeData['HOME_BODY_SEARCH_BAR_RESIDING'].content_en;
            gender = sbiHomeData && sbiHomeData['HOME_BODY_SEARCH_BAR_GENDER'] && sbiHomeData['HOME_BODY_SEARCH_BAR_GENDER'].content_en;
            male = sbiHomeData && sbiHomeData['HOME_BODY_SEARCH_BAR_GENDER_MALE'] && sbiHomeData['HOME_BODY_SEARCH_BAR_GENDER_MALE'].content_en;
            female = sbiHomeData && sbiHomeData['HOME_BODY_SEARCH_BAR_GENDER_FEMALE'] && sbiHomeData['HOME_BODY_SEARCH_BAR_GENDER_FEMALE'].content_en;
            selcity = sbiHomeData && sbiHomeData['HOME_BODY_SEARCH_BAR_CITY'] && sbiHomeData['HOME_BODY_SEARCH_BAR_CITY'].content_en;
            Ahmedabad = sbiHomeData && sbiHomeData['HOME_BODY_SEARCH_BAR_CITY_AHMEDABAD'] && sbiHomeData['HOME_BODY_SEARCH_BAR_CITY_AHMEDABAD'].content_en;
            Bangalore = sbiHomeData && sbiHomeData['HOME_BODY_SEARCH_BAR_CITY_BANGALORE'] && sbiHomeData['HOME_BODY_SEARCH_BAR_CITY_BANGALORE'].content_en;
            Chennai = sbiHomeData && sbiHomeData['HOME_BODY_SEARCH_BAR_CITY_CHENNAI'] && sbiHomeData['HOME_BODY_SEARCH_BAR_CITY_CHENNAI'].content_en;
            Delhi = sbiHomeData && sbiHomeData['HOME_BODY_SEARCH_BAR_CITY_DELHI'] && sbiHomeData['HOME_BODY_SEARCH_BAR_CITY_DELHI'].content_en;
            Hyderabad = sbiHomeData && sbiHomeData['HOME_BODY_SEARCH_BAR_CITY_HYDERABAD'] && sbiHomeData['HOME_BODY_SEARCH_BAR_CITY_HYDERABAD'].content_en;
            Kolkata = sbiHomeData && sbiHomeData['HOME_BODY_SEARCH_BAR_KOLKATA'] && sbiHomeData['HOME_BODY_SEARCH_BAR_KOLKATA'].content_en;
            Mumbai = sbiHomeData && sbiHomeData['HOME_BODY_SEARCH_BAR_CITY_MUMBAI'] && sbiHomeData['HOME_BODY_SEARCH_BAR_CITY_MUMBAI'].content_en;
            RestIndia = sbiHomeData && sbiHomeData['HOME_BODY_SEARCH_BAR_CITY_REST_OF_INDIA'] && sbiHomeData['HOME_BODY_SEARCH_BAR_CITY_REST_OF_INDIA'].content_en;
            insurance_for = sbiHomeData && sbiHomeData['HOME_BODY_SEARCH_BAR_BUY'] && sbiHomeData['HOME_BODY_SEARCH_BAR_BUY'].content_en;
            Individual_Personal_Accident = sbiHomeData && sbiHomeData['SIDE_MENU_PERSONAL_ACCIDENT_INDIVIDUAL'] && sbiHomeData['SIDE_MENU_PERSONAL_ACCIDENT_INDIVIDUAL'].content_en;
            Hospital_Daily_Cash = sbiHomeData && sbiHomeData['SIDE_MENU_HELTH_HOSPITAL_DAILY_CASH'] && sbiHomeData['SIDE_MENU_HELTH_HOSPITAL_DAILY_CASH'].content_en;
            Critical_Illness = sbiHomeData && sbiHomeData['RENEW_POLICY_BLOG_HP_CRITICAL_ILLNESS'] && sbiHomeData['RENEW_POLICY_BLOG_HP_CRITICAL_ILLNESS'].content_en;

            Arogya_Top_up = sbiHomeData && sbiHomeData['SIDE_MENU_HELTH_AROGYA_TOP_UP'] && sbiHomeData['SIDE_MENU_HELTH_AROGYA_TOP_UP'].content_en;
            Arogya_Plus = sbiHomeData && sbiHomeData['SIDE_MENU_HELTH_AROGYA_PLUS'] && sbiHomeData['SIDE_MENU_HELTH_AROGYA_PLUS'].content_en;
            Arogya_Premier = sbiHomeData && sbiHomeData['SIDE_MENU_HELTH_AROGYA_PREMIER'] && sbiHomeData['SIDE_MENU_HELTH_AROGYA_PREMIER'].content_en;
            Select_policy = sbiHomeData && sbiHomeData['RENEW_POLICY_BLOG_MP_SELECT_POLICY'] && sbiHomeData['RENEW_POLICY_BLOG_MP_SELECT_POLICY'].content_en;
            Group_Health_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_HEALTH_GROUP_POLICY'] && sbiHomeData['PRODUCTS_RETAIL_HEALTH_GROUP_POLICY'].content_en;
            Health_Insurance_Policy = sbiHomeData && sbiHomeData['HOME_SELECT_HEALTH_RETAIL'] && sbiHomeData['HOME_SELECT_HEALTH_RETAIL'].content_en;
            like_to_renew = sbiHomeData && sbiHomeData['HOME_SELECT_I_WOULD_LIKE'] && sbiHomeData['HOME_SELECT_I_WOULD_LIKE'].content_en;
            My_policy = sbiHomeData && sbiHomeData['HOME_SELECT_POLICY_NUMBER'] && sbiHomeData['HOME_SELECT_POLICY_NUMBER'].content_en;
            Policy_Number = sbiHomeData && sbiHomeData['HOME_SELECT_POLICYNUMBER'] && sbiHomeData['HOME_SELECT_POLICYNUMBER'].content_en;
            Select_Members = sbiHomeData && sbiHomeData['HOME_SELECT_MEMBERS'] && sbiHomeData['HOME_SELECT_MEMBERS'].content_en;
            Add_Family_Members = sbiHomeData && sbiHomeData['PRODUCTS_FORM_ADD_FAMILY_MEMBER'] && sbiHomeData['PRODUCTS_FORM_ADD_FAMILY_MEMBER'].content_en;
            Self = sbiHomeData && sbiHomeData['PRODUCTS_FORM_SELF'] && sbiHomeData['PRODUCTS_FORM_SELF'].content_en;
            Spouse = sbiHomeData && sbiHomeData['PRODUCTS_FORM_SPOUSE'] && sbiHomeData['PRODUCTS_FORM_SPOUSE'].content_en;
            Child_1 = sbiHomeData && sbiHomeData['PRODUCTS_FORM_CHILD1'] && sbiHomeData['PRODUCTS_FORM_CHILD1'].content_en;
            Child_2 = sbiHomeData && sbiHomeData['PRODUCTS_FORM_CHILD2'] && sbiHomeData['PRODUCTS_FORM_CHILD2'].content_en;
            Select = sbiHomeData && sbiHomeData['PRODUCTS_FORM_SELECT'] && sbiHomeData['PRODUCTS_FORM_SELECT'].content_en;
            Go = sbiHomeData && sbiHomeData['PRODUCTS_FORM_GO'] && sbiHomeData['PRODUCTS_FORM_GO'].content_en;
            Select_DOB = sbiHomeData && sbiHomeData['PRODUCTS_FORM_SELECT_DOB'] && sbiHomeData['PRODUCTS_FORM_SELECT_DOB'].content_en;
            Hun = sbiHomeData && sbiHomeData['PRODUCT_FORM_HUN'] && sbiHomeData['PRODUCT_FORM_HUN'].content_en;

        }
        else {
            buy = sbiHomeData && sbiHomeData['HOME_TAB_HEALTH_BUY'] && sbiHomeData['HOME_TAB_HEALTH_BUY'].content_hi;
            renew = sbiHomeData && sbiHomeData['HOME_TAB_HELTH_RENEW'] && sbiHomeData['HOME_TAB_HELTH_RENEW'].content_hi;
            claim = sbiHomeData && sbiHomeData['HOME_TAB_HEALTH_CLAIM'] && sbiHomeData['HOME_TAB_HEALTH_CLAIM'].content_hi;

            Iam = sbiHomeData && sbiHomeData['HOME_BODY_SEARCH_BAR_I_AM'] && sbiHomeData['HOME_BODY_SEARCH_BAR_I_AM'].content_hi;
            residing = sbiHomeData && sbiHomeData['HOME_BODY_SEARCH_BAR_RESIDING'] && sbiHomeData['HOME_BODY_SEARCH_BAR_RESIDING'].content_hi;
            gender = sbiHomeData && sbiHomeData['HOME_BODY_SEARCH_BAR_GENDER'] && sbiHomeData['HOME_BODY_SEARCH_BAR_GENDER'].content_hi;
            male = sbiHomeData && sbiHomeData['HOME_BODY_SEARCH_BAR_GENDER_MALE'] && sbiHomeData['HOME_BODY_SEARCH_BAR_GENDER_MALE'].content_hi;
            female = sbiHomeData && sbiHomeData['HOME_BODY_SEARCH_BAR_GENDER_FEMALE'] && sbiHomeData['HOME_BODY_SEARCH_BAR_GENDER_FEMALE'].content_hi;
            selcity = sbiHomeData && sbiHomeData['HOME_BODY_SEARCH_BAR_CITY'] && sbiHomeData['HOME_BODY_SEARCH_BAR_CITY'].content_hi;
            Ahmedabad = sbiHomeData && sbiHomeData['HOME_BODY_SEARCH_BAR_CITY_AHMEDABAD'] && sbiHomeData['HOME_BODY_SEARCH_BAR_CITY_AHMEDABAD'].content_hi;
            Bangalore = sbiHomeData && sbiHomeData['HOME_BODY_SEARCH_BAR_CITY_BANGALORE'] && sbiHomeData['HOME_BODY_SEARCH_BAR_CITY_BANGALORE'].content_hi;
            Chennai = sbiHomeData && sbiHomeData['HOME_BODY_SEARCH_BAR_CITY_CHENNAI'] && sbiHomeData['HOME_BODY_SEARCH_BAR_CITY_CHENNAI'].content_hi;
            Delhi = sbiHomeData && sbiHomeData['HOME_BODY_SEARCH_BAR_CITY_DELHI'] && sbiHomeData['HOME_BODY_SEARCH_BAR_CITY_DELHI'].content_hi;
            Hyderabad = sbiHomeData && sbiHomeData['HOME_BODY_SEARCH_BAR_CITY_HYDERABAD'] && sbiHomeData['HOME_BODY_SEARCH_BAR_CITY_HYDERABAD'].content_hi;
            Kolkata = sbiHomeData && sbiHomeData['HOME_BODY_SEARCH_BAR_KOLKATA'] && sbiHomeData['HOME_BODY_SEARCH_BAR_KOLKATA'].content_hi;
            Mumbai = sbiHomeData && sbiHomeData['HOME_BODY_SEARCH_BAR_CITY_MUMBAI'] && sbiHomeData['HOME_BODY_SEARCH_BAR_CITY_MUMBAI'].content_hi;
            RestIndia = sbiHomeData && sbiHomeData['HOME_BODY_SEARCH_BAR_CITY_REST_OF_INDIA'] && sbiHomeData['HOME_BODY_SEARCH_BAR_CITY_REST_OF_INDIA'].content_hi;
            insurance_for = sbiHomeData && sbiHomeData['HOME_BODY_SEARCH_BAR_BUY'] && sbiHomeData['HOME_BODY_SEARCH_BAR_BUY'].content_hi;
            Individual_Personal_Accident = sbiHomeData && sbiHomeData['SIDE_MENU_PERSONAL_ACCIDENT_INDIVIDUAL'] &&
                sbiHomeData['SIDE_MENU_PERSONAL_ACCIDENT_INDIVIDUAL'].content_hi;

            Hospital_Daily_Cash = sbiHomeData && sbiHomeData['SIDE_MENU_HELTH_HOSPITAL_DAILY_CASH'] &&
                sbiHomeData['SIDE_MENU_HELTH_HOSPITAL_DAILY_CASH'].content_hi;

            Critical_Illness = sbiHomeData && sbiHomeData['RENEW_POLICY_BLOG_HP_CRITICAL_ILLNESS'] &&
                sbiHomeData['RENEW_POLICY_BLOG_HP_CRITICAL_ILLNESS'].content_hi;
            Arogya_Top_up = sbiHomeData && sbiHomeData['SIDE_MENU_HELTH_AROGYA_TOP_UP'] &&
                sbiHomeData['SIDE_MENU_HELTH_AROGYA_TOP_UP'].content_hi;
            Arogya_Plus = sbiHomeData && sbiHomeData['SIDE_MENU_HELTH_AROGYA_PLUS'] &&
                sbiHomeData['SIDE_MENU_HELTH_AROGYA_PLUS'].content_hi;
            Arogya_Premier = sbiHomeData && sbiHomeData['SIDE_MENU_HELTH_AROGYA_PREMIER'] &&
                sbiHomeData['SIDE_MENU_HELTH_AROGYA_PREMIER'].content_hi;
            Select_policy = sbiHomeData && sbiHomeData['RENEW_POLICY_BLOG_MP_SELECT_POLICY'] &&
                sbiHomeData['RENEW_POLICY_BLOG_MP_SELECT_POLICY'].content_hi;

            Group_Health_Insurance = sbiHomeData && sbiHomeData['PRODUCTS_RETAIL_HEALTH_GROUP_POLICY'] && sbiHomeData['PRODUCTS_RETAIL_HEALTH_GROUP_POLICY'].content_hi;
            Health_Insurance_Policy = sbiHomeData && sbiHomeData['HOME_SELECT_HEALTH_RETAIL'] && sbiHomeData['HOME_SELECT_HEALTH_RETAIL'].content_hi;
            like_to_renew = sbiHomeData && sbiHomeData['HOME_SELECT_I_WOULD_LIKE'] && sbiHomeData['HOME_SELECT_I_WOULD_LIKE'].content_hi;
            My_policy = sbiHomeData && sbiHomeData['HOME_SELECT_POLICY_NUMBER'] && sbiHomeData['HOME_SELECT_POLICY_NUMBER'].content_hi;
            Policy_Number = sbiHomeData && sbiHomeData['HOME_SELECT_POLICYNUMBER'] && sbiHomeData['HOME_SELECT_POLICYNUMBER'].content_hi;
            Select_Members = sbiHomeData && sbiHomeData['HOME_SELECT_MEMBERS'] && sbiHomeData['HOME_SELECT_MEMBERS'].content_hi;
            Add_Family_Members = sbiHomeData && sbiHomeData['PRODUCTS_FORM_ADD_FAMILY_MEMBER'] && sbiHomeData['PRODUCTS_FORM_ADD_FAMILY_MEMBER'].content_hi;
            Self = sbiHomeData && sbiHomeData['PRODUCTS_FORM_SELF'] && sbiHomeData['PRODUCTS_FORM_SELF'].content_hi;
            Spouse = sbiHomeData && sbiHomeData['PRODUCTS_FORM_SPOUSE'] && sbiHomeData['PRODUCTS_FORM_SPOUSE'].content_hi;
            Child_1 = sbiHomeData && sbiHomeData['PRODUCTS_FORM_CHILD1'] && sbiHomeData['PRODUCTS_FORM_CHILD1'].content_hi;
            Child_2 = sbiHomeData && sbiHomeData['PRODUCTS_FORM_CHILD2'] && sbiHomeData['PRODUCTS_FORM_CHILD2'].content_hi;
            Select = sbiHomeData && sbiHomeData['PRODUCTS_FORM_SELECT'] && sbiHomeData['PRODUCTS_FORM_SELECT'].content_hi;
            Go = sbiHomeData && sbiHomeData['PRODUCTS_FORM_GO'] && sbiHomeData['PRODUCTS_FORM_GO'].content_hi;
            Select_DOB = sbiHomeData && sbiHomeData['PRODUCTS_FORM_SELECT_DOB'] && sbiHomeData['PRODUCTS_FORM_SELECT_DOB'].content_hi;
            Hun = sbiHomeData && sbiHomeData['PRODUCT_FORM_HUN'] && sbiHomeData['PRODUCT_FORM_HUN'].content_hi;

        }
        
        
        //console.log(this.state.HealthinitialPopupValues);

        return (
            <>
                <Tab.Pane eventKey="tabmain_2">
                    <Tab.Container defaultActiveKey="subtab_1b">
                        <Nav className="tabsub" variant="pills" >
                            <Nav.Item onClick={() => this.gtmClickHandler("Health Buy")}>
                                <Nav.Link eventKey="subtab_1b">{buy ? buy : 'buy'}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item onClick={() => this.gtmClickHandler("Health Renew")}>
                                <Nav.Link eventKey="subtab_2b">{renew ? renew : 'renew'}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item onClick={() => this.gtmClickHandler("Health Claim")}>
                                {/* <Nav.Link eventKey="subtab_3b">Claim</Nav.Link> */}
                                <Link to={{
                                    pathname: "/claim/claims-intimation",
                                    state: { product_type: "health" }
                                }} className="nav-link">{claim ? claim : 'claim'}</Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="subtab_1b">
                                <div className="getquote">
                                    <Formik onSubmit={this.handleSubmit} initialValues={HealthinitialValues}>
                                        {({ values, errors, isValid, touched, setFieldTouched, isSubmitting, setFieldValue }) => {
                                            return (
                                                <Form className="form-row" autoComplete="off">
                                                    <div className="parant-form-cover">
                                                        <div className="d-flex form-group">
                                                            <label>{Iam ? Iam : 'I am a'}</label>
                                                   <Field component="select" name="gender" className="form-control" onClick={() =>
                                                            this.gtmClickHandlerDatalayer(
                                                            "portal_display_page_8_form_interaction",
                                                            "portal_display_page",
                                                            "Health Product",
                                                            "gender"
                                                            )
                                                        }>
                                                                <option>{gender ? gender : 'gender'}</option>
                                                                <option value="male">{male ? male : 'male'}</option>
                                                                <option value="female">{female ? female : 'female'}</option>
                                                            </Field>
                                                            <label> { Hun }{'\u00A0'} </label>
                                                        </div>
                                                        <div className="d-flex form-group">
                                                            <label className="form-label">{residing ? residing : 'residing at'} </label>
                                                        <Field component="select" name="address" className="form-control"  onClick={() =>
                                                            this.gtmClickHandlerDatalayer(
                                                            "portal_display_page_8_form_interaction",
                                                            "portal_display_page",
                                                            "Health Product",
                                                            "city"
                                                            )
                                                        }>
                                                            <option value="">{selcity?selcity:'(Select City)'}</option>
                                                                <option value="6">{Ahmedabad ? Ahmedabad : 'Ahmedabad'}</option>
                                                                <option value="5">{Bangalore ? Bangalore : 'Bangalore'}</option>
                                                                <option value="3">{Chennai ? Chennai : 'Chennai'}</option>
                                                                <option value="2">{Delhi ? Delhi : 'Delhi'}</option>
                                                                <option value="7">{Hyderabad ? Hyderabad : 'Hyderabad'}</option>
                                                                <option value="4">{Kolkata ? Kolkata : 'kolkata'}</option>
                                                                <option value="1">{Mumbai ? Mumbai : 'Mumbai'}</option>
                                                                <option value="8">{RestIndia ? RestIndia : 'RestIndia'}</option>
                                                            </Field>
                                                            {/* <Field className="form-control"
                                                            type="text"finsurance_for
                                                            name="address"
                                                            placeholder="Enter location"
                                                        /> */}
                                                        </div>
                                                        <div className="d-flex form-group">
                                                            <label className="form-label">{insurance_for ? insurance_for : 'buying insurance for'}</label>
                                                            <Field className="form-control"
                                                                type="text"
                                                                name="relation"
                                                                placeholder={Select_Members?Select_Members:'Select Members'}
                                                                readOnly="readOnly"
                                                                value={this.state.relation}
                                                                onClick={e => this.openPopup(e)}
                                                            />
                                                        </div>
                                                        <Link className="cwvnPlusLink" to={'#'} onClick={e => this.openPopup(e)} ><img alt="" src={plusSign} /></Link>
                                                    </div>
                                                    <Button type="submit" name="get_quote" variant="warning" className="btn-go" onClick={() =>
                                                            this.gtmClickHandlerDatalayer(
                                                            "portal_display_page_8_form_interaction",
                                                            "portal_display_page",
                                                            "Health Product",
                                                            "form_submit"
                                                            )
                                                        }>
                                                        {Go ? Go : 'Go'}
                                                    </Button>
                                                </Form>
                                            )
                                        }}
                                    </Formik>
                                </div>
                            </Tab.Pane>

                            <Tab.Pane eventKey="subtab_2b">
                                <div className="getquote">
                                    <Nform className="form-row" id="HealthRenewForm">
                                        <div className="parant-form-cover">
                                            <Nform.Group className="d-flex form-group">
                                                <Nform.Label>{like_to_renew?like_to_renew:'I would like to renew'}</Nform.Label>
                                            <Nform.Control as="select" ref={this.health_product_list} onClick={() =>
                                                            this.gtmClickHandlerDatalayer(
                                                            "portal_display_page_8_form_interaction",
                                                            "portal_display_page",
                                                            "Health Product",
                                                            "policy product"
                                                            )
                                                        }>
                                                    <option value="">{Select_policy ? Select_policy : 'Select Policy'}</option>
                                                    <option value="APL">{Arogya_Plus ? Arogya_Plus : 'Arogya_Plus'}</option>
                                                    <option value="AP">{Arogya_Premier ? Arogya_Premier : 'Arogya_Premier'}</option>
                                                    <option value="AT">{Arogya_Top_up ? Arogya_Top_up : 'Arogya_Top_up'}</option>
                                                    <option value="CI">{Critical_Illness ? Critical_Illness : 'Critical_Illness'}</option>
                                                    <option value="SH">{Group_Health_Insurance?Group_Health_Insurance:'Group Health Insurance - SBI	'}</option>
                                                    <option value="RH">{Health_Insurance_Policy?Health_Insurance_Policy:'Health Insurance Policy Retail'}</option>
                                                    <option value="HDC">{Hospital_Daily_Cash ? Hospital_Daily_Cash : 'Hospital_Daily_Cash'}</option>
                                                    <option value="IPA">{Individual_Personal_Accident ? Individual_Personal_Accident : 'Individual_Personal_Accident'}</option>
                                                </Nform.Control>
                                            </Nform.Group>
                                            <Nform.Group className="d-flex form-group">
                                                <Nform.Label>{My_policy?My_policy:'My policy number is'}</Nform.Label>
                                                <Nform.Control type="text"
                                                    placeholder={Policy_Number?Policy_Number:'Policy Number'}
                                                    ref={this.policy_number}
                                                    onBlur={this.handleLength.bind()}
                                                    onFocus={(e) => e.target.placeholder = ""}
                                                onClick={() =>
                                                    this.gtmClickHandlerDatalayer(
                                                    "portal_display_page_8_form_interaction",
                                                    "portal_display_page",
                                                    "Health Product",
                                                    "policy number"
                                                    )
                                                }/>
                                            </Nform.Group>
                                        </div>
                                        <Button variant="warning" onClick={this.handleHealthPolicyRenewal} className="btn-go">
                                            {Go?Go:'Go'}
                                        </Button>
                                    </Nform>
                                </div>
                            </Tab.Pane>

                            <Tab.Pane eventKey="subtab_3b">
                                {/* <div className="getquote">
                                    <Nform className="form-row" id="HealthRenewForm">
                                        <Nform.Group className="d-flex form-group">
                                            <Nform.Label>I would like to renew</Nform.Label>
                                            <Nform.Control as="select">
                                                <option>Select policy</option>
                                                {this.state.health_policies.map((item, index) => (
                                                    <option key={index} value={item}>
                                                        {item}
                                                    </option>
                                                ))}
                                            </Nform.Control>
                                        </Nform.Group>
                                        <Nform.Group className="d-flex form-group">
                                            <Nform.Label>My policy number is</Nform.Label>
                                            <Nform.Control type="text" placeholder="Policy Number" />
                                        </Nform.Group>
                                        <Nform.Group className="d-flex form-group">
                                            <Button variant="warning">
                                                Get QUOTE
                                            </Button>
                                        </Nform.Group>
                                    </Nform>
                                </div> */}
                            </Tab.Pane>

                        </Tab.Content>
                    </Tab.Container>
                </Tab.Pane>
                {/* Motal for Health Panel */}
                <Modal centered show={this.state.show_popup} onHide={this.handleClose} backdrop="static" size="lg">
                    <Formik onSubmit={this.healthpopupsubmit} initialValues={HealthinitialPopupValues} >
                        {({ popupvalues, errors, isValid, touched, setFieldTouched, isSubmitting, setFieldValue }) => {
                            return (
                                <>
                                    <Form autoComplete="off">
                                        <Modal.Header closeButton>
                                            <h5>{Add_Family_Members?Add_Family_Members:'Add Family Members to be Insured'}</h5>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="errorMsg common">{this.state.popup_errors.common}</div>

                                            <div className="form-group row" as={Row}>

                                                <Col sm="3">
                                                    <div className="form-check"><Field type="checkbox" className="form-check-input" value="Self" id="self" name="self" onChange={this.handleCheck} checked={this.state.HealthinitialPopupValues.self_ischecked} />
                                                        <label className="form-check-label"> {Self?Self:'Self'} </label></div>
                                                </Col>
                                                <Col sm="6" className={this.state.HealthinitialPopupValues.self_ischecked ? ("") : ("readlessContentHide")}>
                                                    {/* <Form.Control plaintext placeholder="Date of birth" /> */}
                                                    <DatePicker
                                                        selected={this.state.HealthinitialPopupValues.self_dob}
                                                        onChange={(value) => this.handleChange('self_dob', value)}
                                                        dateFormat="dd-MM-yyy"
                                                        showMonthDropdown
                                                        showYearDropdown
                                                        dropdownMode="select"
                                                        maxDate={new Date()}
                                                        name="self_dob"
                                                        onKeyDown={e => e.preventDefault()}
                                                        placeholderText={Select_DOB?Select_DOB:'Select DOB'}
                                                        popperPlacement="top-end"
                                                    />
                                                    <div className="errorMsg">{this.state.popup_errors.self_dob}</div>
                                                </Col>
                                                <Col sm="3"></Col>
                                            </div>

                                            <div className="form-group row" as={Row}>
                                                <Col sm="3">
                                                    <div className="form-check"><Field type="checkbox" className="form-check-input" value="Spouse" name="spouse" label="Spouse" onChange={this.handleCheck} checked={this.state.HealthinitialPopupValues.spouse_ischecked} />
                                                        <label className="form-check-label"> {Spouse?Spouse:'Spouse'} </label></div>
                                                </Col>
                                                <Col sm="6" className={this.state.HealthinitialPopupValues.spouse_ischecked ? ("") : ("readlessContentHide")}>
                                                    <DatePicker
                                                        selected={this.state.HealthinitialPopupValues.spouse_dob}
                                                        onChange={(value) => this.handleChange('spouse_dob', value)}
                                                        dateFormat="dd-MM-yyy"
                                                        showMonthDropdown
                                                        showYearDropdown
                                                        dropdownMode="select"
                                                        maxDate={new Date()}
                                                        name="spouse_dob"
                                                        onKeyDown={e => e.preventDefault()}
                                                        placeholderText={Select_DOB?Select_DOB:'Select DOB'}
                                                        popperPlacement="top-end"
                                                    />
                                                    <div className="errorMsg">{this.state.popup_errors.spouse_dob}</div>
                                                </Col>
                                                <Col sm="3" className={this.state.HealthinitialPopupValues.spouse_ischecked ? ("") : ("readlessContentHide")}></Col>
                                            </div>

                                            <div className="form-group row">
                                                <Col sm="3">
                                                    <div className="form-check"><Field type="checkbox" className="form-check-input" value="Child1" name="child1" label="Child 1" onChange={this.handleCheck} checked={this.state.HealthinitialPopupValues.child1_ischecked} />
                                                        <label className="form-check-label"> {Child_1?Child_1:'Child 1'} </label></div>
                                                </Col>
                                                <Col sm="6" className={this.state.HealthinitialPopupValues.child1_ischecked ? ("") : ("readlessContentHide")}>
                                                    <DatePicker
                                                        selected={this.state.HealthinitialPopupValues.child1_dob}
                                                        onChange={(value) => this.handleChange('child1_dob', value)}
                                                        dateFormat="dd-MM-yyy"
                                                        showMonthDropdown
                                                        showYearDropdown
                                                        dropdownMode="select"
                                                        maxDate={new Date()}
                                                        name="child1_dob"
                                                        onKeyDown={e => e.preventDefault()}
                                                        placeholderText={Select_DOB?Select_DOB:'Select DOB'}
                                                        popperPlacement="top-end"
                                                        autoComplete="off"
                                                    />
                                                    <div className="errorMsg child1_dob_err">{this.state.popup_errors.child1_dob}</div>
                                                </Col>
                                                <Col sm="3" className={this.state.HealthinitialPopupValues.child1_ischecked ? ("") : ("readlessContentHide")}>
                                                    <Field className="form-control" component="select" name="child1_gender" onChange={(e) => this.handleGenderChange('child1_gender', e)} value={this.state.HealthinitialPopupValues.child1_gender} >
                                                        <option value="">{gender ? gender : 'gender'}</option>
                                                        <option value="male">{male ? male : 'male'}</option>
                                                        <option value="female">{female ? female : 'female'}</option>
                                                    </Field>
                                                    <div className="errorMsg">{this.state.popup_errors.child1_gender}</div>
                                                </Col>
                                            </div>

                                            <div className="form-group row">
                                                <Col sm="3">
                                                    <div className="form-check"><Field type="checkbox" className="form-check-input" value="Child2" name="child2" label="Child 2" onChange={this.handleCheck} checked={this.state.HealthinitialPopupValues.child2_ischecked} />
                                                        <label className="form-check-label">{Child_2?Child_2:'Child 2'} </label></div>
                                                </Col>
                                                <Col sm="6" className={this.state.HealthinitialPopupValues.child2_ischecked ? ("") : ("readlessContentHide")}>
                                                    <DatePicker
                                                        selected={this.state.HealthinitialPopupValues.child2_dob}
                                                        onChange={(value) => this.handleChange('child2_dob', value)}
                                                        dateFormat="dd-MM-yyy"
                                                        showMonthDropdown
                                                        showYearDropdown
                                                        dropdownMode="select"
                                                        maxDate={new Date()}
                                                        name="child2_dob"
                                                        onKeyDown={e => e.preventDefault()}
                                                        placeholderText={Select_DOB?Select_DOB:'Select DOB'}
                                                        popperPlacement="top-end"
                                                    />
                                                    <div className="errorMsg">{this.state.popup_errors.child2_dob}</div>
                                                </Col>
                                                <Col sm="3" className={this.state.HealthinitialPopupValues.child2_ischecked ? ("") : ("readlessContentHide")}>
                                                    <Field className="form-control" component="select" name="child2_gender" onChange={(value) => this.handleGenderChange('child2_gender', value)} value={this.state.HealthinitialPopupValues.child2_gender} >
                                                        <option value="">{gender ? gender : 'gender'}</option>
                                                        <option value="male">{male ? male : 'male'}</option>
                                                        <option value="female">{female ? female : 'female'}</option>
                                                    </Field>
                                                    <div className="errorMsg">{this.state.popup_errors.child2_gender}</div>
                                                </Col>
                                            </div>

                                        </Modal.Body>

                                        <Modal.Footer>
                                            <Button variant="primary" type="submit"  onClick={() =>
                                                            this.gtmClickHandlerDatalayer(
                                                            "portal_display_page_8_form_interaction",
                                                            "portal_display_page",
                                                            "Health Product",
                                                            "select"
                                                            )
                                                        }> {Select?Select:'Select'} </Button>
                                        </Modal.Footer>
                                    </Form>
                                </>
                            )
                        }}
                    </Formik>
                </Modal>
            </>
        )
    }
}

export default HomeHealthTab;