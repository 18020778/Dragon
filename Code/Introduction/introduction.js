var screen = 1;
var dialogLanguageAppear = false;
function appearDialog() {
   var x = document.getElementById("languageDialog");
   if(!dialogLanguageAppear){
       x.style.display = "block";
       dialogLanguageAppear = true;
   }
   else{
       x.style.display = "none";
       dialogLanguageAppear = false;
   }
}
/// Kéo thả , hiện line
var mainBig = document.getElementById("mainBig");
var dottedscreen1;
var giraffe = document.getElementById("giraffe");
var double = document.getElementsByClassName("dotted");
var expressGiraffe = false;
var isCorrect = false;
var checkCorrect;
mainBig.addEventListener("mousemove", moveshape);
giraffe.addEventListener("mousemove", moveshape);
function moveshape(e){
    e.preventDefault();
    if(isCorrect || !expressGiraffe) return;
    var leftOfMainbig = mainBig.offsetLeft;
    var topOfMainbig = mainBig.offsetTop;
    var limitLeft = leftOfMainbig + giraffe.offsetWidth/2;
    var limitRight = leftOfMainbig + mainBig.offsetWidth - giraffe.offsetWidth/2;
    var limitTop = topOfMainbig + 45 +  giraffe.offsetTop/2;
    var limitBottom = topOfMainbig + mainBig.offsetHeight - giraffe.offsetHeight/2;
    if(e.pageX >= limitLeft && e.pageX <= limitRight && e.pageY >= limitTop && e.pageY <= limitBottom){
        giraffe.style.top = ((e.pageY - topOfMainbig) - (giraffe.offsetHeight / 2)) + "px";
        giraffe.style.left = ((e.pageX - leftOfMainbig) - (giraffe.offsetWidth / 2)) + "px";
    }
    else{
        checkFalse();
    }
}
function checkTrue(){
    expressGiraffe = true;
    giraffe.style.transition = "none";
    checkLine.style.opacity = 0;
    secondCheckLine.style.opacity = 0;
    canIncre = false;
    canRun = false;
    clearTimeout(checkTime);
}
function checkFalse(){
    expressGiraffe = false;
    giraffe.style.transition = "all 1s";
    var griLeft = giraffe.offsetLeft + 52;
    var griTop = giraffe.offsetTop + giraffe.offsetHeight;
    var firstDottedLeft = double[0].offsetLeft;
    var secondDottedLeft = double[1].offsetLeft;
    var bothOfDottedTop = double[0].offsetTop;
    var micBottom = document.getElementById("micro_bottom");
    var next_butt = document.getElementById("next");
    if(griTop >= bothOfDottedTop -5 && griTop <= bothOfDottedTop + 50){
        if(griLeft >= secondDottedLeft && griLeft <= secondDottedLeft + 120){
            isCorrect = true;
            giraffe.style.top = (bothOfDottedTop - giraffe.offsetHeight + 25) + "px";
            giraffe.style.left = (secondDottedLeft - 5) + "px";
            check1 = true;
            var turnOnLetter = document.getElementById("coverletter");
            turnOnLetter.style.opacity = 1;
            setTimeout(function(){
                turnOnLetter.style.left = "calc(50% + 40px)";
                turnOnLetter.style.top = "473px";
                turnOnLetter.style.fontSize = "42pt";
                turnOnLetter.style.transition = "all 2s";
            }, 1000);
            setTimeout(function(){
                micBottom.style.display = "block";
            },3000);
            setTimeout(function(){
                next_butt.style.display = "block";
            },7000);
            return;
        }
        else if(griLeft >= firstDottedLeft && griLeft <= firstDottedLeft + 120){
            isCorrect = true;
            giraffe.style.top = (bothOfDottedTop - giraffe.offsetHeight + 25) + "px";
            giraffe.style.left = (firstDottedLeft - 5) + "px";
            check2 = true;
            var turnOnLetter = document.getElementById("coverletter");
            turnOnLetter.style.opacity = 1;
            setTimeout(function(){
                turnOnLetter.style.left = "calc(50% + 40px)";
                turnOnLetter.style.top = "483px";
                turnOnLetter.style.fontSize = "42pt";
                turnOnLetter.style.transition = "all 2s";
            }, 1000);
            setTimeout(function(){
                micBottom.style.display = "block";
            },3000);
            setTimeout(function(){
                next_butt.style.display = "block";
            },7000);
            return;
        }
    }
    checkTime = setTimeout(function(){
        canRun = true;
    },3000);
    giraffe.style.top = "330px";
    giraffe.style.left = "calc(50% + 280px)";
}
function checkFalse1(){
    expressGiraffe = false;
    giraffe.style.transition = "all 1s";
    var griLeft = giraffe.offsetLeft + 52;
    var griTop = giraffe.offsetTop + giraffe.offsetHeight;
    var dottedLeft = dottedscreen1.offsetLeft;
    var dottedTop = dottedscreen1.offsetTop;
    var micBottom = document.getElementById("micro_bottom");
    var next_butt = document.getElementById("next");
    if(griTop >= dottedTop -5 && griTop <= dottedTop + 50){
        if(griLeft >= dottedLeft && griLeft <= dottedLeft + 120){
            isCorrect = true;
            giraffe.style.top = (dottedTop - giraffe.offsetHeight + 25) + "px";
            giraffe.style.left = (dottedLeft - 5) + "px";
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
                dottedscreen1.style.marginTop = "-180px";

            },7000);
            return;
        }
    }
    giraffe.style.top = "300px";
    giraffe.style.left = "calc(50% + 280px)";
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
    // b < 280 là khi lineA chạy đủ nên sẽ reset lại, tương tự với lineB
    if(b < 280){
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
//đổi ngôn ngữ
var languageBorder = document.getElementById("languageDialog");
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
    }
    document.getElementById("next").innerHTML = "Next";
    document.getElementById("chooseLanguage").innerHTML = "English";
    languageBorder.style.display = "none";
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
    }
    document.getElementById("next").innerHTML = "आगे";
    document.getElementById("chooseLanguage").innerHTML = "Hindi";
    languageBorder.style.display = "none";
}
//thay đổi start khi di chuột vào
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

//Bắt đầu màn chơi với start
function start() {
    var start = document.getElementById("start");
    var tree = document.getElementById("tree");
    start.style.display = "none";
    tree.style.filter = "none";
    giraffe.style.filter = "none";
    giraffe.style.pointerEvents = "fill";
    double[0].style.filter = "none";
    double[1].style.filter = "none";
    setTimeout(runLine, 3000);
}
function nextScreen2(){
    var next = document.getElementById("next");
    var bodyMain = document.getElementById("bodyMain");
    bodyMain.removeChild(document.getElementById("base"));
    bodyMain.removeChild(document.getElementById("giraffe"));
    screen = 2;
    next.style.display = "none";
    next.setAttribute("onclick","nextScreen3()");
    document.getElementById("coverletter").setAttribute("style","font-size: 39px;top: 62px;left: calc(50% - 11px); opacity: 0;");
    document.getElementById("coverletter").innerHTML = "between";
    document.getElementById("letter").innerHTML = "Put the giraffe between the palms";
    document.getElementById("micro_bottom").style.display = "none";
    document.getElementById("audioTop").setAttribute("src","../mp3/Introduction/giraffe_between_palms.mp3");
    document.getElementById("audioBottom").setAttribute("src","../mp3/Introduction/between.mp3");
    var giraffe1 = document.createElement("div");
    giraffe1.setAttribute("id","giraffe1");
    giraffe1.setAttribute("onmousedown","checkTrue()");
    giraffe1.setAttribute("onmouseup","checkFalse1()");
    var dotted1 = document.createElement("div");
    dotted1.setAttribute("id","dotted1");
    var tree1 = document.createElement("div");
    tree1.setAttribute("class", "tree1");
    tree1.setAttribute("style","margin-left: 180px;");
    var tree2 = document.createElement("div");
    tree2.setAttribute("class", "tree1");
    tree2.setAttribute("style","margin-left: 580px;");
    bodyMain.appendChild(dotted1);
    bodyMain.appendChild(tree1);
    bodyMain.appendChild(tree2);
    bodyMain.appendChild(giraffe1);
    giraffe = document.getElementById("giraffe1");
    dottedscreen1 = document.getElementById("dotted1");
    isCorrect = false;
    expressGiraffe = false;
}
//Bật phát tiếng microTop
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
//Bật phát tiếng microBottom
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