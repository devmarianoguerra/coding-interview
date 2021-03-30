/*write a function that accepts a positive
number N the function should console log
a pyramid shape with n levels using the # character
Make sure your piramid has spaces on both sides */

function pyramid(num) {
  for (let n = 0; n < num; n++) {
    for (let x = 0; x < num; x++) {
      if (x <= n) {
        console.log(" # ");
      } else {
        console.log(" ");
      }
    }
  }
}

pyramid(5);
