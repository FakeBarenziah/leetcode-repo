/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  const foundId = nums.findIndex(each => {
    return each >= target;
  });
  return foundId > -1 ? foundId : nums.length;
};
