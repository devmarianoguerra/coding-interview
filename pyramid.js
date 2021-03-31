/*write a function that accepts a positive
number N the function should console log
a pyramid shape with n levels using the # character
Make sure your piramid has spaces on both sides */

function pyramid(num) {
  let figure = "";
  for (let n = 0; n < num; n++) {
    for (let x = 0; x < num; x++) {
      if (x <= n) {
        figure += "#";
      } else {
        figure += " ";
      }
    }
  }
  console.log(figure);
}

pyramid(5);
