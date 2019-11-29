/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  num = String(num)
    .split("")
    .map(e => Number(e));
  let total = 0;
  let pointer = 0;

  while (pointer < num.length) {
    let subtotal = total + num[pointer];
    if (subtotal > 9) {
      subtotal -= 10;
      num.push(1);
    }
    total = subtotal;
    pointer++;
  }
  return total;
};
