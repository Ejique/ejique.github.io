/*
При клике на кнопку get started появляетс модальное окно
возможно с анимациями
*/
let str = "Hello";
let number = 42;
let y;
let bool = true;
let bool2 = false;
let obj = {
    id: 1,
    name: "Имя",
    price: 2000,
    newPrice: 1600,
getDiscount: function () {
    return `Ваша скидка${(this.price - this.newPrice)/(this.price / 100)}%`;
    },
}

console.log(obj.id);
console.log(obj.name);
console.log(obj.price);
console.log(obj.newPrice);
console.log(obj.getDiscount());
console.log(obj.y);

const btn = document.getElementById('modal_btn');
const modal = document.getElementById ('modal');
const x = document.getElementById('close');
const btn_submit = document.querySelector("form button");// улучшение кнопки отправить
const inputs = document.querySelectorAll("form input") //берёт группу элементов form inputs

btn.onclick = function(){
modal.style.display = "flex" // modal получает стиль css
    //.alert('есть клик')
}
x.onclick = function (){
    modal.style.display = "none"; /*при клике на крест в правом верхнем углу 
    окно с введениями Имя и Телефон исчезает*/

};
btn_submit.onclick = function (event){
    console.log(event);
    event.preventDefault(); //event имеет сокрашение до 1й буквы e
    if(inputs[0].value == ""){
        alert("Вы забыли ввести имя");
    }
    if(inputs[1].value == ""){
        alert("Вы забыли ввести номер телефона");
    }    
};

