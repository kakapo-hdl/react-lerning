const defaultValue = {
  inputValue:"123",
  List:[1,123,232]
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultValue,action) => {

  if(action.type === 'change_input_value'){
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  console.log(state,action);
  return state;
}