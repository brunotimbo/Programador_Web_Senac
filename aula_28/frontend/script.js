// mapear o fomulário no html
const formulario = document.getElementById('formulario');
const listaVisual = document.getElementById('listaVisual');

function carregarUsuarios() {
    fetch('http://localhost:3000/usuarios')
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (listaDeUsuarios) {
            listaVisual.innerHTML = '';
            listaDeUsuarios.forEach(function (user) {
                const itemLista = document.createElement('li')
                itemLista.innerHTML = `
                    <span> <strong> ${user.nome} </strong> - ${user.cargo} </span>
                    <div class="lista-user">
                        <button class="btn-editar" onclick="prepararEdicao('${user.nome}, ${user.cargo}')"> Editar </button>
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

    // guarda valor digitado nos campos do formulário
    const nomeValor = document.getElementById('campoUsuario').value;
    const cargoValor = document.getElementById('campoCargo').value;

    // cria objeto em js
    const usuario = {
        nome: nomeValor,
        cargo: cargoValor
    }

    // envia a requisição (endereço e objeto)
    fetch('http://localhost:3000/usuarios', {
        method: 'POST',                                     // objetivo de enviar dado
        headers: { 'Content-Type': 'application/json' },    // informa ao express formato de texto json 
        body: JSON.stringify(usuario)                       // tranforma objeto js em texto json        
    })
        // primeiro then pega a resposta do servidor e converte em objeto
        .then(function (respostaDoServidor) {
            return respostaDoServidor.json();
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
})














window.addEventListener('DOMContentLoaded', carregarUsuarios);