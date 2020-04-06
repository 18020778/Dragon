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
var dotted = document.getElementById("dotted");
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
    canIncre = false;
    canRun = false;
    clearTimeout(checkTime);
}
function checkFalse(){
    expressGiraffe = false;
    giraffe.style.transition = "all 1s";
    var griLeft = giraffe.offsetLeft + 52;
    var griTop = giraffe.offsetTop + giraffe.offsetHeight;
    var dottedLeft = dotted.offsetLeft;
    var dottedTop = dotted.offsetTop;
    var micBottom = document.getElementById("micro_bottom");
    var next_butt = document.getElementById("next");
    if(griTop >= dottedTop -5 && griTop <= dottedTop + 50){
        if(griLeft >= dottedLeft && griLeft <= dottedLeft + 120){
            isCorrect = true;
            giraffe.style.top = (dottedTop - giraffe.offsetHeight + 25) + "px";
            giraffe.style.left = (dottedLeft - 5) + "px";
            check = true;
            var turnOnLetter = document.getElementById("coverletter");
            turnOnLetter.style.opacity = 1;
            setTimeout(function(){
                turnOnLetter.style.left = "calc(50% - 130px)";
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
    }
    checkTime = setTimeout(function(){
        canRun = true;
    },3000);
    giraffe.style.top = "300px";
    giraffe.style.left = "calc(50% + 280px)";
}
//đổi ngôn ngữ
function english() {
    document.getElementById("letter").innerHTML = "Put the giraffe between the palms";
    document.getElementById("next").innerHTML = "Next";
    document.getElementById("coverletter").innerHTML = "between";
    document.getElementById("chooseLanguage").innerHTML = "English";
}
function hindi() {
    document.getElementById("letter").innerHTML = "जिराफ को ताड़ के पेड़ों के बीच में रख दें";
    document.getElementById("next").innerHTML = "आगे";
    document.getElementById("coverletter").innerHTML = "बीच में";
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
