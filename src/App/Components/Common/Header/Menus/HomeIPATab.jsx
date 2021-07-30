import React, { Component } from 'react';
import moment from "moment";
import { Link } from "react-router-dom";
import { Nav, Button, Modal, Form, Row, Col } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import DatePicker from "react-datepicker";

import plusSign from '../../../../assets/images/plus-sign-white.svg';
import * as AppConstant from '../../../AppConstant';
import AxiosTrans from "../../../../Services/Shared/AxiosTrans";
import Axios from "../../../../Services/Shared/Axios";
import swal from "sweetalert";

class HomeIPATab extends Component {
    constructor(props) {
        super(props);
        //this.primary_gender = React.createRef();
        this.relation = React.createRef();
        //this.proposer_occupation = React.createRef();
        //this.travel_type = React.createRef();
        //this.travel_duration = React.createRef();
        //this.travel_startDate = React.createRef();
        //this.travel_endDate = React.createRef();
        this.self = React.createRef();
        this.spouse = React.createRef();

        this.state = {
            show_popup: this.props.show_popup,
            numbers_checkbosx:[],
            occupatioList:[],
            proposer_occupation:'',
            proposer_income:'',
            //travel_startDate: '', //new Date(),
            //travel_endDate: '', //new Date(),
            travel_minDate: '',
            popup_errors: {},
            errors: {},
            relation: '',
            self_ischecked: false,
            self_dob: '', //new Date(),
            self_gender:'',
            self_travel_type: '',
            spouse_ischecked: false,
            spouse_dob: '',
            child1_ischecked: false,
            child1_dob: '',
            child1_gender: '',
            child2_ischecked: false,
            child2_dob: '',
            child2_gender: '',
            father_ischecked: false,
            father_dob: '',
            mother_ischecked: false,
            mother_dob: '',
            fatherinlaw_ischecked: false,
            fatherinlaw_dob: '',
            motherinlaw_ischecked: false,
            motherinlaw_dob: '',
            all_from_india:'Y',
        }
    }

    handleTravelTypeChange = e => {
        //console.log(e.target.value);
        let start_date = (this.state.travel_startDate !== '') ? this.state.travel_startDate : new Date();
        let end_date = (this.state.travel_endDate !== '') ? this.state.travel_endDate : new Date();
        let min_end_date = new Date(start_date);
        if (e.target.value === 'multiple') {
            end_date.setDate(start_date.getDate() + 364);
        } else if (e.target.value === 'single') {
            end_date.setDate(start_date.getDate() + 1);
            // end_date.setMonth(start_date.getMonth());
            // end_date.setFullYear(start_date.getFullYear());
            // if (start_date.getDate() === 31 && start_date.getMonth() === 11) {
            //     end_date.setDate(start_date.getDate() + 1);
            //     end_date.setMonth(start_date.getMonth() + 1);
            //     end_date.setFullYear(start_date.getFullYear() + 1);
            // } else {
            //     end_date.setDate(start_date.getDate() + 1);
            //     end_date.setMonth(start_date.getMonth());
            //     end_date.setFullYear(start_date.getFullYear());
            // }  
        } else {
            if (start_date.getDate() === 31 && start_date.getMonth() === 11) {
                end_date.setDate(start_date.getDate() + 1);
                end_date.setMonth(start_date.getMonth() + 1);
                end_date.setFullYear(start_date.getFullYear() + 1);
            } else {
                end_date.setDate(start_date.getDate() + 1);
                end_date.setMonth(start_date.getMonth());
                end_date.setFullYear(start_date.getFullYear());
            }  
        }
        this.setState({ self_travel_type: e.target.value });
        if (this.state.travel_startDate === '') {
            this.setState({ travel_startDate: start_date });
        }
        this.setState({ travel_endDate: end_date });
        min_end_date.setDate(start_date.getDate() + 1);
        this.setState({ travel_minDate: min_end_date });
    }

    handleTravelPolicy = e => {
        let redirectUrl = AppConstant.TRANSACTION_API_BASE_URL;
        let fields = this.state;
        let errTxt = "";
        let formIsValid = true;
        var requestParam = {};
      if (fields.self_gender.value === null || fields.self_gender.value === "") {
            formIsValid = false;
            errTxt = "Self Is Required";
        } else {
            requestParam['product_type'] = "IPA";
            requestParam['gender'] = fields.self_gender;
            requestParam['proposer_occupation']=fields.proposer_occupation;
            requestParam['proposer_income']=fields.proposer_income;
            //requestParam['all_from_india'] = fields.all_from_india;
            //requestParam['travelling_country'] = this.location.current.value;
            //requestParam['trip_type'] = this.travel_type.current.value;
            //requestParam['duration'] = this.travel_type.current.value === 'multiple' ? (this.travel_duration.current.value) : (this.diffdate(this.formatDate(fields.travel_startDate), this.formatDate(fields.travel_endDate)));
            //requestParam['from_date'] = this.formatDate(fields.travel_startDate);
            //requestParam['to_date'] = this.formatDate(fields.travel_endDate);
            requestParam['family'] = {};
            if (fields.self_ischecked) {
                requestParam['family'][0] = {
                    'type': 'Self',
                    'dob': this.formatDate(fields.self_dob),
                    'gender': fields.self_gender,
                };
            }
            if (fields.spouse_ischecked) {
                requestParam['family'][1] = {
                    'type': 'Spouse',
                    'dob': this.formatDate(fields.spouse_dob),
                    'gender': fields.self_gender === 'male' ? ('female') : ('male'),
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
            if (fields.father_ischecked) {
                requestParam['family'][4] = {
                    'type': 'Father',
                    'dob': this.formatDate(fields.father_dob),
                    'gender': 'male',
                };
            }
            if (fields.mother_ischecked) {
                requestParam['family'][5] = {
                    'type': 'Mother',
                    'dob': this.formatDate(fields.mother_dob),
                    'gender': 'female',
                };
            }
            if (fields.fatherinlaw_ischecked) {
                requestParam['family'][6] = {
                    'type': 'Father_in_law',
                    'dob': this.formatDate(fields.fatherinlaw_dob),
                    'gender': 'male',
                };
            }
            if (fields.motherinlaw_ischecked) {
                requestParam['family'][7] = {
                    'type': 'Mother_in_law',
                    'dob': this.formatDate(fields.motherinlaw_dob),
                    'gender': 'female',
                };
            }
            AxiosTrans({
                method: "POST",
                url: "/api/home",
                data: JSON.stringify(requestParam)
            })
                .then(res => {
                    if (res.data.token) {
                        redirectUrl = redirectUrl + "/ipa/display/key/"+res.data.key+"/token/" + res.data.token;
                        //document.getElementById("motorForm").reset();
                        window.open(redirectUrl, "_blank");
                        //window.location.replace(redirectUrl)
                    }
                })
                .catch(err => {
                    let msgText = 'Something went wrong!';
                    //console.log(err.response)
                    if (typeof err.response != 'undefined' && typeof err.response.data.selected_type != 'undefined') {
                        msgText = err.response.data.selected_type[0];
                    } else if (typeof err.response != 'undefined' && typeof err.response.data.family != 'undefined') {
                        msgText = ""; //err.response.data.family[0].dob.dob;
                        let family_err = [];
                        for (var key in err.response.data.family) {
                            family_err.push(err.response.data.family[key]);
                        }
                        family_err.map(function (item, index) {
                            let relate = "";
                            switch (item.type[0]) {
                                case 'Child_1':
                                    relate = "Fisrt Child";
                                    break;
                                case 'Child_2':
                                    relate = "Second Child";
                                    break;
                                case 'Father_in_law':
                                    relate = "Father in Law";
                                    break;
                                case 'Mother_in_law':
                                    relate = "Mother in Law";
                                    break;
                                default:
                                    relate = item.type[0];
                            }
                            msgText += relate + " " + item.dob[0] + (index + 1 < family_err.length ? (", \n") : ("\n"));
                            return true;
                        });
                    } else if (typeof err.response != 'undefined' && typeof err.response.data.to_date != 'undefined') {
                        msgText = err.response.data.to_date[0];
                        msgText = "";
                        let date_err = [];
                        for (let key in err.response.data.to_date) {
                            date_err.push(err.response.data.to_date[key]);
                        }
                        date_err.map(function (item, index) {
                            msgText += (index + 1 < date_err.length ? (", \n") : ("\n"));
                            return true;
                        });
                    } else if (typeof err.response != 'undefined' && typeof err.response.data.from_date != 'undefined') {
                        msgText = err.response.data.from_date[0];
                    } else if (typeof err.response != 'undefined' && typeof err.response.data.family != 'undefined') {
                        msgText = err.response.data.family[0];
                    }
                    swal({
                        text: msgText,
                        icon: "error"
                    }).then(() => {

                    });

                });
        }
        //console.log(requestParam);
        if (formIsValid === false) {
            swal({
                text: errTxt,
                icon: "error"
            }).then(() => {

            });
        }
    }

    handleTravelSubmit = (event) => {
        event.preventDefault();

    }

    handleDateChange = (name, date) => {
        if (name === 'travel_startDate') {
            this.setState({ travel_startDate: date });
            //let start_date = date;
            let end_date = new Date();
            end_date.setDate(date.getDate() + 1);
            this.setState({ travel_endDate: end_date });
            this.setState({ travel_minDate: end_date });
            let start_date = date;
            let min_end_date = new Date(start_date);
            if (this.state.self_travel_type === 'multiple') {
                end_date.setDate(start_date.getDate() + 364);
            } else if (this.state.self_travel_type === 'single') {
                if (start_date.getDate() === 31 && start_date.getMonth() === 11) {
                    end_date.setDate(start_date.getDate() + 1);
                    end_date.setMonth(start_date.getMonth() + 1);
                    end_date.setFullYear(start_date.getFullYear()+1);
                } else {
                    end_date.setDate(start_date.getDate() + 1);
                    end_date.setMonth(start_date.getMonth());
                    end_date.setFullYear(start_date.getFullYear());
                }   
            } else {
                if (start_date.getDate() === 31 && start_date.getMonth() === 11) {
                    end_date.setDate(start_date.getDate() + 1);
                    end_date.setMonth(start_date.getMonth() + 1);
                    end_date.setFullYear(start_date.getFullYear() + 1);
                } else {
                    end_date.setDate(start_date.getDate() + 1);
                    end_date.setMonth(start_date.getMonth());
                    end_date.setFullYear(start_date.getFullYear());
                }   
            }
            this.setState({ travel_endDate: end_date });
            min_end_date.setDate(start_date.getDate() + 1);
            this.setState({ travel_minDate: min_end_date });
            //console.log(end_date);
            //this.setState({ self_travel_type: e.target.value });
            //this.setState({ travel_endDate: end_date });
        }
        if (name === 'travel_endDate') {
            this.setState({ travel_endDate: date });
        }
        if (name === 'self_dob') {
            this.setState({ self_dob: date });
        }
        if (name === 'spouse_dob') {
            this.setState({ spouse_dob: date });
        }
        if (name === 'child1_dob') {
            this.setState({ child1_dob: date });
        }
        if (name === 'child2_dob') {
            this.setState({ child2_dob: date });
        }
        if (name === 'child1_dob') {
            this.setState({ child1_dob: date });
        }
        if (name === 'father_dob') {
            this.setState({ father_dob: date });
        }
        if (name === 'mother_dob') {
            this.setState({ mother_dob: date });
        }
        if (name === 'fatherinlaw_dob') {
            this.setState({ fatherinlaw_dob: date });
        }
        if (name === 'motherinlaw_dob') {
            this.setState({ motherinlaw_dob: date });
        }
        //console.log(name);
        //console.log(date);
    }

    openPopup = (e) => {
        this.setState({ show_popup: true });
    }

    handleClose = (e) => {
        this.setState({ show_popup: false });
        if (!this.validatepopupform()) {
            this.setState({ relation: '' });
        }
    }

    handleCheck = (e) => {

        //if(this.state.numbers_checkbosx.length<4 || e.target.checked===false)
        //{
            if(e.target.checked)
            {
                this.setState({numbers_checkbosx: this.state.numbers_checkbosx.concat(e.target.value)});
            }else{
                let filteredItems = this.state.numbers_checkbosx.filter(item => item !== e.target.value);
               this.setState({numbers_checkbosx:filteredItems});
            }
            //this.setState({numbers_checkbosx: this.state.numbers_checkbosx.concat(e.target.value)});
        this.setState({
            self_ischecked: e.target.value === 'Self' ? (e.target.checked) : (this.state.self_ischecked),
            spouse_ischecked: e.target.value === 'Spouse' ? (e.target.checked) : (this.state.spouse_ischecked),
            child1_ischecked: e.target.value === 'Child1' ? (e.target.checked) : (this.state.child1_ischecked),
            child2_ischecked: e.target.value === 'Child2' ? (e.target.checked) : (this.state.child2_ischecked),
            father_ischecked: e.target.value === 'Father' ? (e.target.checked) : (this.state.father_ischecked),
            mother_ischecked: e.target.value === 'Mother' ? (e.target.checked) : (this.state.mother_ischecked),
            fatherinlaw_ischecked: e.target.value === 'Father in law' ? (e.target.checked) : (this.state.fatherinlaw_ischecked),
            motherinlaw_ischecked: e.target.value === 'Mother in law' ? (e.target.checked) : (this.state.motherinlaw_ischecked),
            // self_dob: this.state.self_dob,
            // spouse_dob: this.state.spouse_dob,
            // child1_dob: this.state.child1_dob,
            // child2_dob: this.state.child2_dob,   
            // father_dob: this.state.father_dob,
            // mother_dob: this.state.mother_dob,
            // fatherinlaw_dob: this.state.fatherinlaw_dob,
            // motherinlaw_dob: this.state.motherinlaw_dob,
            // child1_gender: this.state.child1_gender,
            // child2_gender: this.state.child2_gender,
        });
   // }

    }

    handleGenderChange = (name, e) => {
        this.setState({
            self_gender: name === 'self_gender' ? e.target.value : (this.state.self_gender),
            child1_gender: name === 'child1_gender' ? e.target.value : (this.state.child1_gender),
            child2_gender: name === 'child2_gender' ? e.target.value : (this.state.child2_gender),
            all_from_india: name === 'all_from_india' ? e.target.value : (this.state.all_from_india),
            proposer_occupation:name==='proposer_occupation'?e.target.value:(this.state.proposer_occupation),
            proposer_income:name==='proposer_income'?e.target.value:(this.state.proposer_income),
        });
    };

    handleTravelPopup = e => {
        //console.log(this.self.current.value);
        //console.log(this.spouse.current.value);
        //console.log(this.state);
        if (this.validatepopupform()) {
            let relation = '';
            let fields = this.state;
            if (fields.self_ischecked) {
                relation += 'Self, ';
            }
            if (fields.spouse_ischecked) {
                relation += 'Spouse, ';
            }
            if (fields.child1_ischecked) {
                relation += 'Child 1, ';
            }
            if (fields.child2_ischecked) {
                relation += 'Child 2';
            }
            if (fields.father_ischecked) {
                relation += 'Father';
            }
            if (fields.mother_ischecked) {
                relation += 'Mother';
            }
            if (fields.fatherinlaw_ischecked) {
                relation += 'Father in law';
            }
            if (fields.motherinlaw_ischecked) {
                relation += 'Mother in law';
            }
            relation = relation.replace(/,\s*$/, "");
            this.setState({ relation: relation });
            this.handleClose();
        } else {
            this.setState({ relation: '' });
        }
    }

    handleHelthPopupSubmit = e => {
        e.preventDefault();
    }

    validatepopupform = () => {
        let fields = this.state;
        let errors = {};
        let formIsValid = true;

        if (fields.proposer_occupation === '') {
            formIsValid = false;
            errors['proposer_occupation'] = "Select proposer occupation";
        }
        if (fields.proposer_income === '') {
            formIsValid = false;
            errors['proposer_income'] = "Enter proposer income";
        }
        if (fields.self_ischecked) {
            if (fields.self_dob === '') {
                formIsValid = false;
                errors['self_dob'] = "Select DOB";
            } else {
                if (!this.underAgeValidate(this.formatDate(fields.self_dob), 'adult')) {
                    formIsValid = false;
                    errors['self_dob'] = "Age should be 18 years";
                }
                if (!this.overAgeValidate(this.formatDate(fields.self_dob))) {
                    formIsValid = false;
                    errors['self_dob'] = "Age should be less than 70";
                }
            }
            if (fields.self_gender === '') {
                formIsValid = false;
                errors['self_gender'] = "Select Gender";
            }
        } else {
            //formIsValid = false;
            //errors['common'] = "Please Enter Self Details Before Proceed";
            let check_count = 0;
            if (fields.spouse_ischecked) { check_count ++; }
            if (fields.child1_ischecked) { check_count++; }
            if (fields.child2_ischecked) { check_count++; }
            if (fields.father_ischecked) { check_count++; }
            if (fields.mother_ischecked) { check_count++; }
            if (fields.fatherinlaw_ischecked) { check_count++; }
            if (fields.motherinlaw_ischecked) { check_count++; }

            if (check_count > 1) {
                formIsValid = false;
                errors['common'] = "Please Enter Self Details Before Proceed";
            } else if (check_count === 1 && (fields.child1_ischecked || fields.child2_ischecked)) {
                formIsValid = false;
                errors['common'] = "Please Enter Self Details Before Proceed";
            }
            
        }
        if (fields.spouse_ischecked) {
            if (fields.spouse_dob === '') {
                formIsValid = false;
                errors['spouse_dob'] = "Select DOB";
            } else {
                if (!this.underAgeValidate(this.formatDate(fields.spouse_dob), 'adult')) {
                    formIsValid = false;
                    errors['spouse_dob'] = "Age should be 18 years";
                }
                if (!this.overAgeValidate(this.formatDate(fields.spouse_dob))) {
                    formIsValid = false;
                    errors['spouse_dob'] = "Age should be less than 70";
                }
            }
        }
        if (fields.child1_ischecked) {
            if (fields.child1_dob === '') {
                formIsValid = false;
                errors['child1_dob'] = "Select DOB";
            } else {
                if (!this.underAgeValidate(this.formatDate(fields.child1_dob), 'child')) {
                    formIsValid = false;
                    errors['child1_dob'] = "Age should be 6 month+";
                }
                if (!this.overAgeValidate(this.formatDate(fields.child1_dob))) {
                    formIsValid = false;
                    errors['child1_dob'] = "Age should be less than 70";
                }
                if (fields.self_ischecked && !this.parentAgeValidate(this.formatDate(fields.self_dob), this.formatDate(fields.child1_dob))) {
                    formIsValid = false;
                    errors['child1_dob'] = "Age should be less than Parents";
                }
                if (fields.spouse_ischecked && !this.parentAgeValidate(this.formatDate(fields.spouse_dob), this.formatDate(fields.child1_dob))) {
                    formIsValid = false;
                    errors['child1_dob'] = "Age should be less than Parents";
                }
            }
            if (fields.child1_gender === '') {
                formIsValid = false;
                errors['child1_gender'] = "Select Gender";
            }
        }
        if (fields.child2_ischecked) {
            if (fields.child2_dob === '') {
                formIsValid = false;
                errors['child2_dob'] = "Select DOB";
            } else {
                if (!this.underAgeValidate(this.formatDate(fields.child2_dob), 'child')) {
                    formIsValid = false;
                    errors['child2_dob'] = "Age should be 6 month+";
                }
                if (!this.overAgeValidate(this.formatDate(fields.child2_dob))) {
                    formIsValid = false;
                    errors['child2_dob'] = "Age should be less than 70";
                }
                if (fields.self_ischecked && !this.parentAgeValidate(this.formatDate(fields.self_dob), this.formatDate(fields.child2_dob))) {
                    formIsValid = false;
                    errors['child2_dob'] = "Age should be less than Parents";
                }
                if (fields.spouse_ischecked && !this.parentAgeValidate(this.formatDate(fields.spouse_dob), this.formatDate(fields.child2_dob))) {
                    formIsValid = false;
                    errors['child2_dob'] = "Age should be less than Parents";
                }
            }
            if (fields.child2_gender === '') {
                formIsValid = false;
                errors['child2_gender'] = "Select Gender";
            }
        }
        if (fields.father_ischecked) {
            if (fields.father_dob === '') {
                formIsValid = false;
                errors['father_dob'] = "Select DOB";
            } else {
                if (!this.underAgeValidate(this.formatDate(fields.father_dob), 'adult')) {
                    formIsValid = false;
                    errors['father_dob'] = "Age should be 18 years";
                }
                if (!this.overAgeValidate(this.formatDate(fields.father_dob))) {
                    formIsValid = false;
                    errors['father_dob'] = "Age should be less than 70";
                }
            }
        }
        if (fields.mother_ischecked) {
            if (fields.mother_dob === '') {
                formIsValid = false;
                errors['mother_dob'] = "Select DOB";
            } else {
                if (!this.underAgeValidate(this.formatDate(fields.mother_dob), 'adult')) {
                    formIsValid = false;
                    errors['mother_dob'] = "Age should be 18 years";
                }
                if (!this.overAgeValidate(this.formatDate(fields.mother_dob))) {
                    formIsValid = false;
                    errors['mother_dob'] = "Age should be less than 70";
                }
            }
        }
        if (fields.fatherinlaw_ischecked) {
            if (fields.fatherinlaw_dob === '') {
                formIsValid = false;
                errors['fatherinlaw_dob'] = "Select DOB";
            } else {
                if (!this.underAgeValidate(this.formatDate(fields.fatherinlaw_dob), 'adult')) {
                    formIsValid = false;
                    errors['fatherinlaw_dob'] = "Age should be 18 years";
                }
                if (!this.overAgeValidate(this.formatDate(fields.fatherinlaw_dob))) {
                    formIsValid = false;
                    errors['fatherinlaw_dob'] = "Age should be less than 70";
                }
            }
        }
        if (fields.motherinlaw_ischecked) {
            if (fields.motherinlaw_dob === '') {
                formIsValid = false;
                errors['motherinlaw_dob'] = "Select DOB";
            } else {
                if (!this.underAgeValidate(this.formatDate(fields.motherinlaw_dob), 'adult')) {
                    formIsValid = false;
                    errors['motherinlaw_dob'] = "Age should be 18 years";
                }
                if (!this.overAgeValidate(this.formatDate(fields.motherinlaw_dob))) {
                    formIsValid = false;
                    errors['motherinlaw_dob'] = "Age should be less than 70";
                }
            }
        }
        if (fields.motherinlaw_ischecked) {
            if (fields.motherinlaw_dob === '') {
                formIsValid = false;
                errors['motherinlaw_dob'] = "Select DOB";
            } else {
                if (!this.underAgeValidate(this.formatDate(fields.motherinlaw_dob), 'adult')) {
                    formIsValid = false;
                    errors['motherinlaw_dob'] = "Age should be 18 years";
                }
                if (!this.overAgeValidate(this.formatDate(fields.motherinlaw_dob))) {
                    formIsValid = false;
                    errors['motherinlaw_dob'] = "Age should be less than 70";
                }
            }
        }
        

        if (fields.self_ischecked === false && fields.spouse_ischecked === false && fields.child1_ischecked === false && fields.child2_ischecked === false && fields.father_ischecked === false && fields.mother_ischecked === false && fields.fatherinlaw_ischecked === false && fields.motherinlaw_ischecked === false) {
            formIsValid = false;
            errors['common'] = "Select Atleast An Applicant";
        }
       // console.log(errors);
        this.setState({
            popup_errors: errors
        });
        return formIsValid;
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

        // calculate age comparing current date and borthday
        var myAge = 0;//~~((Date.now(currentDate) - myBirthday) / (31557600000));
        //let diffTime = Math.abs(Date.now(currentDate) - myBirthday);
        //myAge = Math.round(Math.abs(diffTime / (1000 * 60 * 60 * 24)));
        if (person === "adult") {
            myAge = moment(moment(currentDate, "YYYY-MM-DD")).diff(moment(moment(myBirthday, "YYYY-MM-DD")), 'years', true);
        } else {
            myAge = moment(moment(currentDate, "YYYY-MM-DD")).diff(moment(moment(myBirthday, "YYYY-MM-DD")), 'months', true); //~~((Date.now(currentDate) - myBirthday) / (2592000000));
        }
        if (person === "adult" && myAge < 18) {
            return false;
        } else if (person === "child" && myAge < 6) {
            return false;
        } else {
            return true;
        }
    }

    overAgeValidate = (birthdate) => {
        // it will accept two types of format yyyy-mm-dd and yyyy/mm/dd
        var optimizedBirthday = birthdate.replace(/-/g, "/");

        //set date based on birthday at 01:00:00 hours GMT+0100 (CET)
        var myBirthday = new Date(optimizedBirthday);

        // set current day on 01:00:00 hours GMT+0100 (CET)
        var currentDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/');

        // calculate age comparing current date and borthday
        var myAge = 0; //~~((Date.now(currentDate) - myBirthday) / (31557600000));
        //let diffTime = Math.abs(Date.now(currentDate) - myBirthday);
        //myAge = Math.round(Math.abs(diffTime / (1000 * 60 * 60 * 24)));
        myAge = moment(moment(currentDate, "YYYY-MM-DD")).diff(moment(moment(myBirthday, "YYYY-MM-DD")), 'years', true);
        //console.log(myAge);
        // 70 yrs validation
        if (myAge < 70) {
            return true;
        } else {
            return false;
        }
    }

    diffdate = (from, to) => {
        let date1 = new Date(from);
        let date2 = new Date(to);
        let diffTime = Math.abs(date1 - date2);
        let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
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

    gtmClickHandler = (cta) => {
        window.dataLayer = window.dataLayer || [];        
        const data = {
            'event': "homepage_2_cta_click",
            'pagetype': "Home Page",
            'cta': cta
        };
        window.dataLayer.push(data);
    }

    getOccupationList = () => {
        Axios({
            method: "GET",
            url: "/tblipaoccupations?&_limit=1300"
        })
            .then(res => {
                this.setState({
                    occupatioList: res.data
                })
            })
            .catch(err => {
                console.log("Err");
            });
    }

    componentDidMount() {
        this.getOccupationList();
    }

    render() {
        const { occupatioList} = this.state;
        return (
            <Tab.Pane eventKey="tabmain_6">
                <Tab.Container defaultActiveKey="subtab_1b">
                    <Nav className="tabsub" variant="pills" >
                        <Nav.Item onClick={()=>this.gtmClickHandler("IPA Buy")}>
                            <Nav.Link eventKey="subtab_1b">Buy</Nav.Link>
                        </Nav.Item>
                        <Nav.Item onClick={()=>this.gtmClickHandler("IPA Claim")}>
                            {/* <Nav.Link eventKey="subtab_3b">Claim</Nav.Link> */}
                            <Link to={{
                                pathname: "/claim/claims-intimation",
                                state: { product_type: "IPA" }
                            }} className="nav-link">Claim</Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="subtab_1b">
                            {/*<div className="getquote">
                                <Form id="TravelForm" className="form-row" onSubmit={this.handleTravelSubmit} autoComplete="off">
                                    <div className="parant-form-cover">
                                    <Form.Row>
                                        <Form.Group className="d-flex">
                                            <Form.Label>I am a</Form.Label>
                                            <Form.Control as="select" ref={this.primary_gender}>
                                                <option value="">Select Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group className="d-flex">
                                            <Form.Label> looking to insure my</Form.Label>
                                            <Form.Control as="select" ref={this.travel_type} onChange={this.handleTravelTypeChange}>
                                                <option value="">Select Trip</option>
                                                <option value="single">Single Trip</option>
                                                <option value="multiple">Annual Multi Trip</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group className="d-flex">
                                            <Form.Label>  to</Form.Label>
                                             <Form.Control type="text" placeholder="Location" ref={this.location} /> 
                                            <Form.Control as="select" ref={this.location}>
                                                <option value="">Select Location</option>
                                                <option value="usa">Worldwide including USA and Canada</option>
                                                <option value="others">Worldwide excluding USA and Canada</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group className={this.state.self_travel_type === "multiple" ? ("d-flex") : ("readlessContentHide")}>
                                            <Form.Label> duration per trip</Form.Label>
                                            <Form.Control as="select" ref={this.travel_duration}>
                                                <option value="30">30 days</option>
                                                <option value="45">45 days</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group className="d-flex">
                                            <Form.Label> starting</Form.Label>
                                            <DatePicker
                                                ref={this.travel_startDate}
                                                className="form-control"
                                                selected={this.state.travel_startDate}
                                                onChange={(value) => this.handleDateChange('travel_startDate', value)}
                                                name="travel_startDate"
                                                dateFormat="dd-MM-yyy"
                                                showMonthDropdown
                                                showYearDropdown
                                                dropdownMode="select"
                                                minDate={new Date()}
                                                onKeyDown={e => e.preventDefault()}
                                                popperPlacement="top-end"
                                            />
                                        </Form.Group>
                                        <Form.Group className="d-flex">
                                            <Form.Label> and ending</Form.Label>
                                            <DatePicker
                                                ref={this.travel_endDate}
                                                className="form-control"
                                                selected={this.state.travel_endDate}
                                                onChange={(value) => this.handleDateChange('travel_endDate', value)}
                                                name="travel_endDate"
                                                dateFormat="dd-MM-yyy"
                                                showMonthDropdown
                                                showYearDropdown
                                                dropdownMode="select"
                                                //minDate={this.state.travel_minDate !== '' ? this.state.travel_minDate : new Date()}
                                                minDate={this.state.self_travel_type === "multiple" ? this.state.travel_endDate : (this.state.travel_minDate !== '' ? this.state.travel_minDate : new Date())}
                                                maxDate={this.state.self_travel_type === "multiple" ? this.state.travel_endDate : null}
                                                onKeyDown={e => e.preventDefault()}
                                                popperPlacement="top-end"
                                            />
                                        </Form.Group>
                                        <Form.Group className="d-flex">
                                            <Form.Label className="form-label">for</Form.Label>
                                            <Form.Control className="form-control"
                                                type="text"
                                                name="relation"
                                                placeholder="Select Members"
                                                readOnly="readOnly"
                                                ref={this.relation}
                                                value={this.state.relation} 
                                                onClick={e => this.openPopup(e)}
                                            />
                                        </Form.Group>
                                        <Form.Group className="d-flex">
                                            <Link className="cwvnPlusLink" to={'#'} onClick={e => this.openPopup(e)} ><img alt="" src={plusSign} /></Link>
                                        </Form.Group>
                                    </Form.Row>
                                    </div>
                                    <Button variant="warning" type="submit" onClick={this.handleTravelPolicy} className="btn-go">
                                        Go
                                    </Button>
                                </Form>
                            </div>*/}
                            <div className="getquote">
                                <Form id="TravelForm" className="form-row" onSubmit={this.handleTravelSubmit} autoComplete="off">
                                    <div className="parant-form-cover">
                                    <Form.Row>
                                        <Form.Group className="d-flex">
                                            <Form.Label className="form-label">I want personal accident policy for </Form.Label>
                                            <Form.Control className="form-control"
                                                type="text"
                                                name="relation"
                                                placeholder="select insured member"
                                                readOnly="readOnly"
                                                ref={this.relation}
                                                value={this.state.relation} 
                                                onClick={e => this.openPopup(e)}
                                            />
                                            <Link className="cwvnPlusLink" to={'#'} onClick={e => this.openPopup(e)} ><img alt="" src={plusSign} /></Link>
                                        </Form.Group>
                                        {/*<Form.Group className="d-flex">
                                            <Form.Label>  to travel</Form.Label>
                                             <Form.Control type="text" placeholder="Location" ref={this.location} /> 
                                            <Form.Control as="select" ref={this.location}>
                                                <option value="">Select relevant option</option>
                                                <option value="usa">Worldwide including USA and Canada</option>
                                                <option value="others">Worldwide excluding USA and Canada</option>
                                            </Form.Control>
                                        </Form.Group>*/}
                                       
                                    </Form.Row>
                                    </div>
                                    <Button variant="warning" type="submit" onClick={this.handleTravelPolicy} className="btn-go">
                                        Go
                                    </Button>
                                </Form>
                            </div>
                        </Tab.Pane>
                        {/* Motal for Health Panel */}
                        <Modal centered show={this.state.show_popup} onHide={this.handleClose} backdrop="static" size="lg">
                            <Form id="TravelPopupForm" onSubmit={this.handleHelthPopupSubmit} autoComplete="off">
                                <Modal.Header closeButton>
                                    <h5>Add Family Members to be Insured</h5>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="errorMsg common">{this.state.popup_errors.common}</div>
                                    <div className="form-group row" as={Row}>

                                        <Col sm="4">
                                            <Form.Check type="checkbox" id="self" label="Self" ref={this.self} onChange={this.handleCheck} defaultChecked={this.state.self_ischecked} value="Self" name="self" />
                                        </Col>
                                        <Col sm="5" className={this.state.self_ischecked ? ("") : ("readlessContentHide")}>
                                            <DatePicker
                                                selected={this.state.self_dob}
                                                onChange={(value) => this.handleDateChange('self_dob', value)}
                                                dateFormat="dd-MM-yyy"
                                                showMonthDropdown
                                                showYearDropdown
                                                dropdownMode="select"
                                                maxDate={new Date()}
                                                name="self_dob"
                                                onKeyDown={e => e.preventDefault()}
                                                placeholderText="Select DOB"
                                                popperPlacement="top-end"
                                            />
                                            <div className="errorMsg">{this.state.popup_errors.self_dob}</div>
                                        </Col>
                                        <Col sm="3" className={this.state.self_ischecked ? ("") : ("readlessContentHide")}>
                                            <Form.Control as="select" name="self_gender" onChange={(e) => this.handleGenderChange('self_gender', e)} value={this.state.self_gender} >
                                                <option value="">Select Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </Form.Control>
                                            <div className="errorMsg">{this.state.popup_errors.self_gender}</div>
                                        </Col>
                                    </div>
                                    <div className="form-group row" as={Row}>
                                        <Col sm="4">
                                            <Form.Check type="checkbox" id="spouse" label="Spouse" ref={this.spouse} onChange={this.handleCheck} value="Spouse" name="spouse" checked={this.state.spouse_ischecked} />
                                        </Col>
                                        <Col sm="5" className={this.state.spouse_ischecked ? ("") : ("readlessContentHide")}>
                                            <DatePicker
                                                selected={this.state.spouse_dob}
                                                onChange={(value) => this.handleDateChange('spouse_dob', value)}
                                                dateFormat="dd-MM-yyy"
                                                showMonthDropdown
                                                showYearDropdown
                                                dropdownMode="select"
                                                maxDate={new Date()}
                                                name="spouse_dob"
                                                placeholderText="Select DOB"
                                                onKeyDown={e => e.preventDefault()}
                                                popperPlacement="top-end"
                                            />
                                            <div className="errorMsg">{this.state.popup_errors.spouse_dob}</div>
                                        </Col>
                                    </div>
                                    <div className="form-group row" as={Row}>
                                        <Col sm="4">
                                            <Form.Check type="checkbox" id="child1" label="Child 1" onChange={this.handleCheck} value="Child1" name="child1" checked={this.state.child1_ischecked} />
                                        </Col>
                                        <Col sm="5" className={this.state.child1_ischecked ? ("") : ("readlessContentHide")}>
                                            <DatePicker
                                                selected={this.state.child1_dob}
                                                onChange={(value) => this.handleDateChange('child1_dob', value)}
                                                dateFormat="dd-MM-yyy"
                                                showMonthDropdown
                                                showYearDropdown
                                                dropdownMode="select"
                                                maxDate={new Date()}
                                                name="child1_dob"
                                                placeholderText="Select DOB"
                                                onKeyDown={e => e.preventDefault()}
                                                popperPlacement="top-end"
                                            />
                                            <div className="errorMsg">{this.state.popup_errors.child1_dob}</div>
                                        </Col>
                                        <Col sm="3" className={this.state.child1_ischecked ? ("") : ("readlessContentHide")}>
                                            <Form.Control as="select" name="child1_gender" onChange={(e) => this.handleGenderChange('child1_gender', e)} value={this.state.child1_gender} >
                                                <option value="">Select Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </Form.Control>
                                            <div className="errorMsg">{this.state.popup_errors.child1_gender}</div>
                                        </Col>
                                    </div>
                                    <div className="form-group row" as={Row}>
                                        <Col sm="4">
                                            <Form.Check type="checkbox" id="child2" label="Child 2" onChange={this.handleCheck} value="Child2" name="child2" checked={this.state.child2_ischecked} />
                                        </Col>
                                        <Col sm="5" className={this.state.child2_ischecked ? ("") : ("readlessContentHide")}>
                                            <DatePicker
                                                selected={this.state.child2_dob}
                                                onChange={(value) => this.handleDateChange('child2_dob', value)}
                                                dateFormat="dd-MM-yyy"
                                                showMonthDropdown
                                                showYearDropdown
                                                dropdownMode="select"
                                                maxDate={new Date()}
                                                name="child2_dob"
                                                placeholderText="Select DOB"
                                                onKeyDown={e => e.preventDefault()}
                                                popperPlacement="top-end"
                                            />
                                            <div className="errorMsg">{this.state.popup_errors.child2_dob}</div>
                                        </Col>
                                        <Col sm="3" className={this.state.child2_ischecked ? ("") : ("readlessContentHide")}>
                                            <Form.Control as="select" name="child2_gender" onChange={(e) => this.handleGenderChange('child2_gender', e)} value={this.state.child2_gender} >
                                                <option value="">Select Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </Form.Control>
                                            <div className="errorMsg">{this.state.popup_errors.child2_gender}</div>
                                        </Col>
                                    </div>
                                    <div className="form-group row" as={Row}>
                                        <Col sm="4">
                                            <Form.Check type="checkbox" id="father" label="Father" onChange={this.handleCheck} value="Father" name="father" checked={this.state.father_ischecked} />
                                        </Col>
                                        <Col sm="5" className={this.state.father_ischecked ? ("") : ("readlessContentHide")}>
                                            <DatePicker
                                                selected={this.state.father_dob}
                                                onChange={(value) => this.handleDateChange('father_dob', value)}
                                                dateFormat="dd-MM-yyy"
                                                showMonthDropdown
                                                showYearDropdown
                                                dropdownMode="select"
                                                maxDate={new Date()}
                                                name="father_dob"
                                                placeholderText="Select DOB"
                                                onKeyDown={e => e.preventDefault()}
                                                popperPlacement="top-end"
                                            />
                                            <div className="errorMsg">{this.state.popup_errors.father_dob}</div>
                                        </Col>
                                    </div>
                                    <div className="form-group row" as={Row}>
                                        <Col sm="4">
                                            <Form.Check type="checkbox" id="mother" label="Mother" onChange={this.handleCheck} value="Mother" name="mother" checked={this.state.mother_ischecked} />
                                        </Col>
                                        <Col sm="5" className={this.state.mother_ischecked ? ("") : ("readlessContentHide")}>
                                            <DatePicker
                                                selected={this.state.mother_dob}
                                                onChange={(value) => this.handleDateChange('mother_dob', value)}
                                                dateFormat="dd-MM-yyy"
                                                showMonthDropdown
                                                showYearDropdown
                                                dropdownMode="select"
                                                maxDate={new Date()}
                                                name="mother_dob"
                                                placeholderText="Select DOB"
                                                onKeyDown={e => e.preventDefault()}
                                                popperPlacement="top-end"
                                            />
                                            <div className="errorMsg">{this.state.popup_errors.mother_dob}</div>
                                        </Col>
                                    </div>
                                    <div className="form-group row" as={Row}>
                                        <Col sm="4">
                                            <Form.Check type="checkbox" id="fatherinlaw" label="Father In Law" onChange={this.handleCheck} value="Father in law" name="fatherinlaw" checked={this.state.fatherinlaw_ischecked} />
                                        </Col>
                                        <Col sm="5" className={this.state.fatherinlaw_ischecked ? ("") : ("readlessContentHide")}>
                                            <DatePicker
                                                selected={this.state.fatherinlaw_dob}
                                                onChange={(value) => this.handleDateChange('fatherinlaw_dob', value)}
                                                dateFormat="dd-MM-yyy"
                                                showMonthDropdown
                                                showYearDropdown
                                                dropdownMode="select"
                                                maxDate={new Date()}
                                                name="fatherinlaw_dob"
                                                placeholderText="Select DOB"
                                                onKeyDown={e => e.preventDefault()}
                                                popperPlacement="top-end"
                                            />
                                            <div className="errorMsg">{this.state.popup_errors.fatherinlaw_dob}</div>
                                        </Col>
                                    </div>
                                    <div className="form-group row" as={Row}>
                                        <Col sm="4">
                                            <Form.Check type="checkbox" id="motherinlaw" label="Mother In Law" onChange={this.handleCheck} value="Mother in law" name="motherinlaw" checked={this.state.motherinlaw_ischecked} />
                                        </Col>
                                        <Col sm="5" className={this.state.motherinlaw_ischecked ? ("") : ("readlessContentHide")}>
                                            <DatePicker
                                                selected={this.state.motherinlaw_dob}
                                                onChange={(value) => this.handleDateChange('motherinlaw_dob', value)}
                                                dateFormat="dd-MM-yyy"
                                                showMonthDropdown
                                                showYearDropdown
                                                dropdownMode="select"
                                                maxDate={new Date()}
                                                name="motherinlaw_dob"
                                                placeholderText="Select DOB"
                                                onKeyDown={e => e.preventDefault()}
                                                popperPlacement="top-end"
                                            />
                                            <div className="errorMsg">{this.state.popup_errors.motherinlaw_dob}</div>
                                        </Col>
                                    </div>
                                    <div className="form-group row" as={Row}>
                                      <Col sm="2">
                                      <Form.Group className="d-flex form-group">
                                            <Form.Label>Occupation</Form.Label>
                                        </Form.Group>
                                     </Col>
                                     <Col sm="8">
                                      <Form.Group className="d-flex form-group">
                                        <Form.Control as="select" name="proposer_occupation" onChange={(e) => this.handleGenderChange('proposer_occupation', e)} value={this.state.proposer_occupation} >
                                                <option value="">Select occupation</option>
                                                {occupatioList.map((item, i) => (

                                                    <option value={item.OCCUPATIONID} key={i}>{item.OCCUPATION}</option>

                                                ))}
                                                
                                            </Form.Control>

                                        </Form.Group>
                                        <div className="errorMsg">{this.state.popup_errors.proposer_occupation}</div>
                                     </Col>
                                    </div>

                                    <div className="form-group row" as={Row}>
                                     <Col sm="2">
                                       <Form.Group className="d-flex form-group">
                                            <Form.Label>Annual Income</Form.Label>
                                        </Form.Group>
                                     </Col>
                                     <Col sm="8">
                                     <Form.Group className="d-flex form-group">
                                            <Form.Control type="text" name="proposer_income" placeholder="proposer income" onChange={(e) => this.handleGenderChange('proposer_income', e)} value={this.state.proposer_income} />
                                        </Form.Group>
                                        <div className="errorMsg">{this.state.popup_errors.proposer_income}</div>
                                        </Col>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="primary" onClick={this.handleTravelPopup}> Select</Button>
                                </Modal.Footer>
                            </Form>
                        </Modal>
                        <Tab.Pane eventKey="subtab_3b">
                            {/* <div className="getquote">
                                <Form className="form-row" id="TravelClaimForm" onSubmit={this.handleTravelSubmit}>
                                    <Form.Row>
                                        <Form.Group className="d-flex form-group">
                                            <Form.Label>I am</Form.Label>
                                            <Form.Control as="select">
                                                <option value="">Select</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group className="d-flex form-group">
                                            <Form.Label> looking to insure my travel to</Form.Label>
                                            <Form.Control type="text" placeholder="Location" />
                                        </Form.Group>
                                        <Form.Group className="d-flex form-group">
                                            <Button variant="warning" type="submit" onClick={this.handleTravelPolicy}>
                                                Get QUOTE
                                            </Button>
                                        </Form.Group>
                                    </Form.Row>
                                </Form>
                            </div> */}
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </Tab.Pane>
        )
    }
}

export default HomeIPATab;