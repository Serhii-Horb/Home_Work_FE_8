// -------------------------- Задача1: --------------------------
// Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке 
// от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом
// numbers.

// const numbersDiv = document.querySelector(".numbers");
// for(let i = 100; i >= 50; i -= 10) {
//     const pElem = document.createElement("p");
//     pElem.innerText = i;
//     numbersDiv.append(pElem)
// }

// -------------------------- Задача2: --------------------------
// Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и 
// добавляет его в div с классом strings_container. Строки взять произвольные.

// const strArray = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit.", "Nam", "perferendis", "debitis", "reiciendis", "enim", "rerum", "animi", "vero", "obcaecati", "fuga"]
// const strings_container = document.querySelector(".numbers");
// for(let i = 0; i < strArray.length; i++) {
//     const pElem = document.createElement("p");
//     pElem.innerText = strArray[i];
//     strings_container.append(pElem)
// }

// -------------------------- Задача3: --------------------------
// Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, 
// last_name и  age (данные взять произвольные) - и создает карточки только для
// совершеннолетних пользователей. Карточка должна содержать информацию об имени,
// фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.

const arr = [
    {
        first_name: "Oleg",
        last_name: "Ivanov",
        age: 20
    },
    {
        first_name: "Petr",
        last_name: "Sidorov",
        age: 30
    },
    {
        first_name: "Masha",
        last_name: "Petrova",
        age: 17
    }
]
const users_container_div = document.querySelector(".users_container")
for(let i = 0; i < arr.length; i++) {
    if(arr[i].age >= 18) {
        const pElem = document.createElement("p");
        pElem.innerText = arr[i].first_name;
        users_container_div.append(pElem)

        const pElem2 = document.createElement("p");
        pElem2.innerText = arr[i].last_name;
        users_container_div.append(pElem2)

        const pElem3 = document.createElement("p");
        pElem3.innerText = arr[i].age;
        users_container_div.append(pElem3)
    }
}
