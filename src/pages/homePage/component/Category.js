import React, { Component } from "react";
import { fromJS } from "immutable";

class Category extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let nameTxt = "";

    const { name, categoryInfo } = this.props;
    if (name === "male") {
      nameTxt = "男生";
    } else if (name === "female") {
      nameTxt = "女生";
    } else {
      nameTxt = "出版";
    }

    return (
      <div className="category">
        <div className="category-block">
          <div className="title">
            <i className="icon icon-man" />
            <span className="name">{nameTxt}</span>
            <a href="/category?gender=male" className="more">
              更多
              <span className="arrow-more" />
            </a>
          </div>
          <div className="category-list">
            {fromJS(categoryInfo).map((item, index) => {
              return (
                <a href="/category?gender=male&amp;type=hot&amp;major=1" key={index}>
                  <p className="name">{item.get('name')}</p>
                  <p className="bookCount">{item.get('bookCount')}</p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
