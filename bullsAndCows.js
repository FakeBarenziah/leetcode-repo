/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  const sTable = {};
  const gTable = {};

  function populateTable(arr, table) {
    arr.split("").forEach((each, id) => {
      if (!table[each]) {
        table[each] = [id];
      } else table[each].push(id);
    });
  }
  populateTable(secret, sTable);
  populateTable(guess, gTable);

  let bulls = 0;
  let cows = 0;

  Object.keys(sTable).forEach(digit => {
    if (gTable[digit]) {
      let sp = 0;
      let gp = 0;
      while (sp < sTable[digit].length && gp < gTable[digit].length) {
        if (sTable[digit][sp] === gTable[digit][gp]) {
          sTable[digit].splice(sp, 1);
          gTable[digit].splice(gp, 1);
          bulls++;
        }
        if (sTable[digit][sp] > gTable[digit][gp]) gp++;
        if (sTable[digit][sp] < gTable[digit][gp]) sp++;
      }
      cows += Math.min(sTable[digit].length, gTable[digit].length);
    }
  });
  return `${bulls}A${cows}B`;
};
