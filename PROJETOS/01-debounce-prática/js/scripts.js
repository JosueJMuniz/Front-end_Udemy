const debounce = (fn, delay) => {
  let timeout;

  return (event) => {

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      fn(event);
    }, delay);


  };
};

function searcBooks(e) {
  const query = event.target.value.trim();

  const messageE1 = document.getElementById("message");

  messageE1.textContent = `🔍  Buscando por "${query}"...`;

  searcBooks(() => {
    const results = fakeApiCall(query);
    displayResults(results);
    messageE1.textContent = results.lenght
      ? `Resultados para "${query}":`
      : `Nenhum resultado para "${query}".`;
  }, 300);

}

function fakeApiCall(query) {
  const books = [
    "JavaScript: The Good Parts",
    "Estruturas de dados e algoritmos com JavaScript",
    "Python Crash Course",
    "Clean Code",
    "O Programador Pragmático",
    "Entendendo Algoritmos",
    "Código Limpo"
  ];
  if (!query) return[];
  return books.filter( book => 
    book.toLowerCase().includes(query.toLowerCase())
  );
}


function displayResults(results) {
  const list = document.getElementById('results');
  list.innerHTML = '';
  results.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });
}

const input = document.getElementById('searchInput');

const debouncedSearch = debounce(searcBooks, 400);

input.addEventListener('input', debouncedSearch);