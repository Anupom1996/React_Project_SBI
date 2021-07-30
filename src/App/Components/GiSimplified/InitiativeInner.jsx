import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import * as AppConstant from "../AppConstant";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Axios from "../../Services/Shared/Axios";
import CardLink from "./common/CardLink";
import { textTruncate } from "../AppConstant";
import { isMobile } from "react-device-detect";

class InitiativeInner extends Component {
  state = {
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
    presentInitiative: {},
    Initiatives: [],
  };
  getInitiativesDetails = (slug) => {
    const url = `/markinitiatives?slug=${slug}`;
    if (!!slug) {
      Axios({
        method: "get",
        url: url,
      })
        .then((res) => {
          let newEntry = {
            id: res.data[0].id,
            slug: res.data[0].slug,
            title: res.data[0].title,
            description: res.data[0].description,
            imageUrl: res.data[0].image.url,
            imageName: res.data[0].image.name,
            category: res.data[0].marketingcat.marketing_cat,
          };
          this.setState({
            presentInitiative: newEntry,
          });
          //Get Initiative List
          const category = newEntry.category.split(" ")[0];
          this.getInitiativeList(category);
        })
        .catch((err) => {
          console.log(err);
          console.log("|Error|");
        });
    }
  };
  getInitiativeList = (category) => {
    let Initiatives = [];
    Axios({
      method: "get",
      url: `/markinitiatives?marketingcat.marketing_cat=${category}%20Insurance`,
    })
      .then((res) => {
        const { data } = res;
        if ((data && data.length) > 0) {
          for (const initiative of data) {
            let newEntry = {
              id: initiative.id,
              title: initiative.title,
              slug: initiative.slug,
              description: textTruncate(
                initiative.description.replace(/<(.|\n)*?>/g, ""),
                85
              ),
              imageUrl: initiative.image.url,
              imageName: initiative.image.name,
            };
            Initiatives.push(newEntry);
          }
          this.setState({
            Initiatives,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        console.log("|Error|");
      });
  };

  componentDidMount() {
    this.getInitiativesDetails(this.props.match.params.slug);
  }

  render() {
    const { presentInitiative, Initiatives } = this.state;
    return (
      <div>
        {!!presentInitiative ? (
          <div className="kn-blg-details">
            <div className="kn-blg-head">
              {isMobile ? (
                <h3>{ReactHtmlParser(presentInitiative.title)}</h3>
              ) : (
                <div className="kn-blg-head-a">
                  {" "}
                  <Link to={{pathname: "/gi-simplified/marketing-initiatives", state:{category:presentInitiative.category}}}>
                    <img
                      src={require("../../assets/images/next-brt.png")}
                      alt=""
                    />
                  </Link>
                  <h3>{ReactHtmlParser(presentInitiative.title)}</h3>
                </div>
              )}
            </div>
            <div className="kn-blg-cont-main">
              <figure>
                <img
                  src={AppConstant.IMG_BASE_URL + presentInitiative.imageUrl}
                  alt={presentInitiative.imageName}
                />
              </figure>
              <p>{ReactHtmlParser(presentInitiative.description)}</p>
            </div>
          </div>
        ) : null}
        {Initiatives.length > 0 ? (
          <div className="kn-rld-post">
            <h3>Related Marketing Initiatives</h3>
            <div className="kn-relaed">
              <OwlCarousel
                className="owl-theme"
                loop
                autoplay={true}
                margin={20}
                nav={true}
                dots={true}
                //dotsEach={true}
                //items={4}
                responsive={this.state.responsive}
              >
                {Initiatives.map((initiative) => (
                  <CardLink
                    key={initiative.id}
                    link={`/gi-simplified/marketing-initiative/${initiative.slug}`}
                    title={initiative.title}
                    description={initiative.description}
                    imageUrl={initiative.imageUrl}
                    imageName={initiative.imageName}
                    date={initiative.date}
                  />
                ))}
              </OwlCarousel>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default InitiativeInner;
