const campoTarefa = document.getElementById('campoTarefa')
const botaoAdicionarTarefa = document.getElementById('botaoAdicionarTarefa')
//const divListaTarefas = document.getElementById('divListaTarefa')
const listaTarefas = []

function adicionarTarefa() {

    const conteudo = campoTarefa.value

    if(conteudo.trim() != "") {

        console.log('teste')

        listaTarefas.appendChild(conteudo)

        console.log(listaTarefas)

    } else {
        alert('O campo não pode ser vazio.')
    }

}

botaoAdicionarTarefa.addEventListener('click', ()=> adicionarTarefa())