var wolf = document.getElementById("wolf");
var owl = document.getElementById("owl");
var letterOrange = document.getElementById("letter-orange");
function whiteScreen() {
    land.style.opacity = "0";
    micro.style.opacity = "0";
    flash.style.display = "none";
    photoImage1.style.display = "none";
    photoImage.style.display = "block"; 
    photoImage.style.top = "calc(100% + 10px)";

    if(screen == 1) {
        body.removeChild(rabbit);
        body.removeChild(bear);
        body.removeChild(fox);
        body.removeChild(raccoon);
        body.removeChild(wolf);
        body.removeChild(owl);
        letterOwl.style.opacity = "0";
        letterWolf.style.opacity = "0";
        letter.style.opacity = "0";
        if(checkScore){
            nextScore();
        }
    }
    if(screen == 2) {
        body.removeChild(watermelon);
        body.removeChild(orange);
        body.removeChild(apple);
        body.removeChild(banana);
        body.removeChild(grapes);
        body.removeChild(pear);
        letterGrapes.style.opacity = "0";
        letterOrange.style.opacity = "0";
        letterPear.style.opacity = "0";
        letterWatermelon.style.opacity = "0";
        if(checkScore){
            nextScore();
        }  
    }
    if(screen == 3) {
        body.removeChild(cupcake);
        body.removeChild(teapot);
        body.removeChild(dessert);
        body.removeChild(cup);
        body.removeChild(iceCream);
        body.removeChild(juice);
        letterCup.style.opacity = "0";
        letterIceCream.style.opacity = "0";
        letterJuice.style.opacity = "0";
        if(checkScore){
            nextScore();
        }
    }
    if(screen == 4) {
        body.removeChild(wolf4);
        body.removeChild(owl4);
        body.removeChild(bear4);
        body.removeChild(fox4);
        body.removeChild(rabbit4);
        body.removeChild(raccoon4);
        letterRaccoon.style.opacity = "0";
        letterFox.style.opacity = "0";
        letterRabbit.style.opacity = "0";
        if(checkScore){
            nextScore();
        }
    }
    
    setTimeout(function() {
        choseScreen();
        nextScreen();
    },1000)
}
function nextScore() {
    var marginLeftButtonGreen = ['375px', '398px', '421px', '444px'];
    var idButtonGreen = 4 - score;
    setTimeout(function() {
        button_green[idButtonGreen].style.marginLeft = marginLeftButtonGreen[idButtonGreen];
        button_green[idButtonGreen].style.transition = "1s";
    },1000);
}
function choseScreen() {
    if(countScreen <= 4) {
        screen += 1;
    }
    else {
        var nextScreen;
        nextScreen = Math.floor(Math.random() * 3) + 2;
        while(screen == nextScreen) {
            nextScreen = Math.floor(Math.random() * 3) + 2;
        }
        screen = nextScreen;
    }
}