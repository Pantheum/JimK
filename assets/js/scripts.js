
let quoteArry = [
    'Do you exist?', 
    'Its all a perception.'
];

var rnd = quoteArry[Math.floor(Math.random() * quoteArry.length)];

setText();
function setText (){
    var quotetext = document.getElementById("quote")
    quotetext.innerHTML = rnd;
};
