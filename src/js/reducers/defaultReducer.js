const initialState = {
  user: {
    id: null,
    name: null,
    age: null
  },
  fetching: false,
  fetched: false,
  error: null,
};

export default function reducer(state=initialState, action){
  switch (action.type) {
    case "CHANGE_NAME":
    console.log("name has been changed to " + action.payload);
    return {...state, user: { name: action.payload} }
    break;
    case "CHANGE_PROP":
    console.log("prop " + action.payload.propName + " has been changed to value " + action.payload.propValue);
    return {...state, [action.payload.propName]: action.payload.propValue};
    break;
    case "FETCH_USER_FULFILLED":
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload,
      }
    break;
  }
  return state
}
