/**
 * Calculates the symmetric difference of two sets
 * @param {Set} setA - First set
 * @param {Set} setB - Second set
 * @returns {Set} Symmetric difference of setA and setB
 */
function symmetricDifference(setA, setB) {
  const symDiff = new Set();
  
  for (const elem of setA) {
      if (!setB.has(elem)) {
          symDiff.add(elem);
      }
  }
  
  for (const elem of setB) {
      if (!setA.has(elem)) {
          symDiff.add(elem);
      }
  }
  
  return symDiff;
}

/**
* Calculates the symmetric difference of multiple arrays
* @param {...Array} arrays - Arrays to calculate symmetric difference
* @returns {Array} Array of unique elements in the symmetric difference
*/
function sym(...arrays) {
  // Convert first array to a set
  let result = new Set(arrays[0]);
  
  // Iterate through remaining arrays
  for (let i = 1; i < arrays.length; i++) {
      // Convert current array to a set
      const currentSet = new Set(arrays[i]);
      
      // Calculate symmetric difference with current result
      result = symmetricDifference(result, currentSet);
  }
  
  // Convert back to sorted array
  return Array.from(result).sort((a, b) => a - b);
}

// Example usage:
console.log(sym([1, 2, 3], [5, 2, 1, 4], [2, 1])); // Should output [3, 4, 5]
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])); // Should output [1, 4, 5]