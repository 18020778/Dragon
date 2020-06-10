var wolf = document.getElementById("wolf");
var owl = document.getElementById("owl");
var letterOrange = document.getElementById("letter-orange");
function whiteScreen() {
    land.style.opacity = "0";
    micro.style.display = "none";
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
        letterOwl.style.display = "none"
        letterWolf.style.display = "none"
        letter.style.display = "none"
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
        letterGrapes.style.display = "none"
        letterOrange.style.display = "none"
        letterPear.style.display = "none"
        letterWatermelon.style.display = "none"
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
        letterCup.style.display = "none"
        letterIceCream.style.display = "none"
        letterJuice.style.display = "none"
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
        letterRaccoon.style.display = "none"
        letterFox.style.display = "none"
        letterRabbit.style.display = "none"
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