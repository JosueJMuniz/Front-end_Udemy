/* teste */

/* function giveMeSomething(a) {
  let concatString = `something`;
  let result = a;
  let concat = concatString.concat( ""," ", a);
  console.log(concat);
}

giveMeSomething("is cooking"); */


/* Method 1: Template Literal (Modern ES6) */
function giveMeSomething(a) {
    return `something ${a}`;
}

// Examples
console.log(giveMeSomething("is better than nothing")); 
// "something is better than nothing"

console.log(giveMeSomething("to do"));
// "something to do"

/* 2 -  Mubashir created an infinite loop! Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.*/

function printArray(number) {
  var newArray = [];

  for(var i = 1; i <= number; i++) {
    newArray.push(i);
  }

  return newArray;
}

/* 3 - Mubashir wants to swap two given numbers!
It is not returning the right values. Can you help him fix it? */

/* 4 - Concatenação de Strings e como concatenar strings com variáveis */

let firstName = "Josué";

let lastName = "Muniz";

let fullName = firstName + " " + lastName;

console.log(fullName); // Josué Muniz

/* Appending - como anexar uma string a outra usando operador += */

let greeting = "Hello";

greeting += ", John!";

console.log(greeting);

/* 5 - Usando o método concat() */

let str1 = "Eu juro";

let str2 = "que serei melhor";

let result = str1.concat(" ", str2);

console.log(result);

/* 6 Método console.log() */

let name_1 = "Alice";

let age = "23 anos";

// console.log pode ser usado para concatenar ou registrar strings, e outros dados separados por vírgulas

console.log("Olá, " + name_1 + " sua idade é: " + age);

console.log("Hello, ", name_1, "!", "\nYour age is: ", age);

/* 7 - semincolons */

