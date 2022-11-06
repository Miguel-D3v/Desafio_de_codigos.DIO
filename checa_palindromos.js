
/* Construir uma função que recebe uma String e identifique se a mesma é um palíndromo, ou seja, se a String é igual a ela mesma invertida,e imprima "TRUE" se for palindromo ou "FALSE" se nao for palindromo . */


function checaPalindromo(string){
  
  let invertida=string
.split("")
.reverse()
.join("");
if(invertida===string){
  console.log("TRUE")
}else{console.log("FALSE")}
}
checaPalindromo("")
