// 把數字以及字串改成方便我們操作的長度 2 Array
function asNumPair(value) {
  if (typeof value === "number") {
    return [value, value];
  } else {
    return value.split("~").map((value) => parseInt(value.trim()));
  }
}

// 主要的相加函數只處理“相加”邏輯，不處理值的轉換
function _add(a, b) {
  let min = a[0] + b[0];
  let max = a[1] + b[1];
  let result = [min, max];
  return result;
}

// 要輸出給人看的時候，轉成方便閱讀的格式
// 固定數字比如 [100, 100] 轉換成 '100'
// 範圍比如 [50, 150] 轉換成 `'50 ~ 150'`
function prettify(numPair) {
  a = numPair[0];
  b = numPair[1];
  if (a === b) {
    return a;
  } else {
    return `${a} ~ ${b}`;
  }
}

// 有了這些函數我們可以輕易組裝出一個 `sum`
function _sum(pairs) {
  let total = [0, 0];
  for (const pair of pairs) {
    total = _add(total, pair);
  }
  return total;
}

// 我們的 add 和 sum 運作很正確，但是不能處理複雜的輸入，不能輸出很好閱讀的輸出
console.log(_add([500, 500], [500, 1000])); // [1000, 1500]
console.log(
  _sum([
    [500, 500],
    [500, 1000],
    [1000, 2000],
  ])
); // [2000, 3500]

// 如果要讓他們能處理各種輸入及輸出的話，我們需要呼叫在前後做 `asNumberPair` 和 `prettify` 的處理
let values = [500, "500~1000", "1000~2000"];
// 這邊也可以用一個 for 迴圈做，但我們順便用 map 練習一下
let numberPairs = values.map(asNumPair);
let result = _sum(numberPairs);
console.log(prettify(result)); // `'2000~3500'`

// 如果覺得每次呼叫都要在前後多處理這幾步，也可以再做一個 function 來做這些麻煩事
function sum(values) {
  let numberPairs = values.map(asNumPair);
  let result = _sum(numberPairs);
  return prettify(result);
}

// 這樣我們就可以直接呼叫這個新的 `sum` 了
console.log(sum([500, "500~1000", "1000~2000"])); // `'2000~3500'`

// 經由這些改寫之後，我們每個函數做的事情都很簡單，日後很容易修改、閱讀：
// - `asNumPair` 負責把數字和字串統一改成 [number, number] 的格式，方便我們計算
// - `_add` 把兩個 number pairs (長度 2 的數字 array) 相加
// - `_sum` 把任意多的 number pairs 相加
// - `prettify` 把 [number, number] 變回好讀的 `100` 或 `'100~150'` (根據 a, b 是否相同)
// - `sum` 一個方便的包裝函數，幫我們在 _sum 的前後呼叫 `asNumPair` 和 `prettify`

// 思考題：你知道為什麼我們不再 `_add` 的函數體內直接呼叫 `asNumPair` 以及 `prettify` 嗎？
