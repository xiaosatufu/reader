import React, { Component } from "react";

import { connect } from "react-redux";
import { getUrlPrmt } from "../../common/js/utils";
import { actionCreators } from "./store";
import {fromJS} from 'immutable'

import BookList from '../component/BooksList'

import "./index.scss";

class SearchPage extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.location.state)
    // console.log(getUrlPrmt())
  }

  componentDidMount() {
    const keywords = getUrlPrmt().keywords || "大主宰";
    this.props.getSearchBooks(keywords);
  }
  render() {
    const { searchTxt,books,booksTotal } = this.props;
    return (
      <div className="search-wrapper">
        <div className="content">
          <div className="title">
            共<span className="c-red">{booksTotal}</span>条
            <span className="c-red search-val">{this.props.location.state.searchTxt}</span> 相关的搜索结果
          </div>
          <BookList />
          {/* <ul className="books-list">
            <li>
              <img
                src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F41569%2F41569_5b54bf28923d48a3ae352ffbf56f23f8.jpg%2F"
                alt=""
              />
              <div className="right-info">
                <h4 className="name">
                  <a href="/book/51d11e782de6405c45000068" target="_blank">
                    大主宰
                  </a>
                </h4>
                <p className="author">
                  <span>天蚕土豆</span>
                  <span className="split">|</span>
                  <span className="cat">玄幻</span>
                </p>
                <p className="desc">
                  大千世界，位面交汇，万族林立，群雄荟萃，一位位来自下位面的天之至尊，在这无尽世界，演绎着令人向往的传奇，追求着那主宰之路。
                  无尽火域，炎帝执掌，万火焚苍穹。
                  武境之内，武祖之威，震慑乾坤。
                  西天之殿，百战之皇，战威无可敌。
                  北荒之丘，万墓之地，不死之主镇天地。 ......
                  少年自北灵境而出，骑九幽冥雀，闯向了那精彩绝伦的纷纭世界，主宰之路，谁主沉浮？
                  大千世界，万道争锋，吾为大主宰。
                </p>
                <p className="popularity">
                  <span className="c-red">1.74万</span>人气
                  <span className="split">|</span>
                  <span className="c-red">53.01%</span>读者留存
                </p>
              </div>
              <Link
                to={"/book/51d11e782de6405c45000068/1.html"}
                className="btn-read"
                target="_blank"
              >
                开始阅读
              </Link>
            </li>
          </ul> */}
        </div>
      </div>
    );
  }
}

const mapStateProps = state => ({
  books: state.getIn(["search", "books"]),
  booksTotal:state.getIn(["search","totalBooks"])
  // searchTxt:state.getIn(['header','searchTxt'])
});

const mapDispatchProps = dispatch => ({
  getSearchBooks(keywords) {
    dispatch(actionCreators.searchBooks(keywords));
  }
});

export default connect(
  mapStateProps,
  mapDispatchProps
)(SearchPage);
