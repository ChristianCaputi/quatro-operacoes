alert("Vamos multiplicar dois números?");

let numUmMultiplicacao;
let numDoisMultiplicacao; 
let resultadoMultiplicacao; //resultado da multiplicação

// Para realizar a multiplicação vamos utilizar dois números

numUmMultiplicacao = Number(prompt("Insira o primeiro número que deseja multiplicar"));
numDoisMultiplicacao = Number(prompt("Agora, insira o segundo numero para multiplicarmos"));
resultadoMultiplicacao = numUmMultiplicacao*numDoisMultiplicacao;

alert(`Multiplicando esses dois números, obtemos o resultado ${resultadoMultiplicacao.toFixed(2)}`);