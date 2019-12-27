import React from 'react'
import { Button, Icon, Spin, Alert } from 'antd'
import fecthJSONP from 'fetch-jsonp'

import '../../assets/css/movie/movieDetail.css'

export default class MovieDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movieId:props.match.params.id,
      movieInfo: {}, // 电影信息对象
      isLoading:true // true则正在加载中...
    }
  }

  componentWillMount() {
    fecthJSONP(`https://api.douban.com/v2/movie/subject/${this.state.movieId}?apikey=0df993c66c0c636e29ecbb5344252a4a`)
      .then(res => res.json())
      .then(data => {
        this.setState( {
          movieInfo:data,
          isLoading:false
        })
      })
  }
  // 实现返回按钮的功能
  goBack = () => {
    this.props.history.go(-1)
  }

  renderInfo = () => {
    if (this.state.isLoading) {
      return (
        <Spin>
          <Alert
            message="正在获取电影详情"
            description="精彩内容，马上呈现......"
            type="info"
          ></Alert>
        </Spin>
      )
    } else {
      return (
        <div className="m-wrapper">
          <h1>{this.state.movieInfo.title}</h1>
          <img src={this.state.movieInfo.images.large} alt="loading......"/>
          <p className="m-sunmary">{this.state.movieInfo.summary}</p>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.goBack}><Icon type="left" />返回电影列表页面</Button>
        {this.renderInfo()}
      </div>
    )
  }
}