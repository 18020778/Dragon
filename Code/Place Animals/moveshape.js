//di chuyển nhân vật
var mainBig = document.getElementById("mainBig");
var animalMove = document.getElementsByClassName("moveAnimal");
var runMakeAppearDot;
var thirdDotted = document.getElementsByClassName("dotted");
var expressRaccoon = false; // nếu có đang giữ chuột hay không
var isCorrect = false;
var checkCorrect;
mainBig.addEventListener("mousemove", moveshape);
animalMove[indAn].addEventListener("mousemove", moveshape);
function moveshape(e){
    e.preventDefault();
    if(isCorrect || !expressRaccoon) return;
    var leftOfMainbig = mainBig.offsetLeft;
    var topOfMainbig = mainBig.offsetTop;
    var limitLeft = leftOfMainbig + animalMove[indAn].offsetWidth/2;
    var limitRight = leftOfMainbig + mainBig.offsetWidth - animalMove[indAn].offsetWidth/2;
    var limitTop = topOfMainbig + 45 +  animalMove[indAn].offsetHeight/2;
    var limitBottom = topOfMainbig + mainBig.offsetHeight - animalMove[indAn].offsetHeight/2;
    if(e.pageX >= limitLeft && e.pageX <= limitRight && e.pageY >= limitTop && e.pageY <= limitBottom){
        animalMove[indAn].style.top = ((e.pageY - topOfMainbig) - (animalMove[indAn].offsetHeight / 2)) + "px";
        animalMove[indAn].style.left = ((e.pageX - leftOfMainbig) - (animalMove[indAn].offsetWidth / 2)) + "px";
    }
    else{
        checkDrop();   
    }
}
