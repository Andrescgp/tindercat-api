const express = require('express')
const app = express()
const catsRoutes = require('./routes/cats')
const interestRoutes = require('./routes/interests')

require('./connection/mongoConnection')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/cats', catsRoutes)
app.use('/interests', interestRoutes)

const { test }  = require('./test')
test()

app.listen(5001, () => console.log('Server running'))
