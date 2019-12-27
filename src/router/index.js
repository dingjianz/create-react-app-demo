import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../components/home/index.jsx'
import Movie from '../components/movie/index.jsx'
import About from '../components/about/index.jsx'

export default class routerConfig extends React.Component {
  render() {
    return (<div style={{ height: '100%'}}>
      <Route path='/home' component={Home}></Route>
      <Route path='/movie' component={Movie}></Route>
      <Route path='/about' component={About}></Route>
    </div>)
  }
}
