import { 
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ITEM} from "./actionType";

const defaultValue = {
  inputValue:"123",
  list:[1,123,232]
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultValue,action) => {
  console.log(state,action);
  if(action.type === CHANGE_INPUT_VALUE){
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if(action.type === ADD_TODO_ITEM){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = ""
    return newState;
  }
  if(action.type === DELETE_TODO_ITEM){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index,1);
    return newState;
  }
  if(action.type === INIT_LIST_ITEM){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data;
    return newState;
  }
  return state;
}