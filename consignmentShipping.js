arr = [1, 4, 4];
// arr = [6, 4, 4];
// arr = [6,2,2,10,4,2,2];

//  [6,2,2]  =10                 [10,4,2,2] =18        18-10 = 8
//  [6,2,2,10] =20              [4,2,2]= 8            20-8 =12

function Consignment(a) {

  let sum = a.reduce((r, t) => {
    return r + t;
  });  

  let halfOfSum = Number(Math.floor(sum / 2));
  let SumOfII = 0;
  let SumOf_I_Plus_1 = 0;
  let diffA = 0;
  let diffB = 0;


  for (let i = 0; i < a.length; i++) {
    SumOfII += a[i]; //10
    SumOf_I_Plus_1 = SumOfII + a[i + 1]; //18
    diffA = Math.abs(Number(SumOfII - halfOfSum)); //10 - 14 =  4
    diffB = Math.abs(Number(SumOf_I_Plus_1 - halfOfSum));  //18 - 14 = 4
    if (SumOf_I_Plus_1 >= halfOfSum) {  //18 >=14
      if (diffB < diffA) {//4<4
        let SecondConsignmentSum = Math.abs(SumOf_I_Plus_1 - sum); //find Second Consignment sum 20-28
        let moveA = Math.abs(SumOf_I_Plus_1 - SecondConsignmentSum);// difference between two Consignment
        console.log("if consdition run", SecondConsignmentSum, SumOf_I_Plus_1);
        return moveA;  // moveA means how time time shopkeer want to increase or decrease item count
      } else {
        let SecondConsignmentSum = Math.abs(SumOfII - sum); //10 - 28 = 18 
        console.log("inside else block", SecondConsignmentSum, SumOf_I_Plus_1);
        let moveA = Math.abs(SumOfII - SecondConsignmentSum); // 10 -18= 8
        return moveA;
      }
    }
  }
}
console.log(Consignment(arr));
