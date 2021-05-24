import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List, Divider } from 'antd';
import store from './store'

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state=store.getState();
    this.handleInputChange = this.handleInputChange.bind(this)
    // this.handleStoreChange = this.handleStoreChange.bind(this)
  }
  render() {
    return (
      <div>
        <Input style={{ width: 300 }} defaultValue={this.state.inputValue} onChange={()=>this.handleInputChange}></Input>
        <Button type="primary" ></Button>

        <Divider orientation="left">Default Size</Divider>
        <List
          style={{ width: 300 }}
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={this.state.List}
          renderItem={item => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }
  handleInputChange(e){
    const action = {
      type:'change_input_value',
      value:e.target.value
    }
    store.dispatch(action)
  }
}
export default TodoList;