const fs = require('fs'); 

window.addEventListener('DOMContentLoaded', function() {
    var inputfield = document.getElementById('numberid');
    var output = document.getElementById('display');
    var text;
 
    fs.readFile('/disnut.txt', 'utf8', (err, data) => { 
      if (err) { 
        console.error('Error reading file:', err); 
        return;
      }

      const content = data; 
      text = content;
    }); 
  
    try {
      var disnut = text.split('\n');
      output.innerHTML = disnut[parseInt(inputfield.value, 10)];
    } catch (e) {
      output.innerHTML = 'Something went wrong\n\n' + e;
    }
});
