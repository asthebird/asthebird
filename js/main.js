window.addEventListener('DOMContentLoaded', function() {
    var inputfield = document.getElementById('numberid');
    var output = document.getElementById('display');
    var text;
 
    fetch('https://asthebird.github.io/list.txt')
        .then(ligst => ligst.text()).then(out => {
            text = out;
        })
  
    try {
      var disnut = text.split('\n');
      output.innerHTML = disnut[parseInt(inputfield.value, 10)];
    } catch (e) {
      output.innerHTML = 'Something went wrong\n\n' + e;
    }
});
