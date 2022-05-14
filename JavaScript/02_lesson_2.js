//Булевая логика

// //вместо else if
// console.log(true || true) // true
// console.log(true || false) // true
// console.log(false || true) // true
// console.log(false || false) // false

// console.log("=====================")

// if (1 || 0) { // 1 - true, 0 - false
//     console.log("hello!")
// }
// console.log("=====================")

// if (1 || 0 || 0) {
//     console.log("HI!")
// }
// console.log("=====================")


// // Режим работы магазина по часам
// let hour = "Sunday";

// if (hour < 18 && hour >= 8) {
//     console.log("Open!")
// } else if (hour >=24 || hour < 0) {
//     console.log("Error!!")
// }  else if (hour == "Sunday" || hour == "Saturday") {
//     console.log("Holiday_close")
// } else {
//     console.log("Close!")
// }
// console.log("=====================")

// Функции - function
// function workDays(){
//     console.log("workDays_function!")
// }

// workDays()
// console.log("=====================")

// function workDays(days, hours){
//     console.log("work day = ", days)
//     console.log("work hours = ", hours)
// }

// workDays()
// console.log("=====================")


// // Добавим проверку тип данных

// function workDays(days, hours){
//     if (typeof days == "string" && typeof hours == "number"){
//     console.log("work day = ", days)
//     console.log("work hours = ", hours)
//     }
// }

// workDays("Monday", 7)
// console.log("=====================")

// Проверка правильности ввода названия недели
// let day_title = "Sunday1"
// let ww_days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

// if (!ww_days.includes(day_title)){
//     console.log("Error")
// }

//Проверка дней недели на вводе
function workDays(day){

    console.log("Проверка дней недели на вводе")
    console.log("______________________")
    let h_days = ['Saturday', 'Sunday']
    let w_days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
   
    if (typeof day == "string"){
        if (w_days.includes(day)){
        console.log("Today is work day")
        return true
        } else if (h_days.includes(day)){
        console.log("Today is holiday")
        return false
        } else {
        console.log("Error! Word is not a Day title")
        return false
        }   
    }
}


//Проверка часов на вводе
function check_hours(hour){

    console.log("Проверка часов на вводе")
    console.log("______________________")
    if (hour < 18 && hour >= 8){
    console.log("Work hours")
    return true
    } else if (hour >=18 && hour <=24 || hour > 0 && hour < 8){
    console.log("NOT Work hours")
    return false
    } else { 
        console.log("Enter correct hour!")
    }
}


let day = "Monday"
let hour = -1

if (workDays(day) && check_hours(hour)){
    console.log("Open!")
} else {
    console.log("Close!")
}

console.log("========================")

// //switch case - как работает применять при до 5 вариантов case 
// let test_day = "Monday"

// switch (test_day){
//     case "Saturday":
//         console.log("Cool! Saturday")
//         break;
//     case "Monday":
//         console.log("Cool! Monday")
//         break;
//     case "Sunday":
//         console.log("Cool! Sunday")
//         break;
//     default:
//         console.log("Default!!")
// }

// //Стрелочная функция
// let f1 = () => console.log('Hello f1')
// // f1()

// let fl11 = 11;
// let fl22 = 22;

// let func1 = (fl1, fl2) => {console.log('Hello func1 ', fl1 + fl2)}
// func1(fl11, fl22)

// let func2 = (fl11 > 10) ? 
//     (fl1, fl2) => {console.log('Hello func2 1', fl1 + fl2)} :
//     (fl1, fl2) => {console.log('Hello func2 2', fl1 - fl2)};

// func2(fl11, fl22)


// // Методы
// let fl33 = 11;
// let fl44 = 22;

// function yol() {}

// yol.prototype.method1 = function() {
//     console.log('metod1 ------- ')
// }

// yol.prototype.method2 = function(n1, n2) {
//     console.log('metod2', n1 + n2)
// }

// yol.prototype.method3 = () => {
//     console.log('metod3')
// }

// let forest = new yol()

// forest.method1()
// forest.method2(fl33, fl44)
// forest.method3()

// Циклы while

// //бесконечный цикл
// // while(){ 
// //     console.log('Helo!')
// // }

// //бесконечный цикл

// let count = 0
// let count_stop = 10

// while(count < 10) { 
//     console.log('Helo! -- ', count)
//     count += 1// инкремент - к переменной добавляется 1 - аналогичная команда count ++
// }


// Циклы for

// let count_stop = 10

// for (let count = 0; count < 10; count++){
//     console.log('Count =', count)
// }

// // в цикле используем переменную count
// let count = 10
// let count_stop = 10

// for (count; count != 0; count--){
//     console.log('Count =', count)
// }

// console.log('Count_stop =', count)

// цикл выводит четные и нечетные значения
// let count = 0
// let count_stop = 10

// for (count; count <= 10; count++){
    
// // выводит четные значения
//     if (count % 2 == 0){ //неченые значения будут при условии (count % 2 != 0
//         console.log('Count =', count)
//     }
// }

// console.log('Count_stop =', count)

// //цикл с массивыми
// let names = ['Kate', // массив заключается в []
//              'Sasha',
//              'John',
//              'Mike',
//              'Bonny'] 

// for (let item in names){

//     console.log("Name = ", names[item], item)

// }