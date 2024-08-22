// function repeatCharacters(str) {
//     let result = '';
    
//     for (let i = 0; i < str.length; i++) {
//         result += str[i].repeat(i + 1) + '-';
//     }
    
//     // Remove the extra dash at the end
//     result = result.slice(0, -1);
    
//     return result;
// }

// Test the function with the input "abcd"
// console.log(repeatCharacters("abcd")); // Output: "a-bb-ccc-dddd"

// const isPalindrome = (num) => {
//     let str = num.toString();
//     return str == str.split('').reverse().join('');
// };

// let number = prompt("Soz kiriting:");
// let squared = number * 2;
// console.log(`${squared} soni palindrome ${isPalindrome(squared) ? 'ha' : 'yo\'q'}`);


// function changeValue (x) {
//     x = 10;
//     console.log("inside function " , x);
// }

// let num = 5;
// changeValue(num);
// console.log("outside function :", num);


// function.js

// 4. "abcd" => "a-bb-ccc-dddd"
// export function stringPattern(str) {
//     return str
//         .split('')
//         .map((char, index) => char.toLowerCase().repeat(index + 1))
//         .join('-');
// }

// // 5. Palindromni tekshirish

// export function isPalindrome(str) {
//     const cleaned = str.replace(/[\W_]/g, '').toLowerCase();
//     return cleaned === cleaned.split('').reverse().join('');
// }

// // 6. String harflarining takrorlanmasligini tekshirish

// export function hasUniqueCharacters(str) {
//     const charSet = new Set();
//     for (let char of str) {
//         if (charSet.has(char)) {
//             return false;
//         }
//         charSet.add(char);
//     }
//     return true;
// }

// export function findDivisors(num) {
//     const divisors = [];
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             divisors.push(i);
//         }
//     }
//     return divisors.length === 2 ? 'tub' : divisors;
// }
