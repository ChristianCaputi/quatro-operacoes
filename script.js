alert("Vamos multiplicar dois números?");

let numUm;
let numDois;
let resultado; // da multiplicação

// Para realizar a multiplicação vamos utilizar dois números

numUm = Number(prompt("Insira o primeiro número que deseja multiplicar"));
numDois = Number(prompt("Agora, insira o segundo numero para multiplicarmos"));
resultado = numUm*numDois;

alert(`Multiplicando esses dois números, obtemos o resultado ${resultado.toFixed(2)}`);