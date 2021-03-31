/*write a function that accepts a positive number N
the function shpuld console log a step shape
with N levels using the # character.
Make sure the step has spaces on the right side */

function steps(num) {
  for (let n = 0; n < num; n++) {
    //console.log("n:", n);
    let figure = "";
    for (let x = 0; x < num; x++) {
      //console.log("x", x);
      if (x <= n) {
        figure += "#";
      } else {
        figure += " ";
      }
    }
    console.log(figure);
  }
}

steps(4);

/*This function has a quadratic time O(n^2) because it has two linear functions that
are nested. Therefore in this function needs to double the effort for every input as it 
needs to go through the input twice */
