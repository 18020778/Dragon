var dialogLanguageAppear = false;
function appearDialog() {
   var x = document.getElementById("languageDialog");
   if(!dialogLanguageAppear){
       x.style.display = "none";
       dialogLanguageAppear = true;
   }
   else{
       x.style.display = "block";
       dialogLanguageAppear = false;
   }
}

// var canvas = document.getElementsByClassName('straight');
// var context = canvas.getContext('2d');
// context.beginPath();
// context.moveTo(10,10);
// context.lineTo(490,190);
// context.stroke();
var mainBig = document.getElementById("mainBig");
var giraffe = document.getElementById("giraffe");
var expressGiraffe = false;
var isCorrect = false;
var checkCorrect;
mainBig.addEventListener("mousemove", moveshape);
//mainBig.addEventListener("click", checkX);
giraffe.addEventListener("mousemove", moveshape);
mainBig.addEventListener("mouseup", checkFalse);
function moveshape(e){
    e.preventDefault();
    if(isCorrect) return;
    if(expressGiraffe && e.pageX >= 280 && e.pageX <= 1080 && e.pageY >= 185 && e.pageY <= 513){
        giraffe.style.top = (e.pageY - (giraffe.offsetHeight / 2)) + "px";
        giraffe.style.left = (e.pageX - (giraffe.offsetWidth / 2)) + "px";
    }
    else{
        checkFalse();
    }
}
// function checkX(e){
//     e.preventDefault();
//     alert(e.pageY);
// }
function checkTrue(){
    expressGiraffe = true;
    giraffe.style.transition = "none";
}
function checkFalse(){
    expressGiraffe = false;
    giraffe.style.transition = "all 1s";
    var griLeft = giraffe.offsetLeft;
    var griTop = giraffe.offsetTop;
    if(griTop >= 195 && griTop <= 245){
        if(griLeft >= 730 && griLeft <= 815){
            isCorrect = true;
            giraffe.style.top = "220px";
            giraffe.style.left = "769px";
            var turnOnLetter = document.getElementById("coverletter");
            turnOnLetter.style.opacity = 1;
            setTimeout(function(){
                turnOnLetter.style.left = "calc(50% + 20px)";
                turnOnLetter.style.top = "450px";
                turnOnLetter.style.fontSize = "42pt";
                turnOnLetter.style.transition = "all 2s";
            }, 1000);
            return;
        }
        else if(griLeft >= 330 && griLeft <= 415){
            isCorrect = true;
            giraffe.style.top = "220px";
            giraffe.style.left = "370px";
            return;
        }
    }
    giraffe.style.top = "340px";
    giraffe.style.left = "calc(50% + 280px)";
}
