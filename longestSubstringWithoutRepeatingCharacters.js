/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let subst = "";
  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    subst = subst.concat(s.charAt(i));
    if (subst.substr(0, subst.length - 1).includes(s.charAt(i))) {
      subst = subst.substr(subst.indexOf(s.charAt(i)) + 1);
    }
    maxLength = Math.max(maxLength, subst.length);
  }
  return maxLength;
};
