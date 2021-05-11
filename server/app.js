const express = require('express')
const app = express()
const port = 5000
const path= require('path')
//mid
const volleyball = require('volleyball')
//db
const db = require('./db/index')
const routes = require('../server/routes/index')
app.use(volleyball)
app.use(express.json())

app.use('/api',routes)
app.use((err,req,res,next)=>{
  res.sendStatus(404).send(err)
})


db.sync()
  .then(()=>{
    console.log('DB CONNECTED AND SYNCED')
    app.listen(port,()=>{
      console.log(`Listentin on port: ${port}`)
    })
  });

