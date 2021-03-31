/*the fibonacci series is an ordering of
 numbers where each number is the sum
 of the preceeding two
 [0,1,1,2,3,5,8,13,21,24]
 */

function fibonacci(num, pos) {
  let fib = [];
  let prev = 0; //0
  let after = 1; //1
  for (let n = 0; n <= num; n++) {
    let sum = prev + after;
    fib.push(sum);
    prev = after;
    after = sum;
    //console.log("n:", n);
    //console.log(`${prev} + ${after} = ${sum}`);
  }
  prev = after; // 1, 2, 3, 5...
  after = prev + after; // 2, 3, 5, 8...
  return console.log(
    `The fibonacci secuence for ${num} levels is [${fib}], the number in position ${pos} is ${fib[pos]}`
  );
}

fibonacci(10, 2);
