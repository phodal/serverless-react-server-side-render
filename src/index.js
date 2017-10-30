const express = require('express')
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './app';
import template from './template';

const app = express()

app.get('/', function (req, res) {
	const isMobile = true;
	const initialState = { isMobile };
	const appString = renderToString(<App {...initialState} />);

	res.send(template({
	  body: appString,
	  title: 'Hello World from the server',
	  initialState: JSON.stringify(initialState)
	}));
})

server.listen(8080);
module.exports = app;