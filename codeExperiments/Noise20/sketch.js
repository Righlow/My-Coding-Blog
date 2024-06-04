let step
let numAcross=150

function setup() 
  createCanvas(500,500);
  step=width/numAcross


function draw() {
  background(220);
  
  for(let j=0; j<numAcross; j++){
    for(let i=0; i<numAcross; i++){
      drawTile(i,j,step)
      }
  } 
}

function drawTile(across, down, step){
  push()
  translate((across +0.5)*step, (down+0.5)*step)
  rectMode(CENTER)
 // angleMode(DEGREES)
  rotate(frameCount+across*down)
  rect(across*step, down*step, across*step )
  pop()
  
}