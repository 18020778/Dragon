// Lưu ý: phải tắt chế độ "run test in random order"
// do các di chuyển nhân vật phía sau có liên quan đến di chuyển nhân vật phía trước. 

describe("Bài 2 màn 1", function() {
const y_land = 100;
const bear = new Character(5,y_land);
var wolf = new Character(-1,-1);
const fox = new Character(305,y_land);
var raccoon = new Character(-1,-1);
const rabbit = new Character(605,y_land);
var owl = new Character(-1,-1);
var orderArray = [1,0,1,0,1,0];

describe("Vị trí ban đầu của nhân vật", function() {
  it("Con gấu ở vị trí thứ nhất",function() {
    expect(bear.order()).toBe(0);
    expect(isInLine(bear, y_land)).toEqual(true);
  });
  
  it("Con thỏ ở vị trí thứ năm", function() {
    expect(rabbit.order()).toBe(4);
    expect(isInLine(rabbit, y_land)).toEqual(true);
  });
  
  it("Con cáo ở vị trí thứ ba", function() {
    expect(fox.order()).toBe(2);
    expect(isInLine(fox, y_land)).toEqual(true);
  });
  
});
describe("Di chuyển nhân vật đến vị trí yêu cầu", function(){
  it("Di chuyển con sói đến cạnh con gấu", function(){
    moveToBeside(wolf,bear,orderArray);
    expect(isBeside(bear,wolf)).toEqual(true);
  });
  it("Di chuyển con gấu mèo vào giữa con cáo và con thỏ", function(){
    moveToBetween(raccoon,fox,rabbit,orderArray);
    expect(isBetween(fox,rabbit,raccoon)).toEqual(true);
  });
  it("Di chuyển con cú đến bên cạnh con thỏ", function(){
    moveToBeside(owl,rabbit,orderArray);
    expect(isBeside(rabbit, owl)).toEqual(true);
  });
});
});


describe("Bài 2 màn 2", function() {
  const y_land = 100;
  var pear = new Character(-1,-1);
  var banana = new Character(150,100);
  var grapes = new Character(-1,-1);
  var orange = new Character(-1,-1);
  var apple = new Character(605,100);
  var watermelon = new Character(-1,-1);
  var orderArray = [0, 1, 0, 0, 1, 0];
  describe("Vị trí ban đầu của nhân vật", function() {
    it("Quả chuối ở vị trí thứ hai",function() {
      expect(banana.order()).toBe(1);
      expect(isInLine(banana, y_land)).toEqual(true);
    });
    it("Quả táo ở vị trí thứ năm", function() {
      expect(apple.order()).toBe(4);
      expect(isInLine(apple, y_land)).toEqual(true);
    });
  });
  describe("Di chuyển nhân vật đến vị trí yêu cầu", function(){
    it("Di chuyển quả cam đến cạnh quả táo", function(){
      moveToBeside(orange,apple,orderArray);
      expect(isBeside(orange,apple)).toEqual(true);
    });
    it("Di chuyển chùm nho đến bên cạnh quả chuối", function(){
      moveToBeside(grapes,banana,orderArray);
      expect(isBeside(grapes,banana)).toEqual(true);
    });
    it("Di chuyển quả lê đến bên cạnh quả chuối", function(){
      moveToBeside(pear,banana,orderArray);
      expect(isBeside(pear, banana)).toEqual(true);
    });
    it("Di chuyển miếng dưa hấu đến bên cạnh quả táo", function(){
      moveToBeside(watermelon,apple,orderArray);
      expect(isBeside(watermelon, apple)).toEqual(true);
    });

  });
});


describe("Bài 2 màn 3", function() {
  const y_land = 100;
  var cupcake = new Character(5,y_land);
  var cup = new Character(-1,-1);
  var icecream = new Character(-1,-1);
  var teapot = new Character(455,y_land);
  var juice = new Character(-1,-1);
  var dessert = new Character(755,y_land);
  var orderArray = [1, 0, 0, 1, 0, 1];
  describe("Vị trí ban đầu của nhân vật", function() {
    it("Bánh ở vị trí thứ nhất",function() {
      expect(cupcake.order()).toBe(0);
      expect(isInLine(cupcake, y_land)).toEqual(true);
    });
    it("Bình trà ở vị trí thứ tư", function() {
      expect(teapot.order()).toBe(3);
      expect(isInLine(teapot, y_land)).toEqual(true);
    });
    it("Món tráng miệng ở vị trí thứ sáu", function() {
      expect(dessert.order()).toBe(5);
      expect(isInLine(dessert, y_land)).toEqual(true);
    });
  });
  describe("Di chuyển nhân vật đến vị trí yêu cầu", function(){
    it("Di chuyển ly trà đến cạnh bánh", function(){
      moveToBeside(cup,cupcake,orderArray);
      expect(isBeside(cup,cupcake)).toEqual(true);
    });
    it("Di chuyển cây kem vào giữa ly trà và bình trà", function(){
      moveToBetween(icecream,cup,teapot,orderArray);
      expect(isBetween(cup, teapot, icecream)).toEqual(true);
    });
    it("Di chuyển nước ép vào giữa bình trà và món tráng miệng", function(){
      moveToBetween(juice,teapot,dessert,orderArray);
      expect(isBetween(teapot, dessert, juice)).toEqual(true);
    });
  });
});


describe("Bài 2 màn 4", function() {
  const y_land = 100;
  var wolf = new Character(5,y_land);
  var raccoon = new Character(-1,-1);
  var fox = new Character(-1,-1);
  var rabbit = new Character(-1,-1);
  var bear = new Character(-1,-1);
  var owl = new Character(755,y_land);
  var orderArray = [1, 0, 0, 0, 0, 1];
  describe("Vị trí ban đầu của nhân vật", function() {
    it("Con sói ở vị trí thứ nhất",function() {
      expect(wolf.order()).toBe(0);
      expect(isInLine(wolf, y_land)).toEqual(true);
    });
    it("Con cú ở vị trí thứ sáu", function() {
      expect(owl.order()).toBe(5);
      expect(isInLine(owl, y_land)).toEqual(true);
    });
  });
  describe("Di chuyển nhân vật đến vị trí yêu cầu", function(){
    it("Di chuyển con gấu đến cạnh con cú", function(){
      moveToBeside(bear,owl,orderArray);
      expect(isBeside(owl,bear)).toEqual(true);
    });
    it("Di chuyển con gấu mèo đến cạnh con sói", function(){
      moveToBeside(raccoon,wolf,orderArray);
      expect(isBeside(raccoon,wolf)).toEqual(true);      
    });
    it("Di chuyển con cáo đến cạnh con gấu mèo", function(){
      moveToBeside(fox,raccoon,orderArray);
      expect(isBeside(fox,raccoon)).toEqual(true);      
    });
    
    it("Di chuyển con thỏ vào giữa con cáo và con gấu", function(){
      moveToBetween(rabbit,fox,bear,orderArray);
      expect(isBetween(fox, bear, rabbit)).toEqual(true);
    });
  });
});

