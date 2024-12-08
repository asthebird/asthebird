window.addEventListener('DOMContentLoaded', function() {
    var inputfield = document.getElementById('numberid');
    var output = document.getElementById('display');
    var text;
 
    fetch('https://asthebird.github.io/list.txt')
        .then(ligst => ligst.text()).then(out => {
            text = out;

            setInterval(function() {
                try {
                    var disnut = text.split('\n')[parseInt(inputfield.value, 10)-1];
                    if (disnut != undefined) {
                        output.innerHTML = `<span class="showthing">Deez nuts joke #${parseInt(inputfield.value, 10)-1}:\n</span>` + disnut;
                    } else {
                        if (parseInt(inputfield.value, 10) > text.split('\n').length) {
                            output.innerHTML = `Too high! The Dictionary contains only ${text.split('\n').length} jokes!`;
                        }
                        if  (parseInt(inputfield.value, 10) < 1) {
                            output.innerHTML = 'Invalid number';
                        }
                    }
                } catch (e) {
                    output.innerHTML = 'Something went wrong:\n\n' + e;
                }
            }, 100);
        });
});
