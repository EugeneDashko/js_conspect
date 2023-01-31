//===================//=============  #1 ПАЛИНДРОМ  ===================//============


// //Развернутая запись: 

// function palindrom (str) {
//     //нижний регистр
//     str = str.toLocaleLowerCase();
//     //строку в массив
//     let str2 = str.split('');
//     str2 = str2.reverse();
//     str2 = str2.join('');
//     console.log(str2)
//      if (str2 == str) {
//         return true
//      } else {
//         return false
//      }
// }
// console.log(palindrom("abba"))

// //Краткая правильная запись для демонстрации на собесе:

// const palindrom = str => {
//     str.toLocaleLowerCase();
//     return str == str.split('').reverse().join('');
// }
// //недостаток этой задачи что она не решает проблемы с эмодзи



//===================//=============  #2 СРАВНЕНИЕ СИМВОЛОВ СТРОКИ ===================//============
// Vladilen: https://vladilen.notion.site/JavaScript-473541d86991472fb844c5fa35d5dbf4

//case 1
// function isUnique(string) {
//     for(let i=0; i< string.length; i++) {
//         const char = string[i];
//         if(string.indexOf(char) !== i) {
//             return false
//         }
//     }
//     return true
// }


//case 2 - продвинутый способ            map - структура данных
// function isUnique(string) {
// const set = new Set();

// for(let i =0; i < string.length; i++) {
//     const char = string[i];

//     if(set.has(char)) {
//         return false
//      }
//     set.add(char)
//     }
//     return true
// }

//case 3 - продвинутый способ
//еще более лаконичный:

// function isUnique(string) {
// return new Set(string).size === string.length
// }
// console.log(isUnique('abcdef')) // -> true
// console.log(isUnique('1234567')) // -> true
// console.log(isUnique('abcABC')) // -> true
// console.log(isUnique('abcadef')) // -> false

//===================//=============  #3 ПЛОСКИЙ МАССИВ ===================//============
//ПРИНИМАЕТ МАССИВ С МАССИВАМИ И ВОЗВРАЩАЕТ РАЗВЕРНУТЫЙ МАССИВ

// Решение через РЕКУРСИЮ
// function flatten(array) {
//     const resArr =[];
//     for(let i=0; i < array.length; i++) {
//         if(Array.isArray(array[i])) {
//             const flat = flatten(array[i])
//          for(let j=0; j < flat.length; j++) {
//             resArr.push(flat[j])
//          }
//     } else {
//         resArr.push(array[i])
//         }
//     }
//     return resArr;
//   }

//   console.log(flatten([[1], [[2, 3]], [[[4]]]])) // -> [1, 2, 3, 4]


//===================//=============  #3 Удаление всех повторяющихся значений в строке ===================//============
// Vladilen: https://vladilen.notion.site/JavaScript-473541d86991472fb844c5fa35d5dbf4

//case 1
// function removeDupes(str) {
//     const res = []; 
//     const map = {};
//     for (let i =0; i < str.length; i++) {
//         const char = str[i];
//         if(!map[char]) {
//             map[char] = true;
//             res.push(char);
//         }
//     }
//     return res.join('');
// }

//case 2
// function removeDupes(str) {
//      return Array.from(new Set(str)).join('');
// }

// console.log(removeDupes('abcd')) // -> 'abcd'
// console.log(removeDupes('aabbccdd')) // -> 'abcd'
// console.log(removeDupes('abcddbca')) // -> 'abcd'
// console.log(removeDupes('abababcdcdcd')) // -> 'abcd'j




//===================//=============  #4 Вернуть чаще всего повторяющеся слово в массиве ===================//============

// function highestFrequency(array) {
//     const map = {};
//     let maxFreq = 0;
//     let maxFreqStr = array[0]

//     for (let i = 0; i < array.length; i++) {
//         const current = array [i];

//         if (map[current]) {
//             map[current]++
//         } else {
//             map[current] = 1
//         }
//         if(map[current] > maxFreq) {
//             maxFreq = map[current]
//             maxFreqStr = current;
//         }
//     }
//     console.log(maxFreq)
//     console.log(maxFreqStr)
//     return maxFreqStr
// }

// console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])) // -> c
// console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])) // -> abc
// console.log(highestFrequency(['abc', 'def'])) // -> abc
// console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'gh']));










//===================//=============  #5 Повернута ли строка? ===================//============

// ===== мое решение ===========================================
// function isStringRotated(source, test) {
//     let newarr = {};
//     let newarr2 ={};
//         if(source.length == test.length) {
//             for (let i = 0; i < source.length; i++) {
//                 let char = source[i];
//                 if (newarr[char]) newarr[char]++
//                 else newarr[char] = 1;
//             }
//             for (let j = 0; j < test.length; j++) {
//                 let char2 = test[j];
//                 if (newarr2[char2]) newarr2[char2]++
//                 else newarr2[char2] = 1;
//             }
//             for (key in newarr) {
//                 if(newarr[key] == newarr2[key]) return true
//             }
//         } else {
//             return false
//         }

//     }



// =========================решение  из урока==============================
//case 1

// function isStringRotated(source, test) {
//     if(source.length !== test.length) return false

//     for (let i = 0; i < source.length; i++) {
//         const rotate = source.slice(i, source.length) + source.slice(0, i)
//         console.log(rotate)
//         if (rotate == test) {
//             return true
//         }
//     }
//     return false
// }


//case 2

// function isStringRotated(source, test) {
//     return (source + source).includes(test) && source.length === test.length

// }

//   console.log(isStringRotated('javascript', 'scriptjava')) // -> true
//   console.log(isStringRotated('javascript', 'iptjavascr')) // -> true
//   console.log(isStringRotated('javascript', 'java')) // -> false