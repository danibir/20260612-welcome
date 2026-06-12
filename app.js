const express = require('express')
const morgan = require('morgan')
const os = require('os')
const path = require('path')
const env = require("dotenv")
env.config()

const r_main = require('./routers/rou-main')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))


app.use('/', r_main)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT} and on ${os.hostname()}`)
})

