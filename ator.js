let xAtor = 90;
let yAtor = 370;

let colisao = false;

let meusPontos = 0;

function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 28, 25);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(xPodeSeMover()){
       yAtor += 3;
    }
  }
  if(keyIsDown(LEFT_ARROW)){
    if(yPodeSeMoverEsquerda()){
        xAtor -= 3;
    }
  }
  if(keyIsDown(RIGHT_ARROW)){
    if(yPodeSeMoverDireita()){
        xAtor += 3;
    }
  }
}

function xPodeSeMover(){
  return yAtor < 370;
}

function yPodeSeMoverEsquerda(){
   return xAtor > 10;
}
function yPodeSeMoverDireita(){
   return xAtor < 470;
}

function verificaColisao(){
   //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i=0;  i < imagensCarros.length; i++){
    colisao = collideRectCircle ( xCarros[i] ,  yCarros[i] ,  comprimCarro, altCarro ,  xAtor ,  yAtor ,  15 ) ;
    if(colisao){
       voltaAtorPosicaoInicial();
      colidiu.play();
      if(pontosMaiorQZero()){
        meusPontos -= 1;
      }
    }
  }
}
function pontosMaiorQZero(){
  return meusPontos > 0;
}
function voltaAtorPosicaoInicial(){
  yAtor = 370;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(255,240,60);
  text(meusPontos, width/5, 27);
  
}

function marcaPontos(){
  if(yAtor < 15){
    meusPontos += 1;
    ponto.play();
    voltaAtorPosicaoInicial();
  }
}