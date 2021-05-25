import React, { Component } from 'react';
import 'antd/dist/antd.css'
import store from './store'
import { addTodoItemAction, delteTodoItemAction, getInputChangeAction } from './store/actionCreater';
import TodoListUI from './TodoListUI';
import axios from 'axios'
// import {ADD_TODO_ITEM,CHANGE_INPUT_VALUE,DELETE_TODO_ITEM} from './store/actionType'
class TodoList extends Component {
  constructor(props){
    super(props);
    this.state=store.getState();
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleItemRemove = this.handleItemRemove.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  componentDidMount(){
    axios.get('/todolist').then(
      res=>{
        console.log(res);
      }
    )
  }

  render() {
    return (
      <TodoListUI 
        inputValue={this.state.inputValue} 
        list={this.state.list} 
        handleInputChange={this.handleInputChange}
        handleClick={this.handleClick}
        handleItemRemove={this.handleItemRemove}
      ></TodoListUI>
    )
  }
  handleInputChange(e){
    const action =  getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleClick(){
    const action =  addTodoItemAction()
    store.dispatch(action)
  }
  handleItemRemove(index){
    const action =  delteTodoItemAction(index)
    store.dispatch(action)
  } 
   handleStoreChange(){
    this.setState(store.getState())
  }

}
export default TodoList;