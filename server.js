require('dotenv').config()
require('./config/database')
const cors = require('cors')
const passport = require("passport")
const Router = require('./routes/routes')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 4000
const HOST = process.env.HOST || '0.0.0.0'

const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(passport.initialize())
app.use('/api', Router)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/buil'))
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname+'/client/buil/index.html'))
    })
}


app.listen(PORT, HOST,()=>console.log('Server ready on PORT'+PORT))