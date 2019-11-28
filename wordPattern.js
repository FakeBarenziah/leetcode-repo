/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  pattern = pattern.split("");
  str = str.split(" ");

  if (pattern.length !== str.length) return false;

  const lookup = {};

  let result = true;

  pattern.forEach((key, id) => {
    if (!lookup[key]) {
      if (Object.values(lookup).includes(str[id])) {
        result = false;
      } else lookup[key] = str[id];
    }
    if (lookup[key] !== str[id]) result = false;
  });
  return result;
};
