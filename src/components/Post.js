import React, { Component } from 'react';
import Comment from './Comment';

class Post extends Component {
  state = {
    comment:[
      {
        id:1,
        body:'评论1',
        status:false
      },
      {
        id:2,
        body:'评论2',
        status:false
      }
    ],
    text:1
  }
  addComment = t => {
    const {comment} = this.state
    const c = {
      id:comment.length + 1,
      body:t,
      status:false
    }
    console.log(t)
    this.setState({
      comment:[...comment,c]
    })
  }
  change = id => {
    console.log(id)
    const c = this.state.comment.map( c => {
      if (c.id === id) {
        c.status=true
      }
      return c
    } )
    this.setState({
      comment: c
    })
  }
  render() {
    return (
      <div>
        <Comment comment={this.state.comment} change={this.change} addComment={this.addComment}/>
      </div>
    );
  }
}

export default Post;