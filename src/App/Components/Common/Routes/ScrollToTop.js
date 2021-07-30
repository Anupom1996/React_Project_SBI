import { Component } from 'react';
import { withRouter } from 'react-router';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    let currPath = this.props.location.pathname;

    if (currPath !== prevProps.location.pathname) {
      if ( currPath!=="/contact-us/branch" && currPath!=="/contact-us/garage" 
      && currPath!=="/contact-us/hospital" && currPath!=="/our-reach"
      && currPath!=="/product/retail" 
      && currPath!=="/product/corporate" 
      && currPath!=="/product/rural" 
      && currPath!=="/product/withdrawn" ) {        
       window.scrollTo(0, 0)
      }
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop);