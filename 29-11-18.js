/*Есть три вершины a, b и с. У каждой вершина заданы координатами x, y, z как 
целые числа. Нужно определить - является 
ли треугольник с заданными координатами 
прямоугольным.





Пользователь вводит год, необходимо определить 
является ли он високосным. Примеры данных для тестирования:
1) '2000' – високосный год
2) '1800' – не високосный год

let year = parseInt(prompt("Введите год"));
if((year % 4 == 0) && (year % 100 != 0)) {
    console.log("Год високосный");
} else if(year % 400 == 0) {
    console.log("Год високосный");
} else {
    console.log("Год не високосный");
};

Пользователь вводит количество тарелок и количество 
моющего средства. Моющее средство расходуется из расчета 0.5 
на одну тарелку. Вымыть тарелки в цикле. Вывести на экран:
1) сколько тарелок осталось, если моющее средство закончилось: 
'Моющее средство закончилось. Осталось N тарелок' 
(где N – заменить на число оставшихся тарелок)
2) сколько осталось моющего средства, если тарелки закончились:
'Все тарелки вымыты. Осталось N ед. моющего средства' 
(где N – заменить на число оставшегося моющего средства)
3) если мы помыли все тарелки и моющее средство закончилось, 
то вывести: 'Все тарелки вымыты, моющее средство закончилось'
Показать часть

let plates = parseInt(prompt("Введите количество тарелок"));
let soap = parseFloat(prompt("Введите количество моющего средства"));
while(plates > 0 && soap >= 0.5) {
    soap -= 0.5;
    plates --;
};
if(soap < 0.5 && plates > 0) {
    console.log("Моющее средство закончилось. Осталось " +  plates + " тарелок");
} else if(plates < 1 && soap >= 0.5) {
    console.log("Все тарелки вымыты. Осталось " + soap + " моющего средства");
} else if(plates< 1 && soap < 0.5) {
    console.log("Все тарелки вымыты, моющеe средство закончилось");
};*/