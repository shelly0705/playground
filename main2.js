// 4 - Practice `array.map`
// Example:

function adjustScore(score) {
    if (score >= 50 && score < 60) {
      return 60;
    } else {
      return score;
    }
  }
  
  print(adjustScore(40)); // 40
  print(adjustScore(50)); // 60
  print(adjustScore(70)); // 70
  
  function adjustScores(scores) {
    return scores.map(adjustScore);
  }
  
  print(adjustScores([40, 50, 70])); // [40, 60, 70]
  
  // 4.1 - Make a `isScoreQualified` function that:
  // 50 -> false
  // 60 -> true
  // 70 -> true
  
  // function isScoreQualified(score) {
  // }
  
  // 4.2 - Make a `isScoresQualified` function that:
  // [50, 60, 70] -> [false, true, true]
  // Note: you should use `map`
  
  // 5 - [HARD!] make a `isAdjustedScoreQualified` function that:
  // 50 -> true
  // 60 -> true
  // 5.1 - [HARD!] make a `isAdjustedScoresQualified` function
  // [40, 50, 70] -> [false, true, true]
  // Note: you should use `map`
  // Hint: `map` also return an array, that can apply `map` again!
  // For example:
  
  const myArray = [1, 2, 3];
  const myNewArray = myArray.map((n) => n + 1).map((n) => n * 2);
  print(myNewArray); // [4,6,8]
  
  // If all the above is done
  // Try to implement `myMap` with for loop (HARD!)
  // For example:
  
  function myFilter(array, checker) {
    const newArray = [];
    for (const item of array) {
      if (checker(item)) {
        newArray.push(item);
      }
    }
    return newArray;
  }
  
  const yourArray = [1, 2, 3, 4, 5];
  print(yourArray.filter(isOdd)); // [1, 3, 5]
  print(myFilter(yourArray, isOdd)); // [1, 3, 5]
  