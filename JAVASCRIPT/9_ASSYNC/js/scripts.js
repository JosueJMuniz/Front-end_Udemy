/* 1 - setTimeout */
// console.log("Ainda não executou");

// setTimeout(function () {

//   console.log("Requisição Assíncrona!");

// }, 1000)
// console.log("Ainda não executou 2");

/* como funciona o setTimeout em outro exemplo */

/* let multiplicador = 10;

setTimeout(console.log('O multiplicador é igual a: ' + multiplicador), 1000)

setTimeout(function () {
  let novoMultiplicador = multiplicador * 34;
  console.log('O multiplicador agora tem valor: ' + novoMultiplicador);
}, 2000) */

/* 2 - setInterval  */

// console.log("Ainda não começou");

// setInterval(function(){
//   console.log("Função assíncrona setInterval!");
// }, 3000);

// console.log("Ainda não começou 2");

// meu exemplo: 

/* setInterval(function () {
  console.log("Esta função setInterval adiciona um a cada loop!");
  for (let i = 0; i < setInterval.length; i++) {
    let incrementador = 1;
    console.log("O setInterval adicionou: " + incrementador);
    
  }
}, 2000) */

/* 3 - Promises =>  */

// const promessa = Promise.resolve(5 + 5)

// console.log("Algum código");

// promessa.then(value => {
//   console.log(`A soma é ${value}`);
//   return value;
// })
//   .then((value) => value - 1)
//   .then((value) => console.log(`Agora é ${value}`));

// console.log("Outro código");

// /* Meu exemplo de promise */

// const promessaDois = Promise.resolve(26 % 2 == 0 ? true : false);

// console.log("Aguardando Promise!");

// promessaDois.then(value => {
//   console.log(`É PAR: ${value}`);
//   return value;
// })
//   .then((value) => !value)
//   .then((value) => console.log(`Agora é PAR: ${value}`))

// 4 - Falha nas Promises: 05/05/26
// Promise.resolve(4 * "asd")
//   .then((n) => {
//     if (Number.isNaN(n)) {
//       throw new Error("Valores inválidos");
//     }
//   })
//   .catch((err) => console.log(`Um erro ocorreu: ${err}`));

// // 5 - Rejeitando Promises
// function checkNumber(n) {
//   return new Promise((resolve, reject) => {

//     if (n > 10) {
//       resolve(`O número é maior do que 10!`)
//     } else {
//       reject(new Error("Número muito baixo"));
//     }
//   })
// }

// const a = checkNumber(20);

// const b = checkNumber(10);

// a.then((v) => console.log(`O resultado é ${v}`)).catch((err) => console.log(`Um erro ocorreu: ${err}`));

// b.then((v) => console.log(`O resultado é ${v}`)).catch((err) => console.log(`Um erro ocorreu: ${err}`));

// 6 - Resolvendo várias promisses usando all

const p1 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve(10)
  }, 1000)
});

const p2 = Promise.resolve(10 + 10);

const p3 = new Promise((resolve, reject) => {
  if (30 > 10) {
    resolve(30);
  } else {
    reject("Erro!");
  }
});

Promise.all([p1, p2, p3]).then((values) => console.log(values));
//Meu exemplo de promisses usando all

const prom1 = new Promise((resolve, reject) => {
  setTimeout(function () {
    if (12 != 13) {
      resolve("Diferente");
    } else {
      reject("Erro!");
    }
  }, 2000);
});

const prom2 = new Promise((resolve, reject) => {
  if (20 % 2 == 0) {
    resolve("Par");
  } else {
    reject("Ímpar");
  }
});

const prom3 = Promise.resolve(30 - 12);

Promise.all([prom1, prom2, prom3]).then((values) => console.log(values));

// Async Functions 

async function somarComDelay(a, b) {
  return a + b;
}

somarComDelay(2, 4).then((value) => {
  console.log(`O valor da soma é: ${value}`);
});

console.log("Testse async");

// Meu exemplo de função assíncrona

async function exibePar(a) {
  if (a % 2 == 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

exibePar(22).then((value) => {
  console.log(`O valor inserido foi: ${value}`);
});

// 08 - Instrução Await

// function resolveComDelay() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve("Resolveu a Promise!");
//     }, 2000);
//   });
// }

// async function chamadaAsync() {
//   console.log("Chamando a Promise, e esperando o resultado");
//   const result = await resolveComDelay();
//   console.log(`O resultado chegou: ${result}`);
// }

// chamadaAsync();

// Meu exemplo de Async

function somaPares() {
  return new Promise(resolve => {
    let soma = 0;
    for (let i = 0; i <= 10; i++) {
      if (i % 2 === 0) {
        soma += i;
        console.log(i + " é par, somando ...");
      }
    }
    setTimeout(() => {
      resolve(soma);
    }, 2000)
  });
}

async function retornaPares() {
  console.log("Chamando Promise, aguardando resultado ...");
  const result = await somaPares();
  console.log(`A soma dos pares é: ${result}`);
}

retornaPares();

// 9 - Generators 
// Função generator usa asterisco *
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

// Criar o objeto generator
const gen = generator();

// Consumir os valores
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }