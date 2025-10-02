console.log('Funções em JavaScript');

/* 1 - Funções */
/* let x = prompt("Insira um número para saber se é par");
function encontraPar(x){
  if(x % 2 === 0){
    alert(`O número ${x} é PAR`);
  } else if(x % 2 != 0){
    alert(`O número ${x} é IMPAR`);
  }
  return x;
}
encontraPar(x); */

// function minhaFuncao(){
//   console.log("Testando");
// }

// minhaFuncao();

// /* 2 - Retorno das funções */
// console.log("\n2 - Retorno das funções");

// function calcularIdade(dia, mes, ano) {
//   //Cria a data de nascimento (mês é o 0-indexed, então subtraímos 1)
//   const dataNascimento = new Date(ano, mes - 1, dia);

//   //Data atual
//   const dataAtual = new Date();

//   // Calcula a diferença em anos
//   let idade = dataAtual.getFullYear() - dataNascimento.getFullYear();

//   // Ajusta a idade se ainda não fez aniversário
//   const mesAtual = dataAtual.getMonth();
//   const diaAtual = dataAtual.getDate();

//   if(mesAtual < (mes - 1) || (mesAtual === (mes - 1) && diaAtual < dia)){
//     idade--;
//   }

//   return console.log(`Sua idade é: ${idade}`);
// }

// calcularIdade(24, 2, 2000);

// const a = 10;
// const b = 20;
// const c = 30;
// const d = 40;

// function soma(n1, n2){
//   return n1 + n2;
// }

// const resultado = soma(a, b);

// console.log(resultado);

// console.log(soma(c, b));

/* 3 - Escopo das Funções */
/* let m = 30;

function testandoEscopo(){
  let m = 12;
  console.log(`M dentro da função é: ${m}`);
}

testandoEscopo();

console.log(`M fora da função é: ${m}`); */

// console.log("\n 4 - Escopo Aninhado");
// /* 4- Escopo Aninhado */

// let m = 10

// function escopoAninhado() {
//   let m = 20

//   if (true) {
//     let m = 30

//     if (true) {
//       let m = 40

//       console.log(m);
//     }
//     console.log(m);
//   }
//   console.log(m);
// }

// escopoAninhado();

// console.log(m);

// /* 5 - Arrow Function */
// console.log("\n 5 - Arrow Functions");

// const testeArrow = () => {
//   console.log("Esta é uma Arrow Function => ");
// }

// testeArrow();

// const parOuImpar = (n1) => {
//   if (n1 % 2 === 0) {
//     console.log("Número PAR");
//     return
//   } else {
//     console.log("Número ÍMPAR");
//   }
// }

// parOuImpar(985);

// /* 6 - Arrow Functions ainda mais simplificadas */

// const raizQuadrada = (x) => {
//   return x * x
// }

// const arrowMinimal = () => console.log("Esta é uma Arrow Function com sintaxe ainda menor!");

// arrowMinimal();

// console.log(raizQuadrada(4));

// const raizQuadrada2 = (x) => x * x;
// console.log(raizQuadrada2(25));
// console.log(raizQuadrada2(15));

// /* 7 - Parâmetro Opcional */

// const multiplication = function (m, n) {
//   if (n === undefined) {
//     return m * 2
//   } else {
//     return m * n
//   }
// }

// console.log(multiplication(5));

// console.log(multiplication(3, 6));

// const greeting = (name) => {

//   if (!name) {
//     console.log("Olá!");
//     return
//   }

//   console.log(`Olá ${name}!`);
// }

// greeting()

// greeting("Miriã")

/* 8 - Argumento Default */

const customGreeting = (name, greet = "Olá") => {
  return `${greet}, ${name}!`
}

console.log(customGreeting("Josué"));

console.log(customGreeting("Josué", "Bom dia"));

const repeatText = (text, repeat = 2) => {

  for(let i = 0; i < repeat; i++){
    console.log(text);

  }
  return
};

repeatText("Repete 2 vezes");

repeatText("Repete 5 vezes", 5 );

/* 9 Closure */

function someFunction() {
  let txt = "Alguma Coisa";

  function display() {
    console.log(txt);
  }

  display();
}

someFunction();

/* Meu exemplo de closure */

function indiceDeMassa(n1, n2) {
  let imc = n2 / Math.pow(n1, 2) ;

  function exibeResultado() {
    console.log(`O imc é igual á: ${imc}`);
  }
  exibeResultado();
}

indiceDeMassa(1.67, 70);

const calculaImc = (n1, n2) => {
  let imc = n2 / Math.pow(n1, 2);
  
  return imc;
};

console.log(calculaImc(1.67, 56));

/*10  Mais sobre CLOSURE */

const multiplicationClosure = (n) => {
  return (m) => {
    return n * m;
  };
};

const c1 = multiplicationClosure(5);

const c2 = multiplicationClosure(10);

console.log(c1);

console.log(c2);

console.log(c1(5));
console.log(c2(10));

/* Outro exemplo de Closure-  */

console.log("Closure - Contador que lembra");

function criaContador() {
  let contagem = 0; // Variável "lembrada" pela closure

  return function() {
    contagem += 1;
    return contagem;
  };
}

// Vamos testar

const meuContador = criaContador();

console.log(meuContador()); // 1
console.log(meuContador()); // 2
console.log(meuContador()); // 3

/* 11 - Recursion */

const untillTen = (n, m) => {
  if (n <= 10){
    console.log("A função parou de executar!");
  } else {
    const x = n - m;

    console.log(x);

    untillTen(x, m);
  }
};

untillTen(100, 7);

/* Infinite Recursion  */

/* function run() {
  console.log("Executando...");
  run();
}

run() */

/* Exemplo de recursão. Calculando Fatorial */

function factorial(x) {
  if(x === 0) {
    return 1
  } else {
    return x * factorial(x - 1)
  }
}

const num = 6

const result = factorial(num)

console.log(`O fatorial do número ${num} é: ${result}`);

/* Outro exemplo de recursão: Contagem Regressiva */

function contagemRegressiva(n) {
  if (n <= 0) {
    console.log("Fogo!");
    return;
  }

  console.log(n);

  contagemRegressiva(n - 1);
}

contagemRegressiva(5);