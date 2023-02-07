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

// ### Уникальность всех символов в строке

// Напишите функцию, которая определяет уникальны ли все символы в строке. Регистр должен учитываться: `‘a’` и `‘A’` разные символы.

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
// Напишите функцию, принимающая массив с вложенными массивами и распакуйте в результирующий плоский массов. В результате должны получить новый одномерный массив.

// **Input**: Array

// **Output**: Array

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


//===================//=============  #4 Удаление всех повторяющихся значений в строке ===================//============

// Vladilen: https://vladilen.notion.site/JavaScript-473541d86991472fb844c5fa35d5dbf4
// ### Какая строка встречается чаще всего

// Напишите функцию, которая принимает массив строк и возвращает самую частовстречающуюся строку в этом массиве. Если таких строк несколько, то нужно вернуть первую, идя слева на право.

// **Input**: String[]

// **Output**: String


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
// ### Какая строка встречается чаще всего

// Напишите функцию, которая принимает массив строк и возвращает самую частовстречающуюся строку в этом массиве. Если таких строк несколько, то нужно вернуть первую, идя слева на право.

// **Input**: String[]

// **Output**: String

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

// Напишите функцию, которая принимает 2 строки. Верните `true` если строки являются перевернутым вариантом друг друга (см. пример). Иначе верните `false`.

// **Input**: String, String

// **Output**: Boolean
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





//===================//=============  #6 Является ли массив подмассивом? ===================//============
// ### Является ли массив подмножеством другого массива

// Напишите функцию, которая проверяет, является ли второй массив подмножеством первого. То есть есть ли элементы второго массива в первом.

// **Input**: Number[] & String[], Number[] & String[]

// **Output**: Boolean


//case 1

// function arraySubset(source, subset) {
//     if(source.length < subset.lenght) return false;

//     for(let i = 0; i < subset.length; i++) {
//         const index = source.indexOf(subset[i]);
//         if (index == -1) {
//             return false
//         }
//         delete source[index];
//     }
//     return true
//   }
  
//   console.log(arraySubset([2, 1, 3], [1, 2, 3])) // -> true
//   console.log(arraySubset([2, 1, 1, 3], [1, 2, 3])) // -> true
//   console.log(arraySubset([1, 1, 1, 3], [1, 3, 3])) // -> false
//   console.log(arraySubset([1, 2], [1, 2, 3])) // -> false




//===================//=============  #6 Анаграммы? ===================//============
// ### Анаграммы

// Напишите функцию, которая проверяет, являются ли все элементы в массиве анаграммами друг друга.

// **Input**: String[]

// **Output**: Boolean


//case 1

// function allAnagrams(array) {
//     const sorted = array.map(str => str.split('').sort().join(''))
//     console.log(sorted)
//     for (let i = 1; i < sorted.length; i++) {
//         if(sorted[i] !== sorted[0]) {
//             return false
//         }
//     }
//     return true
//   }
//   console.log(allAnagrams(['abcd', 'bdac', 'cabd'])) // true
//   console.log(allAnagrams(['abcd', 'bdXc', 'cabd'])) // false


//===================//=============  #7 повернута ли матрица? ===================//============

// ### Перевернуть матрицу 3х3

// Напишите функцию, которая принимает матрицу 3х3 и переворачивает на 90 градусов по часовой стрелке.

// **Дополнительно**: Напишите еще 2 функции, которые переворачивают матрицу на 180 и 270 градусов.

// [1, 2, 3]    [7, 4, 1]
// [4, 5, 6] -> [8, 5, 2]  
// [7, 8, 9]    [9, 6, 3]

//case

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  
  function rotate(source) {
    const newMatrix = source[0].map(_ => [])
    return newMatrix
  }

  function print(array) {
    array.forEach(i=>console.log(i))
  }
  
print(rotate(matrix))