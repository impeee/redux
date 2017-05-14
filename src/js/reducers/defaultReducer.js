const initialState = {
  user: {
    id: 1,
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
    return {...state, user.name: action.payload}
    break
  }
  return state
}
