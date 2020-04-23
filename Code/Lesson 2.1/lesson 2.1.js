var bear = document.getElementById("bear");
var rabbit = document.getElementById("rabbit");
var micro = document.getElementById("micro_top"); 
var letter = document.getElementById("letter");  
var fox = document.getElementById("fox");
var raccoon = document.getElementById("raccoon");
var body = document.getElementById("bodyMain");
var land = document.getElementById("land_green");
var screen = 1;
//Bắt đầu màn chơi với start
function start() {
    var start = document.getElementById("start");
    body.style.pointerEvents = "fill";
    start.style.display = "none";
    land.style.filter = "none";
    bear.style.filter = "none";
    rabbit.style.filter = "none";
    micro.style.filter = "none";
    letter.style.filter = "none";
    fox.style.filter = "none";
    raccoon.style.filter = "none";
}
//thay đổi start khi di chuột vào
var big = document.getElementById("cylinderBig");
var small = document.getElementById("cylinderSmall");
var start_bt = document.getElementById("button_start");
function onmouseoverStart() {
    big.style.width = "340px";
    big.style.height = "340px";
    big.style.borderRadius = "170px";
    big.style.top = "calc(50% - 165px)";
    big.style.left = "310px";
    small.style.width = "260px";
    small.style.height = "260px";
    small.style.borderRadius = "130px";
    small.style.top = "calc(50% - 122px)";
    small.style.left = "calc(50% - 130px)";
    start_bt.style.backgroundPosition = "0px 113px";
}
function onmouseoutStart() {
    big.style.width = "330px";
    big.style.height = "330px";
    big.style.borderRadius = "165px";
    big.style.top = "calc(50% - 160px)";
    big.style.left = "315px";
    small.style.width = "250px";
    small.style.height = "250px";
    small.style.borderRadius = "125px";
    small.style.top = "calc(50% - 117px)";
    small.style.left = "calc(50% - 125px)";
    start_bt.style.backgroundPosition = "0px 0px";
}
//Bật phát tiếng microTop
var audio = document.getElementsByClassName("Audio");
var indAn = 0; // indAn sẽ tương ứng với mảng animalMove, 0 là gấu mèo, 1 là sói 2 là cú
var audio_play = false;
function turnMicroTop() {
    if (audio_play == false) {
        audio[indAn].play();
        audio_play = true; 
    }
    else {
        audio[indAn].pause();
        audio_play = false;
    }
    audio_play = false;
}
//Di chuột trên bảng Language
var language = document.getElementById("chooseLanguage");
var triangle = document.getElementById("triangle");
function onmouseoverLanguage() {
    language.style.color = "#4ed0f5";
    triangle.style.borderTopColor = "#4ed0f5";
}
function onmouseoutLanguage() {
    language.style.color = "rgb(42, 90, 134)";
    triangle.style.borderTopColor = "rgb(42, 90, 134)";
}
//đổi ngôn ngữ
var languageBorder = document.getElementById("languageDialog");
function english() {
    document.getElementById("letter").innerHTML = "Put the raccoon between the rabbit and the fox";
    document.getElementById("letter-wolf").innerHTML = "Put the wolf between the bear and the fox";
    document.getElementById("letter-owl").innerHTML = "Put the owl beside the rabbit";
    document.getElementById("mainLanguage").innerHTML = "English";
    languageBorder.style.display = "none"; 
}
function hindi() {
    document.getElementById("letter").innerHTML = "खरगोश और लोमड़ी के बीच एक प्रकार का जानवर रखो";
    document.getElementById("letter-wolf").innerHTML = "भालू और लोमड़ी के बीच भेड़िया रखो";
    document.getElementById("letter-owl").innerHTML = "खरगोश के बगल में उल्लू रखो";
    document.getElementById("mainLanguage").innerHTML = "Hindi";
    languageBorder.style.display = "none";  
}
var dialogLanguageAppear = false;
function appearDialog() {
   if(!dialogLanguageAppear){
       x.style.display = "block";
       dialogLanguageAppear = true;
   }
   else {
       x.style.display = "none";
       dialogLanguageAppear = false;
   }
}

var photoImage = document.getElementById("photo");
var photoImage1 = document.getElementById("photo1");
var flash = document.getElementById("flash");
function photo() {
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
                whiteScreen();
            }, 3000)
        },1500)
    },3000)
}
var letterWolf = document.getElementById("letter-wolf");
function changeWolf() {
    letter.style.opacity = "0";
    animalMove[indAn].style.display = "block"; 
    micro.style.display = "none";
    setTimeout(function(){
        letterWolf.style.opacity = "1";
        letterWolf.style.fontSize = "40px";
        letterWolf.style.top = "60px";
        letterWolf.style.left = "90px";
        letterWolf.style.transition = "all 0.4s";
        setTimeout(function() {
            micro.style.display = "block";
            micro.style.left = "70px";
            letterWolf.style.top = "60px";
            letterWolf.style.left = "120px";
             letterWolf.style.fontSize = "38px";
        }, 500); 
    }, 50);
}
var letterOwl = document.getElementById("letter-owl"); 
function changeOwl() {
    letter.style.display = "none";
    letterWolf.style.display = "none";
    animalMove[indAn].style.display = "block"; 
    micro.style.display = "none"; 
    setTimeout(function(){
        letterOwl.style.opacity = "1";
        letterOwl.style.fontSize = "42px";
        letterOwl.style.top = "60px";
        letterOwl.style.left = "200px";
        letterOwl.style.transition = "all 0.4s";
        setTimeout(function() {
            micro.style.display = "block";
            micro.style.left = "180px";
            letterOwl.style.top = "60px";
            letterOwl.style.left = "230px";
            letterOwl.style.fontSize = "38px";
        }, 500); 
    }, 50);
}
// Kéo thả
var mainBig = document.getElementById("mainBig");
var animalMove = document.getElementsByClassName("moveAnimal");
var runMakeAppearDot;
var thirdDotted = document.getElementsByClassName("dotted");
var expressRaccoon = false; // nếu có đang giữ chuột hay không
var isCorrect = false;
var checkCorrect;
mainBig.addEventListener("mousemove", moveshape);
animalMove[indAn].addEventListener("mousemove", moveshape);
// moveshape là hàm đê di chuyển con vật
function moveshape(e){
    e.preventDefault();
    // lấy vị trí của con trỏ trên màn hình rộng, e.pageX là vị trí con trỏ so với
    // lề  trái , pageY là lề trên
    if(isCorrect || !expressRaccoon) return;
    var leftOfMainbig = mainBig.offsetLeft;
    var topOfMainbig = mainBig.offsetTop;
    var limitLeft = leftOfMainbig + animalMove[indAn].offsetWidth/2;
    var limitRight = leftOfMainbig + mainBig.offsetWidth - animalMove[indAn].offsetWidth/2;
    var limitTop = topOfMainbig + 45 +  animalMove[indAn].offsetHeight/2;
    var limitBottom = topOfMainbig + mainBig.offsetHeight - animalMove[indAn].offsetHeight/2;
    // if bên dưới là để ngăn ko cho bay ra khỏi lề, nếu nằm trong thì sẽ thực hiện gán vị trí
    // con vật tương ứng với vị trí của con trỏ thông qua tính toán
    if(e.pageX >= limitLeft && e.pageX <= limitRight && e.pageY >= limitTop && e.pageY <= limitBottom){
        animalMove[indAn].style.top = ((e.pageY - topOfMainbig) - (animalMove[indAn].offsetHeight / 2)) + "px";
        animalMove[indAn].style.left = ((e.pageX - leftOfMainbig) - (animalMove[indAn].offsetWidth / 2)) + "px";
    }
    else{
        checkFalse();   
    }
}
// checkTrue là khi đã ấn giữ chuột vào con vật hay chưa
function checkTrue(){
    expressRaccoon = true;
    animalMove[indAn].style.transition = "none";
    // khi nào mình kéo thả mới bắt đầu kiểm tra vị trí hiện vòng cho đỡ lag
    runMakeAppearDot = setInterval(makeDotAppear, 3);
}
// checkFalse là khi nhả chuột ra khỏi con vật
var firstDottedLeft = thirdDotted[0].offsetLeft;
var secondDottedLeft = thirdDotted[1].offsetLeft;
var thirdDottedLeft = thirdDotted[2].offsetLeft;
var bothOfDottedTop = thirdDotted[0].offsetTop;
var racLeft = animalMove[indAn].offsetLeft + 52;
var racTop = animalMove[indAn].offsetTop + animalMove[indAn].offsetHeight;
function checkFalse(){
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
    var wrongChoice = false;
    // nếu vị trí top của con vật phù hợp với 1 trong 3 vòng thực hiện set đến
    // left
    if(racTop >= bothOfDottedTop + 10 && racTop <= bothOfDottedTop + 50){
        if(racLeft >= secondDottedLeft && racLeft <= secondDottedLeft + 100){
            if(indAn != 0) return;
            // indAn = 0 là con gấu mèo thì mình đã lấy vị trí này r , nên khi kp
            // gấu mèo sẽ ko cần kiểm tra
            animalMove[indAn].style.top = (bothOfDottedTop - animalMove[indAn].offsetHeight + 40) + "px";
            animalMove[indAn].style.left = (secondDottedLeft - 10) + "px";
            thirdDotted[1].style.opacity = "0";
            indAn += 1;
            bear.style.opacity = 1;
            if (indAn == 1) {
                setTimeout(function() {
                    changeWolf();
                }, 3000);
            }
            return;
        }
        else if(racLeft >= firstDottedLeft && racLeft <= firstDottedLeft + 100){
            if(indAn == 0){
                // trường hợp xử lý cho gấu mèo
                wrongChoice = true;
                thirdDotted[0].style.backgroundColor = "red";
                timeDelay = 1000;
            }
            else if(indAn == 1){
                // trường hợp xử lý cho sói, ko cần xử lý cho cú, viết tiếp hàm
                // xử lý cho sói
                animalMove[indAn].style.top = (bothOfDottedTop - animalMove[indAn].offsetHeight + 40) + "px";
                animalMove[indAn].style.left = (firstDottedLeft - 10) + "px";
                thirdDotted[0].style.opacity = "0";
                indAn += 1;
                raccoon.style.opacity = 1;
                rabbit.style.opacity = 1;
                if (indAn == 2) {
                    setTimeout(function() {
                        changeOwl();
                    }, 3000);
                }
                return;
            }
        }
        else if(racLeft >= thirdDottedLeft && racLeft <= thirdDottedLeft + 120){
            if(indAn == 2){
                //xử lý cho con cú;
                animalMove[indAn].style.top = (bothOfDottedTop - animalMove[indAn].offsetHeight + 40) + "px";
                animalMove[indAn].style.left = (thirdDottedLeft - 10) +"px";
                thirdDotted[2].style.opacity = "0";
                indAn += 1;
                photo();
                return;
            }
            // nếu kp cú thì cả hai kia đều sẽ xử lý    
            wrongChoice = true;
            thirdDotted[2].style.backgroundColor = "red";
            timeDelay = 1000;
        }
    }
    if(wrongChoice){
        var sp = document.getElementsByClassName("checkBetween");
        if (indAn == 0) {
            setTimeout(function(){
                bear.style.opacity = 0.5;
                thirdDotted[2].style.backgroundColor = "unset";
                thirdDotted[0].style.backgroundColor = "unset";
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
                rabbit.style.opacity = 0.5;
                raccoon.style.opacity = 0.5;
                thirdDotted[1].style.backgroundColor = "unset";
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
function makeDotAppear(){
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
        if(racLeft >= secondDottedLeft && racLeft <= secondDottedLeft + 100){
            if(indAn != 0) return;
            // indAn = 0 là con gấu mèo thì mình đã lấy vị trí này r , nên khi kp
            // gấu mèo sẽ ko cần kiểm tra
            thirdDotted[1].style.opacity = 1;
            return;
        }
        else if(racLeft >= firstDottedLeft && racLeft <= firstDottedLeft + 100){
            if(indAn != 2){
                // xử lý cho gấu mèo và sói
                thirdDotted[0].style.opacity = 1;
            }
        }
        else if(racLeft >= thirdDottedLeft && racLeft <= thirdDottedLeft + 120){
            // xử lý cho cả 3
            thirdDotted[2].style.opacity = 1;
        }
    }
}



//screen2
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
    setTimeout(function() {
        nextScreen();
    },1000)
}

var letterCup = document.getElementById("letter-cup");
function nextScreen() {
    if (screen == 2) {
        land.style.opacity = "1";
        micro.style.opacity = "1";
        letterOrange.style.opacity = "1";
        micro.style.left = "180px";
        audio[0].src = "..\Dragon\Dragon\mp3\Place Animals\Round 2\Grapes_beside_banana.mp3"; 
        // audio[1].setAttribute("src","");
        // audio[2].setAttribute("src","");
        // audio[3].setAttribute("src","");
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
        orange.setAttribute("onmousedown","checkTrue1()");
        orange.setAttribute("onmouseup","checkFalse1()");

        var grapes = document.createElement("div");
        grapes.setAttribute("id","grapes");
        grapes.classList.add("moveAnimal");
        body.appendChild(grapes);
        grapes.setAttribute("onmousedown","checkTrue1()");
        grapes.setAttribute("onmouseup","checkFalse1()");
        
        var pear = document.createElement("div");
        pear.setAttribute("id","pear");
        pear.classList.add("moveAnimal");
        body.appendChild(pear);
        pear.setAttribute("onmousedown","checkTrue1()");
        pear.setAttribute("onmouseup","checkFalse1()");

        var watermelon = document.createElement("div");
        watermelon.setAttribute("id","watermelon");
        watermelon.classList.add("moveAnimal");
        body.appendChild(watermelon);
        watermelon.setAttribute("onmousedown","checkTrue1()");
        watermelon.setAttribute("onmouseup","checkFalse1()");
        
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
        audio[0].src = "..\Dragon\Dragon\mp3\Place Animals\Round 2\Grapes_beside_banana.mp3"; 
        // audio[1].setAttribute("src","");
        // audio[2].setAttribute("src","");
        // audio[3].setAttribute("src","");
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
        cup.setAttribute("onmousedown","checkTrue2()");
        cup.setAttribute("onmouseup","checkFalse2()");

        var iceCream = document.createElement("div");
        iceCream.setAttribute("id","iceCream");
        iceCream.classList.add("moveAnimal");
        body.appendChild(iceCream);
        iceCream.setAttribute("onmousedown","checkTrue2()");
        iceCream.setAttribute("onmouseup","checkFalse2()");
        
        var fruice = document.createElement("div");
        fruice.setAttribute("id","fruice");
        fruice.classList.add("moveAnimal");
        body.appendChild(fruice);
        fruice.setAttribute("onmousedown","checkTrue2()");
        fruice.setAttribute("onmouseup","checkFalse2()");

        isCorrect = false;
        expressRaccoon = false;
        cup = document.getElementById("cup");
        iceCream = document.getElementById("iceCream");
        fruice = document.getElementById("fruice");
    }
}
function checkTrue1(){
    expressRaccoon = true;
    animalMove[indAn].style.transition = "none";
    // khi nào mình kéo thả mới bắt đầu kiểm tra vị trí hiện vòng cho đỡ lag
    runMakeAppearDot = setInterval(makeDotAppear1, 3);
}
var one = false;
var two = false;
var three = false;
var four = false;
function checkFalse1(){
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
    // nếu vị trí top của con vật phù hợp với 1 trong 3 vòng thực hiện set đến
    // left
    if(racTop >= bothOfDottedTop + 10 && racTop <= bothOfDottedTop + 50){
        if((racLeft >= thirdDottedLeft && racLeft <= thirdDottedLeft + 100)){
            if (three) return;
            if(indAn != 0 && indAn != 3) {
                wrongChoice1 = true;
                thirdDotted[2].style.backgroundColor = "red";
                timeDelay = 1000;
            }
            // indAn = 0 là con gấu mèo thì mình đã lấy vị trí này r , nên khi kp
            // gấu mèo sẽ ko cần kiểm tra
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
            // indAn = 0 là con gấu mèo thì mình đã lấy vị trí này r , nên khi kp
            // gấu mèo sẽ ko cần kiểm tra
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
                // trường hợp xử lý cho sói, ko cần xử lý cho cú, viết tiếp hàm
                // xử lý cho sói
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
                // trường hợp xử lý cho gấu mèo
                wrongChoice1 = true;
                thirdDotted[0].style.backgroundColor = "red";
                timeDelay = 1000;
            }
            if(indAn == 2 || indAn == 1){
                //xử lý cho con cú;
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
    alert(indAn);
    animalMove[indAn].style.display = "block";
    alert(2);
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
//
//
//
//screen3
function checkTrue2(){
    expressRaccoon = true;
    animalMove[indAn].style.transition = "none";
    // khi nào mình kéo thả mới bắt đầu kiểm tra vị trí hiện vòng cho đỡ lag
    runMakeAppearDot = setInterval(makeDotAppear2, 3);
}
// checkFalse là khi nhả chuột ra khỏi con vật
var firstDottedLeft = thirdDotted[0].offsetLeft;
var secondDottedLeft = thirdDotted[1].offsetLeft;
var thirdDottedLeft = thirdDotted[2].offsetLeft;
var bothOfDottedTop = thirdDotted[0].offsetTop;
var racLeft = animalMove[indAn].offsetLeft + 52;
var racTop = animalMove[indAn].offsetTop + animalMove[indAn].offsetHeight;
function checkFalse2(){
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
    // nếu vị trí top của con vật phù hợp với 1 trong 3 vòng thực hiện set đến
    // left
    if(racTop >= bothOfDottedTop + 10 && racTop <= bothOfDottedTop + 50){
        if(racLeft >= firstDottedLeft && racLeft <= firstDottedLeft + 100){
            if(indAn != 0) return;
            // indAn = 0 là con gấu mèo thì mình đã lấy vị trí này r , nên khi kp
            // gấu mèo sẽ ko cần kiểm tra
            animalMove[indAn].style.top = (bothOfDottedTop - animalMove[indAn].offsetHeight + 40) + "px";
            animalMove[indAn].style.left = (firstDottedLeft - 10) + "px";
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
                // trường hợp xử lý cho gấu mèo
                wrongChoice2 = true;
                thirdDotted[1].style.backgroundColor = "red";
                timeDelay = 1000;
            }
            else if(indAn == 1){
                // trường hợp xử lý cho sói, ko cần xử lý cho cú, viết tiếp hàm
                // xử lý cho sói
                animalMove[indAn].style.top = (bothOfDottedTop - animalMove[indAn].offsetHeight + 40) + "px";
                animalMove[indAn].style.left = (secondDottedLeft - 10) + "px";
                thirdDotted[1].style.opacity = "0";
                indAn += 1;
                cupcake.style.opacity = "1";
                dessert.style.opacity = "1";
                if (indAn == 2) {
                    setTimeout(function() {
                        changeFruice();
                    }, 3000);
                }
                return;
            }
        }
        else if(racLeft >= thirdDottedLeft && racLeft <= thirdDottedLeft + 120){
            if(indAn == 2){
                //xử lý cho con cú;
                animalMove[indAn].style.top = (bothOfDottedTop - animalMove[indAn].offsetHeight + 40) + "px";
                animalMove[indAn].style.left = (thirdDottedLeft - 10) +"px";
                thirdDotted[2].style.opacity = "0";
                indAn += 1;
                photo();
                return;
            }
            // nếu kp cú thì cả hai kia đều sẽ xử lý    
            wrongChoice2 = true;
            thirdDotted[2].style.backgroundColor = "red";
            timeDelay = 1000;
        }
    }
    if(wrongChoice2){
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
            // indAn = 0 là con gấu mèo thì mình đã lấy vị trí này r , nên khi kp
            // gấu mèo sẽ ko cần kiểm tra
            thirdDotted[0].style.opacity = 1;
            return;
        }
        else if(racLeft >= secondDottedLeft && racLeft <= secondDottedLeft + 100){
            if(indAn != 2){
                // xử lý cho gấu mèo và sói
                thirdDotted[1].style.opacity = 1;
            }
        }
        else if(racLeft >= thirdDottedLeft && racLeft <= thirdDottedLeft + 120){
            // xử lý cho cả 3
            thirdDotted[2].style.opacity = 1;
        }
    }
}

var letterIceCream = document.getElementById("letter-iceCream");
var letterFruice = document.getElementById("letter-fruice");
function changeIceCream() {
    letterCup.style.display = "none";
    animalMove[indAn].style.display = "block"; 
    micro.style.display = "none"; 
    setTimeout(function(){
        letterIceCream.style.opacity = "1";
        letterIceCream.style.fontSize = "42px";
        letterIceCream.style.top = "60px";
        letterIceCream.style.left = "200px";
        letterIceCream.style.transition = "all 0.4s";
        setTimeout(function() {
            micro.style.display = "block";
            micro.style.left = "180px";
            letterIceCream.style.top = "60px";
            letterIceCream.style.left = "230px";
            letterIceCream.style.fontSize = "38px";
        }, 500); 
    }, 50);
}

function changeFruice() {
    letterIceCream.style.display = "none";
    animalMove[indAn].style.display = "block"; 
    micro.style.display = "none"; 
    setTimeout(function(){
        letterFruice.style.opacity = "1";
        letterFruice.style.fontSize = "42px";
        letterFruice.style.top = "60px";
        letterFruice.style.left = "200px";
        letterFruice.style.transition = "all 0.4s";
        setTimeout(function() {
            micro.style.display = "block";
            micro.style.left = "180px";
            letterFruice.style.top = "60px";
            letterFruice.style.left = "230px";
            letterFruice.style.fontSize = "38px";
        }, 500); 
    }, 50);
}




