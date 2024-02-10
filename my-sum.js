function asNumbers(s) {
  return s.split("~").map((value) => parseInt(value.trim()));
}

function mySplit(string, separator) {
  const separatedStrings = [];
  for (const char of string) {
    console.log(char);
  }
}

function add1(a, b) {
  let rangeValuesb = asNumbers(b);
  let min = a + rangeValuesb[0];
  let max = a + rangeValuesb[1];
  let result = `${min} ~ ${max}`;
  return result;
}

function add2(a, b) {
  let rangeValuesa = asNumbers(a);
  let min1 = rangeValuesa[0] + b;
  let max1 = rangeValuesa[1] + b;
  let result1 = `${min1} ~ ${max1}`;
  return result1;
}

function add3(a, b) {
  return a + b;
}

function add4(a, b) {
  let rangeValuesa = asNumbers(a);
  let rangeValuesb = asNumbers(b);
  let min = rangeValuesa[0] + rangeValuesb[0];
  let max = rangeValuesa[1] + rangeValuesb[1];
  let result = `${min} ~ ${max}`;
  return result;
}

function addStringOrNumber(a, b) {
  if (typeof a === "number" && typeof b === "string") {
    return add1(a, b);
  } else if (typeof a === "string" && typeof b === "number") {
    return add2(a, b);
  } else if (typeof a === "number" && typeof b === "number") {
    return add3(a, b);
  } else {
    return add4(a, b);
  }
}

function sumStringOrNumber(numbers) {
  let total = 0;
  for (const number of numbers) {
    total = addStringOrNumber(total, number);
  }
  return total;
}

let result = sumStringOrNumber([
  1000,
  "5000~10000",
  5000,
  "5000~10000",
  5000,
  "5000~10000",
]);

console.log(result);
