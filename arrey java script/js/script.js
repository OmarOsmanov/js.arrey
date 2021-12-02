// task arreyleri birlesdirme

// let ages =[];
// ages[0]=10;
// ages[1]=20;
// ages[2]=30;
// ages[3]=40;
// ages[4]=50;
// ages[5]=60;
// ages[6]=70;

// let ages2=[80,85,90];
// ages= ages.concat(ages2);
// console.log(ages)





//task 2 verilen araliqda cixar ededleri

// function range(start, end) {
//     return Array(end - start + 1).fill().map((_, idx) => start + idx)
//   }
//   let num1=Number(prompt("1 ci ededi daxil edin:"));
//   let num2=Number(prompt("2 ci ededi daxil edin:"));






// task 3

// function checkFactors(fak, eded) 
//   {
//     for (let i=0; i<fak.length; i++)
//     {
//       let element = fak[i];
//       if (eded % element !== 0)
//       {
//         return false 
//       }
//     }
//         return true
//   }
//   console.log(checkFactors([3, 6,], 9))







//task 4 azerbaycan dilinde arrey

let arr=[32,25,85,89,45,76,7,41,2,12]



// arr.push(15);               //  variant c;

// arr.shift();                //  variant d;

// console.log(arr);           //  variant a;

// arr.forEach(element => {    // varinat h;
//     console.log(element)
// });


// let newAges = arr.slice(3, 10);  

// for (let i = 0; i < newAges.length; i++)
//  {
//     console.log(newAges[i]);   // variant g;
//  }


// let enBoyok=arr[0];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>enBoyok)
//     {
//         enBoyok=arr[i];
//     }
// }
// console.log(enBoyok)    // variant b;



// arr.sort(function(a, b){return a - b});     // variant e
// let arrey = arr[arr.length-1];
// console.log(arrey)            


// arr = arr.filter(item => item > 40);   // variant i
// console.log(arr);

// arr[3]=43;
// console.log(arr)  // variant f






//task aylar

// let month = Number(prompt("enter the number:"));

// switch (month) {
//     case 1:
//         alert("January")
//         break;
//     case 2:
//         alert("February")
//         break;
//     case 3:
//         alert("Mart")
//         break;
//     case 4:
//         alert("Aprel")
//         break;
//     case 5:
//         alert("MAy")
//         break;
//     case 6:
//         alert("june")
//         break;
//     case 7:
//         alert("Iyul")
//         break;
//     case 8:
//         alert("August")
//         break;
//     case 9:
//         alert("September")
//         break;
//     case 10:
//         alert("October")
//         break;
//     case 11:
//         alert("November")
//         break;
//     case 12:
//         alert("December")
//         break;

//     default:
//         alert("please enter the (1-12)")
//         break;
// }








// task yoxlama

// let num = [1,2,3,4,5];
// let numcheck= [3]
// function checkFactors(numcheck, numName) 
// {
// for (let i = 0; i < numcheck.length; i++) {
//     if (numName.find(item => item == numcheck[i])) 
//         {
//            console.log("true")
//         } 
//         else
//         {
//           console.log("false")
//         }

//     }

// }
// checkFactors(numcheck, num);







