let item_1;
item_1 = 5;
console.log("Вывести в консоль item_1: " + item_1)

let item_2;
item_2 = 3;
console.log("Вывести в консоль item_2: " + item_2)

let item_3;
item_3 = item_1 + item_2;//?????
console.log("Вывести в консоль item_3: " + item_3)

let item_4;
item_4 = "Yolochka";
console.log("Вывести в консоль item_4: " + item_4)
console.log("Вывести в консоль item_3+item_4: " + item_3 + item_4)
console.log("Вывести в консоль item_3*item_4: " + item_3*item_4) //?????

let item_5;
item_5 = item_3;
console.log("Вывести в консоль item_5: " + item_5)

console.log("==========")

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

console.log("==========")

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

console.log("==========")

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