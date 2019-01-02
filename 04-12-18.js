/*Заданы два массива 
A = [ 12, 4, 3, 10, 1, 20 ] 
B = [-3, -7, -100, -33] 
необходимо их объединить 
в один массив C добавив 
массив B в конец(в начало) A.

let a = [ 12, 4, 3, 10, 1, 20 ];
let b = [-3, -7, -100, -33];
let c = b.concat(a);
let c = a.concat(b);


Одномерным массивом задана доска 3 на 3 
var area = 
[ null, null, null, null, null, null, null, null, null ]

Необходимо сформировать и вывести (document.write) игровое поле состоящее из
 квадратов для крестиков-ноликов в HTML. 

При появлении в массиве 0-ля рисовать нолик , 1-цы крестик 

Пример: [ 1, null, 0, null, 1, null, null, null, null ] на поле 2-а крестика, и 1-н нолик.

var area = [ 1, 1, 0, null, 1, 1, null, 1, null ];
for(i=0;i<area.length;i++) {
    if(area[i] == 0) {
        area[i] = 0;
} else if(area[i] == 1) {
    area[i] = "X";
} else {
    area[i] = " ";
}
};
document.write("<table align =center border=1px bordercolor = red cellspacing=0px cellpadding=5px ><tr><td align = center width =25px height = 25px>"+area[0]+"</td><td align = center width =25px height = 25px>"+area[1]+"</td><td align = center width =25px height = 25px>"+area[2]+"</td></tr><tr><td align = center width =25px height = 25px>"+area[3]+"</td><td align = center width =25px height = 25px>"+area[4]+"</td><td align = center width =25px height = 25px>"+area[5]+"</td></tr><tr><td align = center width =25px height = 25px>"+area[6]+"</td><td align = center width =25px height = 25px>"+area[7]+"</td><td align = center width =25px height = 25px>"+area[8]+"</td></tr></table>");


Задан массив - [12,4,3,10,1,20]. 
Удалить из него наименьшее и наибольшее значение.

let arr = [12,4,3,10,1,20];
let minValue = arr[0];
let maxValue = 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > maxValue) {
          maxValue = arr[i];
        };
      if (arr[i] < minValue) {
          minValue = arr[i];
        };
  }; 
arr.splice(arr.indexOf(minValue),1);
arr.splice(arr.indexOf(maxValue),1);



Задан массив - [12,4,3,10,1,20]. 
Необходимо отсортировать его в порядке возрастания, 
при этом не использовать готовый метод sort 
и методы разобранные на занятии. Снабдите комментариями каждую строку.*/




