
import React from 'react'
import RouterConfig from './router'
import { HashRouter, BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Layout, Menu } from 'antd'
const { Header, Content, Footer } = Layout

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

componentDidMount() {
  this.setState( {
  })
}

  render() {
    return (
      <Router>
        <Layout className="layout" style={{height:'100%',color:'red'}}>
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">
                <Link to="/home">首页</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/movie">电影</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/about">关于</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{background:'#fff'}}>
            <RouterConfig></RouterConfig>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            科大讯飞 ©2019 created by 2019
          </Footer>
        </Layout>
      </Router>
    )
  }
}