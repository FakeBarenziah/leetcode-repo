/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  if (!bills.length) return true;
  const register = [];

  while (bills.length) {
    const thisCust = bills.shift();
    let change = thisCust - 5;
    while (change > 5 && register.length) change -= register.pop();
    if (change && register.length) change -= register.shift();
    if (change) return false;
    if (thisCust <= 10) {
      register.push(thisCust);
      register.sort((a, b) => a - b);
    }
  }
  return true;
};
