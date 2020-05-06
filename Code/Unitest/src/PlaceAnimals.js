class Character {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    order() {

        if(this.x >= 0 && this.x + 140 <= 150) return 0;
        if(this.x >= 150 && this.x + 140 <= 300) return 1;
        if(this.x >= 300 && this.x + 140 <= 450) return 2;
        if(this.x >= 450 && this.x + 140 <= 600) return 3;
        if(this.x >= 600 && this.x + 140 <= 750) return 4;
        if(this.x >= 750 && this.x + 140 <= 900) return 5;
        else return -1;
    }
}
function isInLine(Character, y_land) {
    if(Character.y == y_land) return true;
    else return false;
}
function moveToBeside(MoveCharacter, InLineCharacter, orderArray){
    var index = InLineCharacter.order();
    if(index >= 0) {
        if(index == 0) {
            if(orderArray[1] == 1) return;
            else {
                MoveCharacter.x = 155;
                MoveCharacter.y = InLineCharacter.y;
                orderArray[1] = 1; 
            }
        }
        else if(index == 5) {
            if(orderArray[4] == 1) return;
            else {
                MoveCharacter.x = 605;
                MoveCharacter.y = InLineCharacter.y;
                orderArray[4] = 1;
            }
        }
        else {
            if(orderArray[index + 1] == 0) {
                MoveCharacter.x = (index + 1) * 150 + 5;
                MoveCharacter.y = InLineCharacter.y;
                orderArray[index + 1] = 1;
                return;
            }
            else if(orderArray[index - 1] == 0) {
                MoveCharacter.x = (index - 1) * 150 + 5;
                MoveCharacter.y = InLineCharacter.y;
                orderArray[index - 1] = 1;
                return;
            }
            else return;
        }
        
    }
    else return;
    
}
function moveToBetween(MoveCharacter, InLineCharacter1, InLineCharacter2, orderArray) {
    var index1 = InLineCharacter1.order() ;
    var index2 = InLineCharacter2.order() ;
    var moveIndex = (index1 + index2)/2;
    if(orderArray[moveIndex] == 0){    
        MoveCharacter.x = moveIndex * 150 + 5;
        MoveCharacter.y = InLineCharacter1.y;
        orderArray[moveIndex] = 1;
    }
    else return;
}

function isBeside(FirstCharecter, SecondCharacter){
    if(FirstCharecter.y == SecondCharacter.y){
        if(SecondCharacter.order() - FirstCharecter.order() == 1 || SecondCharacter.order() - FirstCharecter.order() == -1) return true;
    }
    else return false;
}


function isBetween(FirstCharecter,SecondCharacter,BetweenCharacter){
    if(FirstCharecter.y == SecondCharacter.y && FirstCharecter.y == BetweenCharacter.y){
        if(BetweenCharacter.order() == (FirstCharecter.order() + SecondCharacter.order())/2) return true;
    }
    else return false;
}