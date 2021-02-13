function getUniqueCharacter(s) {
  const lookup = {};
  
  for (let i = 0; i < s.length; i++) {
    if (char in lookup) {
      lookup[char] = -1;
    } else {
      lookup[char] = i;
    }
  }
}