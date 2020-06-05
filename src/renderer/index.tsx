import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { HashRouter as Router } from "react-router-dom"

import './styles/main.scss'

import App from '@components/app'

ReactDOM.render(
	(
		<Router>
			<App />
		</Router>
	),
	document.getElementById('root'))