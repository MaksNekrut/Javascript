/*Построить объект студент:
- свойства: Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
- метод выводящий в консоль биографическую справку в виде, например: 
«Иван Петров. 21 год. Интересы: программирование, музыка, аниме. Учится в ИТМО.*/

let student = {
    name: 'Ivan',
    surname: 'Petrov',
    age: 21,
    interests: ["programming","music","anime"],
    university: 'ITMO',
    information: function() {
        console.log(this.name+" "+this.surname+". "+this.age+" "+"years old."+" Interested in:"+" "+this.interests[0]+","+this.interests[1]+","+this.interests[2]+"."+" Student at university"+" "+this.university);
    },
    interes: function() {
        for(let i = 0;i<this.interests.length;i++) {
            console.log(this.interests[i]);
        };
    }

};
    console.log(student.information());


/*Написать функцию вычисляющую факториал числа с использованием рекурсии.
Факториал числа - это число, умноженное на себя минус один, затем на себя 
минус два и так далее, до единицы. Обозначается n!
Определение факториала можно записать как: n! = n * (n - 1) * (n - 2) * ...*1*/

let factorial = function(n) {
    if(n <= 0 || n === 1) {
        return 1;
  } else {
        return (n * factorial(n-1));
  };
};
console.log(factorial(5));


/*Сделайте функцию, каждый вызов который будет генерировать случайное число 
от 1 до 100, но так, чтобы оно не повторялось, пока не будут перебраны все числа из этого промежутка.
Решите задачу через замыкания - в замыкании должен хранится массив чисел, которые уже были сгенерированы функцией.*/

function letRn() {
    let arr = [];
    function func() {
        let randomNumber = ((Math.floor(Math.random() * 100) + 1));
        if(arr.indexOf(randomNumber) !== -1) {
            console.log("Число - " + randomNumber + " уже есть в массиве");
       } else {
            arr.push(randomNumber);
            console.log("Число - " + randomNumber + " добавлено в массив");
       };
    };  return func;
};
let newNumber = letRn();
console.log(newNumber());