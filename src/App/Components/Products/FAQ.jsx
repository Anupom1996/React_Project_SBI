import React, { Component } from "react";
import { Button, Accordion, Container, Card } from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import Axios from "../../Services/Shared/Axios";
import { withRouter } from 'react-router-dom';


class FAQ extends Component {

  constructor(props) {
    super(props);

    let productSlug = this.props.location.pathname.split("/");
    let productKey = "";
    if (productSlug.length === 2) {
      productKey = productSlug[1];
    } else if (productSlug.length === 3) {
      productKey = productSlug[2];
    }

    this.state = {
      faqList: [],
      faqSource: this.getFAQData(productKey)
    }
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

  getFAQList = () => {
    let faqSource = this.state.faqSource;
    if (faqSource && faqSource.category) {
      let categoryName = faqSource.category;
      Axios({
        method: "GET",
        url: "/faqsubcategories?faqcategory.name=" + categoryName
      })
        .then(res => {
          this.setState({
            faqList: res.data[0]['faq_ques_ans']
          });
        })
        .catch(err => {
          console.log("Err");
        });
    }
  }

  componentDidMount() {
    this.getFAQList();
  }


  render() {
    let { faqList, faqSource } = this.state;
    return (
      <>
        {faqList.length > 0 ? (
          <section className="faQinsuranceWrapper">
            <Container>
              <div className="faQinsuranceMain">
                <h5 className="htitle text-center">{faqSource.title} FAQ</h5>
                <Accordion defaultActiveKey={0}>
                  {faqList.map((item, i) => {
                    return (
                      <Card key={i}>
                        <Accordion.Toggle as={Button} variant="link" eventKey={i} onClick={(e) => this.toggleAccordianBtn(e)} className={(i === 0) ? 'accordianBtn' : null} >
                          <span>{item.Question}</span>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={i}>
                          <Card.Body>
                            {ReactHtmlParser(item.Answer)}
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    );
                  })}
                </Accordion>
              </div>
            </Container>
          </section>
        ) : (null)}

      </>
    )
  }

  getFAQData(productType) {
    const faqData = [
      {
        key: "group-health-insurance",
        title: "Group Health Insurance",
        category: "Group Health Insurance"
      },
      {
        key: "arogya-premier-policy",
        title: "Arogya Premier",
        category: "Arogya Premier Insurance"
      },
      {
        key: "arogya-topup-policy",
        title: "Arogya Topup",
        category: "Arogya Top up Policy"
      },
      {
        key: "arogya-plus-policy",
        title: "Arogya Plus",
        category: "Arogya Plus Policy"
      },
      {
        key: "health-insurance",
        title: "Health Insurance",
        category: "Health Insurance"
      },
      {
        key: "critical-illness-insurance",
        title: "Critical illness Insurance Policy",
        category: "Critical illness Insurance Policy"
      },
      {
        key: "hospital-daily-cash",
        title: "Hospital Daily Cash",
        category: "Hospital Daily Cash"
      },
      {
        key: "loan-insurance",
        title: "Loan Insurance",
        category: "Loan Insurance"
      },
      {
        key: "commercial-motor-insurance",
        title: "Commercial Motor Insurance",
        category: "Commercial Motor Insurance"
      },
      {
        key: "latent-defects-insurance-policy",
        title: "Latent Defects Insurance Policy",
        category: "Latent Defects Insurance Policy"
      },
      {
        key: "long-term-home-insurance",
        title: "Long Term Home Insurance",
        category: "Long Term Home Insurance"
      },
      {
        key: "simple-home-insurance",
        title: "Simple Home Insurance",
        category: "Simple Home Insurance"
      },
      {
        key: "individual-pa-insurance",
        title: "Individual Personal Accident",
        category: "Individual Personal Accident Insurance Policy"
      },
      {
        key: "travel-insurance",
        title: "Travel Insurance (Business and Holiday)",
        category: "Travel%20Insurance%20(Business%20and%20Holiday)"
      }
    ];

    let index = faqData.findIndex(x => x.key === productType);
    if (index > -1) {
      return faqData[index];
    } else {
      return [];
    }
  }

}

export default withRouter(FAQ);