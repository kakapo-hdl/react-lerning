import React, { Component } from 'react';
import { Input, Button, List, Divider } from 'antd';

class TodoListUI extends Component{
  render(){
    return(
      <div>
      <Input style={{ width: 300 }} value={this.props.inputValue} onChange={this.props.handleInputChange}></Input>
      <Button type="primary" onClick={this.props.handleClick} >提交</Button>
      <Divider orientation="left">Default Size</Divider>
      <List
        style={{ width: 300 }}
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={this.props.list}
        renderItem={(item,index) => (
          <List.Item onClick={()=>this.props.handleItemRemove(index)}>
            {item}
          </List.Item>
        )
        }/>
    </div>
    )
  }
}
export default TodoListUI;