//将数组的每个元素乘以 3
//for loop
let nums = [1, 2, 3, 4, 5];
for (let i = 0; i < nums.length; i++) {
  nums[i] = nums[i] * 3;
}
console.log(nums);

//forEach
let nums1 = [1, 2, 3, 4, 5];
nums1.forEach(function (item, index) {
  console.log(item * 3);
});

//map
let nums2 = [1, 2, 3, 4, 5];
let newNums = nums2.map(function (element) {
  return element * 3;
});
console.log(newNums);

let nums3 = [1, 2, 3, 4, 5];
let newNums1 = nums3.map((element) => element * 3);
console.log(newNums);

//陳列出所有使用者全名
let users = [
  { firstName: "Susan", lastName: "Steward" },
  { firstName: "Daniel", lastName: "Longbottom" },
  { firstName: "Jacob", lastName: "Black" },
];

let userFullnames = users.map(function (element) {
  return `${element.firstName} ${element.lastName}`;
});
console.log(userFullnames);

//map() 方法的完整语法
//const newArr = arr.map(function (value, index, array){
  //...
//});
let arr = [2, 3, 5, 7];

arr.map(function (element, index, array) {
  console.log(element);
  console.log(index);
  console.log(array);
  return element;
}, 80);
