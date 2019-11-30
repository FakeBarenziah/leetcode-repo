/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  const height = board.length;
  const width = board[0].length;

  const copyBoard = [];

  for (let i = 0; i < height; i++) {
    const thisRow = [];
    for (let j = 0; j < width; j++) {
      thisRow.push(board[i][j]);
    }
    copyBoard.push(thisRow);
  }

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      board[i][j] = 0;
      let adjacent = 0;
      if (i > 0) {
        adjacent += copyBoard[i - 1][j];
        if (j > 0) adjacent += copyBoard[i - 1][j - 1];
        if (j < width - 1) adjacent += copyBoard[i - 1][j + 1];
      }

      if (j > 0) adjacent += copyBoard[i][j - 1];
      if (j < width - 1) adjacent += copyBoard[i][j + 1];

      if (i < height - 1) {
        adjacent += copyBoard[i + 1][j];
        if (j > 0) adjacent += copyBoard[i + 1][j - 1];
        if (j < width - 1) adjacent += copyBoard[i + 1][j + 1];
      }

      if ((copyBoard[i][j] === 1 && adjacent === 2) || adjacent === 3)
        board[i][j] = 1;
    }
  }
};
