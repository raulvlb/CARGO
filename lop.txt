var tela = 1;
var largura = 200;
var altura = 50;
var xMenu = 150;
var yMenu1 = 145;
var yMenu2 = 205;
var yMenu3 = 265;
var caixa = 0;

var x = 250;
var y = 480;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  //menu
  if(tela == 1){
    menu();
  }  
  //Tela do jogo
  if (tela == 2){
  jogo();
  }
  //Tela de Ajuda
  if (tela == 3){
    ajuda();
  }
  //Tela de Info
  if (tela == 4){
    info();
  }
}


function keyPressed() {
  
  //movimentação menu
  if (key == "ArrowUp"){
    caixa =caixa-1;
  }else if (key == "ArrowDown"){
    caixa = caixa +1;
  }
  
  //menus
  if(keyCode == 90 && caixa ==0){
    tela = 2;
  }
  
  else if(keyCode == 90 && caixa ==1){
    tela = 3;
  }
  
  else if(keyCode == 90 && caixa ==2){
    tela = 4;
  }
  
  //escape
  if(keyCode == 27 && tela == 2){
    tela = 1;
  }
  
  if(keyCode == 27 && tela == 3){
    tela = 1;
  }
  
  if(keyCode == 27 && tela == 4){
    tela = 1;
  }
  
}

function menu(){
    textStyle(NORMAL);
    if(caixa > 2){
      caixa = 0;
    }
    if(caixa < 0){
      caixa = 2;
    }
    
    background(20);
    
    textAlign(CENTER);
    textSize(50);
    
    fill(240);
    text("CARGO", 250, 100);
    
    textSize(26);
    
    //Inicio
    stroke(200);
    fill(20);
    
    if(caixa == 0){
    rect(xMenu, yMenu1, largura, altura, 15);
    }
    
    fill(240);
    noStroke();
    text("Iniciar", 250, 180);
    
    //Ajuda
    stroke(200);
    fill(20);
    
    if(caixa == 1){
    rect(xMenu, yMenu2, largura, altura, 15);
    }
    
    fill(240);
    noStroke();
    text("Ajuda", 250, 240);
    
    //Info
    stroke(200);
    fill(20);
    
    if(caixa == 2){
    rect(xMenu, yMenu3, largura, altura, 15);
    }
    
    fill(240);
    noStroke();
    text("Informações", 250, 300);
    
    textSize(15)
    text("Setas para navegar", 250, 460);
    text(" ' Z ' para confirmar", 250, 480);
}
function jogo() {
    createCanvas(500, 500);
      background(20);
      ellipse(x,480,10,10)
     if (keyIsDown(LEFT_ARROW) && x>=120) {
      x-=5;
     }
      else if (keyIsDown(RIGHT_ARROW) && x<=480) {
      x+=5;
     }
    
    textStyle(NORMAL);
    textAlign(CENTER);
    textSize(15);
    fill(240);  
    text("precione 'esc'"+"\n"+" para sair", 50, 470);
  
    text("Cores", 50, 100);
  
    fill('yellow');
    ellipse(50,120,10,10);
  
    fill('blue');
    ellipse(50,140,10,10);
  
    fill('red');
    ellipse(50,160,10,10);
    
    fill(240);
    text("Pontos"+"\n"+"0000", 50, 200);

}
function ajuda() {
    textStyle(NORMAL);
    background(20);
    
    textAlign(CENTER);
    textSize(50);
    fill(240);  
    text("AJUDA", 250, 100);
  
    textSize(26);
    fill(240);
    text("Setas da direita e esquerda controlam "+ "\n"+" a nave", 250, 200);
    text("' Z ' dispara contra as naves inimigas", 250, 300);
    text("Derrote as naves para ganhar pontos", 250, 400);
  
    textSize(15);
    fill(240);  
    text("precione 'esc' para sair", 250, 480);
    
}
function info() {
      textStyle(NORMAL);
    
    background(20);
    
    textAlign(CENTER);
    textSize(30);
    fill(240);
    text("INFORMAÇÕES", 250, 100);
  
    textSize(26);
    text("Jogo desenvolvido por"+"\n"+"Raul Vitor de Lima Barra"+"\n"+"durante a disciplina de LOP"+"\n"+"semestre 2020.6", 250,220 );
  
    textSize(15);
    fill(240);  
    text("precione 'esc' para sair", 250, 480);
}

