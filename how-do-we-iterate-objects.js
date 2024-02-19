// When we iterate an array
const arr = [1, 2, 3, 4, 5];
for (const item of arr) {
  console.log(item); // 1 2 3 4 5
}

// An object has many key-value pairs, so we can't simply iterate through it like this
// Instead, we need to iterate via its keys
const obj = { apple: 2, banana: 5 };
// Similar with iterate through an array `['apple', 'banana']`
for (const key of Object.keys(obj)) {
  // We can get the value later very easily
  const value = obj[key];
  console.log(`key=${key}, value=${value}`);
}

for (const value of Object.values(obj)) {
  console.log(`value=${value}`);
}

// `[['apple', 2], ['banana', 5]]`
for (const entry of Object.entries(obj)) {
  const key = entry[0];
  const value = entry[1];
  console.log(`key=${key}, value=${value}`);
}

// More clever
for (const [key, value] of Object.entries(obj)) {
  console.log(`key=${key}, value=${value}`);
}

