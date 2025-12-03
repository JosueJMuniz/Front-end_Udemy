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
/* Para entender melhor o conceito de prototype precisamos nos aprofundar no recurso
fallback que faz a busca de uma propriedade para definir se ela existe em algum dado/objeto
caso não exita o fallback irá procurar em seu ancestral */
const text = "asd"

console.log(Object.getPrototypeOf(text));

const boolean = true;

console.log(Object.getPrototypeOf(boolean));

const arr = ["Thyr"]

console.log(arr.length);

console.log(Object.getPrototypeOf(arr));