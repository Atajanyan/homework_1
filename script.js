//reg
//ex1
// function makeQuestion(oprd1,oprd2,opr){
//     return `what is ${oprd1}${opr}${oprd2}`
// }
//makeQuestion(1,2,'+')


//ex2
// let obj = {
//     name:'kkk'
// }
// obj.ss = 'llll'
// obj['jjjjj'] = 'aaaaaa'
// console.log(obj);


//ex3
// function foo(array) {
//     for (let i = 0; i < array.length; i++) {
//         let unic = 0
//       for (let j = 0; j < array.length; j++) {
//          if (array[i]==array[j]) {
//             unic++
//          }   
//      }
//      if(unic==1)
//          console.log(array[i]);
//     }
// }
// foo([1,1,2,3,2])


//ex4
// function foo(arr) {
//     let arr1 = []
//     let max = arr[0]
//     let min = arr[0]
//     for (let i = 1; i < arr.length; i++) {
//             if (max<arr[i]) {
//                 max = arr[i]
//             }
//             if (min>arr[i]) {
//                 min = arr[i]
//             }
//         }
       
//         arr1.push(max)
//         arr1.push(min)
    
//     console.log(arr1);
// }
// foo([1,2,4,6,2])


//ex5
// function foo(arr) {
//     let kent = []
//     let zuyg = []
//     for (let i = 0; i < arr.length; i++) {
//        arr[i]%2==0?zuyg.push(arr[i]):kent.push(arr[i])
//     }
//     console.log(kent,zuyg);
// }
// foo([1,2,3,4,5,6,7,8,9])


//ex7
// function foo(arr1,arr2) {
//     let arr = []
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] == arr2[j]) {
//                 arr.push(arr1[i])
//             }
//         }
//     }
//     console.log(arr);
// }
// foo([1,2,3],[2,3,6,])


//ex8
// function foo(arr1,arr2) {
//     for (let i = 0; i < arr2.length; i++) {
//         let b = false
//         for (let j = 0; j < arr1.length; j++) {
//             if (arr2[i] == arr1[j]) {
//                 b = true; break
//             }
//         }
//           if(!b)
//           return false
//    }
//     return true
// }
// console.log(foo([1,2,3],[1,2]))


//ex9
// function foo(arr) {
//     let newArrr = []
//     let arr1 = []

//     for (let i = 0; i < arr.length; i++) {
//       isNaN(arr[i])?arr1.push(arr[i]):newArrr.push(arr[i])
//     }
//     for (let i = 0; i < arr1.length; i++) {
//         newArrr.push(arr1[i])
//     }
//     console.log(newArrr);
// }
// foo([1,'fdfv',3,'df'])


//ex10
// function foo(arr,arrIndex) {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arrIndex.length; j++) {
//             if (i==arrIndex[j]) {
//                 newArr.push(arr[i])
//             }
//         }
//     }
//     console.log(newArr);
// }
// foo(["mon", "tue", "wed", "thur", "fri"],[1, 3, 4])


//ex11
// function foo(str) {
//     let newStr = ''
//     for (let i = str.length-1; i >=0; i--) {
//         newStr+=str[i]
//     }
//     console.log(newStr);
// }
// foo('abcd')


//adv
//ex1
// function foo(strings,lookups) {
//     let arr = []
//     for (let i = 0; i < strings.length; i++) {
//         let count = 0
//         for (let j = 0; j < lookups.length; j++) {
//            if (strings[i]==lookups[j]) {
//               count++
//            }
//         }
//         arr.push(count)
//     }
//     console.log(arr);
// }
// foo(['i', 'love', 'sadakhlo', 'esminich'],['i', 'i', 'sadakhlo', 'i'])


//ex2
// function foo(arr) {
//     let obj ={}
//     let max = arr[0]
//     let min = arr[0]
//     let Gumar = 0
//     for (let i = 0; i < arr.length; i++) {
//         if(max<arr[i])max = arr[i]
//         if(min>arr[0])min = arr[i]
//         Gumar+=arr[i]
//         obj.min = Gumar-max 
//         obj.max = Gumar-min
//     }
//     console.log(obj);
// }
// foo([1,2,3,4])

// const payments = [
//     {
//       studentId: 1, // Unique identifier for each student
//       studentName: "John Doe", // Name of the student
//       payedAmount: 1600, // Amount payed with this transaction
//       year: 2020, // The payment year
//     },
//     {
//       studentId: 1, // Unique for each student
//       studentName: "John Doe",
//       payedAmount: 1500,
//       year: 2021
//     },
//     {
//       studentId: 1, // Unique for each student
//       studentName: "John Doe",
//       payedAmount: 1400,
//       year: 2022
//     },
//     {
//       studentId: 1, // Unique for each student
//       studentName: "John Doe",
//       payedAmount: 1300,
//       year: 2023
//     },
//     {
//       studentId: 2, // Unique for each student
//       studentName: "Lu Kang",
//       payedAmount: 1500,
//       year: 2020
//     },
//     {
//       studentId: 2, // Unique for each student
//       studentName: "Lu Kang",
//       payedAmount: 1400,
//       year: 2021
//     },
//     {
//       studentId: 2, // Unique for each student
//       studentName: "Lu Kang",
//       payedAmount: 1300,
//       year: 2023
//     },
//     {
//       studentId: 2, // Unique for each student
//       studentName: "Lu Kang",
//       payedAmount: 1200,
//       year: 2023
//     }
//    ];

  //  //ex 8,9,10,11,12
  //  let max = payments[0].payedAmount
  //  let sum = 0
  //  let average = 0
  //  for (let i = 0; i < payments.length; i++) {
  //     if(max<payments[i].payedAmount){
  //       max = payments[i].payedAmount
  //     }
  //     sum+=payments[i].payedAmount
  //     average = sum/payments.length
  //  }
  //  console.log(max,sum,average);


  
  //ex12
// let newStudentsArr = [] //vat tarberak
// let obj ={}
// let a = payments[0].studentId
// let b = 0
// let c = 0
// for (let i = 0; i < payments.length; i++) {
//   if(payments[i].studentId==a){
//     b+=payments[i].payedAmount
//   }else{
//     c+=payments[i].payedAmount
//   }
// }

// for (let i = 0; i < payments.length; i++) {
//   if(payments[i].studentId==a){
//     payments[i].payedAmount = b
//   }else{
//     payments[i].payedAmount = c
//   }
// }
// console.log(payments);

// for (let i = 0; i < payments.length; i++) {
//   if (payments[i].studentId == a) {
//     newStudentsArr.push(payments[i]); continue
//   }else{

//   }
// }
   