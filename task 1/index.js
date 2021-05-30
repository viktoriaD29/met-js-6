//написати свій фільтр
//input: callback, arr
//output: arr

    //input: el, index, el
    //output: bool (чи новий ел підходить, чи додамо його в новий масив)

//algo:
//1. create new array
//2. iterate arr, apply callback for each el
//3. if - true, push result to rew arr
const arr = [1, 2, 3, 4, 5, 6, 7, 45, 75, 89];

function callback(el) {
  if (el > 5) {
    return true
  }
}

const filterArrayElements = (arr, callback) => {
  const res = [];

  for (let index = 0; index < arr.length; index += 1) {
    const el = arr[index]
    const callbackRes = callback(el, index, arr);

    if (callbackRes) {
      res.push(el)
    }
  }

  return res;
};
console.log(filterArrayElements(arr, callback))

//test
