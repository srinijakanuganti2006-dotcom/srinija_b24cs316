const http = require("http");
const server = http.createServer((req,res)=>{
    res.write("Hello,World!");
    res.end();
});
server.listen(3000,()=>{
    console.log('server is running on port 3000');
});