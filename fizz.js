let fizz = [];

for(let i=0;i<100;i++){
    if(i%3 == 0){
        fizz.push("Fizz");
        /*console.log("Fizz");*/
    }else if(i%5 == 0){
        fizz.push("Fizz");
    /*console.log("Buzz");*/
    }else if(i%15 == 0){
        fizz.push("FizzBuzz")}
        else {
            fizz.push(i);
        }
   /* console.log("FizzBuzz");*/
}
console.log(fizz);
/*сделать таблицу умножения 
for (let i=0; i<10; i++) {
    for (let j= 1; j<10; j++){
        //некие полезные операции
        console.log(i*j);
    }
}
*/