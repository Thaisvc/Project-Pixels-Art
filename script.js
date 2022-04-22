window.onload = preto;

const selecting = document.querySelector('#pixel-board');
const pixels = document.getElementsByClassName('pixel');
const selecionado = document.querySelectorAll('.selected')[0];

// criando os blocos
for (let index = 0; index < 25; index += 1) {
  let create = index;
  let createDiv = document.createElement('div');
  createDiv.classList.add('pixel');
  selecting.appendChild(createDiv);
}

//iniciando com a cor preta
function preto(){
  let selecionado = document.querySelectorAll('.selected')[0];
  if (selecionado) {
    const cssObj = window.getComputedStyle(selecionado, null);
    let bgColor = cssObj.getPropertyValue('background-color');
    /* document.getElementById('demo').innerHTML = bgColor; */
    for (let key in pixels) {
      let square = pixels[key];
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
    for (let key in pixels) {
      let square2 = pixels[key];
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


