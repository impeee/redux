import React from "react"
export function Change_Name(name){
  return {
    type: "CHANGE_NAME",
    payload: name
  }
}

export function fetchUser(){
  return{
    type: "FETCH_USERS_FULFILLED",
    payload: {
      name: "Will",
      age: 35
    }
  }
}

export function changeProp(propName, newValue){
  return{
    type: "CHANGE_PROP",
    payload:{
      propName: propName,
      propValue: newValue
    }
  }
}
