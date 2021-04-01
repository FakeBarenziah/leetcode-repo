/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;

  let position = 0;

  let row = 0;

  let rowsDown = true;

  const tableOfRows = {};

  while (position < s.length) {
    if (tableOfRows[`${row}`]) {
      tableOfRows[`${row}`] += s[position];
    } else {
      tableOfRows[`${row}`] = s[position];
    }

    if (rowsDown && row < numRows - 1) {
      ++row;
    } else {
      --row;
    }

    if (row === 0 || row === numRows - 1) rowsDown = !rowsDown;

    ++position;
  }

  let zagString = "";

  for (let i = 0; i < numRows; i++) {
    if (tableOfRows[`${i}`]) zagString += tableOfRows[`${i}`];
  }

  return zagString;
};
