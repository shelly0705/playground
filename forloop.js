//1.計算總和：創建一個包含整數的陣列，使用 for 迴圈計算這個陣列的所有數字的總和。
let numbers = [1, 26, 56, 31, 8, 5];
// let numbers = [-1, -2, -3];

function sumNumbers(numbers) {
  let sum = 0;
  for (const n of numbers) {
    sum += n;
  }
  return sum;
}
console.log(sumNumbers(numbers));

// 2.找到最大值：創建一個包含整數的陣列，使用 for 迴圈找到這個陣列中的最大值。
function maxValue(numbers) {
  let num = 0;
  for (const n of numbers) {
    if (n > num) {
      num = n;
    }
  }
  return num;
}
console.log(maxValue(numbers));

//3.奇數偶數判斷：創建一個包含整數的陣列，使用 for 迴圈和 if-else 條件語句判斷每個數字是奇數還是偶數，然後印出結果。
function oddOrEven(numbers) {
  for (const n of numbers) {
    if (n % 2 === 1) {
      console.log(`isOdd: ${n}`);
    } else {
      console.log(`isEven: ${n}`);
    }
  }
}

oddOrEven(numbers);

function oddOrEven1(numbers) {
  for (const n of numbers) {
    let result = n % 2 === 1 ? "isOdd" : "isEven";
    console.log(`${result} : ${n}`);
  }
}
oddOrEven1(numbers);

// numbers = [2, 3, 4]
function isOdd(numbers) {
  const result = {};
  for (const number of numbers) {
    const key = number;
    const value = number % 2 === 1;
    // result.set(key, value)
    result[key] = value;
  }
  return result;
}

console.log(isOdd(numbers));
//4.陣列反轉：創建一個包含字串的陣列，使用 for 迴圈將每個字串反轉，並印出結果。
let arr = ["shelly", "jimmy", "winnie", "emily"];
function reverseNum(arr) {
  return arr.slice().reverse();
}

console.log(reverseNum(arr));

function reverseNum1(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

console.log(reverseNum1(arr));

//5.物件迴圈：創建一個包含多個物件的陣列，每個物件都有一個名字和一個年齡屬性。使用 for 迴圈遍歷陣列，並印出每個人的名字和年齡。
let peopleArray = [
  { name: "jimmy", age: 31, sex: "male" },
  { name: "shelly", age: 26, sex: "female" },
  { name: "emily", age: 26, sex: "female" },
];
function peopleInfo(peopleArray) {
  for (const people of peopleArray) {
    console.log(`name: ${people.name}, age: ${people.age}, sex: ${people.sex}`);
  }
}
peopleInfo(peopleArray);

//6.條件過濾：創建一個包含數字的陣列，使用 for 迴圈和 if-else 條件語句將所有大於 10 的數字濾出，形成一個新的陣列。
function selectNumber(numbers) {
  let newNum = [];
  for (const n of numbers) {
    if (n > 10) {
      newNum.push(n);
    } else {
    }
  }
  return newNum;
}
console.log(selectNumber(numbers));

//7.購物車計算：創建一個包含商品物件的陣列，每個商品物件都有名稱和價格屬性。使用 for 迴圈計算這些商品的總價格。
const shoppingCart = [
  { name: "pasta", price: 260 },
  { name: "milk", price: 80 },
  { name: "candy", price: 20 },
];

function totalPrice(shoppingCart) {
  sum = 0;
  for (const product of shoppingCart) {
    sum += product.price;
  }
  return sum;
}
console.log(totalPrice(shoppingCart));

//8.查找特定項目：創建一個包含字串的陣列，使用 for 迴圈和 if-else 條件語句找到包含特定字符的字串，然後印出找到的字串。
const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
function chooseFruit(fruits) {
  for (const fruit of fruits) {
    if (fruit === "grape" || fruit === "banana") {
      console.log(fruit);
    }
  }
}
chooseFruit(fruits);
//9.計算平均值：創建一個包含數字的陣列，使用 for 迴圈計算這個陣列的平均值。
const allNumber = [3, 10, 25, 40, 33];
function averageNumber(allNumber) {
  let sum = 0;
  for (const number of allNumber) {
    sum += number;
  }
  return sum / allNumber.length;
}
console.log(averageNumber(allNumber));
//10.FizzBuzz遊戲：使用 for 迴圈，
//印出數字 1 到 30，對於每個數字，如果它是 3 的倍數，印出 "Fizz"；
//如果是 5 的倍數，印出 "Buzz"；
//如果既是 3 的倍數又是 5 的倍數，印出 "FizzBuzz"
//；否則，印出該數字。

function FizzBuzz() {
  for (let i = 1; i <= 30; i++) {
    if ((i % 3 === 0)) {
      console.log(`${i} : Fizz`);
    } else if ((i % 5 === 0)) {
      console.log(`${i} : Buzz`);
    } else if ((i % 3 === 0) && (i % 5 === 0)) {
      console.log(`${i} : FizzBuzz`);
    } else {
      console.log(i);
    }
  }
}
FizzBuzz();
