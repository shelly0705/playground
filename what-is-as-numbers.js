// Our target
function asNumbers(s) {
  //' 5000 ~ 10000 '
  return s.split("~").map((value) => parseInt(value.trim()));
}
[5000, 10000];

function mySplit(string, separator) {
  const separated = [];
  let gotChars = "";

  for (const char of string) {
    if (char === separator) {
      separated.push(gotChars);
      gotChars = "";
    } else {
      gotChars += char;
    }
  }

  if (gotChars !== "") {
    separated.push(gotChars);
  }

  return separated;
}
console.log(`My split: ${mySplit("123~456~789", "~")}`);

console.log(`JS split: ${"123~456~789".split("~")}`);

// '   abc   ' -> 'abc'
// ' def' -> 'def'
// 'apple    ' -> 'apple'
function myTrim(string) {
  // 去除前後空格
  let startIndex = 0;
  let endIndex = string.length - 1;

  while (startIndex < string.length && /\s/.test(string[startIndex])) {
    startIndex++;
  }
  while (endIndex >= 0 && /\s/.test(string[endIndex])) {
    endIndex--;
  }
  let trimmedString = string.substring(startIndex, endIndex + 1);
  return trimmedString;
}

let exampleString= ("  5000 ~ 10000  ");
console.log(myTrim(exampleString));
