/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.

Given an integer, convert it to a roman numeral.

 

Example 1:

Input: num = 3
Output: "III"
Explanation: 3 is represented as 3 ones.

Example 2:

Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.

Example 3:

Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

 

Constraints:

    1 <= num <= 3999

*/

var intToRoman = function (num) {
  // valueTable is now an array of letters and values in ascending order of value
  const valueTable = [
    { letter: "M", value: 1000 },
    { letter: "CM", value: 900 },
    { letter: "D", value: 500 },
    { letter: "CD", value: 400 },
    { letter: "C", value: 100 },
    { letter: "XC", value: 90 },
    { letter: "L", value: 50 },
    { letter: "XL", value: 40 },
    { letter: "X", value: 10 },
    { letter: "IX", value: 9 },
    { letter: "V", value: 5 },
    { letter: "IV", value: 4 },
    { letter: "I", value: 1 },
  ];

  let remaining = num;

  const symbolArray = [];

  while (remaining > 0) {
    // Find the first (largest) value that is small enough to subtract from the remaining num
    const bestSymbol = valueTable.find((e) => e.value <= remaining);
    symbolArray.push(bestSymbol.letter);
    remaining -= bestSymbol.value;
  }

  return symbolArray.join("");
};
