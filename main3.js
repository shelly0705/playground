// Example - make a function `createCat`
function createCat(color, size, age) {
  return {
    color: color,
    size: size,
    age: age,
    fullName: `${size} ${color} cat`,
  };
}

function catIntroduce(cat) {
  console.log(`I'm a ${cat.fullName}. I'm ${cat.age} years old.`);
}

const cat = createCat("yellow", "small", 3);
catIntroduce(cat);
