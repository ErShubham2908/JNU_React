//  Default Parameter
function Sum(a = 1, b = 2){
    console.log(a+b);
}


// Sum(10, 20);
// Sum();

// Q. Find the area of Rect. with default value of width and height is 5 and 10 resp. 
// create a function to claculate area of Rect.

// Spread Operator - (ES6)
// let a = 10;
let array = [1,2,3,4,5];
for(let i = 0 ; i < array.length ; i++){
    // console.log(array[i]);
    
}
// console.log(array);

// console.log(...array);


let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];
let array4 = [];
// o/p = array = [1,2,3,4,5,6,7,8]
// arr2[4] = 
// console.log(arr1 + arr2);
for(let i = 0; i< (arr1.length + arr2.length); i++){
    if(i<arr1.length){
        array4[i] = arr1[i];
        // console.log(i);
        
    }else{
        array4[i] = arr2[i-arr2.length]
        // console.log(i);
    }
}

// console.log(array4);


// i = 0,1,2,3,4,5,6, 7 - array 4 length - (8)
// arr1 - 4, arr2 - 4 - 0-7
// console.log(...arr1, ...arr2);

// find the sum of elements of array.
// const arr = [1,2,3,4,5];
// const arr = [2,3,4,5,4,3,2,3,4] 
// let sum = 1;
// for(let i = 0 ; i < arr.length ; i++){
//     sum = sum * arr[i];
// }

// console.log(sum);


// let num = 1234;

// Day - 3
// const array = [2,3,4,5,6,7];
// // [5,6,7,8,9,10] - use map method
// // Map - return new array
// let sum = 0;
// const ans = array.map((items, index) =>{
//     // console.log("index: ",index);
//     // console.log("item:",items);
//     sum += items
//     // return items+3
//     return sum
// })
// console.log(sum);

// Filter Method
// const ans = array.filter((items)=> {
//     return items%2 === 0
// })

// console.log(ans);