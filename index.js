require('dotenv').config()
const  express = require('express')
const app = express()
const port = process.env.PORT


app.get('/' , (req , res)=>{
    res.send('<h1> hi i am learning backend </h1>')
})

app.listen(port , function(){
    console.log(`the app is listening at port ${port}`);
    
})