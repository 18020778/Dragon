var screen = 1;

function start() {
    var start = document.getElementById("start");
    var treeScreen1 = document.getElementById("treeScreen1");
    start.style.display = "none";
    treeScreen1.style.filter = "none";
    dragObject.style.filter = "none";
    dragObject.style.pointerEvents = "fill";
    dropObject[0].style.filter = "none";
    dropObject[1].style.filter = "none";
    setTimeout(runLine, 3000);
}
function onmouseoverStart() {
    var big = document.getElementById("cylinderBig");
    var small = document.getElementById("cylinderSmall");
    var start_bt = document.getElementById("button_start");
    big.style.width = "340px";
    big.style.height = "340px";
    big.style.borderRadius = "170px";
    big.style.marginTop = "-225px";
    big.style.marginLeft = "calc(50% - 155px)";
    small.style.width = "260px";
    small.style.height = "260px";
    small.style.borderRadius = "130px";
    small.style.marginTop = "-297px";
    small.style.marginLeft = "calc(50% - 114px)";
    start_bt.style.backgroundPosition = "0px 112px";
}
function onmouseoutStart() {
    var big = document.getElementById("cylinderBig");
    var small = document.getElementById("cylinderSmall");
    var start_bt = document.getElementById("button_start");
    big.style.width = "330px";
    big.style.height = "330px";
    big.style.borderRadius = "165px";
    big.style.marginTop = "-220px";
    big.style.marginLeft = "calc(50% - 150px)";
    small.style.width = "250px";
    small.style.height = "250px";
    small.style.borderRadius = "125px";
    small.style.marginTop = "-292px";
    small.style.marginLeft = "calc(50% - 109px)";
    start_bt.style.backgroundPosition = "0px 0px";
}


var mainBig = document.getElementById("mainBig");
var dragObject = document.getElementById("giraffeScreen1");
var dropObject = document.getElementsByClassName("dottedScreen1");
var expressDragObject = false;
var isCorrect = false;
mainBig.addEventListener("mousemove", moveshape);
dragObject.addEventListener("mousemove", moveshape);
function moveshape(e){
    e.preventDefault();
    if(isCorrect || !expressDragObject) return;
    var leftOfMainbig = mainBig.offsetLeft;
    var topOfMainbig = mainBig.offsetTop;
    var limitLeft = leftOfMainbig + dragObject.offsetWidth/2;
    var limitRight = leftOfMainbig + mainBig.offsetWidth - dragObject.offsetWidth/2;
    var limitTop = topOfMainbig + 45 +  dragObject.offsetTop/2;
    var limitBottom = topOfMainbig + mainBig.offsetHeight - dragObject.offsetHeight/2;
    if(e.pageX >= limitLeft && e.pageX <= limitRight && e.pageY >= limitTop && e.pageY <= limitBottom){
        dragObject.style.top = ((e.pageY - topOfMainbig) - (dragObject.offsetHeight / 2)) + "px";
        dragObject.style.left = ((e.pageX - leftOfMainbig) - (dragObject.offsetWidth / 2)) + "px";
    }
    else{
        if(screen == 1 || screen == 3){
            checkFalse();
        }
        else checkFalse1();
    }
}
function checkTrue(){
    expressDragObject = true;
    dragObject.style.transition = "none";
    checkLine.style.opacity = 0;
    secondCheckLine.style.opacity = 0;
    canIncre = false;
    canRun = false;
    clearTimeout(checkTime);
}
function checkFalse(){
    expressDragObject = false;
    dragObject.style.transition = "all 1s";
    var griLeft = dragObject.offsetLeft + 52;
    var griTop = dragObject.offsetTop + dragObject.offsetHeight;
    var firstDottedLeft = dropObject[0].offsetLeft;
    var secondDottedLeft = dropObject[1].offsetLeft;
    var bothOfDottedTop = dropObject[0].offsetTop;
    var micBottom = document.getElementById("micro_bottom");
    var next_butt = document.getElementById("next");
    if(griTop >= bothOfDottedTop -5 && griTop <= bothOfDottedTop + 50){
        if(griLeft >= secondDottedLeft && griLeft <= secondDottedLeft + 120){
            isCorrect = true;
            if(screen == 1){
                dragObject.style.left = (secondDottedLeft - 5) + "px";
            }
            else dragObject.style.left = (secondDottedLeft + 15) + "px";
            dragObject.style.top = (bothOfDottedTop - dragObject.offsetHeight + 25) + "px";
            var turnOnLetter = document.getElementById("coverletter");
            turnOnLetter.style.opacity = 1;
            setTimeout(function(){
                turnOnLetter.style.left = "calc(50% + 40px)";
                turnOnLetter.style.top = "473px";
                turnOnLetter.style.fontSize = "42pt";
                turnOnLetter.style.transition = "all 2s";
            }, 1000);
            setTimeout(function(){
                micBottom.style.left = "480px";
                micBottom.style.display = "block";
            },3000);
            setTimeout(function(){
                next_butt.style.display = "block";
                if(screen == 3){
                    document.getElementById("momScreen3").style.marginTop = "-440px";
                }
            },7000);
            return;
        }
        else if(griLeft >= firstDottedLeft && griLeft <= firstDottedLeft + 120){
            isCorrect = true;
            dragObject.style.top = (bothOfDottedTop - dragObject.offsetHeight + 25) + "px";
            if(screen == 1){
                dragObject.style.left = (firstDottedLeft - 5) + "px";
            }
            else dragObject.style.left = (firstDottedLeft + 15) + "px";
            var turnOnLetter = document.getElementById("coverletter");
            turnOnLetter.style.opacity = 1;
            setTimeout(function(){
                turnOnLetter.style.left = "250px";
                turnOnLetter.style.top = "473px";
                turnOnLetter.style.fontSize = "42pt";
                turnOnLetter.style.transition = "all 2s";
            }, 1000);
            setTimeout(function(){
                micBottom.style.left = "200px";
                micBottom.style.display = "block";
            },3000);
            setTimeout(function(){
                next_butt.style.display = "block";
                if(screen == 3){
                    document.getElementById("momScreen3").style.marginTop = "-440px";
                }
            },7000);
            return;
        }
    }
    checkTime = setTimeout(function(){
        canRun = true;
    },3000);
    dragObject.style.top = "350px";
    dragObject.style.left = "calc(50% + 300px)";
}
function checkFalse1(){
    expressDragObject = false;
    dragObject.style.transition = "all 1s";
    var griLeft = dragObject.offsetLeft + 52;
    var griTop = dragObject.offsetTop + dragObject.offsetHeight;
    var dottedLeft = dropObject.offsetLeft;
    var dottedTop = dropObject.offsetTop;
    var micBottom = document.getElementById("micro_bottom");
    var next_butt = document.getElementById("next");
    if(griTop >= dottedTop -5 && griTop <= dottedTop + 50){
        if(griLeft >= dottedLeft && griLeft <= dottedLeft + 120){
            isCorrect = true;
            dragObject.style.top = (dottedTop - dragObject.offsetHeight + 25) + "px";
            if(screen == 2){
                dragObject.style.left = (dottedLeft - 5) + "px";
            }
            else dragObject.style.left = (dottedLeft + 15) + "px";
            var turnOnLetter = document.getElementById("coverletter");
            turnOnLetter.style.opacity = 1;
            setTimeout(function(){
                turnOnLetter.style.left = "calc(50% - 130px)";
                turnOnLetter.style.top = "473px";
                turnOnLetter.style.fontSize = "42pt";
                turnOnLetter.style.transition = "all 2s";
            }, 1000);
            setTimeout(function(){
                micBottom.style.left = "300px";
                micBottom.style.top = "490px";
                micBottom.style.display = "block";
            },3000);
            setTimeout(function(){
                next_butt.style.marginTop = "250px";
                next_butt.style.display = "block";
                if(screen == 2){
                    dropObject.style.marginTop = "-180px";
                }
                else document.getElementById("papaScreen4").style.marginTop = "-445px";
            },7000);
            return;
        }
    }
    dragObject.style.top = "350px";
    dragObject.style.left = "calc(50% + 280px)";
}


var Xins = 4.94;
var Yins = 0.95;
var XinsB = 1.04;
var YinsB = 0.91;
var checkLine = document.getElementById("lineA");
var secondCheckLine = document.getElementById("lineB");
var canRun = true;
var canIncre = false;
var checkTime;
function runLine(){
    if(!canRun){
        setTimeout(runLine, 8);
        return; 
    }
    if(!canIncre){
        checkLine.y1.baseVal.value = 225;
        checkLine.x1.baseVal.value = 774;
        secondCheckLine.y1.baseVal.value = 216;
        secondCheckLine.x1.baseVal.value = 784;
        canIncre = true;
    }
    var a = checkLine.y1.baseVal.value;
    var b = checkLine.x1.baseVal.value;
    var aB = secondCheckLine.y1.baseVal.value;
    var bB = secondCheckLine.x1.baseVal.value;
    if(b < 300){
        setTimeout(runLine, 1000);
        canIncre = false;
        return;
    }
    checkLine.style.opacity = 1;
    checkLine.y1.baseVal.value = a-Yins;
    checkLine.x1.baseVal.value = b-Xins;
    secondCheckLine.style.opacity = 1;
    secondCheckLine.y1.baseVal.value = aB - YinsB;
    secondCheckLine.x1.baseVal.value = bB - XinsB;
    setTimeout(runLine, 8);
};


var dialogLanguageAppear = false;
function appearDialog() {
   var languageDialog = document.getElementById("languageDialog");
   if(!dialogLanguageAppear){
        languageDialog.style.display = "block";
       dialogLanguageAppear = true;
   }
   else{
        languageDialog.style.display = "none";
       dialogLanguageAppear = false;
   }
}


var languageBoder = document.getElementById("languageDialog");
function english() {
    switch(screen) {
        case 1: {
            document.getElementById("letter").innerHTML = "Put the giraffe beside the palm tree";
            document.getElementById("coverletter").innerHTML = "beside";
            break;
        }
        case 2: {
            document.getElementById("letter").innerHTML = "Put the giraffe between the palms";
            document.getElementById("coverletter").innerHTML = "between";
            break;
        }
        case 3: {
            document.getElementById("letter").innerHTML = "Put the child beside her mom";
            document.getElementById("coverletter").innerHTML = "beside";
            break;
        }
        case 4: {
            document.getElementById("letter").innerHTML = "put the child between her parents";
            document.getElementById("coverletter").innerHTML = "between";
            break;
        }
    }
    document.getElementById("next").innerHTML = "Next";
    document.getElementById("chooseLanguage").innerHTML = "English";
    languageBoder.style.display = "none";
}
function hindi() {
    switch(screen) {
        case 1: {
            document.getElementById("letter").innerHTML = "जिराफ को ताड़ के पेड़ के पास रख दें";
            document.getElementById("coverletter").innerHTML = "के बगल में";
            break;
        }
        case 2: {
            document.getElementById("letter").innerHTML = "जिराफ को ताड़ के पेड़ों के बीच में रख दें";
            document.getElementById("coverletter").innerHTML = "बीच में";
            break;
        }
        case 3: {
            document.getElementById("letter").innerHTML = "बच्चे को उसकी माँ के पास रखो";
            document.getElementById("coverletter").innerHTML = "के बगल में";
            break;
        }
        case 4: {
            document.getElementById("letter").innerHTML = "बच्चे को उसके माता-पिता के बीच रखें";
            document.getElementById("coverletter").innerHTML = "के बगल में";
            break;
        }
    }
    document.getElementById("next").innerHTML = "आगे";
    document.getElementById("chooseLanguage").innerHTML = "Hindi";
    languageBoder.style.display = "none";
}

var x = document.getElementById("audioTop");
var x_play = false;
function turnMicroTop() {
    if (x_play == false) {
        x.play();
        x_play = true; 
    }
    else {
        x.pause();
        x_play = false;
    }
    x_play = false;
}


var y = document.getElementById("audioBottom");
var y_play = false;
function turnMicroBottom() {
    if (y_play == false) {
        y.play();
        y_play = true;    
    }
    else {
        y.pause();
        y_play = false;
    }
    y_play = false;
}


function nextScreen2(){
    var next = document.getElementById("next");
    var bodyMain = document.getElementById("bodyMain");
    bodyMain.style.display = "none";
    bodyMain.removeChild(document.getElementById("base"));
    bodyMain.removeChild(document.getElementById("giraffeScreen1"));
    screen = 2;
    next.style.display = "none";
    next.setAttribute("onclick","nextScreen3()");
    document.getElementById("coverletter").setAttribute("style","font-size: 39px;top: 62px;left: calc(50% - 11px); opacity: 0;");
    document.getElementById("coverletter").innerHTML = "between";
    document.getElementById("letter").innerHTML = "Put the giraffe between the palms";
    document.getElementById("micro_bottom").style.display = "none";
    document.getElementById("audioTop").setAttribute("src","../mp3/Introduction/giraffe_between_palm.mp3.mp3");
    document.getElementById("audioBottom").setAttribute("src","../mp3/Introdution/between.mp3");
    var giraffeScreen2 = document.createElement("div");
    giraffeScreen2.setAttribute("id","giraffeScreen2");
    giraffeScreen2.setAttribute("onmousedown","checkTrue()");
    giraffeScreen2.setAttribute("onmouseup","checkFalse1()");
    var dottedScreen2 = document.createElement("div");
    dottedScreen2.setAttribute("id","dottedScreen2");
    var tree1 = document.createElement("div");
    tree1.setAttribute("class", "treeScreen2");
    tree1.setAttribute("style","margin-left: 180px;");
    var tree2 = document.createElement("div");
    tree2.setAttribute("class", "treeScreen2");
    tree2.setAttribute("style","margin-left: 580px;");
    bodyMain.appendChild(dottedScreen2);
    bodyMain.appendChild(tree1);
    bodyMain.appendChild(tree2);
    bodyMain.appendChild(giraffeScreen2);
    setTimeout(function(){
        bodyMain.style.display = "block";
        bodyMain.style.transition = "all 1s";
    },2000);
    dragObject = document.getElementById("giraffeScreen2");
    dropObject = document.getElementById("dottedScreen2");
    isCorrect = false;
    expressDragObject = false;
}


function nextScreen3(){
    var next = document.getElementById("next");
    var bodyMain = document.getElementById("bodyMain");
    bodyMain.style.display = "none";
    screen = 3;
    next.style.display = "none";
    next.setAttribute("onclick","nextScreen4()");
    document.getElementById("svg").style.left = "0px";
    document.getElementsByClassName("button_green")[1].setAttribute("style","margin-left: 440px; margin-top: -22px; transition: all 2s;");
    document.getElementById("coverletter").setAttribute("style","font-size: 39px;top: 62px;left: calc(50% - 0px); opacity: 0;");
    document.getElementById("coverletter").innerHTML = "beside";
    document.getElementById("letter").innerHTML = "Put the child beside her mom";
    document.getElementById("micro_top").style.marginLeft = "195px";
    document.getElementById("micro_bottom").style.display = "none";
    document.getElementById("audioTop").setAttribute("src","../mp3/Introduction/child_beside_mom.mp3");
    document.getElementById("audioBottom").setAttribute("src","../mp3/Introduction/beside.mp3");
    bodyMain.removeChild(document.getElementById("dottedScreen2"));
    document.getElementsByClassName("treeScreen2")[0].remove();
    document.getElementsByClassName("treeScreen2")[0].remove();
    bodyMain.removeChild(document.getElementById("giraffeScreen2"));
    var momScreen3 = document.createElement("div");
    momScreen3.setAttribute("id","momScreen3");
    bodyMain.appendChild(momScreen3);
    var dotted1 = document.createElement("div");
    dotted1.setAttribute("class","dottedScreen3");
    dotted1.setAttribute("style","margin-left: 180px;");
    bodyMain.appendChild(dotted1);
    var dotted2 = document.createElement("div");
    dotted2.setAttribute("class","dottedScreen3");
    dotted2.setAttribute("style","margin-left: 580px;");
    bodyMain.appendChild(dotted2);
    var childScreen3 = document.createElement("div");
    childScreen3.setAttribute("id","childScreen3");
    childScreen3.setAttribute("onmousedown","checkTrue()");
    childScreen3.setAttribute("onmouseup","checkFalse()");
    bodyMain.appendChild(childScreen3);
    setTimeout(function(){
        bodyMain.style.display = "block";
        bodyMain.style.transition = "all 1s";
    },2000);
    dragObject = document.getElementById("childScreen3");
    dropObject = document.getElementsByClassName("dottedScreen3");
    isCorrect = false;
    expressDragObject = false;
    checkLine.style.opacity = 0;
    secondCheckLine.style.opacity = 0;
    checkTime = setTimeout(function(){
        canRun = true;
    },10000);
}

function nextScreen4(){
    var next = document.getElementById("next");
    var bodyMain = document.getElementById("bodyMain");
    bodyMain.style.display = "none";
    screen = 4;
    next.style.display = "none";
    next.setAttribute("onclick","nextCompleted()");
    document.getElementById("coverletter").setAttribute("style","font-size: 39px;top: 62px;left: calc(50% - 41px); opacity: 0;");
    document.getElementById("coverletter").innerHTML = "between";
    document.getElementById("letter").innerHTML = "Put the child between her parents";
    document.getElementById("micro_top").style.marginLeft = "155px";
    document.getElementById("micro_bottom").style.display = "none";
    document.getElementById("audioTop").setAttribute("src","../mp3/Introduction/child_beside_mom.mp3");
    document.getElementById("audioBottom").setAttribute("src","../mp3/Introduction/between.mp3");
    bodyMain.removeChild(document.getElementById("momScreen3"));
    document.getElementsByClassName("dottedScreen3")[0].remove();
    document.getElementsByClassName("dottedScreen3")[0].remove();
    bodyMain.removeChild(document.getElementById("childScreen3"));
    var papaScreen4 = document.createElement("div");
    papaScreen4.setAttribute("id","papaScreen4");
    papaScreen4.setAttribute("style","margin-left: 180px;");
    bodyMain.appendChild(papaScreen4);
    var dottedScreen4 = document.createElement("div");
    dottedScreen4.setAttribute("id","dottedScreen4");
    bodyMain.appendChild(dottedScreen4);
    var momScreen4 = document.createElement("div");
    momScreen4.setAttribute("id","momScreen4");
    momScreen4.setAttribute("style","margin-left: 580px;");
    bodyMain.appendChild(momScreen4);
    var childScreen4 = document.createElement("div");
    childScreen4.setAttribute("id","childScreen4");
    childScreen4.setAttribute("onmousedown","checkTrue()");
    childScreen4.setAttribute("onmouseup","checkFalse1()");
    bodyMain.appendChild(childScreen4);
    setTimeout(function(){
        bodyMain.style.display = "block";
        bodyMain.style.transition = "all 1s";
    },2000);
    dragObject = document.getElementById("childScreen4");
    dropObject = document.getElementById("dottedScreen4");
    isCorrect = false;
    expressDragObject = false;
}