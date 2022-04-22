import React from 'react'
import { Provider } from 'react-redux'
import {render} from 'react-dom'
import Routes from './components/routes.js'
import store from './store'
// import { createBrowserHistory } from "history";

// const history = createBrowserHistory();

render(
    <Provider store={store} >
        <Routes />
    </Provider>, document.getElementById('app')
)