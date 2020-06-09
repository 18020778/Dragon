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
var button_green = document.getElementsByClassName("button_green");
var countScreen = 1;
var screen = 1;
var score = 0;
var checkScore = true;
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
    language.style.color = "#2a5a86";
    triangle.style.borderTopColor = "#2a5a86";
}

//hiện bảng chọn ngôn ngữ khi click mũi tên
function appearDialog() {
    $("#languageDialog").toggle();
}

//sửa ngôn ngữ khi chọn
var languageBorder = document.getElementById("languageDialog");
var chooseLanguage = document.getElementById("chooseLanguage");
function english() {
    document.getElementById("letter").innerHTML = "Put the raccoon between the rabbit and the fox.";
    document.getElementById("letter-wolf").innerHTML = "Put the wolf between the bear and the fox.";
    document.getElementById("letter-owl").innerHTML = "Put the owl beside the rabbit.";
    document.getElementById("letter-orange").innerHTML = "Put the orange beside the apple.";
    document.getElementById("letter-grapes").innerHTML = "Put the grapes beside the banana.";
    document.getElementById("letter-pear").innerHTML = "Put the pear beside the banana.";
    document.getElementById("letter-watermelon").innerHTML = "Put the watermelon beside the apple.";
    document.getElementById("letter-cup").innerHTML = "Put the cup beside the cupcake.";
    document.getElementById("letter-iceCream").innerHTML = "Put the ice-cream between the cup and the teapot.";
    document.getElementById("letter-juice").innerHTML = "Put the juice between the teapot and the dessert.";
    document.getElementById("letter-bear").innerHTML = "Put the bear beside the owl.";
    document.getElementById("letter-raccoon-4").innerHTML = "Put the raccoon beside the wolf.";
    document.getElementById("letter-fox").innerHTML = "Put the fox beside the raccoon.";
    document.getElementById("letter-rabbit").innerHTML = "Put the rabbit between the fox and the bear.";
    document.getElementById("mainLanguage").innerHTML = "English";
    languageBorder.style.display = "none"; 
    chooseLanguage.style.left = "850px";
    chooseLanguage.style.width = "100px";
}

function vietnamese() {
    document.getElementById("letter").innerHTML = "Đặt con gấu trúc giữa con thỏ và con cáo.";
    document.getElementById("letter-wolf").innerHTML = "Đặt con sói giữa con gấu và con cáo.";
    document.getElementById("letter-owl").innerHTML = "Đặt con cú bên cạnh con thỏ.";
    document.getElementById("letter-orange").innerHTML = "Đặt quả cam bên cạnh quả táo.";
    document.getElementById("letter-grapes").innerHTML = "Đặt nho bên cạnh chuối.";
    document.getElementById("letter-pear").innerHTML = "Đặt quả lê bên cạnh quả chuối.";
    document.getElementById("letter-watermelon").innerHTML = "Đặt dưa hấu bên cạnh quả táo.";
    document.getElementById("letter-cup").innerHTML = "Đặt cốc bên cạnh món tráng miệng.";
    document.getElementById("letter-iceCream").innerHTML = "Đặt kem giữa cốc và ấm trà.";
    document.getElementById("letter-juice").innerHTML = "Đặt nước trái cây giữa ấm trà và món tráng miệng.";
    document.getElementById("letter-bear").innerHTML = "Đặt con gấu bên cạnh con cú.";
    document.getElementById("letter-raccoon-4").innerHTML = "Đặt con gấu trúc bên cạnh con sói.";
    document.getElementById("letter-fox").innerHTML = "Đặt con cáo bên cạnh con gấu trúc.";
    document.getElementById("letter-rabbit").innerHTML = "Đặt con thỏ giữa con cáo và con gấu.";
    document.getElementById("mainLanguage").innerHTML = "Vietnamese";
    chooseLanguage.style.left = "810px";
    chooseLanguage.style.width = "140px";
    languageBorder.style.display = "none";  
}
function hindi() {
    document.getElementById("letter").innerHTML = "खरगोश और लोमड़ी के बीच एक प्रकार का जानवर रखो।";
    document.getElementById("letter-wolf").innerHTML = "भालू और लोमड़ी के बीच भेड़िया रखो।";
    document.getElementById("letter-owl").innerHTML = "खरगोश के बगल में उल्लू रखो।";
    document.getElementById("letter-orange").innerHTML = "सेब के बगल में नारंगी रखें।";
    document.getElementById("letter-grapes").innerHTML = "केले के पास अंगूर रखें।";
    document.getElementById("letter-pear").innerHTML = "केले के बगल में नाशपाती डालें।";
    document.getElementById("letter-watermelon").innerHTML = "तरबूज को सेब के पास रख दें।";
    document.getElementById("letter-cup").innerHTML = "कप केक के बगल में रख दें।";
    document.getElementById("letter-iceCream").innerHTML = "कप और चायदानी के बीच आइसक्रीम डालें।";
    document.getElementById("letter-juice").innerHTML = "रस को चायदानी और मिठाई के बीच डालें।";
    document.getElementById("letter-bear").innerHTML = "भालू को उल्लू के पास रख दिया।";
    document.getElementById("letter-raccoon-4").innerHTML = "भेड़िया के बगल में एक प्रकार का जानवर रखो।";
    document.getElementById("letter-fox").innerHTML = "लोमड़ी के बगल में लोमड़ी रखो।";
    document.getElementById("letter-rabbit").innerHTML = "खरगोश को लोमड़ी और भालू के बीच रखो।";
    document.getElementById("mainLanguage").innerHTML = "Hindi";
    languageBorder.style.display = "none";  
    chooseLanguage.style.left = "870px";
    chooseLanguage.style.width = "80px";
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

//bật tắt trả lời đúng
var correct = document.getElementById("audioCorrect");
function turnOnAudioCorrect() {
    correct.play();   
}
function turnOffAudioCorrect(){
    correct.pause();
}

//bật tắt trả lời sai
var wrong = document.getElementById("audioWrong");
function turnOnAudioWrong() {
    wrong.play();   
}
function turnOffAudioWrong(){
    wrong.pause();
}

//màn 1
//
//đổi yêu cầu khi hoàn thành 1 chức năng của màn 1
var letterWolf = document.getElementById("letter-wolf");
function changeWolf() {
    letter.style.display = "none";
    animalMove[indAn].style.display = "block"; 
    micro.style.display = "none";
    setTimeout(function(){
        letterWolf.style.display = "block";
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
        letterOwl.style.display = "block";
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
function updateScore() {
    var marginLeftButtonGreen = ['27px', '51px', '75px'];
    var idButtonGreen = 4 - score;
    var idMarginLeft = 3 - score;
    if(score > 0) {
        setTimeout(function() {
            button_green[idButtonGreen].style.marginLeft = marginLeftButtonGreen[idMarginLeft];
            button_green[idButtonGreen].style.transition = "1s";
        },1000);
        score -= 1;
    }
}










