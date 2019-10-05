/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const returnVal = [];
  while (n > 0) {
    let thisNum = "";
    if (n % 3 === 0) thisNum = thisNum.concat("Fizz");
    if (n % 5 === 0) thisNum = thisNum.concat("Buzz");
    if (n % 3 !== 0 && n % 5 !== 0) thisNum = `${n}`;
    returnVal.unshift(thisNum);
    n--;
  }
  return returnVal;
};
