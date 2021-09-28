/*
При клике на кнопку get started появляетс модальное окно
возможно с анимациями
*/
let btn = document.getElementById('modal_btn');
let modal = document.getElementById ('modal');
let x = document.getElementById('close');

btn.onclick = function(){
modal.style.display = "flex" // modal получает стиль css
    //.alert('есть клик')
}
x.onclick = function (){
    modal.style.display = "none"; /*при клике на крест в правом верхнем углу 
    окно с введениями Имя и Телефон исчезает*/

}

