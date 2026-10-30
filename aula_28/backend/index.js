// 1. Importação de módulos
const express = require("express");
const cors = require("cors");           //módulo que permite a conexão segura

const app = express();

// 2. Configurações de intermediários (middlewares)
app.use(cors());                // libera servidor para receber requisições de outros locais (como HTML)
app.use(express.json());        // para express ler dados enviados em JSON


// bando de dados fictício na memória ram
const usuarios = [
    { id: 1, nome: "Ana Costa", cargo: "Desenvolvedora" },
    { id: 2, nome: "Carlos Sousa", cargo: "Designer" },
];

// rota get: envia a lista atual de usuarios para quem solicitar
app.get("/usuarios", function (requisicao, resposta) {
    return resposta.json(usuarios);
});

// rota post: recebe novos dados do frontend
app.post("/usuarios", function (requisicao, resposta) {

    const dadosRecebidos = requisicao.body;

    const novoUsuario = {
        nome: dadosRecebidos.nome,
        cargo: dadosRecebidos.cargo
    };

    usuarios.push(novoUsuario);

    return resposta.status(201).json(novoUsuario);
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});

