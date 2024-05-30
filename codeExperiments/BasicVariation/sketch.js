let x, y;

function setup() {
  createCanvas(600, 600);
  x = width / 2;
  y = height / 2;
  background(220);
}

function draw() {
  // Random color and transparency
  let r = random(255);
  let g = random(255);
  let b = random(255);
  let alpha = random(53, 90);
  
  stroke(r, g, b, alpha);
  strokeWeight(30);
  point(x, y);

  // Weighted random choice for direction
  let choice = random(50);
  let stepSize = random(10,10); // Varying step size

  if (choice < 40) { // 40% chance to move right
    x += stepSize;
  } else if (choice < 20) { // 20% chance to move left
    x -= stepSize;
  } else if (choice < 20) { // 20% chance to move down
    y += stepSize;
  } else { // 20% chance to move up
    y -= stepSize;
  }

  // Wrap around edges to create continuous movement
  if (x > width) x = 0;
  if (x < 0) x = width;
  if (y > height) y = 0;
  if (y < 0) y = height;
}
var numSamples=70;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200);
  beginShape();
  vertex(width, height);
  vertex(0, height);
  for(var i=0; i<numSamples; i++){
    var vy=random(height);
     var vy=height*noise(i*0.045,frameCount/100);
    vertex(i*width/(numSamples-1), vy);
  }
  endShape(CLOSE);
}
