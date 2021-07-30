import React, { Component } from "react";

import swal from "sweetalert";
import Axios from "../../../Services/Shared/Axios";
import * as AppConstant from "../../AppConstant";
import HelmetData from "../../Common/HelmetData";

class PublicDisclosures extends Component {
  constructor() {
    super();
    this.state = {
      pageData: [],
      fyList: [],
      selectedQuarter: "First",
      selectedFiscalYear: "1",
      showLoader: true,
      showDropdownLoaer: true
    };
  }

  getPageContent = () => {
    let quarter = this.state.selectedQuarter;
    let fiscalYear = this.state.selectedFiscalYear;
    let pageUrl =
      "/publicdisclosures?financialyear=" +
      fiscalYear +
      "&quarter=" +
      quarter +
      "&publish=true&_sort=form_no:asc";
    Axios({
      method: "get",
      url: pageUrl
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

  getFyList = () => {
    let pageUrl = "financialyears?publish=true&_sort=financial_year:asc";
    Axios({
      method: "get",
      url: pageUrl
    })
      .then(res => {
        this.setState({
          fyList: res.data
        });
        this.getCurrentFiscalYear();
        this.getCurrentQuarter();
        this.getPageContent();
      })
      .catch(err => {
        console.log(err);
        console.log("|Page Error|");
      });
  };

  componentDidMount = () => {
    this.getFyList();
  };

  getCurrentQuarter = () => {
    let curMonth = new Date().getMonth() + 1;
    let currentQuarter = "";
    if (curMonth === 1 || curMonth === 2 || curMonth === 3) {
      currentQuarter = "Fourth";
    } else if (curMonth === 4 || curMonth === 5 || curMonth === 6) {
      currentQuarter = "First";
    } else if (curMonth === 7 || curMonth === 8 || curMonth === 9) {
      currentQuarter = "Second";
    } else if (curMonth === 10 || curMonth === 11 || curMonth === 12) {
      currentQuarter = "Third";
    }
    this.setState({
      selectedQuarter: currentQuarter
    });
  };

  getCurrentFiscalYear = () => {
    let curMonth = new Date().getMonth() + 1;
    let curYear = new Date().getFullYear();
    let prevYear = curYear - 1;
    let nextYear = curYear + 1;
    let currentFiscalYear = "";
    if (curMonth === 1 || curMonth === 2 || curMonth === 3) {
      currentFiscalYear = "FY " + prevYear + "-" + curYear;
    } else {
      currentFiscalYear = "FY " + curYear + "-" + nextYear;
    }
    let fyList = this.state.fyList;
    let currentFiscalYearId = "1";
    fyList.map(listItem => {
      if (listItem.financial_year === currentFiscalYear) {
        currentFiscalYearId = listItem.id;
      }
      return true;
    });
    this.setState({
      selectedFiscalYear: currentFiscalYearId,
      showDropdownLoaer: false
    });
  };

  searchSelectedQuarter = event => {
    this.setState({
      selectedQuarter: event.target.value
    });
  };

  searchSelectedFiscalYear = event => {
    this.setState({
      selectedFiscalYear: event.target.value
    });
  };

  searchSubmit = () => {
    this.getPageContent();
  };

  showSuccessAlert = successTxt => {
    swal({
      text: successTxt,
      icon: "success"
    }).then(() => {});
  };

  showErrorAlert = errTxt => {
    swal({
      text: errTxt,
      icon: "error"
    }).then(() => {});
  };

  render() {
    const { pageData, fyList } = this.state;
    return (
      <div className="PDTabCont">
        {/* <Helmet> */}
        <HelmetData pageComponentType="PublicDisclosures" />

        <div className="searchSec">
          <div>
            <>
              {this.state.showDropdownLoaer ? (
                <div style={{ minWidth: "340px" }}>
                  <div className="loader line"></div>
                  <div className="loader line"></div>
                </div>
              ) : (
                <select
                  autoComplete="off"
                  className="styleSelect"
                  onChange={this.searchSelectedFiscalYear}
                  value={this.state.selectedFiscalYear}
                >
                  {fyList &&
                    fyList.length > 0 &&
                    fyList.map((item, index) => (
                      <option value={item.id} key={index}>
                        {item.financial_year}
                      </option>
                    ))}
                </select>
              )}
            </>
          </div>
          <div>
            <>
              {this.state.showDropdownLoaer ? (
                <div style={{ minWidth: "340px" }}>
                  <div className="loader line"></div>
                  <div className="loader line"></div>
                </div>
              ) : (
                <select
                  autoComplete="off"
                  className="styleSelect"
                  onChange={this.searchSelectedQuarter}
                  value={this.state.selectedQuarter}
                >
                  <option value="First">First Quarter</option>
                  <option value="Second">Second Quarter</option>
                  <option value="Third">Third Quarter</option>
                  <option value="Fourth">Fourth Quarter</option>
                </select>
              )}
            </>
          </div>
          <div>
            <>
              {this.state.showDropdownLoaer ? null : (
                <button
                  type="button"
                  className="btn btn-default stylebtn greenButBg"
                  onClick={this.searchSubmit}
                >
                  Apply
                </button>
              )}
            </>
          </div>
        </div>
        {this.state.showDropdownLoaer ? null : (
          <div className="statementSec">
            {pageData.length > 0 ? (
              <ul className="statementList">
                {pageData.map((item, index) => (
                  <li key={index}>
                    <div className="itemSec">
                      <div>{item.form_no}</div>
                      <div>
                        {item.pdf_file && item.pdf_file.url ? (
                          <a
                            href={AppConstant.IMG_BASE_URL + item.pdf_file.url}
                            className=""
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={require("./../../../assets/images/pdfIcon.svg")}
                              alt=""
                            />
                            {item.description}
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center">No record found!</p>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default PublicDisclosures;
