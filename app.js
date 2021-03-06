const express = require('express') //Include Express Framework
const mongoose = require('mongoose') //Include Mongoose
const url = 'mongodb+srv://tpgit:tpgit2020@bookbank.w18lj.mongodb.net/bookbank?retryWrites=true&w=majority' //Database URL
const PORT = process.env.PORT || 7000;

const app = express() //Start Express Framework

mongoose.connect(url, {useNewUrlParser:true}) //Connect Database [useNewUrlParser:avoid warnings]
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)
const con = mongoose.connection //Connection Holder

con.on('open', () =>{        //When Database connection is made
    console.log('Connected...')
})

app.use(express.json())

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

const alienRouter = require('./routes/aliens')
const alienRouter2 = require('./routes/aliens2')
app.use('/login', alienRouter)
app.use('/adduser', alienRouter2)

app.listen(PORT, () =>{
    console.log('Server Started')
})
