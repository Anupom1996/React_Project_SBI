import React, { Component } from "react";
import { Link } from "react-router-dom";
import HelmetData from "./Common/HelmetData";
import BaseComponent from "../Components/BaseComponent";
class NotFound extends Component {
  render() {
    return (
      // <div className="page-not-found">
      <div>
        {/* <Helmet> */}
        <BaseComponent>
          <HelmetData pageComponentType="NotFound" />
         
          <section className="container-with-no-padding container">        
            <div className="innerpageBanner row">            
              <div className="col-8  align-items-center" >
                <div className="page-not-found">
                  <figure className="not-found-image">
                    <img src={require("../../../src/App/assets/images/image-404.png")} alt="" />
                  </figure>
                  <h2>Article not found</h2>
                  <h3>The page you requested cannot be found</h3>
                  <Link to="/" className="btn-home">Return to the Homepage</Link>              
                </div>            
              </div>
            </div>
          </section>
        </BaseComponent>
      </div>
    );
  }
}

export default NotFound;
