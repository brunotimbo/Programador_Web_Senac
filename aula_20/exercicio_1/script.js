const numero = document.getElementById('campoNumero'); 
const botao = document.getElementById('botaoVerificar'); 
const textoResultado = document.getElementById('textoResultado'); 

function verificarNumero() {
    const numeroValor = Number(numero.value);

    if (numero.value === "") {
        alert("Por favor, digite um número!");
        return;
    }

    if (numeroValor > 0) { 
        textoResultado.innerText = `O número ${numeroValor} é positivo.`; 
    } else if (numeroValor < 0) { 
        textoResultado.innerText = `O número ${numeroValor} é negativo.`; 
    } else { 
        textoResultado.innerText = 'O número é Zero.'; 
    } 

    // 3. Torna o texto visível na tela
    textoResultado.style.display = 'block'; 
} 

botao.addEventListener('click', verificarNumero);
