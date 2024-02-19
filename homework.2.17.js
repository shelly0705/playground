let family = {
  mom: "Mary",
  dad: "Bob",
  kids: ["join", "tom", "Kate"],
  pets: { cats: 8, dogs: 7, pigs: 2, cows: 4 },
  houseLoan: false,
};

console.log(family);

//練習題 1: 家庭成員的數量
//三元運算符
//count += family.mom ? 1 : 0;
//如果`family`物件中有``mom`屬性,(即 family.mom 不為 undefined 或 null 或 false）,
//則表達式的值為 1，否則為 0。

function countFamilyMembers(family) {
  let count = 0;
  count += family.mom ? 1 : 0;
  count += family.dad ? 1 : 0;

  count += family.kids ? family.kids.length : 0;

  for (const n of Object.values(family.pets)) {
    count += n;
  }

  return count;
}
console.log(countFamilyMembers(family)); // 26

//練習題 2: 獲取所有寵物的種類
function petsKinds(family) {
  return Object.keys(family.pets);
}
console.log(petsKinds(family));

//練習題 3: 是否有寵物
function haspets(family) {
  if (petsKinds(family).length !== 0) {
    return true;
  }
}
console.log(haspets(family));

//練習題 4: 獲取所有家庭成員的名字(不包含寵物)
function getPeopleNames(family) {
  const peopleNames = [];
  for (const key of Object.keys(family)) {
    // let someVar = 123;  // 賦值操作是一個陳述 (statement)
    // 當一個表達式為 `a || b || c`，先計算 a 的值，如果為 true (或 true-like) 此表達式記為 true
    // 否則計算 b 的值並記為此表達式的值
    const wanted = !(key === "pets" || key === "houseLoan");
    // let wanted = (key !== "pets" && key !== "houseLoan")
    const value = family[key];
    if (wanted) {
      if (Array.isArray(value)) {
        const names = value;
        for (const name of names) {
          peopleNames.push(name);
        }
      } else {
        peopleNames.push(value);
      }
    }
  }
  return peopleNames;
}
console.log(getPeopleNames(family));

//1.1 檢查是否有某個特定成員 編寫一個函式 hasFamilyMember，接受一個名字，並判斷這個名字是否為家庭成員。
//先把物件轉為所有家庭成員在內的物件
function hasFamilyMember(family, choseName) {
  for (let n of getPeopleNames(family)) {
    if (n === choseName) {
      return true;
    }
  }
  return false;
}
console.log(hasFamilyMember(family, "Bob"));
console.log(hasFamilyMember(family, "shelly"));

//1.2 判斷是否有房貸 編寫一個函式 hashouseLoan，判斷家庭是否有房貸。
function hashouseLoan(family) {
  return family.houseLoan === true;
}
console.log(hashouseLoan(family));

//2.1 求所有孩子名字的總長度 編寫一個函式 sumkidsNameLength，計算個別孩子名字長度,
function KidNameLength(family) {
  let kidLength = [];
  if (family.kids || Array.isArray(family.kids)) {
    for (let kid of family.kids) {
      kidLength.push(kid.length);
    }
  }
  return kidLength;
}
console.log(KidNameLength(family));

//2.2 所有孩子名字的總長度。
function sumkidNameLength(family) {
  let totalLength = 0;
  if (family.kids || Array.isArray(family.kids)) {
    for (let kid of family.kids) {
      totalLength += kid.length;
    }
  }
  return totalLength;
}
console.log(sumkidNameLength(family));

//3.1 將寵物轉換為陣列 編寫一個函式 convertpetssToArray，將寵物物件轉換為名字的陣列。
function convertpetssToArray(family) {
  if(family.pets) {
    return Object.keys(family.pets);
  } 
}
console.log(convertpetssToArray(family));


const nameToAge = { jimmy: 31, shelly: 26, name: "you dont want this" };

function getAge(nameToAge, name) {
  // wrong: nameToAge.name
  return nameToAge[name];
}

console.log(getAge(nameToAge, "jimmy")); // 31
console.log(getAge(nameToAge, "shelly")); // 26

