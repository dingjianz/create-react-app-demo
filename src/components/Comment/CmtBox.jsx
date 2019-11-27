import React from 'react'

// 评论列表项组件
export default class CMTBox extends React.Component {

  render() {
    return <div>
      <label>评论人：</label><br/>
      <input type="text" ref="user"/><br/>
      <label>评论内容：</label><br/>
      <textarea cols="30" rows="4" ref="content"></textarea><br/>
      <input type="button" value="发表评论" onClick={this.postComment}/>
    </div>
  }


  postComment = () => {
    //1. 获取评论人和评论内容
    //2.从本地存储中，先获取之前的评论数组
    //3.把最新的这条评论，unshift进去
    //4.在把最新的评论数组，保存到本地存储中
    let cmtInfo = {user:this.refs.user.value,content:this.refs.content.value}
    let list = JSON.parse(localStorage.getItem('cmts')||'[]')
    list.unshift(cmtInfo)
    localStorage.setItem('cmts', JSON.stringify(list))
    this.refs.user.value = ''
    this.refs.content.value = ''
    this.props.rrload()
  }
}