# Variation One 
<img src="/My-Coding-Blog/images/Noise22.png" alt="some text" width="80%">




In this variation i build up on it from a demo we created in class,what i aimed to create was to change the color of the pixels to either red,green or blue this change in the different colors was supported by a for loop which could loop overe the different colors.All the pixels will upwards vertically with several different noise patterns which are random.I manged to change the noise change to 0.4 in order to create different patterns of the perlin noise.The noise field is 40 and 0.1.










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


# Varition: two

with this variation i did not change too much as i wanted to see the effects of changing the noise change for various colors to 0.9 from 0.5.
For some time i have struggled a bit with grasping this noise and random technique but by change one small variable helped and comparing the two outcome has helped me to understand it a bit betterr.



<img src="/My-Coding-Blog/images/Noise23.png" alt="some text" width="80%">

# variation: three
<img src="/My-Coding-Blog/images/Noise25.png" alt="some text" width="80%">
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
  let noiseChange = 22;
  noStroke();
  for (let j = 0; j < steps; j++) {
    for (let i = 0; i < steps; i++) {
      let noiseHere = noise(i * noisiness, j * noisiness + frameCount * noiseChange, +frameCount * noiseChange * 0.9);
      let r = noiseHere * 255;
      let g = noise((i + 100) * noisiness, (j + 100) * noisiness + frameCount * noiseChange, +frameCount * noiseChange * 0.9) * 255;
      let b = noise((i + 200) * noisiness, (j + 200) * noisiness + frameCount * noiseChange, +frameCount * noiseChange * 0.9) * 255;
      fill(r, g, b);
      rect(i * stepSize, j * stepSize, stepSize, stepSize);
    }
  }
}
```

With this variation i wanted to try and add a higher level of noise by changing the noise change to 22, after seeing this effect i finally realized that the  noise that the higher the noise change value is, the louder the noise and pixels will appear and they would sort of blink a fast rantes.

<img src="/My-Coding-Blog/images/Noise25.png" alt="some text" width="80%">









