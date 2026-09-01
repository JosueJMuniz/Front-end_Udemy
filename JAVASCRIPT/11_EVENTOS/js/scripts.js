//1 adicionando eventos

const btn = document.querySelector("#my-button");

btn.addEventListener("click", function () {
  console.log("Clicou aqui! ");
});

// 2 removendo evento
const secondBtn = document.querySelector("#btn");

function imprimirMensagem() {
  console.log("Teste");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () => {
  console.log("Evento removido!");
  secondBtn.removeEventListener("click", imprimirMensagem);
});

// 3 - argumento do evento (event) ou (e)

const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) => {
  console.log(event);
  // console.log(event.srcElement);
  console.log(event.pointerType);
  console.log(event.offsetX);
  console.log(event.target);
});

// 4 - Propagation: 

const containerBtn = document.querySelector("#btn-container");

const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
  console.log("Evento 1");
});

btnInsideContainer.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Evento 2");
});

// 5 - Removendo Ações/Eventos "default" padrão

const a = document.querySelector("a");

a.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event);
  console.log("Não alterou a página");
});

// 6 - Eventos de tecla: keyup e keydown

document.addEventListener("keyup", (e) => {
  console.log(`Soltou a tecla ${e.key}`);
});

document.addEventListener("keydown", (e) => {
  console.log(`Apertou a tecla ${e.key}`);
});

// 7 - Eventos de mouse

const mouseEvents = document.querySelector("#mouse");

mouseEvents.addEventListener("mouseup", () => {
  console.log("Liberou o botão!");
});

// const mouseEvents2 = document.querySelector("#mouse-event");

mouseEvents.addEventListener("mousedown", () => {
  console.log("Pressionou o botão!");
});


mouseEvents.addEventListener("dblclick", () => {
  console.log("Double Click no mouse!");
});

// 8 - Movimento do mouse

// document.addEventListener("mousemove", (e) => {
//   console.log(`No eixo X: ${e.x}`);
//   console.log(`No eixo Y: ${e.y}`);
// });

// 9 - Eventos de Scroll

window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 200) {
    console.log("Passamos de 200px!");
  }
});

// 10 - Focus e Blur

const input = document.querySelector("#my-input");

input.addEventListener("focus", (e) => {
  console.log("Entrou no input!");
});

input.addEventListener("blur", (e) => {
  console.log("Saiu do input!");
});

// 11 - Eventos de carregamento de página: Load e Unload

window.addEventListener("load", (e) => {
  console.log("A página carregou!");
});

window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  e.returnValue = "";
});

// 12 Debounce

const debounce = (f, delay) => {

  let timeout

  return (...arguments) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      f.apply(this,arguments);
    }, delay);
  };
};

window.addEventListener(
  "mousemove",
  debounce(() => {
    console.log("Executando a cada 400ms");
  }, 400)
);
