// 1. Importação de módulos
const path = require('path');
const express = require('express');
const cors = require('cors');           //módulo que permite a conexão segura
const mongoose = require('mongoose');

const app = express();

// 2. Configurações de intermediários (middlewares)
app.use(cors());                // libera servidor para receber requisições de outros locais (como HTML)
app.use(express.json());        // para express ler dados enviados em JSON

require('dotenv').config({path: path.join(__dirname, '.env')});

const LINK_DO_BANCO = process.env.MONGO_URI;

mongoose.connect(LINK_DO_BANCO)
    .then(function() {
        console.log("Conectado com sucesso ao Mongo na Núvem!");
    })
    .catch(function(erro) {
        console.error("Erro ao conectar ao Mongo:", erro);
    });

// MODELO DE DADOS (SCHEMA): Molde estrutural para o MongoDB NoSQL
const UsuarioSchema = new mongoose.Schema({
    nome: {type: String, require: true},
    cargo: {type: String, require: true}
})

// Modelo operacional baseado no molde criado acima
const Usuario = mongoose.model('Usuario', UsuarioSchema);

app.get('/usuarios', function(requisicao, response) {
    Usuario.find()
    .then(function (listaDeUsuarios) {
        return response.json(listaDeUsuarios);
    })
    .catch(function(erro) {
        return response.status(500).json({
            erro: "Erro ao buscar dados do banco"
        });
    });
});

app.post('/usuarios', function(requisicao, response) {
    const dadosRecebidos = requisicao.body;
    Usuarios.create({
        nome: dadosRecebidos.nome,
        cargo: dadosRecebidos.cargo
    })
        .then(function(novoUsuario) {
            return response.status(201).json(novoUsuario);
        })
        .catch(function(erro){
            return response.status(400).json({
                erro: "Erro ao salvar usuário no banco de dados."
            })
        })
})


// bando de dados fictício na memória ram
// const usuarios = [
//     { id: 1, nome: "Ana Costa", cargo: "Desenvolvedora" },
//     { id: 2, nome: "Carlos Sousa", cargo: "Designer" },
// ];

// rota get: envia a lista atual de usuarios para quem solicitar
// app.get("/usuarios", function (requisicao, resposta) {
//     return resposta.json(usuarios);
// });

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

