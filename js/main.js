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
                for (let i = 0; i > text.split('\n').length; i++) {
                    if (text.split('\n')[i] == searchthing) {
                        searchcontent.innerHTML = `${text.split('\n')[i]} is found! (this is just for testing)`;
                        break;
                    }
                }
                searchcontent.innerHTML = `<span>No results were found!<br>Tip: the search engine is SUPER specific: you gotta type the word exactly correctly, that's why we have the sidenav!</span>`;
            });
    });
});
