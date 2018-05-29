import React, { Component } from 'react';
import styled from 'styled-components' ;
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Comment extends Component {
  state = {
    text:'',
    color:0,
    cmt:'all'
  }
  inp = e => {
    this.setState({
      text:e.target.value
    })
  }
  addComment = () =>{
    this.props.addComment(this.state.text)
    this.setState({
      text:''
    })
  }

  handleClick = id => {
    this.props.change(id)
    console.log(this.props.comment)
  }
  all = () => {
    this.setState({
      cmt:'all'
    })
  }
  undone = () => {
    this.setState({
      cmt:'undone'
    })
  }
  render() {
    let CommentList1 = ''
    if(this.state.cmt === 'all'){
      CommentList1 = this.props.comment
    }else{
      CommentList1 = this.props.comment.filter(c => c.status === true)
    }
      const CommentList =  CommentList1.map(c => <li style={{color: c.status === true ? 'rgb(90, 186, 202)':'',textDecoration: c.status === true ? 'line-through':''}} onClick={() => this.handleClick(c.id)} key={c.id}>{c.body}</li>)
    
    return (
      <Wrapper>
        <Com>
          {CommentList}
        </Com>
        <Add>
          <TextField
            id="multiline-flexible"
            label="请输入事项"
            multiline
            rowsMax="4"
            value={this.state.text}
            onChange={this.inp}
            margin="normal"
          />
          <Button style={{marginLeft:'-10px'}} onClick={this.addComment} variant="fab" color="primary" aria-label="add">
          +
          </Button>
        </Add>
        <Btn>
          <Button onClick={this.all} variant="raised" color="primary" >
            ALL
          </Button>
          <Button onClick={this.undone} variant="raised" color="primary" >
            undone
          </Button>
        </Btn>
      </Wrapper>
    );
  }
}

export default Comment;
const Wrapper = styled.div`
  width:300px;
  height:400px;
  margin:0 auto;
  background-color:#cac8ea;
  margin-top:50px;
`
const Com = styled.ul`
  width:250px;
  height:200px;
  overflow:auto;
  margin:0 auto;
  padding-top:50px;
`
const Add = styled.div`
  width:242px;
  margin:0 auto;
`
const Btn = styled.div`
  display:flex;
  justify-content: space-around;
  padding-top:40px;
`