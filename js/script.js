// função para fazer escrever letras do titulo tipo pc
const titulo = document.getElementById("titulo_home");
const titulo2 = document.getElementById("titulo_home2");
document.getElementById("titulo_home2").style.visibility = "hidden"; //oculta o 2ºtitulo

function typeWrite(elemento) {
  const textarray = elemento.innerHTML.split(""); // para cada letra ser uma posição do array
  elemento.innerHTML = ""; // para começar o espaço vazio
  textarray.forEach((letra, i) => {
    //para cada elemento do array
    setTimeout(function () {
      elemento.innerHTML += letra; //adiciona a letra seguinte ao efeito
    }, 90 * i); // de 75 em 75ms adiciona uma letra
    console.log(letra);
  });
  console.log(textarray);
}

typeWrite(titulo);
// document.getElementById('titulo_home2').style.visibility="hidden";
setTimeout(function () {
  efetuar();
}, 1700);

function efetuar() {
  document.getElementById("titulo_home2").style.visibility = "visible";
  typeWrite(titulo2);
}

/* Scroll suave nas ancoras*/
//guardar todos os itens do menu
const menu_itens = document.querySelectorAll('.header-me a[href^="#"]'); //apenas vai guardar os itens com # no href
//para cada item
menu_itens.forEach((item) => {
  item.addEventListener("click", scroll_on_click); //verificar se houve click
});

// lidar com o click no momento em que clico
function scroll_on_click(event) {
  event.preventDefault(); //retira do url os ids onde clicámos
  //event.preventDefault();
  const element = event.target; //queremos o target do elemento onde clicámos
  const to = getscrollById(event.target) - 50; // 80 para não ficar por baixo da navbar (alterar depois o valor 80)
  scroll_to_position(to);
}

// fazer o scroll suave
function scroll_to_position(to) {
  document.getElementById("main").scroll({
    top: to,
    behavior: "smooth",
  });
}

// fazer referencia entre href e o item
function getscrollById(element) {
  const id = element.getAttribute("href"); // para ir buscar o id
  return document.querySelector(id).offsetTop; // ir buscar a section através do id
}

