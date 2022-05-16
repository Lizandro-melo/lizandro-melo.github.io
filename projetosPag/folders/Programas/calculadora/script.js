//comando responsável por capturar a tela da calculadora
const display = document.getElementById("display");
//comando responsável por capturar as teclas da calculadora
const keys = document.querySelectorAll("[class= tecla]");
//comando responsável por capturar a tela de apagar da calculadora
const clear = document.getElementById("clear");

//comando responsável por capturar as teclas de media da calculadora
const media = document.getElementById("media");

function back() {
  history.back();
  //função para voltar para meu site principal
}

//comando responsável por capturar o valor do botão e jogar na tela da calculadora.
const buttonClick = (click) =>
  (display.value = display.value + click.target.value);
//comando responsável por limpar os dígitos da calculadora.
const eventClear = (clickCLear) => (clickCLear.target = display.value = "");
//comando responsável por dividir pela metade o valor que esta na tela da calculadora
const inputMedia = (clickMedia) =>
  (clickMedia.target = display.value = display.value / 2);

if (display.value == "NaN") {
  display.value = 0;
  //comando que usei para reparar o erro do botão de dividir quando apertado sem dígitos na tela da calculadora
}

function igual() {
  //variável responsável por transformar os caracteres da tela da calculadora em comando
  let result = eval(display.value);
  //mostra o resultado na tela
  display.value = result;
  //repara o erro apos clicar no botão de resultado sem nenhum numero na tela
  if (display.value == "undefined") {
    display.value = 0;
  }
}
//função para dar ao botão (C) apagar o que tiver na tela.
clear.addEventListener("click", eventClear);
//função responsável por capturar os clicks das teclas numéricas e operacionais na calculadora
keys.forEach((key) => key.addEventListener("click", buttonClick));
//função para dar ao botão (1/2) o poder de tirar media do que tiver na tela.
media.addEventListener("click", inputMedia);
