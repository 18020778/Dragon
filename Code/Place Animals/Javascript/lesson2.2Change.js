var letterGrapes = document.getElementById("letter-grapes"); 
var letterPear = document.getElementById("letter-pear");
var letterWatermelon = document.getElementById("letter-watermelon");
function changeGrapes() {
    letterOrange.style.display = "none"
    animalMove[indAn].style.display = "block";
    micro.style.display = "none"; 
    setTimeout(function(){
        letterGrapes.style.display = "block"
        letterGrapes.style.fontSize = "42px";
        letterGrapes.style.top = "60px";
        letterGrapes.style.left = "200px";
        letterGrapes.style.transition = "all 0.4s";
        setTimeout(function() {
            micro.style.display = "block";
            micro.style.left = "180px";
            letterGrapes.style.top = "60px";
            letterGrapes.style.left = "230px";
            letterGrapes.style.fontSize = "38px";
        }, 500); 
    }, 50);
}
function changePear() {
    letterGrapes.style.display = "none"
    animalMove[indAn].style.display = "block"; 
    micro.style.display = "none"; 
    setTimeout(function(){
        letterPear.style.display = "block"
        letterPear.style.fontSize = "42px";
        letterPear.style.top = "60px";
        letterPear.style.left = "200px";
        letterPear.style.transition = "all 0.4s";
        setTimeout(function() {
            micro.style.display = "block";
            micro.style.left = "180px";
            letterPear.style.top = "60px";
            letterPear.style.left = "230px";
            letterPear.style.fontSize = "38px";
        }, 500); 
    }, 50);
}
function changeWatermelon() {
    letterPear.style.display = "none"
    animalMove[indAn].style.display = "block"; 
    micro.style.display = "none"; 
    setTimeout(function(){
        letterWatermelon.style.display = "block"
        letterWatermelon.style.fontSize = "42px";
        letterWatermelon.style.top = "60px";
        letterWatermelon.style.left = "200px";
        letterWatermelon.style.transition = "all 0.4s";
        setTimeout(function() {
            micro.style.display = "block";
            micro.style.left = "180px";
            letterWatermelon.style.top = "60px";
            letterWatermelon.style.left = "230px";
            letterWatermelon.style.fontSize = "38px";
        }, 500); 
    }, 50);
}