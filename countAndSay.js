/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let i = 1;
  let currentNum = "1";
  while (i < n) {
    let count = 1;
    let say = currentNum[0];
    const nextNum = [];
    for (let j = 0; j < currentNum.length; j++) {
      if (say !== currentNum[j + 1] || currentNum[j + 1] == undefined) {
        nextNum.push(count, say);
        count = 1;
        say = currentNum[j + 1];
      } else count += 1;
    }
    currentNum = nextNum.map(e => e.toString()).join("");
    i++;
  }
  return currentNum;
};
