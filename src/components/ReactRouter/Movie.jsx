import React from 'react'


export default class Movie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      routerParams:props.match.params
    }
  }

  render() {
    // 如果想要从路由规则中，提取匹配到的参数进行使用，可以使用this.props.match.params.** 来访问
    console.log(this.props.match.params)
    return <div>
      {/* <h1>这是Movie ---- {this.props.match.params.type} ---- {this.props.match.params.id}</h1> */}
      <h1>这是Movie ---- {this.state.routerParams.type} ---- {this.state.routerParams.id}</h1>
    </div>
  }
}