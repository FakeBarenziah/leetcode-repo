/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const sum = nums.reduce((acc, currVal) => {
    return acc + currVal;
  }, 0);
  const target = nums.length * ((nums.length + 1) / 2);
  return target - sum;
};
