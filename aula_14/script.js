// PASSO 1: SELECIONAR OS ELEMENTOS
const caixaTexto = document.querySelector('#campoNome');
const botaoDia = document.querySelector('#btnDia');
const botaoNoite = document.querySelector('#btnNoite');
const areaResultado = document.querySelector('#painelResultado');
const botaoTema = document.querySelector('#btnTema');
const corpo = document.querySelector('#corpo')

// PASSO 2 & 3: ESCUTAR E MODIFICAR
botaoDia.addEventListener('click', function() {
    let nomeUsuario = caixaTexto.value; // Pega o texto do input
    areaResultado.textContent = `Bom dia, ${nomeUsuario}!`;
    areaResultado.style.backgroundColor='#f6f35b';
    //altera as classes para destacar apenas este botão
    botaoDia.classList.add('botao-clicado');
    botaoNoite.classList.remove('botao-clicado');
});

// evento de boa noite
botaoNoite.addEventListener('click', function() {
    let nomeUsuario = caixaTexto.value; // Pega o texto do input
    areaResultado.textContent = `Boa noite, ${nomeUsuario}!`;
    areaResultado.style.backgroundColor='#a7a4f6';
    //altera as classes para destacar apenas este botão
    botaoNoite.classList.add('botao-clicado');
    botaoDia.classList.remove('botao-clicado');
});

// evento de modo escuro (toggle)
botaoTema.addEventListener('click', function () {
    // prompt("OLA")
    corpo.classList.toggle('modo-escuro');
});