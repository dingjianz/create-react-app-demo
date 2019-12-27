import React from 'react'

import MovieDetail from './movieDetail'

import { Link, Route, Switch } from 'react-router-dom'
import MovieList from './movieList.jsx'
import { Layout, Menu } from 'antd'
const { Content, Sider } = Layout

export default class MovieContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <Layout style={{height:'100%'}}>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={[window.location.pathname.split('/')[2]]}
            style={{ height: '100%', borderRight: 0 }}>
            <Menu.Item key="in_theaters"><Link to="/movie/in_theaters/1">正在热映</Link></Menu.Item>
            <Menu.Item key="coming_soon"><Link to="/movie/coming_soon/1">即将上映</Link></Menu.Item>
            <Menu.Item key="top250"><Link to="/movie/top250/1">Top250</Link></Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ paddingLeft: '1px' }}>
          <Content
            style={{
              background: '#fff',
              padding: 10,
              margin: 0,
              minHeight: 280,
            }}>
            {/* 在匹配路由规则的时候，这里提供了两个参数， 如果想要从路由规则中，提取参数，需要使用 this.props.match.params.** */}

            {/* 注意：哪怕为路由启用了 exact 精确匹配模式， 也会从上到下，把所有的路由规则匹配一遍 */}
            {/* /movie/detail/32695 ： 对以下两个 path 都能匹配上 */}
            {/* 使用路由中的 Switch 组件， 能够指定，如果前面的路由规则（从上到下）优先匹配到了，则放弃匹配后续的路由 */}
            <Switch>
              <Route path="/movie/detail/:id" component={MovieDetail} exact></Route>
              <Route path="/movie/:type/:page" component={MovieList} exact></Route>
            </Switch>
            
          </Content>
        </Layout>
      </Layout>
    )
  }
}