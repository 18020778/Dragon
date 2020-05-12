function checkDrag3(){
    expressRaccoon = true;
    animalMove[indAn].style.transition = "none";
    // khi nào mình kéo thả mới bắt đầu kiểm tra vị trí hiện vòng cho đỡ lag
    runMakeAppearDot = setInterval(makeDotAppear3, 3);
}
function checkDrop3(){
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
    var wrongChoice3 = false;
    if(racTop >= bothOfDottedTop + 10 && racTop <= bothOfDottedTop + 50){
        if((racLeft >= forthDottedLeft && racLeft <= forthDottedLeft + 100)){
            if (indAn != 0) return;
            turnOnAudioCorrect();
            animalMove[indAn].style.top = (bothOfDottedTop - animalMove[indAn].offsetHeight + 40) + "px";
            animalMove[indAn].style.left = (forthDottedLeft - 10) + "px";
            thirdDotted[3].style.opacity = "0";
            indAn += 1;
            wolf4.style.opacity = 1;
            if (indAn == 1) {
                setTimeout(function() {
                    changeRaccoon();
                }, 3000);
            }
        }
        else if ((racLeft >= firstDottedLeft && racLeft <= firstDottedLeft + 100)){ 
            if(indAn == 0) {
                wrongChoice3 = true;
                thirdDotted[0].style.backgroundColor = "red";
                timeDelay = 1000;
            }
            else if(indAn == 1) {
                turnOnAudioCorrect();
                animalMove[indAn].style.top = (bothOfDottedTop - animalMove[indAn].offsetHeight + 40) + "px";
                animalMove[indAn].style.left = (firstDottedLeft - 10) + "px";
                thirdDotted[0].style.opacity = "0";
                indAn += 1;
                bear4.style.opacity = 1;
                owl4.style.opacity = 1;
                if (indAn == 2) {
                    setTimeout(function() {
                        changeFox();
                    }, 3000);
                }
                return;
            }
        }
        else if(racLeft >= secondDottedLeft && racLeft <= secondDottedLeft + 100){
            if(indAn == 0 || indAn == 1){
                wrongChoice3 = true;
                thirdDotted[1].style.backgroundColor = "red";
                timeDelay = 1000;
            }
            else if (indAn == 2){
                turnOnAudioCorrect();
                animalMove[indAn].style.top = (bothOfDottedTop - animalMove[indAn].offsetHeight + 40) + "px";
                animalMove[indAn].style.left = (secondDottedLeft - 10) + "px";
                thirdDotted[1].style.opacity = "0";
                indAn += 1;
                wolf4.style.opacity = 1;
                bear4.style.opacity = 1;
                owl4.style.opacity = 1;
                if (indAn == 3) {
                    setTimeout(function() {
                        changeRabbit();
                    }, 3000);
                }
                return;
            }
        }
        else if(racLeft >= thirdDottedLeft && racLeft <= thirdDottedLeft + 120){
            if(indAn != 3){
                wrongChoice3 = true;
                thirdDotted[2].style.backgroundColor = "red";
                timeDelay = 1000;
            }
            else {
                turnOnAudioCorrect();
                animalMove[indAn].style.top = (bothOfDottedTop - animalMove[indAn].offsetHeight + 40) + "px";
                animalMove[indAn].style.left = (thirdDottedLeft - 10) +"px";
                thirdDotted[2].style.opacity = "0";
                indAn += 1;
                if (indAn == 4) {
                    setTimeout( function() {
                        photoImage.style.top = "calc(100% - 210px)";
                        setTimeout(function() {
                            photoImage.style.display = "none";
                            photoImage1.style.display = "block";
                        },1000)
                        setTimeout(function() {
                            flash.style.display = "block";
                            flash.style.width = "120px";
                            flash.style.height = "120px";
                            flash.style.top = "calc(100% - 170px)";
                            flash.style.left = "225px";
                            screen += 1;

                            setTimeout(function(){
                                var next = document.getElementById("next");
                                next.style.display = "block";
                            },3000);    
                            
                        },1500)
                    },3000)
                   
                }
                return;
            }
        }
    }
    if(wrongChoice3){
        turnOnAudioWrong();
        var check = document.getElementsByClassName("checkBetween");
        if (indAn == 0) {
            setTimeout(function(){
                wolf4.style.opacity = 0.5;
                thirdDotted[0].style.backgroundColor = "unset";
                thirdDotted[1].style.backgroundColor = "unset";
                thirdDotted[2].style.backgroundColor = "unset";
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
                bear4.style.opacity = 0.5;
                owl4.style.opacity = 0.5;
                thirdDotted[1].style.backgroundColor = "unset";
                thirdDotted[2].style.backgroundColor = "unset";
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
                wolf4.style.opacity = 0.5;
                bear4.style.opacity = 0.5;
                owl4.style.opacity = 0.5;
                thirdDotted[2].style.backgroundColor = "unset";
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
function makeDotAppear3(){
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
        if(racLeft >= forthDottedLeft && racLeft <= forthDottedLeft + 100){
            if (indAn == 0) thirdDotted[3].style.opacity = 1;
        }
        else if(racLeft >= firstDottedLeft && racLeft <= firstDottedLeft + 100){
            if (indAn == 0 || indAn == 1) thirdDotted[0].style.opacity = 1;
        }
        else if(racLeft >= secondDottedLeft && racLeft <= secondDottedLeft + 100){
            if (indAn != 3) thirdDotted[1].style.opacity = 1;
        }
        else if(racLeft >= thirdDottedLeft && racLeft <= thirdDottedLeft + 120){
            thirdDotted[2].style.opacity = 1;
        }
    }
}

