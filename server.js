import http from "http";

const PORT = 3000;
const rotas = {
    "/":"Curso de Node Express API.js",
    "/teste":"Testando tudo",
    "/livros":"Entrei na rota Livros",
    "/autores":"Entrei na rota autores"
    
};
const server = http.createServer((req, res) =>{
    res.writeHead(200,{"Content-Type":"text/Html"});
    res.end(rotas[req.url]);
});

server.listen(PORT, () =>{
    console.log("Servidor Escutando.");
});