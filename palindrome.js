/*given a string, return true if the string is a palindrome 
or false if it is not */

function palindrome(string) {
  const reversed = string.split("").reverse().join("");

  if (string.toLowerCase() === reversed.toLowerCase()) {
    return console.log(`The word ${reversed} is palindrome of ${string}`);
  } else {
    return console.log(`The word ${reversed} is NOT a palindrome of ${string}`);
  }
}

palindrome("Oruro");

/*this is a constant function O(1) because in does not matter the number of inputs or 
the size of the string, it will always take the same amount of time or effort to 
reverse and compare the string in this case */
