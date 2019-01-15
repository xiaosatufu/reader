import React, { Component } from "react";

import { actionCreators } from "../store";
// import * as staticAPI from "../../api/staticAPI";
import * as staticAPI from "../../../api/staticAPI";
import { connect } from "react-redux";

class Ranking extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props)
  }
  render() {
    // const {rank}
    const { rankingList } = this.props;
    return (
      <div className="ranking">
        <div className="ranking-block">
          <div className="title">
            <i className="icon icon-ranking" />
            <span className="name">排行榜</span>
            <a href="/ranking" className="more">
              全部
              <span className="arrow-more" />
            </a>
          </div>
          <div className="ranking-nav">
            <span id="ranking-male" className="active">
              男生榜
            </span>
            <span className="verticaleLine">|</span>
            <span id="ranking-female" className="">
              女生榜
            </span>
          </div>
          <div id="ranking-list" className="ranking-list">
            <div className="male-list">
              {rankingList.map((item, index) => {
                if (index === 0) {
                  return (
                    <a href="/book/5816b415b06d1d32157790b1" className="first">
                      <div
                        className="num-index clearfix"
                        style={{ width: "70px" }}
                      >
                        <span className="No No1">{index + 1}</span>

                        <img
                          className="cover"
                          src={staticAPI.staticAPI + item.cover}
                          alt=""
                        />
                      </div>
                      <div className="text-block">
                        <p className="name">{item.title}</p>

                        <p className="latelyFollower">
                          <span>{item.latelyFollower} 万</span>人气
                        </p>
                      </div>
                    </a>
                  );
                } else {
                  return (
                    <a href="/book/55eef8b27445ad27755670b9" className="">
                      <div
                        className="num-index clearfix"
                        style={{ width: "auto" }}
                      >
                        <span className="No No2">{index + 1}</span>
                      </div>
                      <div className="text-block">
                        <p className="name">{item.title}</p>

                        <p className="latelyFollower">
                          <span>{item.latelyFollower} 万</span>人气
                        </p>
                      </div>
                    </a>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  null
)(Ranking);
