describe("Bật tắt âm thanh",function(){
    var audio;
    describe("Âm thanh câu tiêu đề",function(){
        it("Bật âm thanh",function(){
            audio = new Audio(false, false);
            expect(audio.turnMicroTop()).toEqual(true);
        })
        it("Tắt âm thanh",function(){
            audio = new Audio(true, false);
            expect(audio.turnMicroTop()).toEqual(false);
        })
    })
    describe("Âm thanh từ khóa",function(){
        it("Bật âm thanh",function(){
            audio = new Audio(false, false);
            expect(audio.turnMicroBottom()).toEqual(true);
        })
        it("Tắt âm thanh",function(){
            audio = new Audio(false, true);
            expect(audio.turnMicroBottom()).toEqual(false);
        })
    })
})