var bear = document.getElementById("bear");
var rabbit = document.getElementById("rabbit");
var micro = document.getElementById("micro_top"); 
var letter = document.getElementById("letter");  
var fox = document.getElementById("fox");
var raccoon = document.getElementById("raccoon");
var body = document.getElementById("bodyMain");
var land = document.getElementById("land_green");
var big = document.getElementById("cylinderBig");
var small = document.getElementById("cylinderSmall");
var start_bt = document.getElementById("button_start");
var screen = 1;

//click start để bắt đầu chơi
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

//di chuột lên trên start
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
//di chuột ra ngoài start
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

//đổi màu khi di chuột vào English
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

//hiện bảng chọn ngôn ngữ khi click mũi tên
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

//sửa ngôn ngữ khi chọn
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


//bật tắt loa
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



//màn 1
//
//đổi yêu cầu khi hoàn thành 1 chức năng của màn 1
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











