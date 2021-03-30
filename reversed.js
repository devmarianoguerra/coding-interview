/*Given a string, return a new string with the 
reversed order of characters */

function reversed(word) {
  const reversed = word.split("").reverse().join("");

  return console.log(reversed);
}

reversed("Hello world");
