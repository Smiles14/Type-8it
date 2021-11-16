let keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let circle = document.getElementById('center')
let bgText = "~: "

document.onkeydown = function(e){
    var x = e.which || e.keyCode;
    var y = String.fromCharCode(x);
    afPlay(y, x);
    anim();
    txtChange(y)
    bText(x)
}

function afPlay(y, x){
    if(x == 8 || x == 46) {
        const file = new Audio('./sounds/dlete.wav')
        file.play();
    } else {
        if (keys.includes(y.toLowerCase())){
            snd = y.toLowerCase();
        }else{
            snd = keys[Math.floor(Math.random() * keys.length)];
        }
        const file = new Audio('./sounds/'+ snd + '.wav')
        file.play();
    }
}

async function anim(){
    document.getElementById('center').style.transform = 'translate(-45%, -45%)'
    await new Promise(r => setTimeout(r, 100));
    document.getElementById('center').style.transform = 'translate(-50%, -50%)'
}

function txtChange(y){
    document.getElementById('text').innerHTML = y;
}

function bText(x){
    if(x == 8 || x == 46){
        bgText = bgText.slice(0, -1);
        document.getElementById('boring').innerHTML = bgText;
    } else{
        var y = String.fromCharCode(x);
        bgText += y;
        document.getElementById('boring').innerHTML = bgText;
    }
    if(bgText == ''){
        bgText = '~: '
    }
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}