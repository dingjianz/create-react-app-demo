
// 如果要使用路由模块，第一步：yarn add react-router-dom/ npm i react-router-dom -S
// 第二步，导入路由模块

// HashRouter: 表示一个路由的跟容器，将来，所有的路由相关的东西，都要包裹在HashRouter里面，而且，一个网站中，只需要使用一次HashRouter就好了；
// Route：表示一个路由规则，在Route上，有两个比较重要的属性，path、component
// Link: 表示一个路由的链接，就好比 Vue 中的 <router-link to=""></router-link>
import { HashRouter, BrowserRouter, Route, Link} from 'react-router-dom'
import React from 'react'
import Home from './components/ReactRouter/Home'
import About from './components/ReactRouter/About'
import Movie from './components/ReactRouter/Movie'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: '555'
    }
  }

componentDidMount() {
  this.setState( {
    msg:'7777777'
  })
  console.log(this.state.msg)
}

  render() {
    // 当使用 HashRouter 把 App 根组件的元素包裹起来之后，网站就已经启用路由了
    // 在一个 HashRouter 中，只能有唯一的一个根元素
    // 在一个网站中，只需要唯一的一次<HashRouter></HashRouter> 就行了
    return <HashRouter>
      <div>
        <h1>这是网站的APP根组件{this.state.msg}</h1>
        <hr/>

        <Link to="/home">首页</Link>
        <Link to="/movie">电影</Link>
        <Link to="/about">关于</Link>


        {/* 
        Route创建的标签，就是路由规则， 其中path 表示要匹配的路由，component 表示要展示的组件； Route 具有两种身份：1.是一个路由匹配规则；2.是一个占位符，表示将来匹配到的组件都放到这个位置
      
        在Vue 中，有个<router-view></router-view>的路由标签，专门用来防治匹配到的路由组件， 但是，在 react-router 中，并没有类似于这样的标签，当作坑（占位符）；


      */}


        {/* <Route path="/home" component={Home}></Route> */}
        <Route path="/home">
          <Home/>
        </Route>
        
        <hr/>

        <Route path="/about" component={About}></Route>
        
        <hr/>

        <Route path="/movie" component={Movie}></Route>
      </div>
    </HashRouter>
  }
}