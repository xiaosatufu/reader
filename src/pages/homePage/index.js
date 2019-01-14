import React, { Component } from "react";

import { connect } from "react-redux";

import { actionCreators } from "./store";

import Category from "./component/Category";
import { fromJS } from "immutable";
import "./index.scss";
// import { actionCreators } from

class HomePage extends Component {
  componentDidMount() {
    this.props.getCategory();
  }

  render() {
    const { catrgories } = this.props;
    console.log(this.props.catrgories);
    console.log(catrgories);
    // const dsdd = catrgories.toJS()
    // const maleArr = catrgories.male
    // console.log
    return (
      <div className="m-ct page-home">
        <div className="content-left">
          {catrgories.male && <Category name="male" categoryInfo={catrgories.male} />}
          {catrgories.female && <Category name="female" categoryInfo={catrgories.female} />}
          {catrgories.press && <Category name="press" categoryInfo={catrgories.press} />}
        </div>
        <div className="content-right">3</div>
      </div>
    );
  }
}

const mapDispatchProps = dispatch => ({
  getCategory() {
    dispatch(actionCreators.getCategory());
  }
});
const mapStateProps = state => ({
  catrgories: state.getIn(["home", "category"])
});

export default connect(
  mapStateProps,
  mapDispatchProps
)(HomePage);
