/*
Задача с собеседования
есть функция: на вход приходит слово вернуть true, 
если оно читается задом наперёд и нормально

*/

function reverseWord(word){
    let reverse_word = ''
    for(let i = word.length-1; i >= 0; i--){
        reverse_word = reverse_word + word[i]
    }
    if(word == reverse_word){
        return true
    } else {
    return false
    }
}

console.log(reverseWord(''))
console.log(reverseWord(''))