import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser, changeName, changeProp } from '../actions/defaultActions'

@connect((store) => {
  return {
    user: store.defaultReducer.user,
    isAdding: false,
  };
})

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(changeName('John'));
  }

  AddPost() {
    const {
      isAdding,
    } = this.props;

    this.props.dispatch(changeProp('isAdding', !isAdding));
  }

  render() {
    const {
      isAdding,
    } = this.props;

    return(
      <div>
        <h1>Hi, {this.props.user.name}</h1>

        {
          isAdding ? (
            <a
              onClick={ this.AddPost.bind(this) } 
              className='btn btn-danger'
            >
              Hide
            </a>
          ) : (
            <a
              onClick={ this.AddPost.bind(this) }
              className='btn btn-primary'
            >
              Add post
            </a>
          )
        }
      </div>
    );
  }
}

export default Layout;
