var animation;
var rotation = [0, 0, 0, 0, 0];

var checkInputContents = function() {
  
  var input = document.getElementById('vert_input');
  var value = parseInt(Math.round(input.value));
  
    if (isNaN(value) === true) {    
      alert('You should write ONLY NUMBERS in the input area');
      input.value = '';
    }
  
    else {
      clearInterval(animation);
      
      animation = setInterval(function() {
          
        canvas.eraseRectangle(0, 0, canvas.getWidth(), canvas.getHeight(), 0);
                   
              for (var i = 0; i < rotation.length; i++) {
                rotation[i] = rotation[i] + 2/Math.pow(2, i + 1);
                drawStar(canvas, value, canvas.getWidth()/(Math.pow(2, i + 1)), rotation[i]);
                
                  if (rotation[i] >= 360) {
                    rotation[i] = 0;
                  }
              }
        
      }, 16);
      
    }
  
}

var drawStar = function(hicanvas, vertices, radius, rotation) {
  
  // Validating the number (at least 3 vertices)
    if (vertices < 2 || vertices > 300) {
      
      // Draw a message that explains the error to the user
      hicanvas.drawStringCentered(hicanvas.getHeight()/2, hicanvas.getWidth(), 'The number is invalid or too big', 'black', 0);
      
hicanvas.drawStringCentered(hicanvas.getHeight()/2 + 30, hicanvas.getWidth(), 'Only numbers between 2 and 300', 'black', 0);
      return false;
      
    }
  
    else {
      
      // Check if the amount of vertices is even...
        if (vertices%2 === 0) {
          vertices = vertices * 2;
        }
      
      var inset = 0.5;
      
      // Generating a random color for each frame
      var color = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
      
      // Draw the desired star using the following algorithm
      hicanvas.save(0);
      hicanvas.beginPath(0);
      hicanvas.setOrigin(hicanvas.getWidth()/2, hicanvas.getHeight()/2, 0);
      
      // This instruction allows the rotation of each star
      hicanvas.setRotation(rotation, 0);
      
      hicanvas.moveTo(0, (-1)*(radius), 0);
      
        for (var i = 0; i < vertices; i++) {
          
          hicanvas.setRotation(360/vertices, 0);
          hicanvas.lineTo(0, 0 - (radius*inset), 0);
          hicanvas.setRotation(360/vertices, 0);
          hicanvas.lineTo(0, 0 - radius, 0);
                     
        }
      
      hicanvas.stroke(0);
      hicanvas.fill(color, 0);
      hicanvas.closePath(0);
      hicanvas.restore(0);
      return true;
      
    }
}