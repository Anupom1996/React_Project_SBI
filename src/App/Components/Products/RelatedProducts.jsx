import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { withRouter } from "react-router-dom";
import rpData from "../../assets/relatedProducts.json";

// this.props.location.pathname.split('/')[1]

class RelatedProducts extends Component {
  constructor(props) {
    super(props);

    let productSlug = this.props.location.pathname.split("/");
    let productKey = "";
    if (productSlug.length === 2) {
      productKey = productSlug[1];
    } else if (productSlug.length === 3) {
      productKey = productSlug[2];
    }

    let productCategory = this.props.category;

    this.state = {
      responsive: {
        0: {
          items: 1,
          nav: "ture",
          margin: 0
        },
        991: {
          items: 1,
          nav: "ture",
          margin: 0
        },
        1023: {
          items: 3,
          nav: "ture"
        },
        1400: {
          items: 3,
          nav: "ture"
        }
      },
      category: productCategory,
      productType: productKey
    };
  }

  render() {
    let { category, productType } = this.state;
    let sbiHomeData = localStorage.getItem("phrases") ? JSON.parse(localStorage.getItem("phrases")) : null;
    let lang_name = localStorage.getItem("lang_name") ? localStorage.getItem("lang_name") : 'en';
    

      
    if (lang_name === 'en') {
      // key_feature = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_en;
     

    }
    else {
      // key_feature = sbiHomeData && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'] && sbiHomeData['PRODUCTS_CORPORATE_MONEY_TEXT2'].content_hi;
     

    }
    return (
      <section className="relatedWrapper">
        <Container>
          <h5 className="htitle text-center">Related Products</h5>
          <div className="relatedContainer">
            <OwlCarousel
              className="owl-theme supporting"
              loop
              autoplay={true}
              margin={40}
              responsive={this.state.responsive}
            >
              {rpData.map((item, index) =>
                category === item.category && productType !== item.key ? (
                  <div className="item" key={index}>
                    <Link to={item.productUrl}>
                      <div className="productImg">
                        <figure>
                          <img
                            src={require("../../assets/images/product-icons/" +
                              item.icon)}
                            alt=""
                          />
                        </figure>
                      </div>
                      <p>{item.productName}</p>
                    </Link>
                  </div>
                ) : null
              )}
            </OwlCarousel>
          </div>
        </Container>
      </section>
    );
  }
}

export default withRouter(RelatedProducts);
