//PASSO 1: SELECIONAR ELEMENTOS DO DOM
const caixaTexto = document.querySelector('#campoNome');
const botaoDia = document.querySelector('#btnDia');
const botaoNoite = document.querySelector('#btnNoite');
const areaResultado = document.querySelector('#painelResultado');

//PASSO 2 E 3: EXCUTAR E MODIFICAR
botaoDia.addEventListener('click', function() {
    let nomeUsuario = caixaTexto.value;
    areaResultado.textContent = `Bom dia, ${nomeUsuario}!`;
})

botaoNoite.addEventListener('click', function() {
    let nomeUsuario = caixaTexto.value;
    areaResultado.textContent = `Bom noite, ${nomeUsuario}!`;
})