/* функция которая возвращает случайное число от аргумента Х до аргумента Y */
/* math.random() - функция случайных чисел в js, по умолчанию принимает значение
только 0 или 1*/
/*math.round() - функция округления, математически честное
math.floor() - округление вниз
math.ceil() - округление вверх*/

/*игра камень ножницы бумага */

const materials = ['камень','ножницы','бумага'];

function createElement(tag,content, className){
    let element = document.createElement(tag);
    element.textContent = content;
    element.classList.add(className)
    document.body.appendChild(element) //посылка последнего элемента (дочернего) в body
    element.onclick = () => {
       let choose = element.textContent;  //задаётся  выбор игрока
       let choose_comp = materials[getRandomNumber(2)] 
       if(choose === choose_comp){
           alert("Ничья")
       } 
       else if(choose === 'бумага' && choose_comp === 'камень'){
           alert("Вы выиграли!")
    }
    else if(choose === 'ножницы' && choose_comp === 'камень' ){
        alert("Вы проиграли!")
    }
    else if(choose === 'бумага' && choose_comp ==='ножницы'){
        alert("Вы проиграли!")
    }    
    else if(choose === 'камень' && choose_comp ==='ножницы'){
        alert("Вы проиграли!")
    }
    else if(choose === 'камень' && choose_comp ==='бумага'){
        alert("Вы проиграли!")
    }
    else if(choose === 'ножницы' && choose_comp ==='бумага'){
        alert("Вы выиграли!")
    }

    console.log(element)
    }
}

materials.map((item)=>{
    createElement('button',item, 'btn')
})

function getRandomNumber(y){
    return Math.round(Math.random()*y)
}
console.log(getRandomNumber(3));
console.log("Введите Ваш материал", );
