//hình con khủng long xuất hiện chụp ảnh khi hoàn thành 1 bài
var photoImage = document.getElementById("photo");
var photoImage1 = document.getElementById("photo1");
var flash = document.getElementById("flash");
function photo() {
    setTimeout( function() {
        photoImage.style.top = "calc(100% - 210px)";
        setTimeout(function() {
            photoImage.style.display = "none";
            photoImage1.style.display = "block";
        },1000)
        setTimeout(function() {
            flash.style.display = "block";
            flash.style.width = "120px";
            flash.style.height = "120px";
            flash.style.top = "calc(100% - 170px)";
            flash.style.left = "225px";
            if(checkScore) {
                score += 1;
            }
            if(score == 4){
                nextScore();
                setTimeout(function(){
                    window.location = "../../Outline/Congrat.html";
                },3000);
            }
            else {
                setTimeout(function(){ 
                    countScreen += 1;
                    whiteScreen();
                }, 3000)
            }
        },1500)
    },3000)
}