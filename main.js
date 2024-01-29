// Helper functions
function print(x) {
  console.log(x);
}

// 1 - practice for loop
// Example:
function isOdd(n) {
  if (n % 2 == 0) {
    return false;
  } else {
    return true;
  }
}

print(isOdd(2)); // false
print(isOdd(1)); // true

function isAllOdd(numbers) {
  for (const n of numbers) {
    print(`we are dealing with ${n}`);
    if (!isOdd(n)) {
      return false;
    }
  }
  return true;
}

print(isAllOdd([1, 3, 5])); // true
print(isAllOdd([2, 3, 5])); // false; why `3` and `5` aren't printed?

// Practice
// Make `isEven` and `isAllOdd`, like this:
function isEven(n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

print(isEven(4));

function isAllOdd1(array) {
  for (const n of array) {
    print(`we are dealing with ${n}`);
    if (isEven(n)) {
      return false;
    }
  }
  return true;
}

print(isAllOdd1([1, 3, 5]))
print(isAllOdd1([2, 3, 4]))

function isAllEven(numbers) {
  for (const n of numbers) {
    print(`we are dealing with ${n}`);
    if (!isEven(n)){
      return false;
    }
  }
  return true;
}

print(isAllEven([1, 3, 5]))
print(isAllEven([2, 3, 4]))

function isanyEven(array){
  for (const n of array){
    print(`we are dealing with ${n}`);
    if (isEven(n)) {
      return false;
    }
  }
  return true;
}

print(isanyEven([1, 3, 5]))
print(isanyEven([2, 3, 4]))


// forEach 不能回傳值
const array1 = ['a', 'b', 'c'];
var forEachResult = array1.forEach(function(element){
  console.log(element + ' is good');
})
//for迴圈
//var i = 0;：初始化一個名為 i 的變數，將其設置為 0。這是迴圈的起始點，
for(var i = 0; i < array1.length ; i++){
  console.log(array1[i] + ' is good')
}

// 2 - practice the above `isAllOdd` and `isAllEven`, but use `forEach`
//function isAllOddUsingForEach(numbers) {
// }
const array2 = [2, 4, 6, 7, 8, 9]
var IsAllOdd = array2.forEach(function(n){
  console.log(`we are dealing with ${n}`);
  if (!isOdd(n)) {
    console.log(false);
  }
  else console.log(true);
})

 //function isAllEvenUsingForEach(numbers) {
// }
var IsAllEven = array2.forEach(function(n){
  console.log(`we are dealing with ${n}`);
  if (isOdd(n)) {
    console.log(false);
  }
  else console.log(true);
})
  



// 3 - [HARD!] Use for loop to make a `myForEach` that works similar with `array.forEach`.
