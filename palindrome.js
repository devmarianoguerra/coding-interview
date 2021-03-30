/*given a strin, return true if the string is a plaindrome 
or false ir it is not */

function palindrome(string) {
  const reversed = string.split("").reverse().join("");

  if (string.toLowerCase() === reversed.toLowerCase()) {
    return console.log(`The word ${reversed} is palindrome of ${string}`);
  } else {
    return console.log(`The word ${reversed} is NOT a palindrome of ${string}`);
  }
}

palindrome("Oruro");
