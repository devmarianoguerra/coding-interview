/*given an integer, return an integer that is the reverse ordering of numbers */

function reversedInt(num) {
  const stringed = num.toString();
  const result = stringed.split("").reverse().join("");
  let number = parseInt(result);

  if (num < 0) {
    number *= -1;
  }

  console.log(number);
}

reversedInt(123);
reversedInt(-987);
