var letterRaccoon = document.getElementById("letter-raccoon-4"); 
var letterFox = document.getElementById("letter-fox");
var letterRabbit = document.getElementById("letter-rabbit");
function changeRaccoon() {
    letterBear.style.display = "none"
    animalMove[indAn].style.display = "block";
    micro.style.display = "none"; 
    setTimeout(function(){
        letterRaccoon.style.display = "block"
        letterRaccoon.style.fontSize = "42px";
        letterRaccoon.style.top = "60px";
        letterRaccoon.style.left = "200px";
        letterRaccoon.style.transition = "all 0.4s";
        setTimeout(function() {
            micro.style.display = "block";
            micro.style.left = "180px";
            letterRaccoon.style.top = "60px";
            letterRaccoon.style.left = "230px";
            letterRaccoon.style.fontSize = "38px";
        }, 500); 
    }, 50);
}
function changeFox() {
    letterRaccoon.style.display = "none"
    animalMove[indAn].style.display = "block"; 
    micro.style.display = "none"; 
    setTimeout(function(){
        letterFox.style.display = "block"
        letterFox.style.fontSize = "42px";
        letterFox.style.top = "60px";
        letterFox.style.left = "200px";
        letterFox.style.transition = "all 0.4s";
        setTimeout(function() {
            micro.style.display = "block";
            micro.style.left = "180px";
            letterFox.style.top = "60px";
            letterFox.style.left = "230px";
            letterFox.style.fontSize = "38px";
        }, 500); 
    }, 50);
}
function changeRabbit() {
    letterFox.style.display = "none"
    animalMove[indAn].style.display = "block"; 
    micro.style.display = "none"; 
    setTimeout(function(){
        letterRabbit.style.display = "block"
        letterRabbit.style.fontSize = "42px";
        letterRabbit.style.top = "60px";
        letterRabbit.style.left = "50px";
        letterRabbit.style.transition = "all 0.4s";
        setTimeout(function() {
            micro.style.display = "block";
            micro.style.left = "50px";
            letterRabbit.style.top = "60px";
            letterRabbit.style.left = "100px";
            letterRabbit.style.fontSize = "38px";
        }, 500); 
    }, 50);
}

var a = document.getElementById("createLink");

function loadStart() {
    var button_green = document.getElementsByClassName("button_green");
    button_green[0].style.marginLeft = "375px";
    button_green[0].style.transition = "1s";
}
