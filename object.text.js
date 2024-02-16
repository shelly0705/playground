//使用物件＆陣列練習數字、字串、布林...
//而後寫上函數、迴圈

let buy_list = ["milk", "apple", "coffee", "toast", "rice"];

let useinfo = {
  age: 26,
  name: "shelly",
  sex: "female",
  hobby: ["前端開發", "讀書", "跑步"],
  favoriteFood: "滷肉飯",
  isVegetarian: false,
};
console.log(buy_list);
console.log(useinfo);

console.log(buy_list.length);
console.log(Object.keys(useinfo).length);
console.log(Object.values(useinfo).length);

console.log(buy_list[0], buy_list[buy_list.length - 1]);
console.log(
  `${Object.keys(useinfo)[0]}: ${Object.values(useinfo)[0]}`,
  `${Object.keys(useinfo)[Object.keys(useinfo).length - 1]}: ${
    Object.values(useinfo)[Object.values(useinfo).length - 1]
  }`
);

let newBuyList = buy_list;
console.log(newBuyList);
let newUserInfo = {};
Object.assign(newUserInfo, useinfo);
console.log(newUserInfo);

//shift()抽出第一筆, unshift()放入第一筆,
//pop()抽出最後一筆, push()放入最後一筆,
//splice(), splice(開始,數量)
//join()

newBuyList.splice(0,1);
newBuyList.unshift('pudding');
newBuyList.pop();
console.log(newBuyList);

newUserInfo.age += 1;
newUserInfo.isVegetarian = true;
newUserInfo.hasDriverLiscense = true;
delete newUserInfo.favoriteFood;
console.log(newUserInfo);

const nestedNumbers = [[1], [2]];
const deepCloneNestedNumbers = JSON.parse(JSON.stringify(nestedNumbers));
numbersCopy[0].push(300);
console.log(nestedNumbers, numbersCopy);

