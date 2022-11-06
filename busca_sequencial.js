/*

Considere um array de 10 elementos do tipo inteiro: 

Os elementos são {64, 137, -16, 43, 67, 81, -90, 212, 10, 75}. 

● Carregue esses elementos em um array.  

● Implementação da busca sequencial: 

● Crie um metodo  que realiza uma busca sequencial.  

● Se o valor constar no array, retorne um texto contendo o valor e sua respectiva posição no array. Caso contrario retorne um texto dizendo que o número não foi encontrado.*/

let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 



let valor = 64;

if(elementos.includes(valor)){
  console.log("Achei "+valor+" na posicao "+ elementos.indexOf(valor))
}else{
console.log("Numero "+valor +" nao encontrado!")
}
