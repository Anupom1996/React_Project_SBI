import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import { Nav, Row, Col, Tab, Accordion, Card, Button } from "react-bootstrap";

class BaseWithdrawnProduct extends Component {

    toggleAccordianBtn = e => {
        let ParentID = e.target.parentNode.parentNode.parentNode.id;
        let classAccord = e.target.className;
        let els = document.getElementById(ParentID).getElementsByClassName("accordianBtn btn btn-link");
        if (els) {
          while (els[0]) {
            els[0].classList.remove("accordianBtn");
          }
        }
        if (classAccord.indexOf("accordianBtn") > -1) {
          e.target.className = "btn btn-link";
        } else {
          e.target.className = "accordianBtn btn btn-link";
        }
    }

    render(){
        return(
            <>
            {isMobile ? ( //For Mobil View
            <div className="faqContent">
            <section className="faQinsuranceMain" id="WithdrawnTab">
                <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey="0"
                    onClick={e => this.toggleAccordianBtn(e)}
                    className={"accordianBtn"}
                    >
                    Withdrawn Products
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <ul className="product-list">
                        <li>
                            <div className="prod-box">
                            <figure>
                                {" "}
                                <img
                                src={require("../../assets/images/product-icons/landing-page/JewellersBlock.svg")}
                                alt="JewellersBlock"
                                />
                            </figure>
                            <h3>Jeweller's Block</h3>
                            <div className="prod-content">
                                <ul></ul>
                            </div>
                            <div className="prod-btn-holder">
                                <Link
                                to={"/jewellers-block"}
                                className="btn-more"
                                >
                                Know More
                                </Link>
                            </div>
                            </div>
                        </li>
                        </ul>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
            </section>
            </div>
        ) : (
            //For Desktop View
            <div className="prod-tab-content-step-one">
                <Tab.Container
                id="prodTab-motorInsuranc"
                defaultActiveKey="WithdrawnProducts"
                >
                <Row className="prod-tab-inner">
                    <Col sm={12}>
                    <Nav
                        variant="pills"
                        className="flex-row justify-content-center align-items-center"
                    >
                        <Nav.Item>
                        <Nav.Link eventKey="WithdrawnProducts">
                            Withdrawn Products
                        </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={12}>
                    <Tab.Content>
                        <Tab.Pane eventKey="WithdrawnProducts">
                        <div className="prod-tab-content-step-two">
                            <ul className="product-list">
                            <li>
                                <div className="prod-box">
                                <figure>
                                    {" "}
                                    <img
                                    src={require("../../assets/images/product-icons/landing-page/JewellersBlock.svg")}
                                    alt="JewellersBlock"
                                    />
                                </figure>
                                <h3>Jeweller's Block</h3>
                                <div className="prod-content">
                                    <ul></ul>
                                </div>
                                <div className="prod-btn-holder">
                                    <Link
                                    to={
                                        "/jewellers-block"
                                    }
                                    className="btn-more"
                                    >
                                    Know More
                                </Link>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>
            </div>
            )}
            </>
        )
    }

}

export default BaseWithdrawnProduct;