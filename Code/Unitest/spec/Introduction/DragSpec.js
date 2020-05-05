describe("Kéo thả nhân vật", function(){
    var dragObject;
    describe("Đặt con hươu bên cạnh cái cây", function(){
        it("Bên trái cái cây", function(){
            dragObject = new DragObject(180, 200, 240);
            dragObject.dropObject(180, 420);
            expect(dragObject.checkDrag()).toEqual(true);
        })
        it("Bên phải cái cây", function(){
            dragObject = new DragObject(580, 200, 240);
            dragObject.dropObject(580, 420);
            expect(dragObject.checkDrag()).toEqual(true);
        })
    })
    it("Đặt con hưu ở giữa hai cây", function(){
        dragObject = new DragObject(380, 200, 240);
        dragObject.dropObject(375, 420);
        expect(dragObject.checkDrag()).toEqual(true);
    })
    describe("Đặt cô bé bên cạnh mẹ cô ấy", function(){
        it("Bên tay trái mẹ", function(){
            dragObject = new DragObject(180, 250, 320);
            dragObject.dropObject(180, 550);
            expect(dragObject.checkDrag()).toEqual(true);
        })
        it("Bên tay phải mẹ", function(){
            dragObject = new DragObject(580, 250, 320);
            dragObject.dropObject(580, 550);
            expect(dragObject.checkDrag()).toEqual(true);
        })
    })
    it("Đặt cô bé ở giữa bố mẹ cô ấy", function(){
        dragObject = new DragObject(380, 250, 320);
        dragObject.dropObject(375, 550);
        expect(dragObject.checkDrag()).toEqual(true);
    })
})