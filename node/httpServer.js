import http from 'http'
const port = 8090;
const server = http.createServer((req, res)=>{
    if(req.url==='/'){
        res.write('this is welcome page..')
        res.end()
    }

    if(req.url ==='/contact'){
        
    }
})

server.listen(port, ()=>{
    console.log("server is running")
})