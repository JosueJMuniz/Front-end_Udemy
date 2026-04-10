/* 1 - setTimeout */
console.log("Ainda não executou");

setTimeout(function () {

  console.log("Requisição Assíncrona!");

}, 1000)
console.log("Ainda não executou 2");

/* como funciona o setTimeout em outro exemplo */

let multiplicador = 10;

setTimeout(console.log('O multiplicador é igual a: ' + multiplicador), 1000)

setTimeout(function () {
  let novoMultiplicador = multiplicador * 34;
  console.log('O multiplicador agora tem valor: ' + novoMultiplicador);
}, 2000)

/* 2 - setInterval  */

console.log("Ainda não começou");

// setInterval(function(){
//   console.log("Função assíncrona setInterval!");
// }, 3000);

console.log("Ainda não começou 2");

// meu exemplo: 



setInterval(function () {
  console.log("Esta função setInterval adiciona um a cada loop!");
  for (let i = 0; i < setInterval.length; i++) {
    console.log("O setInterval adicionou 1!" + incrementador);
    let incrementador = incrementador = i++;
  }
}, 2000