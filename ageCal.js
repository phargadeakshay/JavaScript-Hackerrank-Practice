// function ageCalcu(d1,m1,y1){
//     var date = new Date();
//     var d2 = date.getDate();
//     var m2 = 1 + date.getMonth();
//     console.log(m2,"llq")
//     var y2 = date.getFullYear();
//     var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    
//     if(d1 > d2){
       
//         d2 = d2 + month[m2 - 1];
//         console.log(month[m2 - 1],"ll")
//         m2 = m2 - 1;
//         console.log(m2,"ll")

//     }
//     if(m1 > m2){
//         m2 = m2 + 12;
//         y2 = y2 - 1;
//         console.log(y2,"yuuuy")
//     }
    
//     var d = d2 - d1;
//     var m = m2 - m1;
//     console.log(m2,m1,"KK")
//     var y = y2 - y1;
//     console.log(y2,y1,"yy")
//     console.log("Your Age is "+y+" year "+m+" month and "+ d+ " day ")
    
//     }
    
//     ageCalcu(31,12,1994)




// arr = ["akshay", "kunal", "kartik", "dhanji"]


//  for(let i in arr){
//     console.log(arr[i] = arr[i].split('').sort().join(""))
    
//  }
// console.log(arr[1][1])





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
// //   console.log(digitAdd," ",sum,"addtion of digit")
// return digitAdd
// }
// let ff = 148
// console.log(SumOfDigit(ff,4),"ffffff")


function superDigit(n, k) {
    let digit = 0;
    console.log(typeof(n))
   for (let num of n.toString()) {
    console.log(typeof(num))
     digit += Number(num);
   }
   digit*=k;
   if (digit / 10 > 1) {
     return superDigit(digit, 1);
   } else {
     return digit;
   }
 }



// function caesarCipher(s, k) {
//   const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  
//   const stringArray = s.split('')
//   let result = ''
  
//   stringArray.map(letter => {
//       const currentIndex = alphabet.findIndex(l => l === letter.toLowerCase())
//       let newIndex
      
//       const isUpperCase = letter === letter.toUpperCase() ? true : false

//       if (currentIndex !== -1) {
//           newIndex = ((currentIndex + k) % alphabet.length)
          
//           result += isUpperCase ? alphabet[newIndex].toUpperCase() : alphabet[newIndex]
//       } else {
//           result += letter
//       }
//   })
  
//   return result

// }


function caesarCipher(s, k) {
  let str1= s.split('');
  let a = "abcdefghijklmnopqrstuvwxyz"
  let axv = "a"
     const isUpperCase1 =axv===axv.toUpperCase() ? true : false
  console.log(isUpperCase1,">>>>>>>>>>>>>>>>")
  let b = a.split("")
  let result = ''
  
  for(let i of str1){
      console.log(a.indexOf("z"))
    const isUpperCase =i===i.toUpperCase() ? true : false
    let rp = i.toLowerCase()
      if(a.includes(i) && !isUpperCase){
          let c = a.indexOf(i)
          let curindex = ((c + k) % b.length)
          console.log(curindex,"mmm")
          let d = a[curindex]
       
       // console.log(isUpperCase)

          result +=d
      }
      else if(isUpperCase && a.includes(rp)){
          let c = a.indexOf(rp)
          console.log("cc",c)
           let curindex = ((c + k) % b.length)
           let d = a[curindex]
          d = d.toUpperCase()
          result += d
          console.log(i,d ,rp,"aaaaaaaaaaaaaaaaaaaaaaaa")
      }
      else{
          result +=i;
      }
  }
          console.log(result)
          return result

}
let s = "afzhd-Wos"
let k = 2
console.log(caesarCipher(s,k))

const array = [1, 3, 5, 7];

const index = array.indexOf(5);
if (index > -1) {
  array.splice(index, 1);
}
console.log(array)