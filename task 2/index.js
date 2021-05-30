//псевдомасив
//rest/spred- оператор

//input: num, num, .... numN
//output: num

function multiplay(...args) {
  
  //pseudo array
  /*console.log(arguments)
  for (let el of arguments) {
    console.log(el)
  }*/

  //rest operator (збирає всі елементи в одну змінну, застосовується тільки в аргументах функції)
  //argument - перший елемент масиву
  
  console.log(args)
  //перемножити елемента масиву
  return args.reduce((acc, el) => acc * el)
}
console.log(multiplay(2, 5, 10));

//============
//spred-оператор - розбиває елементи масиву на окремі змінні, можна застосовувати в будь-якому місці
const arr = [1, 2, 3, 4];
console.log(...arr);

const arrCopy = [...arr];
console.log(arrCopy);

//============
//sort-метод

//input: callback
    //input: el1, el2
    //output: number
//output: arr

const arr = [4, 2,3, 11, -22, -10];
const sortRes = [...arr].sort((el1, el2) => {
  //копіюємо масив ерез spred, і до скопійованого масиву приміняємо sort
  //el1 > el2 (більше 0, переставляє місцями)
  //el1 === el2 (дорівнює 0, нічого не змінює)
  //el1 < el2 (менше 0, нічого не змінює)
  return el1 - el2;
});
console.log(sortRes);

//step1
[2, 4, 3, 11, --22, -10]

//step2
[2, 3, 4, -22, 11, -10]