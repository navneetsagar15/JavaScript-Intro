
// types of printing statement 

// const { createElement } = require("react");

// console.log("External JS")

// DOCUMENT will display on the webpage
// writeln provied space after execution 

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

  //! 1- NAMED FUNCTION : a function which has name
  //*    NOTE--  only named function can call before declaration due to function hoisting.


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

  //! 2) ANONYMOUS FUNCTION : function without name
// function () {
//   console.log("I am Anonymous function");
// }

//! 3) FUNCTION EXPRESSION : its is used to call/invoke anonymous function

// console.log(f1);// ud
// // f1()

// var f1 = function () {
//   console.log("I am Anonymous function called by using Function expression");
// };
// console.log(f1);// it will print function with body
// f1() // it will call the function



//! 4. PARAMETERIZED FUNCTION

// function sum(n1 = 0, n2 = 0) {
//   console.log(n1 + n2);
// }
// sum(10, 20);
// sum();

// function demo1(n1, n2, n3, n4, n5) {
//   console.log(n1, n2, n3, n4, n5);
//   console.log(arguments);
// }
// // demo1(10, 20, 30, 40, 50);
// // demo1(10, 20);
// demo1(10, 20, 30, 40, 50, 60, 70, 80, 90);

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
  // there are two ways to read

  // 1. Using dot operator

//   console.log(obj.fname);

  // 2. using Square Bracket

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


//! OBJECT METHODS

// let obj = {
//   id : 1,
//   ename : "John Doe",
// };

// //* 1. object.keys()

// let keys = Object.keys(obj);
// console.log(keys);   //["id", "ename"]

// //* 2. object.values()

// let values = Object.values(obj);
// console.log(values);    // [1, "John Doe"]

// //* 3. object.entries()

// let keyAndValue = Object.entries(obj)
// console.log(keyAndValue);   //[ ["id", 1], ["ename", "John Doe"]]

// //* 4. object.fromEntries()

// let newObj = Object.fromEntries(keyAndValue);
// console.log(newObj);    // {id: 1, ename: 'John Doe'}



// let obj2 = {
//   id : 2,
//   name : {
//     firstName : "Jane",
//     lastName : "Doe",
//   },
//   hobbies : ["coding", "singing", "dancing"],
//   address : {
//     city : "Noida",
//     state : "UP",
//     pin : 876541,
//   },
// };

// console.log(obj2.name.firstName);     //jane
// console.log(obj2.hobbies[0]);         // coding
// console.log(obj2.address.state);    //  UP

//! OBJECT DESTRUCTURING

// let obj1 = {
//   id : 1,
//   // fname : "John",    // if not present in the object then it will show default described in the destructuring
//   lname : "Doe",
//   salary : 45000
// };


// let { fname = "NA"};       //* if no present in the object then "NA will be the default value"
// let { lname : lastName = "NA"};    //* if want to change the identifier(name) from lname to lastName

// let { fname = "NA", lname: lastName = "NA", salary = 0 } = obj1;    //*

// console.log(fname, lastName);
// console.log(salary);

// let obj2 = {
//   id : 2,
//   Name : {
//     firstName : "Jane",
//     lastName : "Doe",
//   },
//   hobbies : ["coding", "singing", "dancing"],
//   address : {
//     city : "Noida",
//     state : "UP",
//     pin : 876541,
//   },

//   details : {
//     id : "JaneQSP1",
//     course : "Java Full Stack",
//   }
// };

// //  id, firstName , coding, city, id, course


// let {
//   id,
//   Name : {firstName},
//   hobbies : [ , , h3],
//   address : {city},
//   details : {id : detailsID, course}
// } = obj2;

// console.log(id, firstName, h3, city,detailsID, course);


// //! ARRAY DESTRUCTURING

// let arr = [10,30,50,70,90];
// let [ , n1, , n2] = arr;

// console.log(n1, n2);




//! DESTRUCTURING TASK--

//* name, username, street, zipcode, lat, lng, companyName

// const user = {
//   id: 1,
//   name: "Leanne Graham",
//   username: "Bret",
//   email: "Sincere@april.biz",
//   address: {
//     street: "Kulas Light",
//     suite: "Apt. 556",
//     city: "Gwenborough",
//     zipcode: "92998-3874",
//     geo: {
//       lat: "-37.3159",
//       lng: "81.1496"
//     }
//   },
//   phone: "1-770-736-8031 x56442",
//   website: "hildegard.org",
//   company: {
//     name: "Romaguera-Crona",
//     catchPhrase: "Multi-layered client-server neural-net",
//     bs: "harness real-time e-markets"
//   }
// }

// // DESTRUCTURING OF USER OBJECT
// let {
//   name,
//   username,
//   address : {
//     street,
//     zipcode,
//     geo : {lat, lng}
//   },
//   company : {name: companyName},
// } = user; 

// console.log(window);    // global name as name in window object


//! THIS KEYWORD--"this"

// console.log(window);

// // window.prompt("hii");

// //window is the GLOBAL OBJECT, many fubctions and variables are present there.


// //! how to create your own Method-

// //* NOTE- DONT USE ARROW FUNCTION TO CREATE METHOD BCOZ "this" KEYWORD REFERS TO WINDOW OBJECT, AND ALSO NOT IN THE CONSTRUCTOR FUNCTION

// // all below represents window objects 
// console.log(this);
// let arr = this;
// console.log(arr);

// let student = {
//   id : 1,
//   fname : "John",
//   lname : "Doe",
//   x : this,


//   //HERE "this" KEYWORD REPRESENTS CURRENT OBJECT PROPERTIES
//   getFullName : function (){
//     console.log(`${this.fname} ${this.lname}`);
//   },

//   //HERE "this" KEYWORD REPRESENTS CURRENT OBJECT PROPERTIES
//   getEmail : function getEmail(){
//     console.log(`${this.fname}.${this.lname}@gmail.com`);
//   }
// };

// console.log(student.x);   // window object
// student.getFullName();
// student.getEmail();


//!  call(), apply() & bind()


// //* GLOBAL FUNCTION
// function getFullName(){
//   // console.log(this);
//     return `${this.firstname} ${this.lastname}`;
//   }

//   function getCourseDetails(sub1, sub2){
//     return `${this.course} includes ${sub1} ${sub2}`;

//   }

// let user1 = {
//   id : 1,
//   firstname : "John",
//   lastname : "Doe",
//   course : "Java Full Stack",

//   // getFullName(){
//   //   return `${this.firstname} ${this.lastname}`;
//   // }
// };

// // console.log(user1.getFullName());

// let user2 = {
//   id : 1,
//   firstname : "James",
//   lastname : "Carry",
//   course : "Mern Stack",
// };


// console.log(user1);
// console.log(user2);

// //! call()

// // calling the GLOBAL FUNCTION as the object method using defined this function 


// let fullName1 = getFullName.call(user1);
// let fullName2 = getFullName.call(user2);

// console.log(fullName1);
// console.log(fullName2);

// // IN call(), we can send n no. of arguments
// let courseDetails = getCourseDetails.call(user1, "Springboot", "JDBC");

// console.log(courseDetails);

// //! apply()

// let fullNameApply1 = getFullName.apply(user1);

// console.log(fullNameApply1);

// // Arguments in the apply() should be in the square brackets []
// let courseDetailsApply1 = getCourseDetails.apply(user1, ["Springboot", "JDBC"]);

// console.log(courseDetailsApply1);

// //! bind()- returns bounded function which can be called later on

// // here bind() is bounded to the "this" keyword to the object user1 fullname 
// let boundedGetFullName = getFullName.bind(user1);

// // FULL FUNCTION WILL BE PRINTED
// console.log(boundedGetFullName);

// console.log("function Bounder to Fullname of user 1");

// // FULL NAME OF USER 1 USING BIND- bind()
// console.log(boundedGetFullName());

// let boundedCourseDetails = getCourseDetails.bind(user2)

// // Arguments passed in the bind function.
// console.log(boundedCourseDetails("HTML", "NODEJS"));

//! SCOPES REVISION

//!  - GLOBAL SCOPE AND SCRIPT SCOPE :
//  - WHENEVER WE DECLARE GLOBAL VARIABLES GLOBAL SCOPE AND SCRIPT SCOPE CREATES
//  - IN GLOBAL SCOPE WE CAN SEE "var" VARIABLES AND FUNCTION DECALRATIONS
//  - IN SCRIPT SCOPE WE CAN SEE "let" and "const" VARIABLES, DUE TO TDZ

//! - BLOCK SCOPE :
//  - WHENEVER WE DECLARE "let" AND "const" VARIABLES INSIDE CONDITIONAL OR LOOPING STATEMENT THOSE VARIABLES WILL ACT AS LOCAL VARIABLES AND HAVING BLOCK SCOPE
//! - NOTE: "var" VARIABLES WILL ACT AS GLOBAL VARIABLE AND HAVING GLOBAL SCOPE WITHIN CONDITIONAL OR LOOPING STATEMENT

//! - LOCAL SCOPE :
//  - WHENEVER WE DECLARE "var", "let" OR "const" VARIABLES INSIDE A FUNCTION , IT WILL ACT AS LOCAL VARIABLES HAVING LOCAL SCOPE

//! - FUNCTION SCOPE :
//  - "var" VARIABLES ARE KNOWN AS FUNCTION SCOPE VARIABLES BECOZ IT ACTS LIKE LOCAL VARIABLE INSIDE A FUNCTION


//! JAVASCRIPT OBJECT NOTATION

// let user1 = {
//   id : 1,
//   fname : "John",
//   lname : "Doe",
// };

// function storeDataInLocalStorage(){
//   let jsonData = JSON.stringify(user1);     // JS to JSON
//   localStorage.setItem("usersData", jsonData);
// }

// function getDataFromLocalStorage(){
//   let data = localStorage.getItem("usersData");
//   let userObject = JSON.parse(data);    // JSON to JS
//   console.log(userObject);

//   document.writeln(`<em>${userObject.fname}</em>`);
// }

// function removeSingleDataFromLocalStorage(){
//   localStorage.removeItem("demo1");
// }

// function clearDataFromLocalStorage(){
//   localStorage.clear();
// }


//! ARRAYS - can store multiple type of data - HETEROGENOUS in NATURE

//*   1.  ARRAY LITERALS

// let arr1 = [10, true, "Hello World", () => {}, null, 1n, undefined];

// console.log(arr1);

// //*   2.  ARRAY CONSTRUCTOR

// let arr2 = new Array(10, false, "Bye", function () {});

// console.log(arr2);
// console.log(typeof arr2, arr2.length);

//! ARRAY METHODS-

// arr1 = [10, 20, 30, 40];

// console.log(arr1);    // (4) [10, 20, 30, 40]

// //! 1.  array.push();- appends new element to the end of an array, and returns the new length of the array

// let newLength =  arr1.push(50, 60, 70)

// console.log(arr1);

// console.log(arr1.length);

// //! 2.  array.pop();-   Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// arr1.pop();

// console.log(arr1);    //[10, 20, 30, 40, 50, 60]

// //! 3.  array.unshift();- Elements to insert at the start of the array, Inserts new elements at the start of an array, and returns the new length of the array.
// arr1.unshift("Hello", 999);

// console.log(arr1);    // ['Hello', 999, 10, 20, 30, 40, 50, 60]

// console.log(arr1.length);     // 8

// //* 4. array.shift();-  Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// // arr1.shift();
// console.log(arr1.shift());
// console.log(arr1);


//! 4. splice();- array.splice(start_index, delete_count, new_element)
/*
 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

@param start — The zero-based location in the array from which to start removing elements.

@param deleteCount
The number of elements to remove. If value of this argument is either a negative number, zero, undefined, or a type that cannot be converted to an integer, the function will evaluate the argument as zero and not remove any elements.

@param items — Elements to insert into the array in place of the deleted elements.

@returns — An array containing the elements that were deleted.

 */

// let arr2 = [100,200,300,400];

// // ADD NEW ELEMENTS
// arr2.splice(3, 0, 350);   // adding 350 at index 3, after 300
// console.log(arr2);    //[100, 200, 300, 350, 400]

// arr2.splice(2, 0, 250);   // adding 250 at index 2, after 200

// console.log(arr2);    // [100, 200, 250, 300, 350, 400]

// // DELETE ELEMENT

// arr2.splice(2, 3);    // deleting three elements from index 2 i.e. 250, 300, 350

// console.log(arr2);    // [100, 200, 400]

// let arr3 = [1000, 2000, 3000, 4000, 5000, 6000];

// let val = arr3.splice(0, 2, 1500,1800);
// console.log(arr3);

// console.log(val);     //[1000, 2000]


// //! 5. slice();-    array.slice(startIndex, endIndex)   ....endIndex is excluded
// //         -10 -9 -8 -7  -6  -5  -4   -3  -2  -1
// let arr4 = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
// //          0  1  2   3   4   5  6    7   8   9

// let copyArr1 = arr4.slice(1,4);   // retrieve value at index-(1,2,3) i.e. 6, 6,12
// console.log(copyArr1);
// console.log(arr4);

// // to retrieve from specific index to end

// let copyArr2= arr4.slice(4);      // copy [15, 18, 21, 24, 27, 30]
// console.log(copyArr2);                          

// let copyArr3 = arr4.slice(2, -3);   // copy [9, 12, 15, 18, 21]

// console.log(copyArr3);

//! 6. sort();-    
// let arr5= [5,8,2,4,9,1,6,9,4, 34, 56];

// //* lexographical sorting, by converting into string and sort 1st element
// arr5.sort();      //ASC
// console.log(arr5);



// let arr6 = [2,65,23,8,5,56,98,47,28,45,9,48,14];
// //* sorting by comapare function

// /**
//  (method) Array<number>.sort(compareFn?: ((a: number, b: number) => number) | undefined): number[]
// Sorts an array in place. This method mutates the array and returns a reference to the same array.

// @param compareFn
// Function used to determine the order of the elements. 
// It is expected to return a negative value if the first argument is less than the second argument, 
// zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, 
// UTF-16 code unit order.
//  */
// arr6.sort((a, b) => a-b);    //ASC

// console.log(arr6);

//! 7. concat();- 

// let arr7 = [10, 20, 30];
// let arr8 = [50, 60, 70];

// let concatinatedArray = arr7.concat(arr8);

// console.log(concatinatedArray);

//! ADVANCE ARRAY FUNCTION

// let arr1 = [10, 20, 30, 40, 50];

// //* simple for loop

// // for(let i = 0; i<arr1.length; i++){
// //   console.log(i, arr1[i]);
// // }

// //! forEach(callbackFunc)- used to iterate an array returns undefined

// // changes are made into the original array

// let returnVal1 = arr1.forEach((element, index, array) => {
//   console.log(element, index, array);

//   // console.log(element);
//   return element + 5;
// });

// console.log(returnVal1);    // undefined

// //! map(callbackFunc)- used to iterate an array returns new Array
// console.log("==================MAP=======================");
// // keeps original array unchanged

// let returnVal2= arr1.map((element, index, array) => {
//   console.log(element, index, array);

//   return element + 5;

// });
// console.log(returnVal2);    //[15, 25, 35, 45, 55]

// //! filter(callbackFunc)
// console.log("==================FILTER=======================");

// let arr2 = [100, 200, 300, 400, 500, 600];

// // let returnVal3 = arr2.filter((element, index, array) => {
// //   return element > 200;
// // });

// // can be written in shorter as-
// let returnVal3 = arr2.filter((element, index, array) => element > 200);

// console.log(returnVal3);

// //! difference between map and filter

// console.log("==========Map return========");

// let mapReturn = arr2.map((element, index, array) => element > 200);

// console.log(mapReturn);
// // -----------------------------------------
// console.log("==========Filter Return======");

// let filterReturn = arr2.filter((element, index, array) => element > 200);

// console.log(filterReturn);

// //! find(callbackFunc)- Only gets the first true condition element, and breaks immediately, returns element of first true condition, else undefined

// console.log("=======================FIND==========================");
// let returnVal4 = arr2.find((element, index, array) => {
//   console.log(element);
//   return element > 200
// });

// console.log(returnVal4);    // 300

// //! findIndex(callbackFunc)- ONLY gets the index of first true condintion, and breaks immediately, return index of true condition, else -1
// console.log("=======================FINDINDEX==========================");

// let returnVal5 = arr2.findIndex((element, index, array) => {
//   console.log(element);
//   return element > 200
// });

// console.log(returnVal5);

// //! reduce(callbackFunc, accumulationValue)

// console.log("=======================REDUCE==========================");

// let arr3 = [10, 20, 30, 40, 50];

// // Sum by using for loop
// let sum = 0;

// for(let i = 0; i < arr3.length; i++){
//   sum += arr3[i];
// }
// console.log(sum);

// let returnVal6 = arr3.reduce((acc, element, index, array) => {
//   console.log(acc, element);
//   return acc + element;
// },0); // acc = 0;

// console.log(returnVal6);

//*=====================================================================

// let arr4 = [1,2,3,4,5,6,7];

// //! toString()

// let str1 = arr4.toString()
// console.log( typeof str1, str1);

// //! join()

// let str2 = arr4.join(" ")
// console.log(typeof str2, str2);


// //! split()

// let str3 = "HELLOO";

// console.log(str3);

// let str5 = str3.split("");

// console.log(str5);


// //=======================


// function pallindrome(word){
//   let output = word.split("").reverse().join("");
//   return output === word ? true : false;
// }

// console.log(pallindrome("rarar"));

//! ARRAY DESTRUCTURING

// let arr1 = [10, 20, 30, 40, 50];

// let [n1, n2, n3, n4, n5] = arr1;

// console.log(n2, n5);    // 20 50

// let arr2 = [100, 200, 300, 400, 500];

// //* Skip elements while de-structuring

// let [, a2, , a4, ] = arr2   // skipping the non-required value

// console.log(a2, a4);    // 200 400

// console.log(arr2[1], arr2[4]);


// // nested Array

// let arr3 = [1000, 2000,[3000, 4000], 5000];

// let [b1, , [, b2], b4] = arr3;

// console.log(b1, b2, b4);

// // object in the array

// let arr4 = ["Hello", {
//   id : 101,
//   fname : "John",
//   lname : "Doe"}, "Dosto", "Ye extra h"];

//   let [str1, {fname}] = arr4;

//   console.log(str1, fname, );

//! REST AND SPREAD OPERATORS : ...variable

//* REST

// A rest parameter(...pn) must be last in a parameter list

// function demo1(p1, p2, ...pn){        // pn = (7) [30, 40, 50, 60, 70, 80, 90]

//   console.log(p1, p2);
//   console.log(pn);
//   console.log(arguments);   // ARRAY like object

//   console.log(pn[1]);

// }

// demo1(10, 20, 30, 40, 50, 60, 70, 80, 90);

// let arr5 = [10, 20, 30, 40, 50, 60];

// let [x1, x2, ...xn] = arr5;

// console.log(x1, x2);    
// console.log(xn);      // (4) [30, 40, 50, 60]     <-- REST-PACKING


// //! Spread

// let arr6 = [11, 222, 333, 444];

// //* Packing and Unpacking
// console.log(...arr6);   // 11 222 333 444


// // coppy the elements of arr6 to arr7 using 
// let arr7 = [...arr6];   // <-- copy elements

// console.log(arr7);      //     <-- SPREAD -- UNPACK (4) [11, 222, 333, 444]                      


// let obj1 = {
//   id : 1001,
//   fname : "John"
// }

// let obj2 = {
//   ...obj1,
//   lname : "Doe",
//   sal : 70000
// };


// console.log(obj1);
// console.log(obj2);

//! STRING

// let str1 = "Hello";
// let str2 = 'World abc';

// //* using backticks we can write multi line strings and we acn do string interpolation
// let str3 = `Hiie, 
// John doe  ${str1}  ${str2} `;

// console.log(str1);
// console.log(str2);
// console.log(str3);

//! STIRNG METHODS

// let str1 = "Javascript";

// let description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam magni labore beatae reiciendis error, dolorem alias voluptatibus unde quaerat illum.";

// //not a method, its a property which Returns the length of a String object
// console.log(str1.length);       // 10

// console.log(str1[0]);         // J



// //! str.slice(startIndex, endIndex)

// console.log(str1.slice(0, 4));    // Java
// console.log(str1.slice(4));       // script
// console.log(str1.slice(-10, -6));     // Java

// console.log(str1.slice(-6, 10));      // Java

// console.log(description.slice(0, 51) + "...");    // Lorem ipsum dolor sit, amet consectetur adipisicing...

// console.log( `${description.slice(0, 51)}... `);  // Lorem ipsum dolor sit, amet consectetur adipisicing...

// //! str.substring(startIndex, endIndex)- Similar to slice but do not accept -ve index

// console.log(str1.substring(0,4));       // Java

// console.log(str1.substring(-10,-6));    // No output

// //! str.substr(startIndex, length)  - similar to slice, but its 2nd argument is length

// console.log(str1.substr(4, 6));       // script
// console.log(str1.substr(-10, 4));     // script


// //! str.replace()

// let str2 = "I love Python, Python has easy learning curve";

// console.log(str2);

// console.log(str2.replace("Python", "Javascript"));    // replace only 1st Occurence

// console.log(str2.replaceAll("Python", "Javascript"));   // Replace all Occurences


// let username = "    John Doe   ";

// console.log(username);

// //! str.trimStart() -- Remove the Leading White Space
// console.log(username.trimStart());
// //! str.trimEnd()  --  Remove the Trailing White Space
// console.log(username.trimEnd());
// //! str.trim() -- Remove the Leading and Trailing White Space
// console.log(username.trim());


// // ==========================================

// //! str.padEnd(maxLength, fillstring)
// let phoneNo = "9876543210";
// console.log(phoneNo);

// console.log(phoneNo.slice(0,6).padEnd(10, "X"));    // 987654XXXX

// //! str.padStart(maxLength, fillstring)

// console.log(phoneNo.slice(6).padStart(10, "X"));    // XXXXXX3210

// //! str.charAt()--

// let str4 = "JavaScript";

// console.log(str4.charAt(0));

// //! str.charCodeAt()--

// console.log(str4.charCodeAt(0));      // ASCII of 'J' = 74
// console.log(str4.charCodeAt(1));      // ASCII of 'a' = 97

// //! str.toUpperCase()--

// console.log(str4.toUpperCase());      //  JAVASCRIPT

// //! str.toLowerCase()--
// console.log(str4.toLowerCase());      //  javascript

// //! str.includes()

// console.log(str4.includes("Javascript"));   // false

// console.log(str4.includes("JavaScript"));   // true

// console.log(str4.indexOf("a"));       // 1 - as a has index 1

// console.log(str4.indexOf("z"));       // -1 as z is not present in the String


// //! str.split()
// let str5 = "React is Library of JavaScipt";

// console.log(str5);

// console.log(str5.split());    // ['React is Library of JavaScipt']

// console.log(str5.split(""));    // (29) ['R', 'e', 'a', 'c', 't', ' ', 'i', 's', ' ', 'L', 'i', 'b', 'r', 'a', 'r', 'y', ' ', 'o', 'f', ' ', 'J', 'a', 'v', 'a', 'S', 'c', 'i', 'p', 't']

// console.log(str5.split(" "));   // (5) ['React', 'is', 'Library', 'of', 'JavaScipt']

// console.log(str5.split("Library"));   // (2) ['React is ', ' of JavaScipt']   -- Library as Splitter


//*   ==============================================
//! PROMISE

// const p1 = new Promise((resolve , reject) =>{
//   if (10 > 2){
//     resolve("Promise Resolved and condition satisfied...");
//   } else{
//     reject("Promise Rejected and not satisfied...");
//   }
// });

// console.log(p1);
 
// p1.then((data) =>{
//   document.writeln(`<h3>${data}</h3>`)
// });

// p1.catch((err) =>{
//   document.writeln(`<h3>${err}</h3>`)

// });

// p1.finally(() =>{

//   console.log("I am Finally Block");
// });

//! PROMISE WITH THEN, CATCH AND FINALLY
//* USE THEN CATCH TO DEAL WITH ERROR CONDITION


//! fetching data from Json file

// const API_URL = "https://dummyjson.com/todos";

// // window.fetch()
// let p1 = fetch(API_URL)

// console.log(p1);

// /**
//  Promise{
//  }
//  */

//  //==========response 1===========
//  p1.then((response) => {
//   // console.log(response.json());
//   let p2 = response.json();
//   console.log(p2);
// // ==================response 2 to display json data in JavaScript formate========
//   p2.then((data)=>{
//     console.log(data.todos);
//   });
// //====================error for request fails for p2=====
//   p2.catch((err)=>{
//     console.log(err);
//   });
//  });


//  // ===================error for p1===========
//  p1.catch((err) => {
//   console.log(err);
//  });

//! setInterval(callback, intervalTime)

// let intervalID = setInterval(() =>{
//   console.log("Hiii");
// }, 2000);

// console.log("IntervalId is ", intervalID);

// //! setTimeout(callback, timeOut)

// setTimeout(() =>{
//   console.log("Byee");
// }, 12000);

// setTimeout(() =>{
//   clearInterval(intervalID)
//   console.log("Interval Stopped");
// }, 8000);

//! PROMISE WITH ASYNC AND AWAIT

//* IF USING ASYNC AWAIT USE TRY CATCH TO DEAL WITH ERROR CONDITION

// const API_URL = "https://dummyjson.com/todos";

// async function getTodos(url){
//   try{
//     let response = await fetch(url);
//     let data = await response.json();
//     console.log(data);    // {todos: Array(30), total: 254, skip: 0, limit: 30}

//     displayTodos(data.todos);
//   } catch(err){
//     console.log(err);
//   }
// }

// getTodos(API_URL);

// function displayTodos(allTodos){
//   console.log(allTodos);    // Array(30)  all data 
//   allTodos.map((ele) => {
//     let {id, userId, todo, completed} = ele;
// //* to print all the data on the document by using object destructuring
//     document.writeln(`
//       <div class = "todo">
//         <h4>${id} ${todo}</h4>
//         <span>${completed ? "Completed" : "Pending"}  by UserId- ${userId}</span>
//       </div>
//       `);
//   })

// }
// console.log("hieee");



//! products- title, description, thumbnail
