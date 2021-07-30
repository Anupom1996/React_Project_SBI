import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import Axios from "../../../Services/Shared/Axios";

class DevelopingYoungLeadersContent extends Component {
    constructor() {
        super();
        this.state = {
            pageData: [],
            showLoader: true
        };
    }

    getPageContent = () => {
        Axios({
            method: "get",
            url: "/pages?slug=developing-young-leaders"
        })
            .then(res => {
                this.setState({
                    pageData: res.data,
                    showLoader: false
                });
            })
            .catch(err => {
                console.log(err);
                console.log("|Page Error|");
            });
    };

    componentDidMount() {
        this.getPageContent();
    }

    render() {
        const { pageData } = this.state;
        return (
            <>
                {this.state.showLoader ? (
                    null
                ) : (

                        <section className="life-at-sbig-section">
                            {ReactHtmlParser(pageData[0].description)}
                        </section>
                    )}
            </>
        )
    }
}

export default DevelopingYoungLeadersContent;