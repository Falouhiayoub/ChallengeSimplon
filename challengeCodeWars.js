// reverse string
// function solution(str){
//   let reversedWord = ''
//   for(let i = str.length - 1; i >= 0; i--){
//     reversedWord += str[i]
//   }
//   return reversedWord

// }
// console.log(solution('world'))
// // bool to word
// function boolToWord( bool ){
// if(bool === true) {
//   return 'Yes'
// } else {
//   return 'No'
// }

// }
// console.log(boolToWord(true))
// // somme positive numbers
// function positiveSum(arr) {
//  let sum = 0
//  for(let i = 0; i < arr.length; i++){
//    if(arr[i] > 0) {
//      sum += arr[i]
//    }
//  }
//   return sum
// }

// console.log(positiveSum([1, -5, 6, -4, 8]))
// //reapted string
// function repeatStr (n, s) {
//   let result = '';
//   for(let i= 0; i < n; i++){
//     result += s
//   }
//   return result
// }
// console.log(repeatStr(5, "Hello"))
// // remove FIRST ANd last char
// function removeChar(str){
//  let result = ''
//  for(let i = 1; i < str.length- 1 ; i++){
//    result += str[i]
//  }
//   return result
// }

// // };
// console.log(removeChar('hello'))
// // smallest int
// function findSmallestInt(arr) {
//   let smallest = arr[0]
//   for(let i = 1; i < arr.length; i++){
//     if(arr[i] < smallest ){
//       smallest= arr[i]
//     }
//   }
//   return smallest;
// }

// console.log(findSmallestInt([5, 1, 3, 8]))


// function booleanToString(b){
//   let result = ''
//   let b = value ? 'true' : 'false'
//   for(let i = 0; i < b.length; i++) {
//     result += b[i]
//   }
//   return result
// }
// check if string is repated how many times 

// const checkRepeat = (str, char) => {
//   let count = 0
//   for (let i = 0; i < str.length; i++) {
//       if(str[i] === char){
//         count++
//       }
//     }
//     return count
// }
// console.log(checkRepeat("hello", 'e'))

//counting sheep 
// const countSheep = (sheep) => {
//   let count = 0
//   for(let i = 0; i < sheep.length; i++) {
//     if(sheep[i]){
//       count ++
//     }
//   }
//   return count
// }
// let sheeps = [true, true, false, true, true]
// console.log(countSheep(sheeps))