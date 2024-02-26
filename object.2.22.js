//1.物件創建： 創建一個包含姓名和年齡屬性的物件，例如 {name: 'John', age: 25}。
let personinfo = {
  name: "John",
  age: 25,
};
console.log(personinfo);

//2.物件屬性存取： 創建一個物件表示一本書，包含標題、作者和出版年份。使用點運算符和方括號運算符分別存取物件的屬性。
let book = {
  title: "family",
  author: "jimmy",
  publicationYear: 2024,
};
console.log(book.title);
console.log(Object.keys(book));
console.log(book["author"]);
console.log(book["publicationYear"]);

//3.物件方法： 創建一個物件表示一台手機，包含屬性 brand 和 model，以及一個方法 displayInfo，該方法用於打印手機的品牌和型號。
let phone = {
  brand: "apple",
  model: "iphone",
  displayInfo: function () {
    console.log(`phoneBrand: ${this.brand}\nphoneModel: ${this.model}`);
  },
};
phone.displayInfo();

//4.物件迭代： 創建一個包含多個學生物件的陣列，每個學生有姓名和成績屬性。使用迴圈遍歷陣列，並打印出每個學生的姓名和成績。
let students = [
  { name: "shelly", score: 80 },
  { name: "jimmy", score: 100 },
  { name: "kiki", score: 55 },
];

for (let student of students) {
  console.log(`name:${student.name}, score:${student.score}`);
}
//!!5.物件複製： 創建一個物件表示一個汽車，包含顏色和型號。複製這個物件以創建一個相同的汽車，然後修改其中一個物件的顏色，確保另一個不受影響。
let car1 = {
  color: "black",
  model: "sedan",
};
let car2 = Object.assign({}, car1);
car1.color = "red";
console.log("第一輛汽車：", car1);
console.log("第二輛汽車：", car2);


function myAssign(obj1, obj2) {
  for (const [key, value] of Object.entries(obj2)) {
    obj1[key] = value;
  }
}

function clone(obj) {
  const cloneObj = {};
  for (const [key, value] of Object.entries(obj)) {
    cloneObj[key] = value;
  }
  return cloneObj;
}

// 6.物件合併： 創建兩個物件，分別表示一台電視和一台音響，每個物件都有品牌和型號屬性。將這兩個物件合併成一個新的物件表示整體娛樂系統。
const tv = {
  brand: "samsung",
  model: "smrat tv",
};

const soundSystem = {
  brand: "Bose",
  model: "Surround Sound System",
};

const entertainmentSystem = {
  tv1: clone(tv),
  soundSystem1: clone(soundSystem),
};

const entertainmentSystems = [clone(tv), clone(soundSystem)];

// const entertainmentSystem = Object.assign({}, tv, soundSystem);
console.log("電視資訊：", tv);
console.log("音響資訊：", soundSystem);
console.log("整體娛樂系統資訊：", entertainmentSystem);
console.log("整體娛樂系統資訊：", entertainmentSystems);
//7.物件屬性刪除： 創建一個包含多個屬性的物件，然後刪除其中一個屬性。
//8.物件中的陣列： 創建一個物件，其中包含一個陣列屬性，該陣列表示一本書的章節標題。打印出書的第一個章節標題。
//9.物件檢查屬性： 創建一個物件表示一台電腦，包含屬性 brand 和 ram。使用 hasOwnProperty 方法檢查物件是否具有 ram 屬性。
//10.物件的深層複製： 創建一個包含多個層次的巢狀物件，並創建一個函數用於深層複製該物件。
