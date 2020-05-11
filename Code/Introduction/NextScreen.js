//chuyển màn 2
function nextScreen2(){
    var nextButton = document.getElementById("button_next");
    var nextLetter = document.getElementById("next-lt");
    var bodyMain = document.getElementById("bodyMain");
    bodyMain.style.display = "none";
    bodyMain.removeChild(document.getElementById("base"));
    bodyMain.removeChild(document.getElementById("giraffeScreen1"));
    screen = 2;
    nextButton.style.display = "none";
    nextLetter.style.display = "none";
    nextButton.setAttribute("onclick","nextScreen3()");
    nextLetter.setAttribute("onclick","nextScreen3()");
    document.getElementById("coverletter").setAttribute("style","font-size: 39px;top: 62px;left: calc(50% - 11px); opacity: 0;");
    document.getElementById("coverletter").innerHTML = "between";
    document.getElementById("letter").innerHTML = "Put the giraffe between the palms";
    document.getElementById("micro_bottom").style.display = "none";
    document.getElementById("audioTop").setAttribute("src","../mp3/Introduction/giraffe_between_palms.mp3");
    document.getElementById("audioBottom").setAttribute("src","../mp3/Introduction/between.mp3");
    var giraffeScreen2 = document.createElement("div");
    giraffeScreen2.setAttribute("id","giraffeScreen2");
    giraffeScreen2.setAttribute("onmousedown","checkDrag()");
    giraffeScreen2.setAttribute("onmouseup","checkDrop1()");
    var dottedScreen2 = document.createElement("div");
    dottedScreen2.setAttribute("id","dottedScreen2");
    var tree1 = document.createElement("div");
    tree1.setAttribute("class", "treeScreen2");
    tree1.setAttribute("style","margin-left: 180px;");
    var tree2 = document.createElement("div");
    tree2.setAttribute("class", "treeScreen2");
    tree2.setAttribute("style","margin-left: 580px;");
    bodyMain.appendChild(dottedScreen2);
    bodyMain.appendChild(tree1);
    bodyMain.appendChild(tree2);
    bodyMain.appendChild(giraffeScreen2);
    setTimeout(function(){
        bodyMain.style.display = "block";
        bodyMain.style.transition = "all 1s";
    },2000);
    dragObject = document.getElementById("giraffeScreen2");
    dropObject = document.getElementById("dottedScreen2");
    isCorrect = false;
    expressDragObject = false;
}

//chuyển màn 3
function nextScreen3(){
    var nextButton = document.getElementById("button_next");
    var nextLetter = document.getElementById("next-lt");
    var bodyMain = document.getElementById("bodyMain");
    bodyMain.style.display = "none";
    screen = 3;
    nextButton.style.display = "none";
    nextLetter.style.display = "none";
    nextLetter.setAttribute("onclick","nextScreen4()");
    nextButton.setAttribute("onclick","nextScreen4()");
    document.getElementById("svg").style.left = "0px";
    document.getElementsByClassName("button_green")[1].setAttribute("style","margin-left: 440px; margin-top: -22px; transition: all 2s;");
    document.getElementById("coverletter").setAttribute("style","font-size: 39px;top: 62px;left: calc(50% - 0px); opacity: 0;");
    document.getElementById("coverletter").innerHTML = "beside";
    document.getElementById("letter").innerHTML = "Put the child beside her mom";
    document.getElementById("micro_top").style.marginLeft = "195px";
    document.getElementById("micro_bottom").style.display = "none";
    document.getElementById("audioTop").setAttribute("src","../mp3/Introduction/child_beside_mom.mp3");
    document.getElementById("audioBottom").setAttribute("src","../mp3/Introduction/beside.mp3");
    bodyMain.removeChild(document.getElementById("dottedScreen2"));
    document.getElementsByClassName("treeScreen2")[0].remove();
    document.getElementsByClassName("treeScreen2")[0].remove();
    bodyMain.removeChild(document.getElementById("giraffeScreen2"));
    var momScreen3 = document.createElement("div");
    momScreen3.setAttribute("id","momScreen3");
    bodyMain.appendChild(momScreen3);
    var dotted1 = document.createElement("div");
    dotted1.setAttribute("class","dottedScreen3");
    dotted1.setAttribute("style","margin-left: 180px;");
    bodyMain.appendChild(dotted1);
    var dotted2 = document.createElement("div");
    dotted2.setAttribute("class","dottedScreen3");
    dotted2.setAttribute("style","margin-left: 580px;");
    bodyMain.appendChild(dotted2);
    var childScreen3 = document.createElement("div");
    childScreen3.setAttribute("id","childScreen3");
    childScreen3.setAttribute("onmousedown","checkDrag()");
    childScreen3.setAttribute("onmouseup","checkDrop()");
    bodyMain.appendChild(childScreen3);
    setTimeout(function(){
        bodyMain.style.display = "block";
        bodyMain.style.transition = "all 1s";
    },2000);
    dragObject = document.getElementById("childScreen3");
    dropObject = document.getElementsByClassName("dottedScreen3");
    isCorrect = false;
    expressDragObject = false;
    checkLine.style.opacity = 0;
    secondCheckLine.style.opacity = 0;
    checkTime = setTimeout(function(){
        canRun = true;
    },10000);
}

//chuyển màn 4
function nextScreen4(){
    var nextButton = document.getElementById("button_next");
    var nextLetter = document.getElementById("next-lt");
    var bodyMain = document.getElementById("bodyMain");
    bodyMain.style.display = "none";
    screen = 4;
    nextButton.style.display = "none";
    nextLetter.style.display = "none";
    nextButton.setAttribute("onclick","goCongrat()");
    nextLetter.setAttribute("onclick","goCongrat()");
    document.getElementById("coverletter").setAttribute("style","font-size: 39px;top: 62px;left: calc(50% - 41px); opacity: 0;");
    document.getElementById("coverletter").innerHTML = "between";
    document.getElementById("letter").innerHTML = "Put the child between her parents";
    document.getElementById("micro_top").style.marginLeft = "155px";
    document.getElementById("micro_bottom").style.display = "none";
    document.getElementById("audioTop").setAttribute("src","../mp3/Introduction/child_between_parents.mp3");
    document.getElementById("audioBottom").setAttribute("src","../mp3/Introduction/between.mp3");
    bodyMain.removeChild(document.getElementById("momScreen3"));
    document.getElementsByClassName("dottedScreen3")[0].remove();
    document.getElementsByClassName("dottedScreen3")[0].remove();
    bodyMain.removeChild(document.getElementById("childScreen3"));
    var papaScreen4 = document.createElement("div");
    papaScreen4.setAttribute("id","papaScreen4");
    papaScreen4.setAttribute("style","margin-left: 180px;");
    bodyMain.appendChild(papaScreen4);
    var dottedScreen4 = document.createElement("div");
    dottedScreen4.setAttribute("id","dottedScreen4");
    bodyMain.appendChild(dottedScreen4);
    var momScreen4 = document.createElement("div");
    momScreen4.setAttribute("id","momScreen4");
    momScreen4.setAttribute("style","margin-left: 580px;");
    bodyMain.appendChild(momScreen4);
    var childScreen4 = document.createElement("div");
    childScreen4.setAttribute("id","childScreen4");
    childScreen4.setAttribute("onmousedown","checkDrag()");
    childScreen4.setAttribute("onmouseup","checkDrop1()");
    bodyMain.appendChild(childScreen4);
    setTimeout(function(){
        bodyMain.style.display = "block";
        bodyMain.style.transition = "all 1s";
    },2000);
    dragObject = document.getElementById("childScreen4");
    dropObject = document.getElementById("dottedScreen4");
    isCorrect = false;
    expressDragObject = false;
}

//kết thúc màn 4
function goCongrat() {
    var button_green = document.getElementsByClassName("button_green");
    button_green[0].style.marginLeft = "420px";
    button_green[0].style.transition = "1s";
    setTimeout(function(){
        onclickNext();
        turnOnAudioCompleted();
    },1000);
}

//chúc mừng sau khi hoàn thành bài
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