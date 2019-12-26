import React from 'react'
import ReactDOM from 'react-dom'

// 全局导入antd样式
// 一般我们使用的第三方UI组件，它们的样式表文件，都是以.css 结尾的，所以，我们最好不要为.css后缀名的文件，启用模块化；
// 我们推荐自己不要直接手写 .css 的文件，而是自己手写 scss或less文件，这样，我们只需要为scss/less 文件启用模块化就好了

// 由于直接使用 Ant Design的全部包，体积过大，所以，建议大家使用按需导入，这样，能减少bundle.js 文件的体积
// import 'antd/dist/antd.css'


import './index.css'
// import CMTList from './components/Comment/CmtList'
// import CONText from './components/Context/Context'
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<CONText></CONText>, document.getElementById('root'));


import App from './App'
ReactDOM.render(<App/>,document.getElementById('root'))

serviceWorker.unregister();
