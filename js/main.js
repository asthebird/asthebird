window.addEventListener('DOMContentLoaded', function() {
  var disnut = require('disnut.json');
  var inputfield = document.getElementById('numberid');
  var output = document.getElementById('display');

  try {
    output.innerHTML = disnut['ligma'][Number(inputfield.value)];
  } catch (e) {
    output.innerHTML = `Invalid number
    
    ` + e;
  }
});
