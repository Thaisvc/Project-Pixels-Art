window.onload = function () {};

const selecting = document.querySelector('#pixel-board');
for (let index = 0; index < 25; index += 1) {
  let generatePixel = index;
  let create = document.createElement('div');
  create.generatePixel;
  create.classList.add('pixel');
  selecting.appendChild(create);
}

function colorPlate() {
  const black = document.querySelector('.black');
  const red = document.querySelector('.red');
  const purple = document.querySelector('.purple');
  const pink = document.querySelector('.pink');

  black.addEventListener('click', () => {
    black.style.backgroundColor;
    black.classList = 'color black selected';
    red.classList = 'color red';
    purple.classList = 'color purple';
    pink.classList = 'color pink';
  });
  red.addEventListener('click', function () {
    red.style.backgroundColor;
    red.classList = 'color red selected';
    black.classList = 'color black';
    purple.classList = 'color purple';
    pink.classList = 'color pink';
  });
  purple.addEventListener('click', function () {
    purple.style.backgroundColor;
    purple.classList = 'color purple selected';
    black.classList = 'color black';
    red.classList = 'color red';
    pink.classList = 'color pink';
  });
  pink.addEventListener('click', function () {
    pink.classList = 'color pink selected';
    black.classList = 'color black';
    red.classList = 'color red';
    purple.classList = 'color purple';
    pink.style.backgroundColor;
  });
  if (red.classList == 'color red selected') {
    purple.classList = 'color purple ';
    black.classList.remove('selec');
  }
}

colorPlate();
