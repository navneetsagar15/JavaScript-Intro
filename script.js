
// // types of printing statement 

// console.log("External JS")

// // DOCUMENT will display on the webpage
// // writeln provied space after execution 
// document.writeln("by writeln")

// document.writeln("<i>Hello</i>")


// deprecated
// document.write("World")
// document.writeln("Hello")

// document.write("World")
// document.write("World")

// TOKENS : Smallest unit of any progaramming lang

/*

There are four types of Tokens

1. Keywords- reserved words(var, let, const, if else, return)
2. Identifiers- name given to any class or variables,etc (have specifics identifiers rules and all)
3. Literals / Values- a value stored in the variables
4. Operators- To perform operations between two and more operands. (a-b, etc)

---
var name = "abc";

*/

/*
Two types of Datatypes--

1- Primitive   -- Immutable

---There are seven types-
i.    number       
ii.   string
iii.  boolean
iv.   undefined
v.    null
vi.   bigInt
vii.  Symbol
    
2- Non-Primitve   -- Mutable

---There are three types
i. Array
ii. object
iii. function
  */
 
// MUTABLE AND IMMUTABLE EXAMPLE

// var str = "HELLO";
// str[0]= "X";

// console.log(str);
// console.log(str[0] = "X");


// var arr = [10,20,30,40,50]

// mutable can change 

// arr[0] = 100

// console.log(arr);

// PRIMITIVE DATA TYPE 

// var n1 = 10.123;
// console.log(n1);  //10.123
// console.log(typeof(n1));  //number

// var n2 = "Hello"
// var n3 = 'World'

// console.log(n2,n3);   // Hello World

// console.log(typeof n2);   // string

// BACKTICKS ``
// using `` we can write multi line string and we can join another string by using ${} 
// called STRING INTERPOLATION

// var n4 = `Hey!! Its under backticks
// this is second line using this ${n3} ` + n2     // can be used for multiple lines

// console.log(n4);
// console.log("datatype is",typeof n4);

//BOOLEAN
// var n5 = true
// console.log(n5);
// console.log("dataype is",typeof n5);

// console.log("dataype of- typeof function is-",typeof typeof typeof n5);   // string-- any multiple typeof datatype will be string

// var n6 
// var u6 = undefined    // forget to initialize the value, JSEngine will provide Undefined automatically
// console.log(n6, u6);
// console.log("datatype is", typeof n6, typeof u6);

// var n7 = null;    // intentionally we want to empty the value
// console.log(n7, typeof n7);

//BIGINT

// var n8 = 927534987230438509843987589437590n         // put n after a BIG integer

// console.log(n8, typeof n8);

//COMAPARISON OPERATOR

// console.log(10 == '10');
// console.log(10 === '10');

// var n9 = Symbol("hello")
// var n10 = Symbol("hello")

// console.log(n9 == n10);   // in symbol, every data is different, can't be same to other
// console.log(n9 === n10);  // both data and data type will be compared


//! INITIALIZATION OF VARIABLE

// /**
//                                           VAR               LET                 CONST
//     DECLARE                               ✅                ✅                   ❌
//     INITIALZE                             ✅                ✅                   ❌
//     DECLARE & INITIALIZE                  ✅                ✅                   ✅
//     RE-DECLARE                            ✅                ❌                   ❌
//     RE-INITIALIZE                         ✅                ✅                   ❌
//     RE-DECLARE AND REINITTIALIZE          ✅                ❌                   ❌
//     HOISTING(UNDEFINED)
//     TDZ-Temporal dead zone
//  */


//! VAR, LET AND CONST DIFFERENCE
  // EXAMPLE

//     var a;
//     console.log(a);   //ud

//     a = 10;
//     console.log(a);   //10

//     var b = 20;
//     console.log(b);   //20

//     var b;

    //! HOISTING: moving declaration part at the top of the original ode internally

    // var a = undefined;  ------take below declaration at the top;
    // console.log(a);
    // var a = 10;

    // console.log(a);

    // var b  

    // console.log(b);

    //!TDZ-- temporal dead zone-- the time period between accessing let and const variable before declaration

    // let also have hoisting but JSEngine does not assign undefined to it, value will be unavailable and throws error 
    // console.log(c);   //error-- cannot acces c before initialization
    // let c = 20;

    // console.log(c);     //20

    // let d           // JSEngine now assign undefined, not before

    
    //! GEC- GLOBAL EXECUTION CONTEXT

    // debugger;

    // console.log("Starts");    
    // console.log(a);
    // var a = 10;
    // console.log(a);
    // let b;
    // console.log(b);
    // b = 20;
    // const c = 100;
    // console.log(c);
    // console.log("End");

    //! TYPES OF VARIABLE 

    //* 1. GLOBAL VARIABLE

//     var a = 10;     //GLOBAL    -- DUE TO HOISTING
//     let b = 20;     // SCRIPT SCOPE   --DUE TO TDZ
//     const c = 30;   // SCRIPT SCOPE   --DUE TO TDZ

//     if(100>2){
//       console.log(a,b,c);
//     }
    
// for(let i = 0; i < 5; i++){
//   console.log(a,b,c, i);
// }

// function demo1(){
//   console.log("Demo program " + a ,b ,c);
// }

// demo1()
    

//* 2. LOCAL VARIABLE  :- VARIABLES WHICH CAN BE ACCESED WITHIN THE BLOCK

/**
 //*                                    CONDITIONAL/LOOP                                   FUNCTION
 VAR                                GLOBAL VARIBLE/ GLOBAL SCOPE                    LOCAL VARIABLE / LOCAL SCOPE
 LET                                LOCAL VARIABLE / BLOCK SCOPE                    LOCAL VARIABLE / LOCAL SCOPE
 CONST                              LOCAL VARIABLE / BLOCK SCOPE                    LOCAL VARIABLE / LOCAL SCOPE
 */

//  if we can acces any of the variable before initialization, called hoisting. if not then its called TDZ


// debugger;

// if(100>2){
//   var x = 10;   //GLOBAL VARIABLE  - GLOBAL SCOPE
//   let y = 20;   // LOCAL VARIABLE  - BLOCK SCOPE
//   const z = 30; // LOCAL VARIABLE  - BLOCK SCOPE
// }

// console.log(x);   // 10
// console.log(y);   // Uncaught ReferenceError: y is not defined


// for(let i = 0; i < 5; i++ ){
//   console.log(i);
// }

//!  NOTE-- var variable are also known as function scope variable because it acts like local variable within a function

  // function demo2(){
  //   var m = 100;          // LOCAL VARIABLE   -- LOCAL SCOPE
  //   let n = 200;          // LOCAL VARIABLE   -- LOCAL SCOPE
  //   const o = 300;        // LOCAL VARIABLE   -- LOCAL SCOPE
  // }

  // demo2();
  // console.log(m);   //Uncaught ReferenceError: M is not defined


  //!   FUNCTION

  //*   TYPES OF FUNCTION  -- 10 TYPES

  //* 1- NAMED FUNCTION : a function which has name
  // !    NOTE--  only named function can call before declaration due to function hoisting.


  // debugger;

  // greet();

  // function Hoisting
  // function greet(){
  //   console.log("Namste");
  // }

  // greet();

  // debugger;

  // console.log("Starts");

  // var a;
  // console.log(a);
  // fun();

  // a = 10;

  // console.log(fun);

  // function fun(){
  //   str = "Hello";
  //   console.log(str);
  // }

  // console.log(fun);

  // fun();

  // console.log("End");

  // let q;
  // console.log(q);



//   //! 4. PARAMETERIZED FUNCTION






// //TAKING INPUT FROM FUNCTION

// function printFullName(firstName, lastName, age){
//   console.log(`My name is ${firstName} ${lastName}`);
//   console.log(`My age is ${age} `);
//   console.log(typeof age);

// }

// let firstNameInput = prompt("Enter Firstname");
// let lastNameInput = prompt("Enter Lastname");
// let ageInput = parseInt(prompt("Enter Age"));


// printFullName(firstNameInput, lastNameInput, ageInput);



//! 5. RETURN TYPE FUNCTION

//* FOR BASIC RETURN AS A EMAIL OR FIRSTNAME
// function getEmail(fname, lname){
//   let fullName = `${fname} ${lname}`;
//   let email = `${fname}.${lname}@gmail.com`;

//   return email;
// }

//* IF RETURN MPORE THAN ONE VALUE IN RETURN STATEMENT, THEN THE LAST RETURNED VALUE WILL BE VALID

// function getEmail(fname, lname){
//   let fullName = `${fname} ${lname}`;
//   let email = `${fname}.${lname}@gmail.com`;

//   return email, fullName;
// }

// function getEmail(fname, lname){
//   let fullName = `${fname} ${lname}`;
//   let email = `${fname}.${lname}@gmail.com`;

//   return [fullName, email];
// }

// let value = getEmail("john", "doe");

// console.log(value);

// console.log(value[0]);
// console.log(value[1]);


//! 6. NESTED FUNCTION


// debugger;
// function parent(){
//   console.log("I am Parent");

//   function Child(){
//     console.log("I am Child");
//   }

//   Child();
//   }

//   parent();



//! 9. IMMEDIATELY INVOKED FUNCTION EXPRESSION  (IIFE)

// let x = (function (){
//   console.log("I am IIFE");
//   return "Hii";

// })();     //if last parenthesis removed then the whole function will be called in variable.

// console.log(x);   // IIFE return value stored in this variable

// function demo(){

// }

//! 10. CONSTRUCTOR FUNCTION : used to create objects

//! OBJECTS- It is used to store multiple data in the form of key and value pairs.

// 3 ways to create OBJECT

  //* 1. Object Literals
//     const obj1 = {
//       id: 1,
//       fname: "John",
//     };

//     console.log(obj1);

//   //* 2. Object Constructor
//   const obj2 = new Object({
//     id : 2,
//     fname : "Jenne",
//   });
//   console.log(obj2);

//   //* 3. Constructor Function

//   class Student {
//   constructor(id, fname) {
//     this.id = id;
//     this.fname = fname;

//   }
// }
 
//same as above
  // function Student(id,fname){
  //   this.id = id;
  //   this.fname = fname;

  // }

//   let s1 = new Student(1, "James");

//   console.log(s1);

//   let s2 = new Student(3, "Robb");

//   console.log(s2);

//   //! CRUD WITH OBJECT


//   //!  CREATE
//   const obj = {
//     id : 1,
//     fname : "John",
//     lname : "Doe",
//     age : 25,
//     company : "NA",
//   };

//   console.log(obj);

//   //!  READ
//   // there are two ways to read

//   // 1. Using dot operator

//   console.log(obj.fname);

//   // 2. using Square Bracket

//   let x = "lname";
  
//   console.log(obj["age"]);    //25

//   console.log(obj[x]);    //Doe


//   //* forLoop

//   let arr = [10,30,50,70,90];

//   for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
//   }

//   //* for in

//   for(let i in obj){
//     console.log(i, obj[i]);
//   }

//   //! UPDATE

//   obj.company = "TCS";

//   console.log(obj);

//   //* ADD NEW KEY

//   obj.salary = 6000;

//   console.log(obj);

// //! DELETE

// delete obj.salary
// console.log(obj);


//! ONJECT METHODS

let obj = {
  id : 1,
  ename : "John Doe",
};

//* 1. object.keys()

let keys = Object.keys(obj);
console.log(keys);   //["id", "ename"]

//* 2. object.values()

let values = Object.values(obj);
console.log(values);    // [1, "John Doe"]

//* 3. object.entries()

let keyAndValue = Object.entries(obj)
console.log(keyAndValue);   //[ ["id", 1], ["ename", "John Doe"]]

//* 4. object.fromEntries()

let newObj = Object.fromEntries(keyAndValue);
console.log(newObj);    // {id: 1, ename: 'John Doe'}


















