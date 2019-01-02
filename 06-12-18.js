/*Построить объект студент со свойствами:
Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
Написать отдельную функцию, которой передается объект студент, а она выводит его содержимое.

let student= {
    name:"Ivan",
    surname:"Ivanov",
    age:21,
    interests:["music","programming","reading"],
    university:"ITMO"
    };
function information() {
    console.log("name - "+student.name);
    console.log("surname - "+student.surname);
    console.log("age - "+student.age);
    console.log("interests: "+student.interests.join());
    console.log("university - "+student.university);
    };
information(student);

Заданы два массива A и B необходимо их объединить 
в один массив C так, чтобы в массиве остались уникальные 
(неповторяющиеся) элементы. 
Например: A = [1,2], B = [2,3] получим С = [1, 2, 3].

let a = [1,2,2,2,5,6,6,6,7];
let b = [2,3,6,6,6,7,5];
let c = [];

for(let i = 0; i< a.length;i++){
    if(c.indexOf(a[i]) == -1) {
        c.push(a[i]);
    }
};

for(let j = 0; j< b.length;j++){
    if(c.indexOf(b[j]) == -1) {
        c.push(b[j]);
    }
};


Написать отдельную функцию, которая выводит пользователю 
заданное число чисел Фибоначчи. (например, первых 8 чисел Фибоначчи: 1, 1, 2, 3, 5, 8, 13, 21). Заданное число передается 
функции в качестве аргумента. Про числа Фибоначчи: https://ru.wikipedia.org/wiki/Числа_Фибоначчи

function fibon (x) {
    let a = 1; 
    let b = 1;
    let sum = a+b;
    let y = 3;

    if(x==0){
        console.log(0);
    }
    else if(x==1){
        console.log(b);
    }
    else if(x==2){
        console.log(a);
        console.log(b);
    }else{

        console.log(a);
        console.log(b);
        while(y<x+1){
            console.log(sum)
            y++
            a = b;
            b = sum;
            sum = a + b;
        }
    };
};
fibon(10);


Напишите функцию counter, которая возвращает количество дней, часов и минут до нового года. Датой наступления нового года 
считается 1 января. Функция должна вернуть строку вида: "14 дней 21 час 46 минут". Нужно реализовать корректные окончания слов,
например: 1 день, 2 дня, 5 дней. Функция должна корректно работать при запуске в любом году, 
т. е. грядущий год должен вычисляться программно.*/









