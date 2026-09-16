let distancia = Number(prompt("Digite a distância percorrida (Km)."))
let consumoCombustivel = Number(prompt("Digite o consumo de combustível (L)."))

consumoMedio = distancia / consumoCombustivel

console.log("A média de consumo de combustível foi de " + consumoMedio.toFixed(2) +"Km/L.")