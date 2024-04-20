

// let obj1 = {};


// let obj2 = new Object();

// obj1.firstName = 'Jaiden'; 
// obj1.lastName = 'Lewis';
// obj1.isActive = true; 
// obj1.startDate = new Date("April 15, 2024");
// obj1.vactionDays = 14;
// console.log(obj1);


// Populating an Object on creation with object literal syntax

let obj3 = {
    firstName: "Jaiden", 
    lastName: "Lewis",
    isActive: true, 
    startDate: new Date("April 15, 2024"),
    vactionDays: 14,
};
console.log(obj3);

//Accessing properties from an object 

console.log(`first Name: ${obj3.firstName}`);
console.log(`last Name: ${obj3["lastName"]}`); 

// Deleting propeties form a object 
delete obj3.firstName;
console.log(obj3);

// Accessing a property that dosen't exiest

console.log(`Non-existent value: ${obj3.middleName}`);

// Objects are passed by reference, not value 
let obj4 = obj3;
obj4.lastName = "Smith";
console.log(`Last Name: ${obj3.lastName}`);