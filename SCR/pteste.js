

function exer2(n){
var resul = []

for (var index = 1; index <= 10; index++) {
  receber = n * index
  resul.push(receber)
  
}return resul
 


}

function exer1(inicio,fim) {
let passo = 2
var retorno = []
  
  while(inicio <= fim) {
    inicio += passo
    retorno.push(inicio)
    
    
  }alert(' ep teste' + inicio + fim)
  return retorno
  
  

}
    
 

 
 


  

 
 

  function soma(a, b) {
    
    return a + b
    
  }

  function div(a, b) {
    return a - b *5
  }

  function teste222(element1, element2) {
    console.log(element1, element2)

    return {
      element1,
      element2
    }
  }

  console.log(teste222())
  module.exports = {sum, soma, div}
  
  
 