import React, { Component } from "react";

import { connect } from "react-redux";

import { actionCreators } from "./store";

import Category from "./component/Category";
import HotBooks from "./component/HotBooks";
import Recommend from "./component/Recommend";
import Comics from "./component/Comics";
import Selected from "./component/Selected";
import NewBooks from "./component/NewBooks";
import Ranking from "./component/Ranking";
import "./index.scss";
// import { actionCreators } from

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.props.getCategory();
    this.props.getRankCategory();
    // this.props.getRanking()
  }

  render() {
    const { catrgories, rankCategory, getRanking, maleRanking } = this.props;
    if (rankCategory.male) {
      const id = rankCategory.male[0]._id;
      // console.log(maleRanking.length)
      // if (maleRanking) return
      // if (maleRanking.length0) {
      if (maleRanking && maleRanking.length > 0) {
      } else {
        getRanking(id);
      }
      // }
    }
    return (
      <div className="m-ct page-home">
        <div className="content-left">
          {catrgories.male && (
            <Category name="male" categoryInfo={catrgories.male.slice(0, 9)} />
          )}
          {catrgories.female && (
            <Category
              name="female"
              categoryInfo={catrgories.female.slice(0, 9)}
            />
          )}
          {catrgories.press && (
            <Category
              name="press"
              categoryInfo={catrgories.press.slice(0, 9)}
            />
          )}
          {/* 排行榜 */}
          {maleRanking.length > 0 ? <Ranking rankingList={maleRanking} /> : ""}
        </div>
        <div className="content-right">
          <div className="m-banner">
            <div className="m-slider">banner</div>
            {/* 热门搜索 */}
            <HotBooks />
          </div>
          {/* 热推 */}
          <Recommend />
          {/* 漫画精选 */}
          <Comics />
          <div className="m-choiceness">
            {/* 男生精选 */}
            <Selected />
            {/* 女生精选 */}
            <Selected />
          </div>
        </div>
        <div className="container">
          <div className="m-books-boxs m-ct">
            {/* 男频新书 */}
            <NewBooks />
            {/* 女频连载 */}
            <NewBooks />
            {/* 男频完本 */}
            <NewBooks />
            {/* 女频完本 */}
            <NewBooks />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchProps = dispatch => ({
  getCategory() {   
    dispatch(actionCreators.getCategory());
  },    
  getRankCategory() {
    dispatch(actionCreators.getRankCategory());
  },   
  getRanking(id) { 
    dispatch(actionCreators.getRanking(id));
  }   
});
const mapStateProps = state => ({
  catrgories: state.getIn(["home", "category"]),
  rankCategory: state.getIn(["home", "rankCategory"]),
  maleRanking: state.getIn(["home", "maleRanking"])
});

export default connect(
  mapStateProps,
  mapDispatchProps
)(HomePage);
