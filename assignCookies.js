/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    
    let satisfied = 0;
    let greedP = 0;
    let sizP = 0;
    
    while(greedP < g.length && sizP < s.length){
      if(g[greedP] <= s[sizP]) {
        satisfied++;
        greedP++;
        sizP++;
      } else sizP++
    }
    return satisfied
  };