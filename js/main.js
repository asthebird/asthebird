window.addEventListener('DOMContentLoaded', function() {
    var searchup = document.getElementById('search text');
    var mainsearch = document.getElementById('mainsearch');
    var output = document.getElementById('display');
    var searchcontent = document.getElementById('content');
    var submitbutton = document.getElementsByClassName('submit');
 
    fetch('https://asthebird.github.io/list.txt')
        .then(ligst => ligst.text()).then(text => {
            setInterval(function() {
                try {
                    var disnut = text.split('\n')
                    var filter = disnut.filter(function(item) {
                        return item.toLowerCase().includes(searchup.value.toLowerCase());
                    });

                    if (!(searchup.value == '' || searchup.value == ' ')){
                        var result = filter.toString().replace(/,/g, '<br />');
                        output.innerHTML = result;
                    } else {
                        output.innerHTML = '';
                    }
                } catch (e) {
                    output.innerHTML = 'Oops! Something went wrong:\n\n' + e;
                }
            }, 100);

            submitbutton[0].addEventListener('click', function() {
                var searchthing = mainsearch.value;
                var found;
                
                var found = text.split('\n').find(function(i) {
                    return text.split('\n')[i] == searchthing);
                });
                
                if (found == undefined) {
                    searchcontent.innerHTML = `<span>No results were found!<br>Tip: the search engine is SUPER specific: you gotta type the word exactly correctly, that's why we have the sidenav!</span>`;
                } else {
                    searchcontent.innerHTML = `i find your thing bozo (test)`
                }
            });
    });
});
