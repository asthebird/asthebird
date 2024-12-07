window.addEventListener('DOMContentLoaded', function() {
  require(['js/disnut'], function(disnut){
    var inputfield = document.getElementById('numberid');
    var output = document.getElementById('display');
  
    try {
      output.innerHTML = disnut.ligma[parseInt(inputfield.value, 10)];
    } catch (e) {
      output.innerHTML = 'Invalid number\n\n' + e;
    }
  });
});
