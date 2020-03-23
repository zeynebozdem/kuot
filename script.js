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
    
    var paletteData = 6;

    var randomPaletteNumber = Math.floor(Math.random() * paletteData); //returns random palette from paletteData
    
    paletteMinMax(randomPaletteNumber);

    function snip(){
        html2canvas($('#main-canvas'), {
        onrendered: function(canvas) {
            var img = canvas.toDataURL();
            document.getElementById('save-snip').href = img;
        }
        });
    }

    function colorGenerator(paletteMinMaxBody,paletteMinMaxContent) {
        document.body.style.backgroundColor =`rgb(${Math.floor(Math.random() * (paletteMinMaxBody.max - paletteMinMaxBody.min)) + paletteMinMaxBody.min},${Math.floor(Math.random() * (paletteMinMaxBody.max - paletteMinMaxBody.min)) + paletteMinMaxBody.min},${Math.floor(Math.random() * (paletteMinMaxBody.max - paletteMinMaxBody.min)) + paletteMinMaxBody.min})`;
        console.log(document.body.style.backgroundColor);
        document.querySelector(".content").style.color =`rgb(${Math.floor(Math.random() *( paletteMinMaxContent.max - paletteMinMaxContent.min)) + paletteMinMaxContent.min},${Math.floor(Math.random() * (paletteMinMaxContent.max - paletteMinMaxContent.min)) + paletteMinMaxContent.min},${Math.floor(Math.random() * (paletteMinMaxContent.max - paletteMinMaxContent.min)) + paletteMinMaxContent.min})`;
        console.log(document.querySelector(".content").style.color);
        document.querySelectorAll(".names a").forEach(function (item) {
            item.style.color = document.querySelector(".content").style.color;    
        });  
    }
    
    function paletteMinMax(paletteNo) {
        var paletteMinMaxBody = [];
        var paletteMinMaxContent = [];
        if (paletteNo == 0) {
            paletteMinMaxBody.push({min: 181, max: 255});
            paletteMinMaxContent.push({min: 31, max: 91});
        }else if(paletteNo == 1){
            paletteMinMaxBody.push({min: 210, max: 251});
            paletteMinMaxContent.push({min: 10, max: 122});
        }else if(paletteNo == 2){
            paletteMinMaxBody.push({min: 30, max: 91});
            paletteMinMaxContent.push({min: 181, max: 255});
        }else if(paletteNo == 3){
            paletteMinMaxBody.push({min: 10, max: 122});
            paletteMinMaxContent.push({min: 210, max: 251});
        }else if(paletteNo == 4){
            paletteMinMaxBody.push({min: 243, max: 255});
            paletteMinMaxContent.push({min: 16, max: 117});
        }else if(paletteNo == 5){
            paletteMinMaxBody.push({min: 159, max: 255});
            paletteMinMaxContent.push({min: 45, max: 88});
        }
        colorGenerator(paletteMinMaxBody[0],paletteMinMaxContent[0]);
    }