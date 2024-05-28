---
title: "Random-Walker"
date: 2024-05-28
#technique 1
---
##variation: One
![screenshot of code](https://righlow.github.io/My-Coding-Blog/_posts/2024-0-28-RandomWalker.md/RandomW.variation1.png)
<p>//var numSamples=50;

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
//</p>

<p>In this post I played around with the Random walker and in this first variation simply on changed the number of var samples and as well as the noise which is set to 0.04.This is relatively low as noise refers to how the dirfferent points are spaced out on the from the range of the previous value.The closer the values are the smoother the random walker becomes.</p>
