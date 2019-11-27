import React from 'react'
import CMTItem from './CmtItem'
import CMTBox from './CmtBox'

// 评论列表组件
export default class CMTList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  // 在组件尚未渲染的时候，就立即获取数据
  componentWillMount() {
    this.loadCmts()
  }

  render() {
    return <div>
      <h1>这是评论列表组件</h1>

      {/* 这是评论的组件 */}
      {/* 相对于Vue中，把父组件传递给子组件的普通属性和方法属性区别对待：普通属性用props接收，方法用this.$emit('方法名') */}
      {/* React中，只要是传递给子组件的数据，不管是普通的类型，还是方法，都可以使用 this.$props.** 来调用 */}
      <CMTBox rrload={this.loadCmts}></CMTBox>


      {/* 循环渲染一些评论内容组件 */}
      {this.state.list.map((item,index) => {
        return <CMTItem key={index} {...item}></CMTItem>
      })}
    </div>
  }

  // 从本地存储中加载评论列表
  loadCmts = () => {
    let list = JSON.parse(localStorage.getItem('cmts')||'[]')
    this.setState({
      list
    })
  }
}