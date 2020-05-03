var letterRaccoon = document.getElementById("letter-raccoon-4"); 
var letterFox = document.getElementById("letter-fox");
var letterRabbit = document.getElementById("letter-rabbit");
function changeRaccoon() {
    letterBear.style.display = "none";
    animalMove[indAn].style.display = "block";
    micro.style.display = "none"; 
    setTimeout(function(){
        letterRaccoon.style.opacity = "1";
        letterRaccoon.style.fontSize = "42px";
        letterRaccoon.style.top = "60px";
        letterRaccoon.style.left = "200px";
        letterRaccoon.style.transition = "all 0.4s";
        setTimeout(function() {
            micro.style.display = "block";
            micro.style.left = "180px";
            letterRaccoon.style.top = "60px";
            letterRaccoon.style.left = "230px";
            letterRaccoon.style.fontSize = "38px";
        }, 500); 
    }, 50);
}
function changeFox() {
    letterRaccoon.style.display = "none";
    animalMove[indAn].style.display = "block"; 
    micro.style.display = "none"; 
    setTimeout(function(){
        letterFox.style.opacity = "1";
        letterFox.style.fontSize = "42px";
        letterFox.style.top = "60px";
        letterFox.style.left = "200px";
        letterFox.style.transition = "all 0.4s";
        setTimeout(function() {
            micro.style.display = "block";
            micro.style.left = "180px";
            letterFox.style.top = "60px";
            letterFox.style.left = "230px";
            letterFox.style.fontSize = "38px";
        }, 500); 
    }, 50);
}
function changeRabbit() {
    letterFox.style.display = "none";
    animalMove[indAn].style.display = "block"; 
    micro.style.display = "none"; 
    setTimeout(function(){
        letterRabbit.style.opacity = "1";
        letterRabbit.style.fontSize = "42px";
        letterRabbit.style.top = "60px";
        letterRabbit.style.left = "50px";
        letterRabbit.style.transition = "all 0.4s";
        setTimeout(function() {
            micro.style.display = "block";
            micro.style.left = "50px";
            letterRabbit.style.top = "60px";
            letterRabbit.style.left = "100px";
            letterRabbit.style.fontSize = "38px";
        }, 500); 
    }, 50);
}

var a = document.getElementById("createLink");

function loadStart() {
    var button_green = document.getElementsByClassName("button_green");
    button_green[0].style.marginLeft = "375px";
    button_green[0].style.transition = "1s";
}
function goCongrat() {
    var button_green = document.getElementsByClassName("button_green");
    button_green[0].style.marginLeft = "375px";
    button_green[0].style.transition = "1s";
    setTimeout(function(){
        onclickNext();
    },3000);
}
function onclickNext() {
    var body = document.getElementsByTagName("body")[0];
    var divBackground = document.getElementById("divBackground");
    var mainBig = document.getElementById("mainBig");
    body.removeChild(divBackground);
    body.removeChild(mainBig);
    body.style.backgroundImage = "none";

    var mainBig1 = document.createElement("div");
    mainBig1.setAttribute("id", "mainBig1");

    var header1 = document.createElement("div");
    header1.setAttribute("class", "header1");

    var banner = document.createElement("div");
    banner.setAttribute("class", "banner");

    var headBar = document.createElement("div");
    headBar.setAttribute("class", "headBar");

    var logo = document.createElement("div");
    logo.setAttribute("class", "logo");
    logo.innerHTML = "DRAGONLEARN.IN";

    var headBar_choose1 = document.createElement("div");
    headBar_choose1.setAttribute("class", "headBar_choose");
    headBar_choose1.innerHTML = "Main Page";
    headBar_choose1.style.marginLeft = "450px";
    headBar_choose1.style.marginTop = "-45px";

    var headBar_choose2 = document.createElement("div");
    headBar_choose2.setAttribute("class", "headBar_choose");
    headBar_choose2.innerHTML = "My classes";
    headBar_choose2.style.marginLeft = "575px";
    headBar_choose2.style.marginTop = "-45px";

    var headBar_choose3 = document.createElement("div");
    headBar_choose3.setAttribute("class", "headBar_choose");
    headBar_choose3.innerHTML = "Portfolio";
    headBar_choose3.style.marginLeft = "700px";
    headBar_choose3.style.marginTop = "-45px";

    headBar.appendChild(headBar_choose3);
    headBar.insertBefore(headBar_choose2, headBar_choose3);
    headBar.insertBefore(headBar_choose1, headBar_choose2);
    headBar.insertBefore(logo, headBar_choose1);

    header1.appendChild(headBar);
    header1.insertBefore(banner, headBar);

    mainBig1.appendChild(header1);

    body.appendChild(mainBig1);


    var bodyMain1 = document.createElement("div");
    bodyMain1.setAttribute("class", "bodyMain1");

    var complete = document.createElement("div");
    complete.setAttribute("class", "complete");

    var compelete_text = document.createElement("div");
    compelete_text.setAttribute("class", "complete-text");
    compelete_text.innerHTML = "Well done! You completed the card!";

    var complete_image = document.createElement("div");
    complete_image.setAttribute("class", "complete-image");

    var complete_button = document.createElement("div");
    complete_button.setAttribute("class", "complete-button");

    var linkA = document.createElement("a");
    linkA.setAttribute("href", "../Outline/Outline.html");
    linkA.innerHTML = "Go to lesson";

    complete_button.appendChild(linkA);
    complete.appendChild(complete_button);
    complete.insertBefore(complete_image, complete_button);
    complete.insertBefore(compelete_text, complete_image);
    bodyMain1.appendChild(complete);
    body.appendChild(bodyMain1);
}