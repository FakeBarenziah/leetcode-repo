/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  const sArr = s.split("");
  if (sArr.filter(e => e === "A").length > 1) return false;
  let counter = 0;
  let i = 0;
  while (i < sArr.length && counter < 3) {
    if (sArr[i] === "L") counter++;
    if (i === sArr.length - 1 && counter < 3) return true;
    if (sArr[i] !== "L") counter = 0;
    i++;
  }
  return false;
};
