import express from 'express'

const app = express()
const port = 3000

app.get('/' , (req , res)=>{
    res.send('Hello world')
})

app.listen(port , function(){
    console.log(`app is listening at port : ${port}`);
    
})