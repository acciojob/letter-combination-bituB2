function letterCombinations(digits) {
  if (!digits) {
    return [];
  }
  const mappings = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };
  const results = [''];
  for (let i = 0; i < digits.length; i++) {
    const letters = mappings[digits[i]];
    const newResults = [];
    for (let j = 0; j < results.length; j++) {
      for (let k = 0; k < letters.length; k++) {
        newResults.push(results[j] + letters[k]);
      }
    }
    results.splice(0, results.length, ...newResults);
  }
  return results.sort();
}


module.exports = letterCombinations;
