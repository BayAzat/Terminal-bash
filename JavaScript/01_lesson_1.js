// вывод переменной
let yolochka1;

yolochka1 = 12;

console.log("Вывод переменной:")
console.log(yolochka1)
console.log("==========================")


// Операции с переменными
let yolochka3 = 10;
let yolochka2 = 11;

let result = yolochka2+yolochka3

console.log("Операции с переменными:")
console.log(result)
console.log("==========================")



// несколько перемерных
let n1 = 10,
    n2 = 20,
    yolochka4 = 30,
    n4 = 40;
    yolochka5 = "yolochka",

console.log("Несколько переменных:")
console.log(n1)
console.log(n2)
console.log(yolochka4)
console.log(n4)
console.log(yolochka5)
console.log("==========================")



//узнать тип данных - функция typeof
let let_type1 = typeof yolochka4; // можно без скобок
let let_type2 = typeof (yolochka5); // можно со скобками

console.log("Типы:")
console.log(let_type1)
console.log(let_type2)
console.log("==========================")



// Булинговые значения

let let_true = true;
let let_false = false;

console.log("Булинговые тип данных / значения:")
console.log(let_true)
console.log(let_false)
console.log(typeof(let_false))
console.log("==========================")

let let_true1 = true;
let let_false1 = false;

let b1 = let_true1 + let_false1;
let b2 = let_true1 - let_false1;
let b3 = let_true1 * let_false1;
let b4 = let_true1 / let_false1;

console.log("Булинговые операции:") // варианты операций с буленговыми данными
console.log("+:")
console.log(b1)
console.log(typeof(b1))
console.log("-:")
console.log(b2)
console.log(typeof(b2))
console.log("*:")
console.log(b3)
console.log(typeof(b3))
console.log("/:")
console.log(b4)
console.log(typeof(b4))
console.log("==========================")

// Конкатенация = слияние, склейка
let n01 = 10,
    n02 = 21,
    yolochka03 = "100", // тип данных - строка
    n04 = 200;

let sum_body = +yolochka03 + n04; // приведение типов - перевели строку в число у yolochka03
let let_type01 = typeof(sum_body);

let sum_body_string = String(n02) + n04; // srting переводит в строчный тип данных
let let_type02 = typeof(sum_body_string);

let sum_body_int = parseInt(yolochka03) + n04; // parseInt - перевели строку в число у yolochka03
let let_type03 = typeof(sum_body_int);

console.log("Конкатенация:")
console.log(sum_body)
console.log(let_type01)
console.log("==========================")


console.log("применение string")
console.log(sum_body_string)
console.log(let_type02)
console.log("==========================")


console.log("применение parseInt")
console.log(sum_body_int)
console.log(let_type03)
console.log("==========================")


// Cравнение
let s1 = 10,
    s2 = 21;

let compare1 = s1 > s2; // операции для сравнения: >, <, >=,<=, !=, == - сравнивает значение типов, === - сравнивает и по типу и по значению

console.log("Операции сравнения:")
console.log(compare1)
console.log(typeof (compare1))
console.log("==========================")

//IF
let condition = true; 

if (condition) { // выполняется если условие, указанное в скобках true. Если false - то не выполняется
    let t_1 = 5;
    let t_2 = 10;
    let result02 = t_1 + t_2;
    console.log("IF:")
    console.log("IF_RESULT = " + result)
}

console.log("==========================")


// как работает IF если выполняется условие:
let s3 = 10,
    s4 = 21;

let compare2 = s4 > s3;

console.log("Условие выполняется когда compare2 = true")

if (compare2) { 
    let t_1 = 51;
    let t_2 = 10;
    let result02 = t_1 + t_2;
    console.log("IF compare2 = true:")
    console.log("IF_RESULT = " + result02)
}

console.log("==========================")

// как работает IF с else
let s5 = 100,
    s6 = 201;

let compare3 = s5 > s6;

console.log("Как работает else:")

if (compare3) { 
    let t_1 = 25;
    let t_2 = 10;
    let result03 = t_1 + t_2;
    console.log("IF compare3 = true:")
    console.log("IF_RESULT = " + result03)
}   else { // выполняется если не сработает условие в IF
    console.log("ELSE_RESULT = " + compare3)
}

console.log("==========================")

// как работает ELSE IF
let r5 = 100,
    r6 = 100;

let compare4 = r5 > r6;
let compare5 = r5 < r6;

console.log("Как работает else if:")

if (compare4) { 
    console.log("IF_RESULT = " + compare4) // выполняется если compare4 = r5 > r6;
} else if (compare5) {
    console.log("ELSE_IF_RESULT = " + compare5) // выполняется если compare5 = r5 < r6;
} else { // выполняется если не сработает условие в IF
    console.log("ELSE_RESULT = ELSE")
}

console.log("==========================")