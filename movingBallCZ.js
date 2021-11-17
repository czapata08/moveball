
//Set global variable that would contain the position, velocity and the html element "ball"
var positionX = 0;
var positionY = 0;
var velocity = 80;
var velocityX = 5;
var velocityY = 10;
var reverse = false;
var ball = document.getElementById("ball");


// random color
var r = Math.floor(255*(Math.random()));
var g = Math.floor(255*(Math.random()));
var b = Math.floor(255*(Math.random()));        
var color = 'rgb(' + r + ', ' + g + ', ' + b + ')';

var colorRandom = function(div){

  var counter = 0;
  var limit = 6;

  var timerColor = function(div, x, y){
      if(counter >= limit) return;
      counter += 1;

      setTimeout(function(){
          // random color
          var r = Math.floor(255*(Math.random()));
          var g = Math.floor(255*(Math.random()));
          var b = Math.floor(255*(Math.random()));        
          var color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
          div.style.background = color; 
          timerColor(div);
      },500);
  };
  timerColor(div);
};

//Change size

var size = function(div, width, height){
  div.style.width = width + 'px';    
  div.style.height = height + 'px';    
};

//write a function that can change the position of the html element "ball"
function moveBall() {
  // two x-axis coordinatess
  var Xmin = 0;
  var Xmax = 1200;

  // two y-axis coordinates
  var Ymin = 0;
  var Ymax = 700;

  if (reverse) {
    positionX = positionX - velocityX;
    positionY = positionY - velocityY;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
    ball.style.background = colorRandom(ball);
    size(ball, Math.random() * 100, Math.random() * 100); 
    

  } else  {
    positionX = positionX + velocityX;
    positionY = positionY + velocityY;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
    ball.style.background = colorRandom(ball);
    size(ball, 100, 100)
  }

  if (
    positionX > Xmax ||
    positionX === Xmin || 
    positionY > Ymax ||
    positionY === Ymin
    ){
      reverse = !reverse;
    }
  }


setInterval(moveBall, 100);
