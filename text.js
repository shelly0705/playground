//請你分別用 for loop,印出 1~9。
for (let i = 1; i <= 9; i++) {
  console.log(i);
}

//請你分別用 for loop，印出 0-5
for (let i = 0; i < 6; i++) {
  console.log(i);
}

//請你分別用 for loop，印出 3-7
for (let i = 3; i <= 7; i++) {
  console.log(i);
}
//var i = 3; 初始化一個變數i，將其值設為3。
//i <= 7; 條件是當i小於等於7時，迴圈會繼續執行。
//i++ 遞增，每次循環結束後，i的值都會增加1。

//while 迴圈，印出 1~9。
let i = 1;
while (i <= 9) {
  console.log(i);
  i++;
}

//while 迴圈，印出 0~3。
let n = 0;
while (n < 4) {
  console.log(n);
  n++;
}

//while 迴圈，印出 2~5。
let num = 2;
while (num <= 5) {
  console.log(num);
  num++;
}

//寫一個能夠印出 1~n 的函式
function print(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
//print(1) 預期輸出：1
print(1);
//print(3) 預期輸出：1 2 3
print(3);
//print(9) 預期輸出：
print(9);

//寫一個函式 star，接收一個參數 n，並印出 n 個 *
function star(n) {
  let star = "";
  for (let i = 1; i <= n; i++) {
    star += "*";
  }
  console.log(star);
}

star(1);
star(5);

//寫一個能回傳 n 個 * 的函式
function star1(n) {
  let answer = "";
  for (let i = 1; i <= n; i++) {
    answer += "*";
  }
  return answer;
}
console.log(star1(5));

function filterOdd(nums) {
  let newNums = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 1) {
      newNums.push(nums[i]);
    }
  }
  return newNums;
}

console.log(filterOdd([1, 2, 3, 4, 5]));

function filterEven(nums) {
  let newNums = [];
  for (i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      newNums.push(nums[i]);
    }
  }
  return newNums;
}
console.log(filterEven([1, 2, 3, 4, 5]));

function filterEven1(nums) {
  let newNums = [];
  for (const num of nums) {
    if (num % 2 === 0) {
      newNums.push(num);
    }
  }
  return newNums;
}
console.log(filterEven1([1, 2, 3, 4, 5]));

function filterEven2(nums) {
  let newNums = [];
  nums.forEach(function (item) {
    if (item % 2 === 0) {
      newNums.push(item);
    }
  });
  return newNums;
}

console.log(filterEven1([1, 2, 3, 4, 5]));
//請寫一個叫做 isUpperCase 的 functuon，並且接收一個字串，回傳這個字串的第一個字母是否為大寫。
function isUpperCase(str) {
  let char = str[0];
  if (char >= "A" && char <= "Z") {
    return true;
  } else {
    return false;
  }
}

console.log(isUpperCase("abcd"));
console.log(isUpperCase("Abcd"));
console.log(isUpperCase("ABCD"));
console.log(isUpperCase("aBCD"));

//請寫一個 function position，接收一個字串並回傳這個字串裡面的第一個大寫字母跟它的 index，若沒有則回傳 -1。
//Jimmy --> J 0
//shelly --> -1
function position(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      return str[i] + " " + i;
    }
  }
  return -1;
}
console.log(position("Jimmy"));
console.log(position("shelly"));

//請寫出一個函式 findSmallCount，接收一個陣列跟一個數字 n，回傳有多少個數小於 n。
//findSmallCount([1, 2, 3], 2) 預期回傳值：1
function findSmallCount(arr, n) {
  let count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < n) {
      count++;
    }
  }
  return count;
}

console.log(findSmallCount([1, 2, 3], 2));
console.log(findSmallCount([1, 20, 50, 101], 100));

//請寫一個函式 findSmallerTotal，接收一個陣列以及數字 n，回傳陣列裡面所有小於 n 的數的總和。
//findSmallerTotal([1, 2, 3], 3) 正確回傳值：3
function findSmallerTotal(arr, num) {
  let total = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < num) {
      total += arr[i];
    }
  }
  return total;
}
console.log(findSmallerTotal([1, 2, 3], 3));
console.log(findSmallerTotal([3, 2, 5, 8, 7], 999));

//請寫一個函式 findAllSmall，接收一個陣列跟一個數字 n，回傳一個裡面有所有小於 n 的數的陣列（需按照原陣列順序）。
//findAllSmall([1, 2, 3], 10) 正確回傳值：[1, 2, 3]
function findAllSmall(arr, n) {
  let numbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < n) {
      numbers.push(arr[i]);
    }
  }
  return numbers;
}

console.log(findAllSmall([1, 2, 3], 10));
console.log(findAllSmall([1, 3, 5, 4, 2], 4));

//請寫一個 function sum，接收一個陣列並回傳陣列中數字的總和。
//sum ([1, 2, 3]) --> 6
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(sum([1, 2, 3]));
