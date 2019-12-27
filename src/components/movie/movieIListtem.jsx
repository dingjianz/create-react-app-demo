import React from 'react'
import '../../assets/css/movie/movieIListtem.css'
import { Rate } from 'antd'

export default class MovieListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  // 跳转到详情页面
  turnToDetail = () => {
    this.props.history.push(`/movie/detail/${this.props.id}`)
  }
  
  render(props) {
    return (
      <div className="box" onClick={() => this.turnToDetail()}>
      <img src={this.props.images.small.replace('img1.doubanio.com', 'img.doubanio.com')} alt="loading..."/>
        <h4>电影名称：{this.props.title}</h4>
        <h4>上映年份：{this.props.year}年</h4>
        <h4>上映类型：{this.props.genres.join(',')}</h4>
        <Rate disabled defaultValue={this.props.rating.average/2} />
      </div>
    )
  }
}