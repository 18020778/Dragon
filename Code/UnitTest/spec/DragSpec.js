describe("Kéo thả nhân vật", function(){
    var DragObject;
    describe("Đặt con hươu bên cạnh cái cây", function(){
        it("Bên trái cái cây", function(){
            DragObject = new dragObject(180, 200, 240);
            DragObject.dropObject(180, 420);
            expect(DragObject.checkDrag()).toEqual(true);
        })
        it("Bên phải cái cây", function(){
            DragObject = new dragObject(580, 200, 240);
            DragObject.dropObject(580, 420);
            expect(DragObject.checkDrag()).toEqual(true);
        })
    })
    it("Đặt con hưu ở giữa hai cây", function(){
        DragObject = new dragObject(380, 200, 240);
        DragObject.dropObject(375, 420);
        expect(DragObject.checkDrag()).toEqual(true);
    })
    describe("Đặt cô bé bên cạnh mẹ cô ấy", function(){
        it("Bên tay trái mẹ", function(){
            DragObject = new dragObject(180, 250, 320);
            DragObject.dropObject(180, 550);
            expect(DragObject.checkDrag()).toEqual(true);
        })
        it("Bên tay phải mẹ", function(){
            DragObject = new dragObject(580, 250, 320);
            DragObject.dropObject(580, 550);
            expect(DragObject.checkDrag()).toEqual(true);
        })
    })
    it("Đặt cô bé ở giữa bố mẹ cô ấy", function(){
        DragObject = new dragObject(380, 250, 320);
        DragObject.dropObject(375, 550);
        expect(DragObject.checkDrag()).toEqual(true);
    })
})