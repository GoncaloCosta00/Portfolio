// função para fazer escrever letras do titulo tipo pc
const titulo2 = document.getElementById('titulo_home2');
function typeWrite(elemento)
{
    const textarray = elemento.innerHTML.split(''); // para cada letra ser uma posição do array
    elemento.innerHTML=''; // para começar o espaço vazio
    textarray.forEach((letra , i ) => { //para cada elemento do array
        setTimeout(function(){
            elemento.innerHTML += letra; //adiciona a letra seguinte ao efeito 
        },90 * i) // de 75 em 75ms adiciona uma letra
        console.log(letra);
    });
    console.log(textarray);
}
const titulo = document.getElementById  ('titulo_home');

typeWrite(titulo);
setTimeout(function() {typeWrite(titulo2)},1750);


// typeWrite(titulo2);

