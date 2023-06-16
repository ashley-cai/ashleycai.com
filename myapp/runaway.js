
var caller = $("#emcee"),
    box = $("#box");
    text = document.getElementsByClassName(".sentence");


console.log(text.innerHTML)

function run()
{
    var randX = Math.floor(Math.random() * (window.innerWidth - 100));
    var randY = Math.floor(Math.random() * (window.innerHeight - 100));
    console.log([randX, randY]);
    caller.stop().animate({"left": randX + "px", "top": randY + "px"});

}

$(document).ready(function() {
    console.log("hello?")
    caller.on('mouseenter', run);
    caller.on('click', function(){
        alert('clicked!');
    });
    
});