import React from 'react'
import {render} from 'react-dom'
import Routes from './components/routes.js'
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

render(
    <Routes history={history} />, document.getElementById('app')
)