//1. 使用 for loop 計算並打印出 1 到 10 的奇數。
for (let n = 1; n < 11; n++) {
  if (n % 2 === 1) {
    console.log(n);
  }
}

//2.使用 for loop 計算並打印出 1 到 10 的偶數。
for (let n = 1; n < 11; n++) {
  if (n % 2 === 0) {
    console.log(n);
  }
}

//3.使用 forEach 打印出陣列 ["apple", "banana", "cherry"] 的每個元素。
let fruits = ["apple", "banana", "cherry"];
fruits.forEach((value) => {
  console.log(value);
});

//4.使用 for loop 找出陣列 [4, 8, 15, 16, 23, 42] 中的最大值。
numbers = [-4, 8, 15, 42, 23, 16];
let value = 0;
function maxNumber(numbers) {
  for (let num of numbers) {
    if (num > value) {
      value = num;
    }
  }
  return value;
}
console.log(maxNumber(numbers));

//5.使用 forEach 打印出物件 {name: "John", age: 25, gender: "male"} 的每個屬性和值。
let person = {
  name: "John",
  age: 25,
  gender: "male",
};
console.log(Object.entries(person));
Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

//6.使用 for loop 將陣列 [1, 2, 3, 4, 5] 中的每個元素加總起來。
const arrNumbers = [10, 20, 30, 40, 50];
function totalNumber(arrNumbers) {
  let total = 0;
  for (const n of arrNumbers) {
    total += n;
  }
  return total;
}
console.log(totalNumber(arrNumbers));

//7.使用 forEach 將陣列 [10, 20, 30, 40, 50] 中的每個元素乘以 2，並打印出結果。
arrNumbers.forEach((value) => {
  console.log(value * 2);
});
//8.使用判斷句檢查變數 x 是否為正數，並打印相應的消息。
function check(num) {
  if (num > 0) {
    console.log(`${num} 是正數`);
  } else if (num === 0) {
    console.log(`${num} 為 0`);
  } else {
    console.log(`${num} 為 負數`);
  }
}
check(5);

//9.使用判斷句檢查字串 str 是否為空，並打印相應的消息。
function checkStr(str) {
  if (str === "") {
    console.log("字串為空");
  } else {
    console.log("字串不為空");
  }
}
checkStr("");

//10.使用 for loop 打印出九九乘法表。
function mulTable() {
  for (let i = 2; i < 10; i++) {
    for (let n = 1; n < 10; n++) {
      let result = i * n;
      console.log(`${i} * ${n} = ${result}`);
    }
  }
}
mulTable();

//11.使用 forEach 打印出陣列 [3, 7, 11, 15, 19] 中的每個元素。
arrNumbers.forEach((value) => console.log(value));

//12.使用 for loop 將陣列 [2, 4, 6, 8, 10] 中的每個元素平方，並打印出結果。
arrNumbers.forEach((value) => console.log(value ** 2));

//13.使用判斷句檢查變數 age 是否大於 18，並打印相應的消息。
for (let number of arrNumbers) {
  if (number > 18) {
    console.log(`${number} is > 18`);
  } else {
    console.log(`${number} is <= 18`);
  }
}

//14.使用 for loop 求解斐波那契數列的前 10 項。
let fibonacci = [0, 1];
for (let i = 2; i < 10; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log(`斐波那契數列前 10 項: ${fibonacci}`);

//15.使用 forEach 打印出物件陣列 [{name: "Alice", age: 25}, {name: "Bob", age: 30}] 中每個物件的名字。
let info = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];

info.forEach((obj) => {
  console.log(obj.name);
});

//使用 for loop 找出陣列 [12, 34, 45, 21, 8, 19] 中的最小值。
function minNumber(numbers) {
  let min = 0;
  for (let n of numbers) {
    if (n > min) {
      min = n;
    }
  }
  return min;
}
console.log(minNumber(numbers));

//使用 forEach 將陣列 [1, 3, 5, 7, 9] 中的每個元素加上 10，並打印出結果。
numbers.forEach((value) => console.log(value + 10));

//使用判斷句檢查陣列 fruits 是否包含 "apple"，並打印相應的消息。
for (let fruit of fruits) {
  if (fruit === "apple") {
    console.log(fruit);
  }
}
//使用 for loop 將字串 "Hello" 反轉並打印出結果。
let strWord = "Hello";
let reversedString = "";
for (let i = strWord.length - 1; i >= 0; i--) {
  reversedString += strWord[i];
}
console.log(reversedString);
//使用 forEach 打印出陣列 [100, 90, 80, 70, 60] 中的每個元素的百分比，假設滿分為 100。
newNumbers = [100, 90, 80, 70, 60];
newNumbers.forEach((value) => {
  const percentage = (value / 100) * 100;
  console.log(`${percentage}%`);
});
