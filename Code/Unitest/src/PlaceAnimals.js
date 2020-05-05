class Character {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    order() {

        if(this.x >= 0 && this.x + 140 <= 150) return 1;
        if(this.x >= 150 && this.x + 140 <= 300) return 2;
        if(this.x >= 300 && this.x + 140 <= 450) return 3;
        if(this.x >= 450 && this.x + 140 <= 600) return 4;
        if(this.x >= 600 && this.x + 140 <= 750) return 5;
        if(this.x >= 750 && this.x + 140 <= 900) return 6;
        else return -1;
    }
}
function isInLine(Character, y_land) {
    if(Character.y == y_land) return true;
    else return false;
}
function moveToOrder(Character,order,y_land){
    Character.y = y_land;
    switch(order){
        case 1: {
            Character.x = 5;
            break;
        }
        case 2: {
            Character.x = 155;
            break;
        }
        case 3: {
            Character.x = 305;
            break;
        }
        case 4: {
            Character.x = 455;
            break;
        }
        case 5: {
            Character.x = 605;
            break;
        }
        case 6: {
            Character.x = 755;
            break;
        }
    }
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