import React from 'react'
import fecthJSONP from 'fetch-jsonp'

// 导入子组件
import MovieListItem from './movieIListtem'

// 导入 UI 组件
import { Spin, Alert, Pagination } from 'antd'

export default class MovieList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      moviesList:[], // 电影列表
      nowPage: parseInt(props.match.params.page) || 1, // 当前展示第几页的数据
      pageSize: 12, // 每页显示多少条数据
      total: 0, // 当前电影分类下，总共有多少条数据
      isLoading: true, // 数据是否正在加载， true则正在加载
      movieType:props.match.params.type
    }
  }

  componentDidMount() {
    // 当使用 fetch API 获取数据的时候， 第一个 .then中，获取不到数据
    // 第一个 .then 中拿到的是一个 Response 对象，我们可以调用 response.json 得到一个新的 Promise dui
    // fetch('http://api.douban.com/v2/movie/in_theaters)
    // .then(res => res.json())
    //.then(data => console.log(data))

    this.loadMovieListByTypeAndPage()
  }
  
  // 组件将要接受新属性
  componentWillReceiveProps(nextProps) {
    let params =  nextProps.match.params
    // 每当地址发生变化时，重置state中的参数项，重置完毕后，再发送数据请求
    this.setState({
      isLoading:true,
      nowPage:parseInt(params.page) || 1,
      movieType:params.type,
    },() => { // 保证state中数据完成更新后，再请求
      this.loadMovieListByTypeAndPage()
    })
  }
  
  // 注意：默认的window.fetch 受到跨域限制，无法直接使用，这时候，我们使用第三方包 fetch-jsonp 来发送 jsonp请求，使用方法和浏览器内置的 fetch 完全兼容
  // 根据电影类型和页码，获取电影数据
  loadMovieListByTypeAndPage = () => {
    // 开始获取数据的索引
    const start = this.state.pageSize*(this.state.nowPage - 1)
    const url = `http://api.douban.com/v2/movie/${this.state.movieType}?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${start}&count=${this.state.pageSize}`
    fecthJSONP(url)
    .then(res => res.json())
    .then(data => {
      this.setState({
        isLoading: false,
        moviesList:data.subjects,
        total: data.total
      })
    })
  }
  // 渲染电影列表的方法
  renderList = () => {
    if (this.state.isLoading) { // 正在加载中
      return  (
        <Spin>
          <Alert
            message="正在请求电影列表"
            description="精彩内容，马上呈现......"
            type="info"
          ></Alert>
        </Spin>
      )
    } else {
      return (
        <div>
          <div style={{display:'flex',flexWrap:'wrap'}}>
          {this.state.moviesList.map((item,index) => {
            return <div key={index}>
              <MovieListItem {...item} history={this.props.history}></MovieListItem>
            </div>
          })}
          </div>
          <Pagination defaultCurrent={this.state.nowPage} pageSize={this.state.pageSize} total={this.state.total} onChange={this.pageChanged}/>
        </div>
      )
    }
  }

  // 当页码改变的时候，加载新一页数据
  pageChanged = (page) => {
    // 由于我们手动使用BOM 对象，实现了跳转，这样不好，最好使用路由的方法，进行编程式导航
    // window.location.href = `/movie/${this.state.movieType}/${page}`

    // 使用react-router-dom 实现编程式导航
    this.props.history.push(`/movie/${this.state.movieType}/${page}`)
  }
  
  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    )
  }
}

// 在React中，我们可以使用 fetch API 来获取数据， fetch API 是基于 Promise 封装的 