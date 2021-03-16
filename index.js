/*1. Írj példát az összes általad ismert adattípusra és kommentezd fölé a nevét! (5p)

let str= "String adattipus"
let num = 5;
let boole = true;

változó, és konstans
primitív adattípus string, number, boolean
Összetett adattípus tömb, mátrix


2. Mi a különbség a const és a let között? Írj rá példát! (10p)

a const egy olyan változó lesz ami konstans, nem lehet megváltoztatni az értékét a deklaráció után
a let pedig megváltoztatható.

pl: 
let a = 5; 
let b= 3; 
const PI=3.1415;
console.log((a+b)*PI); 
a=2;
b= 4;
console.log((a+b)*PI); //más értéke lesz, mert megváltoztattuk az a és b értékét. 



3. Mi a különbség a referencia szerinti és az érték szerinti paraméterátadás között? Mi
adódik át referenciaként, és mi értékként? Írj példát rá! (10p)

Referencia szerint: pl ha egy tömböt adunk át így, és módosítunk az adott fgv-ben a tömbbön
akkor az "eredeti" tömbbünk is megváltozik. 
érték szerinti: nem változik meg az eredetinek az értéke.

pl:
ref: 
let arr = [1,2,3]
const ref =(arr)=>{
    arr.push(4);

    return arr;
}

ref (arr);
consol.log (arr); //[1,2,3,4]

érték: 

let a = 5;
const ref =(num)=>{
    let a = 1;
    let sum = a+num;

    return sum;
}

ref (a);
consol.log (a); // 5

*/

/*4. Készíts egy függvényt, amely egy számokat tároló tömböt, és egy számot vár
paraméterül, és logikai értékkel tér vissza annak függvényében, hogy a paraméterül
kapott szám szerepel-e a kapott tömbben! (containsElement) (5p)*/

const containsElement = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return true;
  }
  return false;
};

console.log(containsElement([1, 2, 3, 4, 5], 5));
console.log(containsElement([1, 2, 3, 4, 5], 8));

/*5. Készíts egy függvényt, ami egy ilyen objectekkel feltöltött tömböt vár paraméterül: {
    name: ‘Feri’, age: 25 }! A függvény adja vissza a tömbben található legidősebb ember
    nevét! (10p)*/

const oldestPerson = (arr) => {
  let oldest = arr[0].age;
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (oldest < arr[i].age) {
      result = i;
    }
  }
  return arr[result].name;
};

console.log(
  oldestPerson([
    {
      name: 'Feri',
      age: 25,
    },

    {
      name: 'Pista',
      age: 40,
    },

    {
      name: 'Jancsi',
      age: 4,
    },
  ])
);

/*6. Írd le az metszet tételét vagy egyéb algoritmust, mely két tömb metszetét számolja
ki! (10p)*/

const findTheSameElements = (arr1, arr2) => {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let k = 0; k < arr2.length; k++) {
      if (arr1[i] === arr2[k] && !result.includes(arr1[i])) {
        result.push(arr1[i]);
      }
    }
  }
  return result;
};

console.log(
  findTheSameElements([1, 2, 3, 4, 5, 1, 3], [1, 2, 3, 9, 8, 10, 20])
);

/*7. Írj egy modult, mely három függvényt exportál: összeadás, szorzás, hatványozás! A
függvények működjenek is! A fő modulban töltsd is be, és hívj meg legalább 1
függvényt közülük! (10p)*/

const calculator = require('./modul');

console.log(calculator.sum(1, 2));
console.log(calculator.multiply(2, 2));
console.log(calculator.exp(2, 10));

/*8. Írj programot, mely két számot olvas be a felhasználótól, és létrehoz egy n x m
méretű kétdimenziós tömböt a paraméterek alapján, majd feltölti az indexeinek
szorzatával! (10p)
Pl bemenet: 3 3
Kimenet: 0 0 0
0 1 2
0 2 4*/

const read = require('readline-sync');

const generate2d = (n, m) => {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};

const fill2D = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = i * j;
    }
  }
  return arr;
};

let n = read.questionInt('Hány sora legyen a tömbbnek?');
let m = read.questionInt('Hány oszlopa?');

console.table(fill2D(generate2d(n, m)));
