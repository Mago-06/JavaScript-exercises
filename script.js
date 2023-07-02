/* Übung1 

console.log("Hello World");

*/

//Übung2
//Aufgabe 1
//console.log("M" + "a" + "g" + "o" + "m" + "e" + "d")

//Aufgabe 2
// Error! Make it work
/*
console.log("Hallo");
// Error! Make it work
console.log("That doesn`t work");
// should return true. Change only the operator to fix it.
console.log(50 + 2 >= 52);
// should be false. Change only the operator to fix it.
console.log("333" === 333);
// Wrong result: Expected 555 not 855. Change only the operator to fix it.
console.log((600 + 510) / 2);
// Wrong result: Expected a Number 4 received 22
console.log(2 + 2);
*/

//Aufgabe 3

//console.log(25 / 5 == 50 / 10); // Result: 5

//Uebung3
//Aufgabe1
/*

function welcomeMsg(name) {
  return "Welcome " + name + "!";
}

console.log(welcomeMsg("Marc"));
*/

//Aufgabe2

/*
function calcGrossPrice(price, taxe) {
  return price * (1 + taxe);
}

console.log(calcGrossPrice(20, 0.19));
onsole.log(calcGrossPrice(40, 0.16));

*/

// Aufgabe 3
/*'
function addPositive(a, b) {
  if (a < 0) {
    a = a * -1;
  }
  if (b < 0) {
    b = b * -1;
  }

  return a + b;
}

console.log(addPositive(2, 3));
// result1 should be 5

console.log(addPositive(3, -5));
// result2 should be 8

console.log(addPositive(-1, -8));
// result2 should be 9

console.log(addPositive(5, 6));
// result should be 11

*/

//Uebung 4

//Aufgabe1
/*
let userName = "Brad";
userName = "Jenna";

function getUserNameLength(userName) {
  return userName.length;
}

console.log(getUserNameLength(userName) > 4);
*/

//Aufgabe2

/*

const isString = function (item) {
  if (typeof item === "string") {
    // string klein schreiben!!!!!
    console.log(true);
  } else {
    console.log(false);
  }

  return;

  //Alternativ: return typeof item === "string" -> Ohne If Statements
};

console.log(isString("Hello"));
// result should be true

console.log(isString(3));
// result should be false

console.log(isString(undefined));
// result should be false

console.log(isString(""));
// result should be true

console.log(isString("John" + "Doe"));
// result should be true
*/

//Uebung 5

//Aufgabe 1
/*
const size = 25;
let result;

if (size > 20) {                      //Reihenfolge ist bei den If Statatemens wichtig!
  result = "Greater than 20";
} else if (size > 10) {
  result = "Greater than 10";
} else {
  result = "Lower than 10";
}

console.log(result);
*/

//Aufgabe 2
/*
function oddEven(a) {
  let result = "";
  if (a % 2 === 0) {
    //modulus operator (%) -> Checkt, ob Rest übrig bleibt!
    result = "even";
  } else {
    result = "odd";
  }
  return result;
}
console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even
*/

//Aufgabe3

/*
function oldYoung(age) {
  let result;
  if (age < 0 || typeof age !== "number") {
    result = "invalid parameter";
  } else if (age < 16) {
    result = "children";
  } else if (age < 50) {
    result = "young person";
  } else {
    result = "elder person";
  }

  return result;
}

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person
*/

//Uebung 5
//Aufgabe 1

/*
function oddNumbers(num1, num2) {
  let result = "";
  for (let i = num1; i <= num2; i++)
    if (i % 2 !== 0) {
      result += i + ","; // result = result + i + "," (String + Number = String)
    }
  return result;
}

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11
*/

//Aufgabe 2
/*
function charCount(word, char) {
  if (char.length !== 1) {
    console.log("Invalid parameter");
    return;
  }

  let result = 0;

  for (let i = 0; i < word.length; i++) {
    const currentLetter = word[i].toLowerCase();
    char = char.toLowerCase();
    if (currentLetter === char) {
      //Alternativ "toLowerCase direkt in die If-Bedingung"
      result++;
    }
  }

  return result;
}

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
*/

//Uebung 7
// Aufgabe 1

/*
const ainmals = ["Dog", "Cat", "Lion"];

function removeItem(erray, num) {
  const result = [];
  num = num - 1;

  for (i = 0; i < erray.length; i++) {
    if (i !== num) {
      result.push(erray[i]);
    }
  }

  return result;
}

console.log(removeItem(ainmals, 1));
*/

//Aufgabe2

//const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];

function sumOfCharacters(arr) {
  let result = 0;

  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      //typeof nicht vergessen, sonst keine Prüfung!
      //typeof nicht vergessen!
      result = result + arr[i].length; // Wohin soll gespeichert werden? In Result, deshalb "Result=....
    }
  }
  return result;
}

//console.log(sumOfCharacters(arr1));
console.log(sumOfCharacters(arr2));
