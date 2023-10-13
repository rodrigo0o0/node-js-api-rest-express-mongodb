import express from "express";


const app = express();
app.use(express.json());

const livros = [
    {
        id:1,
        titulo:"O Senhor dos Aneis"
    },
    {
        id:2,
        titulo:"O Hobbit"
    },

]

function buscaLivroPorId(idBusca){
    return livros.findIndex(livro =>{
        return livro.id === Number(idBusca);
    })
}
app.get("/",(req,res)=>{
    res.status(200).send("Curso de Node JS em EXPRESS");

});


app.get("/livros",(req,res)=>{
    console.log("Requisição get Livros")
    res.status(200).json(livros);
});


app.get("/livros/:id",(req,res)=>{
    const index = buscaLivroPorId(req.params.id);

    if(index >= 0){
        res.status(200).json(livros[index]);
    }else{
        res.status(404).send("Id não encontrado em nossa base de dados.");
    }
});


app.post("/livros",(req,res)=>{

    livros.push(req.body);
    res.status(201).send("Livro Cadastrado com Sucesso");
});



app.put("/livros/:id",(req,res)=>{
    const index = buscaLivroPorId(req.params.id);

    if(index >= 0){
        const novoTitulo = req.body.titulo;
        const nomeAntigo = livros[index].titulo;
        livros[index].titulo = novoTitulo;
        res.status(200).json(`Livro: ${nomeAntigo}. foi alterado para ${novoTitulo}.`);
    }else{
        res.status(404).send("Id não encontrado em nossa base de dados.");
    }

});

app.delete("/livros/:id",(req,res)=>{
    const index = buscaLivroPorId(req.params.id);

    if(index >= 0){
        livros.splice(index,1);
        res.status(200).json(`Livro com o id: ${index + 1} foi deletado.`);
    }else{
        res.status(404).send("Id não encontrado em nossa base de dados.");
    }

});

export default app;