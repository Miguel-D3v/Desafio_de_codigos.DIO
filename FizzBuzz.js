/*Criar uma função que faça um número como
argumento e retorne "Fizz", "Buzz" ou "FizzBuzz". */

function fizzBuzz(number){
if(number % 3===0 && resultado % 5===0){
  return("FizzBuzz")
}
  else if(number % 3===0){
   return("Fizz")
  }
  else if(number % 5===0){
   return("Buzz")
  }
  else {return(number)}
}
console.log(fizzBuzz(10)) //saída= Buzz
