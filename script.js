/* eslint-disable */

window.onload = preto;

const selecting = document.querySelector('#pixel-board');
const pixels = document.getElementsByClassName('pixel');
const black = document.getElementsByClassName('black');
let pink = document.getElementsByClassName('pink');
let red = document.getElementsByClassName('red');
let purple = document.getElementsByClassName('purple');
const selecionado = document.querySelectorAll('.selected')[0];
const selectButton = document.querySelector('#clear-board');
const ButtonVqv = document.querySelector('#generate-board');
let Input = document.querySelector('#board-size');



// criando os blocos
function createBlocos(qtd) {
  const Section = document.getElementById('pixel-board');
  for (let index = 0; index < qtd; index += 1) {
    const br = document.createElement('br');
    for (let index = 0; index < qtd; index += 1) {
      const creatDiv = document.createElement('div');
      creatDiv.className = 'pixel';
      Section.appendChild(creatDiv);
      Section.appendChild(br);
      creatDiv.style.backgroundColor = 'white';
    }
  }
}
createBlocos(5);

//iniciando com a cor preta
function preto(){
  let selecionado = document.querySelectorAll('.selected')[0];
  if (selecionado) {
    const cssObj = window.getComputedStyle(selecionado, null);
    let bgColor = cssObj.getPropertyValue('background-color');
    /* document.getElementById('demo').innerHTML = bgColor; */
    for (let index =0; index < pixels.length; index += 1) {
      let square = pixels[index];
      square.addEventListener('click', function(event){
        event.target.style.backgroundColor = bgColor;
      });
    }
  }
}

//pintando os pixels com a cor selecionada
let including = document.addEventListener('click', function(event){
  if (event.target.classList.contains('selected')) {
    let selected = document.querySelectorAll('.selected')[0];
    const cssObj = window.getComputedStyle(selected, null);
    let bgColor = cssObj.getPropertyValue('background-color');
let pixels2 = document.getElementsByClassName('pixel');
    for (let index =0; index < pixels2.length; index += 1) {
      let square2 = pixels2[index];
      square2.addEventListener('click', function(event){
        event.target.style.backgroundColor = bgColor;
      });
    }
  }
},
  false);

//selecionando a cor da paleta
function colorPlate() {
  paleta = document.getElementsByClassName('color');
  for (let index = 0; index < paleta.length; index += 1) {
    let cor = paleta[index];
    cor.addEventListener('click', function(event){
      document.querySelector('.selected').classList.remove('selected');
      event.target.classList.add('selected');
    });
  }
}
colorPlate();

// limpar paleta
function clean() {
 for (let index = 0; index < pixels.length; index += 1) {
   let position = pixels[index];
   position.style.backgroundColor = 'white';
 }


}
selectButton.addEventListener('click', clean)
 
// gerar blocos pelo input
ButtonVqv.addEventListener('click', generatesEdge)

function generatesEdge() {
  let blocos = Input.value;

if (blocos === ''){
  alert("Board inválido!") 
}else if(blocos < 5  ){
  blocos = 5;

}else if (blocos > 50){
  blocos = 50;

}
  //textContent = Altere o conteúdo textual de um elemento
  selecting.textContent = '';
  createBlocos(blocos);



}
 
//gerar cor aleatoria

function gerColor() {
  const color = document.querySelectorAll('.color');
  for (let index = 1; index < color.length; index += 1) {
    //A função Math.floor(x) retorna o menor número inteiro dentre o número "x"
    //Math.random A função Math.random() retorna um número pseudo-aleatório no intervalo [0, 1] 1x255 rgb
    //'#' recarrega 
    color[index].style.backgroundColor = '#' + Math.floor(Math.random() * 255);
  }
}

gerColor();