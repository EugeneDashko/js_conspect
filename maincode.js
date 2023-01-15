
//START методы массивов
//=================================================================================================================================================================

const people = [
    {name: 'Владилен', age: 25, budget: 40000},
    {name: 'Елена', age: 17, budget: 3400},
    {name: 'Игорь', age: 49, budget: 50000},
    {name: 'Михаил', age: 15, budget: 1800},
    {name: 'Василиса', age: 24, budget: 25000},
    {name: 'Виктория', age: 38, budget: 2300}, 
]


//Пыеребор массива

//============================
// for (let i=0; i<people.length; i++) {
//     console.log(people[i]);
// }


//============================
// for (person of people) {
//     console.log(person)
// }


//============================
// forEach
//ES5:
// people.forEach(function(person, index, peopleArr) {
//     console.log(person)
// })
//ES6:
// people.forEach(person => console.log(person))


//============================
//Map - с помощью его можно создавать новые массивы ( он принимает такие же аргументы как и меотод forEach).
// И ЗДЕСЬ ВАЖНО ЧТО-ТО ВЕРНУТЬ
// const newPeople = people.map(person => person.name + ' ' + person.age);
// console.log(newPeople)


//============================
//Filter - чтобы фильтровать массив по какому-то условию. возвращает новый массив

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


//============================
//Reduce - принимает 2 параметра (1-колбэк функция(принимает тоже 2 параметра total, person (итерируемый элемент по массиву)),
// 2 - начальное значение total)

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


//============================
//Методы для поиска определенных элементов

//Find - служит, чтобы по условию найти какой-либо элемент. рпинимает колбэк функицию.
// const igor = people.find(person => person.name == 'Игорь');
// console.log(igor);

//FindIndex - работает точо так же как и find, но на выходе получаем индекс
// const igorIndex = people.findIndex(person => person.name == 'Игорь');
// console.log(igorIndex);


//совмесное использование Find & FindIndex:
const amount = people
    .filter(person => person.budget > 3000)
    .map(person => {
        return {
            info: `${person.name} (${person.age})`,
            budget: Math.sqrt(person.budget)
        }
    })
    .reduce((total, person) => total +person.budget, 0)

console.log(amount)


//START методы массивов
//====================================================================================================================================