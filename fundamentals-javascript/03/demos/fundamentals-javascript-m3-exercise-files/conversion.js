//Using the typeof function
let strValue = "Hi";
console.log(typeof(strValue));
let numValue = 1;
console.log(typeof(numValue));
let boolValue = true;
console.log(typeof(boolValue));

// Joining a non-string value with a string 
let age = 21;
let firstName = "Jaiden";
let description = `${firstName} is ${age} years old`;
console.log(description);

// Converting a string to a number 

let ageString = "21";
let ageNum = Number(ageString);
console.log(typeof(ageNum));

// What about NaN
let ageString2 = "twenty-one";
let ageNum2 = Number(ageString2);
console.log(`Age String 2: ${ageNum2}`);

// Converting a value to a boolean

let num1 = 1; 
let num2 = 20; 
let bool1 = Boolean(num1);
let bool2 = Boolean(num2);
console.log(`Num1: ${num1} Num2: ${num2}`);

let str1 = "Hello";
let bool3 = Boolean(str1);
let val1;
let bool4 = Boolean(val1);
console.log(`Bool 3: ${bool3} Bool 4: ${val1}`);

//Converting a boolean to a string (we've been doing this)
let bool5 = true;
console.log(`Bool 5: ${bool5}`);


