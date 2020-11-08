// função para fazer escrever letras do titulo tipo pc
const titulo = document.getElementById ('titulo_home');
const titulo2 = document.getElementById('titulo_home2');
document.getElementById('titulo_home2').style.visibility="hidden"; //oculta o 2ºtitulo

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


typeWrite(titulo);
// document.getElementById('titulo_home2').style.visibility="hidden";
setTimeout(function() {efetuar()},1700);

function efetuar(){
    document.getElementById('titulo_home2').style.visibility="visible"; 
    typeWrite(titulo2);
}


// typeWrite(titulo2);



