/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const returnVal = [];
  const table = {
    3: "Fizz",
    5: "Buzz"
  };
  const tableIds = Object.keys(table);
  while (n > 0) {
    let thisNum = "";
    for (let key = 0; key < tableIds.length; key++) {
      if (n % tableIds[key] === 0) thisNum += table[tableIds[key]];
    }
    if (thisNum === "") thisNum = `${n}`;
    returnVal.unshift(thisNum);
    n--;
  }
  return returnVal;
};
