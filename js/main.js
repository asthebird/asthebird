var disnut = require('disnut.json');

window.addEventListener('DOMContentLoaded', function() {
  var inputfield = document.getElementById('numberid');
  var output = document.getElementById('display');

  try {
    output.innerHTML = disnut['disnut'][Number(inputfield.value)];
  } catch (e) {
    output.innerHTML = `Invalid number
    
    ` + e;
  }
});
