import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import { Row, Col, Container, Form, InputGroup, Button } from "react-bootstrap";
import AddressBox from "../../Common/AddressBox/AddressBox";
import BaseComponent from "../../BaseComponent";
import HelmetData from "../../Common/HelmetData";

class WriteToUs extends Component {
    render() {
        return (
            <BaseComponent>
                {/* <Helmet> */}
                <HelmetData pageComponentType="WriteToUs" />
                {/* Header Start */}
                {isMobile ? (
                    <section className="topform product-header">
                        <div className="insuTab">
                            <h1>Write To Us</h1>
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
                                <h1>Write To Us</h1>
                                {/* For Desktop */}
                            </div>
                        </section>
                    )}
                {/* Header End */}
                <Container>
                    <div className="claim-content">
                        <Row>
                            <Col lg="6" xm="12">
                                <Form className="claim-form">
                                    <h3>Please Provide Your Details</h3>
                                    <Form.Row>

                                        <Form.Group as={Col} lg="12">
                                            <Form.Control as="select">
                                                <option>I want to share a</option>
                                                <option>Suggestion & queries</option>
                                                <option>Complaint</option>
                                                <option>Website Feedback</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} lg="6">
                                            <InputGroup>
                                                <Form.Control type="text" placeholder="First Name " required />
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col} lg="6">
                                            <Form.Control required type="text" placeholder="Last Name " />
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} lg="6">
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text>+91</InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control type="tel" placeholder="Mobile Number" required />
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col} lg="6">
                                            <Form.Control required type="email" placeholder="Email" />
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>

                                        <Form.Group as={Col} lg="12">
                                            <Form.Control as="select">
                                                <option value="" selected="selected">- Select City -</option>
                                                <option value="Agra">Agra</option>
                                                <option value="Ahmedabad">Ahmedabad</option>
                                                <option value="Aizawl">Aizawl</option>
                                                <option value="Akola">Akola</option>
                                                <option value="Allahabad">Allahabad</option>
                                                <option value="Alwar">Alwar</option>
                                                <option value="Amritsar">Amritsar</option>
                                                <option value="Aurangabad">Aurangabad</option>
                                                <option value="Baharampur">Baharampur</option>
                                                <option value="Balasore">Balasore</option>
                                                <option value="Bareilly">Bareilly</option>
                                                <option value="Bathinda">Bathinda</option>
                                                <option value="Bengaluru">Bengaluru</option>
                                                <option value="Berhampur">Berhampur</option>
                                                <option value="Bhavanagar">Bhavanagar</option>
                                                <option value="Bhopal">Bhopal</option>
                                                <option value="Bhubaneswar">Bhubaneswar</option>
                                                <option value="Bihar">Bihar</option>
                                                <option value="Bikaner">Bikaner</option>
                                                <option value="Bilaspur">Bilaspur</option>
                                                <option value="Chandigarh">Chandigarh</option>
                                                <option value="Chennai">Chennai</option>
                                                <option value="Cochin">Cochin</option>
                                                <option value="Coimbatore">Coimbatore</option>
                                                <option value="Dehradun">Dehradun</option>
                                                <option value="Delhi">Delhi</option>
                                                <option value="Durgapur">Durgapur</option>
                                                <option value="Ernakulam">Ernakulam</option>
                                                <option value="Gandhidham">Gandhidham</option>
                                                <option value="Goa">Goa</option>
                                                <option value="Gorakhpur">Gorakhpur</option>
                                                <option value="Gujarat">Gujarat</option>
                                                <option value="Gulbarga">Gulbarga</option>
                                                <option value="Guntur">Guntur</option>
                                                <option value="Guwahati">Guwahati</option>
                                                <option value="Gwalior">Gwalior</option>
                                                <option value="Haldwani">Haldwani</option>
                                                <option value="Haryana">Haryana</option>
                                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                                <option value="Hisar">Hisar</option>
                                                <option value="Hoshiarpur">Hoshiarpur</option>
                                                <option value="Hubli">Hubli</option>
                                                <option value="Hyderabad">Hyderabad</option>
                                                <option value="Imphal">Imphal</option>
                                                <option value="Indore">Indore</option>
                                                <option value="Jabalpur">Jabalpur</option>
                                                <option value="Jaipur">Jaipur</option>
                                                <option value="Jalandhar">Jalandhar</option>
                                                <option value="Jammu">Jammu</option>
                                                <option value="Jamnagar">Jamnagar</option>
                                                <option value="Jamshedpur">Jamshedpur</option>
                                                <option value="Jhansi">Jhansi</option>
                                                <option value="Jharkhand">Jharkhand</option>
                                                <option value="Jodhpur">Jodhpur</option>
                                                <option value="Jorhat">Jorhat</option>
                                                <option value="Kanpur">Kanpur</option>
                                                <option value="Karnal">Karnal</option>
                                                <option value="Kerchoumuhani">Kerchoumuhani</option>
                                                <option value="Kharagpur">Kharagpur</option>
                                                <option value="Kolhapur">Kolhapur</option>
                                                <option value="Kolkata">Kolkata</option>
                                                <option value="Kota">Kota</option>
                                                <option value="Kozhikode">Kozhikode</option>
                                                <option value="Kurnool">Kurnool</option>
                                                <option value="Lucknow">Lucknow</option>
                                                <option value="Ludhiana">Ludhiana</option>
                                                <option value="Madurai">Madurai</option>
                                                <option value="Maharashtra">Maharashtra</option>
                                                <option value="Mangalore">Mangalore</option>
                                                <option value="Meerut">Meerut</option>
                                                <option value="Mumbai">Mumbai</option>
                                                <option value="Muzaffarpur">Muzaffarpur</option>
                                                <option value="Mysore">Mysore</option>
                                                <option value="Nagpur">Nagpur</option>
                                                <option value="Nashik">Nashik</option>
                                                <option value="Navi Mumbai">Navi Mumbai</option>
                                                <option value="New Delhi">New Delhi</option>
                                                <option value="Noida">Noida</option>
                                                <option value="Palanpur">Palanpur</option>
                                                <option value="Patiala">Patiala</option>
                                                <option value="Patna">Patna</option>
                                                <option value="Port Blair">Port Blair</option>
                                                <option value="Puducherry">Puducherry</option>
                                                <option value="Pune">Pune</option>
                                                <option value="Raipur">Raipur</option>
                                                <option value="Rajkot">Rajkot</option>
                                                <option value="Ranchi">Ranchi</option>
                                                <option value="Ratanlal Plot Chowk">Ratanlal Plot Chowk</option>
                                                <option value="Ratlam">Ratlam</option>
                                                <option value="Rohtak">Rohtak</option>
                                                <option value="Rourkela">Rourkela</option>
                                                <option value="Salem">Salem</option>
                                                <option value="Sambalpur">Sambalpur</option>
                                                <option value="SBI General Insurance Co Ltd">SBI General Insurance Co Ltd</option>
                                                <option value="Shillong">Shillong</option>
                                                <option value="Shimla">Shimla</option>
                                                <option value="Silchar">Silchar</option>
                                                <option value="Siliguri">Siliguri</option>
                                                <option value="Srinagar">Srinagar</option>
                                                <option value="Surat">Surat</option>
                                                <option value="Telangana branch">Telangana branch</option>
                                                <option value="Thane">Thane</option>
                                                <option value="Thanjavur">Thanjavur</option>
                                                <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                                                <option value="Thrissur">Thrissur</option>
                                                <option value="Tiruchirapally">Tiruchirapally</option>
                                                <option value="Tirupati">Tirupati</option>
                                                <option value="Udaipur">Udaipur</option>
                                                <option value="Vadodara">Vadodara</option>
                                                <option value="Vapi">Vapi</option>
                                                <option value="Varanasi">Varanasi</option>
                                                <option value="Vellore">Vellore</option>
                                                <option value="Vijaywada">Vijaywada</option>
                                                <option value="Visakhapatnam">Visakhapatnam</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row className="p-0">
                                        <Form.Group as={Col} lg="12">
                                            <InputGroup>
                                                <label className="remarks-label">
                                                    Do you have Policy Number?
                </label>
                                            </InputGroup>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} lg="12">
                                            <InputGroup>
                                                <Form.Check
                                                    type="radio"
                                                    label="Yes"
                                                    name="mobRadio"
                                                    inline
                                                    id="yes"
                                                />
                                                <Form.Check
                                                    type="radio"
                                                    label="No"
                                                    name="mobRadio"
                                                    inline
                                                    id="no"
                                                />
                                            </InputGroup>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row className="m-0 p-0">
                                        <Form.Group as={Col} lg="12">
                                            <InputGroup>
                                                <label className="remarks-label">
                                                    Remarks
                                                </label>
                                            </InputGroup>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} lg="12">
                                            <InputGroup>
                                                <Form.Control
                                                    as="textarea"
                                                    rows="3"
                                                    type="text"
                                                    ref={el => (this.remarks = el)}
                                                />
                                            </InputGroup>
                                        </Form.Group>
                                    </Form.Row>
                                    <Button variant="primary" onClick={this.handleSubmitClick}>
                                        Submit
          </Button>
                                </Form>
                            </Col>
                            <Col lg="6" xm="12">
                                <AddressBox addressBoxType="Claims" />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </BaseComponent>
        );
    }
}

export default WriteToUs;
