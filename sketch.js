/*var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var allPlayers;

var database;

var form, player, game;
function preload(){
}

function setup(){
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
}


function draw(){
background("blue");  
}
*/

var callOut;
var t1;
var board;


var ticket;
function setup(){
  createCanvas(displayWidth,displayHeight);

 ticket = generateTicket();
 
 board = new Sequence(1,90,90);
 t1 =new Ticket();
 
 

}
function draw(){
  background(255);
 
 
board.display();
  board.sortArray();
  t1.display();
}



function ourWork(){
  if(frameCount % 60 == 0){
    callOut = Math.round(random(0,arr.length-1));
   
    textSize(20);
    text(arr[callOut],100,100);
    arr.splice(callOut,1);
  }
}