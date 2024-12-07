window.addEventListener('DOMContentLoaded', function() {
  require(['disnut'], function(disnut){
    var inputfield = document.getElementById('numberid');
    var output = document.getElementById('display');
  
    try {
      output.innerHTML = disnut.ligma[Number(inputfield.value)];
    } catch (e) {
      output.innerHTML = `Invalid number

` + e;
    }
  });
});
