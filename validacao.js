/*Dada uma string com apenas os seguintes caracteres '(', ')', '{', '}', '[', ']' determine se uma determinada string é válida. 
*/

function isValid(string){

   let str=string.split("")

   const parenteses=/\(\)/;
   const chaves=/\{\}/;
   const colchetes=/\[\]/;
   const space=/ /;

    if (string==="()"){
     return parenteses.test(string)
      } else if (string==="{}"){
     return chaves.test(string)
      } else if (string==="[]"){
     return colchetes.test(string)
      } else if (string===" "){
     return space.test(string)
      }
      else {return false}

}


console.log(isValid())
