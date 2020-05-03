// checkDrag là khi đã ấn giữ chuột vào con vật hay chưa
function checkDrag(){
    expressRaccoon = true;
    animalMove[indAn].style.transition = "none";
    // khi nào mình kéo thả mới bắt đầu kiểm tra vị trí hiện vòng cho đỡ lag
    runMakeAppearDot = setInterval(makeDotAppear, 3);
}
// checkDrop là khi nhả chuột ra khỏi con vật
var firstDottedLeft = thirdDotted[0].offsetLeft;
var secondDottedLeft = thirdDotted[1].offsetLeft;
var thirdDottedLeft = thirdDotted[2].offsetLeft;
var bothOfDottedTop = thirdDotted[0].offsetTop;
var racLeft = animalMove[indAn].offsetLeft + 52;
var racTop = animalMove[indAn].offsetTop + animalMove[indAn].offsetHeight;
function checkDrop(){
    clearInterval(runMakeAppearDot);
    var firstDottedLeft = thirdDotted[0].offsetLeft;
    var secondDottedLeft = thirdDotted[1].offsetLeft;
    var thirdDottedLeft = thirdDotted[2].offsetLeft;
    var bothOfDottedTop = thirdDotted[0].offsetTop;
    var racLeft = animalMove[indAn].offsetLeft + 52;
    var racTop = animalMove[indAn].offsetTop + animalMove[indAn].offsetHeight;
    expressRaccoon = false;
    animalMove[indAn].style.transition = "all 1s";
    var timeDelay = 0;
    var wrongChoice = false;
    // nếu vị trí top của con vật phù hợp với 1 trong 3 vòng thực hiện set đến left
    if(racTop >= bothOfDottedTop + 10 && racTop <= bothOfDottedTop + 50){
        if(racLeft >= secondDottedLeft && racLeft <= secondDottedLeft + 100){
            if(indAn != 0) return;
            // indAn = 0 là con gấu mèo thì mình đã lấy vị trí này r , nên khi kp
            // gấu mèo sẽ ko cần kiểm tra
            animalMove[indAn].style.top = (bothOfDottedTop - animalMove[indAn].offsetHeight + 40) + "px";
            animalMove[indAn].style.left = (secondDottedLeft - 10) + "px";
            thirdDotted[1].style.opacity = "0";
            indAn += 1;
            bear.style.opacity = 1;
            if (indAn == 1) {
                setTimeout(function() {
                    changeWolf();
                }, 3000);
            }
            return;
        }
        else if(racLeft >= firstDottedLeft && racLeft <= firstDottedLeft + 100){
            if(indAn == 0){
                // trường hợp xử lý cho gấu mèo
                wrongChoice = true;
                thirdDotted[0].style.backgroundColor = "red";
                timeDelay = 1000;
            }
            else if(indAn == 1){
                // trường hợp xử lý cho sói, ko cần xử lý cho cú, viết tiếp hàm
                // xử lý cho sói
                animalMove[indAn].style.top = (bothOfDottedTop - animalMove[indAn].offsetHeight + 40) + "px";
                animalMove[indAn].style.left = (firstDottedLeft - 10) + "px";
                thirdDotted[0].style.opacity = "0";
                indAn += 1;
                raccoon.style.opacity = 1;
                rabbit.style.opacity = 1;
                if (indAn == 2) {
                    setTimeout(function() {
                        changeOwl();
                    }, 3000);
                }
                return;
            }
        }
        else if(racLeft >= thirdDottedLeft && racLeft <= thirdDottedLeft + 120){
            if(indAn == 2){
                //xử lý cho con cú;
                animalMove[indAn].style.top = (bothOfDottedTop - animalMove[indAn].offsetHeight + 40) + "px";
                animalMove[indAn].style.left = (thirdDottedLeft) +"px";
                thirdDotted[2].style.opacity = "0";
                indAn += 1;
                photo();
                return;
            }
            // nếu kp cú thì cả hai kia đều sẽ xử lý    
            wrongChoice = true;
            thirdDotted[2].style.backgroundColor = "red";
            timeDelay = 1000;
        }
    }
    if(wrongChoice){
        var sp = document.getElementsByClassName("checkBetween");
        if (indAn == 0) {
            setTimeout(function(){
                bear.style.opacity = 0.5;
                thirdDotted[2].style.backgroundColor = "unset";
                thirdDotted[0].style.backgroundColor = "unset";
                thirdDotted[0].style.opacity = 0;
                thirdDotted[1].style.opacity = 0;
                thirdDotted[2].style.opacity = 0;
                setTimeout(function(){
                    sp[0].style.background = "#fbd014";
                }, 1100);
            },timeDelay)
        }
        else if (indAn == 1) {
            setTimeout(function() {
                rabbit.style.opacity = 0.5;
                raccoon.style.opacity = 0.5;
                thirdDotted[1].style.backgroundColor = "unset";
                thirdDotted[2].style.backgroundColor = "unset";
                thirdDotted[0].style.opacity = 0;
                thirdDotted[1].style.opacity = 0;
                thirdDotted[2].style.opacity = 0;
                setTimeout(function() {
                    sp[1].style.background = "#fbd014";
                }, 1100);
            }, timeDelay)
        }
    }
    setTimeout(function(){
        animalMove[indAn].style.top = "400px";
        animalMove[indAn].style.left = "calc(50% - 70px)";
    },timeDelay)
   
}

//vòng elip xuất hiện khi di chuyển vào vùng có thể đặt vật
function makeDotAppear(){
    var firstDottedLeft = thirdDotted[0].offsetLeft;
    var secondDottedLeft = thirdDotted[1].offsetLeft;
    var thirdDottedLeft = thirdDotted[2].offsetLeft;
    var bothOfDottedTop = thirdDotted[0].offsetTop;
    var racLeft = animalMove[indAn].offsetLeft + 52;
    var racTop = animalMove[indAn].offsetTop + animalMove[indAn].offsetHeight;
    thirdDotted[0].style.opacity = 0;
    thirdDotted[1].style.opacity = 0;
    thirdDotted[2].style.opacity = 0;
    if(racTop >= bothOfDottedTop + 10 && racTop <= bothOfDottedTop + 50){
        if(racLeft >= secondDottedLeft && racLeft <= secondDottedLeft + 100){
            if(indAn != 0) return;
            // indAn = 0 là con gấu mèo thì mình đã lấy vị trí này r , nên khi kp
            // gấu mèo sẽ ko cần kiểm tra
            thirdDotted[1].style.opacity = 1;
            return;
        }
        else if(racLeft >= firstDottedLeft && racLeft <= firstDottedLeft + 100){
            if(indAn != 2){
                // xử lý cho gấu mèo và sói
                thirdDotted[0].style.opacity = 1;
            }
        }
        else if(racLeft >= thirdDottedLeft && racLeft <= thirdDottedLeft + 120){
            // xử lý cho cả 3
            thirdDotted[2].style.opacity = 1;
        }
    }
}
