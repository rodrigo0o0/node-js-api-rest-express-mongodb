//import http from "http";
import app from "./src/app.js"


const PORT = 3000;


// const server = http.createServer((req, res) =>{
//     res.writeHead(200,{"Content-Type":"text/Html"});
//     res.end(rotas[req.url]);
// });

app.listen(PORT, () =>{
    console.log("Servidor Escutando.");
});