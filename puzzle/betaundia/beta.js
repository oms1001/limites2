function preload(){
  sound = loadSound('assets/betaundia.mp3');
}

function setup(){
  let cnv = createCanvas(600, 600);
  cnv.parent('sketch-holder');
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT();
  sound.amp(1);
}

function draw(){
  background(0);


  let waveform = fft.waveform();
  noFill();
  beginShape();
  stroke(255, 230, 0);
  for (let i = 0; i < waveform.length; i++){
    let x = map(i, 0, waveform.length, 0, width);
    let y = map( waveform[i], -1, 1, 0, height);
    vertex(x,y);
  }
  endShape();
  textSize(10)
  text('Click para escuchar', 20, 20);
}

function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}