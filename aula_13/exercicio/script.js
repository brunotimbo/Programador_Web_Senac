let numero = Number(prompt("Digite um valor:"));

valorDesconto = numero * 0.15;
valorFinal = numero - valorDesconto;

console.log("O valor do desconto é R$ " + valorDesconto.toFixed(2));
console.log("O valor final é R$ " + valorFinal.toFixed(2));