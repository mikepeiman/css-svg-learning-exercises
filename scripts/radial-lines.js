// import Color from './../node_modules/color/index.js';

// let trigger = document.querySelector('#timing-function-trigger')
// trigger.addEventListener('click', triggerTransitions)

// function triggerTransitions() {
//   console.log('triggerTransitions triggered!');
// }

// triggerTransitions();
// const Raphael = import('http://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js');

// var Color = require('color');
require(['Color'], function(color) {

})

console.log('testing console')

function setRect(el, originX, originY, width, height, fill, stroke, strokeWidth) {
  let rect = document.querySelector(el);
  rect.setAttribute('height', height);
  rect.setAttribute('width', width);
  rect.setAttribute('x', originX);
  rect.setAttribute('y', originY);
  rect.setAttribute('fill', fill);
  rect.setAttribute('stroke', stroke);
  rect.setAttribute('stroke-width', strokeWidth);
  return rect
}

function setLine(el, startX, endX, startY, endY, strokeColor, strokeWidth, lineCap) {
  let line = document.querySelector(el);
  line.setAttribute('x1', startX);
  line.setAttribute('x2', endX);
  line.setAttribute('y1', startY);
  line.setAttribute('y2', endY);
  line.setAttribute('stroke', strokeColor);
  line.setAttribute('stroke-width', strokeWidth);
  line.setAttribute('stroke-linecap', lineCap);
}
function setLineAnonymous(startX, endX, startY, endY, strokeColor, strokeWidth, lineCap) {
  let svg = document.querySelector('.radial-lines')
  let line = document.createElementNS("http://www.w3.org/2000/svg","line");
  line.setAttribute('x1', startX);
  line.setAttribute('x2', endX);
  line.setAttribute('y1', startY);
  line.setAttribute('y2', endY);
  line.setAttribute('stroke', strokeColor);
  line.setAttribute('stroke-width', strokeWidth);
  line.setAttribute('stroke-linecap', lineCap);
  // add in a class and id attribute, which will be added with variables in the makeRadiatingLines funtion below
  svg.appendChild(line)
}

function toRadian(angle) {
  return angle * Math.PI / 180;
}
function toDegree(radians) {
  return radians * 180 / Math.PI 
}
function getDegree(numberOfPointsOnCircle) {
  return 360 / numberOfPointsOnCircle
}


function makeRadiatingLines(numberOfLines, radiusStart, radiusEnd, colors, strokeWidth, lineCap) {
  console.log('makeRadiatingLines called')
  let lineArray = []
  function setColor(colors) {
    return colors
    
    

    line.setAttribute('stroke', strokeColor);
  }
  let x1,x2,
      y1,y2,
      increase = Math.PI * 2 / numberOfLines,
      angle = 0

  

  for(let i = 0; i <= numberOfLines; i++) {
    console.log(i)    
    let line = {}
    x1 = radiusStart * Math.cos( angle )
    y1 = radiusStart * Math.sin( angle )
    x2 = radiusEnd * Math.cos( angle )
    y2 = radiusEnd * Math.sin( angle )
    line.startX = x1
    line.endX = x2
    line.startY = y1
    line.endY = y2
    line.strokeColor = colors
    line.strokeWidth = strokeWidth
    line.lineCap = lineCap
    console.log(line)
    lineArray.push(line)
    angle += increase
  }

  lineArray.forEach(line => {
    console.log(`inside lineArray.forEach`)
    console.log(line)
    setLineAnonymous(line.startX, line.endX, line.startY, line.endY, line.strokeColor, line.strokeWidth, line.lineCap)
  })
}


makeRadiatingLines(25, 150, 175, "hsla(240,100%,50%,1)", "15px", "round")

// makeRadiatingLines(25, 150, 175, {start: }, "15px", "round")

// var stage = document.querySelector('.stage'),
//     plots = 10,
//     increase = Math.PI * 2 / plots,
//     angle = 0,
//     x = 0,
//     y = 0;
    
// for( var i = 0; i < plots; i++ ) {
//   var p = new Plot( stage );
//   p.setBackground( 'green' );
//   p.setDimensions( 40, 40 );
//   x = 100 * Math.cos( angle ) + 200;
//   y = 100 * Math.sin( angle ) + 200;
//   p.position( x,y );
//   angle += increase;
// }
