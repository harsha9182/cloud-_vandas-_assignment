function reverseWords(sentence) {
  const words = sentence.split(' ');
  const reversedWords = words.map(word => reverseString(word));
  return reversedWords.join(' ');
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a sentence: ', (inputSentence) => {
  const reversedSentence = reverseWords(inputSentence);
  console.log('Reversed Sentence:', reversedSentence);
  rl.close();
});