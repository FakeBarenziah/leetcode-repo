/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let length = 0;
  const spaceDelimitedWords = s.split(" ").filter(each => !!each);
  if (spaceDelimitedWords.length) {
    length = spaceDelimitedWords[spaceDelimitedWords.length - 1].length;
  }
  return length;
};
