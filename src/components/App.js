import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from "react-redux"
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from "../actions/shared"
import './App.css';
import LogIn from './LogIn'
import QuestionList from './QuestionsList'
import Leaderboard from '../containers/Leaderboard'
import Nav from '../containers/Nav'



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


          <Route path='/' exact component={LogIn} />
          {/* <Route path='/users/:id' component={TweetPage} /> */}
          <Route path='/leaderboard' component={Leaderboard} />
          <Route path='/questions' component={QuestionList} />

          {this.props.authedUser && 
          <Fragment>
            <QuestionList mode="unanswered"/>
            <QuestionList mode="answered"/>
          </Fragment>
          }

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
