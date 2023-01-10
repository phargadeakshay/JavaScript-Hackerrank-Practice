// const date1 = new Date();

// console.log(date1.toDateString())
// console.log(date1.toLocaleDateString())

// function ManipulateDate(dateUp, day) {
//   const date1 = new Date(dateUp);
//   date1.setDate(date1.getDate() - day);

//   return date1.toLocaleDateString();
// }

// console.log(ManipulateDate("10-01-2022", 20));



// function ManipulateDate1(day) {
//   const date1 = new Date();
//   date1.setDate(date1.getDate() - day);

//   return date1.toLocaleDateString();
// }

// console.log(ManipulateDate1(20));


var dob = new Date("10/25/1996");  
//calculate month difference from current date in time  
var month_diff = Date.now() - dob.getTime();  
  
//convert the calculated difference in date format  
var age_dt = new Date(month_diff);   
  
//extract year from date      
var year = age_dt.getUTCFullYear();  
  
//now calculate the age of the user  
var age = Math.abs(year - 1970);  
  
//display the calculated age  
console.log("Age of the date entered: " + age + " years");



