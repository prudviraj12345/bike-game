
  
var game;
var gameState = 0;
var player;
var playerCount;
var form;
var players;
var playerIndex;
var play;
var allPlayers
var bike1,bike2,bikes;
var bike1img,bike2img



function preload(){


  bike1img = loadImage("bike1.png.png")
  bike2img = loadImage("bike2.png.png")





}




function setup(){

    canvas = createCanvas(displayWidth - 20, displayHeight-30);    

   database = firebase.database();
   game = new Game();
   game.getState();
   game.start();





}

function draw(){
    background("black");
   
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }





    drawSprites();
}

