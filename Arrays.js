// 1

// function safeLast(arr) {
//    if(arr.length === 0) {
//        return "Empty" //if array is empty return empty
//   }
//             
//   
    // return arr[arr.length - 1]

// }

// console.log(safeLast([1, 2, 3, 4]))

// 2
// function countOccurrences(arr, value) {
//     let result = 0
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === value){
//             result++
//         }
//     }
//     return result
// }
// console.log(countOccurrences([1, 2, 3, 4, 3], 3))

// 3
// function uniqueArray(arr) {
//     let existArr = []
//     for(let i = 0; i < arr.length; i++){
//         if(!existArr.includes(arr[i])){
//             existArr.push(arr[i])
//         }
//     }
//     return existArr
// }
// console.log(uniqueArray([1, 1, 2, 3, 4]))

// 4
// function reverseArray(arr) {
//     let reverseArr = []
//     for(let i = arr.length - 1; i >= 0; i--) {
//     reverseArr.push(arr[i])  
// }
//     return reverseArr;
// }
// console.log(reverseArray([1, 2, 3, 4]))

// 5
// function addIfNotExist(arr, value) {
//     if(arr.includes(value)) {
//             return "exists"
//         } else{
//             arr.push(value)
//         }
//     return arr
// }

// console.log(addIfNotExist([1, 2, 3, 4, 5], 5))

// 6

// function longestWord(words) {
//     let longest = ''
//     for(let i = 0; i < words.length; i++){
//         if(words[i].length > longest.length){
//             longest = words[i]
//         }
//     }
//     return longest
// }

// console.log(longestWord(['ayoub', 'anas', 'yassine', 'ddcdcjdjcjdcdc']))

// 7
// function mergeThree(a, b, c) {
//     return [a,b,c].sort()

// }
// console.log(mergeThree(2, 3, 1))


// 8
// function onlyEven(arr) {
//     let number = arr.filter(n => n % 2 == 0)
//     return number
// }

// console.log(onlyEven([2, 3, 5, 6, 8, 12]))

// 9
// 10
// function removeAll(arr, value) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== value) { //
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// console.log(removeAll([1, 2, 3, 4, 5], 3));

//11
// function pairImpairs(arr){
//     let even = []
//     let odd = []
//     for(let i =0; i < arr.length; i++) {
//         if(arr[i] % 2 === 0) {
//             even.push(arr[i])
//         } else {
//             odd.push(arr[i])
//         }
//     }
//     return odd
// }

// console.log(pairImpairs([2, 3, 8, 5, 4, 9]))
