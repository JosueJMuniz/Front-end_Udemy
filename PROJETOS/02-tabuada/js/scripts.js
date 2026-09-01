// Seleção de elementos 
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const multiplicationTitle = document.querySelector("#multiplication-title span");
const multiplicationTable = document.querySelector("#multiplication-operations");

// Função que gera a tabuada
const createTable = (number, multiplicatorNumber) => {
  // Limpa o conteúdo anterior da tabela
  multiplicationTable.innerHTML = "";

  // Loop de 1 até o multiplicador informado
  for (let i = 1; i <= multiplicatorNumber; i++) {
    const result = number * i;

    // Cria a div da linha
    const row = document.createElement("div");
    row.classList.add("row");

    // Cria a div da operação
    const operation = document.createElement("div");
    operation.classList.add("operation");
    operation.textContent = `${number} x ${i} =`;

    // Cria a div do resultado
    const resultDiv = document.createElement("div");
    resultDiv.classList.add("result");
    resultDiv.textContent = result;

    // Monta a linha
    row.appendChild(operation);
    row.appendChild(resultDiv);

    // Adiciona a linha na tabela
    multiplicationTable.appendChild(row);
  }

  // Atualiza o título com o número da tabuada
  multiplicationTitle.innerText = number;
};

// Evento de submit do formulário
multiplicationForm.addEventListener("submit", (e) => {
  e.preventDefault(); // IMPEDE O RECARREGAMENTO DA PÁGINA

  const multiplicationNumber = +numberInput.value;
  const multiplicatorNumber = +multiplicationInput.value;

  // Validação: ambos precisam ser números positivos
  if (!multiplicationNumber || multiplicatorNumber <= 0) {
    if() {
      
    }
  }
  // Limpa mensagem de placeholder se existir
  // (opcional, mas deixa a UX melhor)
  
  // Chama a função para gerar a tabuada
  createTable(multiplicationNumber, multiplicatorNumber);
});