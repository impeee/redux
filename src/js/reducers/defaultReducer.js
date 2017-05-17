import {
  CHANGE_NAME,
  FETCH_USER_FULFILLED,
  CHANGE_PROP,
} from '../actions/defaultActions';

const initialState = {
  user: {
    id: null,
    name: null,
    age: null,
  },
  fetching: false,
  fetched: false,
  error: null,
};

export default function reducer(state=initialState, { type, payload }) {
  switch (type) {
    case CHANGE_NAME:
      console.log('name has been changed to ' + payload);
      return {
        ...state,
        user: {
          name: payload,
        },
      };

    case CHANGE_PROP:
      const {
        propName,
        propValue,
      } = payload;

      console.log('prop ' + propName + ' has been changed to value ' + propValue);
      return {
        ...state,
        [propName]: propValue,
      };

    case FETCH_USER_FULFILLED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: payload,
      };

    default:
      return state;
  }
}
