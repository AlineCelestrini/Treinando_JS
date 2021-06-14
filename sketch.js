function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  movimentaAtor();
  mostraCarro();
  movimentaCarro();
  voltaPosicaoInicialCarro();
}