let counter = 0

let countInterval = setInterval(makeRandomCircle,1000);

let img;
function preload() {
 img = createImg ('https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/December_Giant_sinkhole_collapse_USGS_1972.jpg/613px-December_Giant_sinkhole_collapse_USGS_1972.jpg'
);
  }


function setup() {
  createCanvas(613, 480);
  image(img,0,0)
}

function mousePressed() {
  countInterval = setInterval (makeRandomCircle, 1000);
}
function makeRandomCircle () {
  noStroke();
  fill (random(0, 255), random(0, 255),random(0,255));
  circle(random(0,width),random(0,height),30);
  counter ++;
  if (counter > 10) {
    clearInterval(countInterval);
    counter = 0;
  }
}
function doubleClicked () {
  setTimeout(bigWow, 1000);
 }


function bigWow () {
  textSize (70);
  fill(random (0, 255), random (0, 255),random (0, 255));
  strokeWeight (8);
  text ('wow!', 230, 240);
}
