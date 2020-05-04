var wolf = document.getElementById("wolf");
var owl = document.getElementById("owl");
var letterOrange = document.getElementById("letter-orange");
function whiteScreen() {
    var button_green = document.getElementsByClassName("button_green");
    land.style.opacity = "0";
    micro.style.opacity = "0";
    flash.style.display = "none";
    photoImage1.style.display = "none";
    //photoImage.style.display = "block";  //add
    photoImage.style.top = "calc(100% + 10px)";

    if(screen == 2) {
        body.removeChild(rabbit);
        body.removeChild(bear);
        body.removeChild(fox);
        body.removeChild(raccoon);
        body.removeChild(wolf);
        body.removeChild(owl);
        body.removeChild(letterOwl);
        body.removeChild(letterWolf);
        body.removeChild(letter);
        setTimeout(function() {
            button_green[3].style.marginLeft = "444px";
            button_green[3].style.transition = "1s";
        },1000);    
    }
    if(screen == 3) {
        body.removeChild(watermelon);
        body.removeChild(orange);
        body.removeChild(apple);
        body.removeChild(banana);
        body.removeChild(grapes);
        body.removeChild(pear);
        body.removeChild(letterGrapes);
        body.removeChild(letterOrange);
        body.removeChild(letterPear);
        body.removeChild(letterWatermelon);
        setTimeout(function() {
            button_green[2].style.marginLeft = "421px";
            button_green[2].style.transition = "1s";
        },1000);  
    }
    if(screen == 4) {
        body.removeChild(cupcake);
        body.removeChild(teapot);
        body.removeChild(dessert);
        body.removeChild(cup);
        body.removeChild(iceCream);
        body.removeChild(juice);
        body.removeChild(letterCup);
        body.removeChild(letterIceCream);
        body.removeChild(letterJuice);

        setTimeout(function() {
            button_green[1].style.marginLeft = "398px";
            button_green[1].style.transition = "1s";
        },1000);  
    }
    
    setTimeout(function() {
        nextScreen();
    },1000)
}