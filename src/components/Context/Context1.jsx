import React from 'react'

class Context extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color:'red'
    }
  }

  render() {
    return <div>
    <h1>这是父组件</h1>
    <Com2 color={this.state.color}></Com2>
    </div>
  }
}

// 中间的子组件
class Com2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <div>
      <h3>这是子组件</h3>
      <Com3 color={this.props.color}></Com3>
    </div>
  }
}

// 内部的孙子组件
class Com3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <div>
      <h5 style={{color:this.props.color}}>这是孙子组件</h5>
    </div>
  }
}

export default Context
