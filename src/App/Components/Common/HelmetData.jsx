import React, { Component } from "react";
import { Helmet } from "react-helmet";
import helmetData from "../../assets/helmetData.json";

class HelmetData extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      pageComponentHelmetData: this.getPageComponentHelmetData(
        this.props.pageComponentType
      )
    };
  }

  render() {
    return (
      <>
        {this.state.pageComponentHelmetData ? (
          <Helmet>
            <title>{this.state.pageComponentHelmetData.metaTitle}</title>
            <meta
              name="title"
              content={this.state.pageComponentHelmetData.metaTitle}
            />
            <meta
              name="description"
              content={this.state.pageComponentHelmetData.metaDescription}
            />
            <meta
              name="keywords"
              cpntent={this.state.pageComponentHelmetData.keywords}
            />
            <link rel="canonical" href={this.state.pageComponentHelmetData.canonical} />
          </Helmet>
        ) : null}
      </>
    );
  }

  getPageComponentHelmetData = pageType => {
    if (helmetData) {
      let index = helmetData.findIndex(x => x.pageComponent === pageType);
      //console.log(index);
      if (index > -1) {
        return helmetData[index];
      } 
    }
    else{
      return null;
    }
    

    
  };
}

export default HelmetData;
