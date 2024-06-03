# Variation One 










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











