const defaultValue = {
  inputValue:"123",
  list:[1,123,232]
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultValue,action) => {
  console.log(state,action);
  if(action.type === 'change_input_value'){
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if(action.type === 'add_todo_item'){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = ""
    return newState;
  }
  if(action.type === 'delete_todo_item'){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index,1);
    return newState;
  }
  return state;
}