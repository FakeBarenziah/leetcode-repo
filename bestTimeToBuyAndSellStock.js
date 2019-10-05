/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0;
  prices.forEach((val, idx, arr) => {
    const thisProfit =
      Math.max(...arr.slice(idx)) - Math.min(...arr.slice(0, idx));
    if (thisProfit > profit) profit = thisProfit;
  });
  return profit;
};
