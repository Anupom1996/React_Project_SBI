import React, { useState } from "react";
import { Form, Button, Spinner, Alert } from "react-bootstrap";
//import * as AppConstant from '../../AppConstant';
import AxiosTrans from "../../../Services/Shared/AxiosTrans";

function ContactEmailValidation(props) {
  const [validated, setValidated] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [successMsgShow, setSuccessMsgShow] = useState(false);
  const [errorMsgShow, setErrorMsgShow] = useState(false);
  const [sendMsg, setSendMsg] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSuccessMsgShow(false);

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      //console.log(props.addressBoxType);
      let emailId = form.emailId.value;
      let requestParam = {};
      if (props.addressBoxType === 'Branch') {
        let msgText = '<p>' + props.addressName + '</p><p>' + props.addressDetails + ' </p>';
        requestParam = {
          "content": btoa(msgText),
          "to": emailId,
          "attachment": "",
          "subject": "Branch Address"
        };
      } else if (props.addressBoxType === 'Garage') {
        let msgText = '<p>' + props.addressName + '</p><p>' + props.addressDetails + ' </p>';
        requestParam = {
          "content": btoa(msgText),
          "to": emailId,
          "attachment": "",
          "subject": "Garage Address"
        };
      }
      setShowLoader(true);
      AxiosTrans({
        method: "POST",
        url: "/api/mailer",
        data: JSON.stringify(requestParam)
      }).then(res => {
          //console.log(res.status);
          let msgText = 'Email Has Been Sent Successfully.';
          if (typeof res.message != 'undefined') {
            msgText = res.message;
          } 
          setSendMsg(msgText);
          setShowLoader(false);
          setSuccessMsgShow(true);
          setErrorMsgShow(false);
          setValidated(false);
          document.getElementById('EmailForm').reset();
      }).catch(err => {
          let msgText = 'Something went wrong!';
          if (typeof err.message != 'undefined') {
            msgText = err.message;
          } 
          setSendMsg(msgText);
          setShowLoader(false);
          setErrorMsgShow(true);
          setSuccessMsgShow(false);
          setValidated(false);
          document.getElementById('EmailForm').reset();
      });
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
        id="EmailForm"
        autoComplete="off"
      >
        <Form.Group controlId="emailId">
          <Form.Control
            required
            type="email"
            placeholder="Enter Your Email Address."
            pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
          />
          <Form.Control.Feedback type="invalid">
            Please Enter Your Valid Email Address.
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
          {sendMsg}
        </Alert>
      ) : null}
      {errorMsgShow ? (
        <Alert className="submit-alert" variant="danger">
          {sendMsg}
        </Alert>
      ) : null}
    </>
  );
}

export default ContactEmailValidation;
