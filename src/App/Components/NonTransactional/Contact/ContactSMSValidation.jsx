import React, { useState } from "react";
import { Form, Button, Spinner, Alert } from "react-bootstrap";
import AxiosTrans from "../../../Services/Shared/AxiosTrans";

function ContactSMSValidation(props) {
  const [validated, setValidated] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [successMsgShow, setSuccessMsgShow] = useState(false);
  //const [errorMsgShow, setErrorMsgShow] = useState(false);
  //const [errorMsg, setErrorMsg] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSuccessMsgShow(false);

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      let mobileno = form.phoneNumber.value;
      let msgText = props.addressName + ' ' + props.addressDetails;
      let requestParam = {
        "text": msgText,
        "mobile_no": mobileno,
      };
      setShowLoader(true);
      AxiosTrans({
        method: "POST",
        url: "/api/sms",
        data: JSON.stringify(requestParam)
      }).then(res => {
        //console.log(res);
        setShowLoader(false);
        setSuccessMsgShow(true);
        setValidated(false);
        document.getElementById('SmsForm').reset();
      }).catch(err => { 
        setShowLoader(false);
        setSuccessMsgShow(true);
        //console.log(err) ;
        setValidated(false);
        document.getElementById('SmsForm').reset();
        // if(err) {
        //   setErrorMsg('Invalid Request');
        //   setErrorMsgShow(true);
        // }
      });
      // setShowLoader(true);

      // setTimeout(function() {
      //   setShowLoader(false);
      //   setSuccessMsgShow(true);
      // }, 1000);
    }

    setValidated(true);
  };

  return (
    <>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="modal-form"
        id="SmsForm"
        autoComplete="off"
      >
        <Form.Group controlId="phoneNumber">
          <Form.Control
            requiredtype="text"
            required
            pattern="^[0-9]{10}$"
            maxLength="10"
            placeholder="Enter Your Mobile Number."
            name="mobile_no"
          />
          <Form.Control.Feedback type="invalid">
            Please Enter Your Valid Mobile Number.
          </Form.Control.Feedback>
        </Form.Group>

        {!showLoader ? (
          <Button variant="primary" type="submit">
            Send
          </Button>
        ) : (
          <span className="loading-view">
            <Spinner
              variant="success"
              size="sm"
              animation="border"
              role="status"
            />{" "}
            Please Wait. . .
          </span>
        )}
      </Form>

      {successMsgShow ? (
        <Alert className="submit-alert" variant="success">
          SMS Has Been Sent Successfully.
        </Alert>
      ) : null}
      {/* {errorMsgShow ? (
        <Alert className="submit-alert" variant="danger">
          {errorMsg}
        </Alert>
      ) : null} */}
    </>
  );
}

export default ContactSMSValidation;
