let textoResultado = document.getElementById("resultado");

function calcularMedia() {
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);
    let nota4 = Number(document.getElementById("nota4").value);
    
    media = (nota1 + nota2 + nota3 + nota4)/4

    if (media >= 7) {
        textoResultado.innerText = `A média é ${media}. Parabéns!`;
    }
    else {
        textoResultado.innerText = `A média é ${media}. Estude mais!`;
    }
    
}



