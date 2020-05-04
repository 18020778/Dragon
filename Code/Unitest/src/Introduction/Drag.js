class DragObject{
    constructor(left, top, height){
        this.left = left;
        this.top = top;
        this.height = height;
        this.dragTop = top + height;
    }
    dropObject(left, top){
        this.limitTopMin = top - 5;
        this.limitTopMax = top + 50;
        this.limitLeftMin = left;
        this.limitLeftMax = left + 120;
    }
    checkDrag(){
        if( this.dragTop >= this.limitTopMin && this.dragTop <= this.limitTopMax){
            if(this.left >= this.limitLeftMin && this.left <= this.limitLeftMax){
                return true;
            }
        }
        return false;
    }
}