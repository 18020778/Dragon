describe("Ngôn ngữ", function(){
    var language = new Language("rgb(42, 90, 134)", false, "English");
    describe("Thao tác chuột", function(){
        it("Khi di chuột vào", function(){
            language.onmouseoverLanguage();
            expect(language.color).toEqual("#4ed0f5");
        })
        it("Khi di chuột ra", function(){
            language.onmouseoutLanguage();
            expect(language.color).toEqual("rgb(42, 90, 134)");
        })
    })
    describe("Bảng chọn ngôn ngữ", function(){
        it("Hiện bảng", function(){
            language = new Language("rgb(42, 90, 134)", false, "English");
            expect(language.appearDialog()).toEqual(true);
        })
        it("Ẩn bảng", function(){
            language = new Language("rgb(42, 90, 134)", true, "English");
            expect(language.appearDialog()).toEqual(false);
        })
    })
    describe("Chọn ngôn ngữ", function(){
        it("English", function(){
            language.english();
            expect(language.toLanguage).toEqual("English");
        })
        it("Hindi", function(){
            language.hindi();
            expect(language.toLanguage).toEqual("Hindi");
        })
    })
})