var screen = 1;

//click start để bắt đầu chơi
function start() {
    var start = document.getElementById("start");
    var treeScreen1 = document.getElementById("treeScreen1");
    start.style.display = "none";
    treeScreen1.style.filter = "none";
    dragObject.style.filter = "none";
    dragObject.style.pointerEvents = "fill";
    dropObject[0].style.filter = "none";
    dropObject[1].style.filter = "none";
    turnOffAudioTheme();
    setTimeout(runLine, 3000);
}
//di chuột lên trên start
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
//di chuột ra ngoài start
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
var languageBoder = document.getElementById("languageDialog");
var chooseLanguage = document.getElementById("chooseLanguage");
function english() {
    switch(screen) {
        case 1: {
            document.getElementById("letter").innerHTML = "Put the giraffe beside the palm tree.";
            document.getElementById("coverletter").innerHTML = "beside";
            break;
        }
        case 2: {
            document.getElementById("letter").innerHTML = "Put the giraffe between the palms.";
            document.getElementById("coverletter").innerHTML = "between";
            break;
        }
        case 3: {
            document.getElementById("letter").innerHTML = "Put the child beside her mom.";
            document.getElementById("coverletter").innerHTML = "beside";
            break;
        }
        case 4: {
            document.getElementById("letter").innerHTML = "Put the child between her parents.";
            document.getElementById("coverletter").innerHTML = "between";
            break;
        }
    }
    document.getElementById("next-lt").innerHTML = "Next";
    document.getElementById("mainLanguage").innerHTML = "English";
    languageBoder.style.display = "none";
    chooseLanguage.style.left = "850px";
    chooseLanguage.style.width = "100px";
    dialogLanguageAppear = false;
}
function vietnamese() {
    switch(screen) {
        case 1: {
            document.getElementById("letter").innerHTML = "Đặt con hươu cao cổ bên cạnh cây cọ.";
            document.getElementById("coverletter").innerHTML = "bên cạnh";
            break;
        }
        case 2: {
            document.getElementById("letter").innerHTML = "Đặt con hươu cao cổ giữa hai cây kè.";
            document.getElementById("coverletter").innerHTML = "ở giữa";
            break;
        }
        case 3: {
            document.getElementById("letter").innerHTML = "Đặt em bé bên cạnh mẹ.";
            document.getElementById("coverletter").innerHTML = "bên cạnh";
            break;
        }
        case 4: {
            document.getElementById("letter").innerHTML = "Đặt em bé ở giữa bố mẹ.";
            document.getElementById("coverletter").innerHTML = "ở giữa";
            break;
        }
    }
    document.getElementById("next-lt").innerHTML = "tiếp";
    document.getElementById("mainLanguage").innerHTML = "Vietnamese";
    languageBoder.style.display = "none";
    dialogLanguageAppear = false;
    chooseLanguage.style.left = "810px";
    chooseLanguage.style.width = "140px";
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
    document.getElementById("next-lt").innerHTML = "आगे";
    document.getElementById("mainLanguage").innerHTML = "Hindi";
    languageBoder.style.display = "none";
    dialogLanguageAppear = false;
    chooseLanguage.style.left = "870px";
    chooseLanguage.style.width = "80px";
}


//bật tắt loa trên
var Top = document.getElementById("audioTop");
var Top_play = false;
function turnMicroTop() {
    if (Top_play == false) {
        Top.play();
        Top_play = true; 
    }
    else {
        Top.pause();
        Top_play = false;
    }
    Top_play = false;
}

//bật tắt loa dưới
var bottom = document.getElementById("audioBottom");
var bottom_play = false;
function turnMicroBottom() {
    if (bottom_play == false) {
        bottom.play();
        bottom_play = true;    
    }
    else {
        bottom.pause();
        bottom_play = false;
    }
    ybottom_play = false;
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