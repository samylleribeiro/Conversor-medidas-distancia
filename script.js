function convertercm_m() {
    // 1. Pegar os valores que o usuário digitou
    let num = parseFloat(document.getElementById('num').value);
    let resultado = document.getElementById('resultado');

    // 2. Verificar se os campos não estão vazios
    if (isNaN(num)) {
        resultado.innerText = "Por favor, digite o valor que quer converter! ❌";
        resultado.style.color = "red";
        return;
    }
    // 3. verificar se o numero não e zero
    if (num === 0) {
         resultado.innerText = "Não e possível converter o 0! ❌";
        resultado.style.color = "red";
        return;
    }
    // 3. Verificar a subtração
    let resultadoConversão = num/100;
    resultado.style.color = "blue";
  // 4. Mostrar o valor na tela
   resultado.innerText = `${num}cm equivale a ${resultadoConversão.toFixed(2)}m`;
  }


function converterm_cm() {
    // 1. Pegar os valores que o usuário digitou
    let num = parseFloat(document.getElementById('num').value);
    let resultado = document.getElementById('resultado');

    // 2. Verificar se os campos não estão vazios
    if (isNaN(num)) {
        resultado.innerText = "Por favor, digite o valor que quer converter! ❌";
        resultado.style.color = "red";
        return;
    }
    // 3. verificar se o numero não e zero
    if (num === 0) {
         resultado.innerText = "Não e possível converter o 0! ❌";
        resultado.style.color = "red";
        return;
    }
    // 3. Verificar a subtração
    let resultadoConversão = num*100;
    resultado.style.color = "blue";
  // 4. Mostrar o valor na tela
   resultado.innerText = `${num}m equivale a ${resultadoConversão}cm`;
  }

 
function converterm_km() {
    // 1. Pegar os valores que o usuário digitou
    let num = parseFloat(document.getElementById('num').value);
    let resultado = document.getElementById('resultado');

    // 2. Verificar se os campos não estão vazios
    if (isNaN(num)) {
        resultado.innerText = "Por favor, digite o valor que quer converter! ❌";
        resultado.style.color = "red";
        return;
    }
    // 3. verificar se o numero não e zero
    if (num === 0) {
         resultado.innerText = "Não e possível converter o 0! ❌";
        resultado.style.color = "red";
        return;
    }
    // 3. Verificar a subtração
    let resultadoConversão = num/1000;
    resultado.style.color = "blue";
  // 4. Mostrar o valor na tela
   resultado.innerText = `${num}m equivale a ${resultadoConversão.toFixed(3)}km`;
  } 


function converterkm_m() {
    // 1. Pegar os valores que o usuário digitou
    let num = parseFloat(document.getElementById('num').value);
    let resultado = document.getElementById('resultado');

    // 2. Verificar se os campos não estão vazios
    if (isNaN(num)) {
        resultado.innerText = "Por favor, digite o valor que quer converter! ❌";
        resultado.style.color = "red";
        return;
    }
    // 3. verificar se o numero não e zero
    if (num === 0) {
         resultado.innerText = "Não e possível converter o 0! ❌";
        resultado.style.color = "red";
        return;
    }
    // 3. Verificar a subtração
    let resultadoConversão = num*1000;
    resultado.style.color = "blue";
  // 4. Mostrar o valor na tela
   resultado.innerText = `${num}km equivale a ${resultadoConversão}m`;
  } 

  function convertercm_km() {
    // 1. Pegar os valores que o usuário digitou
    let num = parseFloat(document.getElementById('num').value);
    let resultado = document.getElementById('resultado');

    // 2. Verificar se os campos não estão vazios
    if (isNaN(num)) {
        resultado.innerText = "Por favor, digite o valor que quer converter! ❌";
        resultado.style.color = "red";
        return;
    }
    // 3. verificar se o numero não e zero
    if (num === 0) {
         resultado.innerText = "Não e possível converter o 0! ❌";
        resultado.style.color = "red";
        return;
    }
    // 3. Verificar a subtração
    let resultadoConversão = num/100000;
    resultado.style.color = "blue";
  // 4. Mostrar o valor na tela
   resultado.innerText = `${num}cm equivale a ${resultadoConversão.toFixed(5)}km`;
  } 


  function converterkm_cm() {
    // 1. Pegar os valores que o usuário digitou
    let num = parseFloat(document.getElementById('num').value);
    let resultado = document.getElementById('resultado');

    // 2. Verificar se os campos não estão vazios
    if (isNaN(num)) {
        resultado.innerText = "Por favor, digite o valor que quer converter! ❌";
        resultado.style.color = "red";
        return;
    }
    // 3. verificar se o numero não e zero
    if (num === 0) {
         resultado.innerText = "Não e possível converter o 0! ❌";
        resultado.style.color = "red";
        return;
    }
    // 3. Verificar a subtração
    let resultadoConversão = num*100000;
    resultado.style.color = "blue";
  // 4. Mostrar o valor na tela
   resultado.innerText = `${num}km equivale a ${resultadoConversão}cm`;
  } 

  
    function limpar() {
    // Limpa os valores dos inputs
    document.getElementById('num').value = "";
    // Limpa o texto do resultado 
    document.getElementById('resultado').innerText = "";
    document.getElementById('resultado').style.color = "black";
}
