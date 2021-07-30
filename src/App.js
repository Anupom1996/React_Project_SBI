import React, { Component } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App/assets/css/style.css";
import "./App/assets/css/custom.css";
import "./App/assets/css/responsive.css";
import "./App/assets/css/all.css";
import { StickyContainer } from 'react-sticky';
import Routes from "./App/Components/Common/Routes/Routes";

class App extends Component {
  render() {
    
    return (
      <StickyContainer>
        <Routes />
      </StickyContainer>
    );
  }
  
}

export default App;
