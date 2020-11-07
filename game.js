class Game{

constructor(){


}

getState(){
 
 var gameStateRef = database.ref('gameState')  
 gameStateRef.on("value",function(data){
  gameState = data.val();
 }) 
     
}


update(state){
    database.ref('/').update({
      gameState: state
    });
  }


  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
  

  
  bike1 = createSprite(100,200);
  bike1.addImage("bike",bike1img)


  bike2 = createSprite(400,200);
  bike2.addImage("bike",bike2img)

 bikes = [bike1,bike2];



  }


  play(){
    form.hide();
    
    Player.getPlayerInfo();
    
       
    if(allPlayers !== undefined){

     // background(198,135,103)
  
       
      var index = 0
      
      var x = 100;
      var y;
      
      
       for(var plr in allPlayers){

        index = index + 1;

        x = x + 200;

        y = displayHeight - allPlayers[plr].distance;
        bikes[index-1].x = x;
        bikes[index-1].y = y;
        
        
        if(index === player.index){

          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          bikes[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = bikes[index-1].y


        }
       
        if(keyIsDown(UP_ARROW) && player.index !== null){
          player.distance +=10
          player.update();
        }
    
     


       }
  

  
     }
  
  

     drawSprites();

  }

  




  }