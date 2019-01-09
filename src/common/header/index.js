import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Link } from "react-router-dom";
import { actionCreators } from "./store";
import {actionCreators as searchActionCreators} from '../../pages/searchPage/store'
import "./index.scss";

class Header extends Component {
  constructor() {
    super();
    this.state ={
      value:""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  render() {
    // const {  searchTxt } = this.props;
    const {handleSearch} = this.props
    return (
      <div className="header-wrapper">
        <div className="m-ct clearfix">
          <div className="header-logo" />
          <div className="header-search">
            <input
              type="text"
              className="search-input"
              placeholder="请搜索作者或书名"
              onChange={this.handleInputChange}
              value={this.state.value}
            />
            {/* <Link to={"/search?keywords="+this.state.value } className="search-btn" onClick={()=>handleSearch(this.state.value)} /> */}
            <Link to={{
              pathname:'/search',
              search:'?keywords='+ this.state.value,
              state:{
                searchTxt:this.state.value
              }

             }} className="search-btn" onClick={()=>handleSearch(this.state.value)} />
          </div>
        </div>
        <div className="header-nav">
          <ul>
            <li><Link to={"/"}>  首页</Link></li>
            <li><Link to={"/"}>  精选</Link></li>
            <li><Link to={"/"}>  分类</Link></li>
            <li><Link to={"/"}>  书单</Link></li>
            <li><Link to={"/"}>  排行榜</Link></li>
            <li><Link to={"/"}>  客户端</Link></li>
          </ul>
        </div>
      </div>
    );
  }
  handleInputChange(e) {
    console.log(e.target.value)
    this.setState({
      value:e.target.value
    })
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
    // searchTxt: state.getIn(["header", "searchTxt"])
  };
};

const mapDispatchProps = dispatch => {
  return {
    handleSearch(keyword) {
      dispatch(searchActionCreators.searchBooks(keyword));
    },
    // handleInputChange(e) {
    //   dispatch(actionCreators.changeSearchTxt(e.target.value));
    // }
  };
};

export default connect(
  mapStateProps,
  mapDispatchProps
)(Header);
