const express = require('express');
const app = express();
const port = 8090;
const connecting = require('./config/db')
connecting()

const {graphqlHTTP} = require('express-graphql');
const Auth = require('./middleware/Auth')

app.use('/graphql',graphqlHTTP((req)=>({
    schema,
    graphiql:true,
    context:{
        user:Auth(req)
    }
})))


app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})