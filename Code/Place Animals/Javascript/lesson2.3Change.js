var letterIceCream = document.getElementById("letter-iceCream");
var letterJuice = document.getElementById("letter-juice");
function changeIceCream() {
    letterCup.style.display = "none"
    animalMove[indAn].style.display = "block"; 
    micro.style.display = "none"; 
    setTimeout(function(){
        letterIceCream.style.display = "block"
        letterIceCream.style.fontSize = "38px";
        letterIceCream.style.top = "60px";
        letterIceCream.style.left = "75px";
        letterIceCream.style.transition = "all 0.4s";
        setTimeout(function() {
            micro.style.display = "block";
            micro.style.left = "30px";
            letterIceCream.style.top = "60px";
            letterIceCream.style.left = "75px";
            letterIceCream.style.fontSize = "38px";
        }, 500); 
    }, 50);
}

function changeJuice() {
    letterIceCream.style.display = "none"
    animalMove[indAn].style.display = "block"; 
    micro.style.display = "none"; 
    setTimeout(function(){
        letterJuice.style.display = "block"
        letterJuice.style.fontSize = "38px";
        letterJuice.style.top = "60px";
        letterJuice.style.left = "75px";
        letterJuice.style.transition = "all 0.4s";
        setTimeout(function() {
            micro.style.display = "block";
            micro.style.left = "30px";
            letterJuice.style.top = "60px";
            letterJuice.style.left = "75px";
            letterJuice.style.fontSize = "38px";
        }, 500); 
    }, 50);
}