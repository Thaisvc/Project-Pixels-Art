window.onload = preto;
const selecting = document.querySelector('#pixel-board');
const pixels = document.getElementsByClassName('pixel');
const selecionado = document.querySelectorAll('.selected')[0];

function preto (event) {
  let selecionado = document.querySelectorAll('.selected')[0];
  if (selecionado) {
    const cssObj = window.getComputedStyle(selecionado, null);
    let bgColor = cssObj.getPropertyValue('background-color');
    /* document.getElementById('demo').innerHTML = bgColor; */
    for (let key in pixels) {
      let block = pixels[key];
      block.addEventListener('click', function (event) {
        event.target.style.backgroundColor = bgColor;
      });
    }
  }
}

selected = document.addEventListener('click',function (event) {
    if (event.target.classList.contains('selected')) {
      let selected = document.querySelectorAll('.selected')[0];
      const cssObj = window.getComputedStyle(selected, null);
      let bgColor = cssObj.getPropertyValue('background-color');
      for (let key in pixels) {
        let block = pixels[key];
        block.addEventListener('click', function (event) {
          event.target.style.backgroundColor = bgColor;
        });
      }
    }
  },
  false);

for (let index = 0; index < 25; index += 1) {
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


