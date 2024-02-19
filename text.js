//1.基本for循環：
//練習：修改循環以 打印1到10的數字。
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//2. 遍歷數組：
let fruits = ["apple", "orange", "banana"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
//練習：添加條件以僅打印具有超過5個字母的水果。
function overSixFruits(fruits) {
  for (let fruit of fruits) {
    if (fruit.length > 5) {
      console.log(fruit);
    }
  }
}
overSixFruits(fruits);

//3. 反向for循環：
for (let i = 5; i > 0; i--) {
  console.log(i);
}
//練習：將循環更改為從10倒數到1。
for (let i = 10; i > 0; i--) {
  console.log(i);
}

//4. 跳過值：
for (let i = 0; i < 10; i += 2) {
  console.log(i);
}
//練習：修改循環以打印1到20的偶數。
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//5. 遍歷字符串：
const word = "JavaScript";
for (let i = 0; i < word.length; i++) {
  console.log(word[i]);
}
//練習：僅打印給定字符串中的元音字母。
function printVowels(word) {
  let vowels = ["a", "e", "i", "o", "u"];
  for (let char of word) {
    if (vowels.includes(char.toLowerCase())) {
      console.log(char);
    }
  }
}

printVowels(word);

//6. 嵌套for循環：
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i, j);
  }
}

//練習：修改循環以打印乘法表（最大到5x5）。
function mulTable() {
  for (let i = 2; i <= 5; i++) {
    for (let n = 1; n <= 5; n++) {
      console.log(`${i} x ${n}`);
    }
  }
}
mulTable();

//7. 使用break語句：
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
//練習：修改循環以在數字大於7時終止。
for (let i = 0; i < 10; i++) {
  if (i >= 7) {
    break;
  }
  console.log(i);
}

//8. 使用continue語句：
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
}
//練習：在循環中跳過打印數字4。
for (let i = 0; i < 10; i++) {
  if (i === 4) {
    continue;
  }
  console.log(i);
}

//9. 遍歷對象屬性：
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
};

for (let key in car) {
  console.log(key, car[key]);
}

//練習：添加條件以僅打印對象中的字符串值。
let boyfriend = {
  name: "Jimmy",
  age: 31,
  likePet: "cat",
};

for (let key of Object.keys(boyfriend)) {
  console.log(key, boyfriend[key]);
}

//10. 使用forEach和數組：
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((value, index) => {
  console.log(index, value);
});
//練習：在循環中將每個數字加倍再打印。
numbers.forEach((value) => {
  console.log(value * 2);
});
