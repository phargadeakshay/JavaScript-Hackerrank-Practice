// // import PromptSync from "prompt-sync";
// // import prompt from "prompt-sync"
// const prompt = require("prompt-sync")()

// let a
// let b=[];
//  a = parselet(prompt("Enter first Num: "))
// //  b = parselet(prompt("Enter second Num: "))
// //  console.log(a+b)

// for(let i =0; i<5;i++){
//   a = parselet(prompt("Enter first Num: "))
//   b.push(a)
// }
// console.log("Array :",b)



// let am = "india is my country and all india is";
// // const arry = am.split(' ');
// let arry = [1,3,2,1,2,3,1,2]
// function toFindDuplicates(){
// let sv = arry.filter((item, index) =>(
//   // console.log(index,"idex"),
//   // console.log(arry.indexOf(item),"itemindex"),
//    arry.indexOf(item) == index
//    ))
// return sv
// }

// const duplicateElementa = toFindDuplicates(arry);
// console.log(toFindDuplicates(arry));


// let yt = [1,3,21,4,21,4,3,2,4,5,6,7]
// let rt=[]

// let index = 0
// for(let i of yt){
//    if(yt.indexOf(i)===index){
//      rt.push(i)
//    }
//    index++;
// }
// console.log(rt)

// function lonelyleteger(a) {
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

// let a =[1,2,3,2,4,9,7,6,9,6,11,23,23,4,7,98]
// console.log(lonelyleteger(a))




// function BubbleSort(arr){
//   let n = arr.length;  
//   let temp = 0;  
//    for(let i=0; i < n; i++){  
//            for(let j=1; j < (n-i); j++){  
//                     if(arr[j-1] > arr[j]){  
//                            //swap elements  
//                            temp = arr[j-1];  
//                            arr[j-1] = arr[j];  
//                            arr[j] = temp;  
//                    }  
                    
//            }  
// }
// return arr
// }
// console.log(BubbleSort(a))


// function ThreePair(a){
//   let l = a.length;
//   let p = a/3;

//   let c = a.splice(0,3)
//   let d = a.splice(0,3)
//   let f = a.splice(0,3)
//   let n = c.length

// //   console.log(c,d,f,a)
//  for(let i =0;i<n;i++)
//  {
//   console.log(c[i])
//   if(c.includes(3)){
    
//     c.splice(c.indexOf(3),1)
//     console.log("aa")
//   }
//   if(d.includes(3)){
//     d = d.splice(d.indexOf(3),1)
//   }
//   if(f.includes(3)){
//     f = f.splice(f.indexOf(3),1)
//   }
//  }
//  console.log(c,d,f,a)

// }
// let a = [5,4,3,2,8,7,6,5,9]

// ThreePair(a)
// let a = [5,4,3,2,8,7,6,5,9]
// let currindex = a.indexOf(6)
// let nextindexrightshift = (((currindex + 1)) % a.length)
// let nextindexLeft = ((currindex + a.length - 2) % a.length)

// console.log(a[nextindexrightshift],a[nextindexLeft])




// function beautifulDays(i, j, k) {
//     // Write your code here
//     let BeautifullDay=0
// for(let a = i;i<=j;i++){
//     let revI = i.toString().split("").reverse().join("");
//     let revINum = parseInt(revI);
//     if(Math.abs(i - revINum)%k ===0){
//         BeautifullDay++
//     }
// }
// return BeautifullDay;
// }


// function arrayManipulation(n, queries) {
//     let newArr = new Array(n + 2).fill(0);
//     // console.log(newArr)

//     for (let i = 0; i < queries.length; i++) {
//          let [a, b, k] = queries[i];
//          console.log( [a, b, k] = queries[i])

//         newArr[a] += k;
//         newArr[b + 1] -= k;
//         console.log(newArr,a)
//     }

//     let sum = 0, max = 0;

//     for (let i = 0; i < newArr.length; i++) {
//         sum += newArr[i];
//         max = Math.max(max, sum);
//     }
//     return max;
// }
// let n =5;
// // let arr= [[1,5,3],[4,8,7],[6,9,1]]
// let arr = [[1,2,100],[2,5,100],[3,4,100]]
// console.log(arrayManipulation(n,arr))

// function maxMin(k, arr) {
//     let min = Infinity
//     arr.sort((a, b) => a - b)
//     for (let i = 0; i < arr.length - k + 1; i++)
//         min = Math.min(min, Math.abs(arr[i] - arr[i+k-1]))
//     return min
// }

function jimOrders(orders) {
    // Write your code here
    let obj = {};
    for (let i = 0; i < orders.length;) {
        let temp = orders[i][0] + orders[i][1];
        i++;
        obj[i] = temp;
        // console.log(obj)
    }
    let reciveArr = [];
    for (let elm in obj) {
        reciveArr.push([elm, obj[elm]]);
        // console.log(elm,obj[elm],reciveArr,typeof(elm))
    }
    console.log(reciveArr)
    reciveArr.sort((a, b) => a[1] - b[1]);
    console.log(reciveArr)
    for (let i = 0; i < reciveArr.length; i++) {
        reciveArr[i] = reciveArr[i][0]
        console.log(typeof(reciveArr[i][0]),i)
    }
   return reciveArr;

}
5
let arr =[[8,1],[4,2],[5,6],[3,1],[4,3]]
console.log(jimOrders(arr))


// let a = {"a":1,"c":1,"a":6,1:3,4:"ba"}
// let a = [5,4,3,2,8,7,6,5,9]
// for(let i in a ){
//     console.log(i,"o",a[i],typeof(i))
// }





