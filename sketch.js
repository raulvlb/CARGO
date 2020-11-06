var tela = 1;
var largura = 200;
var altura = 50;
var xMenu = 150;
var yMenu1 = 145;
var yMenu2 = 205;
var yMenu3 = 265;
var caixa = 0;
var score = 0;
var servico = 0;
var diaa;
var mess;

var dia = 0;
var mes = 0;

var x = 250;
var y = 480;

function setup() {
  createCanvas(500, 500);
  dia =random(1,7);
  mes = random(1,12);
}

function draw() {
  //game
  if (score>=100){
    dia =random(1,7)
    mes = random(1,12)
    score = 0;
    servico = servico+1;
  }
  
  //dias
  if(dia.toFixed(0) == 1){
    diaa = "Domingo";
  }
  if(dia.toFixed(0) == 2){
    diaa = "Segunda";
  }
  if(dia.toFixed(0) == 3){
    diaa = "Terça";
  }
  if(dia.toFixed(0) == 4){
    diaa = "Quarta";
  }
  if(dia.toFixed(0) == 5){
    diaa = "Quinta";
  }
  if(dia.toFixed(0) == 6){
    diaa = "Sexta";
  }
  if(dia.toFixed(0) == 7){
    diaa = "Sábado";
  }
  
  //meses
  if(mes.toFixed(0) == 1){
    mess = "Janeiro";
  }
  if(mes.toFixed(0) == 2){
    mess = "Fevereiro";
  }
  if(mes.toFixed(0) == 3){
    mess = "Março";
  }
  if(mes.toFixed(0) == 4){
    mess = "Abril";
  }
  if(mes.toFixed(0) == 5){
    mess = "Maio";
  }
  if(mes.toFixed(0) == 6){
    mess = "Junho";
  }
  if(mes.toFixed(0) == 7){
    mess = "Julho";
  }
  if(mes.toFixed(0) == 8){
    mess = "Agosto";
  }
  if(mes.toFixed(0) == 9){
    mess = "Setembro";
  }
  if(mes.toFixed(0) == 10){
    mess = "Outubro";
  }
  if(mes.toFixed(0) == 11){
    mess = "Novembro";
  }
  if(mes.toFixed(0) == 12){
    mess = "Dezembro";
  }
  
  
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
  if(keyCode == 90 && caixa ==0 && tela == 1){
    tela = 2;
  }
  
  else if(keyCode == 90 && caixa ==1 && tela == 1){
    tela = 3;
  }
  
  else if(keyCode == 90 && caixa ==2 && tela == 1){
    tela = 4;
  }
  
  //escape
  if(keyCode == 27 && tela == 2){
    tela = 1;
    score = 0;
    servico = 0;
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
  
    text("Dia da"+"\n"+"semana", 50, 100);
  
    fill(70)
    text(diaa, 50, 150);
    
    fill(240)
    text("Mês"+"\n"+"do ano", 50, 200);
  
    fill(70)
    text(mess, 50, 250);
  
    // fill('yellow');
    // ellipse(50,240,10,10);
    
    fill(240);
    text("Pontos"+"\n"+score, 50, 300);
  
    fill(240);
    text("Dias"+"\n"+"passados"+"\n"+servico, 50, 350);
  
    // if(keyIsDown(79)){
    // score = random(ale.toFixed(2));
    // }
  
    if(keyIsDown(79)){
    score = score + 1;
    }

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

