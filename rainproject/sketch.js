var raindrop = [];

function setup() {
  var canvas = createCanvas(400,400);
  for (var i = 0; i < 500; i++) {
    raindrop[i] = new Rain();
    raindrop[i].velocityY = 2;
  }
}

function draw() {
    raindrop[i].display();
  }

