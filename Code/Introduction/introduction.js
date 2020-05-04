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
    document.getElementById("mainLanguage").innerHTML = "English";
    languageBoder.style.display = "none";
    dialogLanguageAppear = false;
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
    document.getElementById("mainLanguage").innerHTML = "Hindi";
    languageBoder.style.display = "none";
    dialogLanguageAppear = false;
}

//bật tắt loa trên
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


//kẻ đường thẳng từ vật tới vòng elip
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

//bật tắt loa dưới
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

//chuyển màn 2
