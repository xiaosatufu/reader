import React, { Component } from 'react'


class NewBooks extends Component {
    render(){
        return(
             <div className="books-box">
              <div className="title">
                <i className="icon icon-man" />
                <span>男频新书</span>
                <a href="/selection/npxsqx" className="more">
                  查看更多
                  <span className="arrow-more" />
                </a>
              </div>
              <div className="books-verticale-list">
                <a href="/book/5885dd5a0104cb1d7c842cf2" className="book">
                  <img
                    src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1422043%2F1422043_96e63420a9bf42849dcd3ae1dd2c63cb.jpg%2F"
                      
                    alt="武道神尊"
                    className="cover"
                  />
                  <div className="text-block">
                    <p className="name" title="武道神尊">
                      武道神尊
                    </p>
                    <p className="author">笑笑书生</p>
                  </div>
                </a>

                <a href="/book/5a0e842dd513760264062b1e" className="book">
                  <img
                    src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2182004%2F2182004_55935125817b47cd955a295f1450b2ec.jpg%2F"
                      
                    alt="军武大帝"
                    className="cover"
                  />
                  <div className="text-block">
                    <p className="name" title="军武大帝">
                      军武大帝
                    </p>
                    <p className="author">悲伤的狗</p>
                  </div>
                </a>

                <a href="/book/5620e0e43c9e86220ed831db" className="book">
                  <img
                    src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F848897%2F848897_d37f65135af24351b69eb12a15d239a0.jpg%2F"
                      
                    alt="万道独尊"
                    className="cover"
                  />
                  <div className="text-block">
                    <p className="name" title="万道独尊">
                      万道独尊
                    </p>
                    <p className="author">魂圣</p>
                  </div>
                </a>

                <a href="/book/5743e5866a3ecd697140ab32" className="book">
                  <img
                    src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1187242%2F_1187242_429836.jpg%2F"
                      
                    alt="诸天重生"
                    className="cover"
                  />
                  <div className="text-block">
                    <p className="name" title="诸天重生">
                      诸天重生
                    </p>
                    <p className="author">漫漫天生</p>
                  </div>
                </a>
              </div>
            </div>
         
        )
    }
}


export default NewBooks