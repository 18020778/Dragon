function checkDrag2(){
    expressRaccoon = true;
    animalMove[indAn].style.transition = "none";
    // khi nào mình kéo thả mới bắt đầu kiểm tra vị trí hiện vòng cho đỡ lag
    runMakeAppearDot = setInterval(makeDotAppear2, 3);
}
// checkDrop là khi nhả chuột ra khỏi con vật
var firstDottedLeft = thirdDotted[0].offsetLeft;
var secondDottedLeft = thirdDotted[1].offsetLeft;
var thirdDottedLeft = thirdDotted[2].offsetLeft;
var bothOfDottedTop = thirdDotted[0].offsetTop;
var racLeft = animalMove[indAn].offsetLeft + 52;
var racTop = animalMove[indAn].offsetTop + animalMove[indAn].offsetHeight;
function checkDrop2(){
    clearInterval(runMakeAppearDot);
    var firstDottedLeft = thirdDotted[0].offsetLeft;
    var secondDottedLeft = thirdDotted[1].offsetLeft;
    var thirdDottedLeft = thirdDotted[2].offsetLeft;
    var bothOfDottedTop = thirdDotted[0].offsetTop;
    var racLeft = animalMove[indAn].offsetLeft + 52;
    var racTop = animalMove[indAn].offsetTop + animalMove[indAn].offsetHeight;
    expressRaccoon = false;
    animalMove[indAn].style.transition = "all 1s";
    var timeDelay = 0;
    var wrongChoice2 = false;
    if(racTop >= bothOfDottedTop + 10 && racTop <= bothOfDottedTop + 50){
        if(racLeft >= firstDottedLeft && racLeft <= firstDottedLeft + 100){
            if(indAn != 0) return;
            turnOnAudioCorrect();
            animalMove[indAn].style.top = (bothOfDottedTop - animalMove[indAn].offsetHeight + 40) + "px";
            animalMove[indAn].style.left = (firstDottedLeft) + "px";
            thirdDotted[0].style.opacity = "0";
            indAn += 1;
            dessert.style.opacity = "1";
            teapot.style.opacity = "1";
            if (indAn == 1) {
                setTimeout(function() {
                    changeIceCream();
                }, 3000);
            }
            return;
        }
        else if(racLeft >= secondDottedLeft && racLeft <= secondDottedLeft + 100){
            if(indAn == 0){
                wrongChoice2 = true;
                thirdDotted[1].style.backgroundColor = "red";
                timeDelay = 1000;
            }
            else if(indAn == 1){
                turnOnAudioCorrect();
                animalMove[indAn].style.top = (bothOfDottedTop - animalMove[indAn].offsetHeight + 40) + "px";
                animalMove[indAn].style.left = (secondDottedLeft - 10) + "px";
                thirdDotted[1].style.opacity = "0";
                indAn += 1;
                cupcake.style.opacity = "1";
                dessert.style.opacity = "1";
                if (indAn == 2) {
                    setTimeout(function() {
                        changeJuice();
                    }, 3000);
                }
                return;
            }
        }
        else if(racLeft >= thirdDottedLeft && racLeft <= thirdDottedLeft + 120){
            if(indAn == 2){
                turnOnAudioCorrect();
                animalMove[indAn].style.top = (bothOfDottedTop - animalMove[indAn].offsetHeight + 40) + "px";
                animalMove[indAn].style.left = (thirdDottedLeft - 10) +"px";
                thirdDotted[2].style.opacity = "0";
                indAn += 1;
                photo();
                return;
            }   
            wrongChoice2 = true;
            thirdDotted[2].style.backgroundColor = "red";
            timeDelay = 1000;
        }
    }
    if(wrongChoice2){
        turnOnAudioWrong();
        var sp = document.getElementsByClassName("checkBetween");
        if (indAn == 0) {
            setTimeout(function(){
                teapot.style.opacity = 0.5;
                dessert.style.opacity = 0.5;
                thirdDotted[1].style.backgroundColor = "unset";
                thirdDotted[2].style.backgroundColor = "unset";
                thirdDotted[0].style.opacity = 0;
                thirdDotted[1].style.opacity = 0;
                thirdDotted[2].style.opacity = 0;
                setTimeout(function(){
                    sp[0].style.background = "#fbd014";
                }, 1100);
            },timeDelay)
        }
        else if (indAn == 1) {
            setTimeout(function() {
                cupcake.style.opacity = 0.5;
                dessert.style.opacity = 0.5;
                thirdDotted[0].style.backgroundColor = "unset";
                thirdDotted[2].style.backgroundColor = "unset";
                thirdDotted[0].style.opacity = 0;
                thirdDotted[1].style.opacity = 0;
                thirdDotted[2].style.opacity = 0;
                setTimeout(function() {
                    sp[1].style.background = "#fbd014";
                }, 1100);
            }, timeDelay)
        }
    }
    setTimeout(function(){
        animalMove[indAn].style.top = "400px";
        animalMove[indAn].style.left = "calc(50% - 70px)";
    },timeDelay)
   
}
function makeDotAppear2(){
    var firstDottedLeft = thirdDotted[0].offsetLeft;
    var secondDottedLeft = thirdDotted[1].offsetLeft;
    var thirdDottedLeft = thirdDotted[2].offsetLeft;
    var bothOfDottedTop = thirdDotted[0].offsetTop;
    var racLeft = animalMove[indAn].offsetLeft + 52;
    var racTop = animalMove[indAn].offsetTop + animalMove[indAn].offsetHeight;
    thirdDotted[0].style.opacity = 0;
    thirdDotted[1].style.opacity = 0;
    thirdDotted[2].style.opacity = 0;
    if(racTop >= bothOfDottedTop + 10 && racTop <= bothOfDottedTop + 50){
        if(racLeft >= firstDottedLeft && racLeft <= firstDottedLeft + 100){
            if(indAn != 0) return;
            thirdDotted[0].style.opacity = 1;
            return;
        }
        else if(racLeft >= secondDottedLeft && racLeft <= secondDottedLeft + 100){
            if(indAn != 2){
                thirdDotted[1].style.opacity = 1;
            }
        }
        else if(racLeft >= thirdDottedLeft && racLeft <= thirdDottedLeft + 120){
            thirdDotted[2].style.opacity = 1;
        }
    }
}


