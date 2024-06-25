function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  //warna
  noStroke();
  fill(255,27,0);

  // Animasi
  let gigitan = PI / 20;
  let mulaiBergerak = gigitan * sin (frameCount * 0.1) + gigitan;
  let stopBergerak = TWO_PI - mulaiBergerak;


arc(50, 50, 80, 80, mulaiBergerak, stopBergerak, PIE);
}