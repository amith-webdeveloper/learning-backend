import express from 'express'

const app = express()

// app.use(express.static('dist'))

// this practice is wrong because if we make change code in frontend we have to do build app again and move to backend folder

// app.get('/' , (req , res)=>{
//     res.send("server is ready")
// })

// get list of jokes 

app.get('/api/jokes' , (req , res)=>{
    const  jokes = [
        {
            id: 1,
            title: "Joke #1",
            content: "The Past, the Present, and the Future walk into a bar... It was tense."
        },
        {
            id: 2,
            title: "Joke #2",
            content: "Why don't scientists trust atoms? Because they make up everything."
        },
        {
            id: 3,
            title: "Joke #3",
            content: "I told my wife she should embrace her mistakes... She gave me a hug."
        },
        {
            id: 4,
            title: "Joke #4",
            content: "Parallel lines have so much in common... It's a shame they'll never meet."
        },
        {
            id: 5,
            title: "Joke #5",
            content: "Why did the scarecrow win an award? Because he was outstanding in his field."
        }
    ];

    res.send(jokes)
})

const port = process.env.PORT || 3000

app.listen(port , function(){
    console.log(`server at http://localhost:${3000}`);
    
})

