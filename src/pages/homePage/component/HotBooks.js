import React, { Component } from "react";

class HotBooks extends Component {
  render() {
    return (
      <div className="m-hot-serach">
        <div className="title">大家都在搜</div>
        <div className="list">
          <a
            href="/search?val=%E8%B6%85%E7%BA%A7%E5%85%B5%E7%8E%8B"
            target="_blank"
          >
            超级兵王
          </a>

          <a href="/search?val=%E5%89%83%E5%A4%B4%E5%8C%A0" target="_blank">
            剃头匠
          </a>

          <a
            href="/search?val=%E6%88%91%E7%9A%84%E7%BB%9D%E8%89%B2%E6%80%BB%E8%A3%81%E6%9C%AA%E5%A9%9A%E5%A6%BB"
            target="_blank"
          >
            我的绝色总裁未婚妻
          </a>

          <a
            href="/search?val=%E4%B8%80%E4%BB%A3%E8%AF%A1%E5%A6%83"
            target="_blank"
          >
            一代诡妃
          </a>

          <a
            href="/search?val=%E9%80%8F%E8%A7%86%E5%B0%8F%E4%B9%A1%E6%B0%91"
            target="_blank"
          >
            透视小乡民
          </a>
        </div>
      </div>
    );
  }
}

export default HotBooks;
