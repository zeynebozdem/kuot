/* I code extentions with pure javascript. */
/* JS codes here */
var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-158625140-2']);
    _gaq.push(['_trackPageview']);

    (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = 'https://ssl.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
    
    var links = document.querySelectorAll(".names a");
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', trackButton);
    }   
    function trackButton(e) {
        _gaq.push(['_trackEvent', e.currentTarget.id + "_button", 'click']);
    };

    var quote = document.querySelector(".quote");
    var author = document.querySelector(".author");
    var mood = document.querySelector(".mood");
    var randomQuoteNumber = Math.floor(Math.random() * data.length); //returns random word from compactData

    quote.innerHTML = data[randomQuoteNumber][0];
    author.innerHTML = data[randomQuoteNumber][1];
    mood.innerHTML = data[randomQuoteNumber][2];
