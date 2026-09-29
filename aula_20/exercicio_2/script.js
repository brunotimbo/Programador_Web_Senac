const campoTemperatura = document.getElementById('campoTemperatura');
const botaoConsultar = document.getElementById('botaoConsultar');
const textoResultado = document.getElementById('textoResultado');
const tituloH2 = document.getElementById('tituloH2');
const tituloH3 = document.getElementById('tituloH3');
const paragrafo = document.getElementById('paragrafo');

console.log(campoTemperatura)

function verificarClima() {

    const valorTemperatura = parseFloat(campoTemperatura.value);

    if (isNaN(valorTemperatura)) {

        textoResultado.innerHTML = 'Insira uma temperatura válida.'
        console.log('Insira uma temperatura válida.')
    }

    if (valorTemperatura <= 10 ){

        tituloH2.innerHTML = 'Frio Intenso a Extremo' 
        tituloH3.innerHTML = 'Abaixo de 10 °C' 
        paragrafo.innerHTML = 'Aqui o estilo se alia à tecnologia têxtil para garantir a sobrevivência confortável a baixas temperaturas e ventos cortantes.' 
        console.log(valorTemperatura);

    } else if (valorTemperatura > 10 && valorTemperatura <=15) {

        tituloH2.innerHTML = 'Frio Moderado'
        tituloH3.innerHTML = '(10 °C a 14 °C)'
        paragrafo.innerHTML = 'O corpo já começa a demandar um isolamento térmico real para manter o calor corporal' 
        console.log(valorTemperatura);

    } else if (valorTemperatura > 15 && valorTemperatura <=25) {

        tituloH2.innerHTML = 'Clima Ameno e Transição'
        tituloH3.innerHTML = '(15 °C a 24 °C)'
        paragrafo.innerHTML = 'Esta faixa é famosa pela oscilação ao longo do dia, exigindo versatilidade. É o cenário ideal para o estilo meia-estação.' 
        console.log(valorTemperatura);

    } else {
        
        tituloH2.innerHTML = 'Calor Intenso'
        tituloH3.innerHTML = '(Acima de 25 °C)'
        paragrafo.innerHTML = 'O foco aqui é o frescor absoluto, a respirabilidade da pele e a proteção solar.' 
        console.log(valorTemperatura);

    }

    textoResultado.style.display = 'block';

}

botaoConsultar.addEventListener('click', verificarClima);