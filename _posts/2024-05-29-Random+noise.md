# Variation One 
In this variation i build up on it from a demo we created in class,what i aimed to create was to change the color of the pixels to either red,green or blue this change in the different colors was supported by a for loop which could loop overe the different colors.All the pixels will upwards vertically with s4veral different noise patterns which are random.I manged to change the noise change to 0.4 in order to create different patterns of the perlin noise.The noise field is 40 and 0.1.










```
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noiseField(40, 0.1);
}

function noiseField(steps, noisiness) {
  let stepSize = width / steps;
  let noiseChange = 0.01;
  noStroke();
  for (let j = 0; j < steps; j++) {
    for (let i = 0; i < steps; i++) {
      let noiseHere = noise(i * noisiness, j * noisiness + frameCount * noiseChange, +frameCount * noiseChange * 0.5);
      let r = noiseHere * 255;
      let g = noise((i + 100) * noisiness, (j + 100) * noisiness + frameCount * noiseChange, +frameCount * noiseChange * 0.5) * 255;
      let b = noise((i + 200) * noisiness, (j + 200) * noisiness + frameCount * noiseChange, +frameCount * noiseChange * 0.5) * 255;
      fill(r, g, b);
      rect(i * stepSize, j * stepSize, stepSize, stepSize);
    }
  }
}
```











