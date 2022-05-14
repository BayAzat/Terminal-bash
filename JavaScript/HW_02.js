// Напишите валидационный скрипт используя функции 

//  1. Скрипт должен на вход принимать строку.
//  2. После проверки строки выводить в консоль сообщение где будет конкретно написано, 
// что не так в ведённой строке.
//  3. Минимум 5 символов в строке
//  4. Максимум 64 символа в строке
//  5. В строке должны быть буквы
//  6. Должна быть хотя бы одна буква в верхнем регистре
//  7. Должна быть хотя бы одна цифра
//  8. Должна быть хотя бы одна @
//  9. Строка не должна быть пустой

let str = "adfkjnkadfjnblkjadbfkajsdbfkjsdbf@dfkjdf1A@"

console.log(typeof str)
console.log("++++++++++++++++++++")

function stroka(str){
    if (typeof(str) == "string"){
        console.log("Correct!")
        return true
    } else{
        console.log("Not string!!!")
        return false
    }
}

console.log("==============")
// if (str.length >= "5" && str.length <= "64") // проверка на минимум & на макс

// проверка на наличие букв
// верхний регистр - проверка наличия 1ой заглавной буквы
let str2 = "sdfkjhDA1@@";
// let regexp = /\d/g;

// console.log(regexp.test(str2));
// console.log(str2.search(/\d/g));
// console.log("++++++++++++++++++++")

console.log(str2.match(/[A-Z]/g).length)
console.log(/[A-Z]/.test(str2))
console.log("++++++++++++++++++++")

// одна цифра
console.log("одна цифра")
console.log(str2.match(/\d/g))
console.log(/\d/g.test(str2))

// одна @
console.log("одна @")
console.log(str2.match(/@/g))

// не пустая
console.log("не пустая")
console.log(typeof(""));

// проверка количесва символов в диапозоне от 5 до 64
console.log("проверка количесва символов в диапозоне от 5 до 64")
console.log(/.{5,64}/.test(str2))