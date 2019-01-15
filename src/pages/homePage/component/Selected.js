import React, { Component } from 'react'


class Selected extends Component {
    render(){
        return (
              <div className="male">
              <div className="title">
                <i className="icon icon-man" />
                <span className="name">男生精选</span>
                <a href="/category?gender=male&amp;type=hot&amp;major=都市">
                  都市
                </a>
                <span className="split">|</span>
                <a href="/category?gender=male&amp;type=hot&amp;major=仙侠">
                  仙侠
                </a>
                <span className="split">|</span>
                <a href="category?gender=male&amp;type=hot&amp;major=玄幻">
                  玄幻
                </a>
                <a href="/selection/nsjx" className="more">
                  查看更多
                  <span className="arrow-more" />
                </a>
              </div>
              <div className="books-list">
                <a href="/book/58743a2bc3ae055e062f7f70" className="book">
                  <img
                    src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1413832%2F1413832_90c937776c1f423e81fd0c3e9bbd4a5e.jpg%2F"
                      
                    alt="极道丹皇"
                    className="cover"
                  />
                  <div className="right">
                    <h4 className="name">
                      <span>极道丹皇</span>

                      <span className="tag-serial">连载</span>
                    </h4>
                    <p className="desc">
                      天才少年杨尘，被父亲仇家所废，意外获得丹皇传承，以无上功法为根基，家族绝世血脉为源泉，从此一飞冲天，武破苍穹！
                    </p>
                    <p className="popularity">
                      <span>舌头老大</span>
                      <span className="split">|</span>
                      <span className="c-red">356</span> 人气
                    </p>
                  </div>
                </a>

                <a href="/book/55d447c7d87e220009766712" className="book">
                  <img
                    src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F814793%2F_814793_119327.jpg%2F"
                      
                    alt="灵车"
                    className="cover"
                  />
                  <div className="right">
                    <h4 className="name">
                      <span>灵车</span>

                      <span className="tag-noSerial">完结</span>
                    </h4>
                    <p className="desc">
                      （灵车：运载灵柩或骨灰盒的车辆，你也可以理解为死人专用车。）
                      我做了四年公交司机，心中的秘密也整整压抑了四年，我来亲身讲述你所不知道的列车惊悚事件。
                      灵车改装成公交车之事，或许你没经历过，但你所坐过的公交车，不一定只载活人...{" "}
                    </p>
                    <p className="popularity">
                      <span>堂前雁</span>
                      <span className="split">|</span>
                      <span className="c-red">644</span> 人气
                    </p>
                  </div>
                </a>
              </div>
            </div>
           
        )
    }
}



export default Selected