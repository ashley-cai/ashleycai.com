pal = ["#C7F565", "#546F1C", "#97B44C"]
function jump(letter) {
    letter.style.left = -30 + Math.random() * 60 + "px";
    letter.style.top = -30 + Math.random() * 60 + "px";
    letter.style.color = pal[Math.floor(Math.random()*pal.length)];;
    letter.style.position = "relative";
    setTimeout(function(){
        letter.removeAttribute('style')
    }, 1000)
}