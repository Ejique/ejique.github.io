/*
    при клике на кнопку GET started
    появляется модальное окно
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
    return `ваша скидка ${(this.price - this.newPrice) / (this.price / 100)}%`;
  },
};
console.log(obj.id);
console.log(obj.name);
console.log(obj.price);
console.log(obj.newPrice);
console.log(obj.getDiscount());

const btn = document.getElementById("modal_btn");
const modal = document.getElementById("modal");
const x = document.getElementById("close");
const btn_submit = document.querySelector("form button");
const inputs = document.querySelectorAll("form input");


btn.onclick = function () {
  modal.style.display = "flex";
};
x.onclick = function () {
  modal.style.display = "none";
};
btn_submit.onclick = function (e) {
  console.log(e);
  e.preventDefault();
  if (inputs[0].value == "") {
    alert("Вы забыли ввести имя");
  }
  if (inputs[1].value == "") {
    alert("Вы забыли ввести почту");
  }
};
const answers = document.querySelectorAll(".answer");
const quests = Array.from(document.querySelectorAll(".quest"));
const answers_arr = Array.from(answers);
answers_arr.map((value, index)=>{
  // return value.style.marginleft = "20px";
  value.style.marginTop = "40px";
  value.style.marginBottom = "20px";
  value.style.marginleft = `${20 + (index +1)**3}px`;
 
});
quests.map((el,i) => { //el - элемент функции. i - его индекс
  el.onclick = function () {
      if (answers_arr[i].style.display === "") {
          answers[i].classList.remove("hide");
          answers[i].classList.add("show");
    answers_arr[i].style.display = "block"; 
      } else
      {
        setTimeout(()=> answers_arr[i].style.display = "", 1000)
        answers[i].classList.remove("show");
        answers[i].classList.add("hide");
        
    }
  };
});  

let array = [1,2,3,4,5,6,7,8,9];//массив - тип данных object
let array2 = ["x","y"];
let obj2 = {
    x: 10,
    y: 20,
};
//array2[Math.round(Math.random())]
console.log(array[0]);
console.log(obj2[array2[Math.round(Math.random())]]);





/* quests[0].onclick = function(){
  answers_arr[0].style.display = "block";
} */