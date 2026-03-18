let numUmSubtracao; //A variável não foi nomeada apenas como "numUm" para que não ocorra conflitos ao ultilizar o "Merge"
let numDoisSubtracao;
let resultadoSubtracao; // Resultado da subtração

//As variáveis "nuUmSubtracao" e "numDoisSubtracao" foram definidas na linguagem Camel Case e representam os dois números da subtração. 

numUmSubtracao = Number(Prompt("Por favor, insira o primeiro número da subtração"));
numDoisSubtracao = Number(Prompt("Por fim, insira o segundo número da subtração"));
resultadoSubtracao = numUm - numDois;

//"tofixed" é uma ferramenta ultilizada para delimitar a quantidade de casas decimais do resultado. O número entre parênteses é essa quantidade de casas decimais.

    alert(`O resultado da subtração dos dois números desejados é: ${resultadoSubtracao.tofixed(2)}!`);