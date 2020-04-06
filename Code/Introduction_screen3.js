var dialogLanguageAppear = false;
function appearDialog() {
    var x = document.getElementById("languageDialog");
    if (!dialogLanguageAppear) {
        x.style.display = "block";
        dialogLanguageAppear = true;
    }
    else {
        x.style.display = "none";
        dialogLanguageAppear = false;
    }
}
/// Kéo thả , hiện line
var mainBig = document.getElementById("mainBig");
var child = document.getElementById("child");
var doubleDotted = document.getElementsByClassName("dotted");
var expressChild = false;
var isCorrect = false;
var checkCorrect;
mainBig.addEventListener("mousemove", moveshape);
child.addEventListener("mousemove", moveshape);
function moveshape(e) {
    e.preventDefault();
    if (isCorrect || !expressChild) return;
    var leftOfMainbig = mainBig.offsetLeft;
    var topOfMainbig = mainBig.offsetTop;
    var limitLeft = leftOfMainbig + child.offsetWidth / 2;
    var limitRight = leftOfMainbig + mainBig.offsetWidth - child.offsetWidth / 2;
    var limitTop = topOfMainbig + 45 + child.offsetTop / 2;
    var limitBottom = topOfMainbig + mainBig.offsetHeight - child.offsetHeight / 2;
    if (e.pageX >= limitLeft && e.pageX <= limitRight && e.pageY >= limitTop && e.pageY <= limitBottom) {
        child.style.top = ((e.pageY - topOfMainbig) - (child.offsetHeight / 2)) + "px";
        child.style.left = ((e.pageX - leftOfMainbig) - (child.offsetWidth / 2)) +  "px";
    }
    else {
        checkFalse();
    }
}
function checkTrue() {
    expressChild = true;
    child.style.transition = "none";
    checkLine.style.opacity = 0;
    secondCheckLine.style.opacity = 0;
    canIncre = false;
    canRun = false;
    clearTimeout(checkTime);
}
function checkFalse() {
    expressChild = false;
    child.style.transition = "all 1s";
    var childLeft = child.offsetLeft + 52;
    var childTop = child.offsetTop + child.offsetHeight;
    var firstDottedLeft = doubleDotted[0].offsetLeft;
    var secondDottedLeft = doubleDotted[1].offsetLeft;
    var bothOfDottedTop = doubleDotted[0].offsetTop;
    var micBottom = document.getElementById("micro_bottom");
    var next_butt = document.getElementById("next");
    if (childTop >= bothOfDottedTop - 5 && childTop <= bothOfDottedTop + 50) {
        if (childLeft >= secondDottedLeft && childLeft <= secondDottedLeft + 120) {
            isCorrect = true;
            child.style.top = (bothOfDottedTop - child.offsetHeight + 25) + "px";
            child.style.left = (secondDottedLeft + 25) + "px";
            check1 = true;
            var turnOnLetter = document.getElementById("coverletter");
            turnOnLetter.style.opacity = 1;
            setTimeout(function () {
                turnOnLetter.style.left = "calc(50% + 40px)";
                turnOnLetter.style.top = "473px";
                turnOnLetter.style.fontSize = "42pt";
                turnOnLetter.style.transition = "all 2s";
            }, 1000);
            setTimeout(function () {
                micBottom.style.display = "block";
            }, 3000);
            setTimeout(function () {
                next_butt.style.display = "block";
            }, 7000);
            return;
        }
        else if (childLeft >= firstDottedLeft && childLeft <= firstDottedLeft + 120) {
            isCorrect = true;
            child.style.top = (bothOfDottedTop - child.offsetHeight + 25) + "px";
            child.style.left = (firstDottedLeft + 25) + "px";
            check2 = true;
            var turnOnLetter = document.getElementById("coverletter");
            turnOnLetter.style.opacity = 1;
            setTimeout(function () {
                turnOnLetter.style.left = "calc(50% + 40px)";
                turnOnLetter.style.top = "483px";
                turnOnLetter.style.fontSize = "42pt";
                turnOnLetter.style.transition = "all 2s";
            }, 1000);
            setTimeout(function () {
                micBottom.style.display = "block";
            }, 3000);
            setTimeout(function () {
                next_butt.style.display = "block";
            }, 7000);
            return;
        }
    }
    checkTime = setTimeout(function () {
        canRun = true;
    }, 3000);
    child.style.top = "330px";
    child.style.left = "calc(50% + 280px)";
}
var Xins = 5.35;
var Yins = 0.95;
var XinsB = 1.04;
var YinsB = 0.91;
var checkLine = document.getElementById("lineA");
var secondCheckLine = document.getElementById("lineB");
var canRun = true;
var canIncre = false;
var checkTime;
function runLine() {
    if (!canRun) {
        setTimeout(runLine, 8);
        return;
    }
    if (!canIncre) {
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
    if (b < 280) {
        setTimeout(runLine, 1000);
        canIncre = false;
        return;
    }
    checkLine.style.opacity = 1;
    checkLine.y1.baseVal.value = a - Yins;
    checkLine.x1.baseVal.value = b - Xins;
    secondCheckLine.style.opacity = 1;
    secondCheckLine.y1.baseVal.value = aB - YinsB;
    secondCheckLine.x1.baseVal.value = bB - XinsB;
    setTimeout(runLine, 8);
};


////////////////
//đổi ngôn ngữ
function english() {
    document.getElementById("letter").innerHTML = "Put the child beside the mom";
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
