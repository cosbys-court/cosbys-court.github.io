var img;
var img2;
var img3;
function preload() {
  img = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/1200px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png');
  img2 = loadImage('https://cdn.cnn.com/cnnnext/dam/assets/180425150309-01-bill-cosby-lead-exlarge-169.jpg');
  img3 = loadImage('https://media1.giphy.com/media/fVKnL9kiRfGGk/giphy.gif');
}

function setup() {
  //createCanvas(700, 500, WEBGL);
  //createCanvas(windowWidth, windowHeight, WEBGL);
  var cnv = createCanvas(700, 500, WEBGL);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(255, 0, 200);
}

function draw() {
  background(200);

  texture(img2);
  rotateZ(frameCount * 0.01);
  box(700, 500, -1100, 55, 55);

  texture(img);
  translate(0, 0, 70);
  rotateY(frameCount * 0.00);
  rotateZ(frameCount * 0.00);
  plane(100, 100, 1100, 55, 55);

  texture(img3);
  translate(0, 0, 70);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  plane(100, 100, 1100, 55, 55);
}

//https://media1.giphy.com/media/fVKnL9kiRfGGk/giphy.gif
//https://vignette.wikia.nocookie.net/mario/images/8/89/Peach%27s_Castle_-_Overview_-_Super_Mario_64.png/revision/latest?cb=20120512172600
//https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/1200px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png