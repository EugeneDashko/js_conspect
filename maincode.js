//=================================================================================================================================================================
//START Array method's ============================================================================================================================================
//=================================================================================================================================================================
//Перебор массива


// const people = [
//     {name: 'Владилен', age: 25, budget: 40000},
//     {name: 'Елена', age: 17, budget: 3400},
//     {name: 'Игорь', age: 49, budget: 50000},
//     {name: 'Михаил', age: 15, budget: 1800},
//     {name: 'Василиса', age: 24, budget: 25000},
//     {name: 'Виктория', age: 38, budget: 2300},
// ]

//============================
// for (let i=0; i<people.length; i++) {
//     console.log(people[i]);
// }




//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== FOR OF- ПЕРЕБИРАЮЩИЙ МЕТОД
// for (let person of people) {
//     console.log(person)
// }
//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== FOR OF- ПЕРЕБИРАЮЩИЙ МЕТОД







//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== forEach- ПЕРЕБИРАЮЩИЙ МЕТОД

// FOREACH = for

// callback
// Функция, которая будет вызвана для каждого элемента массива. Она принимает от одного до трёх аргументов:

// currentValue
// Текущий обрабатываемый элемент в массиве.

// index Необязательный
// Индекс текущего обрабатываемого элемента в массиве.

// array Необязательный
// Массив, по которому осуществляется проход.
//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== forEach- ПЕРЕБИРАЮЩИЙ МЕТОД


//ES5:
// people.forEach(function(person, index, peopleArr) {
//     console.log(person)
// })

//ES6:
// people.forEach(person => console.log(person))







//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== MAP- ПЕРЕБИРАЮЩИЙ МЕТОД

//MAP - с помощью его можно создавать новые массивы ( он принимает такие же аргументы как и меотод forEach).
    // И ЗДЕСЬ ВАЖНО ЧТО-ТО ВЕРНУТЬ
    //!!!!!!!!!!!!!!!Однако если применть метод map(), к массиву объектов, то исходный массив изменяется!!!!!!!!!!!!!

//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== MAP- ПЕРЕБИРАЮЩИЙ МЕТОД


// const newPeople = people.map(person => person.name + ' ' + person.age);
// console.log(newPeople)




// const temp = [0, 4, 4, 6, 8, 10, 6, 4, 3, -1, -2, -2];
// const tF =temp.map(item => item*1.8+32);
// console.log(t)



// let a = [33, 44, 55];
// let b = a.map((item, index, array) => {
//     if(index==1) {
//         array[index+1] = 66;
//     }
//     return item
// })
// console.log(b) //[33, 44, 66]



//  если применть метод map(), к массиву объектов, то исходный массив изменяется
// const z = [
//     {'name': 'Ivan', 'order': 12, 'sum': '123,5'},
//     {'name': ' Sergey     ', 'order': 12, 'sum': '123.5'},
//     {'name': 'matilda    ', 'order': 12, 'sum': '123,5'},
//     {'name': 'Ivat Pert ', 'order': 12, 'sum': '123,50'}
// ];

// const zBack = z.map((item) => {
//     return item.name = item.name.trim().toLocaleLowerCase();

// })

// console.log(z);





//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== FILTER- ПЕРЕБИРАЮЩИЙ МЕТОД

//FILTER - чтобы фильтровать массив по какому-то условию.
//(возвращает TRUE или FALSE и в зависимости от этого элемент попадет в НОВЫЙ массив или нет.
//возвращает новый массив

//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== FILTER- ПЕРЕБИРАЮЩИЙ МЕТОД


// const adults =[];
// for (let i=0; i<people.length; i++) {
//     if (people[i].age > 18) {
//         adults.push(people[i])
//     }
// }
// console.log(adults);

//=

//ES5
// const adults = people.filter(person => {
//     if(person.age >= 18) {
//         return true
//     }
// })
// console.log(adults);

//ES6
// const adults = people.filter(person => person.age >= 18);
// console.log(adults)







//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== EVERY - ПЕРЕБИРАЮЩИЙ МЕТОД

//EVERY- спользуется для проверки массива. Возвращает true, если вызов callback вернёт true для КАЖДОГО элемента arr.

//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== EVERY - ПЕРЕБИРАЮЩИЙ МЕТОД

// let newArr = people.every(person => {
//     if (person.age > 12) {
//         return true
//     }
// });
// console.log(newArr)







//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== SOME - ПЕРЕБИРАЮЩИЙ МЕТОД

//SOME- тоже самое что и every, но проверяет есть ли ХОТЯ ОДИН верный элемент, который отвечает приведенным условиям

//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== SOME - ПЕРЕБИРАЮЩИЙ МЕТОД

// let newArr = people.some(person => {
//     if (person.age > 22) {
//         return true
//     }
// });
// console.log(newArr)







//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== REDUCE- ПЕРЕБИРАЮЩИЙ МЕТОД

//REDUCE - принимает 2 параметра (1-колбэк функция(принимает тоже 2 параметра total, person (итерируемый элемент по массиву)),
// 2 - начальное значение total. Если не поставить первое занчени то в Total попадет первый элемент массива и расчет насчентся со второго)

//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== REDUCE- ПЕРЕБИРАЮЩИЙ МЕТОД


// let amount = 0;
// for (let i = 0; i < people.length; i++) {
//     amount += people[i].budget;
// }
// console.log(amount)

//=

// const amount = people.reduce((total, person) => {
//     return total + person.budget;
// }, 0);
// console.log(amount)

//2-й вариант написания:
// const amount = people.reduce((total, person) => total + person.budget, 0);
// console.log(amount)






//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== SLICE- МЕТОД МАССИВА

//SLICE - Он возвращает НОВЫЙ массив, в который копирует элементы, начиная с индекса start и до end (не включая end)


//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== SLICE- МЕТОД МАССИВА

    // let arr = ["t", "e", "s", "t"];
    // alert( arr.slice(1, 3) ); // e,s (копирует с 1 до 3)
    // alert( arr.slice(-2) ); // s,t (копирует с -2 до конца)





//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== SPLICE - МЕТОД МАССИВА

//SPLICE - не копирует, а изменяет исходный массив
// Это универсальный «швейцарский нож» для работы с массивами. Умеет всё: добавлять, удалять и заменять элементы.

//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== SPLICE - МЕТОД МАССИВА
// //1)
//     let k = [33, 44, 55, 66, 77, 88];
//     k.splice(2, 2); // c 2--го индекса удаляет 2 элемента массива
//     console.log(k) // [33, 44, 77, 88]
// //2)
//     k.splice(2); // [33, 44]
//     console.log(k)
// //3)
//     k.splice(2, 2, 'hi');
//     console.log(k) // [33, 44, "hi", 77, 88]

//     k.splice(0, 0, 'hi', 'dashko', 'Yauheni', 1990, 29, 11);
//     console.log(k) //["hi", "dashko", "Yauheni", 1990, 29, 11, 33, 44, 55, 66, 77, 88]









//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== CONCAT  - МЕТОД МАССИВА и СТРОКИ

//CONCAT создаёт новый массив, в который копирует поверхностные данные из других массивов и дополнительные значения.
// вложенные копирует по ссылке { {}}.

//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== CONCAT  - МЕТОД МАССИВА и СТРОКИ

    // let arr = [1, 2];
    // // создать массив из: arr и [3,4] и [5,6]
    // alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6









//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== ДЕСТРУКТУРИЗАЦИЯ МАССИВА

// ДЕСТРУКТУРИЗАЦИЯ МАССИВА


//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== ДЕСТРУКТУРИЗАЦИЯ МАССИВА
//  let a = [2, 7];
//  let [b, c] = a;
//  console.log(b,c)







//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== Find

//Методы для поиска определенных элементов
//Find - служит, чтобы по условию найти какой-либо элемент. приинимает колбэк функицию.

//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== Find


// const igor = people.find(person => person.name == 'Игорь');
// console.log(igor);







//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== FindIndex

//FindIndex - работает точо так же как и find, но на выходе получаем индекс

//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== FindIndex



// const igorIndex = people.findIndex(person => person.name == 'Игорь');
// console.log(igorIndex);




//совмесное использование Find & FindIndex:
// const amount = people
//     .filter(person => person.budget > 3000)
//     .map(person => {
//         return {
//             info: `${person.name} (${person.age})`,
//             budget: Math.sqrt(person.budget)
//         }
//     })
//     .reduce((total, person) => total +person.budget, 0)

// console.log(amount)




//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== IndexOf - МЕТОД МАССИВА и СТРОКИ

//IndexOf  -  Метод indexOf() возвращает первый ИНДЕКС, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет. СТРОГОЕ СРАВНЕНИЕ, НУЖНО ПРИВОДИТЬ К ТИПУ
//Работает со строкамиы

//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== IndexOf - МЕТОД МАССИВА и СТРОКИ

// const a = [1,3,4,6];
// console.log(a.indexOf(3)) // 1

// if (a.indexOf('3') !== -1) {
//     console.log ('yes')
// }
// else {
//     console.log('no')
// }







//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== includes - МЕТОД МАССИВА и СТРОКИ

// includes()ECMAScript 2016 позволяет определить, содержит ли массив искомый элемент. В случае нахождения элемента метод возвращает логическое значение TRUE, в обратном случае FALSE.
// МОЖНО ПРОВОДИТЬ СИМВОЛОВ ПО СТРОКЕ
//Работает со строками

//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== includes - МЕТОД МАССИВА и СТРОКИ

// const array1 = [1, 2, 3];

// console.log(array1.includes(2));
// // Expected output: true

// const pets = ['cat', 'dog', 'bat'];

// console.log(pets.includes('cat'));
// // Expected output: true

// console.log(pets.includes('at'));
// // Expected output: false


// МОЖНО ПРОВОДИТЬ СИМВОЛОВ ПО СТРОКЕ

// const word = "qwertyuiop";

// if (word.includes("ert")) {
//     console.log( 'yes')
// }
// else {
//     console.log('no')
// }




// const users = [
//     {'name':'Ivanov', 'age':44},
//     {'name': 'Petrov', 'age':22},
//     {'name': 'Alexeev', 'age':32},
//     {'name': 'Yauheni', 'age':11},
// ];

// let newUsers = users.filter(item => {
//    return item.name.includes('va')
// })

// console.log(newUsers)






//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== PUSH, POP

//PUSH - добавляет элемент в конец массива.
//POP удаляет последний элемент массива и возвращает его.

//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== PUSH, POP



//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== UNSHIFT, SHIFT

//UNSHIFT - Добавляет элемент в начало массива:
//SHIFT - Удаляет из массива первый элемент и возвращает его

//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== UNSHIFT, SHIFT





//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== trim

//Метод trim() удаляет пробельные символы с начала и конца строки. Пробельными символами в этом контексте считаются все собственно пробельные символы

//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== trim




//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== reverse

//Метод reverse() на месте обращает порядок следования элементов массива. Первый элемент массива становится последним, а последний — первым.

//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== reverse




//=================================================================================================================================================================
//END Array methond's==============================================================================================================================================
//=================================================================================================================================================================


//=================================================================================================================================================================
// working with Objects=============================================================================================================================================
//=================================================================================================================================================================

//Example
//========================================================
// const obj = {
//     name: 'Eugene Dashko',
//     age: 32,
//     passportData: {
//         number: 3735029,
//         series: 'MP'
//     }
// }
//если данные хрянятся в переменной и когда ключи состоят из нескольких слов, доступ к значению «через точку» , тогда обращаться через [   ] :
// const newKey = 'laptop';
// const newValue = 'MacBook'

// console.log(obj.length = 195);

// obj[newKey]=123
// console.log(obj);

//===================================================

// const obj = {
//     name: 'Eugene Dashko',
//     age: 32,
//     passportData: {
//         number: 3735029,
//         series: 'MP'
//     }
// }

// const obj2 = {
//     name: 'Vitaly Dashko',
//     age: 38
// }

// const res = {};

// for (key in obj) {
//     if(obj2[key]) {
//         res[key] = obj2[key] + obj[key]
//     }
// }
// console.log(res)


//=================================================================================================================================================================
// working with Arrays=============================================================================================================================================
//=================================================================================================================================================================


const student = {
    name: 'Vasya',
    avgGrade: 4
}
const student2 = {
    name: 'Evgeny',
    avgGrade: 5
}
const student3 = {
    name: 'Anya',
    avgGrade: 5
}

const maleStudent = [student, student2];
const famaleStudent = [student3]
// console.log( famaleStudent)
const allStudents = [...maleStudent, ...famaleStudent]
// console.log(allStudents)

//case 1
// let checkedStudents=[];

// allStudents.forEach((value) => {
//     checkedStudents.push({
//         ...value,
//         checker:true
//     })
// })

//case 2
// let tenGradeSystemStudents=[];

// allStudents.forEach((value) => {
//     tenGradeSystemStudents.push({
//         ...value,
//         avgGrade: value.avgGrade * 2
//     })
// })
// console.log(tenGradeSystemStudents)

//case 3
// const reDiplomaStudents = allStudents.filter((value) => {
//     if(value.avgGrade < 5) {
//         return false
//     }
//     return true
// })

//case3  короткая запись:
// const reDiplomaStudents = allStudents.filter((value) => value.avgGrade == 5)

// console.log(reDiplomaStudents)

console.log(allStudents)
const ourSchool = allStudents.reduce((acc, value) => {

    // console.log(acc, 'accum');
    // console.log(value, 'value');

    const newGrades =  [...acc.students, value.avgGrade];

    return {
        students: [...acc.students],
        studentsGrade: newGrades
    }
}, {
    students: [],
    studentsGrade: [],
})
console.log(ourSchool)










//=================================================================================================================================================================
//START методы для String

//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== CONCAT
    // let c = "hello";
    // let b = "hi";
    // let f = c.concat(b)
    // console.log( f) // hellohi






//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== SPLIT обратная операция join()

//SPLIT - разбивает строку на массив по заданному разделителю

//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== SPLITобратная операция join()
    
// let a = "Privet, kak, y, tebya, dela?";
    // let b = a.split(',');
    // console.log(b)











//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== JOIN

//JOIN - делает в точности противоположное split

    // let arr = ['Вася', 'Петя', 'Маша'];
    // let str = arr.join(';'); // объединить массив в строку через ;
    // alert( str ); // Вася;Петя;Маша

//====//=====//======//======//=====//======//======//=====//======//======//=====//======//====== JOIN


