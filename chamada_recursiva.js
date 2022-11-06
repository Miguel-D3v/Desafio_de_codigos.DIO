/* Criar uma função que receba um número inteiro N, calcule e imprima o somatório de todos os números de N até 0.   */


function somatorio(n){

let newArr=[];

for(i=0;i<=n; i++){
  newArr.push(i)
}
const total=newArr.reduce((acc,numbers)=>acc+numbers)
return(total)
}
console.log(somatorio(10)) //saída=55

