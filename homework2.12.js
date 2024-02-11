//把參數跟回傳值都改成以 [number, number] 表達
// 數字 + 陣列
function asNumbers(s) {
  if (typeof s === "number") {
    return [s, s];
  } else {
    return s.split("~").map((value) => parseInt(value.trim()));
  }
}

// 數字 + 範圍字串  5000 '5000~10000' -->[10000, 15000]
function add(a, b) {
  let newA = asNumbers(a);
  let newB = asNumbers(b);
  let min = newA[0] + newB[0];
  let max = newA[1] + newB[1];
  let result = [min, max]; // [10000 ~ 15000]
  return result;
}

console.log(add(5000, "5000~10000"));
console.log(add("5000~10000", 5000));
console.log(add(5000, 5000));
console.log(add("5000~10000", "5000~10000"));
// 數字 + 範圍字串
// 範圍字串 + 數字
// 數字 + 數字
// 範圍字串 + 範圍字串

// More homework 1
function insuranceSum(a, b, c) {
  let d = insuranceAdd(a, b); //
  if (typeof c === "string") {
    //'a~
    let rangeValuesc = asNumbers(c);
    if (typeof d === "string") {
      // 數字 + 範圍字串 + 數字
      let rangeValuesd = asNumbers(d);
      let min1 = rangeValuesd[0] + rangeValuesc[0];
      let max1 = rangeValuesd[1] + rangeValuesc[1];
      let result1 = `${min1} ~ ${max1}`;
      return result1;
    } else {
      let min2 = d + rangeValuesc[0];
      let max2 = d + rangeValuesc[1];
      let result2 = `${min2} ~ ${max2}`;
      return result2;
    }
  } else if (typeof d === "string") {
    // 數字 + 範圍字串 + 數字
    let rangeValuesd = asNumbers(d);
    let min3 = rangeValuesd[0] + c;
    let max3 = rangeValuesd[1] + c;
    let result3 = `${min3} ~ ${max3}`;
    return result3;
  } else {
    return d + c;
  }
}

function insuranceSumThree(a, b, c) {
  return insuranceAdd(insuranceAdd(a, b), c);
}
console.log(insuranceSumThree(1000, "5000~10000", 5000));

function insuranceSumMore(a, b, c, d) {
  return insuranceAdd(insuranceAdd(insuranceAdd(a, b), c), d);
}

function insuranceSumMoreBetter(a, b, c, d) {
  let total = 0;
  total = insuranceAdd(total, a);
  total = insuranceAdd(total, b);
  total = insuranceAdd(total, c);
  total = insuranceAdd(total, d);
  return total;
}
console.log(insuranceSumMore(1000, "5000~10000", 5000, "5000~10000"));

function insuranceSumMore_(a, b, c, d, e) {
  let total = 0;
  total = insuranceAdd(total, a);
  total = insuranceAdd(total, b);
  total = insuranceAdd(total, c);
  total = insuranceAdd(total, d);
  total = insuranceAdd(total, e);
  return total;
}
console.log(insuranceSumMore_(1000, "5000~10000", 5000, "5000~10000", 5000));

function insuranceSumMore__(a, b, c, d, e, f) {
  let total = 0;
  total = insuranceAdd(total, a);
  total = insuranceAdd(total, b);
  total = insuranceAdd(total, c);
  total = insuranceAdd(total, d);
  total = insuranceAdd(total, e);
  total = insuranceAdd(total, f);
  return total;
}
console.log(
  insuranceSumMore__(1000, "5000~10000", 5000, "5000~10000", 5000, "5000~10000")
);

function insuranceSumMore___(a, b, c, d, e, f, g) {
  let total = 0;
  total = insuranceAdd(total, a);
  total = insuranceAdd(total, b);
  total = insuranceAdd(total, c);
  total = insuranceAdd(total, d);
  total = insuranceAdd(total, e);
  total = insuranceAdd(total, f);
  total = insuranceAdd(total, g);
  return total;
}

console.log(
  insuranceSumMore___(
    1000,
    "5000~10000",
    5000,
    "5000~10000",
    5000,
    "5000~10000",
    5000
  )
);

function insuranceSumMore____(a, b, c, d, e, f, g, h) {
  let total = 0;
  total = insuranceAdd(total, a);
  total = insuranceAdd(total, b);
  total = insuranceAdd(total, c);
  total = insuranceAdd(total, d);
  total = insuranceAdd(total, e);
  total = insuranceAdd(total, f);
  total = insuranceAdd(total, g);
  total = insuranceAdd(total, h);
  return total;
}
console.log(
  insuranceSumMore____(
    1000,
    "5000~10000",
    5000,
    "5000~10000",
    5000,
    "5000~10000",
    5000,
    "5000~10000"
  )
);

console.log(insuranceSum(1000, "5000~10000", 5000));
// 數字 + 範圍字串 + 數字  11000~16000
console.log(insuranceSum(1000, "5000~10000", "5000~10000"));
// 數字 + 範圍字串 + 範圍字串 11000~21000
console.log(insuranceSum("5000~10000", 5000, 5000));
// 範圍字串 + 數字 + 數字 15000~20000
console.log(insuranceSum("5000~10000", 5000, "5000~10000"));
// 範圍字串 + 數字 + 範圍字串 15000~25000
console.log(insuranceSum(1000, 2000, 3000));
// 數字 + 數字 + 數字 6000
console.log(insuranceSum(1000, 2000, "5000~10000"));
// 數字 + 數字 + 範圍字串 8000~13000
console.log(insuranceSum("5000~10000", "5000~10000", 5000));
// 範圍字串 + 範圍字串 + 數字 15000~25000
console.log(insuranceSum("5000~10000", "5000~10000", "5000~10000"));
// 範圍字串 + 範圍字串 + 範圍字串 15000~30000

// More homework 2
// Write a function that accpets an array:
function sumStrinOrNumber(numbers) {
  let total = 0;
  for (const number of numbers) {
    total = insuranceAdd(total, number);
  }
  return total;
}

let result = sumStrinOrNumber([
  1000,
  "5000~10000",
  5000,
  "5000~10000",
  5000,
  "5000~10000",
]);

console.log(result);
console.log(typeof [5000, 10000]);
