/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const threshold = Math.floor(nums.length / 2) + 1;
  const values = {};
  let retVal;
  nums.forEach(each => {
    values[each] ? values[each]++ : (values[each] = 1);
    if (values[each] >= threshold) retVal = each;
  });
  return retVal;
};
