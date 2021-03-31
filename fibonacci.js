/*the fibonacci series is an ordering of
 numbers where each number is the sum
 of the preceeding two
 [0,1,1,2,3,5,8,13,21,24]
 */

function fibonacci(num, pos) {
  let fib = [0, 1];
  let prev = 0; //0
  let next = 1; //1
  for (let n = 0; n <= num; n++) {
    let sum = prev + next;
    fib.push(sum);
    prev = next;
    next = sum;
    //console.log("n:", n);
    //console.log(`${prev} + ${next} = ${sum}`);
  }
  prev = next; // 1, 2, 3, 5...
  next += prev; // 2, 3, 5, 8...
  return console.log(
    `The fibonacci secuence for ${num} levels is [${fib}], the number in position ${pos} is ${fib[pos]}`
  );
}

fibonacci(10, 4);
