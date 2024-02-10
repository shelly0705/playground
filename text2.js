//for 是一種迴圈的語法，用法是 for(定義變數;對變數的條件;變數動作)
//print "i love you" 5 times.
for (let i = 0; i < 5; i++) {
  console.log("i love you");
}

//for
for (let i = 5; i > 0; i--) {
  console.log(i);
}

//while ,while 的用法是 while(條件) { 做事 }
let i = 4;
while (i > 0) {
  console.log(i);
  i--;
}

//for loop, count 1 to 100 ,and sum all.
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

//while loop, count 2 to 100 ,and sum all....2+3+...+100
let n = 2;
let allNum = 0;
while (n <= 100) {
  allNum += n;
  n++;
}
console.log(allNum);
console.log(n);
//我們必須把 sum 放在最一開始，也就是迴圈前面，這樣每回合才能使用 sum。
//如果 sum 沒有在開始迴圈前就先定義，而是在迴圈的每一個回合中才被定義的話，
//那麼當那個回合結束， sum 也就消失了，
//因為迴圈裡面的變數的生命只存在當下的回合。

//use break in for loop

function isAnswer() {
  let a = 0;
  for (; a <= 10; a++) {
    if (a === 5) {
      console.log(`迴圈${a}`);
      break;
    }
    console.log(`迴圈${a}`);
  }
  return a;
}
console.log(`answer is ${isAnswer()}`);

//use continue in for loop
function answerB() {
  let b = 0;
  for (; b < 6; b++) {
    if (b === 3) {
      continue;
    }
    console.log(`迴圈${b}`);
  }
  return b;
  
}
console.log(`結束迴圈b = ${answerB()}`);

for(j = 1; j < 10; j++) {
  
}
