//forEach(function(item, index, array){})
//參數1 item：陣列資料
//參數2 index：第 ○ 筆
//參數3 array：陣列

let data = [30, 40, 50, 60, 70, 80, 90];

data.forEach(function (item, index) {
  console.log(item, index);
});
// forEach 依序把每一筆資料讀取出來
//參數  //陣列資料 //第○筆 //陣列

//陣列數字累加
let data1 = [30, 40, 100, 200, 300];
let total = 0;
data1.forEach(function (item, index) {
  total += item;
  console.log(total);
});
console.log(total);

//搭配 if，篩選出陣列裡面有幾個偶數
let data2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filterEven1 = 0;
data2.forEach(function (item, index) {
  if (item % 2 === 0) {
    filterEven1 += 1;
  }
});

console.log(filterEven1);

//forEach 可讀取不同型別的資料
let data3 = ["jimmy", "31", "white"];
data3.forEach(function (item, index) {
  console.log(item);
});

//forEach 讀取物件型別資料
let data4 = [
  {
    name: "jimmy",
    sex: "male",
  },
  {
    name: "shelly",
    sex: "female",
  },
];
data4.forEach(function (item, index) {
  console.log(item, index);

  //console.log(item.name);
  //console.log(item.sex);
});

//透過物件整合資料-男女人數計算機
let data5 = [
  {
    name: "Tom",
    sex: "male",
  },
  {
    name: "Tina",
    sex: "female",
  },
  {
    name: "Jay",
    sex: "male",
  },
  {
    name: "Jason",
    sex: "male",
  },
  {
    name: "Mia",
    sex: "female",
  },
  {
    name: "Jane",
    sex: "female",
  },
];

let maleTotal = 0;
let femaleTotal = 0;
data5.forEach(function (item, index) {
  if (item.sex === "male") {
    maleTotal += 1;
  } else {
    femaleTotal += 1;
  }
});
console.log(maleTotal);
console.log(femaleTotal);

