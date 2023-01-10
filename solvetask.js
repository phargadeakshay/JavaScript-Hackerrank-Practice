// let a1 = [2,4,6,8,10,12];
// let a2 = [10,13,7,45,15];
// for(let a in a1){
//     for(let b in a2){
//         let c = Math.sqrt(a1[a] + a2[b])
//         if(Number.isInteger(c)){
//           console.log(a1[a], " and ",a2[b])
//         }
//     }
// }

function removeChar(sq) {
  let a = sq.split("");

  for (let i = 0; i < a.length; ) {
    if (a[i] === "A" && a[i + 1] === "B") {
      console.log(a, "11111ififififififif");
      a.splice(i, 2);
      console.log(a, "ififififififif");
      i = 0;
    } else if (a[i] === "B" && a[i + 1] === "B") {
      console.log("iiiiiiiiiiiii", i, i + 1);
      a.splice(i, 2);
      console.log(a, "111else", a[i], a[i + 1], i, i + 1);
      i = 0;
      console.log(a, "else", a[i], a[i + 1], i, i + 1);
    } else {
      i++;
    }
    console.log(a, "for in side", i);
  }

  console.log(a, "aaaaaa");
  return a.length;
}

// different logic
// function removeChar(sq) {
//   let beforereplace = sq.length;
//   let afterrelace = 0;

//   while (true) {
//     if (beforereplace === afterrelace) {
//       break;
//     }
//     beforereplace = sq.length;
//     sq = sq.replace("AB", "").replace("BB", "");
//     afterrelace = sq.length;
//   }
//   console.log(sq, "sqqqqsssqq");
//   return sq.length;
// }
// let jj="ABABABABABABABBBAAABBBBBBBBBABABABAAAAAAAABBBABABABABABAB"
let jj = "BBBABAABBB";
// BA
// let jj="ABBBBBAB"
console.log(removeChar(jj), "fucntikkkkkkkkk");
console.log("11111111111111111111111111111");

// function runningMedian(a) {
//   // Write your code here

//   let arr = [];

//   let middle = 0;
//   let c = 0;
//   let b = 0;

//   for (let i = 0; i < a.length; i++) {

//     arr.unshift(a[i]);
//     arr = arr.sort((g,h)=>{return g-h})
//     // console.log(arr, "aarr ififif11111111111111111111");
//     let l = Number(arr.length);
//     let zz = Number(l / 2);

//     if (Number.isInteger(zz)) {
//       c = zz;
//       b = zz - 1;
//       middle = Number((arr[c] + arr[b]) / 2);
//       console.log(middle, "iffffffffffffff",arr,arr[c],arr[b],l);
//     }
//      else {
//      let  a = Math.floor(zz);
//       middle = Number(arr[a]);

//       console.log(middle,"elseeeeeeee");
//     }
//   }
// }
// a11 = [12, 4, 5, 3, 8, 7]
// runningMedian(a11)