const numero1 = document.getElementById('campoNumero-1')
const numero2 = document.getElementById('campoNumero-2')
const botaoSomar = document.getElementById('botaoSomar')
const botaoSubtrair = document.getElementById('botaoSubtrair')
const botaoMultiplicar = document.getElementById('botaoMultiplicar')
const botaoDividir = document.getElementById('botaoDividir')
const divResultado = document.getElementById('divResultado')

function somar(n1, n2) {
    return n1 + n2
}

function subtracao(n1, n2) {
    return n1 - n2
}

function multiplicacao(n1, n2) {
    return n1 * n2
}

function divisao(n1, n2) {
    return n1 / n2
}

function calcular(operacao) {
    const valorNumero1 = parseFloat(numero1.value)
    const valorNumero2 = parseFloat(numero2.value)

    

    const resultado = operacao(valorNumero1, valorNumero2)
    alert(resultado)
}



botaoSomar.addEventListener('click', () => calcular(somar))
botaoSubtrair.addEventListener('click', () => calcular(subtracao))
botaoMultiplicar.addEventListener('click', () => calcular(multiplicacao))
botaoDividir.addEventListener('click', () => calcular(divisao))

