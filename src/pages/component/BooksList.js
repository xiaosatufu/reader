import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as staticAPI from "../../api/staticAPI";
import {fromJS} from 'immutable'

import "./BookList.scss";

class BooksList extends Component {
  render() {
    const { books } = this.props;
    return (
      <ul className="books-list">
        {fromJS(books).map(item => {
          return (
            <li key={item.get("_id")}>
              <img src={staticAPI.staticAPI + item.get("cover")} alt="" />
              <div className="right-info">
                <h4 className="name">
                  <a href="/book/51d11e782de6405c45000068" target="_blank">
                    {item.get("title")}
                  </a>
                </h4>
                <p className="author">
                  <span>{item.get("author")}</span>
                  <span className="split">|</span>
                  <span className="cat">{item.get("cat")}</span>
                </p>
                <p className="desc">{item.get("shortIntro")}</p>
                <p className="popularity">
                  <span className="c-red">
                    {this.filterLatelyFollower(item.get("latelyFollower"))}
                  </span>
                  人气
                  <span className="split">|</span>
                  <span className="c-red">{item.get("retentionRatio")}%</span>
                  读者留存
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
          );
        })}
      </ul>
    );
  }

  filterLatelyFollower(follower) {
    if (follower >= 10000) {
      return (follower / 10000).toFixed(2) + "万";
    } else {
      return follower;
    }
  }
}

const mapStateProps = state => ({
  books: state.getIn(["search", "books"])
});

export default connect(
  mapStateProps,
  null
)(BooksList);
