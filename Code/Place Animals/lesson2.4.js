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

var letterRaccoon = document.getElementById("letter-raccoon-4"); 
var letterFox = document.getElementById("letter-fox");
var letterRabbit = document.getElementById("letter-rabbit");
function changeRaccoon() {
    letterBear.style.display = "none";
    animalMove[indAn].style.display = "block";
    micro.style.display = "none"; 
    setTimeout(function(){
        letterRaccoon.style.opacity = "1";
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
    letterRaccoon.style.display = "none";
    animalMove[indAn].style.display = "block"; 
    micro.style.display = "none"; 
    setTimeout(function(){
        letterFox.style.opacity = "1";
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
    letterFox.style.display = "none";
    animalMove[indAn].style.display = "block"; 
    micro.style.display = "none"; 
    setTimeout(function(){
        letterRabbit.style.opacity = "1";
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
function goCongrat() {
    var button_green = document.getElementsByClassName("button_green");
    button_green[0].style.marginLeft = "375px";
    button_green[0].style.transition = "1s";
    setTimeout(function(){
        onclickNext();
    },3000);
}
function onclickNext() {
    var body = document.getElementsByTagName("body")[0];
    var divBackground = document.getElementById("divBackground");
    var mainBig = document.getElementById("mainBig");
    body.removeChild(divBackground);
    body.removeChild(mainBig);
    body.style.backgroundImage = "none";

    var mainBig1 = document.createElement("div");
    mainBig1.setAttribute("id", "mainBig1");

    var header1 = document.createElement("div");
    header1.setAttribute("class", "header1");

    var banner = document.createElement("div");
    banner.setAttribute("class", "banner");

    var headBar = document.createElement("div");
    headBar.setAttribute("class", "headBar");

    var logo = document.createElement("div");
    logo.setAttribute("class", "logo");
    logo.innerHTML = "DRAGONLEARN.IN";

    var headBar_choose1 = document.createElement("div");
    headBar_choose1.setAttribute("class", "headBar_choose");
    headBar_choose1.innerHTML = "Main Page";
    headBar_choose1.style.marginLeft = "450px";
    headBar_choose1.style.marginTop = "-45px";

    var headBar_choose2 = document.createElement("div");
    headBar_choose2.setAttribute("class", "headBar_choose");
    headBar_choose2.innerHTML = "My classes";
    headBar_choose2.style.marginLeft = "575px";
    headBar_choose2.style.marginTop = "-45px";

    var headBar_choose3 = document.createElement("div");
    headBar_choose3.setAttribute("class", "headBar_choose");
    headBar_choose3.innerHTML = "Portfolio";
    headBar_choose3.style.marginLeft = "700px";
    headBar_choose3.style.marginTop = "-45px";

    headBar.appendChild(headBar_choose3);
    headBar.insertBefore(headBar_choose2, headBar_choose3);
    headBar.insertBefore(headBar_choose1, headBar_choose2);
    headBar.insertBefore(logo, headBar_choose1);

    header1.appendChild(headBar);
    header1.insertBefore(banner, headBar);

    mainBig1.appendChild(header1);

    body.appendChild(mainBig1);


    var bodyMain1 = document.createElement("div");
    bodyMain1.setAttribute("class", "bodyMain1");

    var complete = document.createElement("div");
    complete.setAttribute("class", "complete");

    var compelete_text = document.createElement("div");
    compelete_text.setAttribute("class", "complete-text");
    compelete_text.innerHTML = "Well done! You completed the card!";

    var complete_image = document.createElement("div");
    complete_image.setAttribute("class", "complete-image");

    var complete_button = document.createElement("div");
    complete_button.setAttribute("class", "complete-button");

    var linkA = document.createElement("a");
    linkA.setAttribute("href", "../Outline/Outline.html");
    linkA.innerHTML = "Go to lesson";

    complete_button.appendChild(linkA);
    complete.appendChild(complete_button);
    complete.insertBefore(complete_image, complete_button);
    complete.insertBefore(compelete_text, complete_image);
    bodyMain1.appendChild(complete);
    body.appendChild(bodyMain1);
}