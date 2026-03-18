// let serve para criar uma variável

let numUm;
let numDois;
let result;

//  Number faz o carácter ser lido como número
//  prompt faz aparecer uma caixa de texto para o usuário inserir os números desejados

numUm = Number(prompt("Digite o primeiro número:"));
numDois = Number(prompt("Digite o segundo número:"));

//result é a soma das variáveis numUm + numDois

result = numUm + numDois;

// alert serve para exibir uma menagem na tela do usuário
// toFixed serve para definir o número de casas decimais 

alert(`O soma dos dois números é ${result.toFixed(2)}`);