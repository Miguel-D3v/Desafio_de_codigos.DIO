/* Dados dois números, verifique se eles são iguais. Caso sejam, retorne "Sao iguais!”. Caso contrário, retorne "Nao sao iguais!” sem as aspas.  */

function equal(A,B){
  if (A===B){
    return("Sao iguais!")
  }else{ return("Nao sao iguais!")
  }
}
console.log(equal(5,7))
