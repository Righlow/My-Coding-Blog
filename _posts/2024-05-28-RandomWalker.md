---
title: "Random-Walker"
date: 2024-05-28
# technique 1
---
# Variation: One



```

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
     var vy=height*noise(i/0.04,frameCount/150);
    vertex(i*width/(numSamples-1), vy);
  }
  endShape(CLOSE);
}

```

In this post I played around with the Random walker and in this first variation simply on changed the number of var samples and as well as the noise which is set to 0.04.This is relatively low as noise refers to how the dirfferent points are spaced out on the from the range of the previous value.The closer the values are the smoother the random walker becomes.I used this as a foundation for the next variations below if you look at the first phot i put i decided to make it more smooth by lowering the noise.I used the example below as inspiration for my second variation.
[example](/My-Coding-Blog/codeExperiments/BasicVariation/index.html)

# Variation: Two

<img src="/My-Coding-Blog/images/RandomW.variation2.png" alt="some text" width="80%">

```
let x, y;

function setup() {
  createCanvas(600, 600);
  x = width / 2;
  y = height / 2;
  background(220);
  //noLoop()
 
}

function draw() {
  // Random color and transparency
  let r = random(255);
  let g = random(255);
  let b = random(255);
  let alpha = random(50, 100);
  
  stroke(r, g, b, alpha);
  strokeWeight(30);
  point(x, y);

  // Weighted random choice for direction
  let choice = random(50);
  let stepSize = random(15,20); // Varying step size

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
```
 In this varioation i basicallly draw a point that Randomly changes color, the point moves in various directions and step sizes and when it hits the edge of the canvas it wraps around the opposite edge creating a continous colorful dynamic movement while the colors and the transparency changes every frame.For the draw function i started off by creating Random method to randomly generate  color for the dots. which will either appear as red,green,blue, transparent which is alpha.Let choice generates random values between 0 and 50 while the let step size variable generates random step sizes between 15 and 20.The if statements checks the value 'choice' and this will determine the direction and movement.Lastly the other if statement ensure that the points can move beyound the edges.

 # Variation: Three
 <img src="/My-Coding-Blog/png" alt="some text" width="80%">
 [example](/My-Coding-Blog/codeExperiments/Noise20/index.html)
 

 In this Third sketch , each I started by creating a 500 x 500 canvas which divides itself into 150x150 tiles.In each of the frames rectangles are drawn and each is positioned in the centre of its grid cell. The rotation in this sketch is determined by its position in the grid to ultimately create a dynamic rotating pattern in the end.This has to be my favourite sketch tht I have yet to have made.


 Step stores the size of each indivdual cell while num across is the number of tile running along both vertailly and horizontally.In the draw function a nested loop is created to iterate through each position on the grid.The draw tile function has a push,pop,translate,rectmode and rectmode changes the way the rectngels are drawn reltaive to origin, while 'rotate' rotates the coordinate system by angle that changes over time.


