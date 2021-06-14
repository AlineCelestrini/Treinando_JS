function setup() {
  createCanvas(500, 400);
  trilha.loop();
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  movimentaAtor();
  mostraCarro();
  movimentaCarro();
  voltaPosicaoInicialCarro();
  verificaColisao();
  incluiPontos();
  marcaPontos();
}