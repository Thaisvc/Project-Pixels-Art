const selecting = document.querySelector('#pixel-board');
const pixels = document.getElementsByClassName('pixel');

let selected = document.getElementsByClassName('selected')[0];



const cssObj = window.getComputedStyle(selected, null);
let bgColor = cssObj.getPropertyValue("background-color");

 


for (let index = 0; index < 25; index += 1) {
  let generatePixel = index;
  let create = document.createElement('div');
  create.generatePixel;
  create.classList.add('pixel');
  selecting.appendChild(create);
}
function colorPlate() {
  paleta = document.getElementsByClassName('color');
  for (let index = 0; index < paleta.length; index += 1) {
    let cor = paleta[index];
    cor.addEventListener('click', function (event) {
      document.querySelector('.selected').classList.remove('selected');
      event.target.classList.add('selected');
    });
  }
}
colorPlate();

for (let key in pixels) {
  let block = pixels[key];
  block.addEventListener('click', function (event) {
    event.target.style.backgroundColor = bgColor;
  });
}
 