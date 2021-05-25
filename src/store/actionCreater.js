import { CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM } from "./actionType";

export const getInputChangeAction=(value)=>({
    type:CHANGE_INPUT_VALUE,
    value
})
export const addTodoItemAction=()=>({
  type:ADD_TODO_ITEM,
})
export const delteTodoItemAction=(index)=>({
  type:DELETE_TODO_ITEM,
  index
})