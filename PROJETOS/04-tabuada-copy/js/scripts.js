/*=========================
  Bloco 1: Seleção de elementos do DOM
===========================*/

//Pensamento = Preciso de refeência para todos os elementos que vou ler ou modificar.

const multiplicationForm = document.querySelector('#multiplication-form');
const numberInput = document.querySelector('#number');
const multiplicationInput = document.querySelector('#multiplicator');
const multiplicationTitle = document.querySelector('#multiplication-title span');
const multiplicationTable = document.querySelector('#multiplication-operations');


/*====================================
  BLOCO 2: FUNCTION QUE GERA A TABUADA
======================================*/

// Pensamento: "Vou isolar a lógica de criação em uma função reutilizável.
// Ela recebe dois números e constrói o HTML dinamicamente."

const createTable = (number, multiplicatorNumber) => {

  // 2.1 Limpar o conteúdo anterior 
  // Pensamento: "Se já havia uma tabuada gerada, preciso remover antes de criar a nova"

  multiplicationTable.innerHTML = "";

  // 2.2 = Loop de 1 até o multiplicador informado
  // Pensamento: "Para cada número de 1 até multiplicatorNumber, crio uma linha"
  for (let i = 1; i <= multiplicatorNumber; i++) {

    //2.3 - Calcular o resultado da multiplicação
    const result = number * i;

    // Ex.: number=5, i=3 - result=15

    // 2.4 - Criar a div que representa a linha (row)
    // Pensamento: "Cada linha é uma <div class='row'>  contendo duas subdivs."
    const row = document.createElement("div");
    row.classList.add("row");

    //2.5 - Criar div de Operação (ex.: "5 x 3 =")
    const operation = document.createElement("div");
    operation.classList.add("operation");
    operation.textContent = `${number} x ${i} =`;
    // Uso textContent (não innerHTML) porque é texto puro, sem tags internas

    // 2.6 - Criar a div do resultado (ex.: "15");

    const resultDiv = document.createElement("div");
    resultDiv.classList.add("result");
    resultDiv.textContent = result;

    // 2.7 Montar a hierarquia: operation e resultDiv dentro do row
    // Pensamento: "Primeiro monto a row, depois insiro no container principal"

    row.appendChild(operation);
    row.appendChild(resultDiv);

    //2.8 - Inserir a row completa no container da tabuada
    multiplicationTable.appendChild(row);


  }

  //2.9 - Atualizar o título com o número escolhido
  // Pensamento: "o <span> dentro do <h2> deve mostrar '5'"
  multiplicationTitle.innerText = number;
};

/*=============================================
BLOCO 3: Evento de submit do formulário
===============================================*/
// Pensamento: "Quando o usuário clicar em 'Calcular' ou pressionar Enter..."

multiplicationForm.addEventListener("submit", (e) => {

  // 3.1 - Impedir o comportamento padrão (recarregar a página)
  // Pensamento: "SEMPRE previnir o default em formulários com JavaScript"

  e.preventDefault();

  //3.2 - Capturar e converter os valores dos inputs
  // Pensamento: "value retorna string. O operador + converte para número."
  const multiplicationNumber = +numberInput.value;
  const multiplicatorNumber = +multiplicationInput.value;

  //3.3 - Validar se ambos os campos estão preenchidos
  // Pensamento: "Se algum for NaN (vazio) ou 0, não faz sentido continuar.

  if (!multiplicationNumber || !multiplicatorNumber) return;
  // O return vazio interrompe a execução do evento aqui.

  // 3.4 - Chamar a função que gera a tabuada 

  createTable(multiplicationNumber, multiplicatorNumber);
});