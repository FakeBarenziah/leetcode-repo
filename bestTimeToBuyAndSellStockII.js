/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  return prices.reduce((total, val, idx) => {
    if (idx < prices.length - 1) {
      return val >= prices[idx + 1] ? total : total + (prices[idx + 1] - val);
    }
    return total;
  }, 0);
};
