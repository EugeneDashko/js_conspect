//===================//=============  #1  ===================//============


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



//===================//=============  #2  ===================//============

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

// console.log(isUnique('abcadef'))

//case 2 - продвинутый способ

function isUnique(string) {
return new Set(string).size === string.length
}
console.log(isUnique('abcdef'))