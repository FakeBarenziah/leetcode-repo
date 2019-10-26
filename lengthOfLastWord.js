/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let length = 0;
  let tail = s.length - 1;
  while (s[tail] === " ") tail--;
  while (s[tail] !== " " && tail >= 0) {
    length++;
    tail--;
  }
  return length;
};
