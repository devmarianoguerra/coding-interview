/*write a function that returns the number of vowels used in a string */

function vowels(word) {
  let count = 0;
  for (letters of word) {
    if (
      letters === "a" ||
      letters === "e" ||
      letters === "i" ||
      letters === "0" ||
      letters === "u"
    ) {
      count++;
    }
  }

  console.log("count:", count);
}

vowels("mariano");
