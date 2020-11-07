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

var ship = [];
var contador = 0;
var tempo = 0;
var mainmenu = [];
var raul = [];

function setup() {
  createCanvas(500, 500);
  dia =random(1,7);
  mes = random(1,12);
}

function draw() {
  
  tempo ++;
  if(tempo>10){
    contador++;
    tempo = 0;
  }
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

function preload(){
  ship[0] = loadImage('Ship00.png');
  ship[1] = loadImage('Ship01.png');
  ship[2] = loadImage('Ship02.png');
  ship[3] = loadImage('Ship03.png');
  ship[4] = loadImage('Ship04.png');
  ship[5] = loadImage('Ship05.png');
  ship[6] = loadImage('Ship06.png');
  ship[7] = loadImage('Ship07.png');
  ship[8] = loadImage('Ship08.png');
  ship[9] = loadImage('Ship09.png');
  
  mainmenu[0] = loadImage('space0.png');
  mainmenu[1] = loadImage('space1.png');
  mainmenu[2] = loadImage('space2.png');
  mainmenu[3] = loadImage('space3.png');
  mainmenu[4] = loadImage('space4.png');
  
  raul[0] = loadImage('raul0.png');
  raul[1] = loadImage('raul1.png');
  raul[2] = loadImage('raul2.png');
  raul[3] = loadImage('raul3.png');
  raul[4] = loadImage('raul4.png');
  raul[5] = loadImage('raul5.png');
  raul[6] = loadImage('raul5.png');
  raul[7] = loadImage('raul5.png');
  raul[8] = loadImage('raul5.png');
  raul[9] = loadImage('raul5.png');
  
  inforaul = loadImage('perfil.jpg');
  player = loadImage('player.png');
  space = loadImage('spacelop-1.png');
  
  font = loadFont('PressStart2P-vaV7.ttf');
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
    
    background(8);
    image(mainmenu[contador%5],360,0);
    image(mainmenu[contador%5],-360,0);
    image(player, 20, 390);
    image(ship[contador%9],380,400,100,150);
    
    textAlign(CENTER);
    textSize(40);
    
    fill(240);
    textFont(font);
    text("CARGO", 250, 100);
    
    textSize(15);
    
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
    
    textSize(10)
    text("Setas para navegar", 250, 460);
    text(" ' Z ' para confirmar", 250, 480);
}
function jogo() {
    createCanvas(500, 500);
      background(8);

      image(space, 110, 0);
      image(player, 5, 400);
      image(ship[contador%9],x,400);
     if (keyIsDown(LEFT_ARROW) && x>=120) {
      x-=5;
     }
      else if (keyIsDown(RIGHT_ARROW) && x<=430) {
      x+=5;
     }
    
    textStyle(NORMAL);
    textAlign(CENTER);
    textSize(10);
    fill(240);  
    textFont(font);
  
    text("Dia da"+"\n"+"semana", 50, 100);
  
    fill(70)
    text(diaa, 50, 150);
    
    fill(240)
    text("Mês"+"\n"+"do ano", 50, 200);
  
    fill(70)
    text(mess, 50, 250);
  
    fill(240);
    text("Pontos"+"\n"+score, 50, 300);
  
    fill(240);
    text("Dias"+"\n"+"passados"+"\n"+servico, 50, 350);
  
    // if(keyIsDown(79)){
    // score = random(ale.toFixed(2));
    // }
    textSize(8)
    text("precione 'esc' para sair", 300, 10);
  
    if(keyIsDown(79)){
    score = score + 1;
    }

}
function ajuda() {
    textStyle(NORMAL);
    background(8);
    
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
    
    background(8);
    
    textAlign(CENTER);
    textFont(font);
    textSize(40);
    fill(240);
    text("INFORMAÇÕES", 250, 100);
  
    textSize(10);
    text("Jogo desenvolvido por"+"\n"+"Raul Vitor de Lima Barra"+"\n"+"durante a disciplina de LOP"+"\n"+"semestre 2020.6", 300,180 );
    

    image(inforaul, 50, 150, 100,100);
    image(player, 50, 390);
    image(raul[contador%9],350,350);
  
    textSize(8);
    fill(240);  
    text("precione 'esc'"+"\n"+"para sair", 250, 480);
}

