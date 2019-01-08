import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Link } from "react-router-dom";
import { actionCreators } from "./store";
import "./indes.scss";

class Header extends Component {
  constructor() {
    super();
    // this.handleSearch = this.handleSearch.bind(this);
  }

  render() {
    const { handleInputChange, searchTxt } = this.props;
    return (
      <div className="header-wrapper">
        <div className="m-ct">
          <div className="header-logo" />
          <div className="header-search">
            <input
              type="text"
              className="search-input"
              placeholder="请搜索作者或书名"
              onChange={handleInputChange}
            />
            <Link to={"/search?keywords=" + searchTxt} className="search-btn" />
          </div>
        </div>
      </div>
    );
  }
  // handleSearch(){
  // this.context.router.history.push("/search");
  // BrowserRouter.push({
  // pathname:'/search',
  // })
  // alert(1)
  // }
}

const mapStateProps = state => {
  return {
    searchTxt: state.getIn(["header", "searchTxt"])
  };
};

const mapDispatchProps = dispatch => {
  return {
    // handleSearch() {
    //   dispatch(actionCreators.getSearch());
    // },
    handleInputChange(e) {
      dispatch(actionCreators.changeSearchTxt(e.target.value));
    }
  };
};

export default connect(
  mapStateProps,
  mapDispatchProps
)(Header);
