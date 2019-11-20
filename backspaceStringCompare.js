/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  const backspace = (acc, curr) => {
    if (curr === "#") {
      acc.pop();
    } else acc.push(curr);
    return acc;
  };
  const Sarr = S.split("").reduce(backspace, []);
  const Tarr = T.split("").reduce(backspace, []);
  console.log(Sarr);
  console.log(Tarr);
  return Sarr.every((each, id) => {
    return each === Tarr[id];
  });
};
