// $("li").click(function () {
//   $("li").css({
//     color: "black",
//     "background-color": "white",
//     padding: "10px",
//     width: "100px",
//     "list-style":"none"
//   });
//   $(this).css({
//     color: "white",
//     "background-color": "lightgreen",
//     padding: "10px",
//   });
// });

// var input = "aammnmmbmmmaa";
// n = input.length;
// console.log(n, "length");

// function myFunc(inp, n) {
//   var c = 0;
//   var youARR = [];
//   var myArr = [];
//   myArr = inp.split("");
//   console.log(myArr, "myarr");

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (myArr[i] === myArr[j]) {
//         c += 1;
//         // console.log(c, "cccccccc");
//       }
//     }
//     youARR.push(c);
//     c = 0;
//   }
//   youARR.sort(function (a, b) {
//     return a - b;
//   });
//   return youARR[n - 1];
// }

// console.log(myFunc(input, n), "kkkkkk");

// function sockMerchant(ar) {
//   let pairs = 0;
//   // create an object to temporarily assign pairs
//   const temp = {};
//   // loop through the provided array
//   for (let n of ar) {
//     // check if current value already exist in your tempobject
//     if (temp[n] in temp) {
//       // if current value already exist in temp
//       // delete the value and increase pairs
//       delete temp[n];
//       pairs += 1;
//     } else {
//       // else add current value to the object
//       temp[n] = n;
//     }
//   }
//   // return pairs
//   return pairs;
// }
// function lonelyinteger(a) {
//   // Write your code here
//   var temp = [];
//   var dup = [];
//   for (let n of a) {
//     // console.log(n, "for run");
//     if (n in temp) {
//       console.log(n, "if run");
//       dup.push(n);
//     } else {
//       console.log("else run");
//       temp.push(n);
//     }
//   }
//   // temp.shift();
//   console.log(dup, "dup");
//   console.log(temp, "temp");
//   return temp.length;
// }

// m = [2, 1, 2, 3, 4, 3, 7,1];
// console.log(sockMerchant(m))
// console.log(lonelyinteger(m));

// function lonelyinteger(ar) {
//   var doubArray = [];
//   let pairs = 0;
//   // create an object to temporarily assign pairs
//   const temp = [];
//   // loop through the provided array
//   for (let n of ar) {
//     // check if current value already exist in your tempobject
//     if (temp[n] in temp) {
//       // if current value already exist in temp
//       // delete the value and increase pairs
//       delete temp[n];
//       // delete temp[n];
//       pairs += 1;
//     } else {
//       // else add current value to the object
//       temp[n] = n;
//     }
//   }
//   console.log(temp, "array ");
// }

// console.log(lonelyinteger(m), "kk");

// function lonelyinteger(ar) {
//   var doubArray = [];
//   let pairs = 0;
//   // create an object to temporarily assign pairs
//   const temp = {};
//   // loop through the provided array
//   for (let n of ar) {
//     // check if current value already exist in your tempobject
//     if (temp[n] in temp) {
//       // if current value already exist in temp
//       // delete the value and increase pairs
//       delete temp[n];
//       pairs += 1;
//     } else {
//       // else add current value to the object
//       temp[n] = n;
//     }
//   }

//   // return pairs
//   const columns = Object.keys(temp);
//   console.log(columns);
//   // return object.temp[1].value.;
// }
// m = [2, 1, 2, 3, 4, 3, 7, 2];
// console.log(lonelyinteger(m), "kk");

// var data = [1, 2, 3, 5, 2, 1, 4];

// var data = [0, 0, 1, 2, 1];

// var res = data.filter((v) => {
//   console.log(v, "vvvv");
//   return (
//     data.filter((v1) => {
//       console.log(v1, "v1v1v2");
//       return v1 == v;
//     }).length == 1
//   );
// });

// console.log(res);

// guardiansofthegalaxy;
// www.walmart.com / m / brands / ionvacs;

// function diagonalDifference(arr, n) {
//   // Write your code here
//   var first = 0;
//   var sec = 0;
//   var result = 0;

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (i == j) {
//         first += arr[i][j];
//       }
//       if (i + j == n - 1) {
//         sec += arr[i][j];
//       }
//     }
//   }
//   result = first - sec;
//   return Math.abs(result);
// }

// let a = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [1, 2, 3, 4],
//   [10, 6, 7, 10],
// ];

// console.log(diagonalDifference(a, 4));

// const animal = {
//   1: "1",
//   2: "2",
//   3: "3",
//   4: "4",
//   5: "5",
// };
// let a = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [1, 2, 3, 4],
//   [10, 6, 7, 10],
// ];
// const propertyNames = Object.values(animal);
// console.log(propertyNames);
// // console.log(a);
// var numarray = [];

// for (x in propertyNames) {
//   numarray.push(parseInt(propertyNames[x]));
// }
// console.table(numarray);

// const a = "vitthalmoreisbest";

// function findrepeatedFoodLength(b)
// {
//   let m = b.split('')
//   let n1= m.length
//   let res = Array.from(new Set(m));
//   let n2 = res.length
//   console.log("set", res,m);
//   // console.log("set", res,n);
//   let z =Array.from(res)
//   let Arr1=m.join('')
//   console.log("Join",Arr1);

// return n1-n2;

// }
// console.log(findrepeatedFoodLength(a));

// function findCharInString(arr){

//   let sp = arr.split('')
//   let Ch="v"
//   let pos;
//   let result = arr.match(/more/gi);
//   console.log(result.indexOf)
//   for(let i=0; i<sp.length;i++)
//   {
//      if(Ch===sp[i]){
//       console.log(Ch,"  ",i+1)

//      }
//   }
// }
// name1="vitthalmorev"
// findCharInString(name1)

// let arr= ["ghef","dbca","onmp","jikl"]

// const shortedString = (arr1)=>{
// arr1.sort()
//   let n = arr1.length;
//   let newArr=[]
//   let spresult;
//   let jnresult;
// console.log(arr,"sorted" )
// for(let i =0;i<n;i++)
// {
//   spresult = arr1[i].split("")
//   spresult.sort()
//   jnresult = spresult.join('')
//   newArr.push(jnresult)
// }
// console.log(spresult,"spresult" )
// console.log(jnresult,"jnresult" )
// console.log(newArr,"newArr" )
// }

// console.log(shortedString(arr))

// const SumOfDigit =(num,k)=>{
//   let newNum=0
//   let tempArr = []
//   let tempdi = num
//   let rem,sum=0,digitAdd=0
//   for(let i=k-1;i >=0;i--)
//   {
//     tempArr.push(tempdi)
//   }
//   // newNum = parseInt(tempArr.join(''))
//   newNum = tempArr.join('')

// console.log(tempArr,"newnum")
// console.log(newNum,"newnum")

//   while(newNum > 0)
//   {
//     rem = Math.floor(newNum%10)
//     console.log(rem,"rem")
//     digitAdd +=rem
//     // console.log(digitAdd,"digitAdd")
//     sum =parseInt((sum * 10 )+rem)
//     newNum=Math.floor(newNum/10)
//     // console.log(newNum,"newNum")
//     if (digitAdd >9 && newNum == 0){
//       newNum = digitAdd
//       digitAdd =0
//     }

//   }
//   console.log(digitAdd," ",sum,"addtion of digit")
// }
// let ff = 9875
// console.log(SumOfDigit(ff,4))

// var data = [1, 2, 3, 5, 2, 1, 4];
// // var data = [0, 0, 1, 2, 1];

// var res = data.filter((v) => {
//   // console.log(v, "vvvv");
//   return (
//     data.filter((v1) => {
//       // console.log(v1, "v1v1v2");
//       return( v1 == v)
//     }).length==1
//   );
// });

// console.log(res,"responseeee")

// let am = "india is my country and all india is";
// const arry = am.split(' ');

// const toFindDuplicates =(arry)=> arry.filter((item, index) =>(
//   // console.log(index,"idex"),
//   // console.log(arry.indexOf(item),"itemindex"),
//    arry.indexOf(item) !== index
//    ))
// const duplicateElementa = toFindDuplicates(arry);
// console.log(duplicateElementa);

// var data = [1, 2, 3, 5, 2, 1, 4];
// let mis = Array.from(new Set(data))
// console.log(mis,"miss")

// let longStr ='abhdjacchjdjadcacchdhhacchtyasdfacc';

// let regx = /acc/g

// // let baxf = regx.exec(longStr)
// let baxf = longStr.match(regx)
// console.log(baxf.length)

// echo "# ecommerce" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/phargadeakshay/ecommerce.git
// git push -u origin main

//rearrange row in array string asending order  and check column is also in acending order or not if yes return YES.
// ebacd
// fghij
// olmkn
// trpqs
// xywuv
// grid = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']

// function gridChallenge(grid) {
//     // Write your code here

//   for (let i = 0; i < grid.length; i++) {
//         grid[i] = grid[i].split('').sort().join('');
//         // this sorts every char in each word of the row
//     }
//     for (let i = 0; i < grid.length - 1; i++) {
//         for (let j = 0; j < grid.length; j++) {
//                 if (grid[i][j] > grid[i+1][j]) {
//                     // here j stays the same while i increases.
//                     // so both elements are on the same col, different rows
//                     return "NO"
//                 }
//         }
//     }
//     return "YES";
// }

// function lonelyinteger(a) {
//     // Write your code here
//     let uniqarr=[]
//     let u=0;
//     for(let i of a){
//         for(let j of a)
//         {
//             if(i === j){
//                 u +=1
//             }
//         }
//         console.log(u)
//         if(u ===1){
//             uniqarr.push(i)
//         }
//         u=0
//     }
//     //console.log(uniqarr)
//     return uniqarr;
// }

// function timeConversion(s) {
//     // Write your code here
//     let str3;
// let str1 =s.slice(-2);
// let str2 =s.slice(0,s.length-2);
//  if(str1 === 'PM' && str2.slice(0,2) != "12"){
//      str3=str2.slice(0,2);
//      str3 = Number(str3);
//      str3 = str3 + 12;
//      str3 = str3+ str2.slice(2)
//      return str3.toString();
//  }
//  else if(str2.slice(0,2) === "12" && str1==="AM"){
//    str3=str2.slice(0,2);
//      str3 = "00";
//      str3 = str3+ str2.slice(2)
//      return str3.toString();
//  }
//  else if(str2.slice(0,2) === "12" && str1==="PM")
//  {
//     //   str3=str2.slice(0,2);
//     //  str3 = "12";
//     //  str3 = (str3+ str2.slice(2)).toString()
//      return str2;
//  }
//  else{
//      return str2;
//  }
// }
// console.log(timeConversion('12:00:00PM'))

//return jump next 2 char
// function caesarCipher(s, k) {
//     let str1= s.split('');
//     let a = "abcdefghijklmnopqrstuvwxyz"
//     let axv = "a"
//        const isUpperCase1 =axv===axv.toUpperCase() ? true : false
//     console.log(isUpperCase1,">>>>>>>>>>>>>>>>")
//     let b = a.split("")
//     let result = ''

//     for(let i of str1){
//         console.log(a.indexOf("z"))
//       const isUpperCase =i===i.toUpperCase() ? true : false
//       let rp = i.toLowerCase()
//         if(a.includes(i) && !isUpperCase){
//             let c = a.indexOf(i)
//             let curindex = ((c + k) % b.length)
//             console.log(curindex,"mmm")
//             let d = a[curindex]

//          // console.log(isUpperCase)

//             result +=d
//         }
//         else if(isUpperCase && a.includes(rp)){
//             let c = a.indexOf(rp)
//             console.log("cc",c)
//              let curindex = ((c + k) % b.length)
//              let d = a[curindex]
//             d = d.toUpperCase()
//             result += d
//             console.log(i,d ,rp,"aaaaaaaaaaaaaaaaaaaaaaaa")
//         }
//         else{
//             result +=i;
//         }
//     }
//             console.log(result)
//             return result

//  }
//  let s = "afhd-Wos"
//  let k = 2
//  console.log(caesarCipher(s,k))

// function runningMedian(a) {
//     // Write your code here
//     let arr = []
//     let result = []

//     for (let i of a) {
//         arr.unshift(i)
//         arr.sort((v, n) => { return v - n })
//         let l = arr.length;
//         let x = Math.floor(l / 2)

//         let j = Math.abs(x - 1)

//         if (l % 2 === 0) {
//             let med1 = (arr[x] + arr[j]) / 2;
//             result.push(Number(med1.toFixed(1)))
//         }
//         else {
//             result.push(Number((arr[x]).toFixed(1)))
//         }
//     }
//     console.log(result)
//     return result
// }

// library and road hackerrank question

// function roadsAndLibraries(n, c_lib, c_road, cities) {

  // Write your code here
//   if (c_lib <= c_road) {
//     return n * c_lib;
//   }
//   let dp = Array.from({ length: n + 1 }, (x, i) => [i]);
//   console.log(dp)
//   for (const [x, y] of cities) {
//     console.log(x,y)
//     console.log(dp[1],dp[2],"oo")
//     if (dp[x] === dp[y]) {
        
//         console.log(dp[x],dp[y],"jj")
//       continue;
//     }
//     const [bigger, smaller] =dp[x].length >= dp[y].length ? [dp[x], dp[y]] : [dp[y], dp[x]];
//     console.log(bigger,smaller,"qqqqqqqq")
//     for (const k of smaller) {
//       bigger.push(k);
//       dp[k] = bigger;
//       console.log(dp[k],'dpdpdpdpdpd',dp)
//     }
//   }
//   const set = new Set(dp.slice(1));
//   let result = 0;
//   for (const v of set) {
//     result += c_lib;
//     result += (v.length - 1) * c_road;
//   }
//   return result;
// }

// citiess = [[1, 2], [3, 1], [2, 3]]
// console.log(roadsAndLibraries(3,2,1,citiess))

function hourglassSum(arr) {
  let h= 0;
  let v= 0;
  let sum =0;
  let max=Number.MIN_SAFE_INTEGER;
  while ((h+2) < arr.length) {
      v=0;
      while ((v+2) < arr.length) {
          sum=0;
          for (let i=0+h ; i < (3+h); i++) {
              sum = sum + arr[v][i];
              sum = sum + arr[v+2][i];
          }
          sum = sum + arr[v+1][h+1];
          
          if (sum > max) {
              max= sum;
          }
          v++;
      }
     h++; 
  }
  
 return max;
}

 // we could set this to 3 given the problems constraings, but this allows changes
 maxX = 3; // + (arr[0].length % 3)
 maxY = 3; // + (arr.length % 3)
 total = -Infinity;  // has to be -64, but

 // begin at y == 0
 for (let y = 0; y <= maxY; y++) {
     for (let x = 0; x <= maxX; x++) {
         // sum the top of hourglass
         let sum = arr[y][x] + arr[y][x+1] + arr[y][x+2];
         
         // get the middle of hourglass
         sum += arr[y+1][x+1];
         
         // sum the bottom of hourglass
         sum += arr[y+2][x] + arr[y+2][x+1] + arr[y+2][x+2]
         
         // don't store result to keep space complexity down
         if (total < sum)
              total = sum;
     }
 }
 
 return total;

 function hourglassSum(arr) {
  let h= 0;
  let v= 0;
  let sum =0;
  let max=Number.MIN_SAFE_INTEGER;
  while ((h+2) < arr.length) {
      v=0;
      while ((v+2) < arr.length) {
          sum=0;
          for (let i=0+h ; i < (3+h); i++) {
              sum = sum + arr[v][i];
              sum = sum + arr[v+2][i];
          }
          sum = sum + arr[v+1][h+1];
          
          if (sum > max) {
              max= sum;
          }
          v++;
      }
     h++; 
  }
  
 return max;
}