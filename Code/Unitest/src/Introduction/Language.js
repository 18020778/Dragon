class Language{
    constructor(color, dialogLanguageAppear, toLanguage){
        this.color = color;
        this.dialogLanguageAppear = dialogLanguageAppear;
        this.toLanguage = toLanguage;
    }
    onmouseoverLanguage(){
        this.color = "#4ed0f5";
    }
    onmouseoutLanguage(){
        this.color = "rgb(42, 90, 134)";
    }
    appearDialog(){
        if(!this.dialogLanguageAppear){
            this.dialogLanguageAppear = true;
            return true;
        }
        else{
            this.dialogLanguageAppear = false;
            return false;
        }
    }
    english(){
        this.toLanguage = "English";
    }
    hindi(){
        this.toLanguage = "Hindi";
    }
}