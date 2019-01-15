import React, { Component } from 'react'

class Comics extends Component {
    render(){
        return (
            
          <div className="m-public">
            <div className="title">
              <a className="name">漫画精选</a>
              <a href="/selection/cxjp" className="more">
                查看更多
                <span className="arrow-more" />
              </a>
            </div>
            <div className="books-verticale-list">
              <a href="/book/5a61b40ebece727a0a23a143" className="book">
                <img
                  src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2209161%2F2209161_8edb77d76a3b4ebf94d1e2a2d79e58e5.jpg%2F"
                  alt="末世凡人"
                  className="cover"
                />
                <div className="text-block">
                  <p className="name" title="末世凡人">
                    末世凡人
                  </p>
                  <p className="author">漫娱文化</p>
                </div>
              </a>

              <a href="/book/5a8003c54351da46cd325def" className="book">
                <img
                  src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2225868%2F2225868_d6fb403eff2e407bbf1a2d43b7c85438.png%2F"
                  alt="全职法师"
                  className="cover"
                />
                <div className="text-block">
                  <p className="name" title="全职法师">
                    全职法师
                  </p>
                  <p className="author">阅文</p>
                </div>
              </a>

              <a href="/book/5954bde3907afd610357c772" className="book">
                <img
                  src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F180667%2F180667_0f7887e0135f458bbd6f69f6b52d2540.jpg%2F"
                    
                  alt="劫天运"
                  className="cover"
                />
                <div className="text-block">
                  <p className="name" title="劫天运">
                    劫天运
                  </p>
                  <p className="author">肥鱼工作室</p>
                </div>
              </a>

              <a href="/book/59e03428c3aa10de76bf537c" className="book">
                <img
                  src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2156329%2F2156329_0f2e8fe8735442eea57af32115583e8c.jpg%2F"
                    
                  alt="撩爱上瘾"
                  className="cover"
                />
                <div className="text-block">
                  <p className="name" title="撩爱上瘾">
                    撩爱上瘾
                  </p>
                  <p className="author">笔锋王座</p>
                </div>
              </a>

              <a href="/book/5c2438b9b09ad51b9ef6fa8b" className="book">
                <img
                  src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F3343604%2F3343604_90d4d71b21ed48cc832c793c3685615b.png%2F"
                    
                  alt="天才高手"
                  className="cover"
                />
                <div className="text-block">
                  <p className="name" title="天才高手">
                    天才高手
                  </p>
                  <p className="author">掌阅漫画</p>
                </div>
              </a>

              <a href="/book/59532596d79877337b037422" className="book">
                <img
                  src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F177507%2F177507_31432d7db10f49e9868278d24f20e1ca.jpg%2F"
                    
                  alt="剃头匠"
                  className="cover"
                />
                <div className="text-block">
                  <p className="name" title="剃头匠">
                    剃头匠
                  </p>
                  <p className="author">木羊公社</p>
                </div>
              </a>
            </div>
          </div>
        )
    }
}


export default Comics