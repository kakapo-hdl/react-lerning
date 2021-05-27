

const defaultState = {
  inputValue:'',
  list:['alex']
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action)=>{

  if(action.type === 'change_input_value'){
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue=action.value;
    return newState;
  }
  if(action.type === 'add_item'){
    const  newState= JSON.parse(JSON.stringify(state))
    console.log(newState);
    
    newState.list.push(newState.inputValue)
    newState.inputValue=''
    return newState;
  }

  return state;
}
