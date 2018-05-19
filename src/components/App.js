import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from "react-redux"
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from "../actions/shared"
import './App.css';
import LogIn from './LogIn'
import QuestionsList from '../containers/QuestionsList'
import Leaderboard from '../containers/Leaderboard'
import Nav from '../containers/Nav'
import Add from './Add'



class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <div className="App">
          <LoadingBar />

          <header className="App-header">
            <h1 className="App-title">Would You Rather?</h1>

          </header>
          {this.props.authedUser && <Nav />}


          {/* <Route path='/' exact component={LogIn} /> */}
          {/* <Route path='/users/:id' component={TweetPage} /> */}
          <Route path='/' exact render={() => (this.props.authedUser &&

            <QuestionsList mode="unanswered" />


          )} />
          <Route path='/answered' exact render={() => (this.props.authedUser &&


            <QuestionsList mode="answered" />

          )} />
          <Route path='/leaderboard' render={() => (this.props.authedUser && <Leaderboard />)} />
          <Route path='/add' render={() => (this.props.authedUser && <Add />)} />


          {!this.props.authedUser && <LogIn />}



        </div>
      </Router>
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
