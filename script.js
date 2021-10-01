// Name any p5.js functions we use in `global` so Glitch can recognize them.
/* global
 *    HSB, background, color, colorMode, createCanvas, ellipse, fill, height, line, mouseIsPressed,
 *    mouseX, mouseY, rect, stroke, strokeWeight, width, random, frameRate, keyTyped, key, keyCode, RETURN, text, textSize
 */

let brushHue, brushSaturation, brushBrightness, priorX, priorY, weight, counter;

function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  
  // Initialize brushHue to 0 (which is delcared at the top)
  brushHue = 0;
  brushSaturation = 30;
  brushBrightness = 90;
  
  // Initialize prior X and prior Y to zero
  priorX = 0;
  priorY = 0;
  
  weight = 5;
  counter = 1;
    
  strokeWeight(5);
  
  // Draw the background to clear the screen at the beginning of the frame
  background(95);   
  
  textSize(10);
  text('Press return to clear', 10, 15);

}

function draw() {

  chooseColors();
  
  keyTyped();
      
  // If the mouse is being held down
  if (mouseIsPressed) {
    // Draw a line between prior point and current point
    line(priorX, priorY, mouseX, mouseY);
  }
  
  priorX = mouseX;
  priorY = mouseY;
  
}

// // When a key on the keyboard is pressed, execute the code in { }
function keyPressed() {
  if (keyCode == RETURN) {
    background(95);
    strokeWeight(0);
    textSize(10);
    fill(0,0,0);
    text('Press return to clear', 10, 15);
  }
}

function keyTyped() {
  if (key == 's') {
    brushSaturation++;
  } else if (key == 'b') {
    brushBrightness++;
  } else if (key == '-') {
    brushSaturation--;
  } else if (key == '0') {
    brushBrightness--;
  }
}

/* A function that sets the stroke and fill of our "paint brush". */
function chooseColors() {
  brushHue += 1;
  
  strokeWeight(weight += counter);
  
  if (weight > 15) {
    counter = -1
  } else if (weight < 5) {
    counter = 1
  }
  
  if (brushHue >= 360) {
    brushHue = 0;
  }
  
  stroke(brushHue, brushSaturation, brushBrightness);
  fill(brushHue, brushSaturation, brushBrightness);
}