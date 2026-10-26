/* Operadores aritméticos:
+ Soma 
- Subtração 
* Multiplicação
/ Divisão 
++ Incremento ( soma mais 1)
-- Decremento ( subrai menos 1) 

Operadores de Atribuição:
 =igual 
 += mais ou igual
 -= menos ou igual 
 /= dividido ou igual 
 *= multiplica ou igual

 Operadores de  Sequencia:
 + ( serve para concatenar valores 
 ( string ou variáveis) )
  - ( serve para substituir  valores 
  (string ou variáveis))


  Operadores de comparação:
   retorna True (verdadeiro) ou false (falso)

   == (comparar 2 valores)
   ===(comparar valores e tipo de dado)
   != (diferente) de valores apenas
   !== (comparar a diferença de valores e 
   tipo de dado)


  < menor / > maior
  <= menor ou igual  / >/ maior ou igual

  */

  function somar(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let resultado = n1 + n2;
    document.getElementById("resultado")
    .innerHTML = resultado;
   

    const corResultado = document.getElementById("resultado")
   if (resultado<0){
     corResultado.style.backgroundColor=
     "red"
   }
   else{
    corResultado.style.backgroundColor=
    "lighgreen"
   }
  }

function subtrair(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let resultado = n1 - n2;
    document.getElementById("resultado")
    .innerHTML = resultado;
    const corResultado = document.getElementById("resultado")
   if (resultado<0){
     corResultado.style.backgroundColor=
     "red"
   }
   else{
    corResultado.style.backgroundColor=
    "lighgreen"
   }
}


function multiplicar(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let resultado = n1 * n2;
    document.getElementById("resultado")
    .innerHTML = resultado;
    
    const corResultado = document.getElementById("resultado")
   if (resultado<0){
     corResultado.style.backgroundColor=
     "red"
   }
   else{
    corResultado.style.backgroundColor=
    "lighgreen"
   }
}

function dividir(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    
    if(n2===0){
      document.getElementById("resultado").innerHTML = "Divisão por 0,não existe!";
        document.getElementById("resultado").style.backgroundColor="lighgreen"
    }

    else{
      let resultado = n1 / n2;
    document.getElementById("resultado")
    .innerHTML = resultado;
  
    const corResultado = document.getElementById("resultado")
   if (resultado<0){
     corResultado.style.backgroundColor=
     "red"
   }
   else{
    corResultado.style.backgroundColor=
    "lighgreen"
   }
   
}
}

function limpar (){
    document.getElementById("num1").value="---";
     document.getElementById("num2").value="---";
      document.getElementById("resultado").value="---";
      document.getElementById("resultado").style.backgroundColor="lighgreen"
}