// 1 - Movendo-se pelo DOM

console.log(document.body);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[1].textContent);

console.log(document.body.childNodes[1].childNodes[3].textContent);

// Meu exemplo movendo-se pelo DOM

//Acessando footer
console.log(document.body.childNodes[5].childNodes[1].textContent);

// 2 - Selecionando Elementos:

// - Encontrando elementos por tag

const listItens = document.getElementsByTagName("li");

console.log(listItens);

// 3 -  Encontrando elementos por id

const title = document.getElementById("title");

console.log(title);

// 4 - Selecionado elementos por classe:

const produto = document.getElementsByClassName("product");

console.log(produto);

// 5 - Usando querySelector e querySelectorAll: 

const productsQuery = document.querySelectorAll(".product"); 

console.log(productsQuery);

const mainContent = document.querySelector("#main-container");

// 6 - Alterando o HTML

// - insertBefore e createElement

// const p = document.createElement("p");

// console.log(p);

 const header = title.parentElement;

// console.log(header);

// header.insertBefore(p, title);

// 7 - appendChild 

const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

navLinks.appendChild(li);


// 8 - replaceChild

const h2 = document.createElement("h2");

h2.textContent = "Novo Título";

header.replaceChild(h2, title);

// 9  Criando nós de texto createTextNode

const myText = document.createTextNode("Agora inserimos mais um título!");

console.log(myText);

const h3 = document.createElement("h3");

h3.appendChild(myText);

console.log(h3);

header.appendChild(h3);

// Meu exemplo de createTextNode

const newParagraph = document.createTextNode("Estou adicionando um parágrafo novo!");

console.log(newParagraph);

const p = document.createElement("p");

p.appendChild(newParagraph);

console.log(p);

mainContainer.appendChild(p);

// 10 - Alterando Atributos getAttribute e setAttribute

const firstLink = navLinks.querySelector("a");
console.log(firstLink);

firstLink.setAttribute("href","https://www.google.com");

console.log(firstLink.getAttribute("href"));

// Meu exemplo de alteração de atributos

const h2Produto1 = document.querySelector(".product:first-child h2");

console.log(h2Produto1);

h2Produto1.innerHTML = '<a href="https://facebook.com">Produto 1</a>';

const newAttribute = document.querySelector("h2:first-child a");

console.log(newAttribute);

newAttribute.setAttribute("href", "https://www.instagram.com");
newAttribute.setAttribute("target", "_blank");

/*// Seleciona todos os H2 dentro de produtos
const todosH2 = document.querySelectorAll('.product h2');

// Percorre cada H2
todosH2.forEach((h2, index) => {
  const nomeProduto = h2.textContent;  // Pega o texto atual
  h2.innerHTML = `<a href="https://exemplo.com/produto-${index + 1}">${nomeProduto}</a>`;
}); */
