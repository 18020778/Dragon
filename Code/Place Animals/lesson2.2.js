var wolf = document.getElementById("wolf");
var owl = document.getElementById("owl");
var letterOrange = document.getElementById("letter-orange");
function whiteScreen() {
    var button_green = document.getElementsByClassName("button_green");
    land.style.opacity = "0";
    micro.style.opacity = "0";
    flash.style.display = "none";
    photoImage1.style.display = "none";
    photoImage.style.display = "block";
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



var letterCup = document.getElementById("letter-cup");
var letterBear = document.getElementById("letter-bear");
function nextScreen() {
    if (screen == 2) {
        land.style.opacity = "1";
        micro.style.opacity = "1";
        letterOrange.style.opacity = "1";
        micro.style.left = "180px";
        audio[0].src = "../mp3/Place Animals/Round 2/Orange_beside_apple.mp3"; 
        audio[1].src = "../mp3/Place Animals/Round 2/Grapes_beside_banana.mp3";
        audio[2].src = "../mp3/Place Animals/Round 2/Pear_beside_banana.mp3";
        audio[3].src = "../mp3/Place Animals/Round 2/WaMelon_beside_apple.mp3";
        thirdDotted[0].style.left = "50px";
        thirdDotted[1].style.left = "330px";
        thirdDotted[2].style.left = "480px";
        land.style.backgroundImage = 'url("https://content.dragonlearn.in/131454/1441/1131.png")';
        var banana = document.createElement("div");
        banana.setAttribute("id","banana");
        body.appendChild(banana);
        var apple = document.createElement("div");
        apple.setAttribute("id","apple");
        body.appendChild(apple);

        var dott = document.createElement("div");
        dott.classList.add("dotted");
        dott.setAttribute("class","dotted");
        dott.setAttribute("style","left: 770px;");
        body.appendChild(dott);

        var orange = document.createElement("div");
        orange.setAttribute("id","orange");
        orange.classList.add("moveAnimal");
        body.appendChild(orange);
        indAn = 0;
        orange.setAttribute("onmousedown","checkDrag1()");
        orange.setAttribute("onmouseup","checkDrop1()");

        var grapes = document.createElement("div");
        grapes.setAttribute("id","grapes");
        grapes.classList.add("moveAnimal");
        body.appendChild(grapes);
        grapes.setAttribute("onmousedown","checkDrag1()");
        grapes.setAttribute("onmouseup","checkDrop1()");
        
        var pear = document.createElement("div");
        pear.setAttribute("id","pear");
        pear.classList.add("moveAnimal");
        body.appendChild(pear);
        pear.setAttribute("onmousedown","checkDrag1()");
        pear.setAttribute("onmouseup","checkDrop1()");

        var watermelon = document.createElement("div");
        watermelon.setAttribute("id","watermelon");
        watermelon.classList.add("moveAnimal");
        body.appendChild(watermelon);
        watermelon.setAttribute("onmousedown","checkDrag1()");
        watermelon.setAttribute("onmouseup","checkDrop1()");
        
        isCorrect = false;
        expressRaccoon = false;
        orange = document.getElementById("orange");
        pear = document.getElementById("pear");
        grapes = document.getElementById("grapes");
        watermelon = document.getElementById("watermelon");
    }
    else if(screen == 3) {
        land.style.opacity = "1";
        micro.style.opacity = "1";
        letterCup.style.opacity = "1";
        micro.style.left = "50px";
        audio[0].src = "../mp3/Place Animals/Round 3/cup_beside_cupcake.mp3"; 
        audio[1].src = "../mp3/Place Animals/Round 3/iceCream_between_cup_n_teapot.mp3";
        audio[2].src = "../mp3/Place Animals/Round 3/juice_between_teapot_n_dessert.mp3";
        thirdDotted[0].style.left = "190px";
        thirdDotted[1].style.left = "330px";
        thirdDotted[2].style.left = "calc(50% + 130px)";
        land.style.backgroundImage = 'url("https://content.dragonlearn.in/131454/1441/1131.png")';
        var cupcake = document.createElement("div");
        cupcake.setAttribute("id","cupcake");
        body.appendChild(cupcake);

        var teapot = document.createElement("div");
        teapot.setAttribute("id","teapot");
        body.appendChild(teapot);

        var dessert = document.createElement("div");
        dessert.setAttribute("id","dessert");
        body.appendChild(dessert);

        var cup = document.createElement("div");
        cup.setAttribute("id","cup");
        cup.classList.add("moveAnimal");
        body.appendChild(cup);
        indAn = 0;
        cup.setAttribute("onmousedown","checkDrag2()");
        cup.setAttribute("onmouseup","checkDrop2()");

        var iceCream = document.createElement("div");
        iceCream.setAttribute("id","iceCream");
        iceCream.classList.add("moveAnimal");
        body.appendChild(iceCream);
        iceCream.setAttribute("onmousedown","checkDrag2()");
        iceCream.setAttribute("onmouseup","checkDrop2()");
        
        var juice = document.createElement("div");
        juice.setAttribute("id","juice");
        juice.classList.add("moveAnimal");
        body.appendChild(juice);
        juice.setAttribute("onmousedown","checkDrag2()");
        juice.setAttribute("onmouseup","checkDrop2()");

        isCorrect = false;
        expressRaccoon = false;
        cup = document.getElementById("cup");
        iceCream = document.getElementById("iceCream");
        juice = document.getElementById("juice");
    }
    else if (screen == 4) {
        land.style.opacity = "1";
        micro.style.opacity = "1";
        letterBear.style.opacity = "1";
        micro.style.left = "180px";
        audio[0].src = "../mp3/Place Animals/Round 4/bear_beside_owl.mp3"; 
        audio[0].src = "../mp3/Place Animals/Round 4/raccoon_beside_wolf.mp3";   
        audio[0].src = "../mp3/Place Animals/Round 4/fox_beside_raccoon.mp3";
        audio[0].src = "../mp3/Place Animals/Round 4/rabbit_betweeen_raccoon_bear.mp3";
        thirdDotted[0].style.left = "190px";
        thirdDotted[1].style.left = "330px";
        thirdDotted[2].style.left = "480px";
        thirdDotted[3].style.left = "calc(50% + 130px)";
        land.style.backgroundImage = 'url("https://content.dragonlearn.in/131454/1441/1131.png")';

        var wolf4 = document.createElement("div");
        wolf4.setAttribute("id","wolf4");
        body.appendChild(wolf4);

        var owl4 = document.createElement("div");
        owl4.setAttribute("id","owl4");
        body.appendChild(owl4);

        var bear4 = document.createElement("div");
        bear4.setAttribute("id","bear4");
        bear4.classList.add("moveAnimal");
        body.appendChild(bear4);
        indAn = 0;
        bear4.setAttribute("onmousedown","checkDrag3()");
        bear4.setAttribute("onmouseup","checkDrop3()");

        var raccoon4 = document.createElement("div");
        raccoon4.setAttribute("id","raccoon4");
        raccoon4.classList.add("moveAnimal");
        body.appendChild(raccoon4);
        raccoon4.setAttribute("onmousedown","checkDrag3()");
        raccoon4.setAttribute("onmouseup","checkDrop3()");
        
        var fox4 = document.createElement("div");
        fox4.setAttribute("id","fox4");
        fox4.classList.add("moveAnimal");
        body.appendChild(fox4);
        fox4.setAttribute("onmousedown","checkDrag3()");
        fox4.setAttribute("onmouseup","checkDrop3()");

        var  rabbit4 = document.createElement("div");
        rabbit4.setAttribute("id","rabbit4");
        rabbit4.classList.add("moveAnimal");
        body.appendChild(rabbit4);
        rabbit4.setAttribute("onmousedown","checkDrag3()");
        rabbit4.setAttribute("onmouseup","checkDrop3()");
        
        isCorrect = false;
        expressRaccoon = false;
        bear4 = document.getElementById("bear4");
        raccoon4 = document.getElementById("raccoon4");
        fox4 = document.getElementById("fox4");
        rabbit4 = document.getElementById("rabbit4");
    }
    
}




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

var letterGrapes = document.getElementById("letter-grapes"); 
var letterPear = document.getElementById("letter-pear");
var letterWatermelon = document.getElementById("letter-watermelon");
function changeGrapes() {
    letterOrange.style.display = "none";
    animalMove[indAn].style.display = "block";
    micro.style.display = "none"; 
    setTimeout(function(){
        letterGrapes.style.opacity = "1";
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
    letterGrapes.style.display = "none";
    animalMove[indAn].style.display = "block"; 
    micro.style.display = "none"; 
    setTimeout(function(){
        letterPear.style.opacity = "1";
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
    letterPear.style.display = "none";
    animalMove[indAn].style.display = "block"; 
    micro.style.display = "none"; 
    setTimeout(function(){
        letterWatermelon.style.opacity = "1";
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