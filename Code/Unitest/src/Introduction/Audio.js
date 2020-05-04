class Audio{
    constructor(top_play, bottom_play){
        this.top_play = top_play;
        this.bottom_play = bottom_play;
    }
    turnMicroTop() {
        if (this.top_play == false) {
            this.top_play = true;
            return true; 
        }
        else {
            this.top_play = false;
            return false;
        }
    }
    turnMicroBottom() {
        if (this.bottom_play == false) {
            this.bottom_play = true;
            return true; 
        }
        else {
            this.bottom_play = false;
            return false;
        }
    }
}