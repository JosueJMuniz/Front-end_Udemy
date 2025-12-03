// Arrays

// const lista = [5, 4, 3, 2, 1];

// console.log(lista);

// console.log(typeof(lista));

// const itens = ["Josué", false, 3.45, [1, 2, 3]]

// console.log(itens);

// /* 2  - mais sobre arrays */

// const arr = ["A", "b", "c", "e", "f"];

// console.log(arr[0]);

// console.log(arr[2]);


/* 3 - Propriedades */

// const numbers = [9, 8, 7, 6];

// console.log(numbers.length); // Propriedade .length informa o tamanho do array

// console.log(numbers["length"]); // Propriedade ["length"] informa o tamanho do array

// const myName = "Josué"

// console.log(myName.length); // length também se aplica strings

/* 4 - Métodos */

// const otherNumbers = [1, 2, 3, 4, 5];

// const allNumbers = numbers.concat(otherNumbers);

// console.log(allNumbers);

// // Trabalhando com texto

// const text = "algum texto"

// console.log(text.toUpperCase(text)); // Método .toUperCase usado para configurar uma string em letras maiúsculas

// console.log(typeof(text.toUpperCase));

// console.log(text.indexOf("g")); // Método .indexOf usado para encontrar a posição de algum caractere em um texto

/* 5 - Objetos Literais (Object Literals) */

// const book = {
//   name: "Harry Potter e a Pedra Filosofal",
//   author: "J.K. Rowling",
//   date: "26/06/1997",
//   publisher: "Rocco",

//   greeting: function() {
//     return `Este é o livro: ${this.name}`;
//   }
// };

// const person = {
//   name: "Josué",
//   age: 25,
//   job: "Programador",
//   id: "123.224.665-99"
// };

// console.log(person);

// console.log(person.name);

// console.log(person.name.length);

// console.log(typeof person);

/* 6 - Adicionando e excluindo propriedades de objetos literais */

// const car = {
//   engine: 2.0,
//   brand: "VW",
//   model: "Tiguan",
//   km: 20000
// };

// console.log(car);

// car.doors = 4; // Incrementando a propriedade "doors" ao objeto car usando dot notation

// console.log(car);

// delete car.km; // Operador "delete" remove uma propriedade do Object Literals

// console.log(car);

// const dog = {
//   race: "Belgian Shepherd",
//   age: 4,
//   height: "60 cm",
//   color: "Black",
//   sex: "Male",

//   show: function (){
//     return `Este cachorro é um: ${race}`
//   }
// };

// console.log(dog);

// console.log(dog.race);

// dog.weight = 30;

// console.log(dog);

// delete dog.color;

// console.log(dog);

/* 7  -  Mais sobre objetos */

// const obj = {
//   a: "teste",
//   b: true
// };

// console.log(obj instanceof Object);

// const obj2 = {
//   c: []

// };

// Object.assign(obj2, obj);

// console.log(obj2);

/* 8 - Conhecendo melhor o Object */

// const car1 = {
//   engine: 2.0,
//   brand: "VW",
//   model: "Tiguan",
//   km: 20000
// };

// const car2 = {
//   name: "Toro",
//   brand: "Fiat",
//   engine: 1.8,
//   doors: 4,
//   cv: 200
// }
// console.log(Object.keys(car1)); // .keys verifica as propriedades de um objeto

// console.log(Object.keys(car2)); // .keys verifica as propriedades de um objes
// console.log(Object.entries(car1)); // .entries retorna os arrays dos nomes das propriedades com seus valores

/* 9 - Mutabilidade (Mutability) */

// const helmet = {
//   name: "EVO G8",
//   size: 58,
//   color: "Grey",
// }

// const helmet2 = helmet

// console.log(helmet);
// console.log(helmet2);

// console.log(helmet === helmet2);

// helmet.price = 223.45

// console.log(helmet);
// console.log(helmet2);

// delete helmet2.price;

// console.log(helmet);
// console.log(helmet2);

// 10 - Loops em Arrays

// const users = ["Edson", "Adelaide", "Edmara", "Eduarda", "Cimar"];

// for (let i = 0; i < users.length; i++) {
//   console.log(`Lista de Usuários: ${users[i]}`);
// }

/* 11 - Métodos de Array: Push e Pop */

// const array1 = ["a", "c", "d"];

// array1.push("e");

// console.log(array1);

// console.log(array1.length);

// const array2 = [1, 2, 3, 4, 5, 6];

// array2.pop();

// console.log(array2);

// const itemRemovido = array2.pop();

// console.log(itemRemovido);

// console.log(array2);


// const list1 = [1, 3, 5, 6, 7, 2];

// console.log(list1.length);

// console.log(list1);

// const removedItem = list1.pop();

// console.log(removedItem);

// console.log(list1);

/* Outra forma de usar o método push, para adicionar vários elementos */

// list1.push(34, 56, 31, 56);

// console.log(list1);

/* 12 - Métodos Shift e Unshift */

// const shiftList = [[1, 2, 3], ["a", "b", "c"], [-1, -32, -55]];

// const arrayRemoved = shiftList.shift(); 

// console.log(shiftList);

// console.log(arrayRemoved);

// const unshiftList = ["a1", "b2", "c3"];

// const listRemoved = unshiftList.unshift("d4"); // Usamos o método unshift para adicionar um elemento
// ao início do array

// console.log(listRemoved);

// console.log(unshiftList);

// unshiftList.unshift("f3", "g5", "h7"); // Com unshift podemos adicionar mais de um elemento ao início do 
// // array

// console.log(unshiftList);


/* 13 - indexOf e lastIndexOf */
// const myElements = ["Morango", "Uva", "Franboesa", "Mirtilo", "Pêra", "Abacate"];

// console.log(myElements.indexOf("Franboesa"));
// console.log(myElements.indexOf("Abacate"));

// console.log(myElements[5]);

// console.log(myElements[myElements.indexOf("Abacate")]);

// console.log(myElements.lastIndexOf("Mirtilo"));

// console.log(myElements.indexOf("Maçã"));

// console.log(myElements.lastIndexOf("Maçã"));

/*14 Método slice */
// const testeSlice = ["a", "b", "c", "d", "e", "f"];

// const subArray = testeSlice.slice(2, 4);

// console.log(subArray);

// console.log(testeSlice);

// const subArray2 = testeSlice.slice(2, 4 + 1);

// console.log(subArray2);

// const subArray3 = testeSlice.slice(10, 20);

// console.log(subArray3);

// const subArray4 = testeSlice.slice(2);

// console.log(subArray4);

/* Meu Exemplo */


// const mySlice = [-9, -8, -7, -6, -5, -4, -3, -2, -1]; 

// console.log(mySlice.slice(4, 8));

// console.log(mySlice.slice(4, 8 + 1));

// const fullSlice = mySlice.slice(2);

// console.log(fullSlice);

// 15 método forEach 

// const agesChild = ["12", "13", "15", "16", "14", "11"];

// agesChild.forEach((numero) => {
//   console.log(`A idade é: ${numero}`);
// });

// const posts = [
//   {title: "Primeiro post", category: "PHP"},
//   {title: "Segundo post", category: "JavaScript"},
//   {title: "Terceiro post", category: "Python"},
//   {title: "Quarto post", category: "CSharp"},
// ];

// posts.forEach((post) => {
//   console.log(`Exibindo: ${post.title}, da categoria: ${post.category}`);
// });

// const message = [
//   {title: "Good morning! mensagem", category: "Evening"},
//   {title: "Good afternoon! mensagem", category: "Afternoon"},
//   {title: "Good night! mensagem", category: "Night"},
// ];

// message.forEach((msgs) => {
//   console.log(`Exibindo: ${msgs.title}, da categoria: ${msgs.category}`);
// });

// const fruits = [
//   {title:"Maracujá", category:"Fruta"},
//   {title:"Morango", category:"Fruta"},
//   {title:"Couve", category:"Verdura"},
//   {title:"Beterraba", category:"Verdura"},
//   {title:"Tomilho", category:"Verdura"},
  
// ];

// O JavaScript faz internamente:
// 1ª iteração: chama sua função com "Maracujá"
// 2ª iteração: chama sua função com "Morango" 
// 3ª iteração: chama sua função com "Couve" e assim por diante


// fruits.forEach((fruta) => {
//   console.log(`Está é: ${fruta.title}\nCategoria: ${fruta.category}`);
// });

/* 16 - includes */

// const brands = ["BMW", "VW", "Fiat"];

// console.log(brands.includes("VW"));

// console.log(brands.includes("Ford"));

// brands.pop("Fiat");

// brands.push("Ford");

// console.log(brands);

// brands.push("Renault", "Jac", "Chery");

// console.log(brands);

// if (brands.includes("Renault")) {
//   console.log(`Há carros da marca: ${brands[3]}` );
// }

// /* 17 - reverse */ //Este método modifica o array original

// const reverseTeste = brands;

// console.log(`Este é um array com reverse:\n${reverseTeste.reverse()}`);

/* 18 - métodos de texto TRIM */

const trimTeste = "  testando \n   "

console.log(trimTeste);

console.log(trimTeste.trim());

/* 19 - padStart */

const padStartTest = "1";

console.log(padStartTest);

const newNumber = padStartTest.padStart(4, "0");

console.log(newNumber);

// padEnd

const padEndTest  = newNumber.padEnd(10,"0");

console.log(padEndTest);

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

/*  20 - split*/

const frase = "O rato roeu a roupa do rei de Roma";

const arrayDaFrase = frase.split(" ");

console.log(arrayDaFrase);

/* Meu exemplo - split */

const frase2 = "Três pratos de trigo para três tigres tristes";

const arraySplit = frase2.split(" ");

console.log(arraySplit);

/* 21 - Join */

const fraseDeNovo = arrayDaFrase.join(" ");

console.log(fraseDeNovo);

const fraseUnida = arraySplit.join(",");

console.log(fraseUnida);

const itensParaComprar = ["Placa-mãe", "Fonte", "RAM", "Processador"];

const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}`;

console.log(fraseDeCompra);

/* 22 - repeat */

const textoQueRepete = "Este é um exemplo do .repeat! \n";

console.log(textoQueRepete.repeat(3));

/* 23 - LISTAS - Rest Operator / Rest Parameters */

const somaInfinita = (...args) => {

  let total = 0;

  for(let i = 0; i < args.length; i++){
    total += args[i];
  }

  return total;
}

console.log(somaInfinita(1, 2, 3));

console.log(somaInfinita(12, 23, 344, 53, 67));

//meu exemplo com divisão

const infinityDivision = (...args) => {

  if (args.length === 0) return 0;// Handle empty input

  let total = args[0];// Start with first number

  for(let i = 1; i < args.length; i++) {// Start from index 1
    total /= args[i];          
  }
  return total;
}

console.log(infinityDivision(240, 12));

// exemplo com multiplicação

const infinityMultiplication = (...args) => {
  if (args.length === 0) return 0; // handle empty input

  let total = args[0]; // multiply by de first index

  for (let i = 1; i < args.length; i++) {
    if (args[i] === 0) { // Error if the first index is equal to 0
      console.log("Error: multiplication by zero!");
    }

    total *= args[i];
  }

  return total;
}

console.log("The multiplication is quals to: " + infinityMultiplication(123, 2, 34));

// 24 - Estrutura for ... of ---

const somaInfinita2 = (...args) => {

  let total = 0;

  for (num of args) { //recebemos como argumento de for um "num" de "args"onde num
                      // num se refere ao indice e args os argumentos da função 
                      // anônima

    total += num;
  }


  return total;
}

console.log(`Resultado: ${somaInfinita(23, 3, 45)}`);

// meu exemplo de for ... of

const animals = ["Armadillo", "Bee", "Camel", "Dog", "Elephant"];

for(let animal of animals) {
  console.log(`This is a(n): ${animal}!`);
}

const flores = ["Girassól", "Petúnia", "Margarida", "Rosa", "Dália"];

for(let flor of flores) {
  console.log(`Esta flor éb: ${flor}!`);
}

/* 25 - Destructuring: É uma funcionalidade que nos permite desestruturar um dado, em objetos podemos criar variáveis a partir de suas propriedades apenas com uma sintaxe simples. */

const userDetails = {
  firstName: "Josué",
  lastName: "Muniz",
  role: "Senior Engineer"
}

// const firstName = userDetails.firstName;

// console.log(firstName); Dessa forma teríamos que usar três declarações para alocar as propriedades do objetos em variáveis

const {firstName, lastName, role} = userDetails;

console.log(firstName, lastName, role);

// renomear variáveis
const {firstName: primeiroNome} = userDetails;

console.log(primeiroNome);

// 26 - Destrucuring em arrays 

const myList = ["Airplane", "Submarine", "JetSki"];

const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoB, veiculoC);

// meu exemplo destructuring de arrays

const myComputer = ["Motherboard", "Processor", "Memories", "Screen", "GPU", "Power Supply"];

const [placaMae, processador, memoriaRam, monitor, placaDeVideo, fonte] = myComputer;

console.log(placaMae, processador, memoriaRam, monitor, placaDeVideo, fonte);

/* 27 - JSON */

const myJson = `{"name": "Josué", "age": 25, "skills": ["JavaScript", "Python", "SQL"]}`;

console.log(myJson);

console.log(typeof myJson);

// meu exemplo de JSON

const costsJson = `{"teclado": 149.90, "monitor": 557, "fon te": 266,"kitUpgrade": 939, "kitFan": 50, "RamExtra": 240}`;
console.log(costsJson);

// 28 - JSON para objeto e objeto para JSON

const myObject = JSON.parse(myJson);

console.log(myObject);

console.log(typeof myObject);

console.log(myObject.skills);

// meu exemplo JSON para Object

const costsObject = JSON.parse(costsJson);

console.log(costsObject);

console.log(costsObject.kitUpgrade);

// JSON inválido

const badJason = `{"name": Olivaras, "age": 67}`;

// const myBadObject = JSON.parse(badJason);

myObject.isOpenToWork = true;

console.log(myObject);
console.log(typeof myObject);

const myNewJson = JSON.stringify(myObject);

console.log(myNewJson);
console.log(typeof myNewJson);