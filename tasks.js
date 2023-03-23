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


// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ]
  

  /*Логика:

  0:0 0:1 0:2    0:2 1:2 2:2
  1:0 1:1 1:2 -> 0:1 1:1 2:1
  2:0 2:1 2:2    0:0 1:0 2:0

  */

  // function rotate(source) {
  //   const rotated = source.map(_ => [])

  //   for (let i = 0; i < source.length; i++) {
  //     for (let j = 0; j < source[i].length; j++) {
  //       rotated[j][source.length -1 -i] = source[i][j];
  //     }
  //   }
  //   return rotated
  // }
  
 
  // // Helfer func:
  // function print(arr) {
  //   arr.forEach(i => console.log(i))
  // }
  // print(rotate(matrix))



  //===================//=============  #8 Простой поиск? ===================//============

//   ### Простой поиск

// Напишите функцию, которая принимает отсортированный массив с числами и число. Необходимо вернуть индекс числа, если оно есть в массиве. Иначе вернуть `-1`.

// **Input**: Number[], Number

// **Output**: Number

// function search(array, target) {
//   for(let i = 0; i < array.length; i++) {
//     if(array[i] === target) return i

//   }
//   return -1
// }

// console.log(search([1, 3, 6, 13, 17], 13)) // -> 3
// console.log(search([1, 3, 6, 13, 17], 12)) // -> -1




//===================//=============  #8 Простой поиск? ===================//============
// Напишите функцию, которая проверит строку на сбалансированность скобок: `{}, (), []`. Вернуть `true` если они сбалансированы, иначе `false`.

// **Input**: String

// **Output**: Boolean


// function isBalanced(string) {
//   const start = '{[(';
//   const end = '}])';

//   const map = {
//     '}': '{',
//     ']':'[',
//     ')':'('
//   }
  
//   const queue = [];

//   for (let i = 0; i < string.length; i++) {
//     const char = string[i];
//     if(start.includes(char)) {
//       queue.push(char)
//     } else if (end.includes(char)) {
//       const last = queue.pop()
//       if (map[char] !== last) {
//         return false
//       }
//     }
//   }
//   return !queue.length;
// }

// console.log(isBalanced('()()')) // -> true
// console.log(isBalanced('(x + y) - (4)')) // -> true
// console.log(isBalanced('(((10 ) ()) ((?)(:)))')) // -> true
// console.log(isBalanced('[{()}]')) // -> true
// console.log(isBalanced('(50)(')) // -> false
// console.log(isBalanced('[{]}')) // -> false








//===================//=============  Задачи с лекции RSS  ===================//============

// function accum(str) {

// const result = str.toLocaleLowerCase().split('').map((symb, index) => `${symb.toUpperCase()}${Array(index).fill(symb).join('-')}`)
// return result;
// }

// console.log(accum("abcd") )//-> "A-Bb-Ccc-Dddd"
// console.log(accum("RqaEzty")) //-> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// console.log(accum("cwAt")) //-> "C-Ww-Aaa-Tttt"

//===================//=============  Tests RSS  ===================//============

// test 1:

///            1             
// let name = 'John';
// function printName() {
//   let name = 'Peter';
//   console.log(name);
// }
// printName();

///            2             

// printMessage();
// function printMessage() {
//   console.log('Hello!');
// }

///            3             

// const foo = bar();
// const number = 2;
// function bar() {return number}

///            4             

// for(let i =0; i <3; i++) {
//   setTimeout(function() {
//     console.log(i)
//   },5000)
// }

///            5             

// function foo() {
//   return {bar:1,
//     barrr:2};
// }
// console.log(typeof foo().bar)

///            6             

// const details = {
//   name: 'John!',
// }
// function getMessage(message) {
//   return `${message} ${this.name}`;
// }
// console.log(getMessage.apply(details,['Hello']));

///            7             

// console.log((
//   function(a) {
//     arguments[0]=10
//     return a;
//   }
// )(5));

///            8             

// let f = function(a,b) { return a+b }
// console.log(f(1,2))

// let f = new Function("a,b", "return a+b")
// console.log(f(1,4))

// let f = new Function("a", "b", "return a+b")
// console.log(f(1,5))

// let f = (a, b) => a + b;
// console.log(f(1,8))

// let f = (a, b) => { a + b }
// console.log(f(1,3))

///            9             

// function foo() {console.log(this)}
// foo.call(null);

///            10             

// var a =1; b = function a(x) {x&&a(--x);};
// console.log(a);

///            11             

// "use strict"

// const details = {
//   message: 'Hello!',
// }
// function getMessage() {
//   return this.message;
// }

// console.log(getMessage.call(details))

///            12             

// "use strict"
// function getThis() {
//   return this;
// }
// console.log(getThis());

///            16             

// let name = 'John';
// function printName() {
//   console.log(name);
// }

// setTimeout(()=> {
//   let name = "Peter";
//   printName();
// }, 1000)

///            17             

// var name = 'John';
// function printName() {
//   console.log(name)
//   var name = "Peter";
//   console.log(name);
// }
// printName();

///            18             

// for(var i =0; i<3; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 1000)
// }

///            19             

// for (var i =0; i < 10; i++) {
//   //...
// }
// console.log(i);

///            20             

// function foo(a,b,c) {
//   console.log(Function.getArguments(this));
// }
// function foo(a,b,c) {
//   console.log (arguments)
// }
// function foo(a,b,c) {
//   console.log(foo.getArguments());
// }
// function foo(a,b,c) {
//   console.log(this.arguments);
// }

// foo(1,2,3)

///            21             

// function getThis() {
//   return this;
// }
// console.log(getThis())

///            22             
// function foo(a, b) {
//   return a*b;
// }

// const bar = foo.bind(null,2);
// bar(2)
// console.log('bar(2): ', bar(2));

///            23             
// console.log(message);
// var message = 'Hello';

///            24             

// var name = 'John';
// var user = {
//   name:'Peter',
//   printMessage() {
//     console.log(`Hello, ${this.name}!`);
//   }
// };
// var printMessage = user.printMessage;
// printMessage();

///            25             
// let f = function g() {return 23;}
// console.log(typeof g());

// console.log(message);
// let message = 'Hello'


//test 2:



// ==================  CODEWARS =============================CODEWARS===============

function sortByBit(arr) {
  let res = [];
  for (let i of arr) {
    res.push(i.toString(2));
  }
                    let funcSort = function (arg) {
                    let sum;
                    let ar = arg.split('');
                    sum = ar.reduce((acc, item) => acc + Number(item),0)
                    return sum
                    }
   console.log(res.sort((a,b)=>funcSort(a)-funcSort(b)))
   let resTotal = res.map(item => parseInt(item, 2) )
return resTotal
}
// sortByBit([7, 6, 15, 8])
console.log(sortByBit([7, 6, 15, 8]));

// console.log(parseInt("111", 2));
  // let result = res.map((item) => item.split(''));

  // console.log(star);
  // star.sort((a,b)=> a-b);
  // console.log(star);

  // for (let u of star) {
  //   let param = (String(u))
  //   star3.push(param)
  // }

// console.log(sortByBit([7, 6, 15, 8]))
// console.log(parseInt("110", 2));