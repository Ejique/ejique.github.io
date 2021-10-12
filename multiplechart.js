/*тетрадная таблица умножения начинаетс с числа 2 и заканчивается на 9
умножение каждого числа идёт c числа 1 по число 10
поэтому первое значение переменной i=2
*/
for (let i=1; i<=9; i++) {
    let multiplechart = `\n`;
    for (let j= 1; j<=9; j++){
        multiplechart +=  `${i} * ${j} = ${i*j} \n`;// yнаписать multi.push - добавление элемента в массив
    }
console.log(multiplechart);
/*
вместо консольлог main.arr.push(multi)
consol.log (main)
*/
}


       