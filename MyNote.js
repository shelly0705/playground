  //array 陣列
  var myArray = ['a', 'b', 'c', 'd'];
  console.log(myArray); //[ 'a', 'b', 'c', 'd' ]
    //index 索引
  console.log(myArray[1]); //b
   //長度為4個 value
  console.log(myArray.length); //4
    //pop 取出最後的value
  console.log(myArray.pop()); //d
  console.log(myArray); //[ 'a', 'b', 'c' ]
  console.log(myArray.length); //3
  console.log(myArray.push('z')); //4
  console.log(myArray); //[ 'a', 'b', 'c', 'z' ]

  
  //var.forEach(functiom(item, index) {
  //  console.log(...)
  const array1 = ['a', 'b', 'c'];
  array1.forEach(function(element){
    console.log(element);
  })
