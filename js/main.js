window.addEventListener('DOMContentLoaded', function() {
  require('disnut.json', function(disnut) {
    var inputfield = document.getElementById('numberid');
    var output = document.getElementById('display');

    try {
      output.innerHTML = disnut[Number(inputfield.value)];
    } catch (e) {
      output.innerHTML = `Invalid number

` + e;
    }
  });
});
