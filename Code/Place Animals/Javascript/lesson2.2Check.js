function checkDrag1(){
    expressRaccoon = true;
    animalMove[indAn].style.transition = "none";
    // khi nào mình kéo thả mới bắt đầu kiểm tra vị trí hiện vòng cho đỡ lag
    runMakeAppearDot = setInterval(makeDotAppear1, 3);
}
var one = false;
var two = false;
var three = false;
var four = false;
function checkDrop1(){
    clearInterval(runMakeAppearDot);
    var racLeft = animalMove[indAn].offsetLeft + 52;
    var racTop = animalMove[indAn].offsetTop + animalMove[indAn].offsetHeight;
    var firstDottedLeft = thirdDotted[0].offsetLeft;
    var secondDottedLeft = thirdDotted[1].offsetLeft;
    var thirdDottedLeft = thirdDotted[2].offsetLeft;
    var forthDottedLeft = thirdDotted[3].offsetLeft;
    var bothOfDottedTop = thirdDotted[0].offsetTop;
    expressRaccoon = false;
    animalMove[indAn].style.transition = "all 1s";
    var timeDelay = 0;
    var wrongChoice1 = false;
    if(racTop >= bothOfDottedTop + 10 && racTop <= bothOfDottedTop + 50){
        if((racLeft >= thirdDottedLeft && racLeft <= thirdDottedLeft + 100)){
            if (three) return;
            if(indAn != 0 && indAn != 3) {
                wrongChoice1 = true;
                thirdDotted[2].style.backgroundColor = "red";
                timeDelay = 1000;
            }
            else{
                turnOnAudioCorrect();
                animalMove[indAn].style.top = (bothOfDottedTop - animalMove[indAn].offsetHeight + 40) + "px";
                animalMove[indAn].style.left = (thirdDottedLeft - 10) + "px";
                thirdDotted[2].style.opacity = "0";
                three = true;
                indAn += 1;
                banana.style.opacity = 1;
                if (indAn == 1) {
                    setTimeout(function() {
                        changeGrapes();
                    }, 3000);
                }
                else if (indAn == 4) {
                    photo();
                }
                return;
            }
        }
        else if ((racLeft >= forthDottedLeft && racLeft <= forthDottedLeft + 100)){
            if (four) return; 
            if(indAn != 0 && indAn != 3) {
                wrongChoice1 = true;
                thirdDotted[3].style.backgroundColor = "red";
                timeDelay = 1000;
            }
            else {
                turnOnAudioCorrect();
                animalMove[indAn].style.top = (bothOfDottedTop - animalMove[indAn].offsetHeight + 40) + "px";
                animalMove[indAn].style.left = (forthDottedLeft - 10) + "px";
                thirdDotted[3].style.opacity = "0";
                four = true;
                indAn += 1;
                banana.style.opacity = 1;
                if (indAn == 1) {
                    setTimeout(function() {
                        changeGrapes();
                    }, 3000);
                }
                else if (indAn == 4) {
                    photo();
                }
                return;
            }
        }
        else if(racLeft >= secondDottedLeft && racLeft <= secondDottedLeft + 100){
            if (two) return;
            if(indAn == 0){
                wrongChoice1 = true;
                thirdDotted[1].style.backgroundColor = "red";
                timeDelay = 1000;
            }
            else if(indAn == 1 || indAn == 2){
                turnOnAudioCorrect();
                animalMove[indAn].style.top = (bothOfDottedTop - animalMove[indAn].offsetHeight + 40) + "px";
                animalMove[indAn].style.left = (secondDottedLeft - 10) + "px";
                thirdDotted[1].style.opacity = "0";
                indAn += 1;
                apple.style.opacity = 1;
                two = true;
                if (indAn == 2) {
                    orange.style.opacity = "1";
                    setTimeout(function() {
                        changePear();
                    }, 3000);
                }
                else {
                    grapes.style.opacity = "1";
                    orange.style.opacity = "1";
                    setTimeout(function() {
                        changeWatermelon();
                    }, 3000);
                }
                return;
            }
        }
        else if(racLeft >= firstDottedLeft && racLeft <= firstDottedLeft + 120){
            if (one) return;
            if(indAn == 0){
                wrongChoice1 = true;
                thirdDotted[0].style.backgroundColor = "red";
                timeDelay = 1000;
            }
            if(indAn == 2 || indAn == 1){
                turnOnAudioCorrect();
                animalMove[indAn].style.top = (bothOfDottedTop - animalMove[indAn].offsetHeight + 40) + "px";
                animalMove[indAn].style.left = (firstDottedLeft - 10) +"px";
                thirdDotted[0].style.opacity = "0";
                indAn += 1;
                apple.style.opacity = 1;
                one = true;
                if (indAn == 2) {
                    orange.style.opacity = 1;
                    setTimeout(function() {
                        changePear();
                    }, 3000);
                }
                else {
                    grapes.style.opacity = "1";
                    orange.style.opacity = "1";
                    setTimeout(function() {
                        changeWatermelon();
                    }, 3000);
                }
                return;
            }
        }
    }
    if(wrongChoice1){
        turnOnAudioWrong();
        var check = document.getElementsByClassName("checkBetween");
        if (indAn == 0) {
            setTimeout(function(){
                banana.style.opacity = 0.5;
                thirdDotted[1].style.backgroundColor = "unset";
                thirdDotted[0].style.backgroundColor = "unset";
                thirdDotted[0].style.opacity = 0;
                thirdDotted[1].style.opacity = 0;
                thirdDotted[2].style.opacity = 0;
                thirdDotted[3].style.opacity = 0;
                setTimeout(function(){
                    check[0].style.background = "#fbd014";
                }, 1100);
            },timeDelay)
        }
        else if (indAn == 1) {
            setTimeout(function() {
                apple.style.opacity = 0.5;
                orange.style.opacity = 0.5;
                thirdDotted[2].style.backgroundColor = "unset";
                thirdDotted[3].style.backgroundColor = "unset";
                thirdDotted[0].style.opacity = 0;
                thirdDotted[1].style.opacity = 0;
                thirdDotted[2].style.opacity = 0;
                thirdDotted[3].style.opacity = 0;
                setTimeout(function() {
                    check[1].style.background = "#fbd014";
                }, 1100);
            }, timeDelay)
        }
        else if (indAn == 2) {
            setTimeout(function() {
                apple.style.opacity = 0.5;
                orange.style.opacity = 0.5;
                grapes.style.opacity = 0.5;
                thirdDotted[2].style.backgroundColor = "unset";
                thirdDotted[3].style.backgroundColor = "unset";
                thirdDotted[0].style.opacity = 0;
                thirdDotted[1].style.opacity = 0;
                thirdDotted[2].style.opacity = 0;
                thirdDotted[3].style.opacity = 0;
                setTimeout(function() {
                    check[2].style.background = "#fbd014";
                }, 1100);
            }, timeDelay)
        }
    }
    setTimeout(function(){
        animalMove[indAn].style.top = "400px";
        animalMove[indAn].style.left = "calc(50% - 70px)";
    },timeDelay) 
}
function makeDotAppear1(){
    var racLeft = animalMove[indAn].offsetLeft + 52;
    var racTop = animalMove[indAn].offsetTop + animalMove[indAn].offsetHeight;
    var firstDottedLeft = thirdDotted[0].offsetLeft;
    var secondDottedLeft = thirdDotted[1].offsetLeft;
    var thirdDottedLeft = thirdDotted[2].offsetLeft;
    var forthDottedLeft = thirdDotted[3].offsetLeft;
    var bothOfDottedTop = thirdDotted[0].offsetTop;
    thirdDotted[0].style.opacity = 0;
    thirdDotted[1].style.opacity = 0;
    thirdDotted[2].style.opacity = 0;
    thirdDotted[3].style.opacity = 0;
    if(racTop >= bothOfDottedTop + 10 && racTop <= bothOfDottedTop + 50){
        if(racLeft >= thirdDottedLeft && racLeft <= thirdDottedLeft + 100){
            if (three) return;
            thirdDotted[2].style.opacity = 1;
            return;
        }
        if(racLeft >= forthDottedLeft && racLeft <= forthDottedLeft + 100){
            if(four) return;
            thirdDotted[3].style.opacity = 1;
            return;
        }
        else if(racLeft >= firstDottedLeft && racLeft <= firstDottedLeft + 100){
            if(one) return;
            thirdDotted[0].style.opacity = 1;
        }
        else if(racLeft >= secondDottedLeft && racLeft <= secondDottedLeft + 120){
            if(two) return;
            thirdDotted[1].style.opacity = 1;
        }
    }
}

