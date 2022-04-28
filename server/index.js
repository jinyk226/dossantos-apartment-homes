const express = require('express')
const path = require('path')

const app = express()
const authApp = express()

// Parse incoming requests with JSON payloads (Plain english: Formats incoming requests to JSON format for our code to read)
app.use(express.json())
authApp.use(express.json())

// Allow files in public folder to be accessible by our express app
app.use(express.static(path.join(__dirname, '../public')))

app.use('/api', require('./api/'))

// 400 Error Handler: Send index.html for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

// 500 Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message || 'Internal server error')
})



authApp.use('/auth', require('./auth'))

// 400 Error Handler: Send index.html for any other requests
authApp.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

// 500 Error handler
authApp.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

module.exports = {app, authApp}