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


