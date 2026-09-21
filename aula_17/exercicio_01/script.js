function verificarIdade() {
    let idade = document.getElementById("campoIdade").value;
    let textoResultado = document.getElementById("resultado");

    if (idade < 18) {
        textoResultado.innerText = "Acesso Negado! Você é MENOR de idade.";
    }
    else {
        textoResultado.innerText = "Acesso Liberado! Você é MAIOR de idade."
    }
}