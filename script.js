alert("Vamos brincar com as 4 operações matemáticas?");


alert("Que tal começar multiplicando dois números?");

let numUmMultiplicacao;
let numDoisMultiplicacao; 
let resultadoMultiplicacao; //resultado da multiplicação

// Para realizar a multiplicação vamos utilizar dois números ditados pelo usuario

numUmMultiplicacao = Number(prompt("Insira o primeiro número que deseja multiplicar"));
numDoisMultiplicacao = Number(prompt("Agora, insira o segundo numero para multiplicarmos"));
resultadoMultiplicacao = numUmMultiplicacao*numDoisMultiplicacao;

alert(`Multiplicando esses dois números, obtemos o resultado ${resultadoMultiplicacao.toFixed(2)}`);

alert("Agora, vamos somar dois numeros?");
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

alert("E que tal subtrairmos números?");


let numUmSubtracao; //A variável não foi nomeada apenas como "numUm" para que não ocorra conflitos ao ultilizar o "Merge"
let numDoisSubtracao;
let resultadoSubtracao; // Resultado da subtração

//As variáveis "nuUmSubtracao" e "numDoisSubtracao" foram definidas na linguagem Camel Case e representam os dois números da subtração. 

numUmSubtracao = Number(prompt("Por favor, insira o primeiro número da subtração"));
numDoisSubtracao = Number(prompt("Por fim, insira o segundo número da subtração"));
resultadoSubtracao = numUmSubtracao - numDoisSubtracao;

//"tofixed" é uma ferramenta ultilizada para delimitar a quantidade de casas decimais do resultado. O número entre parênteses é essa quantidade de casas decimais.

    alert(`O resultado da subtração dos dois números desejados é: ${resultadoSubtracao.toFixed(2)}!`);

    //Colocamos as perguntas para deixar a mudança entre operações mais fluida

    alert("Por fim, vamos aplicar a divisão em dois números?");