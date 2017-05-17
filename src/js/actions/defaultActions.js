import React from 'react'

export const CHANGE_NAME = 'layout/CHANGE_NAME';
export const FETCH_USERS_FULFILLED = 'layout/FETCH_USERS_FULFILLED';
export const CHANGE_PROP = 'layout/CHANGE_PROP';

export function changeName(name) {
  return {
    type: CHANGE_NAME,
    payload: name,
  };
};

export function fetchUser() {
  return {
    type: FETCH_USERS_FULFILLED,
    payload: {
      name: 'Will',
      age: 35,
    },
  };
};

export function changeProp(propName, newValue) {
  return {
    type: CHANGE_PROP,
    payload: {
      propName: propName,
      propValue: newValue,
    },
  };
};
