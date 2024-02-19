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

newBuyList.splice(0, 1);
newBuyList.unshift("pudding");
newBuyList.pop();
console.log(newBuyList);

newUserInfo.age += 1;
newUserInfo.isVegetarian = true;
newUserInfo.hasDriverLiscense = true;
delete newUserInfo.favoriteFood;
console.log(newUserInfo);

const nestedNumbers = [[1], [2]];
//json不能使用在巢狀子陣列
const deepCloneNestedNumbers = JSON.parse(JSON.stringify(nestedNumbers));
deepCloneNestedNumbers[0].push(300);
console.log(nestedNumbers, deepCloneNestedNumbers);

// Todo 待編輯
const moonPhase = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];
function moon(phases) {
  let newMoonPhase = [];
  for (let i = 0; i < phases.length; i++) {
    if (phases[i] === "🌕") {
      newMoonPhase.push("🌕 + 🥮");
    } else {
      newMoonPhase.push(phases[i]);
    }
  }
  return newMoonPhase;
}

console.log(moon(moonPhase));
// ["🌑", "🌒", "🌓", "🌔", "🌕 + 🥮", "🌖", "🌗", "🌘"];

const foods = ["🍔", "🍜", "🍕", "🍜", "🍔"];
function countFoods(foods) {
  let foodCount = {};
  for (let food of foods) {
    if (foodCount[food] === undefined) {
      foodCount[food] = 1;
    } else {
      foodCount[food] += 1;
    }
  }
  return foodCount;
}
console.log(countFoods(foods));

const orderCounts = { "🍔": 2, "🍜": 2, "🍕": 1 };
function orders(orderCounts) {
  let ordersArray = [];
  for (let order of Object.keys(orderCounts)) {
    ordersArray.push(order);
  }
  return ordersArray;
}
console.log(orders(orderCounts));

const isOrders = { "🍔": 2, "🍜": 2, "🍕": 1 };
const ordersArray = Object.entries(isOrders);
const resultOrders = ordersArray.flatMap(([item, count]) =>
  Array(count).fill(item)
);
console.log(resultOrders);

const uniqueOrders = [...new Set(resultOrders)];
console.log(uniqueOrders);
