/* Construa um programa que pegue todas as listas dele, uma de cada vez, e coloque os inteiros pares no início e os inteiros ímpares no final. */

let arr ="";
arr.split("")

let arrVazio = []; 

for(numbers in arr){
  if(arr[numbers] % 2===0){
    arrVazio.unshift(arr[numbers])
  }else{arrVazio.push(arr[numbers])}
}
console.log(arrVazio)
