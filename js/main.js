window.addEventListener('DOMContentLoaded', function() {
    var inputfield = document.getElementById('numberid');
    var output = document.getElementById('display');
    var text;
 
    fetch('https://asthebird.github.io/list.txt')
        .then(ligst => ligst.text()).then(out => {
            text = out;

            setInterval(function() {
                try {
                    var disnut = text.split('\n')[parseInt(inputfield.value, 10)];
                    if (disnut != undefined) {
                        output.innerHTML = `<span class="showthing">joke #${parseInt(inputfield.value, 10)}:\n</span>` + disnut;
                    }
                } catch (e) {
                    output.innerHTML = 'Something went wrong\n\n' + e;
                }
            }, 100);
        });
});
