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

        {!this.props.loading &&

          <Fragment>
            <header className="App-header">
              <h1 className="App-title">Would You Rather?</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <LogIn />
          </Fragment>
        }

      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
