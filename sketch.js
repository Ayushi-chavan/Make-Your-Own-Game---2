var player,playerImg
var opponent,opponentImg
var girl1,girl1Img
var girl2,girl2Img
var gameState=0
var playerImg1="b1.png"
var girlbutton
var boybutton
var playbutton

function preload(){
getPlayerImg()
bg=loadImage("bg.png")
opponentImg=loadImage("b2.png")
}

function setup() {
  createCanvas(1000,700);

  player = createSprite(200,320,50,50)
  player.addImage("player",playerImg)
  player.scale=1

  opponent = createSprite(600,320,50,50)
  opponent.addImage("opponent",opponentImg)

}

function draw() {
 // background(bg)
if(gameState===0){
  start()
}

if(gameState===1){
  play()
}
  //drawSprites();
}

function keyPressed(){
  if(keyCode==UP_ARROW){
    player.y=player.y-5
  }
  if(keyCode==DOWN_ARROW){
    player.y=player.y+5
  }
  if(keyCode==LEFT_ARROW){
    player.x=player.x-5
  }
  if(keyCode==RIGHT_ARROW){
    player.x=player.x+5
  }
}

function start(){
  background("blue")

  text("Rules of the Game",500,30)

    girlbutton = createButton("Girl Player")
    girlbutton.position(200,80)
    girlbutton.mousePressed(function(){

      playerImg1 = "b1.png"
    })

    boybutton = createButton("Boy Player")
    boybutton.position(600,160)
    boybutton.mousePressed(function(){
      playerImg1 = "b2.png"
    })

    playbutton = createButton("Play")
    playbutton.position(800,80)
    playbutton.mousePressed(()=>{
      gameState = 1
      girlbutton.hide()
      boybutton.hide()
      playbutton.hide()
    })
}

function play(){
   background(bg)
  drawSprites()
}

function getPlayerImg(){
  playerImg=loadImage(playerImg1)
}



