/*write a function that accepts a positive number N
the function shpuld console log a step shape
with N levels using the # character.
Make sure the step has spaces on the right side */

function steps(num) {
  for (let n = 0; n < num; n++) {
    //console.log("n:", n);
    for (let x = 0; x < num; x++) {
      //console.log("x", x);
      if (x <= n) {
        console.log("#");
      } else {
        console.log(" ");
      }
    }
  }
}

steps(4);
