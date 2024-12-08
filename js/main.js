window.addEventListener('DOMContentLoaded', function() {
    var searchup = document.getElementById('search text');
    var output = document.getElementById('display');
    var text;
 
    fetch('https://asthebird.github.io/list.txt')
        .then(ligst => ligst.text()).then(out => {
            text = out;

            setInterval(function() {
                try {
                    var disnut = text.split('\n')
                    var filter = disnut.filter(function(item) {
                        return item.includes(searchup.value);
                    });

                    var result = filter.toString().replace(/,/g, '<br />');
                    output.innerHTML = result;
                } catch (e) {
                    output.innerHTML = 'Oops! Something went wrong:\n\n' + e;
                }
            }, 100);
        });
});
