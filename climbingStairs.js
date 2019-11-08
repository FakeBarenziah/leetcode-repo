/**
 * @param {number} n
 * @return {number}
 */

const recurse = (i, n, memo) => {
  if (i > n) return 0;
  if (i === n) return 1;
  if (memo[i] > 0) return memo[i];
  memo[i] = recurse(i + 1, n, memo) + recurse(i + 2, n, memo);
  return memo[i];
};

var climbStairs = function(n) {
  const memo = [];
  return recurse(0, n, memo);
};
