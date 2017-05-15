import React from "react"
import { connect } from "react-redux"
import { fetchUser, Change_Name, changeProp } from "../actions/defaultActions"
@connect((store) => {
  return {
    user: store.defaultReducer.user,
    isAdding: false
  };
})

export default class Layout extends React.Component {
  componentWillMount(){
    this.props.dispatch(Change_Name("John"));

  }
  AddPost(){
    const {isAdding} = this.props;
    this.props.dispatch(changeProp("isAdding", !isAdding));
  }
  render(){
if(this.props.isAdding)
  return <a  onClick={this.AddPost.bind(this)} class="btn btn-danger">Hide</a>
else{
  return <a  onClick={this.AddPost.bind(this)} class="btn btn-primary">Add post</a>
}
    return(
      <div>
        <h1>Hi, {this.props.user.name}</h1>

      </div>
    )
  }
}
