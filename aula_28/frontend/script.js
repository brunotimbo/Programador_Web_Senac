// mapear o fomulário no html
const formulario = document.getElementById('formulario');
const listaVisual = document.getElementById('listaVisual');

let nomeUsuarioSendoEditado = null;

function carregarUsuarios() {
    fetch('http://localhost:3000/usuarios')
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (listaDeUsuarios) {

            listaVisual.innerHTML = '';

            listaDeUsuarios.forEach(function (user) {

                const itemLista = document.createElement('li');
                itemLista.innerHTML = `
                    <span> <strong> ${user.nome} </strong> - ${user.cargo} </span>
                    <div class="lista-user">
                        <button class="btn-editar" onclick="prepararEdicao('${user.nome}', '${user.cargo}')"> Editar </button>
                        <button class="btn-deletar" onclick="deletarUsuario('${user.nome}')"> Deletar </button>
                    </div>
                `;
                listaVisual.appendChild(itemLista);
            });
        })
        .catch(function (erro) {
            console.error('Erro ao buscar usuários:', erro)
        })
}

// monitora o click do botão do formulário
formulario.addEventListener('submit', function (evento) {

    // evita atualização de página padrão ao enviar formulário
    evento.preventDefault();

    // cria objeto em js
    const dadosUsuario = {
        nome: document.getElementById('campoNome').value,
        cargo: document.getElementById('campoCargo').value
    };

    if (nomeUsuarioSendoEditado !== null) {

        fetch(`http://localhost:3000/usuarios/${(nomeUsuarioSendoEditado)}`, {
            method: 'PUT',                                     // objetivo de enviar dado
            headers: { 'Content-Type': 'application/json' },    // informa ao express formato de texto json 
            body: JSON.stringify(dadosUsuario)                       // tranforma objeto js em texto json        
        })
            // primeiro then pega a resposta do servidor e converte em objeto
            .then(function () {
                
            })

            // o segundo then 
            .then(function (usuarioSalvo) {
                alert(`Sucesso! ${usuarioSalvo.nome} foi cadastrado.`); // notificação na tela
                formulario.reset();                                     // limpa campos do formulário
                carregarUsuarios()
            })

            // caso aconteça erro
            .catch(function (erro) {
                console.error('Houve um erro ao se comunicar com o backend:', erro);    // avisa e mostra o erro no console
                alert('Erro: Não foi possível conectar ao servidor backend.');          // exibe o alerta de erro
            })
    }
    else {
        fetch('http://localhost:3000/usuarios', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(dadosUsuario)
        })
            .then(function(resposta) {
                return resposta.json();
            })
            .then(function(usuarioSalvo) {
                formulario.reset();
                carregarUsuarios();
            })
            .catch(function(erro){
                alert('Erro ao salvar usuário.');
            });
    }
})

function prepararEdicao(nome, cargo) {

    document.getElementById('campoNome').value = nome;
    document.getElementById('campoCargo').value = cargo;

    formulario.querySelector('button').innerHTML = 'Atualizar Usuário';

    nomeUsuarioSendoEditado = nome;
}

window.addEventListener('DOMContentLoaded', carregarUsuarios);