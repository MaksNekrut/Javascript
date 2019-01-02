

/*Сделайте функцию, каждый вызов который будет генерировать случайное число 
от 1 до 100, но так, чтобы оно не повторялось, пока не будут перебраны все числа из этого промежутка. 
Решите задачу через замыкания - в замыкании должен хранится массив чисел, которые уже были сгенерированы функцией.


Вывести таблицу (два столбца и несколько строк) в стиле зебра с использованием JS.


Отсортировать массив по полю 'price' используя метод sort и передаваемую ей функцию, 
определяющую порядок сортировки. Массив для тестирования: 
let arr = [ { 'price' : 10, 'count' : 2 }, { 'price' : 5, 'count' : 5}, 
{ 'price' : 8, 'count' : 5 }, { 'price' : 12, 'count' : 4 }, { 'price' : 8, 'count' : 4},];

let arr = [ { 'price' : 10, 'count' : 2 }, { 'price' : 5, 'count' : 5}, 
{ 'price' : 8, 'count' : 5 }, { 'price' : 12, 'count' : 4 }, { 'price' : 8, 'count' : 4},];
function func(a,b) {
    if(a.price < b.price) {
        return -1;
    } else if(a.price>b.price) {
        return 1;
    } else {
        return 0;
    }
};
arr.sort(func);


В городе N проезд в трамвае осуществляется по бумажным отрывным билетам. 
Каждую неделю трамвайное депо заказывает в местной типографии рулон билетов 
с номерами от 000001 до 999999. «Счастливым» считается билетик у которого сумма первых трёх цифр номера равна сумме последних трёх цифр, 
как, например, в билетах с номерами 003102 или 567576. Трамвайное депо решило подарить сувенир обладателю каждого счастливого билета и 
теперь раздумывает, как много сувениров потребуется. 
С помощью программы подсчитайте сколько счастливых билетов в одном рулоне.



let ticketNumber = 1;
let sum = 999999;
let newArr = [];
let lucky = 0;

while(sum>=1){
    if(sum > 99999 && sum < 1000000){
    let str = sum.toString();
    let array = str.split('');
    let left = parseInt(array[0]) + parseInt(array[1]) + parseInt(array [2]);
    let right = parseInt(array[3]) + parseInt(array[4]) + parseInt(array[5]);

    left == right ? newArr.push(array[0] + array[1] + array [2] + array[3] + array[4] + array[5]) & lucky++ : lucky = lucky;

    } else if (sum > 9999 && sum < 100000) {
        let str = sum.toString();
        let array = str.split('');
        let left = parseInt(array[0]) + parseInt(array[1]);
        let right = parseInt(array[2]) + parseInt(array[3]) + parseInt(array[4]);

        left == right ? newArr.push(array[0] + array[1] + array [2] + array[3] + array[4]) & lucky++ : lucky = lucky;
    } else if (sum > 999 && sum < 10000) {
        let str = sum.toString();
        let array = str.split('');
        let left = parseInt(array[0]);
        let right = parseInt(array[1]) + parseInt(array[2]) + parseInt(array[3]);

        left == right ? newArr.push(array[0] + array[1] + array [2] + array[3]) & lucky++ : lucky = lucky;
    } 
    sum--;
};
let luckySum = 0;
for(i=0; i<newArr.length;i++) {
    luckySum ++ ;
}
console.log(luckySum);*/

