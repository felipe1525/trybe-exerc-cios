
function splitSentence(string) {let compiladoDeLetras = "abcdefghijklmnopqrstuvwxyz"; let caixa = ""; 
for (let index = 0; index < compiladoDeLetras.length; index += 1)
{if (compiladoDeLetras[index] === string[index]) 
   {caixa.push(string[index])}  else { caixa = caixa + " "}  }   return caixa }

   splitSentence("oi trybe")



   