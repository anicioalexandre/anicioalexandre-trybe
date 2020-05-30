const longestWord = (string) => {
  const arrayStr = string.split(' ');
  let countLetters = 0;
  let longWord = null;
  for (word in arrayStr) {    
    if (arrayStr[word].length > countLetters) {
      countLetters = arrayStr[word].length;
      longWord = arrayStr[word];
    }
  }
  return console.log(longWord);
  ;
}
longestWord("Antônio foi no banheiro e não sabemos o que aconteceu");
    
