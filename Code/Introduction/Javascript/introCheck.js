var mainBig = document.getElementById("mainBig");
var dragObject = document.getElementById("giraffeScreen1");
var dropObject = document.getElementsByClassName("dottedScreen1");
var expressDragObject = false;
var isCorrect = false;
mainBig.addEventListener("mousemove", moveshape);
dragObject.addEventListener("mousemove", moveshape);
var nextButton = document.getElementById("button_next");
var nextLetter = document.getElementById("next-lt");
//di chuyển nhân vật
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
            checkDrop();
        }
        else checkDrop1();
    }
}

// checkDrag là khi đã ấn giữ chuột vào nhân vật hay chưa
function checkDrag(){
    expressDragObject = true;
    dragObject.style.transition = "none";
    checkLine.style.opacity = 0;
    secondCheckLine.style.opacity = 0;
    canIncre = false;
    canRun = false;
    clearTimeout(checkTime);
}
// checkDrop là khi nhả chuột ra khỏi con vật
// màn beside
function checkDrop(){
    expressDragObject = false;
    dragObject.style.transition = "all 1s";
    var griLeft = dragObject.offsetLeft + 52;
    var griTop = dragObject.offsetTop + dragObject.offsetHeight;
    var firstDottedLeft = dropObject[0].offsetLeft;
    var secondDottedLeft = dropObject[1].offsetLeft;
    var bothOfDottedTop = dropObject[0].offsetTop;
    var micBottom = document.getElementById("micro_bottom");
    if(griTop >= bothOfDottedTop - 5 && griTop <= bothOfDottedTop + 50){
        if(griLeft >= secondDottedLeft && griLeft <= secondDottedLeft + 120){
            turnOnAudioCorrect();
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
                nextButton.style.display = "block";
                nextLetter.style.display = "block";
                if(screen == 3){
                    document.getElementById("momScreen3").style.top = "160px";
                }
            },4000);
            return;
        }
        else if(griLeft >= firstDottedLeft && griLeft <= firstDottedLeft + 120){
            turnOnAudioCorrect();
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
                nextButton.style.display = "block";
                nextLetter.style.display = "block";
                if(screen == 3){
                    document.getElementById("momScreen3").style.top = "160px";
                }
            },4000);
            return;
        }
    }
    turnOnAudioWrong();
    checkTime = setTimeout(function(){
        canRun = true;
    },3000);
    dragObject.style.top = "350px";
    dragObject.style.left = "calc(50% + 300px)";
}
//màn between
function checkDrop1(){
    expressDragObject = false;
    dragObject.style.transition = "all 1s";
    var griLeft = dragObject.offsetLeft + 52;
    var griTop = dragObject.offsetTop + dragObject.offsetHeight;
    var dottedLeft = dropObject.offsetLeft;
    var dottedTop = dropObject.offsetTop;
    var micBottom = document.getElementById("micro_bottom");
    if(griTop >= dottedTop -5 && griTop <= dottedTop + 50){
        if(griLeft >= dottedLeft && griLeft <= dottedLeft + 120){
            turnOnAudioCorrect();
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
                nextButton.style.display = "block";
                nextLetter.style.display = "block";
                if(screen == 2){
                    dropObject.style.top = "420px";
                }
                else document.getElementById("papaScreen4").style.top = "160px";
            },4000);
            return;
        }
    }
    turnOnAudioWrong();
    dragObject.style.top = "350px";
    dragObject.style.left = "calc(50% + 280px)";
}

var Xins = 4.94;
var Yins = 1.04;
var XinsB = 0.9;
var YinsB = 0.9;
var leftArrowLeft = 4.9494;
var topArrowLeft=  0.9;
var leftArrowRight = 1;
var topArrowRight = 1;
var checkLine = document.getElementById("lineA");
var secondCheckLine = document.getElementById("lineB");
var arrow = $(".arrow");
var canRun = true;
var canIncre = false;
var checkTime;
function runLine(){
    $(arrow).css({"display" : "block"});
    if(!canRun){
        $(arrow).css({"display" : "none"});
        setTimeout(runLine, 8);
        return; 
    }
    if(!canIncre){
        checkLine.y1.baseVal.value = 225;
        checkLine.x1.baseVal.value = 774;
        secondCheckLine.y1.baseVal.value = 216;
        secondCheckLine.x1.baseVal.value = 784;
        $(arrow[0]).css({
            "left" : "760px",
            "top" : "530px"
        });
        $(arrow[1]).css({
            "left" : "777px",
            "top" : "530px"
        }); 
        canIncre = true;
    }
    var a = checkLine.y1.baseVal.value;
    var b = checkLine.x1.baseVal.value;
    var aB = secondCheckLine.y1.baseVal.value;
    var bB = secondCheckLine.x1.baseVal.value;
    var arlFirst = arrow[0].offsetLeft;
    var artFirst = arrow[0].offsetTop;
    var arlSecond = arrow[1].offsetLeft;
    var artSecond = arrow[1].offsetTop;
    if(b < 300){
        canIncre = false;
        setTimeout(runLine, 1000);
        return;
    }
    checkLine.style.opacity = 1;
    checkLine.y1.baseVal.value = a-Yins;
    checkLine.x1.baseVal.value = b-Xins;
    secondCheckLine.style.opacity = 1;
    secondCheckLine.y1.baseVal.value = aB - YinsB;
    secondCheckLine.x1.baseVal.value = bB - XinsB;
    arrow[0].style.left = (arlFirst - leftArrowLeft) + 'px'; 
    arrow[0].style.top = (artFirst - topArrowLeft) + 'px';
    arrow[1].style.left = (arlSecond - leftArrowRight) + 'px'; 
    arrow[1].style.top = (artSecond - topArrowRight) + 'px';
    setTimeout(runLine, 8);
}

