/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
  // Renames the argument values to be more semantic
  const rec1Left = rec1[0];
  const rec1Bottom = rec1[1];
  const rec1Right = rec1[2];
  const rec1Top = rec1[3];

  const rec2Left = rec2[0];
  const rec2Bottom = rec2[1];
  const rec2Right = rec2[2];
  const rec2Top = rec2[3];

  /*
  If the higher up (greater Y value) of the two bottom edges
  is further down than the top of the lower rectangle, there is an overlap
  */

  const heightOverlap =
    Math.max(rec1Bottom, rec2Bottom) < Math.min(rec1Top, rec2Top);

  // AND

  /*
  If the leftmost (lower x value) of the two right sides
  is further right than the left side of the rightmost
  rectangle, then they overlap
  */
  const widthOverlap =
    Math.min(rec1Right, rec2Right) > Math.max(rec1Left, rec2Left);
  return heightOverlap && widthOverlap;
};
