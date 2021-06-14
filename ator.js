let xAtor = 100;
let yAtor = 370;

function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 28, 25);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor += 3;
  }
}