/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  // Initialize a hash table to store the frequency values
  const mapTable = {};
  // Populate the table with all the instances of it in the string
  for (let i = 0; i < s.length; i++) {
    if (mapTable[s.charAt(i)]) {
      mapTable[s.charAt(i)] += s.charAt(i);
    } else mapTable[s.charAt(i)] = s.charAt(i);
  }

  /*
  Each value in the table is what should appear in the
  return value string. They just need to be sorted by
  length and returned.
  */
  return Object.values(mapTable)
    .sort((a, b) => {
      return b.length - a.length;
    })
    .join("");
};
