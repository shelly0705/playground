// Write 20 functions that use 1.) if-else or 2.) for-loop 3.) forEach 4.) map 5.) filter inside of it
// Like:
// function isAdult(age) {...}
function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log(isAdult(18));

function isAllAdults(ages) {
  for (const age of ages) {
    if (!isAdult(age)) {
      return false;
    }
  }
  return true;
}
console.log(isAllAdults([18, 19, 20]));
console.log(isAllAdults([18, 17, 16]));

// function isAllAdults(ages) {...}
function isAllAdults(ages) {
  for (const age of ages) {
    if (age < 18) {
      return false;
    }
  }
  return true;
}

console.log(isAllAdults([18, 19, 20]));
console.log(isAllAdults([18, 17, 16]));

function isAllAdults2(ages) {
  for (const age of ages) {
    if (!isAdult(age)) {
      return false;
    }
  }
  return true;
}
console.log(isAllAdults2([18, 19, 20]));
console.log(isAllAdults2([18, 17, 16]));

// function isChild(age) {...}
function isChild(age) {
  if (age < 18) {
    return true;
  } else {
    return false;
  }
}

function isChild2(age) {
  if (!isAdult(age)) {
    return true;
  } else {
    return false;
  }
}

function isChild3(age) {
  if (isAdult(age)) {
    return false;
  } else {
    return true;
  }
}

function isChild4(age) {
  return !isAdult(age);
}

console.log(isChild(20));
console.log(isChild2(17));
console.log(isChild3(15));
console.log(isChild4(19));

// function isAnyChild(ages) {...}
function isAnyChild(ages) {
  for (const age of ages) {
    if (!isAdult(age)) {
      return true;
    }
  }
  return false;
}

function isAnyChild1(ages) {
  for (const age of ages) {
    if (isChild(age)) {
      return true;
    }
  }
  return false;
}

function isAnyChild2(ages) {
  return !isAllAdults(ages);
}

console.log(isAnyChild([8, 10, 18]));
console.log(isAnyChild1([8, 9, 10]));
console.log(isAnyChild2([20, 30, 40]));

// function countAdults(age) {...} (e.g. console.log(countAdults([13, 19]))) // print `1`)
function countAdults(ages) {
  let num = 0;
  for (const age of ages) {
    if (age >= 18) {
      num++;
    }
  }
  return num;
}

console.log(countAdults([13, 19]));
console.log(countAdults([13, 19, 20, 21]));

// function hasExactlyTwoAdults(age) {...}
function hasExactlyTwoAdults(ages) {
  if (countAdults(ages) === 2) {
    return true;
  } else {
    return false;
  }
}

console.log(hasExactlyTwoAdults([13, 19]));
console.log(hasExactlyTwoAdults([13, 20, 21]));
