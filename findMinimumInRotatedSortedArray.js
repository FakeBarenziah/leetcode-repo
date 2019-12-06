/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(!nums.length) return -1;
    if(nums.length===1) return nums[0];
    
    let right = nums.length-1;
    
    if(nums[0] < nums[right]) return nums[0];
    
    while(nums[right] > nums[right-1]) right--;
    
    return nums[right];  
  };