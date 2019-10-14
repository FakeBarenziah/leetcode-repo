/* eslint-disable complexity */
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
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

/**
 * Alternate solution
 * more readable and less memory usage but has higher complexity
 */
var alternateLemonadeChange = function(bills) {
  const register = { 5: 0, 10: 0 };

  for (let i = 0; i < bills.length; i++) {
    const thisBill = bills[i];
    let canComplete = true;
    switch (thisBill) {
      case 5:
        register[5]++;
        break;
      case 10:
        register[5] ? register[5]-- : (canComplete = false);
        register[10]++;
        break;
      case 20:
        if ((register[10] < 1 && register[5] < 3) || register[5] < 1) {
          canComplete = false;
          break;
        }
        if (register[10] >= 1) {
          register[10]--;
          register[5]--;
        } else {
          register[5] -= 3;
        }
        break;
      default:
        break;
    }
    if (!canComplete) return false;
  }
  return true;
};
