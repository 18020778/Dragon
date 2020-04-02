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
var giraffe = document.getElementById("giraffe");
var doubleDotted = document.getElementsByClassName("dotted");
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
    var firstDottedLeft = doubleDotted[0].offsetLeft;
    var secondDottedLeft = doubleDotted[1].offsetLeft;
    var bothOfDottedTop = doubleDotted[0].offsetTop;
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


////////////////
//đổi ngôn ngữ
function english() {
    document.getElementById("letter").innerHTML = "Put the giraffe beside the palm tree";
    document.getElementById("next").innerHTML = "Next";
    document.getElementById("coverletter").innerHTML = "beside";
    document.getElementById("chooseLanguage").innerHTML = "English";
}
function hindi() {
    document.getElementById("letter").innerHTML = "जिराफ को ताड़ के पेड़ के पास रख दें";
    document.getElementById("next").innerHTML = "आगे";
    document.getElementById("coverletter").innerHTML = "के बगल में";
    document.getElementById("chooseLanguage").innerHTML = "Hindi";
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
    doubleDotted[0].style.filter = "none";
    doubleDotted[1].style.filter = "none";
    setTimeout(runLine, 3000);
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
