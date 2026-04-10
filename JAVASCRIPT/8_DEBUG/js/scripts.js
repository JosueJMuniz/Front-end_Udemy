// 1 - Strict
"use strict"; // declara que usaremos o modo STRICT

// opa = testes; > No JS comum podemos criar variáveis sem o uso de palavras reservadas, let, const, var - Isso é o que se chama de variável global - DESUSO

// Ao ativar o STRICT torna-se impossível declarar esse tipo de variável

const opa = "teste";

/* const undefined = 10; */

//delete [].length;

// 2 - console.log

let a = 1;
let b = 2;

if (a == 1) {
  a = b + 2
}

console.log(a);

for (let i = 0; i < b; i++) {
  a = a + 2;
  console.log(a);
}

if (a > 5) {
  a = 25;
}

/* 3 - Método de debug: debugger */

let c = 1
let d = 2

if (c === 1) {
  c = d + 2;
}

// debugger;

for (let i = 0; i < d; i++) {
  c = c + 2;

  d = c % 12;
}

console.log("Executou o loop");

// debugger;

if (c > 5) {
  c = 25;
}

/* 4 - Tratamento de dados por FUNÇÃO */

function checkNumber(n) {

  const result = Number(n); // converte texto em número

  if (Number.isNaN(result)) {
    console.log("Valor incorreto!");
    return;
  }

  console.log("Valor correto!");
  return result;
}

checkNumber(34);
checkNumber("34");
checkNumber("Olá");
checkNumber({});
checkNumber("teste");

/* Meu exemplo tramento de dados:  */

/* function checkString(str) {

  const converted = String(str);

  if(typeof converted !== 'string') {
    console.error("Valor incorreto");
    return null;
  }

  console.log("Valor correto!");
  return converted;

}

checkString(212);
checkString("Sou String");
checkString('Também sou string');
checkString(98);
 */

/* Código melhorado com validação ANTES da converção:  */

function checkString(value) {

  // Valida se pode ser convertido de forma significativa
  if (value === null || value === undefined) {

    console.warn("Valor nulo ou indefinido!");
    return String(value);
  } else if (typeof (value) === 'string') {
    return console.warn(`"${value}" : Já é uma string!`);
  }

  // Converte para string
  const result = String(value);

  // Verifica se a conversão produziu algo útil
  if (result.trim().length === 0) {
    console.warn("String vazia após converção");
  }



  console.log(`Valor convertido: "${result}"`);
  return result;
}

checkString(234);
checkString("Valor");
checkString(-23.34);
checkString({});
checkString();
checkString("Teste");

/* 5 - Exceptions */

let x = 10;

if (x != 11) {
  // throw new Error("O valor de x não pode ser diferente de 11!");
}

/* 6 - Try catch */

try {

  const soma = x  + y;

} catch(error) {
  console.log(`Erro no programa: ${error}`);
}

/* 7 - Finally */

try { 
  const value = checkNumber("asd");

  if(!value) {
    throw new Error("Valores inválidos");
  }
} catch(error) {
  console.log(`Opa, aconteceu um problema: ${error}`);
} finally {
  console.log("O código foi executado!");
}

/* 8 - Assertions */

function checkArray(arr) {

  if (arr.length === 0) {
    throw new Error("O array precisa ter elementos");
  } else {
    console.log(`O array tem ${arr.length} elementos`);
  }
}

// checkArray([]);

checkArray([12, 32, 11, 45, 0]);