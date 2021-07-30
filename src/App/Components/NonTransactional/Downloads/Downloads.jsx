import React, { Component } from "react";
import { isMobile } from "react-device-detect";

import { Nav, Row, Col, Tab, Accordion, Card, Button } from "react-bootstrap";
import BaseComponent from "../../BaseComponent";
import Axios from "../../../Services/Shared/Axios";
import * as AppConstant from "../../AppConstant";
import HelmetData from "../../Common/HelmetData";
import downloadProductData from "../../../assets/downloadProductData.json";

// const sanjeevaniData = [
//     {
//     "id": 112,
//     "title": "Arogya Sanjeevani",
//     "downloadcategory": {
//       "id": 2,
//       "title": "Health Insurance - Individual",
//       "category_type": "individual",
//       "published": true,
//       "created_at": "2019-12-14T16:21:52.000Z",
//       "updated_at": "2019-12-14T16:21:52.000Z",
//       "display_name": "Health Insurance"
//     },
//     "created_at": "2019-12-14T16:21:52.000Z",
//     "updated_at": "2020-09-01T15:31:12.000Z",
//     "published": true,
//     "download_subitems": [
//       {
//         "id": 68,
//         "title": "Product Brochure",
//         "attachment": [
//           {
//             "id": 2376,
//             "name": "SBI General's Loan Insurance Brochure.pdf",
//             "hash": "06175ba126124cc6b510d455aa8c5732",
//             "sha256": "YiHJcVyYCicpNKENgxCwzf4UjgJpvW5xdgAk3f35JKE",
//             "ext": ".pdf",
//             "mime": "application/pdf",
//             "size": "3062.84",
//             "url": "/uploads/977fc90ab12640b8bb0d4ed3b600d819.pdf",
//             "provider": "local",
//             "provider_metadata": null,
//             "created_at": "2020-09-01T15:31:12.000Z",
//             "updated_at": "2020-09-01T15:31:12.000Z"
//           }
//         ]
//       }      
//     ]
//   },{
//     "id": 113,
//     "title": "Corona Kavach",
//     "downloadcategory": {
//       "id": 2,
//       "title": "Health Insurance - Individual",
//       "category_type": "individual",
//       "published": true,
//       "created_at": "2019-12-14T16:21:52.000Z",
//       "updated_at": "2019-12-14T16:21:52.000Z",
//       "display_name": "Health Insurance"
//     },
//     "created_at": "2019-12-14T16:21:52.000Z",
//     "updated_at": "2020-09-01T15:31:12.000Z",
//     "published": true,
//     "download_subitems": [
//       {
//         "id": 68,
//         "title": "Product Brochure",
//         "attachment": [
//           {
//             "id": 2376,
//             "name": "SBI General's Loan Insurance Brochure.pdf",
//             "hash": "06175ba126124cc6b510d455aa8c5732",
//             "sha256": "YiHJcVyYCicpNKENgxCwzf4UjgJpvW5xdgAk3f35JKE",
//             "ext": ".pdf",
//             "mime": "application/pdf",
//             "size": "3062.84",
//             "url": "/uploads/13b7f352efe54c41b464602d2b21bc95.pdf",
//             "provider": "local",
//             "provider_metadata": null,
//             "created_at": "2020-09-01T15:31:12.000Z",
//             "updated_at": "2020-09-01T15:31:12.000Z"
//           }
//         ]
//         },
//         {
//             "id": 68,
//             "title": "Proposal Form",
//             "attachment": [
//                 {
//                     "id": 2376,
//                     "name": "SBIG Corona Kavach Proposal form-PD.pdf",
//                     "hash": "06175ba126124cc6b510d455aa8c5732",
//                     "sha256": "YiHJcVyYCicpNKENgxCwzf4UjgJpvW5xdgAk3f35JKE",
//                     "ext": ".pdf",
//                     "mime": "application/pdf",
//                     "size": "3062.84",
//                     "url": "/uploads/25c9de664ddf4d0b86d41942d4cb210a.pdf",
//                     "provider": "local",
//                     "provider_metadata": null,
//                     "created_at": "2020-09-01T15:31:12.000Z",
//                     "updated_at": "2020-09-01T15:31:12.000Z"
//                 }
//             ]
//         }
//     ]
//   }
// ];
class Downloads extends Component {
    constructor() {
        super();

        this.state = {
            downloadCategoryData: [],
            downloadData: [],
            showLoader: true
        };
    }



    getDownloadContent = () => {
        const credentialJson = {
            "identifier": AppConstant.JWT_USER,
            "password": AppConstant.JWT_PASS
        };
        Axios({
            method: "post",
            url: '/auth/local',
            data: JSON.stringify(credentialJson),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                const jwt_token = res.data.jwt;
                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + jwt_token
                };
                Axios({
                    method: "get",
                    url: "/downloads?_limit=1500",
                    headers: headers
                })
                    .then(res => {
                        // let dnldData =  Object.assign(res.data,sanjeevaniData);
                        // console.log(dnldData);
                        this.setState({
                            downloadData: res.data,
                            showLoader: true
                        }, () => {

                            this.getDownloadCategoryContent();

                        });
                    })
                    .catch(err => {
                        console.log(err);
                        console.log("|Page Error|");
                    });
            })
            .catch(err => {
                console.log(err);
                console.log("|Token Error|");
            });
    };
    getDownloadCategoryContent = () => {
        Axios({
            method: "get",
            url: "/downloadcategories"
        })
            .then(res => {
                this.setState({ showLoader: false })
                res.data.map((item, i) => {
                    return (
                        this.state.downloadData.map((item1, j) => {
                            if (item.id === item1.downloadcategory.id) {
                                item.downloads.map((subitem, k) => {
                                    // console.log(item1.title,item1.id, "===", subitem.id);
                                    if (item1.id === subitem.id) {
                                        res.data[i]['downloads'][k]['download_subitems'] = item1.download_subitems;
                                    }
                                    return true;
                                });

                            }
                            return true;
                        })
                    )
                })
                this.setState({
                    downloadCategoryData: res.data,
                    showLoader: false
                });
            })

            .catch(err => {
                console.log(err);
                console.log("|Page Error|");
            });
            console.log('downloadCategoryData',this.state.downloadCategoryData)
    };


    componentDidMount() {
        this.getDownloadContent();
    }

    toggleAccordianBtn = (e) => {
        let classAccord = e.target.className;
        let els = document.getElementsByClassName('accordianBtn btn btn-link');
        if (els) {
            while (els[0]) {
                els[0].classList.remove('accordianBtn')
            }
        }
        if (classAccord.indexOf('accordianBtn') > -1) {
            e.target.className = 'btn btn-link';
        } else {
            e.target.className = 'accordianBtn btn btn-link';
        }
    }

    render() {
        let downloadCategoryData = this.state.downloadCategoryData;
        return (
            <>
                <BaseComponent>
                    {/* <Helmet> */}
                    <HelmetData pageComponentType="Downloads" />
                    {/* Header Start */}
                    {isMobile ? (
                        <section className="topform product-header">
                            <div className="insuTab">
                                <h1>Downloads</h1>
                                {/* For Mobule */}
                            </div>
                        </section>
                    ) : (
                            <section className="container-with-no-padding container">
                                <div className="innerpageBanner row">
                                    <div className="col-4">
                                        <figure className="justify-content-between align-items-center">
                                            <img
                                                src={require("../../../assets/images/common_banner.svg")}
                                                alt=""
                                            />
                                        </figure>
                                    </div>
                                    <div className="col-8 d-flex align-items-center">
                                        <div className="flex-column">
                                            <h1>Downloads</h1>
                                            {/* For Desktop */}
                                        </div>
                                        <div className="innerHeadBotomIcon">
                                            <img
                                                src={require("../../../assets/images/general_product_bottom_icon.svg")}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}
                    {/* Header End */}
                    {this.state.showLoader ? (
                        <>
                            <div className="container mt-10 tabWrapMain">
                                <div className="tabWrap">
                                    <Tab.Container id="left-tabs-example" defaultActiveKey="Individual">
                                        <Row className="m-b-65">
                                            <Col sm={12}>
                                                <Nav variant="pills"
                                                    className="flex-row aboutTab justify-content-md-start justify-content-lg-center align-items-center">
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="Individual"
                                                            className="d-flex flex-column justify-content-center align-items-center">
                                                            <img src={require("./../../../assets/images/teamIcon.svg")} alt="" />
                                                            <h2>Individual</h2>
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="Business"
                                                            className="d-flex flex-column justify-content-center align-items-center">
                                                            <img src={require("./../../../assets/images/icon-claim-settlement.svg")} alt="" />
                                                            <h2>Business</h2>
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="Rural"
                                                            className="d-flex flex-column justify-content-center align-items-center">
                                                            <img src={require("./../../../assets/images/icon-rural.svg")} alt="" />
                                                            <h2>Rural</h2>
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="PolicyForms"
                                                            className="d-flex flex-column justify-content-center align-items-center">
                                                            <img src={require("./../../../assets/images/icon-download-form.svg")} alt="" />
                                                            <h2>Policy Servicing Forms</h2>
                                                        </Nav.Link>
                                                    </Nav.Item>

                                                </Nav>
                                            </Col>
                                        </Row>
                                    </Tab.Container>
                                    <div className="aboutTabContent tab-content">
                                        <ul className="popular-blog-list">
                                            <li>
                                                <div className="loader line"></div>
                                                <div className="loader line"></div>
                                            </li>
                                            <li>&nbsp;</li>
                                            <li>
                                                <div className="loader line"></div>
                                                <div className="loader line"></div>
                                            </li>
                                            <li>&nbsp;</li>
                                            <li>
                                                <div className="loader line"></div>
                                                <div className="loader line"></div>
                                            </li>
                                            <li>&nbsp;</li>
                                            <li>
                                                <div className="loader line"></div>
                                                <div className="loader line"></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </>
                    ) : (
                            <>
                                {downloadCategoryData.length > 0 ? (
                                    <div className="container mt-10 tabWrapMain">
                                        <div className="tabWrap">
                                            <Tab.Container id="left-tabs-example" defaultActiveKey="Individual">
                                                <Row className="m-b-65">
                                                    <Col sm={12}>
                                                        <Nav variant="pills" className="flex-row aboutTab justify-content-md-start justify-content-lg-center align-items-center">
                                                            <Nav.Item>
                                                                <Nav.Link eventKey="Individual" className="d-flex flex-column justify-content-center align-items-center" >
                                                                    <img src={require("./../../../assets/images/teamIcon.svg")} alt="" />
                                                                    <h2>Individual</h2>
                                                                </Nav.Link>
                                                            </Nav.Item>
                                                            <Nav.Item>
                                                                <Nav.Link eventKey="Business" className="d-flex flex-column justify-content-center align-items-center" >
                                                                    <img src={require("./../../../assets/images/icon-claim-settlement.svg")} alt="" />
                                                                    <h2>Business</h2>
                                                                </Nav.Link>
                                                            </Nav.Item>
                                                            <Nav.Item>
                                                                <Nav.Link eventKey="Rural" className="d-flex flex-column justify-content-center align-items-center" >
                                                                    <img src={require("./../../../assets/images/icon-rural.svg")} alt="" />
                                                                    <h2>Rural</h2>
                                                                </Nav.Link>
                                                            </Nav.Item>
                                                            <Nav.Item>
                                                                <Nav.Link eventKey="PolicyForms" className="d-flex flex-column justify-content-center align-items-center" >
                                                                    <img src={require("./../../../assets/images/icon-download-form.svg")} alt="" />
                                                                    <h2>Policy Servicing <br /> Forms</h2>
                                                                </Nav.Link>
                                                            </Nav.Item>

                                                        </Nav>
                                                    </Col>
                                                </Row>

                                                <Tab.Content className="aboutTabContent">
                                                    <Tab.Pane eventKey="Individual">
                                                        <h2 className="titleclose pb-3 text-left">Products List</h2>
                                                        <div className="download-list-block">
                                                            <Row>
                                                                {downloadCategoryData.map((item, i) => {
                                                                    return (
                                                                        item.category_type === "individual" && 'downloads' in item ? (
                                                                            <Col lg="12" sm="12" key={i}>

                                                                                <div className="download-accordion">
                                                                                    <h3>{item.display_name}</h3>
                                                                                    <Accordion>
                                                                                        {item.downloads.map((item1, j) => {
                                                                                            return (
                                                                                                <Card key={j}>
                                                                                                    <Accordion.Toggle as={Button} variant="link" eventKey={j} onClick={(e) => this.toggleAccordianBtn(e)} >
                                                                                                        {item1.title}
                                                                                                    </Accordion.Toggle>
                                                                                                    <Accordion.Collapse eventKey={j}>
                                                                                                        <Card.Body>
                                                                                                            {'download_subitems' in item1 ? (
                                                                                                                <ul className="prod-list">
                                                                                                                    {item1.download_subitems.map((item2, k) => (
                                                                                                                        <li key={k}><a target="_blank" rel="noopener noreferrer" href={AppConstant.IMG_BASE_URL + item2.attachment[0].url} > {item2.title}</a><span> ({item2.attachment[0].size} KB)</span></li>
                                                                                                                    ))}
                                                                                                                </ul>
                                                                                                            ) : (null)}

                                                                                                        </Card.Body>
                                                                                                    </Accordion.Collapse>
                                                                                                </Card>
                                                                                            )
                                                                                        })}

                                                                                        {/* {typeof downloadProductData["Individual"][item.display_name]!=='undefined'?(
                                                                                            downloadProductData["Individual"][item.display_name].map((cItem,cI)=>{
                                                                                                return (
                                                                                                    <Card key={`c${cI}`}>
                                                                                                        <Accordion.Toggle as={Button} variant="link" eventKey={`custom${cI}`} onClick={(e) => this.toggleAccordianBtn(e)} >
                                                                                                            {cItem.title}
                                                                                                        </Accordion.Toggle>
                                                                                                        <Accordion.Collapse eventKey={`custom${cI}`}>
                                                                                                            <Card.Body>
                                                                                                                {'download_subitems' in cItem ? (
                                                                                                                    <ul className="prod-list">
                                                                                                                        {cItem.download_subitems.map((item2, k) => (
                                                                                                                            <li key={k}><a target="_blank" rel="noopener noreferrer" href={AppConstant.IMG_BASE_URL + item2.attachment[0].url} > {item2.title}</a><span> ({item2.attachment[0].size} KB)</span></li>
                                                                                                                        ))}
                                                                                                                    </ul>
                                                                                                                ) : (null)}
    
                                                                                                            </Card.Body>
                                                                                                        </Accordion.Collapse>
                                                                                                    </Card>
                                                                                                )
                                                                                            })
                                                                                        ):null} */}

                                                                                    </Accordion>
                                                                                </div>
                                                                            </Col>
                                                                        ) : ""
                                                                    );
                                                                })}
                                                            </Row>
                                                        </div>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="Business">
                                                        <h2 className="titleclose pb-3 text-left">Products List</h2>
                                                        <div className="download-list-block">
                                                            <Row>
                                                                {downloadCategoryData.map((item, i) => {
                                                                    return (
                                                                        item.category_type === "business" && 'downloads' in item ? (
                                                                            <Col lg="12" sm="12" key={i}>

                                                                                <div className="download-accordion">
                                                                                    <h3>{item.display_name}</h3>
                                                                                    <Accordion>
                                                                                        {item.downloads.map((item1, j) => {
                                                                                            return (
                                                                                                <Card key={j}>
                                                                                                    <Accordion.Toggle as={Button} variant="link" eventKey={j} onClick={(e) => this.toggleAccordianBtn(e)} >
                                                                                                        {item1.title}
                                                                                                    </Accordion.Toggle>
                                                                                                    <Accordion.Collapse eventKey={j}>
                                                                                                        <Card.Body>
                                                                                                            {'download_subitems' in item1 ? (
                                                                                                                <ul className="prod-list">
                                                                                                                    {item1.download_subitems.map((item2, k) => (
                                                                                                                        <li key={k}><a target="_blank" rel="noopener noreferrer" href={AppConstant.IMG_BASE_URL + item2.attachment[0].url} > {item2.title}</a><span> ({item2.attachment[0].size} KB)</span></li>
                                                                                                                    ))}
                                                                                                                </ul>
                                                                                                            ) : (null)}

                                                                                                        </Card.Body>
                                                                                                    </Accordion.Collapse>
                                                                                                </Card>
                                                                                            )
                                                                                        })}

                                                                                        {/* {typeof downloadProductData["Business"][item.display_name]!=='undefined'?(
                                                                                            downloadProductData["Business"][item.display_name].map((cItem,cI)=>{
                                                                                                return (
                                                                                                    <Card key={`c${cI}`}>
                                                                                                        <Accordion.Toggle as={Button} variant="link" eventKey={`custom${cI}`} onClick={(e) => this.toggleAccordianBtn(e)} >
                                                                                                            {cItem.title}
                                                                                                        </Accordion.Toggle>
                                                                                                        <Accordion.Collapse eventKey={`custom${cI}`}>
                                                                                                            <Card.Body>
                                                                                                                {'download_subitems' in cItem ? (
                                                                                                                    <ul className="prod-list">
                                                                                                                        {cItem.download_subitems.map((item2, k) => (
                                                                                                                            <li key={k}><a target="_blank" rel="noopener noreferrer" href={AppConstant.IMG_BASE_URL + item2.attachment[0].url} > {item2.title}</a><span> ({item2.attachment[0].size} KB)</span></li>
                                                                                                                        ))}
                                                                                                                    </ul>
                                                                                                                ) : (null)}
    
                                                                                                            </Card.Body>
                                                                                                        </Accordion.Collapse>
                                                                                                    </Card>
                                                                                                )
                                                                                            })
                                                                                        ):null} */}

                                                                                    </Accordion>
                                                                                </div>
                                                                            </Col>
                                                                        ) : ""
                                                                    );
                                                                })}
                                                            </Row>
                                                        </div>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="Rural">
                                                        <h2 className="titleclose pb-3 text-left">Products List</h2>
                                                        <div className="download-list-block">
                                                            <Row>
                                                                {downloadCategoryData.map((item, i) => {
                                                                    return (
                                                                        item.category_type === "rural" && 'downloads' in item ? (
                                                                            <Col lg="12" sm="12" key={i}>
                                                                                <div className="download-accordion">
                                                                                    <h3>{item.display_name}</h3>
                                                                                    <Accordion>
                                                                                        {item.downloads.map((item1, j) => {
                                                                                            return (
                                                                                                <Card key={j}>
                                                                                                    <Accordion.Toggle as={Button} variant="link" eventKey={j} onClick={(e) => this.toggleAccordianBtn(e)} >
                                                                                                        {item1.title}
                                                                                                    </Accordion.Toggle>
                                                                                                    <Accordion.Collapse eventKey={j}>
                                                                                                        <Card.Body>
                                                                                                            {'download_subitems' in item1 ? (
                                                                                                                <ul className="prod-list">
                                                                                                                    {item1.download_subitems.map((item2, k) => (
                                                                                                                        <li key={k}><a target="_blank" rel="noopener noreferrer" href={AppConstant.IMG_BASE_URL + item2.attachment[0].url} > {item2.title}</a><span> ({item2.attachment[0].size} KB)</span></li>
                                                                                                                    ))}
                                                                                                                </ul>
                                                                                                            ) : (null)}

                                                                                                        </Card.Body>
                                                                                                    </Accordion.Collapse>
                                                                                                </Card>
                                                                                            )
                                                                                        })}
                                                                                        {typeof downloadProductData["Rural"][item.display_name]!=='undefined'?(
                                                                                            downloadProductData["Rural"][item.display_name].map((cItem,cI)=>{
                                                                                                return (
                                                                                                    <Card key={`c${cI}`}>
                                                                                                        <Accordion.Toggle as={Button} variant="link" eventKey={`custom${cI}`} onClick={(e) => this.toggleAccordianBtn(e)} >
                                                                                                            {cItem.title}
                                                                                                        </Accordion.Toggle>
                                                                                                        <Accordion.Collapse eventKey={`custom${cI}`}>
                                                                                                            <Card.Body>
                                                                                                                {'download_subitems' in cItem ? (
                                                                                                                    <ul className="prod-list">
                                                                                                                        {cItem.download_subitems.map((item2, k) => (
                                                                                                                            <li key={k}><a target="_blank" rel="noopener noreferrer" href={AppConstant.IMG_BASE_URL + item2.attachment[0].url} > {item2.title}</a><span> ({item2.attachment[0].size} KB)</span></li>
                                                                                                                        ))}
                                                                                                                    </ul>
                                                                                                                ) : (null)}
    
                                                                                                            </Card.Body>
                                                                                                        </Accordion.Collapse>
                                                                                                    </Card>
                                                                                                )
                                                                                            })
                                                                                        ):null}
                                                                                    </Accordion>
                                                                                </div>
                                                                            </Col>
                                                                        ) : ""
                                                                    );
                                                                })}
                                                            </Row>
                                                        </div>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="PolicyForms">
                                                        <h2 className="titleclose pb-3 text-left">Language List</h2>
                                                        <div className="download-list-block">
                                                            <Row>
                                                                {downloadCategoryData.map((item, i) => {
                                                                    return (
                                                                        item.category_type === "policy_servicing_forms" && 'downloads' in item ? (
                                                                            <Col lg="12" sm="12" key={i}>
                                                                                <div className="download-accordion">
                                                                                    <h3>{item.display_name}</h3>
                                                                                    {item.downloads.map((item1, j) => {
                                                                                        return (
                                                                                            <div key={j}>
                                                                                                {'download_subitems' in item1 ? (
                                                                                                    <ul className="prod-list">
                                                                                                        {item1.download_subitems.map((item2, k) => (
                                                                                                            <li key={k}><a target="_blank" rel="noopener noreferrer" href={AppConstant.IMG_BASE_URL + item2.attachment[0].url} > {item2.title}</a><span> ({item2.attachment[0].size} KB)</span></li>
                                                                                                        ))}
                                                                                                    </ul>
                                                                                                ) : (null)
                                                                                                }
                                                                                            </div>
                                                                                        )
                                                                                    })
                                                                                    }
                                                                                    {typeof downloadProductData["policy_servicing_forms"][item.display_name]!=='undefined'?(
                                                                                            downloadProductData["policy_servicing_forms"][item.display_name].map((cItem,cI)=>{
                                                                                                return (
                                                                                                    <div key={`c${cI}`}>
                                                                                                        {'download_subitems' in cItem ? (
                                                                                                            <ul className="prod-list">
                                                                                                                {cItem.download_subitems.map((item2, k) => (
                                                                                                                    <li key={k}><a target="_blank" rel="noopener noreferrer" href={AppConstant.IMG_BASE_URL + item2.attachment[0].url} > {item2.title}</a><span> ({item2.attachment[0].size} KB)</span></li>
                                                                                                                ))}
                                                                                                            </ul>
                                                                                                        ) : (null)
                                                                                                        }
                                                                                                    </div>
                                                                                                    
                                                                                                )
                                                                                            })
                                                                                        ):null}


                                                                                </div>
                                                                            </Col>
                                                                        ) : (null)
                                                                    );
                                                                })}
                                                            </Row>
                                                        </div>
                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </Tab.Container>
                                        </div>
                                    </div>
                                ) : (
                                        <p className="text-center">No record found!</p>
                                    )}
                            </>
                        )}

                </BaseComponent>
            </>
        );
    }
}

export default Downloads;
