import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from "react-redux"
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from "../actions/shared"
import './App.css';
import LogIn from './LogIn'



class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="App">
        <LoadingBar />

        <Fragment>
          <header className="App-header">
            <h1 className="App-title">Would You Rather?</h1>
          </header>

        </Fragment>

        <LogIn />

      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }) {

  return {
    loading: authedUser === null,
    authedUser: users[authedUser] ? users[authedUser] : null
  }
}

export default connect(mapStateToProps)(App)
