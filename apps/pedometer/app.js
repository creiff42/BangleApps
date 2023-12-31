g.setFontAlign(0,0); // center font
g.setFont("Vector",60);

var steps = Bangle.getHealthStatus("day").steps;

function showSteps() {
  g.clear();
  g.drawString(steps, g.getWidth()/2, g.getHeight()/2);
  Bangle.setLCDPower(1);
}

var interval = setInterval(showSteps, 1000);
