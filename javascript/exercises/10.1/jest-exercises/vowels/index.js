// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const vowels1 = ['a','e','i','o','u']
  const arrStr = str.toLowerCase().split('');
  return arrStr.filter(char => vowels1.includes(char)).length
}

module.exports = vowels;