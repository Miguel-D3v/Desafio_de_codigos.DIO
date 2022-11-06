
// Retorne o valor da soma de todos múltiplos de "a" até o seu limite "n".


const a =5;
const n =20;

let newArray=[];

for(i=a ; i<=n ; i+=a){
  newArray.push(i)
}
const total=newArray.reduce((acc,numbers)=>acc+numbers)
console.log(total) //saída=50
