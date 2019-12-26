import React from 'react'
import ReactTypes from 'prop-types'

class Context extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color:'red'
    }
  }

  // 1. 在父组件中，定义一个function， 这个function有个固定的名称，叫做 getChildContext, 内部必须返回一个对象，就是要共享给所有子孙组件的数据
  getChildContext() {
    return {
      color:this.state.color
    }
  }
  
  //2. 使用属性校验，规定一下传递给子组件的数据类型，需要定义一个静态的(static) childContextTypes(固定名称，不要改)
  static childContextTypes = {
    color: ReactTypes.string // 规定了传递给子组件的数据类型
  }

  render() {
    return <div>
    <h1>这是父组件</h1>
    <Com2></Com2>
    </div>
  }
}

// 中间的子组件
class Com2 extends React.Component {

  render() {
    return <div>
      <h3>这是子组件</h3>
      <Com3></Com3>
    </div>
  }
}

// 内部的孙子组件
class Com3 extends React.Component {

  //3. 上来以后，先来个属性校验，去校验一下父组件传递过来的参数属性
  static contextTypes = {
    color:ReactTypes.string // 这里，如果子组件想要使用父组件通过 context 共享的数据，那么在使用之前，一定要先做一下数据类型校验
  }
  render() {
    const { color } = this.context
    return <div>
      <h5 style={{color:color}}>这是孙子组件.</h5>
    </div>
  }
}

export default Context
