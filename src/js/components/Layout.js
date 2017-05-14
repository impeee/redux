import React from "react"
import { connect } from "react-redux"
import { Change_Name } from "../actions/defaultActions"
@connect((store) => {
  return {
    user: store.defaultReducer.user
  };
})
export default class Layout extends React.Component {
  componentWillMount(){
    this.props.dispatch(Change_Name("Peter"));
  }
  render(){
    console.log(this.props.user);
    return null;
  }
}
