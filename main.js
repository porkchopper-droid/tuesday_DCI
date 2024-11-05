// Add up the Numbers from a Single Number

/* Create a function that takes a number as an argument.
Add up all the numbers from 1 to the number you passed to the function.
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

addUp(4) ➞ 10

addUp(13) ➞ 91

addUp(600) ➞ 180300

*/


function addUp1(num) {
  return (num * (num + 1)) / 2;
}

console.log(addUp1(4));     
console.log(addUp1(13));    
console.log(addUp1(600));   


const addUp2 = (num) => {
    let result = 0;
    for (let i = 0; i <= num; i++) {
      result += i;
    }
    return result;
  };
  
  let resultTask6 = addUp2(4);
  console.log(resultTask6); // 10
  
  resultTask6 = addUp2(13);
  console.log(resultTask6); // 91
  
  resultTask6 = addUp2(600);
  console.log(resultTask6); // 180300


function addUp3(number) {
    if (number === 0) return 0;
    else {
      return number + addUp3(number - 1);
    }
  }
  
  console.log(addUp3(4)); // ➞ 10
  console.log(addUp3(13)); // ➞ 91
  
  console.log(addUp3(600)); // ➞ 180300

  // I added this line to test
  // I added this line to test

