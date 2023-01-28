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

// console.log(isUnique('abcdef')) // -> true
// console.log(isUnique('1234567')) // -> true
// console.log(isUnique('abcABC')) // -> true
// console.log(isUnique('abcadef')) // -> false

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
// console.log(isUnique('abcadef'))


//case 3 - продвинутый способ
//еще более лаконичный:

// function isUnique(string) {
// return new Set(string).size === string.length
// }
// console.log(isUnique('abcdef'))

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

function removeDupes(str) {
    const res = []; 
    const map = {};
    for (let i =0; i < str.length; i++) {
        const char = str[i];
        if(!map[char]) {
            map[char] = true;
            res.push(char);
        }
        }
    return res.join('');
}


console.log(removeDupes('abcd')) // -> 'abcd'
console.log(removeDupes('aabbccdd')) // -> 'abcd'
console.log(removeDupes('abcddbca')) // -> 'abcd'
console.log(removeDupes('abababcdcdcd')) // -> 'abcd'