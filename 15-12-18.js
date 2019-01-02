
/*Даны несколько div элементов на html. По первому нажатию на каждый div он перекрашивается зеленым цветом, при повторном нажатии перекрашивается 
обратно и так далее каждый клик происходит чередование цвета.

let div_1 = document.createElement('div');
let div_2 = document.createElement('div');
let div_3 = document.createElement('div');

div_1.style.width = "150px";
div_1.style.height = "150px";
div_1.style.backgroundColor = "yellow";
document.body.appendChild(div_1);

div_2.style.width = "150px";
div_2.style.height = "150px";
div_2.style.backgroundColor = "black";
document.body.appendChild(div_2);

div_3.style.width = "150px";
div_3.style.height = "150px";
div_3.style.backgroundColor = "red";
document.body.appendChild(div_3);

div_1.id = "div_1";
div_2.id = "div_2";
div_3.id = "div_3";

document.querySelector('#div_1').addEventListener('click', function(){
    div_1.style.backgroundColor == "yellow" ?  div_1.style.backgroundColor = "green" : div_1.style.backgroundColor = "yellow";
});

document.querySelector('#div_2').addEventListener('click', function(){
    div_2.style.backgroundColor == "black" ?  div_2.style.backgroundColor = "green" : div_2.style.backgroundColor = "black";
});

document.querySelector('#div_3').addEventListener('click', function(){
    div_3.style.backgroundColor == "red" ?  div_3.style.backgroundColor = "green" : div_3.style.backgroundColor = "red";
});



Реализовать счётчик нажатий на 
кнопку: Дана кнопка внутри неё 
записана цифра. При клике на 
кнопку – её значение должно 
увеличиваться на единицу.

let div_1 = document.createElement('div');
let button = document.createElement('button');
let text = document.createTextNode('0');

button.appendChild(text);
div_1.appendChild(button);
document.body.appendChild(div_1);

document.querySelector('div').addEventListener('click',function(){
    document.querySelector('button').textContent = parseInt(document.querySelector('button').textContent)+1;
});


Изобразить клавиатуру и расположенные на ней клавиши в виде html документа. При нажатии клавиши пользователем 
на клавиатуре, подсвечивать нажатую клавишу на клавиатуре изображенной 
в html и выводить нажатое значение.



Задача на HTML, CSS и JS. Реализовать одну страничку HTML о знаменитом человеке с использованием панели с вкладками (табы). Например, в качестве знаменитого человека 
возьмём Пушкина А.С., из википедии возьмём наполнение странички, в качестве вкладок можно указать: биография, творчество и т.п. Переключение между вкладками страницы и 
изменение содержимого реализовать с использованием JS.



Реализуйте библиотеку NumberSystem для 
перевода числа из одной системы счисления в другую.
Библиотека содержит 6 функций для перевода 
из десятичной системы счисления в двоичную, 
восьмеричную, шестнадцатиричную и наоборот:
dec2bin(number) // возвращает String
dec2oct(number) // возвращает String
dec2hex(number) // возвращает String
bin2dec(number) // возвращает Number
oct2dec(number) // возвращает Number
hex2dec(number) // возвращает Number
(!) Запрещено использовать встроенные 
функции/методы, решающие эту задачу.
Подсказка. Не спешите писать 6 разных 
реализаций, подумайте, можно ли 
написать универсальный алгоритм перевода.
Ситуации, когда в исходном числе есть 
не допустимые цифры (буквы), игнорируются.
Материал по переводу из одной СС в другую: 
http://inf.e-alekseev.ru/text/Schisl_perevod.html
Тестовые наборы данных:
1) Входные данные: 250
Выходные данные для функций dec*:
"11111010"
"372"
"fa"
2) Входные данные: "1010011010"
Выходные данные: 666
3) Входные данные: "755"
Выходные данные: 493
4) Входные данные: "abcdef"
Выходные данные: 11259375*/


