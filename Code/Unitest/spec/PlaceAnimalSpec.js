describe("Bài 2 màn 1", function() {
const y_land = 100;
const bear = new Character(5,100);
const wolf = new Character(-1,-1);
const fox = new Character(305,100);
const raccoon = new Character(-1,-1);
const rabbit = new Character(605,100);
const owl = new Character(-1,-1);
describe("Vị trí ban đầu của nhân vật", function() {
  it("Con gấu ở vị trí thứ nhất",function() {
    expect(bear.order()).toBe(1);
    expect(isInLine(bear, y_land)).toEqual(true);
  });
  
  it("Con thỏ ở vị trí thứ năm", function() {
    expect(rabbit.order()).toBe(5);
    expect(isInLine(rabbit, y_land)).toEqual(true);
  });
  
  it("Con cáo ở vị trí thứ ba", function() {
    expect(fox.order()).toBe(3);
    expect(isInLine(fox, y_land)).toEqual(true);
  });
  
});
describe("Di chuyển nhân vật đến vị trí yêu cầu", function(){
  it("Di chuyển con sói đến cạnh con gấu", function(){
    moveToOrder(wolf, bear.order() + 1, y_land);
    expect(isBeside(bear,wolf)).toEqual(true);
  });
  it("Di chuyển con gấu mèo vào giữa con cáo và con thỏ", function(){
    moveToOrder(raccoon, fox.order() + 1, y_land);
    expect(isBetween(fox, rabbit, raccoon)).toEqual(true);
  });
  it("Di chuyển con cú đến bên cạnh con thỏ", function(){
    moveToOrder(owl,6,y_land);
    expect(isBeside(rabbit, owl)).toEqual(true);
  });
});
});


describe("Bài 2 màn 2", function() {
  const y_land = 100;
  const pear = new Character(-1,-1);
  const banana = new Character(150,100);
  const grapes = new Character(-1,-1);
  const orange = new Character(-1,-1);
  const apple = new Character(605,100);
  const watermelon = new Character(-1,-1);
  describe("Vị trí ban đầu của nhân vật", function() {
    it("Quả chuối ở vị trí thứ hai",function() {
      expect(banana.order()).toBe(2);
      expect(isInLine(banana, y_land)).toEqual(true);
    });
    it("Quả táo ở vị trí thứ năm", function() {
      expect(apple.order()).toBe(5);
      expect(isInLine(apple, y_land)).toEqual(true);
    });
  });
  describe("Di chuyển nhân vật đến vị trí yêu cầu", function(){
    it("Di chuyển quả cam đến cạnh quả táo", function(){
      moveToOrder(orange, apple.order() + 1, y_land);
      expect(isBeside(orange,apple)).toEqual(true);
    });
    it("Di chuyển quả cam đến cạnh quả táo", function(){
      moveToOrder(orange, apple.order() - 1, y_land);
      expect(isBeside(orange,apple)).toEqual(true);
    });
    it("Di chuyển chùm nho đến bên cạnh quả chuối", function(){
      moveToOrder(grapes, banana.order() + 1, y_land);
      expect(isBeside(grapes,banana)).toEqual(true);
    });
    it("Di chuyển chùm nho đến bên cạnh quả chuối", function(){
      moveToOrder(grapes, banana.order() - 1, y_land);
      expect(isBeside(grapes,banana)).toEqual(true);
    });
    it("Di chuyển quả lê đến bên cạnh quả chuối", function(){
      moveToOrder(pear,banana.order() - 1,y_land);
      expect(isBeside(pear, banana)).toEqual(true);
    });
    it("Di chuyển quả lê đến bên cạnh quả chuối", function(){
      moveToOrder(pear,banana.order() + 1,y_land);
      expect(isBeside(pear, banana)).toEqual(true);
    });
    it("Di chuyển miếng dư hấu đến bên cạnh quả táo", function(){
      moveToOrder(watermelon,apple.order() - 1,y_land);
      expect(isBeside(watermelon, apple)).toEqual(true);
    });
    it("Di chuyển miếng dư hấu đến bên cạnh quả táo", function(){
      moveToOrder(watermelon,apple.order() + 1,y_land);
      expect(isBeside(watermelon, apple)).toEqual(true);
    });
  });
});


describe("Bài 2 màn 3", function() {
  const y_land = 100;
  const cupcake = new Character(5,100);
  const cup = new Character(-1,-1);
  const icecream = new Character(-1,-1);
  const teapot = new Character(455,100);
  const juice = new Character(-1,-1);
  const dessert = new Character(755,100);
  describe("Vị trí ban đầu của nhân vật", function() {
    it("Bánh ở vị trí thứ nhất",function() {
      expect(cupcake.order()).toBe(1);
      expect(isInLine(cupcake, y_land)).toEqual(true);
    });
    it("Bình trà ở vị trí thứ tư", function() {
      expect(teapot.order()).toBe(4);
      expect(isInLine(teapot, y_land)).toEqual(true);
    });
    it("Món tráng miệng ở vị trí thứ sáu", function() {
      expect(dessert.order()).toBe(6);
      expect(isInLine(dessert, y_land)).toEqual(true);
    });
  });
  describe("Di chuyển nhân vật đến vị trí yêu cầu", function(){
    it("Di chuyển ly trà đến cạnh bánh", function(){
      moveToOrder(cup, cupcake.order() + 1, y_land);
      expect(isBeside(cup,cupcake)).toEqual(true);
    });
    it("Di chuyển cây kem vào giữa ly trà và bình trà", function(){
      moveToOrder(cup, cupcake.order() + 1, y_land);
      moveToOrder(icecream, cup.order() + 1, y_land);
      expect(isBetween(cup, teapot, icecream)).toEqual(true);
    });
    it("Di chuyển nước ép vào giữa bình trà và món tráng miệng", function(){
      moveToOrder(juice,teapot.order() + 1,y_land);
      expect(isBetween(teapot, dessert, juice)).toEqual(true);
    });
  });
});


describe("Bài 2 màn 4", function() {
  const y_land = 100;
  const wolf = new Character(5,100);
  const raccoon = new Character(-1,-1);
  const fox = new Character(-1,-1);
  const rabbit = new Character(-1,-1);
  const bear = new Character(605,100);
  const owl = new Character(-1,-1);
  describe("Vị trí ban đầu của nhân vật", function() {
    it("Con sói ở vị trí thứ nhất",function() {
      expect(wolf.order()).toBe(1);
      expect(isInLine(wolf, y_land)).toEqual(true);
    });
    it("Con gấu ở vị trí thứ năm", function() {
      expect(bear.order()).toBe(5);
      expect(isInLine(bear, y_land)).toEqual(true);
    });
  });
  describe("Di chuyển nhân vật đến vị trí yêu cầu", function(){
    it("Di chuyển con cú đến cạnh con gấu", function(){
      moveToOrder(owl, bear.order() + 1, y_land);
      expect(isBeside(owl,bear)).toEqual(true);
    });
    it("Di chuyển con gấu mèo đến cạnh con sói", function(){
      moveToOrder(raccoon, wolf.order() + 1, y_land);
      expect(isBeside(raccoon,wolf)).toEqual(true);
    });
    it("Di chuyển con cáo đến cạnh con gấu mèo", function(){
      moveToOrder(raccoon, wolf.order() + 1, y_land);
      moveToOrder(fox, raccoon.order() + 1, y_land);
      expect(isBeside(fox,raccoon)).toEqual(true);
    });
    it("Di chuyển con thỏ vào giữa con cáo và con gấu", function(){
      moveToOrder(raccoon, wolf.order() + 1, y_land);
      moveToOrder(fox, raccoon.order() + 1, y_land);
      moveToOrder(rabbit, fox.order() + 1,y_land);
      expect(isBetween(fox, bear, rabbit)).toEqual(true);
    });
  });
});