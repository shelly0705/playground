  // 數字 + 陣列
  function add1(a, [b,c]) {
    return [a+b, a+c];
  }
  console.log(add1(1000,[2000,3000]));
  
  // 陣列 + 數字
  function add2([a,b], c) {
    return [a+c, b+c];
  }
  console.log(add2([2000,3000], 1000));
  
  // 數字 + 數字
  function add3(a, b) {
    return a + b;
  }
  console.log(add3(2000, 1000));

  // 陣列 + 陣列
  function add4([a, b], [c, d]) {
    return [a+c, b+d];
  }
  console.log(add4([2000,3000], [2000,3000]));
  
  function insuranceAdd(a, b) {
    // let x = typeof a;
    // let y = typeof b;
    // console.log(`typeof x = ${x}, typeof y = ${y}`);
    if (typeof a === "number" && typeof b === "object") {
      return add1(a, b);
    } else if (typeof a === "object" && typeof b === "number") {
      return add2(a, b);
    } else if (typeof a === "number" && typeof b === "number") {
      return add3(a, b);
    } else {
      return add4(a, b);
    }
  }
  
  console.log(insuranceAdd(5000, [5000, 10000]));
  console.log(insuranceAdd([5000, 10000], 5000));
  console.log(insuranceAdd(5000, 5000));
  console.log(insuranceAdd([5000, 10000], [5000, 10000]));
  
  
  // More homework 1
  function insuranceSum(a, b, c) {
    let d = insuranceAdd(a, b); //
    if (typeof c === "object") {
      if (typeof d === "object") {
        // 數字 + 範圍字串 + 數字
        
        let min1 = d[0] + c[0];
        let max1 = d[1] + c[1];
        let result1 = [min1, max1];
        return result1;
      } else {
        let min2 = d + c[0];
        let max2 = d + c[1];
        let result2 = [min2, max2];
        return result2;
      }
    } else if (typeof d === "object") {
      // 數字 + 範圍字串 + 數字
      let min3 = d[0] + c;
      let max3 = d[1] + c;
      let result3 = [min3, max3];
      return result3;
    } else {
      return d + c;
    }
  }

  function insuranceSumThree(a, b, c) {
    return insuranceAdd(insuranceAdd(a, b), c);
  }
  console.log(insuranceSumThree(1000, [5000, 10000], 5000));
  
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
  console.log(insuranceSumMore(1000, [5000, 10000], 5000, [5000, 10000]));
  
  function insuranceSumMore_(a, b, c, d, e) {
    let total = 0;
    total = insuranceAdd(total, a);
    total = insuranceAdd(total, b);
    total = insuranceAdd(total, c);
    total = insuranceAdd(total, d);
    total = insuranceAdd(total, e);
    return total;
  }
  console.log(insuranceSumMore_(1000, [5000, 10000], 5000, [5000, 10000], 5000));
  
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
    insuranceSumMore__(1000, [5000, 10000], 5000, [5000, 10000], 5000, [5000, 10000])
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
      [5000, 10000],
      5000,
      [5000, 10000],
      5000,
      [5000, 10000],
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
      [5000, 10000],
      5000,
      [5000, 10000],
      5000,
      [5000, 10000],
      5000,
      [5000, 10000]
    )
  );
  
  console.log(insuranceSum(1000, [5000, 10000], 5000));
  // 數字 + 範圍字串 + 數字  11000~16000
  console.log(insuranceSum(1000, [5000, 10000], [5000, 10000]));
  // 數字 + 範圍字串 + 範圍字串 11000~21000
  console.log(insuranceSum([5000, 10000], 5000, 5000));
  // 範圍字串 + 數字 + 數字 15000~20000
  console.log(insuranceSum([5000, 10000], 5000, [5000, 10000]));
  // 範圍字串 + 數字 + 範圍字串 15000~25000
  console.log(insuranceSum(1000, 2000, 3000));
  // 數字 + 數字 + 數字 6000
  console.log(insuranceSum(1000, 2000, [5000, 10000]));
  // 數字 + 數字 + 範圍字串 8000~13000
  console.log(insuranceSum([5000, 10000], [5000, 10000], 5000));
  // 範圍字串 + 範圍字串 + 數字 15000~25000
  console.log(insuranceSum([5000, 10000], [5000, 10000], [5000, 10000]));
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
    [5000, 10000],
    5000,
    [5000, 10000],
    5000,
    [5000, 10000],
  ]);
  
  console.log(result);
  