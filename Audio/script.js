let keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let circle = document.getElementById('center')
let bgText = "~: "
let end = '.wav'
let change = true;

document.onkeypress = function(e){
    var x = e.which || e.keyCode;
    var y = String.fromCharCode(x);
    if(x == 126){
        checker();
        afplayStart();
        anim();
        bText(x);

    }else{
        afPlay(y, x);
        anim();
        txtChange(y)
        bText(x)
    }
}

document.onkeydown = function(e){
    var x = e.which || e.keyCode;
    if(x == 8){
        afplayDlete();
        anim();
        bText(x);
    }
}

function afPlay(y, x){
        if (keys.includes(y.toLowerCase())){
            snd = y.toLowerCase();
        }else{
            snd = keys[Math.floor(Math.random() * keys.length)];
        }
        const file = new Audio('https://smiles14.github.io/Type-8it/Audio/sounds/'+ snd + end)
        file.play();
}

function afplayDlete(){
    const file = new Audio('https://smiles14.github.io/Type-8it/Audio/sounds/dlete' + end)
    file.play();
}

function afplayStart(){
    file = new Audio('https://smiles14.github.io/Type-8it/Audio/sounds/switch.wav');
    file.play();
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
    if(x == 8){
        bgText = bgText.slice(0, -1);
        document.getElementById('boring').innerHTML = bgText;
    } else{
        var y = String.fromCharCode(x);
        bgText += y;
        document.getElementById('boring').innerHTML = bgText;
    }
    if(bgText == '' || bgText == '~:' || bgText == '~'){
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

function checker(){
    if(change == true){
        shiftCol();
        change = !change;
        end = '1.wav';
    }else if (change != true){
        shiftCol();
        change = !change;
        end = '.wav';
    }
}

function shiftCol(){
    if(end == '1.wav'){
        document.body.style.backgroundImage= 'linear-gradient(38deg, rgba(2,0,36,1) 0%, rgba(68,65,63,1) 100%)';
        document.getElementById('center').style.backgroundColor = 'rgb(255,177,177)';
    }else if (end == '.wav'){
        document.body.style.backgroundImage = 'linear-gradient(38deg, rgba(113,32,32,1) 0%, rgba(63,53,84,1) 100%)';
        document.getElementById('center').style.backgroundColor = 'rgb(207, 177, 255)';
    }
}
