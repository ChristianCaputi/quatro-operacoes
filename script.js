// let serve para criar uma variável

let numUmSoma;
let numDoisSoma;
let resultSoma;

//  Number faz o carácter ser lido como número
//  prompt faz aparecer uma caixa de texto para o usuário inserir os números desejados

numUmSoma = Number(prompt("Digite o primeiro número:"));
numDoisSoma = Number(prompt("Digite o segundo número:"));

//resultSoma é a soma das variáveis numUmSoma + numDoisSoma

resultSoma = numUmSoma + numDoisSoma;

// alert serve para exibir uma menagem na tela do usuário
// toFixed serve para definir o número de casas decimais 

alert(`O soma dos dois números é ${resultSoma.toFixed(2)}`);