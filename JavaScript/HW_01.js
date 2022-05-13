// 1. Создать переменную “item_1”
// 2. Присвоить переменной item_1 цифру 5.
// 3. Вывести в консоль item_1.
let item_1;
item_1 = 5;
console.log("Вывести в консоль item_1: " + item_1)

//  4. Создать переменную “item_2”
//  5. Присвоить переменной item_2 цифру 3.
//  6. Вывести в консоль item_2.
let item_2;
item_2 = 3;
console.log("Вывести в консоль item_2: " + item_2)

//  7. Создать переменную “item_3”
//  8. Присвоить переменной item_3 сложение item_1 и item_2.
//  9. Вывести в консоль item_3.
let item_3;
item_3 = item_1 + item_2;//?????
console.log("Вывести в консоль item_3: " + item_3)

 
//  10. Создать переменную “item_4”
//  11. Присвоить переменной item_4 строку “Yolochka”
//  12. Вывести в консоль item_4.
//  13. Вывести в консоль сложение item_3 и item_4.
//  14. Вывести в консоль умножение item_3 и item_4.
 
let item_4;
item_4 = "Yolochka";
console.log("Вывести в консоль item_4: " + item_4)
console.log("Вывести в консоль item_3+item_4: " + item_3 + item_4)
console.log("Вывести в консоль item_3*item_4: " + item_3*item_4) //?????

//  15. Создать переменную “item_5”
//  16. ---Присвоить переменной item_5 переменную item_3
let item_5;
item_5 = item_3;
console.log("Вывести в консоль item_5: " + item_5)

console.log("==========")
 
//  17. Создать переменную item_6.
//  18. Создать переменную item_6_type
//  19. Присвоить переменной item_6 значение 15
//  20. Присвоить переменной item_6_type тип переменной item_6
//  21. --Вывести в консоль тип данных item_6 в виде ——  “item_6 == ”  item_6, “item_6_type == ”  item_6_type ——  
let item_6;
let item_6_type;
item_6 = 15;

if (typeof item_6 == "string") {
    console.log("Type of item_6 is - " + typeof item_6)
    item_6_type = String(item_6_type);
    console.log("IF  = Now, type of item_6_type is " + typeof item_6_type)
} else if (typeof item_6 == "number") {
    console.log("Type of item_6 is - " + typeof item_6)
    item_6_type = Number(item_6_type);
    console.log("ELSE IF = Now, type of item_6_type is " + typeof item_6_type) 
} else  {
    console.log("Type of item_6 is - " + typeof item_6)
    item_6_type = Boolean(item_6_type);
    console.log("ELSE  = Now, type of item_6_type is " + typeof item_6_type) 
}

console.log("item_6 == " + item_6 + ", " +  "item_6_type == " + typeof(item_6_type))
console.log("==========")
 
//  22. Создать переменную item_7 и в ней преобразовать item_6 в String.
//  23. Создать переменную item_7_type
//  24. ---Присвоить переменной item_7_type тип переменной item_7
//  25. ---Вывести в консоль тип данных item_7 в виде ——  “item_7 == ”  item_7,  “item_7_type == ”  item_7_type ——  
 let item_7;
item_7 = String(item_6);

let item_7_type;

if (typeof item_7 == "string") {
    console.log("Type of item_7 is - " + typeof item_7)
    item_7_type = String(item_7_type);
    console.log("IF  = Now, type of item_7_type is " + typeof item_7_type)
} else if (typeof item_7 == "number") {
    console.log("Type of item_7 is - " + typeof item_7)
    item_7_type = Number(item_7_type);
    console.log("ELSE IF = Now, type of item_7_type is " + typeof item_7_type) 
} else  {
    console.log("Type of item_7 is - " + typeof item_7)
    item_7_type = Boolean(item_7_type);
    console.log("ELSE  = Now, type of item_7_type is " + typeof item_7_type) 
}

console.log("item_7 == " + item_7 + ", " + "item_7_type == " + typeof(item_7_type))
console.log("==========")

//  26. Создать переменную “age_1” и присвоить ей значение 10
//  27. Создать переменную “age_2” и присвоить ей значение 18
//  28. Создать переменную “age_3” и присвоить ей значение 60
//  29. Создать if в котором будите проверять значение переменной age_1
//  30. Если age_1 < age_2, вывести в консоль 
//  “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
//  31. Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
//  32. Если age_1  > age_3, вывести в консоль “Keep calm and look 
//  Culture channel”.
//  33. Иначе выводите “Technical work”.
let age_1 = 10,
    age_2 = 18,
    age_3 = 60;

let compare1 = age_1 < age_2;
let compare2 = age_1 >= age_2 && age_1 < age_3;
let compare3 = age_1 > age_3;

if (compare1) {
    console.log("You don’t have access cause your age is " + age_1 + " It’s less then")
} else if (compare2) {
    console.log("Welcome  !")
} else if (compare3){
    console.log("Keep calm and look Culture channel")
} else {
    console.log("Technical work")
}