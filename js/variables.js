// var g = "male";
// var g = "Female";
// console.log("gender: " + sex);   

// re declare and re assign

// let age = 25;
// age = 30;
// console.log("Age: " + age);

// re assign only , no re declare

// const country = "USA";
// console.log("Country: " + country);
// country = "Canada"; // This will throw an error because const cannot be reassigned

// no re declare and no re assign


// number

// let age = 12

// console.log(typeof age);


// string

// let s = "Hello World";
// console.log(typeof s);

// boolean

// let isTrue = true;
// console.log(typeof isTrue);

// null

// let n = null;
// console.log(typeof n); // This will output "object" due to a quirk in JavaScript

// undefined

// let u;
// console.log(typeof u); // This will output "undefined"

// difference between null and undefined

// null represents the intentional absence of any object value, 
// while undefined indicates that a variable has been declared but has not yet been assigned a value.




// bigint

// let bigIntValue = 1234567890123456789012345678901234567890n;
// console.log(typeof bigIntValue); // This will output "bigint"


// -----------------NON PRIMITIVE DATA TYPES-----------------

// let person = {
//     name: "Doe",
//     age: 30,
//     isEmployed: true
// };

// let table = {
//   legs : 4,
//   color : "brown",
//   material : "wood"
// }

// let model = {
//     name: "John",
//     age: 25,
//     height: 5.9,
//     isStudent: false,
//     occupation: null,
// }

// let tools = {
//   company : "ABC Corp",
//   type : "Software",
//   laptop : ["Dell" , 12],
//   monitor : ["Samsung", 24],
//   keyboard : ["Logitech K120" , 48],
//   mouse : ["HP" , 48]
// }

// let building = {
//   name : "barabati stadium",
//   location : "Odisha",
//   capacity : 45000,
//   facilities : ["parking", "restrooms"],
//   sittiingArrangement : {
//     vip : 5000,
//     general : 40000
//   }

// }

// let colors = ["red", "green", "blue"];
// let fruits = ["apple", "banana", "cherry"];
// let numbers = [1, 2, 3, 4, 5];
// let mixedArray = [1, "two", true, null, undefined, { name: "John" }, [1, 2, 3]];
// let emptyArray = [];




// _____ arithmatic operators --

// let a= 10;

// // increment and decrement operators

// console.log(a++); 
// console.log(++a);
// console.log(a);
// console.log(a--);
// console.log(--a);
// console.log(a);
 
// // so it cahnges tjhe value of a after the operation is performed.




// let a = 10;
// let b = 5;

// console.log("Addition: " + (a + b)); // 15
// console.log("Subtraction: " + (a - b)); // 5
// console.log("Multiplication: " + (a * b)); // 50
// console.log("Division: " + (a / b)); // 2
// console.log("Modulus: " + (a % b)); // 0
// console.log("Exponentiation: " + (a ** b)); // 100000



// -------------assignment operators--------------------

// assign 

// a = 10;

// add assign 

// a = 10
// a+=10

// subtract assign

// a = 10
// a-=4

// multiply assign

// a = 10
// a*=4

// divide assign

// a = 10
// a/=4
// modulo assign

// a = 10
// a%=4

// -------------comparison operators-------------------- relational operators

let a = 10;
let b = 5;

// equal to (==) operator

// console.log(a == b); // false

// strict equal to (===) operator

b = "10";
// console.log(a === b); // false

// less than (<) operator

// console.log(a < b); // false

// greater than (>) operator

// console.log(a > b); // true

// greater than or equal to (>=) operator

// console.log(a >= b); // true

// less than or equal to (<=) operator

// console.log(a <= b); // false

// not equal to (!=) operator

// console.log(a != b); // false

// strict not equal to (!==) operator

// console.log(a !== b); // true




// -------------logical operators--------------------

// let x = true;
// let y = false;

// console.log("Logical AND (&&): " + (x && y)); // false
// console.log("Logical OR (||): " + (x || y)); // true
// console.log("Logical NOT (!): " + (!x)); // false 


// ---------string operators--------------------

// let str1 = "Hello";
// let str2 = "World";

// console.log("Concatenation (+): " + (str1 + " " + str2)); // Hello World


// --------ternary operator ------------

// let aa = 32;

// let bb = 12

// let result = (aa > bb) ? aa : bb;

// console.log("The greater number is: " + result); // The greater number is: 32

let credit_score = 12;

// 30 -40 - 2 laksh , 40 - 50 4 lakh , 50 - 60 6 lakh , 60 - 70 8 lakh , 70 - 80 10 lakh , 80 - 90 12 lakh , 90 - 100 15 lakh

// let loan_amount = credit_score >= 30 && credit_score < 40 ? "2 lakh" : "not eligible for 2 lacs" ;
// loan_amount = (credit_score >= 40 && credit_score < 50) ? "4 lakh" : "not eligible for 4 lacs" ;
// loan_amount = (credit_score >= 50 && credit_score < 60) ? "6 lakh" : "not eligible for 6 lacs" ;

// console.log("Loan amount: " + loan_amount); // Loan amount: 2 lakh


// ------------switch case --------------------------

// let status = "Preparing"

// switch (status) {
//   case "Preparing":
//     console.log("Your order is being prepared.");
//     break;
//   case "Shipped":
//     console.log("Your order has been shipped.");
//     break;
//   case "Out for Delivery":
//     console.log("Your order is out for delivery.");
//     break;
//     case "Delivered":
//     console.log("Your order has been delivered.");
//     break;
//   default:
//     console.log("Unknown order status.");
//     break;
// } 




// let month = prompt("Enter a month (1-12):");

// switch (month) {
//   case "1":
//     console.log("January");
//     break;
//   case "2":
//     console.log("February");
//     break;
//   case "3":
//     console.log("March");
//     break;
//   case "4":
//     console.log("April");
//     break;
//   case "5":
//     console.log("May");
//     break;
//   case "6":
//     console.log("June");
//     break;
//   case "7":
//     console.log("July");
//     break;
//   case "8":
//     console.log("August");
//     break;
//   case "9":
//     console.log("September");
//     break;
//   case "10":
//     console.log("October");
//     break;
//   case "11":
//     console.log("November");
//     break;
//   case "12":
//     console.log("December");
//     break;
//   default:
//     console.log("Invalid month number.");
//     break;
// }





// for (let i = 1; i <= 100; i++) {
//   console.log("Iteration: " + i);
// }

// console.log("--------------------------------------------------");

// for (let i = 100; i >= 1; i--) {
//   console.log("Iteration: " + i);
// }



// student = ["John" , "Vijay" , "Lucky" , "Sita" , "Anita" ]

// for(let i = 0; i < student.length; i++){
//   console.log("Student: " + student[i]);
// }
// console.log("--------------------------------------------------");

// sum = 0;

// for(let i = 1; i <= 100; i++){
//   sum += i;
// }
// console.log("Sum of numbers from 1 to 100: " + sum);

// let i = 1

// while(i <= 100){
//   console.log("Iteration: " + i);
//   i++;
// }



// let i = 100;

// do {
//   console.log("Iteration: " + i);
//   i--;
// } while (i >= 1);




// table

// let table_of = prompt("Enter a number to print its multiplication table:");

// let table_of = 5; // You can change this value to print the multiplication table of a different number

// for (let i = 1; i <= 10; i++) { 
//   console.log(`${table_of} x ${i} = ${table_of * i}`);
// }




// function print_hi(){
//   console.log("hi")
// }

// print_hi()


// const print_hi = function (){
//   console.log("hi hello")
// }


// print_hi()


// const hello = () => {
//   console.log("hello world")
// }

// hello()


// const sum = (...variables) => {
//   let sum = 0
//   for(let i = 0 ; i < variables.length; i ++){
//     sum += variables[i]
//   }
//   console.log(sum)
// }

// sum(12,2,3,4,1,6,5,4,5,5,6,)


// return fumction
// 
//callback

// iife 

// (function () {
//   console.log("console")
// })()



// let sum_gst = (...variables)=>{
//   let sum = 0
//   for(let i = 0 ; i < variables.length; i ++){
//     sum += variables[i]
//   }

//   sum += sum*0.18
//   return sum;
// }

// console.log(sum_gst(12,333,123,55,677,8,233,11))


// const even_odd = (numb)=> {

//   value = numb % 2 ? "even" : "odd";

//   console.log(value)
// }



// -----------------------------array function ------------------


// push pop shift unshift map filter find reduce

// let elements = ["1" , 2, 4, "3"]

// elements.push("5")

// console.log(typeof elements)
// console.log(elements)
// elements.pop(0)// does not matter whatever index is fed , it will delete the last element

// console.log(elements)

// elements.shift(3) // similar , always delets the first one
// console.log(elements)

// elements.unshift(12)
// console.log(elements)

// let mapped  = elements.map(p => typeof p)

// console.log(mapped)

// let filtered = elements.filter((el) => {
//   if (typeof el === "number") //;// gave an empty array 
//     return el // removed , gave error , okay gave error cuz it lacked block{}
// })

// console.log(filtered)


// // find gives you the first element it matches

// let result = elements.find((el) => typeof el  === "string")

// console.log(result)




// reduce




// -------------------Object method ---------------

let user = {
  name : "Sai" ,
  age : 21,
  email : "saipremananda@outlook.com"
}

// Object. [keys , values , entries ,assign , freeze , seal ,create ] 
// user.hasOwnProperty("key") // checks if key exists
//delete user.key , that key is discarded

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))


//assign copy object

// let Obj = Object.assign({} , user)

// console.log(Obj)

//freeze , wont let you update or add anything to the Object

// Object.freeze(user)

// user.name = "Ram"
// user.phone = 9090909090

// console.log(user) // no change cuz freezed


// Object.seal(user)

// seal , you can update but no addition or deletion anything

// user.name = "Ram"

// user.phone = 909090
 
// console.log(user) // no addition of new keys

// console.log(user.hasOwnProperty("name"))
// console.log(user.hasOwnProperty("phone"))

// delete user.name

// console.log(user)

// let another = Object.create(Object)

// console.log(another)// Function {}
// console.log(typeof another) //object


// let another = Object.create(Function)

// console.log(another)// Function {}
// console.log(typeof another) //object


// let another = Object.create(Object)

// console.log(another)// Function {}
// console.log(typeof Function) //object


//=========================================================== if else

// let age = 12

// if(age >= 18){
//   console.log("vote")
// }


// if(age >= 18){
//   console.log("vote")
// } else{
//   console.log("minor")
// }


// ladder

// let cat = 33

// if (cat>=90 && cat<= 100){
//   console.log("cat")
// } else if (cat>=60 && cat <= 89){
//   console.log("cat")
// }
//  else if (cat>=30 && cat <= 59){
//   console.log("c")
// } else if (cat>=0 && cat <= 29){
//   console.log("f")
// } else {
//   console.log("invalid")
// }

// let ob = {
//   name : "hotesh" ,
//   gender : "male" ,
//   age : 32
// }

// if (ob.hasOwnProperty("gender")){
//   if (ob.gender === "male"){
//     console.log("GUY")
//   } else {
//     console.log("NOT GUY")
//   }
// } else {
//   console.log("no gender")
// }



// questions


// if (a > 0){
//   console.log("positive")
// } else if (a<0){
//   console.log("negative")
// } else {
//   console.log("Its neutral , Zero")
// }





// let marks = 34 

// if (marks >= 35 && marks <= 100){
//   console.log("passed")
// } else if (marks < 35 && marks >=0){
//   console.log("failed")
// } else {
//   console.log("invalid number")
// }








// // grading
// if (marks>=90 && marks<= 100){
//   console.log("marks")
// } else if (marks>=60 && marks <= 89){
//   console.log("marks")
// }
//  else if (marks>=30 && marks <= 59){
//   console.log("c")
// } else if (marks>=0 && marks <= 29){
//   console.log("f")
// } else {
//   console.log("invalid")
// }







// user.loggedIn = false

// user.role = "Admin"

// if (user.loggedIn){
//   console.log(`{{$user.role} , ${user.name}}`);
// }






// let num = 0;

// let result = num % 2 ==0 ?
//  num === 0 ? "zero" : "even" 
// :"odd";

// console.log(result)


