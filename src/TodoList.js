import React, {Component} from "react";
// import store from "./store";
import {connect} from 'react-redux'

class TodoList extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = store.getState();
  // }
  render(){
    return(
      <div>
        <input onChange={this.props.changeInputValue} value={this.props.inputValue}></input>
        <button onClick={this.props.handleClick}>submit</button>
        <ul>
          {
            this.props.list.map((item)=>
             <li>{item}</li> )
          }
        </ul>
      </div>
    )
  }
}
const mapStateToProps=(state) =>{
  return{
    inputValue:state.inputValue,
    list:state.list
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    changeInputValue(e){
      const action = {
        type:'change_input_value',
        value:e.target.value
      }
      dispatch(action);
    },
    handleClick(){
      const action = {
        type:'add_item',
      }
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);