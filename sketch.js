/**
 * Added on October 22, 2020
 * 
 * Hi, I'm BUN.
 * I've been surprised at how many people have forked over this sketch, more than I expected. Thanks.
 * 
 * Here is a sketch that explains this code with multiple codes.
 * Please use it as a reference.
 * https://www.openprocessing.org/sketch/793375
 * 
 * Brief explanation.
 * This code primarily uses "Hook's Law".
 * In other words, it simulates the motion of a spring.
 * 
 * From the mouse position, the position to be drawn is moved like a spring.
 * And the width of the line is changed according to the speed of the movement.
 * 
 ** Added on May 8, 2021 **
 * Gorilla Sun has written an explanation of each part with animations on his blog. Thank you!
 * https://gorillasun.de/blog/Simulating-brush-strokes-with-Hooke's-Law-in-P5JS-and-Processing
 **/
 function setup() {
    createCanvas(windowWidth,windowHeight);
    distance = 10;
    spring = 0.5;
    friction = 0.5;
    size = 25;
    diff = size/8;
    x = y = ax = ay = a = r = f = 0;
  }
  
  function draw() {
    oldR = r;
    if(mouseIsPressed) {
      mX = mouseX;
      mY = mouseY;
      if(!f) {
        f = 1;
        x = mX;
        y = mY;
      }
      ax += ( mX - x ) * spring;
      ay += ( mY - y ) * spring;
      ax *= friction;
      ay *= friction;
      a += sqrt( ax*ax + ay*ay ) - a;
      a *= 0.6;
      r = size - a;
      
      for( i = 0; i < distance; ++i ) {
        oldX = x;
        oldY = y;
        x += ax / distance;
        y += ay / distance;
        oldR += ( r - oldR ) / distance;
        if(oldR < 1) oldR = 1;
        strokeWeight( oldR+diff );
        line( x, y, oldX, oldY );
        strokeWeight( oldR );
        line( x+diff*2, y+diff*2, oldX+diff*2, oldY+diff*2 );
        line( x-diff, y-diff, oldX-diff, oldY-diff );
      }
    } else if(f) {
      ax = ay = f = 0;
    }
  }
  /**/