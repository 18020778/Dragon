var letterCup = document.getElementById("letter-cup");
var letterBear = document.getElementById("letter-bear");
function nextScreen() {
    if (screen == 2) {
        land.style.opacity = "1";
        micro.style.display = "block";
        letterOrange.style.display = "block"
        micro.style.left = "180px";
        audio[0].src = "../mp3/Place Animals/Round 2/Orange_beside_apple.mp3"; 
        audio[1].src = "../mp3/Place Animals/Round 2/Grapes_beside_banana.mp3";
        audio[2].src = "../mp3/Place Animals/Round 2/Pear_beside_banana.mp3";
        audio[3].src = "../mp3/Place Animals/Round 2/WaMelon_beside_apple.mp3";
        thirdDotted[0].style.left = "50px";
        thirdDotted[1].style.left = "330px";
        thirdDotted[2].style.left = "480px";
        thirdDotted[3].style.left = "770px";
        land.style.backgroundImage = 'url("../image/land1131.png")';
        var banana = document.createElement("div");
        banana.setAttribute("id","banana");
        body.appendChild(banana);
        var apple = document.createElement("div");
        apple.setAttribute("id","apple");
        body.appendChild(apple);

        var orange = document.createElement("div");
        orange.setAttribute("id","orange");
        orange.classList.add("moveAnimal");
        body.appendChild(orange);
        indAn = 0;
        orange.setAttribute("onmousedown","checkDrag1()");
        orange.setAttribute("onmouseup","checkDrop1()");

        var grapes = document.createElement("div");
        grapes.setAttribute("id","grapes");
        grapes.classList.add("moveAnimal");
        body.appendChild(grapes);
        grapes.setAttribute("onmousedown","checkDrag1()");
        grapes.setAttribute("onmouseup","checkDrop1()");
        
        var pear = document.createElement("div");
        pear.setAttribute("id","pear");
        pear.classList.add("moveAnimal");
        body.appendChild(pear);
        pear.setAttribute("onmousedown","checkDrag1()");
        pear.setAttribute("onmouseup","checkDrop1()");

        var watermelon = document.createElement("div");
        watermelon.setAttribute("id","watermelon");
        watermelon.classList.add("moveAnimal");
        body.appendChild(watermelon);
        watermelon.setAttribute("onmousedown","checkDrag1()");
        watermelon.setAttribute("onmouseup","checkDrop1()");
        
        isCorrect = false;
        expressRaccoon = false;
        checkScore = true;
        one = false;
        two = false;
        three = false;
        four = false;
        orange = document.getElementById("orange");
        pear = document.getElementById("pear");
        grapes = document.getElementById("grapes");
        watermelon = document.getElementById("watermelon");
    }
    else if(screen == 3) {
        land.style.opacity = "1";
        micro.style.display = "block";
        letterCup.style.display = "block"
        micro.style.left = "175px";
        audio[0].src = "../mp3/Place Animals/Round 3/cup_beside_cupcake.mp3"; 
        audio[1].src = "../mp3/Place Animals/Round 3/iceCream_between_cup_n_teapot.mp3";
        audio[2].src = "../mp3/Place Animals/Round 3/juice_between_teapot_n_dessert.mp3";
        thirdDotted[0].style.left = "190px";
        thirdDotted[1].style.left = "330px";
        thirdDotted[2].style.left = "calc(50% + 130px)";
        land.style.backgroundImage = 'url("../image/land1131.png")';
        var cupcake = document.createElement("div");
        cupcake.setAttribute("id","cupcake");
        body.appendChild(cupcake);

        var teapot = document.createElement("div");
        teapot.setAttribute("id","teapot");
        body.appendChild(teapot);

        var dessert = document.createElement("div");
        dessert.setAttribute("id","dessert");
        body.appendChild(dessert);

        var cup = document.createElement("div");
        cup.setAttribute("id","cup");
        cup.classList.add("moveAnimal");
        body.appendChild(cup);
        indAn = 0;
        cup.setAttribute("onmousedown","checkDrag2()");
        cup.setAttribute("onmouseup","checkDrop2()");

        var iceCream = document.createElement("div");
        iceCream.setAttribute("id","iceCream");
        iceCream.classList.add("moveAnimal");
        body.appendChild(iceCream);
        iceCream.setAttribute("onmousedown","checkDrag2()");
        iceCream.setAttribute("onmouseup","checkDrop2()");
        
        var juice = document.createElement("div");
        juice.setAttribute("id","juice");
        juice.classList.add("moveAnimal");
        body.appendChild(juice);
        juice.setAttribute("onmousedown","checkDrag2()");
        juice.setAttribute("onmouseup","checkDrop2()");

        isCorrect = false;
        expressRaccoon = false;
        checkScore = true;
        cup = document.getElementById("cup");
        iceCream = document.getElementById("iceCream");
        juice = document.getElementById("juice");
    }
    else if (screen == 4) {
        land.style.opacity = "1";
        micro.style.display = "block";
        letterBear.style.display = "block"
        micro.style.left = "180px";
        audio[0].src = "../mp3/Place Animals/Round 4/bear_beside_owl.mp3"; 
        audio[1].src = "../mp3/Place Animals/Round 4/raccoon_beside_wolf.mp3";   
        audio[2].src = "../mp3/Place Animals/Round 4/fox_beside_raccoon.mp3";
        audio[3].src = "../mp3/Place Animals/Round 4/rabbit_between_raccoon_bear.mp3";
        thirdDotted[0].style.left = "190px";
        thirdDotted[1].style.left = "330px";
        thirdDotted[2].style.left = "480px";
        thirdDotted[3].style.left = "calc(50% + 130px)";
        land.style.backgroundImage = 'url("../image/land1131.png")';

        var wolf4 = document.createElement("div");
        wolf4.setAttribute("id","wolf4");
        body.appendChild(wolf4);

        var owl4 = document.createElement("div");
        owl4.setAttribute("id","owl4");
        body.appendChild(owl4);

        var bear4 = document.createElement("div");
        bear4.setAttribute("id","bear4");
        bear4.classList.add("moveAnimal");
        body.appendChild(bear4);
        indAn = 0;
        bear4.setAttribute("onmousedown","checkDrag3()");
        bear4.setAttribute("onmouseup","checkDrop3()");

        var raccoon4 = document.createElement("div");
        raccoon4.setAttribute("id","raccoon4");
        raccoon4.classList.add("moveAnimal");
        body.appendChild(raccoon4);
        raccoon4.setAttribute("onmousedown","checkDrag3()");
        raccoon4.setAttribute("onmouseup","checkDrop3()");
        
        var fox4 = document.createElement("div");
        fox4.setAttribute("id","fox4");
        fox4.classList.add("moveAnimal");
        body.appendChild(fox4);
        fox4.setAttribute("onmousedown","checkDrag3()");
        fox4.setAttribute("onmouseup","checkDrop3()");

        var  rabbit4 = document.createElement("div");
        rabbit4.setAttribute("id","rabbit4");
        rabbit4.classList.add("moveAnimal");
        body.appendChild(rabbit4);
        rabbit4.setAttribute("onmousedown","checkDrag3()");
        rabbit4.setAttribute("onmouseup","checkDrop3()");
        
        isCorrect = false;
        expressRaccoon = false;
        checkScore = true;
        bear4 = document.getElementById("bear4");
        raccoon4 = document.getElementById("raccoon4");
        fox4 = document.getElementById("fox4");
        rabbit4 = document.getElementById("rabbit4");
        wolf4 = document.getElementById("wolf4");
        owl4 = document.getElementById("owl4");
    }
    
}
