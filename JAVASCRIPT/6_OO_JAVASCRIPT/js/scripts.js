// 1- Métodos
const animal = {
  nome: "Bob",
  latir: function () {
    console.log("Au au!");
  }
};

console.log("O nome do animal é: " + animal.nome);

animal.latir();

// 2 - Aprofundando em métodos

const pessoa = {
  nome: "Josué",

  getNome: function () {
    return this.nome;
  },

  setNome: function (novoNome) {
    this.nome = novoNome;
  }

};

console.log(pessoa.nome); // Este é igual ↓

console.log(pessoa.getNome()); // este

pessoa.setNome("Sheldon Cooper");

console.log(pessoa.getNome());

// 3 - Prototype
/* Para entender melhor o conceito de prototype precisamos nos aprofundar no recurso fallback que faz a busca de uma propriedade para definir se ela existe em algum dado/objeto caso não exita o fallback irá procurar em seu ancestral */
const text = "asd"

console.log(Object.getPrototypeOf(text));

const boolean = true;

console.log(Object.getPrototypeOf(boolean));

const arr = ["Thyr"]

console.log(arr.length);

console.log(Object.getPrototypeOf(arr));

/* 4 - Mais sobre prototype */

const myObject = {
  a: "Valor da prorpiedade: a",
  name: "Josué",

  greetings: function () {
    return `${this.name} este é um método do objeto myObject.\nQue pode ser HERDADO!`;
  }
}

console.log(Object.getPrototypeOf(myObject));

console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);

console.log(mySecondObject);

console.log(mySecondObject.a);

console.log(mySecondObject.greetings());

console.log(Object.getPrototypeOf(mySecondObject) === myObject);

// 05 - Classes básicas

const cachorro = {
  raca: null,
  cor: null,
};

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão";
pastorAlemao.cor = "Capa Preta";

console.log(pastorAlemao);

console.log(pastorAlemao.raca);
console.log(pastorAlemao.cor);

const bulldog = Object.create(cachorro);

bulldog.raca = "Bulldog";

bulldog.cor = "Marrom"

console.log(bulldog.cor);

// 06 - Função como Classe

// function criarCachorro(nome, raca) {

//   const cachorro = Object.create({})

//   cachorro.nome = nome;
//   cachorro.raca = raca;

//   return cachorro;
// }

// const bob = criarCachorro("Bob", "Vira-lata");

// console.log(bob);

// const jacob = criarCachorro("Jacob", "Belga de Malinois");

// console.log(jacob);

// console.log(Object.getPrototypeOf(jacob));

/* 7 Funções Construtoras */
// function Cachorro(nome, raca) {
//   this.nome = nome;
//   this.raca = raca;
// }

// const caramelo = new Cachorro("Bella", "Vira-lata");

// console.log(caramelo);

// 8- Métodos da função construtora

// Cachorro.prototype.uivar = function () {
//   console.log("Auuuuuuuuuuu!");
// }

// console.log(Cachorro);

// caramelo.uivar();

// 9 - Classes com ES6 

// class HorseClass {
//   constructor(name, race) {
//     this.name = name
//     this.race = race
//   }
// }

// const dracaris = new HorseClass("Dracaris", "Mustang");

// console.log(dracaris);

// HorseClass.prototype.speed = function () {
//   console.log("40 km/h");
// }

// dracaris.speed();

// console.log(Object.getPrototypeOf(dracaris));

/* 10 - mais sobre classes */

// class Caminhao {
//   constructor(eixos, cor) {
//     this.eixos = eixos;
//     this.cor = cor;
//   }

//   descreverCaminhao() {
//     console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`);
//   }
// }

// const scania = new Caminhao(6, "Vermelha");

// console.log(scania);

// scania.descreverCaminhao();

// Caminhao.motor = 4;
/* Não podemos inserir uma nova propriedade dessa forma pois temos um constructor. Para isso precisamos inserí-la usando o prototype

*/

// const c2 = new Caminhao(7, "Azul");

// console.log(c2);

// console.log(c2.motor);

// Caminhao.prototype.motor = 4.0;

/* Agora ao instanciar um novo objeto teremos a propriedade motor */

// const volvo = new Caminhao(7, "Preto", 4.0);

// console.log(volvo);

// console.log(volvo.motor);

/* 11 - Override  */

// class Humano{
//   constructor(nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
//   }
// }

// const josue = new Humano("Josué", 25);

// console.log(josue);

// Humano.prototype.idade = "Não definida";

// console.log(josue.idade);

// console.log(Humano.prototype.idade);

// const humano2 = new Humano("Miriã", 23);

// console.log(humano2);

/* 12 - Symbols em classes */

class Aviao {
  constructor(marcas, turbinas) {
    this.marcas = marcas;
    this.turbinas = turbinas;
  }
}

const asas = Symbol();
const pilotos = Symbol();

Aviao.prototype[asas] = 'Este avião possui: ' + 2 + ' asas.';
Aviao.prototype[pilotos] = 'Este avião possui: ' + 3 + ' pilotos.';

/* Isso faz com que a nossa classe passe este valor para os objetos que ela instancia*/

const boeing = new Aviao("Boeing", 10);

console.log(boeing);

console.log(boeing[asas]);

console.log(boeing[pilotos]);

/* 13 - Getters and Setters */

class Post {
  constructor(titulo, descricao, tags) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.tags = tags;

  }

  get exibirTitulo() {
    return `Você está lendo: ${this.titulo}`
  }

  set adicionarTags(tags) {
    const tagsArray = tags.split(", ");
    this.tags = tagsArray;
  }
}

const myPost = new Post("Algum post", "É um post sobre programação");

console.log(myPost);
// No constructor não somos obrigados a passar todos os parâmetros

console.log(myPost.exibirTitulo);

// Usando o SET para adicionar novas tags

myPost.adicionarTags = "programação, javascript, js"

console.log(myPost);

/* Usando Symbol para criar um diário */
// Vamos fazer um diário com chave secreta
const diario = {};
const chaveSecreta = Symbol('chaveDoDiario');

// Escrevendo no diário (só com a chave secreta)
diario[chaveSecreta] = 'Hoje foi um ótimo dia!';

// Tentando ler de formas diferentes:
console.log(diario[chaveSecreta]); // "Hoje foi um ótimo dia!" ✓
console.log(diario['chaveDoDiario']); // undefined ✗
console.log(diario.chaveDoDiario); // undefined ✗

// Mesmo criando outro Symbol com mesma descrição:
const outraChave = Symbol('chaveDoDiario');
diario[outraChave] = 'Hoje eu estava cansado';
console.log(diario[outraChave]); // Hoje eu estava cansado

/*  14 - Herança*/

class Mamiferos {
  constructor(patas) {
    this.patas = patas
  }
}

class Lobo extends Mamiferos {
  constructor(patas, nome) {
    super(patas, patas)
    this.nome = nome
  }
}

const dog = new Lobo(4, "Hachiko")

console.log(dog);

console.log(dog.patas);

/* 15 - Operador instanceof */

class Books {
  constructor(name, author) {
    this.name = name;
    this.author = author;
  }
}

class Livretos extends Books {
  constructor(name, author, date) {
    super(name, author);
    this.date = date;
  }
}

const cordel = new Livretos("A triste partida", "Patativa do Assaré", 1950)

console.log(cordel instanceof Livretos); // true

console.log(Livretos instanceof Books); // false estamos verificando de classe

console.log(new Lobo(4, "teste") instanceof Mamiferos); // true estamos verificando de objeto para classe

