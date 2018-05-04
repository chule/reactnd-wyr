import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { createStore } from "redux"
import { Provider } from "react-redux"
import reducer from "./reducers"
import middleware from "./middleware"

const store = createStore(reducer, middleware)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'))


// # A Guide for the Planning Stages of Your Project #
// Identify What Each View Should Look Like
// Break Each View Into a Hierarchy of Components
// Determine What Events Happen in the App
// Determine What Data Lives in the Store