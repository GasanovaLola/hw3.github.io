console.log(" -------------------- Задание №1 --------------------\n");
var A = [];
var size = 10;

console.log("Массив")
for(var i = 0; i < size; i++) {
    A[i] = Math.round(Math.random() * (15 - 1) + 1);
}
console.log(A);

for(var i = 0; i < size; i++) {

    if (i % 2 != 0 ) {
        A[i] = 0;
    }
}

console.log("Массив с заменой каждого элемента с нечетным индексом на ноль.\n");
console.log(A);

console.log(" -------------------- Задание №2 --------------------\n");
var n = 10;
var temp = 0;
var array = [];

for (let i = 0; i < n; i++) {
    temp = +prompt("Введите значение");

    while (isNaN(temp) || temp < 0) {
        temp = +prompt("Введите значение");
    }
    console.log(temp , "temp");

    array[i] = temp;
    
    console.log(array[i]);
}

console.log(array);

console.log(" -------------------- Задание №3 --------------------\n");
var n = 10;
var A2 = [];

for(var i = 0; i < n; i++) {
    A2[i] = Math.round(Math.random() * (15 - 1) + 1);
}

var min = A2[0];
var max = A2[0];
var minI = 0;
var maxI = 0;

for (var i = 1; i < A2.length; ++i) {
    if (A2[i] >= max) {
        max = A2[i];
        maxI = i;
    }
    if (A2[i] <= min) {
        min = A2[i];
        minI = i;
    }
}

var size2 = 15;

if (maxI> minI) {
    size2 =  maxI - minI;
}
else if (minI>maxI) {
    size2 = minI- maxI;
}

var A3 = [];

for (let i = 0; i < size2+3; i++) {
     
    if (i >= minI && i<= maxI && minI < maxI) {
        A3[A3.length] = A2[i];
    }
    else if (i <= minI && i>= maxI && minI > maxI) {
        A3[A3.length] = A2[i];
    }
}

console.log(A2);
console.log(A3);



console.log(" -------------------- Задание №4 --------------------\n");

var array1 = [1,5,6,2,4];
var array2 = [];

console.log(array1);

for (let j = 0, i = array1.length - 1; i >= 0; i-- , j++) {
    array2[j] = array1[i];
}
console.log(array2);
